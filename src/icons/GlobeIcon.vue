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
      d="M4.73565 11.1562H7.81049C7.97274 8.82285 8.78426 6.9305 9.58899 5.58928C9.72198 5.36763 9.85504 5.16056 9.98535 4.96855C7.18785 5.76859 5.0761 8.19301 4.73565 11.1562ZM7.8105 12.8438H4.73565C5.0761 15.807 7.1879 18.2315 9.98545 19.0315C9.85512 18.8394 9.72201 18.6323 9.58899 18.4106C8.78427 17.0694 7.97276 15.1771 7.8105 12.8438ZM9.50279 12.8438H14.4972C14.3391 14.7962 13.6548 16.391 12.964 17.5424C12.6195 18.1166 12.2756 18.5764 12 18.91C11.7244 18.5764 11.3805 18.1166 11.036 17.5424C10.3452 16.391 9.66089 14.7962 9.50279 12.8438ZM14.4973 11.1562H9.50278C9.66087 9.20377 10.3452 7.60887 11.036 6.45748C11.3805 5.88327 11.7244 5.42342 12 5.08991C12.2756 5.42342 12.6195 5.88327 12.964 6.45748C13.6548 7.60887 14.3391 9.20377 14.4973 11.1562ZM16.1895 12.8438C16.0273 15.1771 15.2157 17.0694 14.411 18.4106C14.278 18.6323 14.1449 18.8394 14.0145 19.0315C16.8121 18.2315 18.9239 15.807 19.2644 12.8438H16.1895ZM19.2644 11.1562H16.1895C16.0273 8.82285 15.2157 6.9305 14.411 5.58928C14.278 5.36763 14.1449 5.16056 14.0147 4.96854C16.8122 5.76858 18.9239 8.19301 19.2644 11.1562ZM12 3C7.02943 3 3 7.02943 3 12C3 16.9706 7.02943 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02943 16.9706 3 12 3Z"
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
