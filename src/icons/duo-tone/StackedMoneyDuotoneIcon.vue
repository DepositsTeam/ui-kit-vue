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
      d="M19.3 7.91998V13.07C19.3 16.15 17.54 17.47 14.9 17.47H6.10995C5.65995 17.47 5.22996 17.43 4.82996 17.34C4.57996 17.3 4.33996 17.23 4.11996 17.15C2.61996 16.59 1.70996 15.29 1.70996 13.07V7.91998C1.70996 4.83998 3.46995 3.52002 6.10995 3.52002H14.9C17.14 3.52002 18.75 4.47001 19.18 6.64001C19.25 7.04001 19.3 7.44998 19.3 7.91998Z"
      :stroke="smartColor || stroke"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      :stroke-linecap="strokeLineCap"
      :stroke-linejoin="strokeLineJoin"
    />
    <path
      opacity="0.4"
      d="M22.3001 10.9201V16.0701C22.3001 19.1501 20.5401 20.4701 17.9001 20.4701H9.11008C8.37008 20.4701 7.70009 20.3701 7.12009 20.1501C5.93009 19.7101 5.12008 18.8001 4.83008 17.3401C5.23008 17.4301 5.66008 17.4701 6.11008 17.4701H14.9001C17.5401 17.4701 19.3001 16.1501 19.3001 13.0701V7.9201C19.3001 7.4501 19.2601 7.03014 19.1801 6.64014C21.0801 7.04014 22.3001 8.38011 22.3001 10.9201Z"
      :stroke="smartColor || stroke"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      :stroke-linecap="strokeLineCap"
      :stroke-linejoin="strokeLineJoin"
    />
    <path
      d="M10.4999 13.1399C11.9579 13.1399 13.1399 11.9579 13.1399 10.4999C13.1399 9.04185 11.9579 7.85986 10.4999 7.85986C9.04185 7.85986 7.85986 9.04185 7.85986 10.4999C7.85986 11.9579 9.04185 13.1399 10.4999 13.1399Z"
      :stroke="smartColor || stroke"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      :stroke-linecap="strokeLineCap"
      :stroke-linejoin="strokeLineJoin"
    />
    <path
      opacity="0.4"
      d="M4.77979 8.30005V12.7001"
      :stroke="smartColor || stroke"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      :stroke-linecap="strokeLineCap"
      :stroke-linejoin="strokeLineJoin"
    />
    <path
      opacity="0.4"
      d="M16.2202 8.30005V12.7001"
      :stroke="smartColor || stroke"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      :stroke-linecap="strokeLineCap"
      :stroke-linejoin="strokeLineJoin"
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
