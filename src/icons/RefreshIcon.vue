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
      d="M16.1659 9.68896L19.5099 6.34399L16.1659 3M5 13.1918V9.16694C5 8.79635 5.07302 8.42924 5.21484 8.08686C5.35666 7.74448 5.56437 7.43338 5.82642 7.17134C6.08846 6.90929 6.39956 6.70158 6.74194 6.55976C7.08432 6.41794 7.45143 6.34492 7.82202 6.34492H19.511M8.34502 14.1661L5.00005 17.5111M5.00005 17.5111L8.34502 20.8551M5.00005 17.5111L16.689 17.511C17.4373 17.5107 18.1549 17.2133 18.6839 16.6841C19.2129 16.1549 19.51 15.4372 19.51 14.689V10.6641"
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
