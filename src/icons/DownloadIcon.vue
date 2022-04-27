<template>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      v-bind="$attrs"
    >
      <path
        d="M5.65325 13.3083L4.46296 14.6411C4.16465 14.9764 4.0002 15.4054 4 15.8492V18.493C4 18.8926 4.16283 19.276 4.45271 19.5586C4.74259 19.8412 5.13578 20 5.54574 20H19.4543C19.8642 20 20.2574 19.8412 20.5473 19.5586C20.8372 19.276 21 18.8926 21 18.493V15.8492C21.0001 15.4053 20.8358 14.9763 20.5373 14.6411L19.347 13.3083M7.98002 9.32613L12.498 13.731L17.0172 9.32613M12.4982 3V13.5083"
        :stroke="smartColor || stroke"
        :stroke-width="strokeWidth"
        :stroke-linecap="strokeLineCap"
        :stroke-linejoin="strokeLineJoin"
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
