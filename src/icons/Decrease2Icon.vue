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
      d="M19.8829 5H15.8409C15.0951 5 14.3566 5.147 13.6676 5.43262C12.9786 5.71824 12.3525 6.13685 11.8253 6.66455C11.2982 7.19225 10.8802 7.81872 10.5953 8.50806C10.3104 9.19739 10.1644 9.936 10.1652 10.6819L10.174 19.8821M5 14.72L10.1689 19.8889L15.3381 14.72"
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
