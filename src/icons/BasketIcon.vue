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
        d="M7.55688 7.26703C7.55675 6.70673 7.66702 6.15185 7.88135 5.63416C8.09568 5.11646 8.40976 4.64606 8.80591 4.24982C9.20206 3.85358 9.67255 3.53928 10.1902 3.32483C10.7078 3.11038 11.2625 3 11.8228 3C12.9544 3 14.0399 3.44954 14.8401 4.24976C15.6403 5.04997 16.0898 6.13535 16.0898 7.26703V8.17902M16.0899 8.17383H19.014C19.2358 8.17397 19.4548 8.22372 19.6549 8.3194C19.855 8.41507 20.0314 8.55426 20.1707 8.72681C20.3101 8.89936 20.4091 9.10089 20.4605 9.31665C20.512 9.53241 20.5146 9.75693 20.4681 9.97382L18.398 19.5048C18.3159 19.8848 18.1062 20.2252 17.8036 20.4692C17.5009 20.7132 17.1237 20.8462 16.735 20.8459H6.76694C6.37803 20.8464 6.00066 20.7136 5.69785 20.4695C5.39503 20.2255 5.18525 19.885 5.10312 19.5048L3.03305 9.97382C2.98654 9.75693 2.98916 9.53241 3.04062 9.31665C3.09208 9.10089 3.19103 8.89936 3.33042 8.72681C3.4698 8.55426 3.64592 8.41507 3.84604 8.3194C4.04616 8.22372 4.2651 8.17397 4.48691 8.17383H12.9649M7.14087 15.5669H19.2189"
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
