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
      d="M8.53784 0.5C9.10503 0.5 9.61856 0.815 9.90216 1.28C10.0401 1.505 10.1321 1.7825 10.1091 2.075C10.0938 2.3 10.1628 2.525 10.2854 2.735C10.6763 3.3725 11.5424 3.6125 12.2169 3.2525C12.9757 2.8175 13.9338 3.08 14.3707 3.8225L14.8842 4.7075C15.3287 5.45 15.0835 6.4025 14.317 6.83C13.6655 7.2125 13.4356 8.06 13.8265 8.705C13.9491 8.9075 14.0871 9.08 14.3017 9.185C14.5699 9.3275 14.7769 9.5525 14.9225 9.7775C15.2061 10.2425 15.1831 10.8125 14.9072 11.315L14.3707 12.215C14.0871 12.695 13.5582 12.995 13.014 12.995C12.7458 12.995 12.4468 12.92 12.2016 12.77C12.0023 12.6425 11.7723 12.5975 11.5271 12.5975C10.7683 12.5975 10.1321 13.22 10.1091 13.9625C10.1091 14.825 9.40395 15.5 8.52251 15.5H7.48012C6.59101 15.5 5.88586 14.825 5.88586 13.9625C5.87053 13.22 5.23437 12.5975 4.47556 12.5975C4.22263 12.5975 3.99269 12.6425 3.80107 12.77C3.5558 12.92 3.24921 12.995 2.98861 12.995C2.43676 12.995 1.90789 12.695 1.6243 12.215L1.09544 11.315C0.811845 10.8275 0.796516 10.2425 1.08011 9.7775C1.20274 9.5525 1.43268 9.3275 1.69328 9.185C1.90789 9.08 2.04586 8.9075 2.17616 8.705C2.55939 8.06 2.32945 7.2125 1.67795 6.83C0.919151 6.4025 0.673881 5.45 1.11077 4.7075L1.6243 3.8225C2.06885 3.08 3.01927 2.8175 3.78574 3.2525C4.45257 3.6125 5.31868 3.3725 5.70958 2.735C5.83221 2.525 5.90119 2.3 5.88586 2.075C5.87053 1.7825 5.95485 1.505 6.10047 1.28C6.38407 0.815 6.8976 0.515 7.45712 0.5H8.53784ZM8.00898 5.885C6.80562 5.885 5.83221 6.83 5.83221 8.0075C5.83221 9.185 6.80562 10.1225 8.00898 10.1225C9.21233 10.1225 10.1628 9.185 10.1628 8.0075C10.1628 6.83 9.21233 5.885 8.00898 5.885Z"
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
