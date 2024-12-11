<template>
  <d-box
    is="svg"
    :width="width"
    :height="height"
    viewBox="0 0 23 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.08881 3.90933C2.08881 2.63381 3.12282 1.59979 4.39835 1.59979H12.0045C12.1705 1.59979 12.3346 1.61766 12.4944 1.65234V6.57206C12.4944 8.57404 14.1272 10.1917 16.1291 10.1731L21.0859 10.1271C21.1232 10.2919 21.1426 10.4617 21.1428 10.6334L21.1621 24.0873C21.1639 25.3641 20.1293 26.4002 18.8525 26.4002H4.39834C3.12282 26.4002 2.08881 25.3661 2.08881 24.0906V3.90933ZM20.3031 8.84262L13.7861 2.42241V6.57206C13.7861 7.85597 14.8332 8.89342 16.1171 8.8815L20.3031 8.84262ZM4.39835 0.308105C2.40945 0.308105 0.797119 1.92043 0.797119 3.90933V24.0906C0.797119 26.0795 2.40944 27.6918 4.39834 27.6918H18.8525C20.8434 27.6918 22.4566 26.0764 22.4538 24.0855L22.4345 10.6315C22.4332 9.66888 22.0464 8.74684 21.3606 8.07125L14.5318 1.3439C13.8581 0.680158 12.9503 0.308105 12.0045 0.308105H4.39835Z"
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
    default: "23",
  },
  height: {
    type: String,
    default: "28",
  },
});
</script>

<style scoped></style>
