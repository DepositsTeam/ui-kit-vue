<template>
  <line-chart
    :data="data"
    :width="width"
    :height="height"
    :colors="colors"
    :xtitle="xtitle"
    :ytitle="ytitle"
    :curve="curve"
    :legend="legend"
    :label="label"
    :legendDirection="legendDirection"
    :prefix="prefix"
    :suffix="suffix"
    :thousands="thousands"
    :decimal="decimal"
    :precision="precision"
    :loading="loading"
    :empty="empty"
    :dataset="{ borderWidth: borderWidth }"
    :download="download"
    :downloadFilename="downloadFilename"
  ></line-chart>
</template>

<script setup>
defineProps({
  data: {
    type: Array,
    required: true,
  },
  width: {
    type: String,
    default: "100%",
  },
  height: {
    type: String,
    default: "266px",
  },
  colors: {
    type: Array,
    default: () => ["#2843B4", "#7C8CD0"],
  },
  xtitle: {
    type: String,
  },
  ytitle: {
    type: String,
  },
  curve: {
    type: Boolean,
    default: true,
  },
  legend: {
    type: Boolean,
  },
  label: {
    type: String,
  },
  legendDirection: {
    type: String,
  },
  prefix: {
    type: String,
  },
  suffix: {
    type: String,
  },
  thousands: {
    type: String,
  },
  decimal: {
    type: String,
  },
  precision: {
    type: Number,
  },
  loading: {
    type: String,
    default: "Loading...",
  },
  empty: {
    type: String,
    default: "No data",
  },
  borderWidth: {
    type: Number,
    default: 5,
  },
  download: {
    type: Boolean,
    default: false,
  },
  downloadFilename: {
    type: String,
    default: "Deposits",
  },
});
</script>

<style scoped></style>
