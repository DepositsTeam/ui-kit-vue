<template>
  <d-box class="overview">
    <d-box class="container">
      <d-box
        padding="3rem"
        margin-top="3rem"
        background-color="#F2FAFC"
        border="2px solid #0DB9E9"
        border-radius="6px"
        position="relative"
        class="overview__background"
      >
        <d-box display="flex" gap="30px">
          <d-box flex="0 0 auto" class="width-100-small" width="33.33333333%">
            <slot name="leftSection">
              <slot name="title">
                <d-heading
                  my0
                  scale="h5"
                  margin-bottom="0.5rem"
                  class="text-gray-700"
                  >{{ title }}
                </d-heading>
              </slot>
              <slot name="description">
                <d-text
                  my0
                  font-face="circularSTD"
                  class="text-gray-600"
                  scale="p-18"
                  >{{ description }}
                </d-text>
              </slot>
              <slot name="image">
                <d-box margin-top="1.5rem">
                  <img :src="image" :alt="title" />
                </d-box>
              </slot>
            </slot>
          </d-box>
          <d-box>
            <slot name="lists">
              <d-box
                height="100%"
                display="flex"
                flex-direction="column"
                gap="20px"
              >
                <d-box
                  text-decoration="none"
                  display="flex"
                  align-items="center"
                  font-weight="400"
                  class="text-gray-500"
                  v-for="(item, index) in lists"
                  @click="emit('stepClicked', item)"
                  cursor="pointer"
                  :key="`item__${index}`"
                >
                  <slot name="badgeSection" v-bind="item">
                    <d-box
                      class="getting-started-badge"
                      margin-right=".5rem"
                      size="large"
                      text-transform="uppercase"
                      :class="{ done: item.done, active: item.active }"
                    >
                      <span v-if="item.done"> Done </span>
                      <span v-else> Step {{ index + 1 }} </span>
                    </d-box>
                  </slot>
                  <d-text
                    my0
                    :class="{
                      'text-gray-700 font-weight-500': item.active,
                      'text-gray-700': !item.active && !item.done,
                      'text-gray-500': item.done,
                    }"
                    padding-right=".5rem"
                  >
                    {{ item.text }}
                  </d-text>
                </d-box>
              </d-box>
            </slot>
          </d-box>
        </d-box>
        <d-box position="absolute" top="20px" right="20px">
          <d-box display="flex">
            <slot name="checkboxSection">
              <d-checkbox @change="emit('doNotShowAgainCheckbox')">
                <d-text scale="subhead">Don't show me this again</d-text>
              </d-checkbox>
            </slot>
            <slot name="closeSection">
              <d-box margin-left="1.5rem">
                <d-box @click="emit('closed')" cursor="pointer">
                  <close-icon />
                </d-box>
              </d-box>
            </slot>
          </d-box>
        </d-box>
      </d-box>
    </d-box>
  </d-box>
</template>

<script setup>
import { DBox, DText, DHeading, DCheckbox, CloseIcon } from "@/main";

const emit = defineEmits(["closed", "doNotShowAgainCheckbox", "stepClicked"]);
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  lists: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.getting-started-badge {
  font-size: 8px;
  font-weight: 700;
  min-height: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  padding: 4px 10px;
  border: 1px solid #0db9e9;
  min-width: 50px;
  color: #212934;

  .overview__background {
    background-color: #0db9e9;
  }

  &.done {
    border-color: #8895a7;
    color: #ffffff;
    background: #8895a7;
  }

  &.active {
    background: #0db9e9;
    color: #ffffff;
  }
}
</style>
