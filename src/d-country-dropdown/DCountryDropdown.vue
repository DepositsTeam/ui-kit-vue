<template>
  <d-dropdown
    v-model="localValue"
    :options="countries"
    v-bind="{ ...$attrs, ...$props, returnFullObject: true }"
    :size="computedInputSize"
    return-obj-model
  >
    <template #icon="option">
      {{ option.emoji }}
    </template>
    <slot></slot>
    <template #label>
      <slot name="label"></slot>
    </template>
  </d-dropdown>
</template>

<script setup>
import { DDropdown } from "../main";
import countries from "./countries_states_cities.json";
import { computed } from "vue";
import inputProps from "../utils/inputProps";
import { useInputSize } from "../utils/composables/useInputSize";

const emit = defineEmits(["update:modelValue", "statesChanged"]);

const props = defineProps({
  ...inputProps,
  optionTitle: {
    type: String,
    default: "name",
  },
  optionValue: {
    type: String,
    default: "iso2",
  },
  returnFullObject: {
    type: Boolean,
  },
  modelValue: {
    type: String,
  },
});

const { computedInputSize } = useInputSize(props);

const localValue = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    if (value) {
      if (props.returnFullObject) {
        emit("update:modelValue", value);
      } else {
        emit("update:modelValue", value[props.optionValue]);
      }
      emit("statesChanged", value.states);
    }
  },
});
</script>
<style lang="scss"></style>
