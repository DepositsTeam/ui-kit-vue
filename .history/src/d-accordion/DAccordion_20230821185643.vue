<template>
  <d-box class="ui-accordion">
    <d-box
      @click="toggleContent"
      class="ui-accordion__header"
      :class="{ active: visible }"
    >
      <d-box class="ui-accordion__header__left-content">
        <d-box class="ui-accordion__header__left-icon">
          <slot name="leftIconActive" v-if="visible">
            <d-box class="text-grey-500">
              <chevron-filled-up-icon height="32px" width="32px" />
            </d-box>
          </slot>
          <slot name="leftIconInactive" v-else>
            <d-box class="text-grey-500">
              <chevron-filled-down-icon height="32px" width="32px" />
            </d-box>
          </slot>
        </d-box>
        <d-box class="ui-accordion__header__title">
          <d-text
            margin-y="0"
            v-if="title"
            font-face="circularSTD"
            scale="subhead"
            class="text-grey-600"
            >{{ title }}</d-text
          >
          <slot v-else name="title"></slot>
        </d-box>
      </d-box>

      <d-box class="ui-accordion__header__right-icon">
        <slot name="rightIcon"></slot>
      </d-box>
    </d-box>
    <d-box v-if="visible" class="ui-accordion__content">
      <slot></slot>
    </d-box>
  </d-box>
</template>

<script setup>
import {
  DBox,
  ChevronFilledDownIcon,
  ChevronFilledUpIcon,
  DText,
} from "../main";
import { ref } from "vue";

defineProps({
  title: String,
});

const visible = ref(false);

const toggleContent = () => (visible.value = !visible.value);
</script>

<style scoped lang="scss">
.ui-accordion {
  .ui-accordion__header {
    padding: 8px 16px;
    display: flex;
    align-items: center;
    background: #f5f8fa;
    border: 1px solid #e1e7ec;
    border-radius: 6px;
    cursor: pointer;
    justify-content: space-between;
    .ui-accordion__header__left-content {
      display: flex;
      align-items: center;
    }
    &.active {
      border-radius: 6px 6px 0 0;
    }
  }
  .ui-accordion__content {
    background: #fff;
    border-radius: 0 0 6px 6px;
    padding: 32px 48px;
    border: 1px solid #e1e7ec;
    border-top-color: transparent;
  }
}
</style>
