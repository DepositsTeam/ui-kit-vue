<template>
  <d-box
    is="svg"
    :width="width"
    :height="height"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ><path
      d="M18.3333 7.10002V3.31669C18.3333 2.14169 17.8 1.66669 16.475 1.66669H13.1083C11.7833 1.66669 11.25 2.14169 11.25 3.31669V7.09169C11.25 8.27502 11.7833 8.74169 13.1083 8.74169H16.475C17.8 8.75002 18.3333 8.27502 18.3333 7.10002Z"
      :stroke="smartColor || stroke"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.3333 16.475V13.1083C18.3333 11.7833 17.8 11.25 16.475 11.25H13.1083C11.7833 11.25 11.25 11.7833 11.25 13.1083V16.475C11.25 17.8 11.7833 18.3333 13.1083 18.3333H16.475C17.8 18.3333 18.3333 17.8 18.3333 16.475Z"
      :stroke="smartColor || stroke"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.74999 7.10002V3.31669C8.74999 2.14169 8.21666 1.66669 6.89166 1.66669H3.52499C2.19999 1.66669 1.66666 2.14169 1.66666 3.31669V7.09169C1.66666 8.27502 2.19999 8.74169 3.52499 8.74169H6.89166C8.21666 8.75002 8.74999 8.27502 8.74999 7.10002Z"
      :stroke="smartColor || stroke"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.74999 16.475V13.1083C8.74999 11.7833 8.21666 11.25 6.89166 11.25H3.52499C2.19999 11.25 1.66666 11.7833 1.66666 13.1083V16.475C1.66666 17.8 2.19999 18.3333 3.52499 18.3333H6.89166C8.21666 18.3333 8.74999 17.8 8.74999 16.475Z"
      :stroke="smartColor || stroke"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
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
    default: "20",
  },
  height: {
    type: String,
    default: "20",
  },
});
</script>

<style scoped></style>
