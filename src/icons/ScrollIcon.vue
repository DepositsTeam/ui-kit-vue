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
      d="M19.585 20.856H6.47192C5.55109 20.856 4.66797 20.4905 4.01685 19.8394C3.36572 19.1882 3 18.3051 3 17.3843V3.99219C3 3.86192 3.02559 3.73266 3.07544 3.6123C3.12529 3.49195 3.19841 3.38264 3.29053 3.29053C3.38264 3.19841 3.49195 3.12554 3.6123 3.07568C3.73266 3.02583 3.86167 3 3.99194 3H16.0779C16.2082 3 16.3372 3.02583 16.4575 3.07568C16.5779 3.12554 16.6874 3.19841 16.7795 3.29053C16.8717 3.38264 16.9445 3.49195 16.9944 3.6123C17.0442 3.73266 17.0701 3.86192 17.0701 3.99219V15.3989"
      :stroke="smartColor || stroke"
      :stroke-width="strokeWidth"
      :stroke-linecap="strokeLineCap"
      :stroke-linejoin="strokeLineJoin"
    />
    <path
      d="M17.0698 11.1082V18.6008C17.0701 19.1988 17.3079 19.7722 17.7307 20.1951C18.1535 20.6179 18.727 20.8559 19.325 20.8562C19.9231 20.8562 20.4966 20.6184 20.9197 20.1956C21.3427 19.7727 21.5805 19.199 21.5808 18.6008V12.1008C21.5808 11.8377 21.4763 11.5857 21.2903 11.3997C21.1042 11.2136 20.852 11.1091 20.5889 11.1091H19.9109"
      :stroke="smartColor || stroke"
      :stroke-width="strokeWidth"
      :stroke-linecap="strokeLineCap"
      :stroke-linejoin="strokeLineJoin"
    />
    <path
      d="M6.24902 8.0871H8.77302"
      :stroke="smartColor || stroke"
      :stroke-width="strokeWidth"
      :stroke-linecap="strokeLineCap"
      :stroke-linejoin="strokeLineJoin"
    />
    <path
      d="M6.24902 11.5331H13.421"
      :stroke="smartColor || stroke"
      :stroke-width="strokeWidth"
      :stroke-linecap="strokeLineCap"
      :stroke-linejoin="strokeLineJoin"
    />
    <path
      d="M6.24902 14.9801H13.547"
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
