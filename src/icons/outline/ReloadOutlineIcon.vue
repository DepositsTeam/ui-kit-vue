<template>
  <d-box
    is="svg"
    :width="width"
    :height="height"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_1055_14791)">
      <path
        d="M11.3336 16.625C12.9413 16.4143 14.4171 15.6248 15.4847 14.4044C16.5523 13.1841 17.1386 11.6164 17.1338 9.99495C17.1289 8.37349 16.5333 6.80937 15.4584 5.5954C14.3835 4.38142 12.903 3.60081 11.294 3.39969C9.68507 3.19858 8.05798 3.59074 6.71732 4.50276C5.37666 5.41479 4.41435 6.78416 4.01052 8.35454C3.60669 9.92492 3.78903 11.5886 4.52341 13.0343C5.25779 14.4799 6.49386 15.6083 8.00023 16.2083M3.83356 16.625L8.00023 16.625L8.00023 12.4583"
        :stroke="smartColor || stroke"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1055_14791">
        <rect
          width="20"
          height="20"
          fill="white"
          transform="translate(20.5) rotate(90)"
        />
      </clipPath>
    </defs>
  </d-box>
</template>

<script setup>
import { DBox } from "../../main";

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
    default: "21",
  },
  height: {
    type: String,
    default: "20",
  },
});
</script>

<style scoped></style>
