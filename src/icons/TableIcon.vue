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
      :fill-rule="fillRule"
      :clip-rule="clipRule"
      :fill="smartColor || fill"
      d="M2.25 5.25C2.25 4.83579 2.58579 4.5 3 4.5H21C21.4142 4.5 21.75 4.83579 21.75 5.25V18C21.75 18.3978 21.592 18.7794 21.3107 19.0607C21.0294 19.342 20.6478 19.5 20.25 19.5H3.75C3.35218 19.5 2.97065 19.342 2.68934 19.0607C2.40804 18.7794 2.25 18.3978 2.25 18V5.25ZM3.75 10.5V13.5H7.50001V10.5H3.75ZM3.75 9V6H20.25V9H3.75ZM9.00001 10.5V13.5H20.25V10.5H9.00001ZM20.25 15H9.00001V18H20.25V15ZM7.50001 18V15H3.75V18H7.50001Z"
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
  fillRule: {
    type: String,
    default: "evenodd",
  },
  clipRule: {
    type: String,
    default: "evenodd",
  },
});
</script>

<style scoped></style>
