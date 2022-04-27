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
        d="M15.0996 8.10577H9.90036C7.19397 8.10577 5 10.3624 5 13.1461V15.9596C5 18.7433 7.19397 20.9999 9.90036 20.9999H15.0996C17.806 20.9999 20 18.7433 20 15.9596V13.1461C20 10.3624 17.806 8.10577 15.0996 8.10577Z"
        :stroke="smartColor || stroke"
        :stroke-width="strokeWidth"
        :stroke-linecap="strokeLineCap"
        :stroke-linejoin="strokeLineJoin"
      />
      <path
        d="M8.76715 8.1048V6.83882C8.76715 5.82073 9.16049 4.84413 9.8604 4.12423C10.5603 3.40433 11.5095 3 12.4994 3C13.4892 3 14.4384 3.40433 15.1383 4.12423C15.8382 4.84413 16.2313 5.82073 16.2313 6.83882V8.1048"
        :stroke="smartColor || stroke"
        :stroke-width="strokeWidth"
        :stroke-linecap="strokeLineCap"
        :stroke-linejoin="strokeLineJoin"
      />
      <path
        d="M12.4994 12.9849V15.8781"
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
