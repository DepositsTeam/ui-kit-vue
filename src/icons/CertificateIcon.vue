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
      d="M3 11.9272C3 13.0742 4.1319 13.9884 4.5459 14.9854C4.9739 16.0184 4.83599 17.4622 5.61499 18.2402C6.39399 19.0182 7.83587 18.8811 8.86987 19.3091C9.86987 19.7231 10.781 20.854 11.927 20.854C13.073 20.854 13.9869 19.7221 14.9849 19.3091C16.0189 18.8801 17.461 19.0192 18.24 18.2402C19.019 17.4612 18.8808 16.0184 19.3088 14.9854C19.7228 13.9854 20.855 13.0742 20.855 11.9272C20.855 10.7802 19.7228 9.86712 19.3088 8.87012C18.8808 7.83612 19.019 6.39326 18.24 5.61426C17.461 4.83526 16.0189 4.97439 14.9849 4.54639C13.9849 4.13239 13.074 3 11.927 3C10.78 3 9.86687 4.13239 8.86987 4.54639C7.83687 4.97439 6.39399 4.83623 5.61499 5.61523C4.83599 6.39423 4.9749 7.83612 4.5459 8.87012C4.1329 9.86312 3 10.7802 3 11.9272Z"
      :stroke="smartColor || stroke"
      :stroke-width="strokeWidth"
      :stroke-linecap="strokeLineCap"
      :stroke-linejoin="strokeLineJoin"
    />
    <path
      d="M13.777 10.0801L10.082 13.7751"
      :stroke="smartColor || stroke"
      :stroke-width="strokeWidth"
      :stroke-linecap="strokeLineCap"
      :stroke-linejoin="strokeLineJoin"
    />
    <path
      d="M10.187 11.0352C10.6012 11.0352 10.937 10.6994 10.937 10.2852C10.937 9.87094 10.6012 9.53516 10.187 9.53516C9.7728 9.53516 9.43701 9.87094 9.43701 10.2852C9.43701 10.6994 9.7728 11.0352 10.187 11.0352Z"
      :fill="smartColor || fill"
    />
    <path
      d="M13.687 14.5352C14.1012 14.5352 14.437 14.1994 14.437 13.7852C14.437 13.3709 14.1012 13.0352 13.687 13.0352C13.2728 13.0352 12.937 13.3709 12.937 13.7852C12.937 14.1994 13.2728 14.5352 13.687 14.5352Z"
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
