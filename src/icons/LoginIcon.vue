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
      d="M11.9031 20.3669H4.48804C4.09339 20.3669 3.71485 20.2102 3.43579 19.9312C3.15674 19.6521 3 19.2735 3 18.8789V5.48792C3 5.09327 3.15674 4.71485 3.43579 4.43579C3.71485 4.15674 4.09339 4 4.48804 4H11.9031M15.291 17.834L20.9409 12.184L15.291 6.53394M10.27 12.1829H20.702"
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
