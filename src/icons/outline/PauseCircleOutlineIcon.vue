<template>
  <d-box
    is="svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.98002 15.1666C4.03335 15.1666 0.813354 11.9533 0.813354 7.99998C0.813354 4.04665 4.03335 0.833313 7.98002 0.833313C11.9267 0.833313 15.1467 4.04665 15.1467 7.99998C15.1467 11.9533 11.9334 15.1666 7.98002 15.1666ZM7.98002 1.83331C4.58002 1.83331 1.81335 4.59998 1.81335 7.99998C1.81335 11.4 4.58002 14.1666 7.98002 14.1666C11.38 14.1666 14.1467 11.4 14.1467 7.99998C14.1467 4.59998 11.38 1.83331 7.98002 1.83331Z"
      :fill="smartColor || fill"
    />
    <path
      d="M6.67337 10.6333H5.80671C5.19337 10.6333 4.83337 10.28 4.83337 9.68664V6.3133C4.83337 5.71997 5.20004 5.36664 5.80671 5.36664H6.66671C7.28004 5.36664 7.64004 5.71997 7.64004 6.3133V9.68664C7.64671 10.28 7.28004 10.6333 6.67337 10.6333ZM5.83337 9.6333H6.64671V6.36664H5.84004L5.83337 9.6333Z"
      :fill="smartColor || fill"
    />
    <path
      d="M10.1933 10.6333H9.33332C8.71999 10.6333 8.35999 10.28 8.35999 9.68664V6.3133C8.35999 5.71997 8.72665 5.36664 9.33332 5.36664H10.1933C10.8067 5.36664 11.1667 5.71997 11.1667 6.3133V9.68664C11.1667 10.28 10.8 10.6333 10.1933 10.6333ZM9.35332 9.6333H10.1667V6.36664H9.35999L9.35332 9.6333Z"
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
