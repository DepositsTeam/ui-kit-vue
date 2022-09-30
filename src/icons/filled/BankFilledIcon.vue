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
      d="M22 19V22H2V19C2 18.45 2.45 18 3 18H21C21.55 18 22 18.45 22 19Z"
      :fill="smartColor || fill"
      :stroke="smartColor || fill"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path d="M7 11H5V18H7V11Z" :fill="smartColor || fill" />
    <path d="M11 11H9V18H11V11Z" :fill="smartColor || fill" />
    <path d="M15 11H13V18H15V11Z" :fill="smartColor || fill" />
    <path d="M19 11H17V18H19V11Z" :fill="smartColor || fill" />
    <path
      d="M23 22.75H1C0.59 22.75 0.25 22.41 0.25 22C0.25 21.59 0.59 21.25 1 21.25H23C23.41 21.25 23.75 21.59 23.75 22C23.75 22.41 23.41 22.75 23 22.75Z"
      :fill="smartColor || fill"
    />
    <path
      d="M21.37 5.75L12.37 2.15C12.17 2.07 11.83 2.07 11.63 2.15L2.63 5.75C2.28 5.89 2 6.3 2 6.68V10C2 10.55 2.45 11 3 11H21C21.55 11 22 10.55 22 10V6.68C22 6.3 21.72 5.89 21.37 5.75ZM12 8.5C11.17 8.5 10.5 7.83 10.5 7C10.5 6.17 11.17 5.5 12 5.5C12.83 5.5 13.5 6.17 13.5 7C13.5 7.83 12.83 8.5 12 8.5Z"
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
