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
        d="M4.69312 10.03L3.47412 8.63C3.16854 8.27784 3.00012 7.82722 3 7.36096V4.58301C3 4.16317 3.16675 3.76049 3.46362 3.46362C3.76049 3.16675 4.16317 3 4.58301 3H18.8281C19.248 3 19.6506 3.16675 19.9475 3.46362C20.2444 3.76049 20.4111 4.16317 20.4111 4.58301V7.36096C20.4111 7.82724 20.2427 8.27789 19.937 8.63L18.718 10.03M7.07599 14.2091L11.7032 9.58105L16.3311 14.2091M11.7041 20.8532V9.81519"
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
