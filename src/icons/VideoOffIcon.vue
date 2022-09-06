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
      d="M4.94006 17.3965C5.25995 17.5966 5.63155 17.7027 6.0109 17.702H14.0912C14.6212 17.702 15.1295 17.4954 15.5044 17.1277C15.8792 16.7599 16.0897 16.2611 16.0897 15.741V13.9707L20.5455 16.2073C20.6978 16.2838 20.8676 16.3208 21.0386 16.3144C21.2096 16.3081 21.3761 16.2587 21.5221 16.1711C21.6681 16.0835 21.7886 15.9604 21.8723 15.8139C21.956 15.6674 22.0002 15.5026 22.0002 15.3347V8.21764C22.0001 8.04974 21.956 7.88482 21.8723 7.73838C21.7886 7.59193 21.6681 7.46889 21.5221 7.38122C21.3762 7.29356 21.2098 7.24393 21.0388 7.23739C20.8678 7.23086 20.6979 7.2678 20.5455 7.34406L16.0897 9.58061V7.81029C16.0902 7.45152 15.9899 7.09976 15.7997 6.79337"
      :stroke="smartColor || stroke"
      :stroke-width="strokeWidth"
      :stroke-linecap="strokeLineCap"
      :stroke-linejoin="strokeLineJoin"
    />
    <path
      d="M12.2896 5.85147H6.00666C5.47659 5.85147 4.96804 6.05804 4.59322 6.42581C4.2184 6.79359 4.00787 7.29233 4.00787 7.81244V14.3749"
      :stroke="smartColor || stroke"
      :stroke-width="strokeWidth"
      :stroke-linecap="strokeLineCap"
      :stroke-linejoin="strokeLineJoin"
    />
    <path
      d="M18.3066 4L2 20"
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
