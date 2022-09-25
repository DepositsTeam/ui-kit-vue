<template>
  <d-box
    class="ui-text-field__wrapper"
    :class="[wrapperClass, `size__${size}`]"
  >
    <d-box is="label">
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
    <d-box
      class="ui-select-field__wrapper ui-text-field__input-wrapper"
      :class="{ 'has-error': errorMessage, disabled }"
    >
      <component
        v-if="leftIcon"
        class="ui-text-field__left-icon"
        :is="leftIcon"
      ></component>
      <d-box
        :class="{
          'has-error': errorMessage,
          disabled,
          'has-left-icon': leftIcon,
          'select-placeholder': placeholderEffect && modelValue === '',
        }"
        class="has-right-icon ui-text-field__input"
        v-bind="$attrs"
        :value="modelValue"
        @change="emit('update:modelValue', $event.target.value)"
        is="select"
        :disabled="disabled"
      >
        <option
          v-for="(option, index) in computedOptions"
          :key="`${keyGen()}_${index}`"
          :value="option.value"
        >
          {{ option.text }}
        </option>
      </d-box>
      <ChevronFilledDownIcon class="ui-text-field__right-icon" />
    </d-box>
    <d-box v-if="errorMessage" class="ui-text-field__error">
      <ErrorIcon class="ui-text-field__error-icon" />
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
import { computed } from "vue";
import inputProps from "../utils/inputProps";

const emit = defineEmits(["update:modelValue"]);

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
});

const computedOptions = computed(() => {
  return props.options.map((option) => {
    let newOption = {};
    newOption.text = typeof option === "string" ? option : option.text;
    if (typeof option === "string") {
      newOption.value = option;
    } else {
      newOption.value = option.value === undefined ? option.text : option.value;
    }
    return newOption;
  });
});
</script>

<style lang="scss" scoped>
@import "../scss/textfield";

.ui-select-field__wrapper {
  &::after {
    content: "";
    position: absolute;
    background: #fff;
    height: 11px;
    width: 11px;
    right: 2px;
    z-index: 13;
    pointer-events: none;
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
