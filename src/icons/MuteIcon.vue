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
        d="M6.53394 9.11145H4.48999C4.09473 9.11172 3.71568 9.26887 3.43628 9.54846C3.15688 9.82805 3 10.2074 3 10.6027V12.7028C2.99987 12.8985 3.03822 13.0922 3.11304 13.2731C3.18786 13.454 3.29766 13.6185 3.43604 13.757C3.57441 13.8954 3.73884 14.0053 3.91968 14.0802C4.10052 14.1551 4.29424 14.1935 4.48999 14.1935H6.53394C6.91443 14.1934 7.28046 14.3392 7.55689 14.6007L10.2849 17.1744C10.356 17.2393 10.4444 17.2825 10.5393 17.2985C10.6342 17.3144 10.7317 17.3024 10.8201 17.2643C10.9084 17.2262 10.984 17.1636 11.0376 17.0836C11.0912 17.0037 11.1205 16.9098 11.1221 16.8136V6.49182C11.1205 6.39559 11.0912 6.30177 11.0376 6.2218C10.984 6.14184 10.9084 6.07877 10.8201 6.04065C10.7317 6.00253 10.6342 5.99103 10.5393 6.00696C10.4444 6.02289 10.356 6.06561 10.2849 6.13049L7.55689 8.70471C7.28024 8.96584 6.91435 9.11116 6.53394 9.11145V9.11145Z"
        :stroke="smartColor || stroke"
        :stroke-width="strokeWidth"
        :stroke-linecap="strokeLineCap"
        :stroke-linejoin="strokeLineJoin"
      />
      <path
        d="M20.8547 8.43848L14.4277 14.8655"
        :stroke="smartColor || stroke"
        :stroke-width="strokeWidth"
        :stroke-linecap="strokeLineCap"
        :stroke-linejoin="strokeLineJoin"
      />
      <path
        d="M14.4277 8.43848L20.8547 14.8655"
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
