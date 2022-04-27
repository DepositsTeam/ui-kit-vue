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
        d="M11.6733 7.26514V11.5181L15.0303 13.125"
        :stroke="smartColor || stroke"
        :stroke-width="strokeWidth"
        :stroke-linecap="strokeLineCap"
        :stroke-linejoin="strokeLineJoin"
      />
      <path
        d="M8.64941 4.6058C9.60288 4.18687 10.6329 3.97055 11.6743 3.97055C12.7158 3.97055 13.7458 4.18687 14.6992 4.6058"
        :stroke="smartColor || stroke"
        :stroke-width="strokeWidth"
        :stroke-linecap="strokeLineCap"
        :stroke-linejoin="strokeLineJoin"
      />
      <path
        d="M14.6994 4.6058C16.5114 5.40155 17.9394 6.87552 18.6774 8.71176"
        :stroke="smartColor || stroke"
        :stroke-width="strokeWidth"
        :stroke-linecap="strokeLineCap"
        :stroke-linejoin="strokeLineJoin"
      />
      <path
        d="M4.67139 8.71274C5.40928 6.87643 6.83739 5.40244 8.64941 4.60678"
        :stroke="smartColor || stroke"
        :stroke-width="strokeWidth"
        :stroke-linecap="strokeLineCap"
        :stroke-linejoin="strokeLineJoin"
      />
      <path
        d="M4.67243 8.71307C4.21231 9.85839 4.04014 11.099 4.17097 12.3264C4.30179 13.5537 4.73147 14.73 5.42268 15.7526C6.11389 16.7752 7.04547 17.6127 8.13557 18.1916C9.22566 18.7705 10.4411 19.0734 11.6754 19.0734C12.9096 19.0734 14.1251 18.7705 15.2152 18.1916C16.3053 17.6127 17.2368 16.7752 17.928 15.7526C18.6193 14.73 19.0489 13.5537 19.1798 12.3264C19.3106 11.099 19.1384 9.85839 18.6783 8.71307"
        :stroke="smartColor || stroke"
        :stroke-width="strokeWidth"
        :stroke-linecap="strokeLineCap"
        :stroke-linejoin="strokeLineJoin"
      />
      <path
        d="M14.6994 4.60596L15.7243 3.58105C15.9085 3.39679 16.1274 3.2506 16.3681 3.15088C16.6088 3.05116 16.8668 3 17.1274 3C17.3879 3 17.6459 3.05116 17.8867 3.15088C18.1274 3.2506 18.346 3.39679 18.5302 3.58105L19.7663 4.81787C19.9506 5.00211 20.0967 5.2207 20.1965 5.46143C20.2962 5.70215 20.3476 5.96062 20.3476 6.22119C20.3476 6.48176 20.2962 6.73974 20.1965 6.98047C20.0967 7.2212 19.9506 7.43979 19.7663 7.62402L18.6774 8.71289"
        :stroke="smartColor || stroke"
        :stroke-width="strokeWidth"
        :stroke-linecap="strokeLineCap"
        :stroke-linejoin="strokeLineJoin"
      />
      <path
        d="M8.64941 4.60596L7.62427 3.58105C7.44003 3.39679 7.22144 3.2506 6.98071 3.15088C6.73998 3.05116 6.482 3 6.22144 3C5.96087 3 5.70264 3.05116 5.46191 3.15088C5.22119 3.2506 5.00259 3.39679 4.81836 3.58105L3.5813 4.81787C3.39704 5.00211 3.25085 5.2207 3.15112 5.46143C3.0514 5.70215 3 5.96062 3 6.22119C3 6.48176 3.0514 6.73974 3.15112 6.98047C3.25085 7.2212 3.39704 7.43979 3.5813 7.62402L4.67041 8.71289"
        :stroke="smartColor || stroke"
        :stroke-width="strokeWidth"
        :stroke-linecap="strokeLineCap"
        :stroke-linejoin="strokeLineJoin"
      />
      <path
        d="M18.2641 20.944L15.8691 17.842"
        :stroke="smartColor || stroke"
        :stroke-width="strokeWidth"
        :stroke-linecap="strokeLineCap"
        :stroke-linejoin="strokeLineJoin"
      />
      <path
        d="M5.08545 20.944L7.48045 17.842"
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
