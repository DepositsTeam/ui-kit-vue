<template>
  <d-box
    is="svg"
    :width="width"
    :height="height"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.99996 12.8333C3.7783 12.8333 1.16663 10.2216 1.16663 6.99996C1.16663 3.7783 3.7783 1.16663 6.99996 1.16663C10.2216 1.16663 12.8333 3.7783 12.8333 6.99996C12.8333 10.2216 10.2216 12.8333 6.99996 12.8333ZM7.58329 6.99996V4.08329H6.41663V8.16663H9.91663V6.99996H7.58329Z"
      :fill="smartColor || fill"
    />
  </d-box>
</template>

<script setup>
import DBox from "@/d-box/DBox.vue";

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
