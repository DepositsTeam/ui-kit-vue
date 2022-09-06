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
      d="M18.9838 5H5.01624C3.9027 5 3 5.908 3 7.02808V15.9719C3 17.092 3.9027 18 5.01624 18H18.9838C20.0973 18 21 17.092 21 15.9719V7.02808C21 5.908 20.0973 5 18.9838 5Z"
      :stroke="smartColor || stroke"
      :stroke-width="strokeWidth"
      :stroke-linecap="strokeLineCap"
      :stroke-linejoin="strokeLineJoin"
    />
    <path
      d="M21.0001 13.6448V16.9911C21.0001 17.2579 20.8947 17.5138 20.7072 17.7024C20.5196 17.8911 20.2652 17.997 20 17.997H16.6702C16.671 16.8425 17.1275 15.7355 17.9394 14.9193C18.7514 14.1032 19.8522 13.6448 21.0001 13.6448V13.6448Z"
      :stroke="smartColor || stroke"
      :stroke-width="strokeWidth"
      :stroke-linecap="strokeLineCap"
      :stroke-linejoin="strokeLineJoin"
    />
    <path
      d="M16.6702 5H19.997C20.2622 5 20.5166 5.10598 20.7041 5.29463C20.8917 5.48328 20.997 5.73914 20.997 6.00593V9.35226C19.8497 9.35146 18.7496 8.89266 17.9384 8.07662C17.1271 7.26059 16.671 6.15404 16.6702 5V5Z"
      :stroke="smartColor || stroke"
      :stroke-width="strokeWidth"
      :stroke-linecap="strokeLineCap"
      :stroke-linejoin="strokeLineJoin"
    />
    <path
      d="M7.3298 18L4.003 18C3.73777 18 3.4834 17.894 3.29585 17.7054C3.10831 17.5167 3.00294 17.2609 3.00294 16.9941L3.00294 13.6477C4.15025 13.6485 5.25034 14.1073 6.06161 14.9234C6.87288 15.7394 7.329 16.846 7.3298 18V18Z"
      :stroke="smartColor || stroke"
      :stroke-width="strokeWidth"
      :stroke-linecap="strokeLineCap"
      :stroke-linejoin="strokeLineJoin"
    />
    <path
      d="M2.99992 9.35535V6.00901C2.99992 5.74222 3.10528 5.48636 3.29283 5.29771C3.48038 5.10907 3.73474 5.00308 3.99998 5.00308H7.3298C7.329 6.15766 6.87246 7.26466 6.06054 8.08078C5.24862 8.8969 4.14775 9.35535 2.99992 9.35535V9.35535Z"
      :stroke="smartColor || stroke"
      :stroke-width="strokeWidth"
      :stroke-linecap="strokeLineCap"
      :stroke-linejoin="strokeLineJoin"
    />
    <path
      d="M11.7251 11.5009H11.6042C11.1792 11.5007 10.7716 11.3309 10.4711 11.0286C10.1705 10.7263 10.0015 10.3163 10.0012 9.88877V9.88877C10.0015 9.46133 10.1705 9.05136 10.4711 8.74921C10.7716 8.44706 11.1793 8.27734 11.6042 8.27734H13.318"
      :stroke="smartColor || stroke"
      :stroke-width="strokeWidth"
      :stroke-linecap="strokeLineCap"
      :stroke-linejoin="strokeLineJoin"
    />
    <path
      d="M11.7248 11.5011H12.2449C12.4554 11.5011 12.6638 11.5426 12.8582 11.6236C13.0527 11.7047 13.2294 11.8235 13.3783 11.9732C13.5271 12.1229 13.6453 12.3007 13.7258 12.4963C13.8064 12.6919 13.8479 12.9015 13.8479 13.1133V13.1133C13.8479 13.5409 13.6789 13.9509 13.3783 14.2533C13.0777 14.5557 12.67 14.7257 12.2449 14.7257H10.5311"
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
