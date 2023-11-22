<template>
  <d-modal
    :show-actions="false"
    heading="Customize View"
    :show="show"
    grey-content
    modal-width="600px"
    rounded-borders
    @close-modal="closeModal"
  >
    <d-vertical-movable v-model="state">
      <template #drag-item="element">
        <d-box cursor="pointer" margin-bottom="16px">
          <d-card
            cursor="move"
            :model-value="element.visible"
            @update:model-value="(value) => updateCheckbox(value, element)"
            :desc="element.display"
            checkbox
            :icon="MoveIcon"
          />
        </d-box>
      </template>
    </d-vertical-movable>
    <d-box display="flex" justify-content="flex-end">
      <d-button
        @click="hydrateColumns"
        size="medium"
        color-scheme="primary"
        margin-right="16px"
        >Save</d-button
      >
      <d-button @click="closeModal" size="medium">Cancel</d-button>
    </d-box>
  </d-modal>
</template>

<script setup>
import { DModal, DCard, MoveIcon, DBox, DButton } from "../../main";
import { onMounted, unref, watch, inject, ref, toRaw } from "vue";
import DVerticalMovable from "@/d-vertical-movable/DVerticalMovable.vue";

const emit = defineEmits(["close-modal"]);
const updateRenderedColumns = inject("updateRenderedColumns");

const props = defineProps({
  columns: Array,
  columnHashMap: Object,
  show: {
    type: Boolean,
    default: true,
  },
});

const state = ref([]);

const updateCheckbox = (value, element) => {
  const index = state.value.findIndex(
    (item) => item.dataSelector === element.dataSelector
  );
  state.value[index].visible = value;
};

const hydrateState = () => {
  state.value = [];
  [...unref(props.columns)].forEach((column) => {
    state.value.push(toRaw(unref(column)));
  });
};

watch(
  () => props.columns,
  () => {
    hydrateState();
  }
);

watch(
  () => props.show,
  () => {
    hydrateState();
  }
);

onMounted(() => {
  [...unref(props.columns)].forEach((column) => {
    state.value.push(toRaw(unref(column)));
  });
});

const closeModal = () => {
  emit("close-modal");
};

const hydrateColumns = () => {
  const columns = [...unref(state.value)].map((column) => {
    return toRaw(unref(column));
  });

  updateRenderedColumns(columns);
  emit("close-modal");
};
</script>

<style scoped></style>
