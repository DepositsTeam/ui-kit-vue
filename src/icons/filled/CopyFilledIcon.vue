<template>
  <d-box
    is="svg"
    width="19"
    height="18"
    viewBox="0 0 19 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.938965"
      :width="width * 0.797257894736842"
      :height="height * 0.838711111111111"
      rx="2"
      :fill="smartColor"
    />
    <rect
      x="4.35205"
      y="3.40332"
      :width="width * 0.744626315789474"
      :height="height * 0.783155555555556"
      rx="1.5"
      :stroke="smartColor"
    />
  </d-box>
</template>

<script setup>
import { DBox } from "../../main";
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
