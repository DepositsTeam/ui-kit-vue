<template>
  <d-box
    is="svg"
    :width="width"
    :height="height"
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 12C16.49 12 12 16.49 12 22C12 27.51 16.49 32 22 32C27.51 32 32 27.51 32 22C32 16.49 27.51 12 22 12ZM26 22.75H22.75V26C22.75 26.41 22.41 26.75 22 26.75C21.59 26.75 21.25 26.41 21.25 26V22.75H18C17.59 22.75 17.25 22.41 17.25 22C17.25 21.59 17.59 21.25 18 21.25H21.25V18C21.25 17.59 21.59 17.25 22 17.25C22.41 17.25 22.75 17.59 22.75 18V21.25H26C26.41 21.25 26.75 21.59 26.75 22C26.75 22.41 26.41 22.75 26 22.75Z"
      :fill="smartColor"
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
