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
        d="M9.162 6.33105H20.855M9.162 6.33105L14.692 6.331V5.765C14.692 5.03168 14.4007 4.32839 13.8822 3.80985C13.3636 3.29131 12.6603 3 11.927 3C11.1937 3 10.4904 3.29131 9.97185 3.80985C9.45331 4.32839 9.162 5.03168 9.162 5.765L9.162 6.33105ZM3 6.33105H6.82M19.218 6.33099V18.872C19.218 19.3982 19.009 19.9028 18.637 20.2748C18.2649 20.6469 17.7601 20.8559 17.2339 20.8559H6.67701C6.15082 20.8559 5.64625 20.6469 5.27417 20.2748C4.9021 19.9028 4.69312 19.3982 4.69312 18.872V6.33099M15.6 10.0191V17.1681M8.312 10.0191V17.1681M11.965 10.0191V17.1681"
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
