<template>
  <d-box
    is="svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path
      d="M14.1676 4.00171H20V10.4174M19.9964 14.7V18.6662C19.9964 19.0198 19.856 19.3587 19.606 19.6087C19.356 19.8587 19.0169 19.9994 18.6633 19.9994H5.33315C4.97958 19.9994 4.64044 19.8587 4.39043 19.6087C4.14042 19.3587 4 19.0198 4 18.6662V5.33586C4 4.98229 4.14042 4.64337 4.39043 4.39336C4.64044 4.14335 4.97958 4.00293 5.33315 4.00293H10.1657M11.9987 11.9987L19.9973 4"
      :stroke="smartColor || stroke"
      :stroke-width="strokeWidth"
      :stroke-linecap="strokeLineCap"
      :stroke-linejoin="strokeLineJoin"
    />
  </d-box>
</template>

<script setup>
import { DBox } from "../main";
defineProps({
  smartColor: {
    type: String,
    default: "currentcolor",
  },
  fill: {
    type: String,
  },
  stroke: {
    type: String,
  },
  strokeWidth: {
    type: String,
    default: "1.5",
  },
  strokeLineCap: {
    type: String,
    default: "round",
  },
  strokeLineJoin: {
    type: String,
    default: "round",
  },
  width: {
    type: String,
    default: "24",
  },
  height: {
    type: String,
    default: "24",
  },
});
</script>

<style scoped></style>
