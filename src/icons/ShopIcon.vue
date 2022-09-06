<template>
  <d-box
    is="svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path
      d="M19.2131 11.7781V18.373C19.2131 18.8992 19.0042 19.4041 18.6321 19.7761C18.26 20.1482 17.7554 20.3572 17.2292 20.3572H6.63916C6.11297 20.3572 5.6084 20.1482 5.23633 19.7761C4.86426 19.4041 4.65527 18.8992 4.65527 18.373V14.1931"
      :stroke="smartColor || stroke"
      :stroke-width="strokeWidth"
      :stroke-linecap="strokeLineCap"
      :stroke-linejoin="strokeLineJoin"
    />
    <path
      d="M5.72049 5C5.41129 4.99994 5.10968 5.09618 4.8577 5.27539C4.60573 5.45461 4.4159 5.70789 4.31449 6L3.13163 9.41797C3.01738 9.69213 2.97644 9.99138 3.01298 10.2861C3.04951 10.5809 3.16216 10.8612 3.33988 11.0991C3.5176 11.3371 3.75415 11.5246 4.0264 11.6433C4.29866 11.762 4.5973 11.8078 4.89261 11.7761C5.41002 11.7633 5.91652 11.6248 6.36844 11.3726C6.82037 11.1203 7.20413 10.7618 7.48661 10.3281C7.63221 10.7646 7.91567 11.1419 8.29447 11.4031C8.67327 11.6643 9.12673 11.7952 9.58646 11.7761C9.8051 11.3402 10.1407 10.9737 10.5557 10.7175C10.9707 10.4614 11.4489 10.3257 11.9366 10.3257C12.4242 10.3257 12.9024 10.4614 13.3174 10.7175C13.7324 10.9737 14.068 11.3402 14.2867 11.7761C14.7464 11.7952 15.1998 11.6643 15.5786 11.4031C15.9575 11.1419 16.2409 10.7646 16.3865 10.3281C16.669 10.7618 17.0528 11.1203 17.5047 11.3726C17.9566 11.6248 18.4631 11.7633 18.9805 11.7761C19.2758 11.8078 19.5742 11.762 19.8465 11.6433C20.1187 11.5246 20.3555 11.3371 20.5332 11.0991C20.711 10.8612 20.8236 10.5809 20.8601 10.2861C20.8967 9.99138 20.8557 9.69213 20.7415 9.41797L19.5596 6C19.4582 5.70789 19.2681 5.45461 19.0161 5.27539C18.7642 5.09618 18.4628 4.99994 18.1536 5H5.72049Z"
      :stroke="smartColor || stroke"
      :stroke-width="strokeWidth"
      :stroke-linecap="strokeLineCap"
      :stroke-linejoin="strokeLineJoin"
    />
    <path
      d="M14.0823 20.356H9.83936V16.5081C9.83936 15.9728 10.052 15.4595 10.4304 15.0811C10.8089 14.7026 11.322 14.49 11.8572 14.49H12.0632C12.5984 14.49 13.1118 14.7026 13.4902 15.0811C13.8687 15.4595 14.0813 15.9728 14.0813 16.5081L14.0823 20.356Z"
      :stroke="smartColor || stroke"
      :stroke-width="strokeWidth"
      :stroke-linecap="strokeLineCap"
      :stroke-linejoin="strokeLineJoin"
    />
  </d-box>
</template>

<script setup>
import { DBox } from "../main";
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
