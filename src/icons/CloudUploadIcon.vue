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
        d="M14.7236 16.8848H17.6326C18.4274 16.8852 19.1943 16.5915 19.7859 16.0606C20.3775 15.5297 20.752 14.7991 20.8374 14.0089C20.9228 13.2186 20.7129 12.4243 20.2483 11.7794C19.7837 11.1344 19.0972 10.6841 18.3206 10.5147C18.556 9.10784 18.2449 7.66411 17.4509 6.47907C16.6569 5.29404 15.44 4.45757 14.0493 4.14021C12.6586 3.82285 11.1994 4.04877 9.96997 4.77204C8.7405 5.49532 7.83375 6.6611 7.43555 8.03083H7.42749C6.25324 8.03083 5.12719 8.49739 4.29688 9.32771C3.46656 10.158 3 11.2838 3 12.4581C3 13.6323 3.46656 14.7586 4.29688 15.5889C5.12719 16.4193 6.25324 16.8858 7.42749 16.8858H11.6587M14.5966 12.6337L11.9276 9.96474M11.9276 9.96474L9.25867 12.6337M11.9276 9.96474L11.9276 19.1477"
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
