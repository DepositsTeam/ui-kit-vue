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
        d="M6.52808 9.71173H4.48804C4.09339 9.71173 3.71485 9.86871 3.43579 10.1478C3.15674 10.4268 3 10.8054 3 11.2V13.2938C3 13.6884 3.15674 14.067 3.43579 14.346C3.71485 14.6251 4.09339 14.7816 4.48804 14.7816H6.52808C6.90774 14.7817 7.273 14.9272 7.54907 15.1878L10.271 17.7576C10.3421 17.8222 10.4304 17.8649 10.5251 17.8807C10.6199 17.8964 10.7172 17.8846 10.8054 17.8465C10.8936 17.8084 10.969 17.7461 11.0225 17.6663C11.076 17.5865 11.1054 17.4928 11.1072 17.3968V7.09698C11.1054 7.00095 11.076 6.90723 11.0225 6.82745C10.969 6.74768 10.8936 6.68487 10.8054 6.64679C10.7172 6.60871 10.6199 6.59686 10.5251 6.61261C10.4304 6.62836 10.3421 6.67109 10.271 6.73566L7.54907 9.30597C7.27311 9.56678 6.90778 9.71181 6.52808 9.71173V9.71173Z"
        :stroke="smartColor || stroke"
        :stroke-width="strokeWidth"
        :stroke-linecap="strokeLineCap"
        :stroke-linejoin="strokeLineJoin"
      />
      <path
        d="M15.0859 14.6928C15.5295 14.383 15.8918 13.9705 16.1418 13.4907C16.3919 13.0109 16.5225 12.4781 16.5225 11.937C16.5225 11.3959 16.3919 10.8626 16.1418 10.3828C15.8918 9.90298 15.5295 9.49052 15.0859 9.18063"
        :stroke="smartColor || stroke"
        :stroke-width="strokeWidth"
        :stroke-linecap="strokeLineCap"
        :stroke-linejoin="strokeLineJoin"
      />
      <path
        d="M18.07 6C18.9429 6.72356 19.6454 7.63063 20.1276 8.65674C20.6099 9.68284 20.8598 10.8028 20.8598 11.9365C20.8598 13.0703 20.6099 14.1897 20.1276 15.2158C19.6454 16.2419 18.9429 17.1495 18.07 17.873"
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
