<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.0084 4.58333V13.05C13.0084 13.3833 12.9084 13.7083 12.7251 13.9833L10.4501 17.3667C10.0918 17.9083 9.2001 18.2917 8.44176 18.0083C7.62509 17.7333 7.08343 16.8167 7.25843 16L7.69176 13.275C7.72509 13.025 7.65843 12.8 7.51676 12.625C7.3751 12.4667 7.16676 12.3667 6.94176 12.3667H3.51676C2.85843 12.3667 2.29176 12.1 1.95843 11.6333C1.64176 11.1833 1.58343 10.6 1.79176 10.0083L3.84176 3.76666C4.10009 2.73333 5.2251 1.89166 6.34176 1.89166H9.59176C10.1501 1.89166 10.9334 2.08333 11.2918 2.44166L12.3584 3.26666C12.7668 3.58333 13.0084 4.06666 13.0084 4.58333Z"
      :fill="smartColor || fill"
    />
    <path
      d="M15.6582 14.675H16.5166C17.8082 14.675 18.3332 14.175 18.3332 12.9416V4.56665C18.3332 3.33331 17.8082 2.83331 16.5166 2.83331H15.6582C14.3666 2.83331 13.8416 3.33331 13.8416 4.56665V12.95C13.8416 14.175 14.3666 14.675 15.6582 14.675Z"
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
