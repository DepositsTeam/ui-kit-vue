<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 22 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.281 3.9375H3.40608C3.04449 3.9375 2.74463 3.6825 2.74463 3.375C2.74463 3.0675 3.04449 2.8125 3.40608 2.8125H19.281C19.6426 2.8125 19.9425 3.0675 19.9425 3.375C19.9425 3.6825 19.6426 3.9375 19.281 3.9375Z"
      :fill="smartColor || fill"
    />
    <path
      d="M11.7581 7.6875H3.40608C3.04449 7.6875 2.74463 7.4325 2.74463 7.125C2.74463 6.8175 3.04449 6.5625 3.40608 6.5625H11.7581C12.1197 6.5625 12.4195 6.8175 12.4195 7.125C12.4195 7.4325 12.1285 7.6875 11.7581 7.6875Z"
      :fill="smartColor || fill"
    />
    <path
      d="M19.281 11.4375H3.40608C3.04449 11.4375 2.74463 11.1825 2.74463 10.875C2.74463 10.5675 3.04449 10.3125 3.40608 10.3125H19.281C19.6426 10.3125 19.9425 10.5675 19.9425 10.875C19.9425 11.1825 19.6426 11.4375 19.281 11.4375Z"
      :fill="smartColor || fill"
    />
    <path
      d="M11.7581 15.1875H3.40608C3.04449 15.1875 2.74463 14.9325 2.74463 14.625C2.74463 14.3175 3.04449 14.0625 3.40608 14.0625H11.7581C12.1197 14.0625 12.4195 14.3175 12.4195 14.625C12.4195 14.9325 12.1285 15.1875 11.7581 15.1875Z"
      :fill="smartColor || fill"
    />
  </svg>
</template>

<script>
export default {
  name: "TextAlignLeftIcon",
  props: {
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
      default: "22",
    },
    height: {
      type: String,
      default: "18",
    },
  },
};
</script>

<style scoped></style>
