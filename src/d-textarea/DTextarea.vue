<template>
  <d-box
    class="ui-text-field__wrapper ui-text-area__wrapper"
    :class="[`size__${size}`]"
    :style="{ ...d__theme }"
  >
    <d-box is="label" class="ui-text-area__label">
      <d-text
        margin-top="0px"
        :class="labelClass"
        scale="subhead"
        class="ui-text-area__label"
        :font-face="labelFontFace"
      >
        {{ label }}
      </d-text>
    </d-box>
    <d-box
      class="ui-text-area__textarea ui-text-field__input"
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
    >
      {{ modelValue }}
    </d-box>

    <div v-if="errorMessage" class="ui-text-area__error">
      <ErrorIcon class="ui-text-area__error-icon" />
      <d-text
        class="ui-text-area__error-text"
        scale="subhead"
        font-face="circularSTD"
      >
        {{ errorMessage }}
      </d-text>
    </div>
  </d-box>
</template>

<script setup>
import { DBox, DText, ErrorIcon } from "../main";
import { inject, nextTick } from "vue";
import { defaultThemeVars } from "../providers/default-theme";
import inputProps from "../utils/inputProps";

const d__theme = inject("d__theme", defaultThemeVars);

defineProps({
  ...inputProps,
  textAreaClassName: {
    type: String,
  },
});

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
  min-height: 50px;

  &::placeholder {
    color: #b8c4ce;
  }

  &.dark_mode {
    background: var(--darkInputBackgroundColor);
    border-color: var(--darkInputBorderColor);
    color: #ffffff;
    &::placeholder {
      color: var(--darkInputLabelColor);
    }
  }

  &:hover:not(:disabled):not([disabled]):not(.has-error) {
    border-color: #0db9e9;
    &.dark_mode {
      border-color: var(--darkPrimaryActionColor);
    }
  }

  &:focus:not(:disabled):not([disabled]):not(.has-error) {
    border-color: #0db9e9;
    box-shadow: 0px 0px 0px 3px rgba(67, 210, 250, 0.25);
    outline: none;
    &.dark_mode {
      border-color: var(--darkPrimaryActionColor);
      box-shadow: 0 0 0 3px var(--darkPrimaryActionBoxShadowColor);
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
      background: var(--darkInputDisabledColor);
      border-color: var(--darkInputBorderColor);
      color: var(--darkInputDisabledTextColor);
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
    color: var(--darkInputLabelColor);
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
  height: 12px;
  width: 12px;
  margin-right: 5px;
}
</style>
