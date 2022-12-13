<template>
  <d-box
    is="svg"
    :width="width"
    :height="height"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.3333 7.39167V4.02501C18.3333 2.70001 17.8 2.16667 16.475 2.16667H13.1083C11.7833 2.16667 11.25 2.70001 11.25 4.02501V7.39167C11.25 8.71667 11.7833 9.25001 13.1083 9.25001H16.475C17.8 9.25001 18.3333 8.71667 18.3333 7.39167Z"
      :stroke="smartColor || stroke"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.75033 16.975V13.6083C8.75033 12.2833 8.21699 11.75 6.89199 11.75H3.52533C2.20033 11.75 1.66699 12.2833 1.66699 13.6083V16.975C1.66699 18.3 2.20033 18.8333 3.52533 18.8333H6.89199C8.21699 18.8333 8.75033 18.3 8.75033 16.975Z"
      :stroke="smartColor || stroke"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.00033 8.83334C6.84127 8.83334 8.33366 7.34095 8.33366 5.50001C8.33366 3.65906 6.84127 2.16667 5.00033 2.16667C3.15938 2.16667 1.66699 3.65906 1.66699 5.50001C1.66699 7.34095 3.15938 8.83334 5.00033 8.83334Z"
      :stroke="smartColor || stroke"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.083 15.0833H17.083"
      :stroke="smartColor || stroke"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M14.583 17.5833V12.5833"
      :stroke="smartColor || stroke"
      stroke-width="1.5"
      stroke-linecap="round"
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
