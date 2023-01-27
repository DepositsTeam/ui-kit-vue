<template>
  <d-dropdown
    :label="label"
    :fetching="fetching"
    v-model="address"
    :options="suggestedAddresses"
  />
</template>

<script setup>
import { DDropdown } from "../main";
import inputProps from "../utils/inputProps";
import { ref, watch } from "vue";

const address = ref(null);
const suggestedAddresses = ref([]);
const fetching = ref(true);

watch(address, (val) => {
  console.log(val);
});

defineProps({
  ...inputProps,
});
</script>

<style scoped></style>
