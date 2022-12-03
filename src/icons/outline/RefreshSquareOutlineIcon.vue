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
      d="M7.50033 18.8333H12.5003C16.667 18.8333 18.3337 17.1667 18.3337 13V8C18.3337 3.83334 16.667 2.16667 12.5003 2.16667H7.50033C3.33366 2.16667 1.66699 3.83334 1.66699 8V13C1.66699 17.1667 3.33366 18.8333 7.50033 18.8333Z"
      :stroke="smartColor || stroke"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.5837 10.5C14.5837 13.0333 12.5337 15.0833 10.0003 15.0833C7.46699 15.0833 5.92531 12.5333 5.92531 12.5333M5.92531 12.5333H7.99199M5.92531 12.5333V14.825M5.41699 10.5C5.41699 7.96667 7.45033 5.91667 10.0003 5.91667C13.0587 5.91667 14.5837 8.46667 14.5837 8.46667M14.5837 8.46667V6.175M14.5837 8.46667H12.5503"
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
    default: "24",
  },
  height: {
    type: String,
    default: "24",
  },
});
</script>

<style scoped></style>
