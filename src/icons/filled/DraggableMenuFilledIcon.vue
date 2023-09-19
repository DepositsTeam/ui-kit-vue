<template>
  <d-box
    is="svg"
    :width="width"
    :height="height"
    viewBox="0 0 10 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="4" height="4" rx="0.5" :fill="smartColor || fill" />
    <rect y="6" width="4" height="4" rx="0.5" :fill="smartColor || fill" />
    <rect y="12" width="4" height="4" rx="0.5" :fill="smartColor || fill" />
    <rect y="18" width="4" height="4" rx="0.5" :fill="smartColor || fill" />
    <rect x="6" width="4" height="4" rx="0.5" :fill="smartColor || fill" />
    <rect
      x="6"
      y="6"
      width="4"
      height="4"
      rx="0.5"
      :fill="smartColor || fill"
    />
    <rect
      x="6"
      y="12"
      width="4"
      height="4"
      rx="0.5"
      :fill="smartColor || fill"
    />
    <rect
      x="6"
      y="18"
      width="4"
      height="4"
      rx="0.5"
      :fill="smartColor || fill"
    />
  </d-box>
</template>

<script setup>
import { DBox } from "@/main";

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
