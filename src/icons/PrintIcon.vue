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
      d="M4.98389 16.6428C4.4577 16.6428 3.95313 16.4338 3.58105 16.0618C3.20898 15.6897 3 15.1851 3 14.6589V9.19702C3 8.93653 3.05116 8.6784 3.15088 8.43774C3.2506 8.19709 3.39681 7.97834 3.58105 7.79419C3.7653 7.61004 3.98391 7.4641 4.22461 7.3645C4.46531 7.26491 4.72339 7.21398 4.98389 7.21411H18.8708C19.1313 7.21398 19.3894 7.26491 19.6301 7.3645C19.8708 7.4641 20.0894 7.61004 20.2737 7.79419C20.4579 7.97834 20.6041 8.19709 20.7039 8.43774C20.8036 8.6784 20.855 8.93653 20.855 9.19702V14.6589C20.855 15.1851 20.6458 15.6897 20.2737 16.0618C19.9016 16.4338 19.397 16.6428 18.8708 16.6428"
      :stroke="smartColor || stroke"
      :stroke-width="strokeWidth"
      :stroke-linecap="strokeLineCap"
      :stroke-linejoin="strokeLineJoin"
    />
    <path
      d="M6.13379 7.21289V3H17.7219V7.21289"
      :stroke="smartColor || stroke"
      :stroke-width="strokeWidth"
      :stroke-linecap="strokeLineCap"
      :stroke-linejoin="strokeLineJoin"
    />
    <path
      d="M9.03687 11.2341H17.7229V20.4269H6.13477V11.2341"
      :stroke="smartColor || stroke"
      :stroke-width="strokeWidth"
      :stroke-linecap="strokeLineCap"
      :stroke-linejoin="strokeLineJoin"
    />
    <path
      d="M9.61182 14.5939H14.4998"
      :stroke="smartColor || stroke"
      :stroke-width="strokeWidth"
      :stroke-linecap="strokeLineCap"
      :stroke-linejoin="strokeLineJoin"
    />
    <path
      d="M9.61182 16.9589H14.4998"
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
