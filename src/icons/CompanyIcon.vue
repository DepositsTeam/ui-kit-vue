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
        d="M9.7981 20.86V15.06H14.3049V20.86"
        :stroke="smartColor || stroke"
        :stroke-width="strokeWidth"
        :stroke-linecap="strokeLineCap"
        :stroke-linejoin="strokeLineJoin"
      />
      <path
        d="M2.99997 20.86H20.8601"
        :stroke="smartColor || stroke"
        :stroke-width="strokeWidth"
        :stroke-linecap="strokeLineCap"
        :stroke-linejoin="strokeLineJoin"
      />
      <path
        d="M18.6731 20.86V5.45398H5.05197V20.86"
        :stroke="smartColor || stroke"
        :stroke-width="strokeWidth"
        :stroke-linecap="strokeLineCap"
        :stroke-linejoin="strokeLineJoin"
      />
      <path
        d="M6.88889 5.45401V3H12.2441V5.45401"
        :stroke="smartColor || stroke"
        :stroke-width="strokeWidth"
        :stroke-linecap="strokeLineCap"
        :stroke-linejoin="strokeLineJoin"
      />
      <path
        d="M8.194 9.09399V8.09399M7.444 8.34399H9.444H7.444ZM8.694 8.09399V9.09399V8.09399ZM9.444 8.84399H7.444H9.444Z"
        :stroke="smartColor || stroke"
        :stroke-width="strokeWidth"
        :stroke-linecap="strokeLineCap"
        :stroke-linejoin="strokeLineJoin"
      />
      <path
        d="M15.167 9.09399V8.09399M14.417 8.34399H16.417H14.417ZM15.667 8.09399V9.09399V8.09399ZM16.417 8.84399H14.417H16.417Z"
        :stroke="smartColor || stroke"
        :stroke-width="strokeWidth"
        :stroke-linecap="strokeLineCap"
        :stroke-linejoin="strokeLineJoin"
      />
      <path
        d="M8.194 12.21V11.21M7.444 11.46H9.444H7.444ZM8.694 11.21V12.21V11.21ZM9.444 11.96H7.444H9.444Z"
        :stroke="smartColor || stroke"
        :stroke-width="strokeWidth"
        :stroke-linecap="strokeLineCap"
        :stroke-linejoin="strokeLineJoin"
      />
      <path
        d="M15.167 12.21V11.21M14.417 11.46H16.417H14.417ZM15.667 11.21V12.21V11.21ZM16.417 11.96H14.417H16.417Z"
        :stroke="smartColor || stroke"
        :stroke-width="strokeWidth"
        :stroke-linecap="strokeLineCap"
        :stroke-linejoin="strokeLineJoin"
      />

      <path d="M3.73396 15.2779L8.72224 20.2663C9.19206 20.736 9.82939 21 10.4938 21C11.1581 21 11.7952 20.736 12.265 20.2663L19.5595 12.9717C19.8412 12.6897 19.9996 12.3075 20 11.909V4H12.0914C11.6928 4.00009 11.3105 4.15856 11.0287 4.44048L3.73396 11.7351C3.50124 11.9676 3.3166 12.2438 3.19064 12.5477C3.06469 12.8517 3 13.1774 3 13.5064C3 13.8354 3.06469 14.1613 3.19064 14.4653C3.3166 14.7692 3.50124 15.0454 3.73396 15.2779Z" />
      <path
        d="M15.1222 10.0612C15.6801 10.0612 16.1324 9.60889 16.1324 9.05097C16.1324 8.49305 15.6801 8.04077 15.1222 8.04077C14.5643 8.04077 14.112 8.49305 14.112 9.05097C14.112 9.60889 14.5643 10.0612 15.1222 10.0612Z"
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
