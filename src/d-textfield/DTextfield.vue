<template>
  <d-box class="ui-text-field__wrapper" :class="[`size__${size}`]">
    <d-box v-if="!invisible" is="label">
      <d-text
        margin-top="0px"
        class="ui-text-field__label"
        :class="labelClass"
        scale="subhead"
      >
        {{ label }}
      </d-text>
    </d-box>
    <d-box class="ui-text-field__input-wrapper">
      <component
        :is="leftIcon"
        v-if="leftIcon && !invisible"
        class="ui-text-field__left-icon"
      ></component>
      <d-box
        class="ui-text-field__input"
        :class="{
          'has-error': errorMessage,
          'has-left-icon': leftIcon,
          'has-right-icon': dropDown || rightIcon,
          invisible,
          disabled,
        }"
        :disabled="disabled"
        is="input"
        v-bind="$attrs"
        :value="modelValue"
        @change="handleChangeEvents"
        @input="handleInputEvents"
        @keydown="handleKeydownEvent"
        @keyup="handleKeyupEvent"
        @keypress="handleKeypressEvent"
        @focus="handleFocusEvent"
        @blur="handleBlurEvent"
      />
      <component
        class="ui-text-field__right-icon"
        v-if="(dropDown || rightIcon) && !invisible"
        :is="dropDown ? ChevronFilledDownIcon : rightIcon"
      ></component>
    </d-box>
    <d-box v-if="errorMessage && !invisible" class="ui-text-field__error">
      <ErrorIcon class="ui-text-field__error-icon" />
      <d-text
        class="ui-text-field__error-text"
        scale="subhead"
        fontFace="circularSTD"
      >
        {{ errorMessage }}
      </d-text>
    </d-box>
  </d-box>
</template>

<script>
import DBox from "../d-box/DBox.vue";
import DText from "../d-text/DText.vue";
import ErrorIcon from "../icons/ErrorIcon.vue";
import ChevronFilledDownIcon from "../icons/ChevronFilledDownIcon.vue";
import { allowOnlyNumbers } from "../utils/allowOnlyNumbers";
export default {
  name: "DTextfield",
  emits: [
    "update:modelValue",
    "change",
    "input",
    "keydown",
    "keyup",
    "keypress",
    "focus",
    "blur",
  ],
  components: {
    ErrorIcon,
    ChevronFilledDownIcon,
    DBox,
    DText,
  },
  props: {
    label: {
      type: String,
    },
    dropDown: {
      type: Boolean,
    },
    size: {
      type: String,
      default: "huge",
      validator: (value) =>
        ["small", "medium", "large", "xlarge", "huge", "massive"].includes(
          value
        ),
    },
    errorMessage: {
      type: String,
    },
    rightIcon: {
      type: Object,
    },
    leftIcon: {
      type: Object,
    },
    modelValue: {
      type: String,
    },
    onlyNumbers: {
      type: Boolean,
    },
    wrapperClass: {
      type: String,
    },
    invisible: {
      type: Boolean,
    },
    labelClass: {
      type: [String, Object, Array],
    },
    disabled: Boolean,
    currency: {
      type: Boolean,
    },
  },
  methods: {
    handleKeyEvents(e) {
      if (this.onlyNumbers) {
        return allowOnlyNumbers(e);
      }
    },
    handleInputEvents(e) {
      this.$emit("update:modelValue", e.target.value);
      this.$emit("input", e.target.value);
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
};
</script>

<style lang="scss">
@import "../scss/textfield";
</style>
