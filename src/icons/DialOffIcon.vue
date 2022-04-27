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
        d="M19.311 4.5434L3 20.8544"
        :stroke="smartColor || stroke"
        :stroke-width="strokeWidth"
        :stroke-linecap="strokeLineCap"
        :stroke-linejoin="strokeLineJoin"
      />
      <path
        d="M8.44287 11.8364C8.10075 11.3479 7.94172 10.7543 7.99365 10.1602C8.04559 9.56599 8.30536 9.00919 8.72705 8.5874L9.4729 7.84131C9.85328 7.46082 10.0669 6.94475 10.0669 6.40674C10.0669 5.86872 9.85328 5.35315 9.4729 4.97266L8.09497 3.59424C7.90664 3.40577 7.68291 3.2563 7.43677 3.1543C7.19063 3.05229 6.92684 3 6.6604 3C6.39396 3 6.13017 3.05229 5.88403 3.1543C5.6379 3.2563 5.41417 3.40577 5.22583 3.59424V3.59424C3.80148 5.01939 3.00146 6.95189 3.00146 8.9668C3.00146 10.9817 3.80148 12.9142 5.22583 14.3394"
        :stroke="smartColor || stroke"
        :stroke-width="strokeWidth"
        :stroke-linecap="strokeLineCap"
        :stroke-linejoin="strokeLineJoin"
      />
      <path
        d="M7.46494 16.5805L9.51498 18.6303C10.9402 20.0549 12.8729 20.8554 14.888 20.8554C16.9032 20.8554 18.8356 20.0549 20.2608 18.6303V18.6303C20.6412 18.2498 20.8551 17.7337 20.8551 17.1957C20.8551 16.6577 20.6412 16.1421 20.2608 15.7616L18.8829 14.3832C18.6946 14.1947 18.4711 14.0453 18.2249 13.9433C17.9788 13.8413 17.7148 13.789 17.4483 13.789C17.1819 13.789 16.9181 13.8413 16.672 13.9433C16.4258 14.0453 16.2023 14.1947 16.014 14.3832L15.2679 15.1283C14.7923 15.6038 14.1474 15.871 13.4749 15.871C12.8025 15.871 12.1576 15.6038 11.682 15.1283L10.2608 13.7074"
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
