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
        :fill-rule="fillRule"
        :clip-rule="clipRule"
        :fill="smartColor || fill"
        d="M5.86896 3.86273C6.11025 3.63398 6.44559 3.49895 6.80321 3.4989H6.80341L12.3982 3.50043V7.001C12.3982 7.6001 12.6496 8.16577 13.0828 8.57645C13.5145 8.98572 14.0921 9.20955 14.6868 9.20955H18.4968V18.3065C18.4968 18.6101 18.37 18.9097 18.13 19.1372C17.8887 19.366 17.5533 19.5011 17.1956 19.5011H6.80341C6.44572 19.5011 6.1103 19.366 5.86896 19.1372C5.62898 18.9097 5.50219 18.6101 5.50219 18.3065V4.69348C5.50219 4.38992 5.62898 4.09024 5.86896 3.86273ZM19.9968 8.424V7.72043C19.9968 7.50942 19.9079 7.30818 19.7519 7.16606L14.298 2.19644C14.1599 2.07063 13.9799 2.00087 13.7931 2.00082L6.80362 1.9989H6.80341C6.073 1.9989 5.36503 2.27355 4.83697 2.77415C4.30755 3.27605 4.00219 3.96551 4.00219 4.69348V18.3065C4.00219 19.0345 4.30755 19.7239 4.83697 20.2258C5.36503 20.7264 6.073 21.0011 6.80341 21.0011H17.1956C17.926 21.0011 18.634 20.7264 19.162 20.2258C19.6914 19.7239 19.9968 19.0345 19.9968 18.3065V8.4951C19.9973 8.48332 19.9976 8.47147 19.9976 8.45955C19.9976 8.44763 19.9973 8.43578 19.9968 8.424ZM18.1213 7.70955H14.6868C14.4653 7.70955 14.2601 7.62565 14.1148 7.48787C13.971 7.35149 13.8982 7.17555 13.8982 7.001V3.86149L18.1213 7.70955Z"
      />
      <path
        d="M7.61208 16.0422H16.1979"
        :stroke="smartColor || stroke"
        :stroke-width="strokeWidth"
        :stroke-linecap="strokeLineCap"
        :stroke-linejoin="strokeLineJoin"
      />
      <path
        d="M7.63608 11.7598H16.2219"
        :stroke="smartColor || stroke"
        :stroke-width="strokeWidth"
        :stroke-linecap="strokeLineCap"
        :stroke-linejoin="strokeLineJoin"
      />
      <path
        d="M7.61208 7.47729H10.0129"
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
