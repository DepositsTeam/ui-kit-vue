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
      d="M12.1048 2.2193L5.33234 4.4693C0.779844 5.9918 0.779844 8.4743 5.33234 9.9893L7.34234 10.6568L8.00984 12.6668C9.52484 17.2193 12.0148 17.2193 13.5298 12.6668L15.7873 5.9018C16.7923 2.8643 15.1423 1.2068 12.1048 2.2193ZM12.3448 6.2543L9.49484 9.1193C9.38234 9.2318 9.23984 9.2843 9.09734 9.2843C8.95484 9.2843 8.81234 9.2318 8.69984 9.1193C8.48234 8.9018 8.48234 8.5418 8.69984 8.3243L11.5498 5.4593C11.7673 5.2418 12.1273 5.2418 12.3448 5.4593C12.5623 5.6768 12.5623 6.0368 12.3448 6.2543Z"
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
