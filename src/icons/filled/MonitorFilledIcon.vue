<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.17 1.5H4.8075C2.985 1.5 1.5 2.985 1.5 4.8075V9.6825V9.8325C1.5 11.6625 2.985 13.14 4.8075 13.14H7.6875C8.1 13.14 8.4375 13.4775 8.4375 13.89V14.6175C8.4375 15.03 8.1 15.3675 7.6875 15.3675H5.8725C5.565 15.3675 5.31 15.6225 5.31 15.93C5.31 16.2375 5.5575 16.5 5.8725 16.5H12.135C12.4425 16.5 12.6975 16.245 12.6975 15.9375C12.6975 15.63 12.4425 15.375 12.135 15.375H10.32C9.9075 15.375 9.57 15.0375 9.57 14.625V13.8975C9.57 13.485 9.9075 13.1475 10.32 13.1475H13.1775C15.0075 13.1475 16.485 11.6625 16.485 9.84V9.69V4.815C16.4775 2.985 14.9925 1.5 13.17 1.5Z"
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
