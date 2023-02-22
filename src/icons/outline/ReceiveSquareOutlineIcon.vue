<template>
  <d-box
    is="svg"
    :width="width"
    :height="height"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.50033 18.8334H12.5003C16.667 18.8334 18.3337 17.1667 18.3337 13V8.00002C18.3337 3.83335 16.667 2.16669 12.5003 2.16669H7.50033C3.33366 2.16669 1.66699 3.83335 1.66699 8.00002V13C1.66699 17.1667 3.33366 18.8334 7.50033 18.8334Z"
      :stroke="smartColor || stroke"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7.5 10.0917L10 12.5917L12.5 10.0917"
      :stroke="smartColor || stroke"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10 12.5917V5.92499"
      :stroke="smartColor || stroke"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5 14.2583C8.24167 15.3416 11.7583 15.3416 15 14.2583"
      :stroke="smartColor || stroke"
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
    default: "24",
  },
  height: {
    type: String,
    default: "24",
  },
});
</script>

<style scoped></style>
