<template>
    <d-box is="svg"
      :width="width"
      :height="height"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      v-bind="$attrs"
    >
      <path
        d="M6.96313 5.09998C7.54969 4.44229 8.26798 3.91545 9.07153 3.55365C9.87508 3.19185 10.746 3.0032 11.6272 3C12.4937 3.02102 13.3476 3.21254 14.1401 3.5636C14.9327 3.91466 15.6483 4.41838 16.2461 5.04602C16.8439 5.67366 17.3122 6.4129 17.6243 7.22156C17.9364 8.03022 18.0863 8.89243 18.0652 9.75897V11.859C17.9571 14.32 18.7339 16.7384 20.2551 18.676H3C4.52118 16.7384 5.29828 14.32 5.19019 11.859V9.75897C5.18864 8.88948 5.34829 8.02727 5.66113 7.216M12.7138 18.9397C12.8482 19.1553 12.923 19.4029 12.93 19.6569C12.9371 19.9109 12.8762 20.1622 12.754 20.385C12.6317 20.6077 12.4523 20.7938 12.2343 20.9242C12.0162 21.0547 11.7675 21.1248 11.5134 21.1272C11.2593 21.1296 11.0091 21.0642 10.7886 20.9379C10.5682 20.8115 10.3852 20.6288 10.2588 20.4084C10.1324 20.188 10.0672 19.9377 10.0695 19.6836C10.0718 19.4296 10.1414 19.1807 10.2717 18.9626"
        :stroke="smartColor || stroke"
        :stroke-width="strokeWidth"
        :stroke-linecap="strokeLineCap"
        :stroke-linejoin="strokeLineJoin"
      />
    </d-box>
</template>

<script setup>
import {DBox} from "../main";
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
