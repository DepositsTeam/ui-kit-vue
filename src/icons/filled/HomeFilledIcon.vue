<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.85108 14.58V12.2867C5.85108 11.7013 6.32913 11.2267 6.91883 11.2267H9.07446C9.35764 11.2267 9.62923 11.3384 9.82947 11.5372C10.0297 11.736 10.1422 12.0056 10.1422 12.2867V14.58C10.1404 14.8234 10.2365 15.0574 10.4093 15.2301C10.582 15.4029 10.817 15.5 11.0622 15.5H12.5329C13.2197 15.5018 13.8791 15.2321 14.3654 14.7506C14.8517 14.2691 15.125 13.6152 15.125 12.9334V6.40014C15.125 5.84935 14.8791 5.32688 14.4535 4.9735L9.45052 1.0069C8.58025 0.311421 7.33333 0.333877 6.48904 1.06023L1.60026 4.9735C1.15456 5.31646 0.888164 5.84048 0.875 6.40014V12.9267C0.875 14.3479 2.03554 15.5 3.46713 15.5H4.90422C5.41342 15.5 5.82725 15.0922 5.83094 14.5867L5.85108 14.58Z"
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
