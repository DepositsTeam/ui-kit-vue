<template>
  <d-box
    is="svg"
    :width="width"
    :height="height"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.76879 8.87218L2.97526 9.76073C2åçç.77639 9.98427 2.66676 10.2702 2.66663 10.5662V12.3286C2.66663 12.5951 2.77518 12.8507 2.96843 13.0391C3.16168 13.2275 3.42382 13.3333 3.69712 13.3333H12.9695C13.2428 13.3333 13.5049 13.2275 13.6982 13.0391C13.8914 12.8507 14 12.5951 14 12.3286V10.5662C14 10.2702 13.8905 9.98418 13.6915 9.76073L12.898 8.87218M5.31997 6.21742L8.33198 9.15403L11.3448 6.21742M8.33206 2V9.00553"
      :stroke="smartColor || fill"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
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
    default: "16",
  },
  height: {
    type: String,
    default: "16",
  },
});
</script>

<style scoped></style>
