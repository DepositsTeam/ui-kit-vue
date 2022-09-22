<template>
  <d-box
    class="ui-text-field__wrapper d-file-picker-inline"
    :class="[`size__${size}`]"
    :style="{ ...d__theme }"
  >
    <d-box v-if="!!label" is="label">
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
    <d-box display="inline-flex" class="pseudo-input" :class="{ disabled }">
      <d-box
        is="input"
        v-bind="$attrs"
        :disabled="disabled"
        @change="updateName"
        type="file"
      />
      <d-box class="ui-text-field__input">
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
  </d-box>
</template>

<script setup>
import { DBox, DText } from "../main";
import { inject, ref, onMounted } from "vue";
import { defaultThemeVars } from "../providers/default-theme";
import inputProps from "../utils/inputProps";

const d__theme = inject("d__theme", defaultThemeVars);

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
});

const emit = defineEmits(["change"]);

const selectedFileName = ref("");

onMounted(() => {
  selectedFileName.value = props.placeholder;
});

const updateName = (e) => {
  let files = e.target.files || e.dataTransfer.files;
  selectedFileName.value = !files ? props.placeholder : files[0].name;
  emit("change", files[0]);
};
</script>

<style lang="scss" scoped>
@import "../scss/textfield";
.d-file-picker-inline {
  position: relative;
  cursor: pointer;
  &:hover {
    .pseudo-button {
      border-color: var(--lightPrimaryActionColor);
      border-left-color: #ced6de;
    }
    .ui-text-field__input {
      border-color: var(--lightPrimaryActionColor);
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
    background: var(--darkInputBorderColor);
    border-color: var(--darkInputBorderColor);
    .ui-text {
      color: #ffffff;
    }
  }
}
</style>
