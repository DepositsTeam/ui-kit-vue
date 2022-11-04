<template>
  <d-dropdown
    v-model="localValue"
    :options="options"
    v-bind="{ ...$attrs, ...$props }"
    return-obj-model
  >
    <template #icon="option">
      {{ option.emoji }}
    </template>
  </d-dropdown>
</template>

<script setup>
import { DDropdown } from "../main";
import countries from "./countries_states_cities.json";
import { computed } from "vue";

const emit = defineEmits(["update:modelValue", "statesChanged"]);

const props = defineProps({
  modelValue: {
    type: String,
  },
});

const localValue = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value.value);

    emit("statesChanged", value.states);
  },
});

const options = countries.map((country) => ({
  emoji: country.emoji,
  text: country.name,
  value: country.iso2,
  states: country.states,
}));
</script>
<style lang="scss"></style>
