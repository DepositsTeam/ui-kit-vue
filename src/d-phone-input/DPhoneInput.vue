<template>
  <d-box
    class="ui-text-field__wrapper"
    :class="{
      [`size__${size}`]: true,
      disabled,
      'has-error': errorMessage,
    }"
    :style="{ ...theme }"
  >
    <d-box is="label">
      <d-text
        :class="labelClass"
        :font-face="labelFontFace"
        class="ui-text-field__label"
        scale="subhead"
      >
        {{ label }}
      </d-text>
    </d-box>
    <d-box
      :class="{ disabled }"
      class="ui-text-field__input-wrapper ui-text-field__phone-input"
    >
      <d-box
        @input="resizeCountryCodeOnType"
        invisible
        is="input"
        class="ui-text-field__country-code"
        placeholder="+1"
        ref="phoneInputRef"
        :maxLength="4"
        :disabled="disabled"
        v-model="countryCode"
        @focus="updateCountryCodeIsFocused(true)"
        @blur="updateCountryCodeIsFocused(false)"
      />
      <d-box
        class="ui-text-field__input"
        invisible
        is="input"
        :class="{
          'has-error': errorMessage,
          'has-left-icon': leftIcon,
          'has-right-icon': rightIcon,
          focus: countryCodeIsFocused,
          disabled,
        }"
        :disabled="disabled"
        v-bind="$attrs"
        v-model="number"
        @keypress="allowOnlyNumbers"
      />
    </d-box>
    <div v-if="localErrorMessage || errorMessage" class="ui-text-field__error">
      <ErrorIcon class="ui-text-field__error-icon" />
      <d-text
        class="ui-text-field__error-text"
        scale="subhead"
        font-face="circularSTD"
      >
        <span v-if="localErrorMessage">
          {{ localErrorMessage }}
        </span>
        <span v-else>
          {{ errorMessage }}
        </span>
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
import countryCodes from "../utils/country_codes_grouped.json";
import { AsYouType, formatIncompletePhoneNumber } from "libphonenumber-js";
import { allowOnlyNumbers } from "../utils/allowOnlyNumbers";
export default {
  name: "DPhoneInput",
  components: {
    DBox,
    DText,
    ErrorIcon,
  },
  data: () => ({
    countryCodeIsFocused: false,
  }),
  emits: ["update:code", "update:phoneNumber"],
  props: {
    ...inputProps,
    code: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    leftIcon: {
      type: Object,
    },
    rightIcon: {
      type: Object,
    },
  },
  computed: {
    number: {
      get() {
        if (this.phoneNumber) {
          if (this.countryCode && countryCodes[this.countryCode]) {
            const asYouType = new AsYouType({
              defaultCountry: countryCodes[this.countryCode][0],
            }).input(this.phoneNumber);
            return asYouType;
          } else {
            return formatIncompletePhoneNumber(this.phoneNumber);
          }
        } else {
          return "";
        }
      },
      set(value) {
        // console.log(
        //   new AsYouType({ defaultCountry: countryCodes[this.countryCode][0] }).input(value)
        // );
        this.$emit("update:phoneNumber", value);
      },
    },
    countryCode: {
      get() {
        return this.code;
      },
      set(value) {
        this.$emit("update:code", value);
      },
    },
    localErrorMessage() {
      if (this.countryCode.length && !countryCodes[this.countryCode]) {
        return "Please enter a valid country code";
      } else {
        if (this.phoneNumber && this.phoneNumber.length) {
          if (this.countryCode && this.countryCode.length) {
            const asYouType = new AsYouType({
              defaultCountry: countryCodes[this.countryCode][0],
            });
            asYouType.input(this.phoneNumber);
            if (asYouType.getNumber() && asYouType.getNumber().isPossible()) {
              return "";
            } else {
              return "Please enter a valid phone number";
            }
          } else {
            return "";
          }
        } else {
          return "";
        }
      }
    },
  },
  mounted: function () {
    this.resizeCountryCodeAutomatically();
  },
  methods: {
    allowOnlyNumbers,
    updateCountryCodeIsFocused: function (value) {
      this.countryCodeIsFocused = value;
    },
    resizeCountryCodeAutomatically: function () {
      const elem = this.$refs.phoneInputRef.$el;
      const value = this.code;
      elem.style.width = "calc(" + (value.length + 2) + "ch + 4px)";
      const wrapper = elem.closest(".ui-text-field__wrapper");
      let offset;
      if (wrapper.classList.contains("size__small")) {
        offset = 16;
      } else if (wrapper.classList.contains("size__xlarge")) {
        offset = 20;
      } else {
        offset = 26;
      }
      elem.nextSibling.style.paddingLeft =
        "calc(" + (value.length <= 1 ? 3 : 4) + "ch + " + offset + "px)";
    },
    resizeCountryCodeOnType: function (elem) {
      const value = elem.target.value;
      elem.target.style.width = "calc(" + value.length + "ch + 4px)";
      const wrapper = elem.target.closest(".ui-text-field__wrapper");
      let offset;
      if (wrapper.classList.contains("size__small")) {
        offset = 16;
      } else if (wrapper.classList.contains("size__xlarge")) {
        offset = 20;
      } else {
        offset = 26;
      }
      elem.target.nextSibling.style.paddingLeft =
        "calc(" + (value.length <= 1 ? 3 : 4) + "ch + " + offset + "px)";
    },
  },
  watch: {
    code: function () {
      this.resizeCountryCodeAutomatically();
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

.ui-text-field__phone-input .ui-text-field__country-code {
  position: absolute;
  border: 1px solid transparent;
  left: 18px;
  border-right: 1px solid #e1e7ec;
  border-radius: 1px;
  padding: 0 4px 0 0;
  display: inline-block;
  max-width: calc(4ch + 4px);
  min-width: calc(2ch + 4px);
  width: calc(2ch + 4px);
  font-size: 16px;
  line-height: 16px;
  outline: none;
  font-family: "Circular Std", sans-serif;
  color: #212934;

  &::placeholder {
    color: #b8c4ce;
  }
}
.ui-text-field__wrapper {
  &.size__small .ui-text-field__phone-input .ui-text-field__input {
    padding-left: calc(2ch + 16px);
  }
  &.size__medium .ui-text-field__phone-input .ui-text-field__input,
  &.size__large .ui-text-field__phone-input .ui-text-field__input {
    padding-left: calc(2ch + 26px);
  }
  &.size__xlarge .ui-text-field__phone-input .ui-text-field__input {
    padding-left: calc(2ch + 20px);
  }
  &.size__huge .ui-text-field__phone-input .ui-text-field__input,
  &.size__massive .ui-text-field__phone-input .ui-text-field__input {
    padding-left: calc(2ch + 26px);
  }
  &.size__small .ui-text-field__phone-input .ui-text-field__country-code {
    font-size: 12px;
    line-height: 12px;
    left: 8px;
  }
  &.size__xlarge .ui-text-field__phone-input .ui-text-field__country-code,
  &.size__large .ui-text-field__left-icon,
  &.size__medium .ui-text-field__left-icon {
    left: 12px;
  }
}
.ui-text-field__input:disabled + .ui-text-field__country-code,
.ui-text-field[disabled] + .ui-text-field__country-code {
  background: #edeeef;
  cursor: not-allowed;
}
.ui-text-field__input.has-error + .ui-text-field__country-code {
  background: #fff0f2;
}
.ui-text-field__wrapper {
  &.has-error .ui-text-field__country-code {
    background: #fff0f2;
  }
  &.disabled .ui-text-field__country-code {
    background: #edeeef;
    cursor: not-allowed;
  }
}
</style>
