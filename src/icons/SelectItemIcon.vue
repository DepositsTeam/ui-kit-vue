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
      d="M17.3609 12.0708V18.2217C17.3609 18.6933 17.1737 19.1456 16.8403 19.479C16.5068 19.8125 16.0545 20 15.5829 20H5.77778C5.30626 20 4.85411 19.8125 4.52069 19.479C4.18727 19.1456 4 18.6933 4 18.2217V8.41597C4 7.94437 4.18727 7.49215 4.52069 7.15868C4.85411 6.82521 5.30626 6.6377 5.77778 6.6377H11.9547"
      :stroke="smartColor || stroke"
      :stroke-width="strokeWidth"
      :stroke-linecap="strokeLineCap"
      :stroke-linejoin="strokeLineJoin"
    />
    <path
      d="M14.7218 6.59932V6.67459C14.7275 7.36916 15.0086 8.03312 15.5035 8.52047C15.9983 9.00783 16.6664 9.27863 17.3609 9.27362V9.27362C18.0554 9.27863 18.7235 9.00783 19.2183 8.52047C19.7132 8.03312 19.9943 7.36916 20 6.67459V6.59932C19.9941 5.90482 19.7129 5.24096 19.2181 4.75365C18.7233 4.26635 18.0553 3.99529 17.3609 4.00007V4.00007C16.6664 3.99506 15.9983 4.26608 15.5035 4.75343C15.0086 5.24079 14.7275 5.90475 14.7218 6.59932V6.59932Z"
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
