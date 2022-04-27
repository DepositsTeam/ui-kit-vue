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
        d="M5.001 3L5 20.359M17.6721 3.64388L5.89304 11.1139C5.79784 11.1743 5.71932 11.2579 5.66501 11.3568C5.6107 11.4556 5.58224 11.5667 5.58224 11.6795C5.58224 11.7923 5.6107 11.9032 5.66501 12.002C5.71932 12.1009 5.79784 12.1845 5.89304 12.245L17.6721 19.7139C17.7734 19.7783 17.89 19.8142 18.01 19.818C18.1299 19.8217 18.2488 19.793 18.354 19.7352C18.4591 19.6773 18.5468 19.5924 18.6079 19.4891C18.6689 19.3858 18.701 19.268 18.7009 19.148V4.21004C18.701 4.09003 18.6689 3.97206 18.6079 3.86874C18.5468 3.76541 18.4591 3.68048 18.354 3.62264C18.2488 3.5648 18.1299 3.53612 18.01 3.53988C17.89 3.54363 17.7734 3.57958 17.6721 3.64388Z"
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
