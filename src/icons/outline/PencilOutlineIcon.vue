<template>
  <d-box
    is="svg"
    :width="width"
    :height="height"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_13547_54410)">
      <path
        d="M13.0012 2.50791L11.8413 1.34791C11.3113 0.817937 10.449 0.817962 9.91906 1.34791C9.42009 1.84693 1.7987 9.4689 1.28938 9.97825C1.23513 10.0325 1.19878 10.1046 1.18583 10.1751L0.605882 13.3071C0.583407 13.4285 0.622107 13.5533 0.709432 13.6406C0.796857 13.728 0.921607 13.7666 1.04288 13.7442L4.1746 13.1641C4.24698 13.1506 4.31813 13.1139 4.37148 13.0606L13.0012 4.43023C13.5324 3.89903 13.5324 3.03918 13.0012 2.50791ZM1.44263 12.9073L1.79346 11.0127L3.3371 12.5565L1.44263 12.9073ZM4.10633 12.265L2.08485 10.2434L9.46509 2.86263L11.4866 4.88425L4.10633 12.265ZM12.4708 3.89991L12.0169 4.35393L9.99539 2.33231L10.4494 1.87828C10.6869 1.64074 11.0734 1.64071 11.3109 1.87828L12.4708 3.03828C12.709 3.27641 12.709 3.66176 12.4708 3.89991Z"
        :fill="smartColor || fill"
      />
    </g>
    <defs>
      <clipPath id="clip0_13547_54410">
        <rect
          width="12.8"
          height="12.8"
          fill="white"
          transform="translate(0.599609 0.950195)"
        />
      </clipPath>
    </defs>
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
