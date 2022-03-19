<template>
  <d-box class="ui-text-field__wrapper" :class="[`size__${size}`]">
    <d-box v-if="!invisible" is="label">
      <d-text class="ui-text-field__label" scale="subhead">
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
        }"
        is="input"
        v-bind="$attrs"
        :value="modelValue"
        @input="(e) => $emit('update:modelValue', e.target.value)"
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
  emits: ["update:modelValue"],
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
  },
  methods: {
    handleKeyEvents(e) {
      if (this.onlyNumbers) {
        return allowOnlyNumbers(e);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/textfield";
</style>
