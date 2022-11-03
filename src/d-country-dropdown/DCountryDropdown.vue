<template>
  <d-dropdown :options="options" v-bind="{ ...$attrs, ...$props }">
    <template #icon="option">
      {{ option.emoji }}
    </template>
  </d-dropdown>
</template>
<script setup>
import { DDropdown } from "../main";
import countries from "./countries_states_cities.json";

const options = countries.map((country) => ({
  emoji: country.emoji,
  text: country.name,
  value: country.iso2,
}));
</script>
<style lang="scss"></style>
