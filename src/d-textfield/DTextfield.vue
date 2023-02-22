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
        v-if="leftIcon"
        class="ui-text-field__left-icon"
        @click="emitLeftIconClicked"
      ></component>
      <d-box v-else-if="$slots.leftIcon" class="ui-text-field__left-icon">
        <slot name="leftIcon"></slot>
      </d-box>
      <d-box
        class="ui-text-field__input"
        :class="{
          'has-error': showError || errorMessage,
          'has-left-icon': leftIcon || $slots.leftIcon,
          'has-right-icon': dropDown || rightIcon || $slots.rightIcon,
          invisible,
          disabled,
          oneCharWide,
          [inputClass]: true,
          pill,
        }"
        ref="inputField"
        :max="max"
        :min="min"
        :maxlength="maximumLength"
        :multiple="multiple"
        :minlength="minlength"
        :disabled="disabled"
        :name="name"
        :pattern="pattern"
        is="input"
        :value="modelValue"
        @change="handleChangeEvents"
        @input="handleInputEvents"
        @keydown="handleKeydownEvent"
        @keyup="handleKeyupEvent"
        @keypress="handleKeypressEvent"
        @focus="handleFocusEvent"
        @blur="handleBlurEvent"
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
      <d-box v-else-if="$slots.rightIcon" class="ui-text-field__right-icon">
        <slot name="rightIcon"></slot>
      </d-box>
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

<script setup>
import {
  DBox,
  DText,
  ErrorIcon,
  ChevronFilledDownIcon,
  NoEyeFilledIcon,
  EyeFilledIcon,
} from "../main";
import { allowOnlyNumbers, currencies } from "../utils/allowOnlyNumbers";
import { ref, computed, onMounted, inject, unref, nextTick, watch } from "vue";
import number_format from "../utils/number_format";
import inputProps from "../utils/inputProps";
import { formatSSN } from "../utils/formatSSN";
import { wrapperProps } from "../utils/wrapperProps";
import { useWrapperProps } from "../utils/useWrapperProps";
import { formatPercentage } from "../utils/formatPercentage";

const emit = defineEmits([
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
  ssn: Boolean,
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
});

const defaultFontFace = inject("defaultFontFace", null);

const computedFontFace = computed(() => {
  return props.fontFace || unref(defaultFontFace)
    ? unref(defaultFontFace)
    : "heroNew";
});

const { computedMargin, computedWidth } = useWrapperProps(props);

const inputField = ref();

const localType = ref("text");

const localSSN = ref([]);

const focused = ref(false);

const passwordIcon = computed(() =>
  localType.value === "text" ? EyeFilledIcon : NoEyeFilledIcon
);

const maximumLength = computed(() => {
  if (props.ssn) {
    return 11;
  } else {
    return props.maxlength;
  }
});

const initializeModelValue = () => {
  if (!focused.value) {
    if (props.currency) {
      if (!props.modelValue) {
        inputField.value.$el.value = "$0.00";
      } else {
        let value = props.modelValue.replaceAll("$", "").replaceAll(",", ""),
          regex = new RegExp(/^\d*(\.\d{0,2})?$/);
        if (regex.test(value)) {
          if (props.emitOnlyCurrencyValue) {
            emit("update:modelValue", `${number_format(value)}`);
          } else {
            emit(
              "update:modelValue",
              `$${number_format(
                parseFloat(value.split(",").join("").replaceAll("$", "")),
                2
              )}`
            );
          }
          inputField.value.$el.value = `$${number_format(
            parseFloat(value.split(",").join("").replaceAll("$", "")),
            2
          )}`;
        }
      }
    } else if (props.ssn) {
      if (!props.modelValue) {
        inputField.value.$el.value = "";
      } else {
        const formatted = formatSSN(props.modelValue);
        localSSN.value = formatted;
        inputField.value.$el.value = localSSN.value[1];
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
  if (props.isPassword) {
    localType.value = "password";
  }
  initializeModelValue();
});

const emitLeftIconClicked = (e) => {
  emit("leftIconClicked", e);
};

const emitRightIconClicked = (e) => {
  if (props.isPassword) {
    localType.value = localType.value === "text" ? "password" : "text";
  }
  emit("rightIconClicked", e);
};

const handleKeyEvents = (e) => {
  if (props.onlyNumbers || props.ssn) {
    return allowOnlyNumbers(e);
  }
  if (props.currency) {
    return currencies(e);
  }
  if (props.percentage) {
    return allowOnlyNumbers(e, true);
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
              tested.substr(0, i).replaceAll("$", "").replaceAll(",", "")
            );
          } else {
            emit("update:modelValue", tested.substr(0, i));
          }
          return;
        }
      }
    } else {
      if (props.emitOnlyCurrencyValue) {
        emit(
          "update:modelValue",
          e.target.value.replaceAll("$", "").replaceAll(",", "")
        );
      } else {
        emit("update:modelValue", e.target.value);
      }
    }
  } else if (props.ssn) {
    const formatted = formatSSN(e.target.value);
    localSSN.value = formatted;
    emit("update:modelValue", formatted[0]);
  } else if (props.percentage) {
    try {
      emit("update:modelValue", formatPercentage(e.target.value));
    } catch (err) {
      emit("update:modelValue", "");
    }
  } else {
    emit("update:modelValue", e.target.value);
  }
  emit("input", e);
};

const handleChangeEvents = (e) => {
  emit("change", e);
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
    if (props.emitOnlyCurrencyValue) {
      emit(
        "update:modelValue",
        e.target.value.substring(1).replaceAll("$", "").replaceAll(",", "")
      );
      await nextTick();
      e.target.select();
    } else {
      emit("update:modelValue", e.target.value.substring(1));
      await nextTick();
      e.target.select();
    }
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

const handleBlurEvent = (e) => {
  emit("blur", e);
  if (props.currency) {
    if (e.target.value) {
      emit(
        "update:modelValue",
        `$${number_format(
          parseFloat(e.target.value.split(",").join("").replaceAll("$", "")),
          2
        )}`
      );
    } else {
      emit("update:modelValue", "$0.00");
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
</script>

<style lang="scss">
@import "../scss/textfield";
</style>
