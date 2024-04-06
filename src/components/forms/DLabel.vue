<template>
  <d-auto-layout is="label" :item-spacing="itemSpacing || gap" :for="htmlFor">
    <slot name="beforeLabel"></slot>
    <d-text
      margin-top="0px"
      class="ui-text-field__label"
      :class="labelClass"
      scale="subhead"
      :font-face="labelFontFace"
    >
      <slot>
        {{ label }}
      </slot>
    </d-text>
    <slot name="afterLabel"></slot>
  </d-auto-layout>
</template>

<script setup>
import DText from "@/d-text/DText.vue";
import DAutoLayout from "@/d-auto-layout/DAutoLayout.vue";

defineProps({
  labelClass: {
    type: String,
  },
  labelFontFace: {
    type: String,
  },
  label: {
    type: String,
  },
  itemSpacing: {
    type: String,
  },
  gap: {
    type: String,
  },
  htmlFor: {
    type: String,
  },
});
</script>

<style scoped></style>
