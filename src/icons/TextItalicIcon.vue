<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.7801 3.75H9.6532C9.24909 3.75 8.92383 3.41 8.92383 3C8.92383 2.59 9.25894 2.25 9.66305 2.25H18.7801C19.1843 2.25 19.5194 2.59 19.5194 3C19.5194 3.41 19.1843 3.75 18.7801 3.75Z"
      :fill="smartColor || fill"
    />
    <path
      d="M14.3447 21.75H5.21774C4.81363 21.75 4.47852 21.41 4.47852 21C4.47852 20.59 4.81363 20.25 5.21774 20.25H14.3348C14.7389 20.25 15.0741 20.59 15.0741 21C15.0741 21.41 14.7488 21.75 14.3447 21.75Z"
      :fill="smartColor || fill"
    />
    <path
      d="M9.78226 21.75C9.72312 21.75 9.66398 21.74 9.60485 21.73C9.21059 21.63 8.96419 21.22 9.06275 20.82L13.4981 2.82C13.5967 2.42 13.9909 2.17 14.395 2.27C14.7893 2.37 15.0357 2.78 14.9371 3.18L10.5018 21.18C10.4131 21.52 10.1174 21.75 9.78226 21.75Z"
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
