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
      d="M16.8418 6.51668L10.4252 10.2333C10.1668 10.3833 9.84185 10.3833 9.57518 10.2333L3.15851 6.51668C2.70018 6.25001 2.58351 5.62501 2.93351 5.23335C3.17518 4.95835 3.45018 4.73335 3.74185 4.57501L8.25851 2.07501C9.22518 1.53335 10.7918 1.53335 11.7585 2.07501L16.2752 4.57501C16.5668 4.73335 16.8418 4.96668 17.0835 5.23335C17.4168 5.62501 17.3002 6.25001 16.8418 6.51668Z"
      :fill="smartColor || fill"
    />
    <path
      d="M9.52507 11.7833V17.4666C9.52507 18.1 8.8834 18.5166 8.31673 18.2416C6.60006 17.4 3.7084 15.825 3.7084 15.825C2.69173 15.25 1.8584 13.8 1.8584 12.6083V8.30831C1.8584 7.64998 2.55007 7.23331 3.11673 7.55831L9.1084 11.0333C9.3584 11.1916 9.52507 11.475 9.52507 11.7833Z"
      :fill="smartColor || fill"
    />
    <path
      d="M10.4746 11.7833V17.4666C10.4746 18.1 11.1163 18.5166 11.6829 18.2416C13.3996 17.4 16.2913 15.825 16.2913 15.825C17.3079 15.25 18.1413 13.8 18.1413 12.6083V8.30831C18.1413 7.64998 17.4496 7.23331 16.8829 7.55831L10.8913 11.0333C10.6413 11.1916 10.4746 11.475 10.4746 11.7833Z"
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
