<template>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      v-bind="$attrs"
    >
      <g clipPath="url(#clip0_379_504)">
        <path
          :fill-rule="fillRule"
          :clip-rule="clipRule"
          :fill="smartColor || fill"
          d="M7.40381 7.40381C4.8654 9.94221 4.8654 14.0578 7.40381 16.5962C9.94221 19.1346 14.0578 19.1346 16.5962 16.5962C19.1346 14.0578 19.1346 9.94221 16.5962 7.40381C14.0578 4.8654 9.94221 4.8654 7.40381 7.40381ZM6.34315 17.6569C3.21895 14.5327 3.21895 9.46734 6.34315 6.34315C9.46734 3.21895 14.5327 3.21895 17.6569 6.34315C20.781 9.46734 20.781 14.5327 17.6569 17.6569C14.5327 20.781 9.46734 20.781 6.34315 17.6569Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_379_504">
          <rect
            width="16"
            height="16"
            :fill="white"
            transform="translate(4 4)"
          />
        </clipPath>
      </defs>

      <path
        d="M3.73396 15.2779L8.72224 20.2663C9.19206 20.736 9.82939 21 10.4938 21C11.1581 21 11.7952 20.736 12.265 20.2663L19.5595 12.9717C19.8412 12.6897 19.9996 12.3075 20 11.909V4H12.0914C11.6928 4.00009 11.3105 4.15856 11.0287 4.44048L3.73396 11.7351C3.50124 11.9676 3.3166 12.2438 3.19064 12.5477C3.06469 12.8517 3 13.1774 3 13.5064C3 13.8354 3.06469 14.1613 3.19064 14.4653C3.3166 14.7692 3.50124 15.0454 3.73396 15.2779Z"
        :stroke="smartColor || stroke"
        :stroke-width="strokeWidth"
        :stroke-linecap="strokeLineCap"
        :stroke-linejoin="strokeLineJoin"
      />
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
