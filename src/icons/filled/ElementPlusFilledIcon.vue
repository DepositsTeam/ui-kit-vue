<template>
  <d-box
    is="svg"
    :width="width"
    :height="height"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.083 13.9583H15.208V12.0833C15.208 11.7417 14.9247 11.4583 14.583 11.4583C14.2413 11.4583 13.958 11.7417 13.958 12.0833V13.9583H12.083C11.7413 13.9583 11.458 14.2417 11.458 14.5833C11.458 14.925 11.7413 15.2083 12.083 15.2083H13.958V17.0833C13.958 17.425 14.2413 17.7083 14.583 17.7083C14.9247 17.7083 15.208 17.425 15.208 17.0833V15.2083H17.083C17.4247 15.2083 17.708 14.925 17.708 14.5833C17.708 14.2417 17.4247 13.9583 17.083 13.9583Z"
      :fill="smartColor || fill"
    />
    <path
      d="M18.3333 7.10001V3.31667C18.3333 2.14167 17.8 1.66667 16.475 1.66667H13.1083C11.7833 1.66667 11.25 2.14167 11.25 3.31667V7.09167C11.25 8.275 11.7833 8.74167 13.1083 8.74167H16.475C17.8 8.75 18.3333 8.27501 18.3333 7.10001Z"
      :fill="smartColor || fill"
    />
    <path
      d="M5.24199 8.81667C7.21641 8.81667 8.81699 7.21609 8.81699 5.24167C8.81699 3.26725 7.21641 1.66667 5.24199 1.66667C3.26757 1.66667 1.66699 3.26725 1.66699 5.24167C1.66699 7.21609 3.26757 8.81667 5.24199 8.81667Z"
      :fill="smartColor || fill"
    />
    <path
      d="M8.75033 16.475V13.1083C8.75033 11.7833 8.21699 11.25 6.89199 11.25H3.52533C2.20033 11.25 1.66699 11.7833 1.66699 13.1083V16.475C1.66699 17.8 2.20033 18.3333 3.52533 18.3333H6.89199C8.21699 18.3333 8.75033 17.8 8.75033 16.475Z"
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
