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
        d="M11.9987 13.0811C14.5073 13.0811 16.5409 11.0482 16.5409 8.54054C16.5409 6.03287 14.5073 4 11.9987 4C9.49014 4 7.45654 6.03287 7.45654 8.54054C7.45654 11.0482 9.49014 13.0811 11.9987 13.0811Z"
        :stroke="smartColor || stroke"
        :stroke-width="strokeWidth"
        :stroke-linecap="strokeLineCap"
        :stroke-linejoin="strokeLineJoin"
      />
      <path
        d="M20 20.0001C19.9997 18.1655 19.2707 16.4062 17.9728 15.109C16.675 13.8118 14.9148 13.083 13.0795 13.083H10.9205C9.08523 13.083 7.32522 13.8118 6.0274 15.109C4.72958 16.4062 4.00025 18.1655 4 20.0001"
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
