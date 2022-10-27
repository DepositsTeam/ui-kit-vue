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
      d="M6.75758 15.9392C6.61508 15.9392 6.47258 15.8867 6.36008 15.7742L2.60258 12.0167C2.38508 11.7992 2.38508 11.4392 2.60258 11.2217C2.82008 11.0042 3.18008 11.0042 3.39758 11.2217L7.15508 14.9792C7.37258 15.1967 7.37258 15.5567 7.15508 15.7742C7.04258 15.8792 6.90008 15.9392 6.75758 15.9392Z"
      :fill="smartColor"
    />
    <path
      d="M6.75732 15.9375C6.44982 15.9375 6.19482 15.6825 6.19482 15.375V2.625C6.19482 2.3175 6.44982 2.0625 6.75732 2.0625C7.06482 2.0625 7.31982 2.3175 7.31982 2.625V15.375C7.31982 15.6825 7.06482 15.9375 6.75732 15.9375Z"
      :fill="smartColor"
    />
    <path
      d="M15.0076 6.94313C14.8651 6.94313 14.7226 6.89062 14.6101 6.77812L10.8526 3.02063C10.6351 2.80313 10.6351 2.44313 10.8526 2.22563C11.0701 2.00813 11.4301 2.00813 11.6476 2.22563L15.4051 5.98312C15.6226 6.20062 15.6226 6.56063 15.4051 6.77812C15.2926 6.89062 15.1501 6.94313 15.0076 6.94313Z"
      :fill="smartColor"
    />
    <path
      d="M11.2427 15.9375C10.9352 15.9375 10.6802 15.6825 10.6802 15.375V2.625C10.6802 2.3175 10.9352 2.0625 11.2427 2.0625C11.5502 2.0625 11.8052 2.3175 11.8052 2.625V15.375C11.8052 15.6825 11.5577 15.9375 11.2427 15.9375Z"
      :fill="smartColor"
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
