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
      d="M16.5269 8.63965L9.02887 10.8247V6.01807L19.386 3V7.80566M19.387 7.80688V15.8169M19.387 15.8169C19.387 17.2059 18.261 18.3319 16.872 18.3319C15.483 18.3319 14.357 17.2059 14.357 15.8169C14.357 14.4279 15.483 13.3019 16.872 13.3019C18.261 13.3019 19.387 14.4279 19.387 15.8169ZM9.03 10.3308V18.3408M9.03 18.3408C9.03 19.7298 7.904 20.8568 6.515 20.8568C5.126 20.8568 4 19.7308 4 18.3418C4 16.9528 5.126 15.8268 6.515 15.8268C7.904 15.8268 9.03 16.9518 9.03 18.3408Z"
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
