<template>
  <d-box class="card-main-width tool__card">
    <d-text class="tool__card__header">{{ selectedLists.title }}</d-text>
    <d-box class="drag__tool__section">
      <draggable
        class="list-group"
        :list="selectedLists.items"
        group="people"
        @change="log"
        item-key="id"
      >
        <template #item="{ element, index }">
          <d-box class="drag-item">
            <d-quick-tool
              :title="element.title"
              :icon="element.icon"
              :is-added="element.isAdded"
              @addElement="addElement(element, index)"
              @removeElement="removeElement(element, index)"
            />
          </d-box>
        </template>
      </draggable>
    </d-box>

    <d-text class="tool__card__header" margin-top="30px">{{
      moreLists.title
    }}</d-text>
    <d-box class="drag__tool__section">
      <draggable
        class="list-group"
        :list="moreLists.items"
        group="people"
        @change="log"
        item-key="id"
      >
        <template #item="{ element, index }">
          <d-box class="drag-item">
            <d-quick-tool
              :title="element.title"
              :icon="element.icon"
              :is-added="element.isAdded"
              @addElement="addElement(element, index)"
              @removeElement="removeElement(element, index)"
            />
          </d-box>
        </template>
      </draggable>
    </d-box>
  </d-box>
</template>

<script setup>
import { DBox, DText, DQuickTool } from "@/main";
import draggable from "vuedraggable";

const emit = defineEmits(["changed"]);

const props = defineProps({
  selectedLists: {
    type: Object,
  },
  moreLists: {
    type: Object,
  },
});

const checkIfExistInList1 = (index) => {
  let status = false;

  props.selectedLists.items.forEach((list) => {
    if (list.id === index) {
      status = true;
    }
  });

  return status;
};
const checkIfExistInList2 = (index) => {
  let status = false;

  props.moreLists.items.forEach((list) => {
    if (list.id === index) {
      status = true;
    }
  });

  return status;
};

const addElement = (element, index) => {
  element["isAdded"] = !element["isAdded"];
  props.selectedLists.items.push(element);
  props.moreLists.items.splice(index, 1);
};

const removeElement = (element, index) => {
  element["isAdded"] = !element["isAdded"];
  props.moreLists.items.push(element);
  props.selectedLists.items.splice(index, 1);
};

const log = (evt) => {
  console.log(evt);
  if (evt.added) {
    // console.log(evt.added.newIndex);

    // console.log(evt.added.element)
    if (checkIfExistInList1(evt.added.element.id)) {
      props.selectedLists.items[evt.added.newIndex]["isAdded"] =
        !props.selectedLists.items[evt.added.newIndex]["isAdded"];
    }

    if (checkIfExistInList2(evt.added.element.id)) {
      props.moreLists.items[evt.added.newIndex]["isAdded"] =
        !props.moreLists.items[evt.added.newIndex]["isAdded"];
    }
  }

  // if (evt.removed) {
  //   console.log(evt.removed.oldIndex);
  // }
};
</script>

<style scoped lang="scss">
.tool__card {
  background: #ffffff;
  box-shadow: 0 1px 5px rgba(63, 63, 68, 0.098);
  border-radius: 6px;
  padding: 24px 32px;

  .tool__card__header {
    font-family: var(--primary-font);
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    text-transform: uppercase;
    color: #3f3e4d;
  }

  .drag__tool__section {
    margin-top: 20px;
  }
}

.drag-item {
  //background: blue;
  margin: 5px 0;
}
</style>
