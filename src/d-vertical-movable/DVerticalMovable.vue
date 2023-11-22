<template>
  <d-box class="card-main-width tool__card">
    <d-text class="tool__card__header" v-if="title">{{ title }}</d-text>
    <d-box class="drag__tool__section">
      <draggable
        class="list-group"
        v-model="localList"
        :group="name"
        item-key="uuuid"
      >
        <d-box v-for="element in localList" :key="element.uuuid">
          <d-box class="drag-item">
            <slot name="drag-item" v-bind="element">
              <d-quick-tool
                :title="element.title"
                :icon="element.icon"
                :is-added="element.isAdded"
              />
            </slot>
          </d-box>
        </d-box>
      </draggable>
    </d-box>
  </d-box>
</template>

<script setup>
import { DBox, DText, DQuickTool } from "@/main";
import { VueDraggableNext as Draggable } from "vue-draggable-next";
import uniqueRandomString from "@/utils/uniqueRandomString";
import { computed, unref } from "vue";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  name: {
    type: String,
    default: () => uniqueRandomString(),
  },
  modelValue: {
    type: Array,
  },
  title: {
    type: String,
  },
});

const localList = computed({
  get() {
    return [
      ...unref(props.modelValue).map((item) => {
        return {
          ...item,
          uuuid: uniqueRandomString(),
        };
      }),
    ];
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<style scoped lang="scss">
.drag__tool__section {
  margin-top: 20px;
}

.drag-item {
  //background: blue;
  margin: 5px 0;
}
</style>
