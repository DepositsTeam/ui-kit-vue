<template>
  <d-box
    is="svg"
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
      d="M13.875 3.75C13.875 3.33579 14.2108 3 14.625 3H19.875C20.2892 3 20.625 3.33579 20.625 3.75V18.75H21.375C21.7892 18.75 22.125 19.0858 22.125 19.5C22.125 19.9142 21.7892 20.25 21.375 20.25H2.625C2.21079 20.25 1.875 19.9142 1.875 19.5C1.875 19.0858 2.21079 18.75 2.625 18.75H3.375V12.75C3.375 12.3358 3.71079 12 4.125 12H8.625V8.25C8.625 7.83579 8.96079 7.5 9.375 7.5H13.875V3.75ZM13.875 9H10.125V18.75H13.875V9ZM15.375 18.75H19.125V4.5H15.375V18.75ZM8.625 18.75V13.5H4.875V18.75H8.625Z"
    />
  </d-box>
</template>

<script setup>
import { DBox } from "../main";
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
