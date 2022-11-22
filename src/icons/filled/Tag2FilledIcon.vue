<template>
  <d-box
    is="svg"
    :width="width"
    :height="height"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.8724 6.52485L11.4749 3.12735C10.7624 2.41485 9.77986 2.03235 8.77486 2.08485L5.02486 2.26485C3.52486 2.33235 2.33236 3.52485 2.25736 5.01735L2.07736 8.76735C2.03236 9.77235 2.40736 10.7549 3.11986 11.4674L6.51736 14.8649C7.91236 16.2599 10.1774 16.2599 11.5799 14.8649L14.8724 11.5724C16.2749 10.1849 16.2749 7.91985 14.8724 6.52485ZM7.12486 9.28485C5.93986 9.28485 4.96486 8.31735 4.96486 7.12485C4.96486 5.93235 5.93986 4.96485 7.12486 4.96485C8.30986 4.96485 9.28486 5.93235 9.28486 7.12485C9.28486 8.31735 8.30986 9.28485 7.12486 9.28485ZM13.1474 10.1474L10.1474 13.1474C10.0349 13.2599 9.89236 13.3124 9.74986 13.3124C9.60736 13.3124 9.46486 13.2599 9.35236 13.1474C9.13486 12.9299 9.13486 12.5699 9.35236 12.3524L12.3524 9.35235C12.5699 9.13485 12.9299 9.13485 13.1474 9.35235C13.3649 9.56985 13.3649 9.92985 13.1474 10.1474Z"
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
