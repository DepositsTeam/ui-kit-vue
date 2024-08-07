<template>
  <d-box
    class="ui-checkbox__wrapper"
    is="label"
    :class="{
      alignToTop,
      dashed,
      [wrapperClass]: wrapperClass,
      disabled,
      alignRight,
    }"
    :style="{
      '--checkbox-size': size,
    }"
  >
    <d-box
      is="input"
      class="ui-checkbox"
      type="checkbox"
      v-bind="$attrs"
      :value="computedValue"
      @change="handleChange"
      :checked="isChecked"
      :class="{
        hasLabel: label || $slots.default,
      }"
      :disabled="disabled"
    />
    <d-box v-if="$slots.default">
      <slot></slot>
    </d-box>
    <d-text
      v-else
      class="ui-checkbox__label-wrap ui-text heroNew"
      :class="{ [labelClass]: labelClass }"
      >{{ label }}</d-text
    >
  </d-box>
</template>

<script setup>
import { DBox, DText } from "../main";
import { computed } from "vue";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  wrapperClass: {
    type: String,
  },
  disabled: {
    type: Boolean,
  },
  alignToTop: {
    type: Boolean,
  },
  dashed: {
    type: Boolean,
  },
  label: {
    type: String,
  },
  labelClass: {
    type: String,
  },
  value: {
    type: [String, Number],
    default: "",
  },
  modelValue: {
    default: false,
  },
  trueValue: {
    default: true,
  },
  falseValue: {
    default: false,
  },
  values: {
    type: Array,
    default: () => [],
  },
  alignRight: {
    type: Boolean,
  },
  size: {
    type: String,
    default: "16px",
  },
  checked: {
    type: Boolean,
    default: null,
  },
  readonly: {
    type: Boolean,
  },
});

const computedValue = computed(() =>
  props.value === "" ? props.label : props.value
);

const computedTrueValue = computed(() => {
  if (props.value) {
    return props.value;
  } else {
    return props.trueValue === true ? true : this.value;
  }
});

const isChecked = computed(() => {
  if (props.checked !== null) {
    return props.checked;
  }
  if (props.modelValue instanceof Array) {
    if (props.values.length) {
      return props.values.every((element) => {
        return props.modelValue.includes(element);
      });
    }
    return props.modelValue.includes(computedValue.value);
  }
  return props.modelValue === computedTrueValue.value;
});

const handleChange = (e) => {
  alert("I got here")
  if (props.disabled || props.readonly) {
    return;
  }
  if (props.checked !== null) {
    e.target.checked = props.checked;
    return;
  }
  let currentlyChecked = e.target.checked;
  if (props.values.length) {
    let newValue = [...props.modelValue];
    // TODO to look for the most efficient way to do this!!!!!! Saving space and time
    if (currentlyChecked) {
      props.values.forEach((value) => {
        if (!newValue.includes(value)) {
          newValue.push(value);
        }
      });
    } else {
      props.values.forEach((value) => {
        if (newValue.includes(value)) {
          newValue.splice(newValue.indexOf(value), 1);
        }
      });
    }
    emit("update:modelValue", newValue);
  } else {
    if (props.modelValue instanceof Array) {
      let newValue = [...props.modelValue];
      if (currentlyChecked) {
        newValue.push(computedValue.value);
      } else {
        newValue.splice(newValue.indexOf(computedValue.value), 1);
      }

      emit("update:modelValue", newValue);
    } else {
      emit(
        "update:modelValue",
        currentlyChecked ? props.trueValue : props.falseValue
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.ui-checkbox__wrapper {
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  &.disabled {
    cursor: not-allowed;
  }

  &.alignRight {
    flex-direction: row-reverse;
    > {
      input {
        &.hasLabel {
          margin-right: 0;
          margin-left: 8px;
        }
      }
    }
  }

  .ui-checkbox__label-wrap.ui-text {
    flex: 1;
    &.dark_mode {
      color: #cbd5e1;
    }
  }

  &.alignToTop {
    align-items: flex-start;
  }

  > {
    * {
      margin: 0;
    }

    input {
      &.hasLabel {
        margin-right: 8px;
      }
      position: relative;
      height: var(--checkbox-size);
      min-height: var(--checkbox-size);
      width: var(--checkbox-size);
      min-width: var(--checkbox-size);
      background: white;
      border: 1px solid #ced6de;
      border-radius: 2px;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      cursor: pointer;
      &.dark_mode {
        background: #202b3c;
        border: 1px solid #384860;
      }
      &.disabled,
      &:disabled {
        cursor: not-allowed;
      }

      &:checked {
        background-color: var(--light-primary-action-color);
        width: var(--checkbox-size);
        height: var(--checkbox-size);
        border: none;
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='10' height='8' viewBox='0 0 10 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.5 4L4 6.5L9 1.5' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: center;
      }
    }
  }

  &.dashed > input:checked {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.5 6H9.5' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  }

  > input:checked {
    &:hover {
      background-color: var(--light-primary-action-color);
    }

    &:disabled {
      background-color: var(--light-primary-action-disabled-color);
      cursor: not-allowed;
    }
  }
}
</style>
