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
    <draggable :list="state" item-key="dataSelector">
      <div v-for="element in state" :key="element.dataSelector">
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
// TODO: Fix bug with the customize view modal not resetting to the filtered columns state when reopened
import { VueDraggableNext as Draggable } from "vue-draggable-next";
import { DModal, DCard, MoveIcon, DBox, DButton } from "../../main";
import { shallowRef, onMounted, unref, watch, inject, ref, toRaw } from "vue";

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
  console.log("Hydrated columns is", columns);

  updateRenderedColumns(columns);
  emit("close-modal");
};
</script>

<style scoped></style>
