<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path
      d="M21 12.7706V15.988C21 16.5216 20.7893 17.0332 20.4143 17.4105C20.0392 17.7878 19.5305 18 19.0001 18H4.99993C4.4695 18 3.96086 17.7878 3.58579 17.4105C3.21071 17.0332 3.00005 16.5216 3.00005 15.988V7.01173C3.00005 6.47816 3.21071 5.9665 3.58579 5.58921C3.96086 5.21192 4.4695 5 4.99993 5H19.0001C19.5305 5 20.0392 5.21192 20.4143 5.58921C20.7893 5.9665 21 6.47816 21 7.01173V9.84093"
      fill="white"
    />
    <path
      d="M21 12.7706V15.988C21 16.5216 20.7893 17.0332 20.4143 17.4105C20.0392 17.7878 19.5305 18 19.0001 18H4.99993C4.4695 18 3.96086 17.7878 3.58579 17.4105C3.21071 17.0332 3.00005 16.5216 3.00005 15.988V7.01173C3.00005 6.47816 3.21071 5.9665 3.58579 5.58921C3.96086 5.21192 4.4695 5 4.99993 5H19.0001C19.5305 5 20.0392 5.21192 20.4143 5.58921C20.7893 5.9665 21 6.47816 21 7.01173V9.84093"
      :stroke="smartColor || stroke"
      :stroke-width="strokeWidth"
      :stroke-linecap="strokeLineCap"
      :stroke-linejoin="strokeLineJoin"
    />
    <path
      d="M3 9.83997H20.999"
      :stroke="smartColor || stroke"
      :stroke-width="strokeWidth"
      :stroke-linecap="strokeLineCap"
      :stroke-linejoin="strokeLineJoin"
    />
    <path
      d="M6.67441 13.9935H10.7178"
      :stroke="smartColor || stroke"
      :stroke-width="strokeWidth"
      :stroke-linecap="strokeLineCap"
      :stroke-linejoin="strokeLineJoin"
    />
  </svg>
</template>

<script setup>
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
