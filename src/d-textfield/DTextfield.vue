<template>
  <d-box class="ui-text-field__wrapper" :class="[`size__${computedInputSize}`]">
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

    <d-auto-layout
      class="ui-text-field__wrapper_wrapper"
      item-spacing="0"
      alignment="center-left"
      :class="{
        focused,
        notVisible: invisible,
        'has-error': showError || errorMessage,
        pill,
      }"
    >
      <d-box
        v-if="$slots.leftSection || $slots['left-section']"
        class="ui-text-field__input-section left"
        :class="{ focused }"
      >
        <slot name="left-section" v-if="$slots['left-section']"></slot>
        <slot name="leftSection" v-else-if="$slots.leftSection"></slot>
      </d-box>
      <d-box class="ui-text-field__input-wrapper">
        <d-box
          v-if="leftIcon || $slots.leftIcon || $slots['left-icon']"
          class="ui-text-field__left-icon"
          @click="emitLeftIconClicked"
        >
          <slot name="leftIcon" v-if="$slots.leftIcon">
            <component v-if="leftIcon" tabindex="-1" :is="leftIcon"></component>
          </slot>
          <slot name="left-icon" v-else>
            <component v-if="leftIcon" tabindex="-1" :is="leftIcon"></component>
          </slot>
        </d-box>

        <d-box
          class="ui-text-field__input no-focus-hover-indicator"
          :class="{
            'has-error': showError || errorMessage,
            'has-left-icon': leftIcon || $slots.leftIcon || $slots['left-icon'],
            'has-right-icon':
              dropDown ||
              isPassword ||
              isStrongPassword ||
              copyMode ||
              rightIcon ||
              $slots.rightIcon ||
              $slots['right-icon'],
            'has-left-section': $slots.leftSection || $slots['left-section'],
            'has-right-section': $slots.rightSection || $slots['right-section'],
            notVisible: invisible,
            disabled,
            oneCharWide,
            [inputClass]: true,
          }"
          :id="computedID"
          ref="inputField"
          :max="max"
          :min="min"
          :maxlength="maximumLength"
          :multiple="multiple"
          :minlength="minlength"
          :disabled="disabled"
          :name="name"
          :pattern="pattern"
          :readonly="readonly"
          is="input"
          :value="modelValue"
          @change="handleChangeEvents"
          @input="handleInputEvents"
          @keydown="handleKeydownEvent"
          @keyup="handleKeyupEvent"
          @keypress="handleKeypressEvent"
          @focus="handleFocusEvent"
          @blur="handleBlurEvent"
          @paste="handlePasteEvent"
          :font-face="computedFontFace"
          :type="localType"
          :autocomplete="autocomplete"
          :form="form"
          :list="list"
          :placeholder="placeholder"
          :required="required"
          :step="step"
          :autofocus="autofocus"
          marginLeft="0"
          marginRight="0"
          marginX="0"
          marginY="0"
          marginTop="0"
          marginBottom="0"
          width="100%"
        />
        <d-box
          v-if="showRightIcon || $slots.rightIcon || $slots['right-icon']"
          class="ui-text-field__right-icon"
          @click="emitRightIconClicked"
        >
          <slot name="rightIcon" v-if="rightIcon">
            <component tabindex="-1" :is="computedRightIcon"></component>
          </slot>
          <slot name="right-icon" v-else>
            <component tabindex="-1" :is="computedRightIcon"></component>
          </slot>
        </d-box>
      </d-box>
      <d-box
        v-if="$slots.rightSection || $slots['right-section']"
        class="ui-text-field__input-section right"
        :class="{ focused }"
      >
        <slot name="right-section" v-if="$slots['right-section']"></slot>
        <slot name="rightSection" v-else-if="$slots.rightSection"></slot>
      </d-box>
    </d-auto-layout>

    <d-box
      display="flex"
      margin-top="8px"
      v-if="isStrongPassword"
      align-items="center"
      justify-content="space-between"
      class="password-strength-indicator"
      :class="{ [passwordStrength]: passwordStrength }"
    >
      <error-message
        v-if="errorMessage && !invisible"
        :error-message="errorMessage"
      />
      <d-text v-else class="strength-text" my0 scale="footnote">
        {{ !passwordStrength ? "Password strength" : passwordStrength }}
      </d-text>
      <d-auto-layout item-spacing="4px">
        <d-box
          v-for="(item, index) in Array(4)
            .fill()
            .map((v, i) => ++i)"
          :key="index"
          class="strength-indicator"
          :class="`indicator-${item}`"
        ></d-box>
      </d-auto-layout>
    </d-box>
    <d-box v-else>
      <error-message
        v-if="errorMessage && !invisible"
        :error-message="errorMessage"
      />
    </d-box>
  </d-box>
</template>

<script setup>
import {
  ChevronFilledDownIcon,
  CopyIcon,
  DAutoLayout,
  DBox,
  DText,
  EyeFilledIcon,
  NoEyeFilledIcon,
} from "../main";
import { allowOnlyNumbers } from "@/utils/allowOnlyNumbers";
import { computed, inject, nextTick, onMounted, ref, unref, watch } from "vue";
import number_format from "@/utils/number_format";
import inputProps from "@/utils/props/inputProps";
import { formatSSN } from "@/utils/formatSSN";
import { wrapperProps } from "@/utils/props/wrapperProps";
import { useWrapperProps } from "@/utils/composables/useWrapperProps";
import { formatPercentage } from "@/utils/formatPercentage";
import { useInputSize } from "@/utils/composables/useInputSize";
import copy from "copy-to-clipboard";
import { formatEIN } from "@/utils/formatEIN";
import uniqueRandomString from "@/utils/uniqueRandomString";
import ErrorMessage from "@/components/forms/DErrorMessage.vue";
import DLabel from "@/components/forms/DLabel.vue";

const emit = defineEmits([
  "update:modelValue",
  "change",
  "input",
  "keydown",
  "keyup",
  "keypress",
  "focus",
  "blur",
  "paste",
  "leftIconClicked",
  "rightIconClicked",
  "password-strength-changed",
]);

const props = defineProps({
  ...inputProps,
  ...wrapperProps,
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
  copyMode: Boolean,
  isStrongPassword: Boolean,
  ssn: Boolean,
  ein: Boolean,
  percentage: Boolean,
  address: Boolean,
  maxlength: {
    type: [String, Number],
  },
  type: {
    type: String,
    default: "text",
  },
  inputClass: {
    type: String,
  },
  pill: {
    type: Boolean,
  },
  onlyNumbers: {
    type: Boolean,
  },
  currencySymbol: {
    type: String,
    default: "$",
  },
  currencyAutoDecimal: {
    type: Boolean,
    default: false,
  },
  currencyDecimals: {
    type: [Number, String],
    default: 2,
  },
  currencyAllowNegative: {
    type: Boolean,
    default: false,
  },
  currencyEmptyValue: {
    type: String,
    default: "",
  },
});

const { computedInputSize } = useInputSize(props);

const computedID = computed(() => (props.id ? props.id : uniqueRandomString()));

const defaultFontFace = inject("d__defaultFontFace", null);

const computedFontFace = computed(() => {
  return props.fontFace
    ? props.fontFace
    : unref(defaultFontFace)
    ? unref(defaultFontFace)
    : "circularSTD";
});

const { computedMargin, computedWidth } = useWrapperProps(props);

const inputField = ref();

const localType = ref("text");

const localSSN = ref([]);

const focused = ref(false);

const passwordStrength = ref(null);

const passwordIcon = computed(() =>
  localType.value === "text" ? EyeFilledIcon : NoEyeFilledIcon
);

const maximumLength = computed(() => {
  if (props.ssn) {
    return 11;
  } else if (props.ein) {
    return 10;
  } else {
    return props.maxlength;
  }
});

/**
 * This function runs on initialization and whenever the value of the model changes
 * It's job is to handle formatting of the value of the text-field.
 */
const initializeModelValue = () => {
  if (!focused.value) {
    if (props.currency) {
      if (!props.modelValue) {
        inputField.value.$el.value = props.currencyEmptyValue;
      } else {
        let value = props.modelValue
            .replaceAll(props.currencySymbol, "")
            .replaceAll(",", ""),
          regex = new RegExp(/^\d*(\.\d{0,2})?$/);
        if (regex.test(value)) {
          if (props.emitOnlyCurrencyValue) {
            emit(
              "update:modelValue",
              `${number_format(value, 2).replaceAll(",", "")}`
            );
          } else {
            emit(
              "update:modelValue",
              `${props.currencySymbol} ${number_format(
                parseFloat(
                  value.split(",").join("").replaceAll(props.currencySymbol, "")
                ),
                2
              )}`
            );
          }
          inputField.value.$el.value = `${props.currencySymbol} ${number_format(
            parseFloat(
              value.split(",").join("").replaceAll(props.currencySymbol, "")
            ),
            2
          )}`;
        }
      }
    } else if (props.ssn) {
      if (!props.modelValue) {
        inputField.value.$el.value = "";
      } else {
        localSSN.value = formatSSN(props.modelValue);
        inputField.value.$el.value = localSSN.value[1];
      }
    } else if (props.ein) {
      if (!props.modelValue) {
        inputField.value.$el.value = "";
      } else {
        const formattedValue = formatEIN(props.modelValue);
        inputField.value.$el.value = formattedValue;
        emit("update:modelValue", formattedValue);
      }
    } else if (props.percentage) {
      if (!props.modelValue) {
        inputField.value.$el.value = "0%";
      } else {
        try {
          const parsedValue = formatPercentage(props.modelValue);
          const renderedValue =
            parsedValue < 0 ? 0 : parsedValue > 100 ? 100 : parsedValue;
          emit("update:modelValue", `${renderedValue}%`);
        } catch (err) {
          emit("update:modelValue", "");
        }
      }
    } else {
      emit("update:modelValue", props.modelValue);
    }
  }
};

onMounted(() => {
  localType.value = props.type;
  if (props.isPassword || props.isStrongPassword) {
    localType.value = "password";
  }
  if (props.isStrongPassword) {
    checkPasswordStrength(props.modelValue ? props.modelValue : props.value);
  }
  initializeModelValue();
});

const emitLeftIconClicked = (e) => {
  emit("leftIconClicked", e);
};

const emitRightIconClicked = (e) => {
  if (props.isPassword || props.isStrongPassword) {
    localType.value = localType.value === "text" ? "password" : "text";
  }
  if (props.copyMode) {
    copy(props.modelValue);
    alert("Copied!");
    // TODO: Replace with a tooltip
  }
  emit("rightIconClicked", e);
};

const handleKeyEvents = (e) => {
  if (props.onlyNumbers || props.ssn || props.ein) {
    return allowOnlyNumbers(e);
  }
  if (props.currency || props.percentage) {
    return allowOnlyNumbers(e, true);
  }
};

const showRightIcon = computed(
  () =>
    props.isPassword ||
    props.isStrongPassword ||
    props.copyMode ||
    ((props.dropDown || props.rightIcon) && !props.invisible)
);

const computedRightIcon = computed(() => {
  if (props.isPassword || props.isStrongPassword) {
    return passwordIcon.value;
  } else if (props.dropDown) {
    return ChevronFilledDownIcon;
  } else if (props.copyMode) {
    return CopyIcon;
  } else {
    return props.rightIcon;
  }
});

const checkPasswordStrength = (value) => {
  if (value !== undefined && value !== null) {
    if (value.length < 8) {
      passwordStrength.value = "Weak";
      emit("password-strength-changed", "Weak");
    } else {
      passwordStrength.value = "Fair";
      emit("password-strength-changed", "Fair");
      if (
        (/\d/.test(value) && /[a-z]/.test(value) && /[A-Z]/.test(value)) ||
        /[!@#$%^&*()_+[\]{};':"\\|,.<>/?]/.test(value)
      ) {
        emit("password-strength-changed", "Good");
        passwordStrength.value = "Good";
      }
      if (
        /\d/.test(value) &&
        /[a-z]/.test(value) &&
        /[A-Z]/.test(value) &&
        /[!@#$%^&*()_+[\]{};':"\\|,.<>/?]/.test(value)
      ) {
        emit("password-strength-changed", "Strong");
        passwordStrength.value = "Strong";
      }
    }
  }
};

const handleInputEvents = (e) => {
  if (props.currency) {
    let value = e.target.value,
      temp,
      regex = new RegExp(/^\d*(\.\d{0,2})?$/);
    if (!regex.test(value)) {
      temp = value.split("");
      let tested = "";
      for (let i = 0; i < temp.length; i++) {
        tested += temp[i];
        if (!regex.test(tested)) {
          e.target.value = tested.substr(0, i);
          if (props.emitOnlyCurrencyValue) {
            emit(
              "update:modelValue",
              tested
                .substr(0, i)
                .replaceAll(props.currencySymbol, "")
                .replaceAll(",", "")
            );
          } else {
            emit("update:modelValue", tested.substr(0, i));
          }
          return;
        }
      }
    } else {
      if (props.emitOnlyCurrencyValue) {
        let emittedValue = e.target.value
          .replaceAll(props.currencySymbol, "")
          .replaceAll(",", "");
        emittedValue = emittedValue === "" ? "0.00" : emittedValue;
        emit("update:modelValue", emittedValue);
      } else {
        emit("update:modelValue", e.target.value);
      }
    }
  } else if (props.ssn) {
    const formatted = formatSSN(e.target.value);
    localSSN.value = formatted;
    emit("update:modelValue", formatted[0]);
  } else if (props.ein) {
    emit("update:modelValue", formatEIN(e.target.value));
  } else if (props.percentage) {
    try {
      emit("update:modelValue", formatPercentage(e.target.value));
    } catch (err) {
      emit("update:modelValue", "");
    }
  } else if (props.isStrongPassword) {
    checkPasswordStrength(e.target.value);
    emit("update:modelValue", e.target.value);
  } else {
    emit("update:modelValue", e.target.value);
  }
  emit("input", e);
};

const handleChangeEvents = (e) => {
  emit("change", e);
};

const handlePasteEvent = (e) => {
  emit("paste", e);
};

const handleKeydownEvent = (e) => {
  emit("keydown", e);
  return handleKeyEvents(e);
};

const handleKeyupEvent = (e) => {
  emit("keyup", e);
  return handleKeyEvents(e);
};

const handleKeypressEvent = (e) => {
  emit("keypress", e);
  return handleKeyEvents(e);
};

const handleFocusEvent = async (e) => {
  focused.value = true;
  emit("focus", e);
  if (props.currency) {
    emit(
      "update:modelValue",
      e.target.value
        .replaceAll(props.currencySymbol, "")
        .replaceAll(",", "")
        .trim()
    );
    await nextTick();
    e.target.select();
  }
  if (props.percentage) {
    emit("update:modelValue", e.target.value.replaceAll("%", ""));
    await nextTick();
    e.target.select();
  }
  if (props.ssn && localSSN.value.length) {
    e.target.value = localSSN.value[0];
  }
};

const handleBlurEvent = async (e) => {
  emit("blur", e);
  if (props.currency) {
    if (e.target.value) {
      if (props.emitOnlyCurrencyValue) {
        emit(
          "update:modelValue",
          `${number_format(
            parseFloat(
              e.target.value
                .split(",")
                .join("")
                .replaceAll(props.currencySymbol, "")
                .replaceAll(",", "")
                .trim()
            ),
            2
          ).replaceAll(",", "")}`
        );
      } else {
        emit(
          "update:modelValue",
          `${props.currencySymbol} ${number_format(
            parseFloat(
              e.target.value
                .split(",")
                .join("")
                .replaceAll(props.currencySymbol, "")
            ),
            2
          )}`
        );
      }
      await nextTick();
      e.target.value = `${props.currencySymbol} ${number_format(
        parseFloat(
          e.target.value
            .split(",")
            .join("")
            .replaceAll(props.currencySymbol, "")
        ),
        2
      )}`;
    } else {
      if (props.emitOnlyCurrencyValue) {
        emit("update:modelValue", `0.00`);
      } else {
        emit("update:modelValue", `${props.currencySymbol} 0.00`);
      }
    }
  }
  if (props.percentage) {
    const value = e.target.value;
    if (value) {
      const parsedValue = parseFloat(value.replaceAll("%", ""));
      const renderedValue =
        parsedValue < 0 ? 0 : parsedValue > 100 ? 100 : parsedValue;
      emit("update:modelValue", `${renderedValue}%`);
    } else {
      emit("update:modelValue", "0%");
    }
  }
  if (props.ssn && localSSN.value.length) {
    e.target.value = localSSN.value[1];
  }
  focused.value = false;
};

watch(
  () => props.modelValue,
  () => {
    initializeModelValue();
  }
);

watch(
  () => props.emitOnlyCurrencyValue,
  async (newValue) => {
    if (newValue) {
      emit(
        "update:modelValue",
        `${number_format(
          parseFloat(
            inputField.value.$el.value
              .split(",")
              .join("")
              .replaceAll(props.currencySymbol, "")
          ),
          2
        ).replaceAll(",", "")}`
      );
      await nextTick();
      inputField.value.$el.value = `${props.currencySymbol} ${number_format(
        parseFloat(
          inputField.value.$el.value
            .split(",")
            .join("")
            .replaceAll(props.currencySymbol, "")
        ),
        2
      )}`;
    } else {
      emit(
        "update:modelValue",
        `${props.currencySymbol} ${number_format(
          parseFloat(
            inputField.value.$el.value
              .split(",")
              .join("")
              .replaceAll(props.currencySymbol, "")
          ),
          2
        )}`
      );
    }
  }
);
</script>

<style lang="scss">
@import "../scss/textfield";

.strength-indicator {
  height: 6px;
  width: 32px;
  background: #e1e7ec;
  border-radius: 90px;
}

.password-strength-indicator {
  &.Weak {
    .indicator-1 {
      background: #d62f4b;
    }

    .strength-text.ui-text {
      color: #d62f4b;
    }
  }

  &.Fair {
    .indicator-1,
    .indicator-2 {
      background: #ffb44f;
    }

    .strength-text.ui-text {
      color: #ffb44f;
    }
  }

  &.Good {
    .indicator-1,
    .indicator-2,
    .indicator-3 {
      background: #0d7fe9;
    }

    .strength-text.ui-text {
      color: #0d7fe9;
    }
  }

  &.Strong {
    .indicator-1,
    .indicator-2,
    .indicator-3,
    .indicator-4 {
      background: #27c079;
    }

    .strength-text.ui-text {
      color: #27c079;
    }
  }
}
</style>
