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
      d="M11.6173 15.5681C11.4748 15.5681 11.3323 15.5156 11.2198 15.4031C11.0023 15.1856 11.0023 14.8256 11.2198 14.6081L14.9773 10.8506C15.1948 10.6331 15.5548 10.6331 15.7723 10.8506C15.9898 11.0681 15.9898 11.4281 15.7723 11.6456L12.0148 15.4031C11.9023 15.5081 11.7598 15.5681 11.6173 15.5681Z"
      :fill="smartColor || fill"
    />
    <path
      d="M15.375 11.8047H2.625C2.3175 11.8047 2.0625 11.5497 2.0625 11.2422C2.0625 10.9347 2.3175 10.6797 2.625 10.6797H15.375C15.6825 10.6797 15.9375 10.9347 15.9375 11.2422C15.9375 11.5497 15.6825 11.8047 15.375 11.8047Z"
      :fill="smartColor || fill"
    />
    <path
      d="M2.62508 7.31813C2.48258 7.31813 2.34008 7.26562 2.22758 7.15312C2.01008 6.93563 2.01008 6.57562 2.22758 6.35812L5.98508 2.60063C6.20258 2.38313 6.56258 2.38313 6.78008 2.60063C6.99758 2.81813 6.99758 3.17813 6.78008 3.39563L3.02258 7.15312C2.91758 7.25812 2.76758 7.31813 2.62508 7.31813Z"
      :fill="smartColor || fill"
    />
    <path
      d="M15.375 7.32031H2.625C2.3175 7.32031 2.0625 7.06531 2.0625 6.75781C2.0625 6.45031 2.3175 6.19531 2.625 6.19531H15.375C15.6825 6.19531 15.9375 6.45031 15.9375 6.75781C15.9375 7.06531 15.6825 7.32031 15.375 7.32031Z"
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
