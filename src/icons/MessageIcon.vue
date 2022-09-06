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
      d="M6.76923 4H5.00057C4.46996 4 3.96114 4.20663 3.58594 4.5745C3.21074 4.94237 3 5.44149 3 5.96175V14.0622C3 14.5825 3.21074 15.0816 3.58594 15.4494C3.96114 15.8173 4.46996 16.0239 5.00057 16.0239H8.13881C8.66842 16.0246 9.17605 16.231 9.55049 16.5982L11.9999 19L14.4495 16.5982C14.8239 16.231 15.3316 16.0246 15.8612 16.0239H18.9994C19.53 16.0239 20.0389 15.8173 20.4141 15.4494C20.7893 15.0816 21 14.5825 21 14.0622V5.96271C21 5.44246 20.7893 4.94358 20.4141 4.57571C20.0389 4.20783 19.53 4.00097 18.9994 4.00097H9.20557"
      :stroke="smartColor || stroke"
      :stroke-width="strokeWidth"
      :stroke-linecap="strokeLineCap"
      :stroke-linejoin="strokeLineJoin"
    />
    <path
      d="M16.0598 10.5475C16.1801 10.5475 16.2776 10.4479 16.2776 10.325C16.2776 10.2021 16.1801 10.1025 16.0598 10.1025C15.9395 10.1025 15.842 10.2021 15.842 10.325C15.842 10.4479 15.9395 10.5475 16.0598 10.5475Z"
      :stroke="smartColor || stroke"
      :stroke-width="strokeWidth"
      :stroke-linecap="strokeLineCap"
      :stroke-linejoin="strokeLineJoin"
    />
    <path
      d="M8.29385 10.5475C8.41415 10.5475 8.51167 10.4479 8.51167 10.325C8.51167 10.2021 8.41415 10.1025 8.29385 10.1025C8.17355 10.1025 8.07603 10.2021 8.07603 10.325C8.07603 10.4479 8.17355 10.5475 8.29385 10.5475Z"
      :stroke="smartColor || stroke"
      :stroke-width="strokeWidth"
      :stroke-linecap="strokeLineCap"
      :stroke-linejoin="strokeLineJoin"
    />
    <path
      d="M12.1773 10.5475C12.2976 10.5475 12.3951 10.4479 12.3951 10.325C12.3951 10.2021 12.2976 10.1025 12.1773 10.1025C12.057 10.1025 11.9595 10.2021 11.9595 10.325C11.9595 10.4479 12.057 10.5475 12.1773 10.5475Z"
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
