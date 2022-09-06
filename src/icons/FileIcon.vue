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
      :fill-rule="fillRule"
      :clip-rule="clipRule"
      :fill="smartColor || fill"
      d="M5.86913 3.86269C6.11037 3.63396 6.44561 3.49895 6.80309 3.4989H6.80329L12.3994 3.50043V7.001C12.3994 7.60038 12.6513 8.16594 13.0842 8.5764C13.5157 8.9856 14.093 9.20955 14.6877 9.20955H18.4935V18.3065C18.4935 18.6101 18.3668 18.9098 18.1268 19.1373C17.8855 19.3661 17.5502 19.5011 17.1927 19.5011H6.80329C6.44573 19.5011 6.11042 19.3661 5.86913 19.1373C5.62903 18.9096 5.50217 18.6099 5.50217 18.3065V4.69348C5.50217 4.39012 5.62903 4.09035 5.86913 3.86269ZM19.9935 8.37932V7.72043C19.9935 7.50944 19.9047 7.30822 19.7487 7.1661L14.2957 2.19649C14.1576 2.07064 13.9776 2.00087 13.7907 2.00082L6.8035 1.9989H6.80329C6.07294 1.9989 5.36504 2.27357 4.83706 2.7742C4.30789 3.27594 4.00217 3.96531 4.00217 4.69348V18.3065C4.00217 19.0347 4.30789 19.724 4.83706 20.2258C5.36504 20.7264 6.07294 21.0011 6.80329 21.0011H17.1927C17.923 21.0011 18.6309 20.7264 19.1589 20.2258C19.6882 19.7239 19.9935 19.0344 19.9935 18.3065V8.53978C19.9963 8.51342 19.9978 8.48666 19.9978 8.45955C19.9978 8.43245 19.9963 8.40568 19.9935 8.37932ZM18.1182 7.70955H14.6877C14.4665 7.70955 14.2616 7.62576 14.1162 7.48791C13.9722 7.35132 13.8994 7.17527 13.8994 7.001V3.8648L18.1182 7.70955Z"
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
  fillRule: {
    type: String,
    default: "evenodd",
  },
  clipRule: {
    type: String,
    default: "evenodd",
  },
});
</script>

<style scoped></style>
