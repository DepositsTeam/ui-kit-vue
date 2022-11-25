<template>
  <d-box
    is="svg"
    :width="width"
    :height="height"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.9046 3.08891L9.77961 1.54391C9.35211 1.38641 8.65461 1.38641 8.22711 1.54391L4.10211 3.08891C3.30711 3.38891 2.66211 4.31891 2.66211 5.16641V11.2414C2.66211 11.8489 3.05961 12.6514 3.54711 13.0114L7.67211 16.0939C8.39961 16.6414 9.59211 16.6414 10.3196 16.0939L14.4446 13.0114C14.9321 12.6439 15.3296 11.8489 15.3296 11.2414V5.16641C15.3371 4.31891 14.6921 3.38891 13.9046 3.08891ZM11.6096 7.28891L8.38461 10.5139C8.27211 10.6264 8.12961 10.6789 7.98711 10.6789C7.84461 10.6789 7.70211 10.6264 7.58961 10.5139L6.38961 9.29891C6.17211 9.08141 6.17211 8.72141 6.38961 8.50391C6.60711 8.28641 6.96711 8.28641 7.18461 8.50391L7.99461 9.31391L10.8221 6.48641C11.0396 6.26891 11.3996 6.26891 11.6171 6.48641C11.8346 6.70391 11.8346 7.07141 11.6096 7.28891Z"
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
