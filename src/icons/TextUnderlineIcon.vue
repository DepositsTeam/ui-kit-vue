<template>
  <d-box is="svg"
    :width="width"
    :height="height"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.1533 21.75H5.35446C4.95035 21.75 4.61523 21.41 4.61523 21C4.61523 20.59 4.95035 20.25 5.35446 20.25H19.1533C19.5574 20.25 19.8925 20.59 19.8925 21C19.8925 21.41 19.5574 21.75 19.1533 21.75Z"
      :fill="smartColor || fill"
    />
    <path
      d="M12.2539 17.75C8.04523 17.75 4.61523 14.27 4.61523 10V3C4.61523 2.59 4.95035 2.25 5.35446 2.25C5.75857 2.25 6.09368 2.59 6.09368 3V10C6.09368 13.45 8.85345 16.25 12.2539 16.25C15.6543 16.25 18.4141 13.45 18.4141 10V3C18.4141 2.59 18.7492 2.25 19.1533 2.25C19.5574 2.25 19.8925 2.59 19.8925 3V10C19.8925 14.27 16.4625 17.75 12.2539 17.75Z"
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
