<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      :fill-rule="fillRule"
      :clip-rule="clipRule"
      d="M7.99998 14.6666C11.6819 14.6666 14.6666 11.6819 14.6666 7.99998C14.6666 4.31808 11.6819 1.33331 7.99998 1.33331C4.31808 1.33331 1.33331 4.31808 1.33331 7.99998C1.33331 11.6819 4.31808 14.6666 7.99998 14.6666ZM11.197 6.53031C11.4899 6.23742 11.4899 5.76254 11.197 5.46965C10.9041 5.17676 10.4292 5.17676 10.1363 5.46965L7.33331 8.27265L6.53031 7.46965C6.23742 7.17676 5.76254 7.17676 5.46965 7.46965C5.17676 7.76254 5.17676 8.23742 5.46965 8.53031L6.80298 9.86364C7.09588 10.1565 7.57075 10.1565 7.86364 9.86364L11.197 6.53031Z"
      :fill="smartColor || fill"
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
  fillRule: {
    type: String,
    default: "evenodd",
  },
  clipRule: {
    type: String,
    default: "evenodd",
  },
});
</script>

<style scoped></style>
