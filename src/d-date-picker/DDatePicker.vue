<template>
  <d-box
    class="ui-text-field__wrapper"
    :class="{ [`size__${size}`]: true, [wrapperClass]: wrapperClass }"
  >
    <d-box v-if="label" is="label">
      <d-text
        :class="labelClass"
        :font-face="labelFontFace"
        class="ui-text-field__label"
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
      <date-picker
        :class="{
          'has-error': errorMessage,
          'has-left-icon': leftIcon,
          'has-right-icon': dropDown || rightIcon,
          dark_mode: darkMode,
          [fontFace]: fontFace,
        }"
        :input-attr="{
          class: {
            dark_mode: darkMode,
            'ui-text-field__input': true,
            [fontFace]: fontFace,
          },
        }"
        v-bind="{ ...$attrs, ...$props }"
        @keypress="handleKeyEvents"
        @change="fire"
        @blur="$emit('blur')"
        v-model:value="date"
        :format="format"
        :placeholder="placeholder || format"
        :range="range"
      >
        <template #icon-calendar>
          <CalendarIcon class="ui-text-field__right-icon relative" />
        </template>
        <template #icon-clear>
          <CloseIcon class="ui-text-field__right-icon relative" />
        </template>
      </date-picker>
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

<script setup>
// TODO - Fix bug with console spitting error after date change
import {
  DBox,
  DText,
  ErrorIcon,
  ChevronFilledDownIcon,
  CloseIcon,
  CalendarIcon,
} from "../main";
import { allowOnlyNumbers } from "../utils/allowOnlyNumbers";
import moment from "moment";
import DatePicker from "vue-datepicker-next";
import "vue-datepicker-next/index.css";
import inputProps from "../utils/inputProps";
import { inject, ref, onMounted, watch } from "vue";

const darkMode = inject("d__darkMode", false);

const date = ref(null);

const emit = defineEmits(["update:modelValue", "blur"]);

const props = defineProps({
  ...inputProps,
  fontFace: {
    type: String,
    default: "heroNew",
  },
  dropDown: {
    type: Boolean,
  },
  rightIcon: {
    type: Object,
  },
  leftIcon: {
    type: Object,
  },
  format: {
    type: String,
    default: "MM-DD-YYYY",
  },
  formatDate: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
  },
  range: {
    type: Boolean,
  },
});

onMounted(() => {
  if (props.modelValue) {
    date.value = Array.isArray(props.modelValue)
      ? props.modelValue
      : moment(props.modelValue, props.format);
  }
});

watch(
  () => props.modelValue,
  (val) => {
    if (val) {
      if (Array.isArray(val)) {
        date.value = val;
      } else {
        date.value = moment(val, props.format).toDate();
      }
    }
  }
);

const handleKeyEvents = (e) => {
  if (props.onlyNumbers) {
    return allowOnlyNumbers(e);
  }
};

const fire = () => {
  if (props.formatDate && !Array.isArray(date.value))
    emit("update:modelValue", moment(date.value).format(props.format)).toDate();
  else emit("update:modelValue", date.value);
};
</script>

<style lang="scss">
@import "../scss/textfield";
</style>

<style lang="scss">
.mx-datepicker svg {
  fill: none;
}
.mx-input-wrapper,
.mx-datepicker {
  width: 100%;
}
.mx-input-wrapper:hover {
  .mx-icon-calendar {
    display: none;
  }
}
</style>