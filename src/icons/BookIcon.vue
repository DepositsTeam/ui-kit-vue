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
      d="M11.924 16.0908V6.7398M11.928 19.51C10.644 18.5538 9.06134 18.0864 7.46388 18.1911C6.17203 18.1572 4.89089 18.4313 3.72609 18.9909C3.65079 19.0313 3.56614 19.0516 3.48072 19.0495C3.3953 19.0474 3.31199 19.0228 3.23878 18.9787C3.16557 18.9347 3.1051 18.8726 3.06324 18.7981C3.02139 18.7236 2.99957 18.6394 3.00001 18.5539V7.12277C2.99939 6.98999 3.0256 6.85891 3.07716 6.73654C3.12872 6.61418 3.2046 6.50316 3.30006 6.41086C4.46777 5.44498 5.95205 4.94628 7.46608 5.01096C8.23091 5.00727 8.99173 5.11955 9.72291 5.34397M11.9241 19.5099C13.2082 18.554 14.7905 18.0865 16.3879 18.191C17.6798 18.157 18.9612 18.4311 20.126 18.9908C20.2013 19.0312 20.2857 19.0516 20.3711 19.0494C20.4565 19.0473 20.5401 19.0227 20.6133 18.9786C20.6865 18.9346 20.747 18.8725 20.7888 18.798C20.8307 18.7235 20.8525 18.6393 20.8521 18.5538V7.12268C20.8526 6.98992 20.8262 6.8588 20.7747 6.73645C20.7231 6.61411 20.6474 6.50314 20.552 6.41077C19.3842 5.44514 17.9 4.94648 16.386 5.01087C15.5612 4.95995 14.7352 5.08839 13.9646 5.38684C13.194 5.68529 12.4972 6.14669 11.9219 6.73987"
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
