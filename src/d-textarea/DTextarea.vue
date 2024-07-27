<template>
  <d-box
    class="ui-text-field__wrapper ui-text-area__wrapper"
    :class="[`size__${computedInputSize}`]"
    :width="width"
  >
    <slot name="label">
      <d-label
        v-if="!!label && !invisible"
        :label-class="labelClass"
        :html-for="computedID"
        :label-font-face="labelFontFace"
      >
        {{ label }}
      </d-label>
    </slot>

    <d-box
      class="ui-text-area__textarea"
      :class="{
        'has-error': errorMessage,
        [textAreaClassName]: textAreaClassName,
      }"
      is="textarea"
      :value="modelValue"
      :font-face="fontFace"
      @change="handleChangeEvents"
      @input="handleInputEvents"
      @keydown="handleKeydownEvent"
      @keyup="handleKeyupEvent"
      @keypress="handleKeypressEvent"
      @focus="handleFocusEvent"
      @blur="handleBlurEvent"
      :disabled="disabled"
      :rows="rows"
      :min-height="minHeight"
      :max-height="maxHeight"
      :id="computedID"
    >
      {{ modelValue }}
    </d-box>

    <error-message v-if="errorMessage" :error-message="errorMessage" />
  </d-box>
</template>

<script setup>
import { DBox } from "../main";
import { computed, nextTick } from "vue";
import inputProps from "../utils/props/inputProps";
import { useInputSize } from "@/utils/composables/useInputSize";
import uniqueRandomString from "@/utils/uniqueRandomString";
import ErrorMessage from "@/components/forms/DErrorMessage.vue";
import DLabel from "@/components/forms/DLabel.vue";

const props = defineProps({
  ...inputProps,
  textAreaClassName: {
    type: String,
  },
  rows: {
    type: String,
  },
  minHeight: {
    type: String,
    default: "50px",
  },
  maxHeight: {
    type: String,
  },
  maxWidth: {
    type: String,
  },
  width: {
    type: String,
    default: "100%",
  },
});

const { computedInputSize } = useInputSize(props);

const computedID = computed(() => (props.id ? props.id : uniqueRandomString()));

const emit = defineEmits([
  "update:modelValue",
  "input",
  "change",
  "keydown",
  "keyup",
  "keypress",
  "focus",
  "blur",
]);

const handleInputEvents = (e) => {
  emit("update:modelValue", e.target.value);
  emit("input", e.target.value);
  nextTick(() => {});
};

const handleChangeEvents = (e) => {
  emit("change", e.target.value);
};

const handleKeydownEvent = (e) => {
  emit("keydown", e);
};

const handleKeyupEvent = (e) => {
  emit("keyup", e);
};

const handleKeypressEvent = (e) => {
  emit("keypress", e);
};

const handleFocusEvent = (e) => {
  emit("focus", e);
};

const handleBlurEvent = (e) => {
  emit("blur", e);
};
</script>

<style lang="scss" scoped>
@import "../scss/textfield";

.ui-text-field__wrapper {
  display: inline-block;
}

.ui-text-area__textarea {
  border-radius: 6px;
  background: #ffffff;
  border: 1px solid #ced6de;
  box-shadow: 0 1px 2px rgba(63, 63, 68, 0.1);
  padding: 12px 12px 24px 12px;
  font-family: "Circular Std", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  width: 100%;
  color: #444;

  &::placeholder {
    color: #b8c4ce;
  }

  &.dark_mode {
    background: var(--dark-input-background-color);
    border-color: var(--dark-input-border-color);
    color: #ffffff;

    &::placeholder {
      color: var(--dark-input-label-color);
    }
  }

  &:hover:not(:disabled):not([disabled]):not(.has-error) {
    border-color: #0db9e9;

    &.dark_mode {
      border-color: var(--dark-primary-action-color);
    }
  }

  &:focus:not(:disabled):not([disabled]):not(.has-error) {
    border-color: #0db9e9;
    box-shadow: 0 0 0 3px rgba(67, 210, 250, 0.25);
    outline: none;

    &.dark_mode {
      border-color: var(--dark-primary-action-color);
      box-shadow: 0 0 0 3px var(--dark-primary-action-box-shadow-color);
    }
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    background: rgba(245, 248, 250, 0.5);
    color: #e1e7ec;
    cursor: not-allowed;

    &.dark_mode {
      background: var(--dark-input-disabled-color);
      border-color: var(--dark-input-border-color);
      color: var(--dark-input-disabled-text-color);
    }
  }
}

.ui-text-area::placeholder:disabled {
  color: #e1e7ec;
}

.ui-text-area__label {
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 16px;
  color: #212934;

  &.dark_mode {
    color: var(--dark-input-label-color);
  }
}

.ui-text-area::placeholder {
  color: #b8c4ce;
}

.ui-text-area__error {
  display: flex;
  align-items: center;
  color: #d62f4b;
}

.ui-text-area__textarea.has-error {
  background: #fff0f2;
  border-color: #d62f4b;

  &.dark_mode {
    background: #350a12;
    border-color: #df5e74;
  }
}

.ui-text-area__error-text {
  margin: 0;
}

.ui-text-area__error-icon {
  margin-right: 5px;
}
</style>
