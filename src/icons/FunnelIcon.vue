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
      d="M5 3V6.19387C5.00002 6.46603 5.05342 6.73548 5.15697 6.98545C5.26051 7.23542 5.41211 7.46054 5.6023 7.64756L9.59847 11.5744C9.78863 11.7613 9.94025 11.9867 10.0438 12.2365C10.1473 12.4863 10.2007 12.7551 10.2008 13.0271V21L14.7673 19.1097V13.0355C14.7674 12.7623 14.8213 12.4917 14.9257 12.241C15.0301 11.9902 15.1828 11.7644 15.3743 11.5774L19.3939 7.6515C19.5854 7.46444 19.7381 7.23864 19.8423 6.98791C19.9466 6.73718 20.0001 6.46703 20 6.19387V3.00394H8.06146"
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
