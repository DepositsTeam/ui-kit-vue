<template>
  <d-box class="ui-text-field__wrapper" :class="[`size__${size}`]">
    <d-box v-if="!!label && !invisible" is="label">
      <d-text
        margin-top="0px"
        class="ui-text-field__label"
        :class="labelClass"
        scale="subhead"
        :font-face="labelFontFace"
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
        :style="{ ...theme }"
        :font-face="fontFace"
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
import { allowOnlyNumbers, currencies } from "../utils/allowOnlyNumbers";
import { inject } from "vue";
import defaultTheme from "../providers/default-theme";
import number_format from "../utils/number_format";

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
    fontFace: {
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
    emitOnlyCurrencyValue: {
      type: Boolean,
    },
    labelFontFace: {
      type: String,
    },
  },
  methods: {
    handleKeyEvents(e) {
      if (this.onlyNumbers) {
        return allowOnlyNumbers(e);
      }
      if (this.currency) {
        return currencies(e);
      }
    },
    handleInputEvents(e) {
      if (this.currency) {
        let value = e.target.value,
          temp,
          regex = new RegExp(/^[0-9]*(\.[0-9]{0,2})?$/);
        if (!regex.test(value)) {
          temp = value.split("");
          let tested = "";
          for (var i = 0; i < temp.length; i++) {
            tested += temp[i];
            if (regex.test(tested)) {
              continue;
            } else {
              e.target.value = tested.substr(0, i);
              if (this.emitOnlyCurrencyValue) {
                this.$emit(
                  "update:modelValue",
                  tested.substr(0, i).replaceAll("$", "").replaceAll(",", "")
                );
              } else {
                this.$emit("update:modelValue", tested.substr(0, i));
              }
              return;
            }
          }
        } else {
          if (this.emitOnlyCurrencyValue) {
            this.$emit(
              "update:modelValue",
              e.target.value.replaceAll("$", "").replaceAll(",", "")
            );
          } else {
            this.$emit("update:modelValue", e.target.value);
          }
        }
      } else {
        if (this.emitOnlyCurrencyValue) {
          this.$emit(
            "update:modelValue",
            e.target.value.replaceAll("$", "").replaceAll(",", "")
          );
        } else {
          this.$emit("update:modelValue", e.target.value);
        }
        this.$emit("input", e.target.value);
      }
    },
    handleChangeEvents(e) {
      this.$emit("change", e.target.value);
    },
    handleKeydownEvent(e) {
      this.$emit("keydown", e);
      return this.handleKeyEvents(e);
    },
    handleKeyupEvent(e) {
      this.$emit("keyup", e);
      return this.handleKeyEvents(e);
    },
    handleKeypressEvent(e) {
      this.$emit("keypress", e);
      return this.handleKeyEvents(e);
    },
    handleFocusEvent(e) {
      this.$emit("focus", e);
      if (this.currency) {
        if (this.emitOnlyCurrencyValue) {
          this.$emit(
            "update:modelValue",
            e.target.value.substring(1).replaceAll("$", "").replaceAll(",", "")
          );
        } else {
          this.$emit("update:modelValue", e.target.value.substring(1));
        }
      }
    },
    handleBlurEvent(e) {
      this.$emit("blur", e);
      if (this.currency) {
        this.$emit(
          "update:modelValue",
          `$${number_format(
            parseFloat(e.target.value.split(",").join("").replaceAll("$", "")),
            2
          )}`
        );
      } else {
        this.$emit("update:modelValue", "$0.00");
      }
    },
  },
  setup() {
    const theme = inject("theme", defaultTheme);
    return { theme };
  },
};
</script>

<style lang="scss">
@import "../scss/textfield";
</style>
