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
        d="M18.9991 4.49984C18.9992 4.30283 18.9607 4.10773 18.8857 3.92569C18.8107 3.74365 18.7008 3.57834 18.5622 3.43904C18.4235 3.29973 18.2589 3.18915 18.0777 3.11382C17.8965 3.03849 17.7024 2.99987 17.5063 3H7.99042C7.46256 3 6.95615 3.21066 6.5829 3.58571C6.20964 3.96076 6 4.4695 6 4.9999V21L12.4995 17.4357L19 20.9999V4.50168"
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
