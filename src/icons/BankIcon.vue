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
      d="M2 20H22V22H2V20ZM4 12H6V19H4V12ZM9 12H11V19H9V12ZM13 12H15V19H13V12ZM18 12H20V19H18V12ZM2 7L12 2L22 7V11H2V7ZM4 8.236V9H20V8.236L12 4.236L4 8.236ZM12 8C11.8022 8 11.6089 7.94135 11.4444 7.83147C11.28 7.72159 11.1518 7.56541 11.0761 7.38268C11.0004 7.19996 10.9806 6.99889 11.0192 6.80491C11.0578 6.61093 11.153 6.43275 11.2929 6.29289C11.4327 6.15304 11.6109 6.0578 11.8049 6.01921C11.9989 5.98063 12.2 6.00043 12.3827 6.07612C12.5654 6.15181 12.7216 6.27998 12.8315 6.44443C12.9414 6.60888 13 6.80222 13 7C13 7.26522 12.8946 7.51957 12.7071 7.70711C12.5196 7.89464 12.2652 8 12 8Z"
      :fill="smartColor || fill"
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
