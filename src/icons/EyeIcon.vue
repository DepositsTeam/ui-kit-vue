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
      d="M20.8589 11.8552C20.103 13.5947 18.8555 15.0753 17.2695 16.1154C15.6835 17.1555 13.828 17.7097 11.9314 17.7097C10.0348 17.7097 8.17952 17.1555 6.59351 16.1154C5.00749 15.0753 3.75981 13.5947 3.00391 11.8552M12.928 6.0542C12.5959 6.01807 12.262 5.99984 11.928 6C10.0432 6.05179 8.20999 6.62714 6.6333 7.66113C5.05662 8.69513 3.79864 10.147 3 11.855M20.8599 11.8549C19.6781 9.44015 17.6339 7.55638 15.1309 6.57516M14.422 11.8551C14.422 13.2303 13.3071 14.3451 11.932 14.3451C10.5568 14.3451 9.44196 13.2303 9.44196 11.8551C9.44196 10.4799 10.5568 9.36511 11.932 9.36511C13.3071 9.36511 14.422 10.4799 14.422 11.8551Z"
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
    default: "24",
  },
});
</script>

<style scoped></style>
