<template>
  <d-box
    class="ui-text-field__wrapper"
    :class="[wrapperClass, `size__${computedInputSize}`]"
  >
    <slot name="label">
      <d-box is="label" v-if="label">
        <d-text
          margin-top="0px"
          :class="labelClass"
          class="ui-text-field__label"
          scale="subhead"
          :font-face="labelFontFace"
        >
          {{ label }}
        </d-text>
      </d-box>
    </slot>
    <d-box
      class="ui-select-field__wrapper ui-text-field__input-wrapper"
      :class="{ 'has-error': errorMessage, disabled, pill }"
    >
      <d-box
        v-if="$slots['left-icon'] || leftIcon"
        class="ui-text-filed__left-icon"
      >
        <slot name="left-icon">
          <component v-if="leftIcon" :is="leftIcon"></component>
        </slot>
      </d-box>

      <d-box
        :class="{
          'has-error': errorMessage,
          disabled,
          'has-left-icon': leftIcon || $slots['left-icon'],
          'select-placeholder': placeholderEffect && internalValue === '',
          'active-placeholder': internalValue === '' && placeholder,
          pill,
        }"
        class="has-right-icon ui-text-field__input"
        v-bind="$attrs"
        v-model="computedModelValue"
        is="select"
        ref="select"
        :disabled="disabled"
      >
        <option v-if="placeholder" value="">{{ placeholder }}</option>
        <option
          v-for="(option, index) in computedOptions"
          :key="`${keyGen()}_${index}`"
          :value="option.value"
        >
          {{ option.text }}
        </option>
      </d-box>
      <d-box pointer-events="none"  class="ui-text-field__right-icon__wrapper">
        <d-box class="ui-text-field__right-icon">
          <slot name="right-icon">
            <ChevronFilledDownIcon />
          </slot>
        </d-box>
      </d-box>
    </d-box>
    <d-box v-if="errorMessage" class="ui-text-field__error">
      <ErrorIcon height="16px" width="16px" class="ui-text-field__error-icon" />
      <d-text
        class="ui-text-field__error-text"
        scale="subhead"
        font-face="circularSTD"
      >
        {{ errorMessage }}
      </d-text>
    </d-box>
  </d-box>
</template>

<script setup>
import { DBox, DText, ChevronFilledDownIcon, ErrorIcon } from "../main";
import keyGen from "../utils/keyGen";
import { computed, ref, onMounted, watch } from "vue";
import inputProps from "../utils/inputProps";
import { useInputSize } from "../utils/composables/useInputSize";
import { useDropdown } from "../utils/composables/useDropdown";

const emit = defineEmits(["update:modelValue"]);

const internalValue = ref("");

const props = defineProps({
  ...inputProps,
  label: {
    type: String,
  },
  size: {
    type: String,
    default: "huge",
    validator: (value) =>
      ["small", "medium", "large", "xlarge", "huge", "massive"].includes(value),
  },
  errorMessage: {
    type: String,
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
  options: {
    type: Array,
    default: () => ["Item 1", "Item 2", "item 3"],
  },
  placeholderEffect: {
    type: Boolean,
    default: true,
  },
  disabled: {
    type: Boolean,
  },
  labelClass: {
    type: [String, Object, Array],
  },
  placeholder: {
    type: String,
    default: "- Select -",
  },
  pill: {
    type: Boolean,
  },
  optionTitle: {
    type: String,
    default: "text",
  },
  optionValue: {
    type: String,
    default: "value",
  },
  returnFullObject: {
    type: Boolean,
    default: false,
  },
});

const { computedInputSize } = useInputSize(props);
const { computedOptions } = useDropdown(props);

onMounted(() => {
  if (
    props.modelValue &&
    Object.values(computedOptions.value)
      .map((option) => option.value)
      .includes(props.modelValue)
  ) {
    internalValue.value = props.modelValue;
    if (props.returnFullObject && typeof props.options[0] === "object") {
      emit(
        "update:modelValue",
        computedOptions.value.filter(
          (option) => option.value === internalValue.value
        )[0].originalOption
      );
    } else {
      emit("update:modelValue", internalValue.value);
    }
  }
});

const computedModelValue = computed({
  get() {
    const value = internalValue.value || props.modelValue;
    if (!value) {
      return "";
    } else {
      if (typeof value === "object") {
        return value[props.optionValue];
      } else {
        return value;
      }
    }
  },
  set(value) {
    internalValue.value = value;
    if (props.returnFullObject && typeof props.options[0] === "object") {
      emit(
        "update:modelValue",
        computedOptions.value.filter(
          (option) => option.value === internalValue.value
        )[0].originalOption
      );
    } else {
      emit("update:modelValue", internalValue.value);
    }
  },
});

watch(
  () => props.modelValue,
  () => {
    if (
      props.modelValue &&
      typeof props.modelValue !== "object" &&
      props.modelValue !== internalValue.value
    ) {
      internalValue.value = props.modelValue;
      if (props.returnFullObject && typeof props.options[0] === "object") {
        emit(
          "update:modelValue",
          computedOptions.value.filter(
            (option) => option.value === internalValue.value
          )[0].originalOption
        );
      } else {
        emit("update:modelValue", internalValue.value);
      }
    }
  }
);
</script>

<style lang="scss" scoped>
@import "../scss/textfield";

.ui-select-field__wrapper {
  .ui-text-field__input {
    &.active-placeholder {
      color: #b8c4ce;
    }
  }

  &.dark_mode::after {
    background: var(--dark-input-background-color);
  }

  &.has-error::after {
    background: #fff0f2;
  }

  &.has-error.dark_mode::after {
    background: #350a12;
  }

  &:disabled::after,
  &.disabled::after {
    background: #f2f3f4;
  }

  &.disabled.dark_mode::after,
  &.dark_mode:disabled::after {
    background: var(--dark-input-disabled-color);
  }

  &.background-caret {
    select {
      position: relative;
    }

    &::before {
      content: url("data:image/svg+xml;charset=utf8,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.10108 9.65718L11.7577 14.8872C11.8915 15.0376 12.1086 15.0376 12.2424 14.8872L16.8989 9.65718C17.1148 9.41466 16.962 9 16.6565 9H7.34344C7.03808 9 6.88516 9.41467 7.10108 9.65718Z' fill='%235F6B7A'/%3E%3C/svg%3E");
      position: absolute;
      right: 0;
      top: calc(50% - 13px);
      z-index: 15;
    }
  }
}
</style>
