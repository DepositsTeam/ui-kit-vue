<template>
  <d-dropdown
    v-model="localValue"
    :options="countries"
    v-bind="{ ...$attrs, ...$props, returnFullObject: true }"
    @computedOptions="updateComputedOptions"
    :size="computedInputSize"
    return-obj-model
    :pill="pill"
    :disable-dropdown="onlyUs"
    :readonly="onlyUs"
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
import { computed, onBeforeMount, ref } from "vue";
import inputProps from "../utils/props/inputProps";
import { useInputSize } from "@/utils/composables/useInputSize";

const emit = defineEmits(["update:modelValue", "statesChanged"]);

const countries = ref([]);

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
  optionIcon: {
    type: String,
    default: "emoji",
  },
  returnFullObject: {
    type: Boolean,
  },
  modelValue: {
    type: String,
  },
  pill: {
    type: Boolean,
    default: false,
  },
  onlyUs: {
    type: Boolean,
    default: false,
  },
});

onBeforeMount(async () => {
  try {
    let countriesJSON;
    if (props.onlyUs) {
      countriesJSON = await import("../utils/resources/countries/usa.json");
    } else {
      countriesJSON = await import(
        "../utils/resources/countries/countries_states_cities.json"
      );
    }
    countries.value = countriesJSON.default;
  } catch (err) {
    console.log("Error with importing countries");
  }
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

const updateComputedOptions = (computedOptions) => {
  if (props.onlyUs && computedOptions.value) {
    localValue.value = [...computedOptions.value].filter(
      (country) => country.iso2 === "US"
    )[0];
  }
};
</script>
<style lang="scss"></style>
