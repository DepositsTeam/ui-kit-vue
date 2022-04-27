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
        d="M6.82257 4C7.57116 4 8.28909 4.29738 8.81843 4.82671C9.34776 5.35605 9.64514 6.07398 9.64514 6.82257V9.64514H6.82257C6.07398 9.64514 5.35605 9.34776 4.82671 8.81843C4.29738 8.28909 4 7.57116 4 6.82257V6.82257C4 6.07398 4.29738 5.35605 4.82671 4.82671C5.35605 4.29738 6.07398 4 6.82257 4V4Z"
        :stroke="smartColor || stroke"
        :stroke-width="strokeWidth"
        :stroke-linecap="strokeLineCap"
        :stroke-linejoin="strokeLineJoin"
      />
      <path
        d="M6.82262 14.3548H9.64519V17.1774C9.64519 17.926 9.34781 18.6439 8.81847 19.1732C8.28914 19.7026 7.57121 19.9999 6.82262 19.9999V19.9999C6.07402 19.9999 5.35609 19.7026 4.82676 19.1732C4.29742 18.6439 4.00005 17.926 4.00005 17.1774V17.1774C4.00005 16.4288 4.29742 15.7108 4.82676 15.1815C5.35609 14.6522 6.07402 14.3548 6.82262 14.3548V14.3548Z"
        :stroke="smartColor || stroke"
        :stroke-width="strokeWidth"
        :stroke-linecap="strokeLineCap"
        :stroke-linejoin="strokeLineJoin"
      />
      <path
        d="M17.1776 4.00006C17.9262 4.00006 18.6441 4.29744 19.1735 4.82677C19.7028 5.35611 20.0002 6.07404 20.0002 6.82263V6.82263C20.0002 7.57122 19.7028 8.28916 19.1735 8.81849C18.6441 9.34782 17.9262 9.6452 17.1776 9.6452H14.355V6.82263C14.355 6.07404 14.6524 5.35611 15.1817 4.82677C15.7111 4.29744 16.429 4.00006 17.1776 4.00006V4.00006Z"
        :stroke="smartColor || stroke"
        :stroke-width="strokeWidth"
        :stroke-linecap="strokeLineCap"
        :stroke-linejoin="strokeLineJoin"
      />
      <path
        d="M9.64412 9.64532H14.3537V14.3549H9.64412V9.64532Z"
        :stroke="smartColor || stroke"
        :stroke-width="strokeWidth"
        :stroke-linecap="strokeLineCap"
        :stroke-linejoin="strokeLineJoin"
      />
      <path
        d="M14.355 14.3548H17.1776C17.9262 14.3548 18.6441 14.6522 19.1735 15.1815C19.7028 15.7108 20.0002 16.4288 20.0002 17.1774V17.1774C20.0002 17.926 19.7028 18.6439 19.1735 19.1732C18.6441 19.7026 17.9262 19.9999 17.1776 19.9999V19.9999C16.429 19.9999 15.7111 19.7026 15.1817 19.1732C14.6524 18.6439 14.355 17.926 14.355 17.1774V14.3548Z"
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
