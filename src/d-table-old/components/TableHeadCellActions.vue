<template>
  <div ref="reference" class="ui-table__head-cell__actions__wrapper">
    <d-box
      :class="{ show }"
      ref="actions"
      class="ui-table__head-cell__actions"
      v-bind="$attrs"
    >
      <d-box @click="setSort" class="ui-table__head-cell__action">
        <d-box display="flex">
          <sort-ascending-icon class="ui-table__head-cell__icon" />
          <d-text scale="subhead" font-face="heroNew" my0
            >Sort ascending</d-text
          >
        </d-box>
      </d-box>
      <d-box @click="setSort(false)" class="ui-table__head-cell__action">
        <d-box display="flex">
          <sort-descending-icon class="ui-table__head-cell__icon" />
          <d-text scale="subhead" font-face="heroNew" my0
            >Sort descending</d-text
          >
        </d-box>
      </d-box>
      <d-box @click="showOptions" class="ui-table__head-cell__action">
        <d-box display="flex">
          <funnel-icon class="ui-table__head-cell__icon" />
          <d-text scale="subhead" font-face="heroNew" my0>Filter</d-text>
        </d-box>
        <ChevronFilledRightIcon class="ui-table__head-cell__icon" />
      </d-box>
    </d-box>
    <table-filter-options
      @close-options="showOptions"
      :show="shouldShowOptions"
      ref="popper"
    />
  </div>
</template>

<script>
import DBox from "../../d-box/DBox.vue";
import { ref, watch, inject } from "vue";
import TableFilterOptions from "./TableFilterOptions.vue";
import {
  SortAscendingIcon,
  SortDescendingIcon,
  FunnelIcon,
  ChevronFilledRightIcon,
} from "../../icons";
import DText from "../../d-text/DText.vue";
import { computePosition, flip, offset, shift } from "@floating-ui/dom";
export default {
  name: "TableHeadCellActions",
  emits: ["toggle-popover"],
  components: {
    TableFilterOptions,
    DText,
    FunnelIcon,
    DBox,
    SortAscendingIcon,
    ChevronFilledRightIcon,
    SortDescendingIcon,
  },
  props: {
    show: {
      type: Boolean,
    },
  },
  setup(props, { emit }) {
    const popper = ref(null);
    const reference = ref(null);
    const shouldShowOptions = ref(false);
    const updateSortingBy = inject("updateSortingBy");
    const column = inject("column");

    const showOptions = () => {
      shouldShowOptions.value = !shouldShowOptions.value;
      if (!shouldShowOptions.value) {
        emit("toggle-popover");
      }

      computePosition(reference.value, popper.value.$el, {
        placement: "right-start",
        middleware: [offset(6), flip(), shift({ padding: 5 })],
      }).then(({ x, y }) => {
        Object.assign(popper.value.$el.style, {
          left: `${x}px`,
          top: `${y}px`,
        });
      });
    };

    const setSort = (asc = true) => {
      updateSortingBy({
        column,
        order: asc ? "ASC" : "DESC",
      });
      emit("toggle-popover");
    };

    watch(
      () => props.show,
      (val) => {
        if (!val) {
          shouldShowOptions.value = false;
        }
      }
    );

    return { popper, reference, setSort, showOptions, shouldShowOptions };
  },
};
</script>

<style lang="scss">
.ui-table__head-cell__actions__wrapper {
  position: absolute;
}
.ui-table__head-cell__actions {
  flex-direction: column;
  //width: 100%;
  //position: absolute;
  //top: 100%;
  background: white;
  border-radius: 6px;
  box-shadow: 0 4px 8px rgba(3, 47, 60, 0.14);
  min-width: 220px;
  display: none;
  z-index: 44;

  &.show {
    display: flex;
  }

  .ui-table__head-cell__action {
    display: flex;
    align-items: center;
    padding: 10px 16px;
    color: #5f6b7a;
    justify-content: space-between;
    border-left: 3px solid transparent;

    &:first-of-type {
      border-radius: 6px 6px 0 0;
    }

    &:last-of-type {
      border-radius: 0 0 6px 6px;
    }

    .ui-table__head-cell__icon {
      padding-right: 8px;
      color: #8895a7;
    }

    &:hover {
      border-left: 3px solid #0db9e9;
      background: #f2fafc;
      color: #0db9e9;
      .ui-table__head-cell__icon {
        color: #0db9e9;
      }
    }
  }
}
</style>
