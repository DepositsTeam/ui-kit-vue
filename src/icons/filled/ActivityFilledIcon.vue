<template>
  <d-box
    is="svg"
    :width="width"
    :height="height"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.4499 1.78029C13.4099 2.03029 13.3899 2.28029 13.3899 2.53029C13.3899 4.78028 15.2099 6.59927 17.4499 6.59927C17.6999 6.59927 17.9399 6.57027 18.1899 6.53027V14.5992C18.1899 17.9902 16.1899 20.0002 12.7899 20.0002H5.40097C1.99999 20.0002 0 17.9902 0 14.5992V7.20026C0 3.80028 1.99999 1.78029 5.40097 1.78029H13.4499ZM13.6509 7.86026C13.3799 7.83026 13.1109 7.95026 12.9499 8.17026L10.5309 11.3002L7.75996 9.12026C7.58996 8.99026 7.38996 8.93926 7.18996 8.96026C6.99097 8.99026 6.81097 9.09926 6.68997 9.25926L3.73098 13.1102L3.66998 13.2002C3.49998 13.5192 3.57998 13.9292 3.87998 14.1502C4.01998 14.2402 4.16998 14.3002 4.33998 14.3002C4.57098 14.3102 4.78998 14.1892 4.92998 14.0002L7.43996 10.7692L10.2899 12.9102L10.3799 12.9692C10.6999 13.1392 11.0999 13.0602 11.3299 12.7592L14.2199 9.03026L14.1799 9.05026C14.3399 8.83026 14.3699 8.55026 14.2599 8.30026C14.1509 8.05026 13.9099 7.88026 13.6509 7.86026ZM17.59 0C18.92 0 20 1.07999 20 2.40999C20 3.73998 18.92 4.81998 17.59 4.81998C16.26 4.81998 15.18 3.73998 15.18 2.40999C15.18 1.07999 16.26 0 17.59 0Z"
      :fill="smartColor || fill"
    />
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
    default: "24",
  },
  height: {
    type: String,
    default: "24",
  },
});
</script>

<style scoped></style>
