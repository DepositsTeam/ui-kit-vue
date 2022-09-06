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
      d="M15.1299 19.06H7.12988C6.71988 19.06 6.37988 18.72 6.37988 18.31C6.37988 17.9 6.71988 17.56 7.12988 17.56H15.1299C17.4699 17.56 19.3799 15.65 19.3799 13.31C19.3799 10.97 17.4699 9.06 15.1299 9.06H4.12988C3.71988 9.06 3.37988 8.72 3.37988 8.31C3.37988 7.9 3.71988 7.56 4.12988 7.56H15.1299C18.2999 7.56 20.8799 10.14 20.8799 13.31C20.8799 16.48 18.2999 19.06 15.1299 19.06Z"
      :fill="smartColor || fill"
    />
    <path
      d="M6.43006 11.56C6.24006 11.56 6.05006 11.49 5.90006 11.34L3.34006 8.78C3.05006 8.49 3.05006 8.01 3.34006 7.72L5.90006 5.16C6.19006 4.87 6.67006 4.87 6.96006 5.16C7.25006 5.45 7.25006 5.93 6.96006 6.22L4.93006 8.25L6.96006 10.28C7.25006 10.57 7.25006 11.05 6.96006 11.34C6.82006 11.49 6.62006 11.56 6.43006 11.56Z"
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
