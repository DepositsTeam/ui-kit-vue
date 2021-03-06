<template>
  <d-box class="ui-text-field__wrapper" :class="[`size__${size}`]">
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
        }"
        input-class="ui-text-field__input"
        v-bind="$attrs"
        @keypress="handleKeyEvents"
        @change="fire"
        @blur="$emit('blur')"
        v-model:value="date"
        :format="format"
        :placeholder="placeholder || format"
      >
        <template #icon-calendar>
          <CalendarIcon class="ui-text-field__right-icon relative" />
        </template>
        <template #icon-clear>
          <CloseIcon class="ui-text-field__right-icon" />
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

<script>
// TODO - Fix bug with console spitting error after date change
import DBox from "../d-box/DBox.vue";
import DText from "../d-text/DText.vue";
import ErrorIcon from "../icons/ErrorIcon.vue";
import ChevronFilledDownIcon from "../icons/ChevronFilledDownIcon.vue";
import { allowOnlyNumbers } from "../utils/allowOnlyNumbers";
import CloseIcon from "../icons/CloseIcon.vue";
import CalendarIcon from "../icons/CalendarIcon.vue";
import moment from "moment";
import DatePicker from "vue-datepicker-next";
import "vue-datepicker-next/index.css";
import inputProps from "../utils/inputProps";
export default {
  name: "DDatePicker",
  emits: ["update:modelValue", "blur"],
  components: {
    ErrorIcon,
    ChevronFilledDownIcon,
    DBox,
    DText,
    CloseIcon,
    CalendarIcon,
    DatePicker,
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
  },
  data: () => ({
    date: null,
  }),
  mounted() {
    if (this.modelValue) {
      this.date = moment(this.modelValue, this.format);
    }
  },
  watch: {
    modelValue: function (val) {
      if (val) this.date = moment(val, this.format).toDate();
    },
  },
  methods: {
    handleKeyEvents(e) {
      if (this.onlyNumbers) {
        return allowOnlyNumbers(e);
      }
    },
    fire: function () {
      console.log(this);
      if (this.formatDate)
        this.$emit(
          "update:modelValue",
          moment(this.date).format(this.format)
        ).toDate();
      else this.$emit("update:modelValue", this.date);
    },
  },
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
</style>
