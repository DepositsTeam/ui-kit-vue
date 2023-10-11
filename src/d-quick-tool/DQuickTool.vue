<template>
  <d-box class="all__icons">
    <d-box class="left__icons">
      <DraggableMenuFilledIcon color="#E2E8F0" height="18px" width="18px" />
      <component :is="props.icon" color="#5F6B7A" height="20px" width="20px" />
      <d-text class="title__text">{{ title }}</d-text>
    </d-box>
    <d-box class="right__icons">
      <MinusFilledIcon
        color="#94A3B8"
        height="18px"
        width="18px"
        v-if="isAdded"
        @click="$emit('removeElement')"
        cursor="pointer"
      />
      <AddIcon
        color="#94A3B8"
        height="18px"
        width="18px"
        v-else
        @click="$emit('addElement')"
        cursor="pointer"
      />
    </d-box>
  </d-box>
</template>

<script setup>
import {
  DBox,
  DText,
  AddIcon,
  MinusFilledIcon,
  DraggableMenuFilledIcon,
} from "@/main";

defineEmits(["removeElement", "addElement"]);

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: [Object],
    required: true,
  },
  isAdded: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped lang="scss">
.all__icons {
  cursor: move;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 12px;
  gap: 10px;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;

  .right__icons,
  .left__icons {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .left__icons {
    .title__text {
      font-family: var(--primary-font);
      font-style: normal;
      font-weight: 450;
      font-size: 14px;
      line-height: 18px;
      color: #525964;
    }
  }
}
</style>
