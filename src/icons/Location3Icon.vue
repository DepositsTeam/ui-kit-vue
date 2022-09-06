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
      d="M12.225 16.831V10.386M6.45801 14.698C6.04635 14.9367 5.69874 15.2716 5.44482 15.6741C5.1909 16.0765 5.03823 16.5347 5 17.009C5 19.134 8.23507 20.8562 12.2261 20.8562C16.2171 20.8562 19.4509 19.133 19.4509 17.009C19.4161 16.544 19.2702 16.094 19.0254 15.697C18.7805 15.3001 18.4439 14.9676 18.0439 14.7278C18.0299 14.7178 18.013 14.708 17.999 14.699M15.808 6.583C15.808 8.56184 14.2039 10.166 12.225 10.166C10.2462 10.166 8.64203 8.56184 8.64203 6.583C8.64203 4.60416 10.2462 3 12.225 3C14.2039 3 15.808 4.60416 15.808 6.583Z"
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
