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
        d="M11.9998 18H20.5775C20.6895 18 20.797 17.9575 20.8763 17.882C20.9555 17.8065 20.9998 17.7042 20.9998 17.5974V14.35H20.9656C20.6466 14.3502 20.3308 14.2904 20.036 14.1741C19.7413 14.0578 19.4733 13.8874 19.2477 13.6725C19.0221 13.4575 18.8432 13.2021 18.7211 12.9212C18.599 12.6403 18.5362 12.3392 18.5362 12.0351V12.0351C18.5362 11.4208 18.7921 10.8318 19.2477 10.3974C19.7034 9.9631 20.3213 9.71916 20.9656 9.71916H20.9998V6.4026C20.9998 6.29581 20.9555 6.19353 20.8763 6.11801C20.797 6.0425 20.6895 6 20.5775 6H8.78311"
        :stroke="smartColor || stroke"
        :stroke-width="strokeWidth"
        :stroke-linecap="strokeLineCap"
        :stroke-linejoin="strokeLineJoin"
      />
      <path
        d="M20.9987 9.71899H20.9645C20.3204 9.71925 19.7025 9.96344 19.2471 10.3977C18.7918 10.832 18.5359 11.4208 18.5359 12.0349V12.0349C18.5358 12.339 18.5985 12.6403 18.7205 12.9213C18.8425 13.2023 19.0214 13.4575 19.2469 13.6725C19.4724 13.8876 19.7403 14.0582 20.0349 14.1746C20.3296 14.291 20.6455 14.351 20.9645 14.351H20.9987"
        :stroke="smartColor || stroke"
        :stroke-width="strokeWidth"
        :stroke-linecap="strokeLineCap"
        :stroke-linejoin="strokeLineJoin"
      />
      <path
        d="M11.9999 18H3.42348C3.36793 18.0001 3.3129 17.9897 3.26154 17.9695C3.21018 17.9493 3.16329 17.9198 3.12396 17.8824C3.08463 17.845 3.05345 17.8004 3.03216 17.7515C3.01087 17.7026 2.99992 17.6503 2.99992 17.5974V14.35H3.03438C3.35337 14.3502 3.66919 14.2904 3.96394 14.1741C4.25869 14.0578 4.52638 13.8874 4.75199 13.6725C4.97759 13.4575 5.15656 13.2021 5.27866 12.9212C5.40077 12.6403 5.46374 12.3392 5.46374 12.0351V12.0351C5.46374 11.4208 5.20784 10.8318 4.75223 10.3974C4.29662 9.9631 3.67871 9.71916 3.03438 9.71916H2.99992V6.4026C3.00019 6.29572 3.04508 6.1935 3.12446 6.11801C3.20383 6.04253 3.31136 6 3.42348 6H5.78417"
        :stroke="smartColor || stroke"
        :stroke-width="strokeWidth"
        :stroke-linecap="strokeLineCap"
        :stroke-linejoin="strokeLineJoin"
      />
      <path
        d="M3 9.71899H3.03446C3.67879 9.71899 4.2967 9.96294 4.75231 10.3973C5.20792 10.8316 5.46381 11.4207 5.46381 12.0349V12.0349C5.46381 12.6491 5.20792 13.2384 4.75231 13.6728C4.2967 14.1071 3.67879 14.351 3.03446 14.351H3"
        :stroke="smartColor || stroke"
        :stroke-width="strokeWidth"
        :stroke-linecap="strokeLineCap"
        :stroke-linejoin="strokeLineJoin"
      />
      <path
        d="M9.70652 10.5858H14.2922"
        :stroke="smartColor || stroke"
        :stroke-width="strokeWidth"
        :stroke-linecap="strokeLineCap"
        :stroke-linejoin="strokeLineJoin"
      />
      <path
        d="M9.70652 10.5858H14.2922"
        :stroke="smartColor || stroke"
        :stroke-width="strokeWidth"
        :stroke-linecap="strokeLineCap"
        :stroke-linejoin="strokeLineJoin"
      />
      <path
        d="M9.7065 13.4141H14.2922"
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
