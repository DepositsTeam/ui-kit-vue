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
      d="M16.283 16.8938H17.6321C18.4262 16.893 19.1919 16.5994 19.7825 16.0686C20.3731 15.5378 20.747 14.8073 20.8323 14.0178C20.9176 13.2283 20.7083 12.4354 20.2446 11.7908C19.781 11.1461 19.0957 10.6955 18.3201 10.5251C18.5586 9.11715 18.2494 7.67086 17.4558 6.48363C16.6622 5.2964 15.4442 4.45823 14.052 4.14037C12.6598 3.8225 11.1987 4.049 9.96851 4.77415C8.73827 5.49931 7.83218 6.66777 7.43604 8.03978H7.427C6.25289 8.03978 5.12685 8.50643 4.29663 9.33665C3.46641 10.1669 3 11.2929 3 12.467C3 13.6411 3.46641 14.7672 4.29663 15.5974C5.12685 16.4276 6.25289 16.8938 7.427 16.8938M11.926 12.5146L10.0391 16.4619H13.813L11.926 20.4079"
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
