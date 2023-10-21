<template>
  <d-card flex-grow="1">
    <d-box display="flex" align-items="center" padding="1rem" gap="30px">
      <d-box border-radius="20px">
        <slot name="illustration">
          <img :src="illustration" :alt="title" />
        </slot>
      </d-box>
      <d-box>
        <slot name="title">
          <d-heading
            margin="0"
            scale="h5"
            margin-bottom="0.5rem"
            class="text-gray-700"
            >{{ title }}
          </d-heading>
        </slot>
        <slot name="description">
          <d-text
            max-width="350px"
            font-face="circularSTD"
            class="text-gray-600"
            scale="subhead"
            >{{ description }}
          </d-text>
        </slot>
        <d-box margin-top="1.5rem">
          <slot name="button">
            <d-button
              :size="buttonSize"
              :color-scheme="buttonColorScheme"
              :smart-color="buttonSmartColor"
              @click="emit('clicked')"
              :text="buttonText"
              :right-icon="ArrowRightIcon"
            />
          </slot>
        </d-box>
      </d-box>
    </d-box>
  </d-card>
</template>

<script setup>
import { DBox, DText, DCard, DHeading, ArrowRightIcon, DButton } from "@/main";

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

<style lang="scss" scoped>

</style>
