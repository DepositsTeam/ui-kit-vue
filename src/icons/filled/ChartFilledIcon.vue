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
      d="M16.5 16H1.5C1.48694 16 1.47128 15.9948 1.45699 15.9805C1.4427 15.9662 1.4375 15.9506 1.4375 15.9375C1.4375 15.9244 1.4427 15.9088 1.45699 15.8945C1.47128 15.8802 1.48694 15.875 1.5 15.875H16.5C16.5131 15.875 16.5287 15.8802 16.543 15.8945C16.5573 15.9088 16.5625 15.9244 16.5625 15.9375C16.5625 15.9506 16.5573 15.9662 16.543 15.9805C16.5287 15.9948 16.5131 16 16.5 16Z"
      :fill="smartColor || fill"
      :stroke="smartColor || stroke"
    />
    <path
      d="M10.1875 16H7.8125V3C7.8125 2.64318 7.88747 2.39584 8.00286 2.24712C8.10043 2.12137 8.27753 2 8.6625 2H9.3375C9.72247 2 9.89957 2.12137 9.99714 2.24712C10.1125 2.39584 10.1875 2.64318 10.1875 3V16Z"
      :fill="smartColor || fill"
      :stroke="smartColor || stroke"
    />
    <path
      d="M4.75 16H2.75V7.5C2.75 7.1339 2.81902 6.87687 2.92411 6.72449C3.00746 6.60363 3.14437 6.5 3.45 6.5H4.05C4.35563 6.5 4.49254 6.60363 4.57589 6.72449C4.68098 6.87687 4.75 7.1339 4.75 7.5V16Z"
      :fill="smartColor || fill"
      :stroke="smartColor || stroke"
    />
    <path
      d="M12.75 11.25V16.5H15.75V11.25C15.75 10.425 15.45 9.75 14.55 9.75H13.95C13.05 9.75 12.75 10.425 12.75 11.25Z"
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
