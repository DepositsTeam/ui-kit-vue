<template>
  <d-box
    is="svg"
    :width="width"
    :height="height"
    viewBox="0 0 18 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.885742 8C1.59074 4.58667 4.95599 2 8.99999 2C13.044 2 16.4085 4.58667 17.1142 8C16.4092 11.4133 13.044 14 8.99999 14C4.95599 14 1.59149 11.4133 0.885742 8ZM8.99999 11.3333C9.99455 11.3333 10.9484 10.9821 11.6516 10.357C12.3549 9.7319 12.75 8.88406 12.75 8C12.75 7.11595 12.3549 6.2681 11.6516 5.64298C10.9484 5.01786 9.99455 4.66667 8.99999 4.66667C8.00543 4.66667 7.0516 5.01786 6.34834 5.64298C5.64508 6.2681 5.24999 7.11595 5.24999 8C5.24999 8.88406 5.64508 9.7319 6.34834 10.357C7.0516 10.9821 8.00543 11.3333 8.99999 11.3333ZM8.99999 10C8.40325 10 7.83096 9.78929 7.409 9.41421C6.98704 9.03914 6.74999 8.53043 6.74999 8C6.74999 7.46957 6.98704 6.96086 7.409 6.58579C7.83096 6.21071 8.40325 6 8.99999 6C9.59673 6 10.169 6.21071 10.591 6.58579C11.0129 6.96086 11.25 7.46957 11.25 8C11.25 8.53043 11.0129 9.03914 10.591 9.41421C10.169 9.78929 9.59673 10 8.99999 10Z"
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
