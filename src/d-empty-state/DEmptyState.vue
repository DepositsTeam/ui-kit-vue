<template>
  <d-card>
    <d-box
      border="1px dashed #E1E7EC"
      border-radius="10px"
      display="flex"
      flex-direction="column"
      justify-content="center"
      align-items="center"
      gap="30px"
      padding-y="3rem"
    >
      <d-box
        border-radius="50%"
        padding="2rem"
        background-color="#F5F8FA"
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
      <d-box class="program_head_row-btn-cont">
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
        </slot>
      </d-box>
    </d-box>
  </d-card>
</template>

<script setup>
import { DBox, DText, DCard, DButton, DHeading } from "@/main";

defineProps({
  illustration: {
    type: [String, Object],
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  buttonText: {
    type: String,
  },
  buttonSize: {
    type: String,
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
