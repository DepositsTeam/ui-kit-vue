<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14.6667 8.00065C14.6667 11.6825 11.6819 14.6673 8.00004 14.6673C4.31814 14.6673 1.33337 11.6825 1.33337 8.00065C1.33337 4.31875 4.31814 1.33398 8.00004 1.33398C11.6819 1.33398 14.6667 4.31875 14.6667 8.00065ZM8.00004 6.58398C8.41425 6.58398 8.75004 6.91977 8.75004 7.33398V10.6673C8.75004 11.0815 8.41425 11.4173 8.00004 11.4173C7.58583 11.4173 7.25004 11.0815 7.25004 10.6673V7.33398C7.25004 6.91977 7.58583 6.58398 8.00004 6.58398ZM8.00004 6.00065C8.36823 6.00065 8.66671 5.70217 8.66671 5.33398C8.66671 4.96579 8.36823 4.66732 8.00004 4.66732C7.63185 4.66732 7.33337 4.96579 7.33337 5.33398C7.33337 5.70217 7.63185 6.00065 8.00004 6.00065Z"
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
