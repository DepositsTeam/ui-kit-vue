<template>
  <d-box ref="thCell">
    <d-box
      :class="{ selected: isSelected }"
      class="ui-table__heading-cell__content"
      @click="toggleSelection"
      ref="trigger"
    >
      <d-text
        class="font-weight-600 ui-table__heading-cell-text"
        font-face="heroNew"
        my0
        >{{
          column.uppercase ? column.display.toUpperCase() : column.display
        }}</d-text
      >
      <d-box
        v-if="column.sortable !== false"
        class="ui-table__heading-cell__icon"
      >
        <chevron-filled-down-icon
          class="ui-table__heading-cell__icon"
          height="20px"
          width="20px"
        />
      </d-box>
    </d-box>
    <table-head-cell-dropdown
      v-if="isSelected && column.sortable !== false"
      ref="target"
    />
  </d-box>
</template>

<script setup>
import { DBox, DText } from "../../main";
import { ChevronFilledDownIcon } from "../../main";
import { ref, nextTick, provide } from "vue";
import TableHeadCellDropdown from "./TableHeadCellDropdown.vue";
import { computePosition, flip, shift, offset } from "@floating-ui/dom";

const props = defineProps({
  column: {
    type: Object,
  },
});

provide("column", props.column);

const trigger = ref(null);
const target = ref(null);
const thCell = ref(null);

provide("thCell", thCell);

const isSelected = ref(false);

const toggleSelection = async (e) => {
  if (props.column.sortable !== false) {
    let shouldProceed = false;
    if (e === undefined) {
      shouldProceed = true;
    } else {
      [
        "ui-table__heading-cell__content",
        "ui-table__heading-cell-text",
        "ui-table__heading-cell__icon",
      ].map((target) => {
        if (e.target.classList.contains(target)) {
          shouldProceed = true;
        }
      });
    }

    if (shouldProceed) {
      isSelected.value = !isSelected.value;
      await nextTick();
      if (isSelected.value) {
        computePosition(trigger.value.$el, target.value.$el, {
          placement: "bottom-start",
          middleware: [offset(6), flip(), shift()],
        }).then(({ x, y }) => {
          Object.assign(target.value.$el.style, {
            left: `${x}px`,
            top: `${y}px`,
          });
        });
      }
    }
  }
};

provide("toggleSelection", toggleSelection);
</script>

<style lang="scss" scoped>
.ui-table__heading-cell,
.ui-table__body-cell {
  min-width: var(--column_min_width);
  flex: 1;
  padding: 12px 16px;
  &.is-checkbox {
    width: var(--column_width);
    max-width: var(--column_max_width);
  }
  &.width {
    width: var(--column_width);
  }
  &.maxWidth {
    max-width: var(--column_max_width);
  }
  .ui-table__heading-cell-text {
    color: #3f3e4d;
    font-size: 12px;
  }
}
.ui-table__heading-cell__content {
  display: flex;
  align-items: center;
  .ui-table__heading-cell__icon {
    color: #8895a7;
  }
}
</style>
