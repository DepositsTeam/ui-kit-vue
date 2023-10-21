<template>
  <d-box
    padding=".5rem .5rem 0 .5rem"
    cursor="pointer"
    @click="emit('clicked')"
  >
    <d-box
      background-color="#E2EDF7"
      padding="1.5rem 2.5rem 0 2.5rem"
      border-radius="10px 10px 0 0"
    >
      <d-box
        padding="1.5rem 2rem"
        text-align="center"
        background-color="#ffffff"
        border-radius="10px 10px 0 0"
      >
        <slot name="image">
          <d-box
            is="img"
            :src="image"
            :alt="title"
            style="margin-bottom: -18px; width: 100%"
          />
        </slot>
      </d-box>
    </d-box>
    <d-box
      background-color="#ffffff"
      padding="2rem 2.5rem"
      border-radius="0 0 10px 10px"
    >
      <slot name="title">
        <d-heading
          scale="h5"
          margin-bottom="0.5rem"
          class="text-gray-700 font-weight-700"
          >{{ title }}
          <d-box
            v-if="subTitle"
            is="span"
            style="font-size: 15px"
            class="text-gray-600 font-weight-400"
          >
            ( {{ subTitle }} )
          </d-box>
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
  subTitle: {
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
});
</script>

<style scoped>
p {
  margin: 0;
}

h6 {
  margin: 0;
}
</style>
