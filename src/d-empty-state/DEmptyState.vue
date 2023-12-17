<template>
  <d-box
    border-radius="10px"
    display="flex"
    flex-direction="column"
    justify-content="center"
    align-items="center"
    gap="30px"
    padding-y="3rem"
  >
    <d-box
      display="inline-block"
    >
      <slot name="illustration">
        <d-box is="img" :src="illustration" :alt="title" />
      </slot>
    </d-box>
    <d-box text-align="center">
      <slot name="title">
        <d-heading
          v-if="title"
          scale="h5"
          margin-bottom="0.5rem"
          margin-top="0.5rem"
          class="text-gray-700"
          font-face="heroNew"
          >{{ title }}
        </d-heading>
      </slot>
      <slot name="description">
        <d-text font-face="circularSTD" class="text-gray-600" center is="p-18"
          >{{ description }}
        </d-text>
      </slot>
    </d-box>
    <d-auto-layout class="program_head_row-btn-cont">
      <slot name="button">
        <d-button
          v-if="buttonText"
          :size="buttonSize"
          :smart-color="buttonSmartColor"
          :color-scheme="buttonColorScheme"
          @click="emit('clicked')"
          responsive
          >{{ buttonText }}
        </d-button>
        <slot name="secondary-button"></slot>
      </slot>
    </d-auto-layout>
  </d-box>
</template>

<script setup>
import { DBox, DButton, DHeading, DText, DAutoLayout } from "@/main";

defineProps({
  illustration: {
    type: [String, Object],
  },
  title: {
    type: String,
    default: "No payments yet",
  },
  description: {
    type: String,
    default:
      "You haven’t made any transfer yet. Your transfers will show up here once you have any.",
  },
  buttonText: {
    type: String,
  },
  buttonSize: {
    type: String,
    default: "large",
  },
  buttonColorScheme: {
    type: String,
  },
  buttonSmartColor: {
    type: String,
  },
});

const emit = defineEmits(["clicked"]);
</script>

<style lang="scss" scoped></style>
