<template>
  <d-box
    class="ui-text-field__wrapper ui-text-area__wrapper"
    :class="[`size__${size}`]"
    :style="{ ...theme }"
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

<script>
import DBox from "../d-box/DBox.vue";
import DText from "../d-text/DText.vue";
import ErrorIcon from "../icons/ErrorIcon.vue";
import { inject } from "vue";
import defaultTheme from "../providers/default-theme";
import inputProps from "../utils/inputProps";

export default {
  name: "DTextarea",
  components: {
    DBox,
    ErrorIcon,
    DText,
  },
  props: {
    ...inputProps,
    textAreaClassName: {
      type: String,
    },
  },
  mounted() {
  },  
  methods: {
    handleInputEvents(e) {
      this.$emit("update:modelValue", e.target.value);
      this.$emit("input", e.target.value);
      this.$nextTick(() => {
       
      })
    },
    handleChangeEvents(e) {
      this.$emit("change", e.target.value);
    },
    handleKeydownEvent(e) {
      this.$emit("keydown", e);
    },
    handleKeyupEvent(e) {
      this.$emit("keyup", e);
    },
    handleKeypressEvent(e) {
      this.$emit("keypress", e);
    },
    handleFocusEvent(e) {
      this.$emit("focus", e);
    },
    handleBlurEvent(e) {
      this.$emit("blur", e);
    },
  },
  setup() {
    const theme = inject("theme", defaultTheme);
    return { theme };
  },
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
  box-shadow: 0px 1px 2px rgba(63, 63, 68, 0.1);
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

  &:hover:not(:disabled):not([disabled]):not(.has-error) {
    border-color: #0db9e9;
  }

  &:focus:not(:disabled):not([disabled]):not(.has-error) {
    border-color: #0db9e9;
    box-shadow: 0px 0px 0px 3px rgba(67, 210, 250, 0.25);
    outline: none;
  }
  &:focus {
    outline: none;
  }

  &:disabled {
    background: rgba(245, 248, 250, 0.5);
    color: #e1e7ec;
    cursor: not-allowed;
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
