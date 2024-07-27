<template>
  <d-box
    class="ui-counter"
    :style="{
      '--counter-spacing': spacing,
    }"
  >
    <d-box
      class="ui-text-field__wrapper"
      :class="[`size__${computedInputSize}`]"
    >
      <slot name="label">
        <d-label
          v-if="!!label"
          :label-class="labelClass"
          :html-for="computedID"
          :label-font-face="labelFontFace"
        >
          {{ label }}
        </d-label>
      </slot>

      <d-box class="ui-text-field__input-wrapper">
        <d-box
          class="ui-text-field--counter_input_button left"
          :class="{ coloredButtons }"
          @click="decrease"
        >
          -
        </d-box>
        <d-box
          class="ui-text-field__input"
          :class="{
            'has-error': errorMessage,
            disabled,
            [inputClass]: true,
          }"
          :max="max"
          :min="min"
          :maxlength="maxlength"
          :multiple="multiple"
          :minlength="minlength"
          readonly
          :name="name"
          is="input"
          :value="computedModelValue"
          @change="handleChangeEvents"
          :font-face="fontFace"
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
          :id="computedID"
        />
        <d-box
          class="ui-text-field--counter_input_button right"
          :class="{ coloredButtons }"
          @click="increase"
        >
          +
        </d-box>
      </d-box>
      <d-box v-if="errorMessage" class="ui-text-field__error">
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
  </d-box>
</template>

<script setup>
import { DBox, DText, ErrorIcon } from "../main";
import inputProps from "../utils/props/inputProps";
import { wrapperProps } from "../utils/props/wrapperProps";
import { onMounted, computed } from "vue";
import number_format from "../utils/number_format";
import { useInputSize } from "../utils/composables/useInputSize";
import uniqueRandomString from "@/utils/uniqueRandomString";
import DLabel from "@/components/forms/DLabel.vue";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  ...inputProps,
  ...wrapperProps,
  modelValue: {
    type: Number,
  },
  maxlength: {
    type: [String, Number],
  },
  inputClass: {
    type: String,
  },
  spacing: {
    type: String,
    default: "16px",
  },
  coloredButtons: {
    type: Boolean,
  },
  decimal: {
    type: Boolean,
    default: true,
  },
  alterMagnitude: {
    type: Number,
    default: 1,
    validator: (value) => value > 0,
  },
  max: {
    type: Number,
  },
  min: {
    type: Number,
  },
});

const { computedInputSize } = useInputSize(props);

const computedID = computed(() => (props.id ? props.id : uniqueRandomString()));

const handleChangeEvents = (e) => {
  emit("update:modelValue", e.target.value);
};

onMounted(() => {
  if (!props.modelValue) {
    emit("update:modelValue", 0);
  }
});

const computedModelValue = computed(() => {
  if (props.decimal) {
    return number_format(props.modelValue, 2);
  }
  return props.modelValue ? props.modelValue : "0";
});

const increase = () => {
  const modelValue = parseFloat(computedModelValue.value);
  if (typeof props.max === "number") {
    if (modelValue >= props.max) {
      return;
    }
  }
  emit("update:modelValue", modelValue + props.alterMagnitude);
};

const decrease = () => {
  const modelValue = parseFloat(computedModelValue.value);
  if (typeof props.min === "number") {
    if (modelValue <= props.min) {
      return;
    }
  }
  emit("update:modelValue", modelValue - props.alterMagnitude);
};
</script>

<style lang="scss" scoped>
@import "../scss/textfield";
.ui-text-field--counter_input_button {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid #8895a7;
  border-radius: 6px;
  color: #8895a7;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  &.dark_mode {
    border-color: #64748b;
    color: #64748b;
  }
  &:hover,
  &.coloredButtons {
    border-color: var(--light-primary-action-color);
    color: var(--light-primary-action-color);
  }
  &.left {
    margin-right: var(--counter-spacing);
  }
  &.right {
    margin-left: var(--counter-spacing);
  }
}
</style>
