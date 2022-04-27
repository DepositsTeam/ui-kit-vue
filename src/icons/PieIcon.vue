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
        d="M10.3579 7.14514C8.67163 7.14514 7.05454 7.82236 5.8622 9.02773C4.66986 10.2331 3.99997 11.8681 3.99997 13.5728C3.99997 15.2774 4.66986 16.912 5.8622 18.1174C7.05454 19.3227 8.67163 19.9999 10.3579 19.9999V19.9999C12.0437 19.9987 13.6601 19.3211 14.8522 18.116C16.0443 16.9109 16.7145 15.2771 16.7157 13.5728H10.3579V7.14514Z"
        :stroke="smartColor || stroke"
        :stroke-width="strokeWidth"
        :stroke-linecap="strokeLineCap"
        :stroke-linejoin="strokeLineJoin"
      />
      <path
        d="M13.6424 3.99994V10.432H20.0003C20.0003 8.72691 19.3305 7.09172 18.1383 5.88563C16.9461 4.67953 15.329 4.00114 13.6424 3.99994Z"
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
