<template>
  <d-box
    is="svg"
    :width="width"
    :height="height"
    viewBox="0 0 38 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path
      :fill-rule="evenodd"
      :clip-rule="evenodd"
      d="M5 7.66667C5 6.19391 6.19391 5 7.66667 5H25.4444C26.9172 5 28.1111 6.19391 28.1111 7.66667V18.3333C28.1111 19.8061 26.9172 21 25.4444 21H7.66667C6.19391 21 5 19.8061 5 18.3333V7.66667ZM7.66667 6.77778C7.17575 6.77778 6.77778 7.17575 6.77778 7.66667V18.3333C6.77778 18.8243 7.17575 19.2222 7.66667 19.2222H25.4444C25.9354 19.2222 26.3333 18.8243 26.3333 18.3333V7.66667C26.3333 7.17575 25.9354 6.77778 25.4444 6.77778H7.66667Z"
      :fill="smartColor || fill"
    />
    <path
      :fill-rule="evenodd"
      :clip-rule="evenodd"
      d="M27.6667 11.4457H5.66675V9.66797H27.6667V11.4457Z"
      :fill="smartColor || fill"
    />
    <path
      :fill-rule="evenodd"
      :clip-rule="evenodd"
      d="M19.2222 16.5569C19.2222 16.0659 19.6201 15.668 20.1111 15.668H23.6666C24.1575 15.668 24.5555 16.0659 24.5555 16.5569C24.5555 17.0478 24.1575 17.4457 23.6666 17.4457H20.1111C19.6201 17.4457 19.2222 17.0478 19.2222 16.5569Z"
      :fill="smartColor || fill"
    />
    <path
      d="M5 1H1V5"
      :stroke="smartColor || stroke"
      :stroke-width="strokeWidth"
      :stroke-linecap="strokeLineCap"
      :stroke-linejoin="strokeLineJoin"
    />
    <path
      d="M5 25H1V21"
      :stroke="smartColor || stroke"
      :stroke-width="strokeWidth"
      :stroke-linecap="strokeLineCap"
      :stroke-linejoin="strokeLineJoin"
    />
    <path
      d="M28 1H32V5"
      :stroke="smartColor || stroke"
      :stroke-width="strokeWidth"
      :stroke-linecap="strokeLineCap"
      :stroke-linejoin="strokeLineJoin"
    />
    <path
      d="M28 25H32V21"
      :stroke="smartColor || stroke"
      :stroke-width="strokeWidth"
      :stroke-linecap="strokeLineCap"
      :stroke-linejoin="strokeLineJoin"
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
    default: "16",
  },
});
</script>

<style scoped></style>
