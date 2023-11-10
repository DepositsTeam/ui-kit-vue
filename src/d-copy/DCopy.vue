<template>
  <d-box @click="copyText">
    <d-tooltip :tooltip="tooltip" trigger="click">
      <slot>
        <copy-filled-icon
          :smart-color="smartColor"
          :width="size"
          :height="size"
        />
      </slot>
    </d-tooltip>
  </d-box>
</template>

<script setup>
import DBox from "@/d-box/DBox.vue";
import CopyFilledIcon from "@/icons/filled/CopyFilledIcon.vue";
import DTooltip from "@/d-tooltip/DTooltip.vue";
import copyToClipboard from "copy-to-clipboard";

const props = defineProps({
  text: {
    type: String,
  },
  tooltip: {
    type: String,
    default: "Text copied",
  },
  smartColor: {
    type: String,
    default: "#8C97A7",
  },
  size: {
    type: String,
    default: "24px",
  },
});

const copyText = () => {
  copyToClipboard(props.text);
};
</script>

<style scoped></style>
