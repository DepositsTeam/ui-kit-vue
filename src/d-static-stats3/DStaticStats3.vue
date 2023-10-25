<template>
  <d-card flex-grow="1">
    <d-box display="flex" justify-content="space-between" gap="80px">
      <d-box>
        <d-box>
          <d-text
            my0
            max-width="350px"
            font-face="heroNew"
            class="text-gray-500"
            scale="subhead"
            >{{ stat1.text }}
          </d-text>
          <d-heading
            my0
            font-face="circularSTD"
            scale="h5"
            margin-bottom="0.5rem"
            class="text-gray-700"
            >{{ stat1.value }}
          </d-heading>
        </d-box>
        <d-box margin-top="2rem">
          <d-text
            my0
            max-width="350px"
            font-face="heroNew"
            class="text-gray-500"
            scale="subhead"
            >{{ stat2.text }}
          </d-text>
          <d-heading
            my0
            font-face="circularSTD"
            scale="h5"
            margin-bottom="0.5rem"
            class="text-gray-700"
            >{{ stat2.value }}
          </d-heading>
        </d-box>
      </d-box>
      <d-box
        background-color="#F5F8FA"
        border-radius="10px"
        height="50px"
        width="50px"
        overflow="hidden"
        display="flex"
        justify-content="center"
        align-items="center"
      >
        <d-box>
          <slot name="icon">
            <d-box
              class="icon"
              is="img"
              :src="icon"
              alt="Stats Image"
              v-if="typeof icon === 'string'"
            />
            <component :is="icon" v-else />
          </slot>
        </d-box>
      </d-box>
    </d-box>
  </d-card>
</template>

<script setup>
import { DBox, DText, DCard, DHeading } from "@/main";

defineProps({
  stat1: {
    type: Object,
    required: true,
  },
  stat2: {
    type: Object,
    required: true,
  },
  icon: {
    type: [String, Object],
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.icon {
  width: 50px;
  height: 50px;
}
</style>
