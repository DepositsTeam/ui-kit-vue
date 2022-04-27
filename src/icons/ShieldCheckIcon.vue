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
        d="M15.4601 9.38818L11.3591 13.4892L9.09308 11.4232M9.45518 4.021L12.13 3L19.2601 5.72021V11.2783C19.2598 13.4293 18.566 15.5226 17.2816 17.248C15.9972 18.9735 14.1905 20.2386 12.13 20.856C10.0695 20.2386 8.26294 18.9725 6.97852 17.2471C5.6941 15.5217 5.00028 13.4284 5 11.2774V5.71926L6.97412 4.96633"
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
