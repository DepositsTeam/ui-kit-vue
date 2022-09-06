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
      d="M13.756 11.5189C14.7245 10.5504 14.7245 8.98018 13.756 8.01168C12.7875 7.04318 11.2172 7.04318 10.2487 8.01168C9.28022 8.98018 9.28022 10.5504 10.2487 11.5189C11.2172 12.4874 12.7875 12.4874 13.756 11.5189Z"
      :stroke="smartColor || stroke"
      :stroke-width="strokeWidth"
      :stroke-linecap="strokeLineCap"
      :stroke-linejoin="strokeLineJoin"
    />
    <path
      d="M12.0023 3C12.9381 3.0014 13.8641 3.19009 14.7259 3.55493C15.5877 3.91978 16.3677 4.45354 17.0201 5.12451C17.6724 5.79549 18.1838 6.59022 18.5242 7.46191C18.8647 8.33361 19.0272 9.26471 19.0023 10.2002C18.7373 16.5632 12.0023 20.853 12.0023 20.853"
      :stroke="smartColor || stroke"
      :stroke-width="strokeWidth"
      :stroke-linecap="strokeLineCap"
      :stroke-linejoin="strokeLineJoin"
    />
    <path
      d="M5.44626 12.7201C5.53359 12.9994 5.63178 13.2726 5.74045 13.5399C7.12044 16.5045 9.2861 19.0345 12.0024 20.8551"
      :stroke="smartColor || stroke"
      :stroke-width="strokeWidth"
      :stroke-linecap="strokeLineCap"
      :stroke-linejoin="strokeLineJoin"
    />
    <path
      d="M12.0025 3C11.0667 3.0014 10.1406 3.19009 9.27886 3.55493C8.4171 3.91978 7.63701 4.45354 6.98467 5.12451C6.33234 5.79549 5.82071 6.59022 5.48028 7.46191C5.13985 8.33361 4.97754 9.26471 5.0025 10.2002"
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
