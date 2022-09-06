<template>
  <d-box
    is="svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path
      d="M6.9917 15.4084V6.94169C6.9917 6.60835 7.0917 6.28335 7.27503 6.00835L9.55003 2.62502C9.90837 2.08335 10.8 1.70002 11.5584 1.98335C12.375 2.25835 12.9167 3.17502 12.7417 3.99169L12.3084 6.71669C12.275 6.96669 12.3417 7.19169 12.4834 7.36669C12.625 7.52502 12.8334 7.62502 13.0584 7.62502H16.4834C17.1417 7.62502 17.7084 7.89169 18.0417 8.35835C18.3584 8.80835 18.4167 9.39169 18.2084 9.98335L16.1584 16.225C15.9 17.2584 14.775 18.1 13.6584 18.1H10.4084C9.85003 18.1 9.0667 17.9084 8.70837 17.55L7.6417 16.725C7.23337 16.4167 6.9917 15.925 6.9917 15.4084Z"
      :fill="smartColor || fill"
    />
    <path
      d="M4.34175 5.31665H3.48341C2.19175 5.31665 1.66675 5.81665 1.66675 7.04998V15.4333C1.66675 16.6667 2.19175 17.1667 3.48341 17.1667H4.34175C5.63341 17.1667 6.15841 16.6667 6.15841 15.4333V7.04998C6.15841 5.81665 5.63341 5.31665 4.34175 5.31665Z"
      :fill="smartColor || fill"
    />
  </d-box>
</template>

<script setup>
import { DBox } from "../main";
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
