<template>
  <d-box
    is="svg"
    :width="width"
    :height="height"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.00004 15.1666C4.04671 15.1666 0.833374 11.9533 0.833374 7.99998C0.833374 4.04665 4.04671 0.833313 8.00004 0.833313C11.9534 0.833313 15.1667 4.04665 15.1667 7.99998C15.1667 11.9533 11.9534 15.1666 8.00004 15.1666ZM8.00004 1.83331C4.60004 1.83331 1.83337 4.59998 1.83337 7.99998C1.83337 11.4 4.60004 14.1666 8.00004 14.1666C11.4 14.1666 14.1667 11.4 14.1667 7.99998C14.1667 4.59998 11.4 1.83331 8.00004 1.83331Z"
      :fill="smartColor || fill"
    />
    <path
      d="M6.11332 10.3867C5.98666 10.3867 5.85999 10.34 5.75999 10.24C5.56666 10.0467 5.56666 9.72666 5.75999 9.53332L9.53332 5.75999C9.72666 5.56666 10.0467 5.56666 10.24 5.75999C10.4333 5.95332 10.4333 6.27332 10.24 6.46666L6.46666 10.24C6.37332 10.34 6.23999 10.3867 6.11332 10.3867Z"
      :fill="smartColor || fill"
    />
    <path
      d="M9.88666 10.3867C9.75999 10.3867 9.63332 10.34 9.53332 10.24L5.75999 6.46666C5.56666 6.27332 5.56666 5.95332 5.75999 5.75999C5.95332 5.56666 6.27332 5.56666 6.46666 5.75999L10.24 9.53332C10.4333 9.72666 10.4333 10.0467 10.24 10.24C10.14 10.34 10.0133 10.3867 9.88666 10.3867Z"
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
    default: "16",
  },
  height: {
    type: String,
    default: "16",
  },
});
</script>

<style scoped></style>
