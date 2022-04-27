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
        d="M8.99103 4H15.7371C16.1318 4 16.5103 4.15649 16.7894 4.43555C17.0684 4.7146 17.2252 5.09315 17.2252 5.48779V9.9458C17.2349 11.4514 16.6587 12.9017 15.6185 13.9902C14.5783 15.0788 13.1557 15.7202 11.6512 15.7788C10.1467 15.7202 8.72384 15.0788 7.68365 13.9902C6.64346 12.9017 6.0675 11.4514 6.07721 9.9458V4.84619M15.747 19.9058V19.9542C15.747 20.1929 15.6521 20.4216 15.4833 20.5904C15.3146 20.7592 15.0858 20.8541 14.8471 20.8541H8.44696C8.32877 20.8541 8.21167 20.8304 8.10248 20.7852C7.99329 20.74 7.8943 20.674 7.81073 20.5904C7.72716 20.5068 7.66065 20.4076 7.61542 20.2984C7.57019 20.1892 7.54706 20.0724 7.54706 19.9542V19.9058M11.65 15.779V20.852M20.3 6.46509V11.1941M3 11.1941V6.46509"
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
