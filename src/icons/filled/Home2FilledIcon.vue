<template>
  <d-box
    is="svg"
    :width="width"
    :height="height"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path
      d="M16.6999 5.68333L11.8999 2.325C10.5915 1.40833 8.5832 1.45833 7.32487 2.43333L3.14987 5.69167C2.31654 6.34167 1.6582 7.675 1.6582 8.725V14.475C1.6582 16.6 3.3832 18.3333 5.5082 18.3333H14.4915C16.6165 18.3333 18.3415 16.6083 18.3415 14.4833V8.83333C18.3415 7.70833 17.6165 6.325 16.6999 5.68333ZM10.6249 15C10.6249 15.3417 10.3415 15.625 9.99987 15.625C9.6582 15.625 9.37487 15.3417 9.37487 15V12.5C9.37487 12.1583 9.6582 11.875 9.99987 11.875C10.3415 11.875 10.6249 12.1583 10.6249 12.5V15Z"
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
    default: "20",
  },
  height: {
    type: String,
    default: "20",
  },
  fillRule: {
    type: String,
    default: "evenodd",
  },
  clipRule: {
    type: String,
    default: "evenodd",
  },
});
</script>

<style scoped></style>
