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
      d="M11.9119 13.118C14.7059 13.118 16.9709 10.853 16.9709 8.059C16.9709 5.26499 14.7059 3 11.9119 3C9.11791 3 6.85292 5.26499 6.85292 8.059C6.85292 10.853 9.11791 13.118 11.9119 13.118Z"
      :stroke="smartColor || stroke"
      :stroke-width="strokeWidth"
      :stroke-linecap="strokeLineCap"
      :stroke-linejoin="strokeLineJoin"
    />
    <path
      d="M20.8259 20.83C20.8261 19.8176 20.6268 18.8153 20.2395 17.88C19.8522 16.9447 19.2844 16.0948 18.5686 15.3789C17.8528 14.663 17.0031 14.0952 16.0679 13.7078C15.1326 13.3203 14.1302 13.121 13.1179 13.121H10.708C8.66363 13.1212 6.70307 13.9336 5.25757 15.3793C3.81207 16.825 3 18.7856 3 20.83V20.83"
      :stroke="smartColor || stroke"
      :stroke-width="strokeWidth"
      :stroke-linecap="strokeLineCap"
      :stroke-linejoin="strokeLineJoin"
    />
    <path
      d="M16.4448 17.989H17.1021"
      :stroke="smartColor || stroke"
      :stroke-linecap="strokeLineCap"
    />

    <path
      d="M11.9127 13.5181L9.75397 19.4671L11.9127 13.5181Z"
      :stroke="smartColor || stroke"
      :stroke-width="strokeWidth"
      :stroke-linecap="strokeLineCap"
      :stroke-linejoin="strokeLineJoin"
    />
    <path
      d="M11.398 13.5181L13.6328 19.4671L11.398 13.5181Z"
      :stroke="smartColor || stroke"
      :stroke-width="strokeWidth"
      :stroke-linecap="strokeLineCap"
      :stroke-linejoin="strokeLineJoin"
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
