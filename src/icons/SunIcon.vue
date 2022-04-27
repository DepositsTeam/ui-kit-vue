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
        d="M11.928 3V4.994M11.928 18.861V20.855M3 11.927H4.994M18.861 11.927H20.855M18.24 5.61499L16.83 7.02499M7.02501 16.83L5.61501 18.24M5.61501 5.61499L7.02501 7.02499M16.83 16.83L18.24 18.24M15.751 11.928C15.751 14.0394 14.0394 15.751 11.928 15.751C9.81661 15.751 8.105 14.0394 8.105 11.928C8.105 9.8166 9.81661 8.10498 11.928 8.10498C14.0394 8.10498 15.751 9.8166 15.751 11.928Z"
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
