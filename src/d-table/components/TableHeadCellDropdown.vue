<template>
  <d-box class="ui-table__heading-cell__dropdown__wrapper">
    <d-box ref="trigger" class="ui-table__heading-cell__dropdown">
      <d-box
        @click="triggerSort('asc')"
        class="ui-table__heading-cell__dropdown-item"
      >
        <d-box>
          <sort-ascending-icon />
          <d-text my0 scale="subhead" font-face="circularSTD"
            >Sort ascending</d-text
          >
        </d-box>
      </d-box>
      <d-box
        @click="triggerSort('desc')"
        class="ui-table__heading-cell__dropdown-item"
      >
        <d-box>
          <sort-descending-icon />
          <d-text my0 scale="subhead" font-face="circularSTD"
            >Sort descending</d-text
          >
        </d-box>
      </d-box>
      <d-box
        class="ui-table__heading-cell__dropdown-item ui-table-filter-trigger"
        @click="toggleShowFunnelDropdown"
        v-if="column.filterable !== false"
      >
        <d-box>
          <funnel-icon />
          <d-text my0 scale="subhead" font-face="circularSTD">Filter</d-text>
        </d-box>
        <chevron-filled-right-icon />
      </d-box>
    </d-box>
    <table-filter-dropdown
      @close="closeFilterDropdown"
      ref="target"
      v-if="showFunnelDropdown && column.filterable !== false"
    />
  </d-box>
</template>

<script setup>
import { DBox, DText } from "../../main";
import {
  SortAscendingIcon,
  SortDescendingIcon,
  FunnelIcon,
  ChevronFilledRightIcon,
} from "../../icons";
import { ref, onBeforeUnmount, onMounted, nextTick, inject } from "vue";
import TableFilterDropdown from "./TableFilterDropdown.vue";
import { computePosition, flip, offset, shift } from "@floating-ui/dom";

const trigger = ref(null);
const target = ref(null);
const thCell = inject("thCell");

const updateSortConfiguration = inject("updateSortConfiguration");
const column = inject("column");
const toggleSelection = inject("toggleSelection");

const showFunnelDropdown = ref(false);

const closeFilterDropdown = () => (showFunnelDropdown.value = false);

const triggerSort = (direction) => {
  const sortConfiguration = { direction, column };
  updateSortConfiguration(sortConfiguration);
  toggleSelection();
};

const toggleShowFunnelDropdown = async (e) => {
  if (
    e.target.classList.contains("ui-table-filter-trigger") ||
    e.target.closest(".ui-table-filter-trigger")
  ) {
    showFunnelDropdown.value = !showFunnelDropdown.value;

    await nextTick();

    if (showFunnelDropdown.value) {
      computePosition(trigger.value.$el, target.value.$el, {
        placement: "right-end",
        middleware: [offset(6), flip(), shift()],
      }).then(({ x, y }) => {
        Object.assign(target.value.$el.style, {
          left: `${x}px`,
          top: `${y}px`,
        });
      });
    }
  }
};

const closeFilterDropdownOnOutsideClick = (e) => {
  const elem = e.target;
  if (thCell.value && elem.closest(`#${thCell.value.$el.id}`) === null) {
    toggleSelection();
  }
};

onMounted(() => {
  window.addEventListener("click", closeFilterDropdownOnOutsideClick);
});

onBeforeUnmount(() => {
  window.removeEventListener("click", closeFilterDropdownOnOutsideClick);
  showFunnelDropdown.value = false;
});
</script>

<style lang="scss" scoped>
.ui-table__heading-cell__dropdown {
  background: #ffffff;
  border: 1px solid #e1e7ec;
  box-shadow: 0 4px 8px rgba(3, 47, 60, 0.14);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  min-width: 240px;
  position: absolute;
  top: 101%;
  left: 0;
  .ui-table__heading-cell__dropdown-item {
    display: flex;
    justify-content: space-between;
    padding: 8px 16px;
    color: #5f6b7a;
    &:hover {
      background: #f5f8fa;
    }

    & > div {
      display: flex;
      .ui-text {
        margin-left: 8px;
      }
    }
  }
}
</style>
