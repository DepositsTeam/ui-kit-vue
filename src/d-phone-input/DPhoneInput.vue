<template>
  <d-box
    class="ui-text-field__wrapper"
    :class="{
      [`size__${computedInputSize}`]: true,
      disabled,
      'has-error': localErrorMessage || errorMessage,
    }"
  >
    <slot name="label">
      <d-box is="label" :for="computedID">
        <d-text
          my0
          :class="labelClass"
          :font-face="labelFontFace"
          class="ui-text-field__label"
          scale="subhead"
        >
          {{ label }}
        </d-text>
      </d-box>
    </slot>

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
        :disabled="isUs || disabled"
        v-model="countryCode"
        @focus="updateCountryCodeIsFocused(true)"
        @blur="updateCountryCodeIsFocused(false)"
      />
      <d-box
        class="ui-text-field__input"
        invisible
        is="input"
        :class="{
          'has-error': localErrorMessage || errorMessage,
          'has-left-icon': leftIcon,
          'has-right-icon': rightIcon,
          focus: countryCodeIsFocused,
          disabled,
        }"
        :disabled="disabled"
        v-bind="$attrs"
        v-model="number"
        @keypress="allowOnlyNumbers"
        :id="computedID"
      />
    </d-box>
    <error-message
      v-if="computedErrorMessage"
      :error-message="computedErrorMessage"
    />
  </d-box>
</template>

<script setup>
import { DBox, DText } from "../main";
import { computed, onMounted, ref, watch } from "vue";
import inputProps from "@/utils/props/inputProps";
import countryCodes from "@/utils/country_codes_grouped.json";
import { AsYouType, formatIncompletePhoneNumber } from "libphonenumber-js";
import { allowOnlyNumbers } from "@/utils/allowOnlyNumbers";
import { useInputSize } from "@/utils/composables/useInputSize";
import uniqueRandomString from "@/utils/uniqueRandomString";
import ErrorMessage from "@/composed-components/forms/ErrorMessage.vue";

const countryCodeIsFocused = ref(false);
const phoneInputRef = ref(null);

const computedID = computed(() => (props.id ? props.id : uniqueRandomString()));

const emit = defineEmits([
  "update:code",
  "update:phoneNumber",
  "local-error-changed",
]);

const props = defineProps({
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
  isUs: {
    type: Boolean,
  },
});

const { computedInputSize } = useInputSize(props);

const countryCode = computed({
  get() {
    return props.code;
  },
  set(value) {
    emit("update:code", value);
  },
});

const number = computed({
  get() {
    if (props.phoneNumber) {
      if (props.isUs) {
        const asYouType = new AsYouType({
          defaultCountry: countryCodes["+1"][1],
        });
        asYouType.input(props.phoneNumber);
        emit("update:phoneNumber", asYouType.getNationalNumber());
        return asYouType.getNumber().formatNational();
      } else {
        if (countryCode.value && countryCodes[countryCode.value]) {
          const asYouType = new AsYouType({
            defaultCountry: countryCodes[countryCode.value][0],
          });
          asYouType.input(props.phoneNumber);
          emit("update:phoneNumber", asYouType.getNationalNumber());
          return asYouType.getNumber().formatNational();
        } else {
          emit(
            "update:phoneNumber",
            formatIncompletePhoneNumber(props.phoneNumber)
          );
          return formatIncompletePhoneNumber(props.phoneNumber);
        }
      }
    } else {
      return "";
    }
  },
  set(value) {
    emit("update:phoneNumber", value);
  },
});

const localErrorMessage = computed(() => {
  if (countryCode.value.length && !countryCodes[countryCode.value]) {
    return "Please enter a valid country code";
  } else {
    if (props.phoneNumber && props.phoneNumber.length) {
      if (countryCode.value && countryCode.value.length) {
        const asYouType = new AsYouType({
          defaultCountry: countryCodes[countryCode.value][0],
        });
        asYouType.input(props.phoneNumber);
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
});

const computedErrorMessage = computed(() =>
  localErrorMessage.value ? localErrorMessage.value : props.errorMessage
);

const updateCountryCodeIsFocused = (value) => {
  countryCodeIsFocused.value = value;
};

const resizeCountryCodeAutomatically = () => {
  const elem = phoneInputRef.value.$el;
  const value = props.code;
  elem.style.width = "calc(" + (value.length ? value.length : 1) + "ch + 4px)";
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
    "calc(" + (value.length >= 2 ? value.length : 2) + "ch + " + offset + "px)";
};

const resizeCountryCodeOnType = (elem) => {
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
};

onMounted(() => {
  resizeCountryCodeAutomatically();
  if (props.isUs) {
    emit("update:code", "+1");
  }
  // if (props.phoneNumber) {
  //   if (props.isUs) {
  //     const asYouType = new AsYouType({
  //       defaultCountry: countryCodes["+1"][1],
  //     });
  //     asYouType.input(props.phoneNumber);w
  //     emit("update:phoneNumber", asYouType.getNumber().nationalNumber);
  //   } else {
  //     if (countryCode.value && countryCodes[countryCode.value]) {
  //       const asYouType = new AsYouType({
  //         defaultCountry: countryCodes[countryCode.value][0],
  //       });
  //       asYouType.input(props.phoneNumber);
  //       emit("update:phoneNumber", asYouType.getNumber().nationalNumber);
  //     } else {
  //       emit(
  //         "update:phoneNumber",
  //         formatIncompletePhoneNumber(props.phoneNumber)
  //       );
  //     }
  //   }
  // }
});

watch(
  () => props.code,
  () => {
    resizeCountryCodeAutomatically();
  }
);

watch(localErrorMessage, (val) => {
  emit("local-error-changed", !!val);
});
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

  &.dark_mode {
    background: var(--dark-input-background-color);
    color: #fff;
  }

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

  &.dark_mode {
    background: var(--dark-input-disabled-color);
    color: var(--dark-input-label-color);
  }
}

.ui-text-field__input.has-error + .ui-text-field__country-code {
  background: #fff0f2;

  &.dark_mode {
    background: #350a12;
  }
}

.ui-text-field__wrapper {
  &.has-error .ui-text-field__country-code {
    background: #fff0f2;

    &.dark_mode {
      background: #350a12;
    }
  }

  &.disabled .ui-text-field__country-code {
    background: #edeeef;
    cursor: not-allowed;

    &.dark_mode {
      background: var(--dark-input-disabled-color);
      color: var(--dark-input-label-color);
    }
  }
}

.ui-text-field__country-code {
  background: transparent !important;

  &:disabled {
    cursor: not-allowed;
  }
}
</style>
