<template>
  <d-box
    class="ui-text-field__wrapper d-file-picker-inline"
    :class="[`size__${computedInputSize}`, `variant__${variant}`]"
    v-if="variant === 'inline'"
  >
    <slot name="label">
      <d-box
        v-if="!!label && variant !== 'button'"
        is="label"
        :for="computedID"
      >
        <d-text
          margin-top="0px"
          class="ui-text-field__label"
          :class="labelClass"
          scale="subhead"
          :font-face="labelFontFace"
          :size="size"
        >
          {{ label }}
        </d-text>
      </d-box>
    </slot>

    <d-box display="inline-flex" class="pseudo-input" :class="{ disabled }">
      <d-box
        is="input"
        ref="file"
        v-bind="{ ...$attrs, ...$props }"
        :disabled="disabled"
        @change="updateName"
        :accept="computedAccepts"
        type="file"
        :id="computedID"
      />
      <d-box
        class="ui-text-field__input"
        :class="{ 'has-error': computedErrorMessage }"
        display="flex"
        align-items="center"
      >
        <d-text
          my0
          subhead
          :font-face="fontFace"
          :class="{
            placeholder: selectedFileName === placeholder,
          }"
          >{{ selectedFileName }}</d-text
        >
      </d-box>
      <d-box class="pseudo-button">
        <d-text subhead font-face="hero-new" my0>{{ btnText }}</d-text>
      </d-box>
    </d-box>
    <d-box v-if="computedErrorMessage" class="ui-text-field__error">
      <ErrorIcon height="16px" width="16px" class="ui-text-field__error-icon" />
      <d-text
        class="ui-text-field__error-text"
        scale="subhead"
        fontFace="circularSTD"
      >
        {{ computedErrorMessage }}
      </d-text>
    </d-box>
  </d-box>
  <d-box class="ui-text-field__wrapper d-file-picker-inline-btn" v-else>
    <d-box
      is="input"
      ref="file"
      v-bind="{ ...$attrs, ...$props }"
      :disabled="disabled"
      @change="updateName"
      :accept="computedAccepts"
      @mouseenter="toggleInputIsHovered(true)"
      @mouseleave="toggleInputIsHovered(false)"
      type="file"
    />
    <d-button :class="{ hover: inputIsHovered }" v-bind="$attrs">
      {{
        selectedFileName === placeholder
          ? btnText || placeholder
          : selectedFileName
      }}
    </d-button>
  </d-box>
</template>

<script setup>
import { DBox, DText, ErrorIcon, DButton } from "../main";
import inputProps from "../utils/props/inputProps";
import { useFilePicker } from "../utils/composables/useFilePicker";
import { computed, ref } from "vue";
import { useInputSize } from "../utils/composables/useInputSize";
import uniqueRandomString from "@/utils/uniqueRandomString";

const props = defineProps({
  ...inputProps,
  placeholder: {
    type: String,
    default: "No file selected...",
  },
  btnText: {
    type: String,
    default: "Choose File",
  },
  fileMaxSize: {
    type: [String, Number],
    default: 100,
  },
  maxFiles: {
    type: [String, Number],
    default: 1,
  },
  accepts: {
    type: [Array, String],
    default: () => [".csv", ".xls", ".xlsx", ".pdf"],
    validator: (value) => {
      if (typeof value === "string") {
        return value === "image" || value === "document" || value === "csv";
      } else {
        if (Array.isArray(value)) {
          return [...new Set(value)].length === value.length;
        } else return false;
      }
    },
  },
  variant: {
    type: String,
    default: "inline",
    validator: (value) => ["inline", "button"].includes(value),
  },
});

const emit = defineEmits(["change", "cleared"]);

const computedID = computed(() => (props.id ? props.id : uniqueRandomString()));

const { computedInputSize } = useInputSize(props);

const file = ref(null);
const inputIsHovered = ref(false);

const toggleInputIsHovered = (val) => (inputIsHovered.value = val);

const { updateName, computedErrorMessage, computedAccepts, selectedFileName } =
  useFilePicker(props, emit, file);
</script>

<style lang="scss" scoped>
@import "../scss/textfield";
.d-file-picker-inline {
  position: relative;
  cursor: pointer;
  &:hover {
    .pseudo-button {
      border-color: var(--light-primary-action-color);
      border-left-color: #ced6de;
    }
    .ui-text-field__input {
      border-color: var(--light-primary-action-color);
      border-right-color: #ced6de;
    }
  }
  input {
    opacity: 0;
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    z-index: 1;
    // &:active {
    //   & ~ * {
    //     box-shadow: 0 0 0 3px var(--primaryboxshadowcolor);
    //   }
    // }
  }
}
.pseudo-input {
  display: flex;
  position: relative;
  .ui-text-field__input {
    flex: 3;
    &.has-error {
      background: #fff0f2;
      border-color: #d62f4b;
      &.dark_mode {
        background: #350a12;
        border-color: #df5e74;
      }
    }
    &.dark_mode {
      .ui-text {
        &:not(.placeholder) {
          color: #ffffff;
        }
      }
    }
  }
  .pseudo-button {
    flex: 1;
  }
}
.pseudo-button {
  background: #f5f8fa;
  word-break: keep-all;
  white-space: nowrap;
  display: flex;
  align-items: center;
  border: 1px solid #ced6de;
  position: relative;
  left: -3px;
  border-radius: 0 6px 6px 0;
  padding-left: 32px;
  padding-right: 32px;
  &.dark_mode {
    background: var(--dark-input-border-color);
    border-color: var(--dark-input-border-color);
    .ui-text {
      color: #ffffff;
    }
  }
}

.d-file-picker-inline-btn {
  position: relative;
  display: inline-flex;
  input {
    position: absolute;
    opacity: 0;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    cursor: pointer;
    height: 100%;
    width: 100%;
    z-index: 10;
  }
}
</style>
