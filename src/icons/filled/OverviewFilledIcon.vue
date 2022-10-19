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
      d="M5.43 1.5H4.005C2.3625 1.5 1.5 2.3625 1.5 3.9975V5.4225C1.5 7.0575 2.3625 7.92 3.9975 7.92H5.4225C7.0575 7.92 7.92 7.0575 7.92 5.4225V3.9975C7.9275 2.3625 7.065 1.5 5.43 1.5Z"
      :fill="smartColor"
    />
    <path
      d="M14.0026 1.5H12.5776C10.9426 1.5 10.0801 2.3625 10.0801 3.9975V5.4225C10.0801 7.0575 10.9426 7.92 12.5776 7.92H14.0026C15.6376 7.92 16.5001 7.0575 16.5001 5.4225V3.9975C16.5001 2.3625 15.6376 1.5 14.0026 1.5Z"
      :fill="smartColor"
    />
    <path
      d="M14.0026 10.0742H12.5776C10.9426 10.0742 10.0801 10.9367 10.0801 12.5717V13.9967C10.0801 15.6317 10.9426 16.4942 12.5776 16.4942H14.0026C15.6376 16.4942 16.5001 15.6317 16.5001 13.9967V12.5717C16.5001 10.9367 15.6376 10.0742 14.0026 10.0742Z"
      :fill="smartColor"
    />
    <path
      d="M5.43 10.0742H4.005C2.3625 10.0742 1.5 10.9367 1.5 12.5717V13.9967C1.5 15.6392 2.3625 16.5017 3.9975 16.5017H5.4225C7.0575 16.5017 7.92 15.6392 7.92 14.0042V12.5792C7.9275 10.9367 7.065 10.0742 5.43 10.0742Z"
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
