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
            'date-picker': true,
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
        :disabled-date="
          disableAfterToday
            ? disabledAfterToday
            : disabledDate
            ? disabledDate
            : undefined
        "
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
  disableAfterToday: {
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
</style>

<style lang="scss">
.mx-icon-left:before,.mx-icon-right:before,.mx-icon-double-left:before,.mx-icon-double-right:before,.mx-icon-double-left:after,.mx-icon-double-right:after{
  content:"";
  position:relative;
  top:-1px;
  display:inline-block;
  width:10px;
  height:10px;
  vertical-align:middle;
  border-style:solid;
  border-color:currentColor;
  border-width:2px 0 0 2px;
  border-radius:1px;
  box-sizing:border-box;
  transform-origin:center;
  transform:rotate(-45deg) scale(0.7)
}
.mx-icon-double-left:after{
  left:-4px
}
.mx-icon-double-right:before{
  left:4px
}
.mx-icon-right:before,.mx-icon-double-right:before,.mx-icon-double-right:after{
  transform:rotate(135deg) scale(0.7)
}
.mx-btn{
  box-sizing:border-box;
  line-height:1;
  font-size:14px;
  font-weight:500;
  padding:7px 15px;
  margin:0;
  cursor:pointer;
  background-color:transparent;
  outline:none;
  border:1px solid rgba(0,0,0,.1);
  border-radius:4px;
  color:#73879c;
  white-space:nowrap
}
.mx-btn:hover{
  border-color:#1284e7;
  color:#1284e7
}
.mx-btn-text{
  border:0;
  padding:0 4px;
  text-align:left;
  line-height:inherit
}
.mx-scrollbar{
  height:100%
}
.mx-scrollbar:hover .mx-scrollbar-track{
  opacity:1
}
.mx-scrollbar-wrap{
  height:100%;
  overflow-x:hidden;
  overflow-y:auto
}
.mx-scrollbar-track{
  position:absolute;
  top:2px;
  right:2px;
  bottom:2px;
  width:6px;
  z-index:1;
  border-radius:4px;
  opacity:0;
  transition:opacity .24s ease-out
}
.mx-scrollbar-track .mx-scrollbar-thumb{
  position:absolute;
  width:100%;
  height:0;
  cursor:pointer;
  border-radius:inherit;
  background-color:rgba(144,147,153,.3);
  transition:background-color .3s
}
.mx-zoom-in-down-enter-active,.mx-zoom-in-down-leave-active{
  opacity:1;
  transform:scaleY(1);
  transition:transform .3s cubic-bezier(0.23, 1, 0.32, 1),opacity .3s cubic-bezier(0.23, 1, 0.32, 1);
  transform-origin:center top
}
.mx-zoom-in-down-enter,.mx-zoom-in-down-enter-from,.mx-zoom-in-down-leave-to{
  opacity:0;
  transform:scaleY(0)
}
.mx-datepicker{
  position:relative;
  display:inline-block;
  width:210px
}
.mx-datepicker svg{
  vertical-align:-0.15em;
  fill:currentColor;
  overflow:hidden
}
.mx-datepicker-range{
  width:320px
}
.mx-datepicker-inline{
  width:auto
}
.mx-input-wrapper{
  position:relative
}
.mx-input-wrapper .mx-icon-clear{
  display:none
}
.mx-input-wrapper:hover .mx-icon-clear{
  display:block
}
.mx-input-wrapper:hover .mx-icon-clear+.mx-icon-calendar{
  display:none
}
.mx-input{
  display:inline-block;
  box-sizing:border-box;
  width:100%;
  height:34px;
  padding:6px 30px;
  padding-left:10px;
  font-size:14px;
  line-height:1.4;
  color:#555;
  background-color:#fff;
  border:1px solid #ccc;
  border-radius:4px;
  box-shadow:inset 0 1px 1px rgba(0,0,0,.075)
}
.mx-input:hover,.mx-input:focus{
  border-color:#409aff
}
.mx-input:disabled,.mx-input.disabled{
  color:#ccc;
  background-color:#f3f3f3;
  border-color:#ccc;
  cursor:not-allowed
}
.mx-input:focus{
  outline:none
}
.mx-input::-ms-clear{
  display:none
}
.mx-icon-calendar,.mx-icon-clear{
  position:absolute;
  top:50%;
  right:8px;
  transform:translateY(-50%);
  font-size:16px;
  line-height:1;
  color:rgba(0,0,0,.5);
  vertical-align:middle
}
.mx-icon-clear{
  cursor:pointer
}
.mx-icon-clear:hover{
  color:rgba(0,0,0,.8)
}
.mx-datepicker-main{
  font:14px/1.5 "Helvetica Neue",Helvetica,Arial,"Microsoft Yahei",sans-serif;
  color:#73879c;
  background-color:#fff;
  border:1px solid #e8e8e8
}
.mx-datepicker-popup{
  position:absolute;
  margin-top:1px;
  margin-bottom:1px;
  box-shadow:0 6px 12px rgba(0,0,0,.175);
  z-index:2001
}
.mx-datepicker-sidebar{
  float:left;
  box-sizing:border-box;
  width:100px;
  padding:6px;
  overflow:auto
}
.mx-datepicker-sidebar+.mx-datepicker-content{
  margin-left:100px;
  border-left:1px solid #e8e8e8
}
.mx-datepicker-body{
  position:relative;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none
}
.mx-btn-shortcut{
  display:block;
  padding:0 6px;
  line-height:24px
}
.mx-datepicker-header{
  padding:6px 8px;
  border-bottom:1px solid #e8e8e8
}
.mx-datepicker-footer{
  padding:6px 8px;
  text-align:right;
  border-top:1px solid #e8e8e8
}
.mx-calendar-range,.mx-time-range{
  display:flex
}
@media(max-width: 750px){
  .mx-calendar-range,.mx-time-range{
    flex-direction:column
  }
}
.mx-calendar{
  box-sizing:border-box;
  width:248px;
  padding:6px 12px
}
.mx-calendar+.mx-calendar{
  border-left:1px solid #e8e8e8
}
.mx-calendar-header,.mx-time-header{
  box-sizing:border-box;
  height:34px;
  line-height:34px;
  text-align:center;
  overflow:hidden
}
.mx-btn-icon-left,.mx-btn-icon-double-left{
  float:left
}
.mx-btn-icon-right,.mx-btn-icon-double-right{
  float:right
}
.mx-calendar-header-label{
  font-size:14px
}
.mx-calendar-decade-separator{
  margin:0 2px
}
.mx-calendar-decade-separator:after{
  content:"~"
}
.mx-calendar-content{
  position:relative;
  height:224px;
  box-sizing:border-box
}
.mx-calendar-content .cell{
  cursor:pointer
}
.mx-calendar-content .cell:hover{
  color:#73879c;
  background-color:#f3f9fe
}
.mx-calendar-content .cell.active{
  color:#fff;
  background-color:#1284e7
}
.mx-calendar-content .cell.in-range,.mx-calendar-content .cell.hover-in-range{
  color:#73879c;
  background-color:#dbedfb
}
.mx-calendar-content .cell.disabled{
  cursor:not-allowed;
  color:#ccc;
  background-color:#f3f3f3
}
.mx-calendar-week-mode .mx-date-row{
  cursor:pointer
}
.mx-calendar-week-mode .mx-date-row:hover{
  background-color:#f3f9fe
}
.mx-calendar-week-mode .mx-date-row.mx-active-week{
  background-color:#dbedfb
}
.mx-calendar-week-mode .mx-date-row .cell:hover{
  color:inherit;
  background-color:transparent
}
.mx-calendar-week-mode .mx-date-row .cell.active{
  color:inherit;
  background-color:transparent
}
.mx-week-number{
  opacity:.5
}
.mx-table{
  table-layout:fixed;
  border-collapse:separate;
  border-spacing:0;
  width:100%;
  height:100%;
  box-sizing:border-box;
  text-align:center
}
.mx-table th{
  padding:0;
  font-weight:500;
  vertical-align:middle
}
.mx-table td{
  padding:0;
  vertical-align:middle
}
.mx-table-date td,.mx-table-date th{
  height:32px;
  font-size:12px
}
.mx-table-date .today{
  color:#2a90e9
}
.mx-table-date .cell.not-current-month{
  color:#ccc;
  background:none
}
.mx-time{
  flex:1;
  width:224px;
  background:#fff
}
.mx-time+.mx-time{
  border-left:1px solid #e8e8e8
}
.mx-date-time{
  position:relative;
  width:248px;
  height:270px
}
.mx-date-time .mx-time{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%
}
.mx-date-time-range{
  position:relative;
  width:496px;
  height:270px
}
.mx-date-time-range .mx-time-range{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%
}
.mx-time-header{
  border-bottom:1px solid #e8e8e8
}
.mx-time-content{
  height:224px;
  box-sizing:border-box;
  overflow:hidden
}
.mx-time-columns{
  display:flex;
  width:100%;
  height:100%;
  overflow:hidden
}
.mx-time-column{
  flex:1;
  position:relative;
  border-left:1px solid #e8e8e8;
  text-align:center
}
.mx-time-column:first-child{
  border-left:0
}
.mx-time-column .mx-time-list{
  margin:0;
  padding:0;
  list-style:none
}
.mx-time-column .mx-time-list::after{
  content:"";
  display:block;
  height:192px
}
.mx-time-column .mx-time-item{
  cursor:pointer;
  font-size:12px;
  height:32px;
  line-height:32px
}
.mx-time-column .mx-time-item:hover{
  color:#73879c;
  background-color:#f3f9fe
}
.mx-time-column .mx-time-item.active{
  color:#1284e7;
  background-color:transparent;
  font-weight:700
}
.mx-time-column .mx-time-item.disabled{
  cursor:not-allowed;
  color:#ccc;
  background-color:#f3f3f3
}
.mx-time-option{
  cursor:pointer;
  padding:8px 10px;
  font-size:14px;
  line-height:20px
}
.mx-time-option:hover{
  color:#73879c;
  background-color:#f3f9fe
}
.mx-time-option.active{
  color:#1284e7;
  background-color:transparent;
  font-weight:700
}
.mx-time-option.disabled{
  cursor:not-allowed;
  color:#ccc;
  background-color:#f3f3f3
}

.mx-datepicker svg {
  fill: none;
}
.mx-input-wrapper,
.mx-datepicker {
  width: 100%;
}
</style>
