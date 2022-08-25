<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.835 1.5H6.165C3.33 1.5 2.625 2.2575 2.625 5.28V13.725C2.625 15.72 3.72 16.1925 5.0475 14.7675L5.055 14.76C5.67 14.1075 6.6075 14.16 7.14 14.8725L7.8975 15.885C8.505 16.6875 9.4875 16.6875 10.095 15.885L10.8525 14.8725C11.3925 14.1525 12.33 14.1 12.945 14.76C14.28 16.185 15.3675 15.7125 15.3675 13.7175V5.28C15.375 2.2575 14.67 1.5 11.835 1.5ZM11.0625 8.0625H6.9375C6.63 8.0625 6.375 7.8075 6.375 7.5C6.375 7.1925 6.63 6.9375 6.9375 6.9375H11.0625C11.37 6.9375 11.625 7.1925 11.625 7.5C11.625 7.8075 11.37 8.0625 11.0625 8.0625Z"
      :fill="smartColor "
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
