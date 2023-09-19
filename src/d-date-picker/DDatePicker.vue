<template>
  <d-box
    class="ui-text-field__wrapper"
    :class="{
      [`size__${computedInputSize}`]: true,
      [wrapperClass]: wrapperClass,
    }"
  >
    <slot name="label">
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
    </slot>

    <d-box
      class="ui-text-field__input-wrapper"
      :class="{ 'has-error': !!errorMessage }"
    >
      <component :is="leftIcon" v-if="leftIcon && !invisible"></component>
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
            'date-picker': true,
            'has-error': errorMessage,
            [fontFace]: fontFace,
          },
        }"
        v-bind="{ ...$attrs, ...$props }"
        @keypress="handleKeyEvents"
        @change="fire"
        @blur="$emit('blur')"
        v-model:value="date"
        :format="format"
        :placeholder="computedPlaceholder"
        :range="range"
        :disabled-date="computedDisabledDates"
      >
        <template #icon-calendar>
          <slot name="calendar-icon">
            <CalendarIcon
              class="relative ui-text-field__right-icon no-position"
            />
          </slot>
        </template>
        <template #icon-clear>
          <CloseIcon class="ui-text-field__right-icon no-position relative" />
        </template>
      </date-picker>
      <component
        class="ui-text-field__right-icon no-position"
        v-if="(dropDown || rightIcon) && !invisible"
        :is="dropDown ? ChevronFilledDownIcon : rightIcon"
      ></component>
    </d-box>
    <d-box v-if="errorMessage && !invisible" class="ui-text-field__error">
      <ErrorIcon height="16px" width="16px" class="ui-text-field__error-icon" />
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
import inputProps from "../utils/inputProps";
import { inject, ref, onMounted, watch, computed } from "vue";
import { useInputSize } from "../utils/composables/useInputSize";

const darkMode = inject("d__darkMode", false);

const date = ref(null);

const emit = defineEmits(["update:modelValue", "blur", "change"]);

const props = defineProps({
  ...inputProps,
  fontFace: {
    type: String,
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
  disableAfterToday: {
    type: Boolean,
  },
  disableBeforeToday: {
    type: Boolean,
  },
  disabledDate: {
    type: Function,
  },
  modelValue: {
    type: [String, Date, Array],
  },
});

const { computedInputSize } = useInputSize(props);

const disabledAfterToday = (date) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return date > today;
};

const disabledBeforeToday = (date) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return date < today;
};

const computedDisabledDates = computed(() => {
  if (props.disableAfterToday) {
    return disabledAfterToday;
  } else if (props.disableBeforeToday) {
    return disabledBeforeToday;
  } else if (props.disabledDate) {
    return props.disabledDate;
  } else {
    return undefined;
  }
});

const computedPlaceholder = computed(() => {
  if (props.placeholder) {
    return props.placeholder;
  } else {
    return props.range ? `${props.format} - ${props.format}` : props.format;
  }
});

onMounted(() => {
  if (props.modelValue) {
    if (props.formatDate) {
      date.value = moment(props.modelValue, props.format).toDate();
    } else {
      date.value = Array.isArray(props.modelValue)
        ? props.modelValue
        : moment(props.modelValue, props.format);
    }
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
    } else {
      date.value = null;
    }
  }
);

const handleKeyEvents = (e) => {
  if (props.onlyNumbers) {
    return allowOnlyNumbers(e);
  }
};

const fire = () => {
  if (props.formatDate && !Array.isArray(date.value)) {
    emit("update:modelValue", moment(date.value).format(props.format));
    emit("change", moment(date.value).format(props.format));
  } else {
    emit("update:modelValue", date.value);
    emit("change", date.value);
  }
};
</script>
<script>
export default {
  inheritAttrs: false,
};
</script>

<style lang="scss">
@import "../scss/textfield";
@import "../scss/datepicker";
</style>
