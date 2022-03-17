<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      :fill-rule="fillRule"
      :clip-rule="clipRule"
      d="M7.89743 2.01923C7.69852 2.01923 7.50775 2.09824 7.3671 2.2389L2.2389 7.3671C2.09824 7.50775 2.01923 7.69852 2.01923 7.89743V16.1026C2.01923 16.3015 2.09824 16.4922 2.2389 16.6329L7.3671 21.7611C7.50775 21.9017 7.69852 21.9808 7.89743 21.9808H16.1026C16.3015 21.9808 16.4922 21.9017 16.6329 21.7611L21.7611 16.6329C21.9017 16.4922 21.9808 16.3015 21.9808 16.1026V7.89743C21.9808 7.69852 21.9017 7.50775 21.7611 7.3671L16.6329 2.2389C16.4922 2.09824 16.3015 2.01923 16.1026 2.01923H7.89743ZM12.75 7.89743C12.75 7.48321 12.4142 7.14743 12 7.14743C11.5858 7.14743 11.25 7.48321 11.25 7.89743V13.0256C11.25 13.4398 11.5858 13.7756 12 13.7756C12.4142 13.7756 12.75 13.4398 12.75 13.0256V7.89743ZM13.0256 16.1026C13.0256 16.669 12.5664 17.1282 12 17.1282C11.4336 17.1282 10.9744 16.669 10.9744 16.1026C10.9744 15.5361 11.4336 15.0769 12 15.0769C12.5664 15.0769 13.0256 15.5361 13.0256 16.1026Z"
      :fill="smartColor || fill"
    />
  </svg>
</template>

<script setup>
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
