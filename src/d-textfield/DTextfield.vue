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
        @click="emitLeftIconClicked"
      ></component>
      <d-box
        class="ui-text-field__input"
        :class="{
          'has-error': showError || errorMessage,
          'has-left-icon': leftIcon,
          'has-right-icon': dropDown || rightIcon,
          invisible,
          disabled,
          oneCharWide,
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
        :type="localType"
      />
      <component
        class="ui-text-field__right-icon"
        v-if="isPassword || ((dropDown || rightIcon) && !invisible)"
        :is="
          isPassword
            ? passwordIcon
            : dropDown
            ? ChevronFilledDownIcon
            : rightIcon
        "
        @click="emitRightIconClicked"
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
import NoEyeFilledIcon from "../icons/filled/NoEyeFilledIcon.vue";
import EyeFilledIcon from "../icons/filled/EyeFilledIcon.vue";
import { allowOnlyNumbers, currencies } from "../utils/allowOnlyNumbers";
import { inject } from "vue";
import defaultTheme from "../providers/default-theme";
import number_format from "../utils/number_format";
import inputProps from "../utils/inputProps";

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
    "leftIconClicked",
    "rightIconClicked",
  ],
  components: {
    ErrorIcon,
    ChevronFilledDownIcon,
    DBox,
    DText,
  },
  props: {
    ...inputProps,
    dropDown: {
      type: Boolean,
    },
    rightIcon: {
      type: Object,
    },
    leftIcon: {
      type: Object,
    },
    currency: {
      type: Boolean,
    },
    emitOnlyCurrencyValue: {
      type: Boolean,
    },
    oneCharWide: Boolean,
    isPassword: Boolean,
    type: {
      type: String,
      default: "text",
    },
  },
  data: () => ({
    localType: "text",
  }),
  computed: {
    passwordIcon: function () {
      return this.localType === "text" ? EyeFilledIcon : NoEyeFilledIcon;
    },
  },
  mounted() {
    this.localType = this.type;
    if (this.isPassword) {
      this.localType = "password";
    }
  },
  methods: {
    emitLeftIconClicked(e) {
      this.$emit("leftIconClicked", e);
    },
    emitRightIconClicked(e) {
      if (this.isPassword) {
        this.localType = this.localType === "text" ? "password" : "text";
      }
      this.$emit("rightIconClicked", e);
    },
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
        this.$emit("update:modelValue", e.target.value);
      }
      this.$emit("input", e.target.value);
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
        if (e.target.value) {
          this.$emit(
            "update:modelValue",
            `$${number_format(
              parseFloat(
                e.target.value.split(",").join("").replaceAll("$", "")
              ),
              2
            )}`
          );
        } else {
          this.$emit("update:modelValue", "$0.00");
        }
      }
    },
  },
  setup() {
    const theme = inject("theme", defaultTheme);
    return { theme, ChevronFilledDownIcon };
  },
};
</script>

<style lang="scss">
@import "../scss/textfield";
</style>
