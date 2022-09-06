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
      d="M5.15613 14.8959C4.28466 14.0271 3.5569 13.0255 3.00012 11.9281C3.79859 10.2202 5.05618 8.76807 6.63269 7.73407C8.2092 6.70007 10.0425 6.1248 11.9271 6.07294C12.6234 6.07344 13.3171 6.1542 13.995 6.31317M16.543 7.31195C18.3982 8.39918 19.8964 10.0033 20.8549 11.9281C20.0562 13.636 18.7983 15.0881 17.2216 16.1219C15.6449 17.1558 13.8116 17.7305 11.9269 17.7821C10.3067 17.7796 8.71552 17.3522 7.31195 16.5428L3 20.855M16.543 7.31195L20.855 3M16.543 7.31195L13.688 10.1668M10.1671 13.6878C10.397 13.9247 10.6716 14.1137 10.9752 14.2435C11.2787 14.3732 11.605 14.4412 11.9351 14.4437C12.2652 14.4461 12.5926 14.3828 12.898 14.2576C13.2035 14.1324 13.481 13.9481 13.7144 13.7147C13.9478 13.4812 14.1324 13.2037 14.2576 12.8983C14.3828 12.5928 14.4461 12.2655 14.4437 11.9354C14.4412 11.6053 14.3732 11.279 14.2435 10.9754C14.1137 10.6718 13.9249 10.3967 13.688 10.1668M13.688 10.1668L7.31201 16.544"
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
