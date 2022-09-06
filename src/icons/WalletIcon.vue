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
      d="M20.999 6.26391V5.93689C20.999 5.42317 20.7884 4.93055 20.4135 4.56729C20.0385 4.20404 19.5298 4.00001 18.9995 4.00001H5.42472C5.10625 3.99936 4.79077 4.05957 4.49641 4.17734C4.20206 4.29511 3.93477 4.46807 3.70958 4.68623C3.48438 4.90439 3.30585 5.16357 3.18428 5.44873C3.06272 5.7339 3.00032 6.03953 3.00098 6.34805V6.34805C3.00032 6.65658 3.06272 6.96221 3.18428 7.24737C3.30585 7.53254 3.48438 7.79147 3.70958 8.00963C3.93477 8.2278 4.20206 8.40075 4.49641 8.51852C4.79077 8.6363 5.10625 8.6965 5.42472 8.69586H18.9955C19.5258 8.69586 20.0343 8.90013 20.4093 9.26339C20.7843 9.62664 20.9949 10.1193 20.9949 10.633V17.5472C20.9949 17.9325 20.8369 18.3021 20.5557 18.5745C20.2745 18.847 19.8932 19 19.4955 19H5.99923C5.2038 19 4.44106 18.6937 3.87861 18.1488C3.31616 17.6039 3 16.865 3 16.0944V6.45722C3 5.80549 3.26734 5.18045 3.74304 4.7196C4.21874 4.25876 4.86393 4.00001 5.53667 4.00001H15.2939"
      :stroke="smartColor || stroke"
      :stroke-width="strokeWidth"
      :stroke-linecap="strokeLineCap"
      :stroke-linejoin="strokeLineJoin"
    />
    <path
      d="M16.831 11.9745H21.0002V15.4462H16.831C16.3558 15.4462 15.9001 15.2633 15.564 14.9378C15.228 14.6123 15.0392 14.1707 15.0392 13.7104V13.7104C15.0392 13.25 15.228 12.8085 15.564 12.4829C15.9001 12.1574 16.3558 11.9745 16.831 11.9745V11.9745Z"
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
