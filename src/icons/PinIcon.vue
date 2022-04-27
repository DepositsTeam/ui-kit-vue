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
        d="M15.736 5.16016L20.15 9.54004C20.336 9.72516 20.4409 9.97638 20.442 10.2388C20.4431 10.5012 20.3402 10.7532 20.1559 10.9399L18.8829 12.2231C18.6998 12.408 18.4512 12.5132 18.191 12.5166C17.9308 12.52 17.6799 12.4208 17.4921 12.2407L16.1539 10.959L14.901 12.2339C14.5198 12.6215 14.2223 13.0833 14.0272 13.5908C13.8321 14.0983 13.7436 14.6409 13.767 15.1841L13.8199 16.438C13.8316 16.713 13.7859 16.9873 13.6857 17.2437C13.5855 17.5 13.433 17.7326 13.2379 17.9268L11.7169 19.4429L7.35803 15.1182L3.08606 19.418M17.2539 6.667L12.8389 2.28663C12.6523 2.10214 12.4003 1.99907 12.1379 2.00001C11.8756 2.00094 11.6242 2.10618 11.439 2.292L10.166 3.57471C9.98266 3.75933 9.87924 4.00886 9.87793 4.26905C9.87662 4.52924 9.97744 4.77938 10.1589 4.96583L11.4509 6.29395L10.2139 7.55274C9.82802 7.94502 9.36486 8.25273 8.85376 8.45655C8.34266 8.66037 7.79478 8.75594 7.24487 8.73682L6.00098 8.69385C5.7295 8.68427 5.45892 8.73034 5.20605 8.8296C4.95319 8.92885 4.72348 9.07932 4.53101 9.271L3 10.7959L5.20605 12.9839"
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
