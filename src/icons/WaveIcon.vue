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
      d="M9.26312 12.7419V18.7629C9.26312 19.125 9.40679 19.4723 9.66278 19.7283C9.91877 19.9843 10.2661 20.1282 10.6281 20.1282C10.9901 20.1282 11.3372 19.9843 11.5932 19.7283C11.8492 19.4723 11.9931 19.125 11.9931 18.7629L11.993 5.36523C11.993 5.00321 12.1369 4.65589 12.3929 4.3999C12.6489 4.14392 12.996 4 13.358 4C13.72 4 14.0671 4.14392 14.3231 4.3999C14.579 4.65589 14.723 5.00321 14.723 5.36523L14.7229 16.0642C14.7229 16.4262 14.8668 16.7736 15.1228 17.0296C15.3788 17.2855 15.7261 17.429 16.0881 17.429C16.4502 17.429 16.7972 17.2855 17.0532 17.0296C17.3092 16.7736 17.4531 16.4262 17.4531 16.0642V14.3342C17.4636 13.9073 17.6408 13.5015 17.947 13.2039C18.2532 12.9062 18.664 12.7403 19.0911 12.742L20.855 12.7422M9.26208 12.7423V8.86438C9.26208 8.50236 9.11817 8.15504 8.86218 7.89905C8.6062 7.64306 8.25912 7.49915 7.89709 7.49915C7.53507 7.49915 7.18775 7.64306 6.93176 7.89905C6.67578 8.15504 6.5321 8.50236 6.5321 8.86438V11.194C6.5321 11.6045 6.3688 11.9984 6.07849 12.2887C5.78818 12.579 5.39456 12.7423 4.98401 12.7423L3 12.7422"
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
