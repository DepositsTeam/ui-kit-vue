<template>
  <d-box
    is="svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.8701 19.06H8.87012C5.70012 19.06 3.12012 16.48 3.12012 13.31C3.12012 10.14 5.70012 7.56 8.87012 7.56H19.8701C20.2801 7.56 20.6201 7.9 20.6201 8.31C20.6201 8.72 20.2801 9.06 19.8701 9.06H8.87012C6.53012 9.06 4.62012 10.97 4.62012 13.31C4.62012 15.65 6.53012 17.56 8.87012 17.56H16.8701C17.2801 17.56 17.6201 17.9 17.6201 18.31C17.6201 18.72 17.2901 19.06 16.8701 19.06Z"
      :fill="smartColor || fill"
    />
    <path
      d="M17.57 11.56C17.38 11.56 17.19 11.49 17.04 11.34C16.75 11.05 16.75 10.57 17.04 10.28L19.07 8.25L17.04 6.22C16.75 5.93 16.75 5.45 17.04 5.16C17.33 4.87 17.81 4.87 18.1 5.16L20.66 7.72C20.95 8.01 20.95 8.49 20.66 8.78L18.1 11.34C17.95 11.49 17.76 11.56 17.57 11.56Z"
      :fill="smartColor || fill"
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
