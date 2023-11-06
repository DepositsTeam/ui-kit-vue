<template>
  <d-box
    padding=".5rem .5rem 0 .5rem"
    cursor="pointer"
    @click="emit('clicked')"
  >
    <d-box
      :background-color="topBgColor"
      padding="1.5rem 2.5rem 0 2.5rem"
      border-radius="10px 10px 0 0"
    >
      <d-box
        padding="1.5rem 2rem"
        text-align="center"
        :background-color="imageBgColor"
        border-radius="10px 10px 0 0"
      >
        <slot name="image">
          <d-box
            is="img"
            :src="image"
            :alt="title"
            margin-bottom="-18px"
            width="100%"
          />
        </slot>
      </d-box>
    </d-box>
    <d-box
      :background-color="bottomBgColor"
      padding="2rem 2.5rem"
      border-radius="0 0 10px 10px"
    >
      <slot name="title">
        <d-heading
          scale="h5"
          my0
          margin-bottom="0.5rem"
          class="text-gray-700 font-weight-700"
          >{{ title }}
          <d-box
            v-if="subTitle"
            is="span"
            font-size="15px"
            class="text-gray-600 font-weight-400"
          >
            ( {{ subTitle }} )
          </d-box>
        </d-heading>
      </slot>
      <slot name="description">
        <d-text
          my0
          max-width="350px"
          font-face="circularSTD"
          class="text-gray-600"
          scale="subhead"
          >{{ description }}
        </d-text>
      </slot>
    </d-box>
  </d-box>
</template>

<script setup>
import { DBox, DText, DHeading } from "@/main";

const emit = defineEmits(["clicked"]);
defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  topBgColor: {
    type: String,
    default: "#E2EDF7",
  },
  bottomBgColor: {
    type: String,
    default: "#ffffff",
  },
  imageBgColor: {
    type: String,
    default: "#ffffff",
  },
});
</script>

<style lang="scss" scoped></style>
