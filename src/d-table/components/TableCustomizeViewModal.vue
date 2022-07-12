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
    <draggable :list="state.columns" item-key="dataSelector">
      <div v-for="element in state.columns" :key="element.dataSelector">
        <d-box cursor="pointer" margin-bottom="16px">
          <d-card
            cursor="move"
            v-model="element.visible"
            :desc="element.display"
            checkbox
            :icon="MoveIcon"
          />
        </d-box>
      </div>
    </draggable>
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
import { VueDraggableNext as Draggable } from "vue-draggable-next";
import { DModal, DCard, MoveIcon, DBox, DButton } from "../../main";
import { reactive, onMounted, unref, watch, inject } from "vue";

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

const state = reactive({
  columns: [],
});

watch(
  () => props.columns,
  () => {
    state.columns = [];
    props.columns.forEach((column) => {
      state.columns.push(unref(column));
    });
  }
);

onMounted(() => {
  props.columns.forEach((column) => {
    state.columns.push(unref(column));
  });
});

const closeModal = () => {
  emit("close-modal");
};

const hydrateColumns = () => {
  const columns = state.columns;
  updateRenderedColumns(columns);
  emit("close-modal");
};
</script>

<style scoped></style>
