<template>
  <d-box
    is="svg"
    :width="width"
    :height="height"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.0874 10.2305V10.9805C16.0874 11.183 15.9299 11.348 15.7199 11.3555H14.6249C14.2274 11.3555 13.8674 11.063 13.8374 10.673C13.8149 10.4405 13.9049 10.223 14.0549 10.073C14.1899 9.93047 14.3774 9.85547 14.5799 9.85547H15.7124C15.9299 9.86297 16.0874 10.028 16.0874 10.2305Z"
      :fill="smartColor || fill"
    />
    <path
      d="M13.4924 9.51797C13.1174 9.88547 12.9374 10.433 13.0874 11.003C13.2824 11.7005 13.9649 12.143 14.6849 12.143H15.3374C15.7499 12.143 16.0874 12.4805 16.0874 12.893V13.0355C16.0874 14.588 14.8199 15.8555 13.2674 15.8555H4.6574C3.1049 15.8555 1.8374 14.588 1.8374 13.0355V7.98797C1.8374 7.06547 2.2799 6.24797 2.9624 5.73797C3.4349 5.37797 4.0199 5.16797 4.6574 5.16797H13.2674C14.8199 5.16797 16.0874 6.43547 16.0874 7.98797V8.31797C16.0874 8.73047 15.7499 9.06797 15.3374 9.06797H14.5724C14.1524 9.06797 13.7699 9.23297 13.4924 9.51797Z"
      :fill="smartColor || fill"
    />
    <path
      d="M12.1498 3.615C12.3523 3.8175 12.1798 4.1325 11.8948 4.1325L6.1348 4.125C5.8048 4.125 5.6323 3.72 5.8723 3.4875L7.0873 2.265C8.1148 1.245 9.7798 1.245 10.8073 2.265L12.1198 3.5925C12.1273 3.6 12.1423 3.6075 12.1498 3.615Z"
      :fill="smartColor || fill"
    />
  </d-box>
</template>

<script setup>
import { DBox } from "../../main";
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
