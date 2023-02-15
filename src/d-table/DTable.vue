<template>
  <d-box
    class="ui-table__container"
    :style="{
      '--smart-color': smartColor,
      '--smart-text-color': getTextColor(smartColor),
    }"
  >
    <d-box class="ui-table__header">
      <d-auto-layout
        v-if="$slots['table-header-left'] || search"
        class="ui-table__header__search-wrapper"
        :class="{
          [searchAlignment]: buttonActionsEnabled ? false : searchAlignment,
        }"
      >
        <slot name="table-search">
          <d-textfield
            :left-icon="SearchIcon"
            :placeholder="searchPlaceholder"
            v-model="searchValue"
            size="large"
          />
        </slot>
        <slot name="table-header-left"></slot>
      </d-auto-layout>
      <d-box
        class="ui-table__header-btns"
        :class="{
          [buttonActionsAlignment]: search ? false : buttonActionsAlignment,
        }"
      >
        <slot name="table-header-right"></slot>
        <d-box
          v-if="enableCustomizeView"
          @click="toggleCustomizeViewModal(true)"
        >
          <slot name="customize-view-button">
            <d-button size="medium"> Customize view </d-button>
          </slot>
        </d-box>

        <d-box v-if="enableCsvExport" @click="exportCsv">
          <slot name="export-csv-button">
            <d-button size="medium" :left-icon="ExternalLinkIcon"
              >Export</d-button
            >
          </slot>
        </d-box>
      </d-box>
    </d-box>
    <d-box ref="trigger" class="ui-table__active-filters">
      <d-box
        :class="{ active: showActiveFiltersDropdown }"
        class="ui-table__active-filter-group activeFiltersTrigger activeFiltersBox"
        @click="toggleActiveFilters"
        v-if="filter.column"
        @close="toggleActiveFilters(false)"
      >
        <funnel-icon class="activeFiltersTrigger activeFiltersBox" />
        <d-text
          class="activeFiltersTrigger activeFiltersBox"
          margin-x="8px"
          my0
          font-face="circularSTD"
          scale="p-16"
          >{{ filter.column.display }}
          <d-box
            light-color="#64748B"
            class="activeFiltersTrigger"
            dark-color="#64748B"
            is="span"
            >{{ filter.selectedFilter.toLowerCase() }}</d-box
          >
          {{ filter.selectedFilterValue }}
          <d-box is="span" class="activeFiltersTrigger" v-if="filter.join">
            {{ filter.join }}
            <d-box
              light-color="#64748B"
              class="activeFiltersTrigger"
              dark-color="#64748B"
              is="span"
              >{{ filter.selectedFilter2.toLowerCase() }}</d-box
            >
            {{ filter.selectedFilterValue2 }}
          </d-box>
        </d-text>
        <close-icon
          @click="
            updateFilterValue({
              column: null,
              selectedFilter: null,
              selectedFilterValue: null,
              join: null,
              selectedFilter2: null,
              selectedFilterValue2: null,
            })
          "
          class="activeFiltersBox"
        />
      </d-box>
      <d-box
        class="ui-table__active-filter-group activeFiltersBox"
        v-if="sortConfiguration"
      >
        <sort2-icon class="activeFiltersBox" />
        <d-text
          margin-x="8px"
          my0
          font-face="circularSTD"
          scale="p-16"
          class="activeFiltersBox"
          >{{ sortConfiguration.column.display }}
          <d-box color="#8895A7" is="span">is</d-box>
          {{
            sortConfiguration.direction === "asc" ? "Ascending" : "Descending"
          }}</d-text
        >
        <close-icon
          class="activeFiltersBox"
          @click="updateSortConfiguration(null)"
        />
      </d-box>

      <table-active-filters-dropdown
        ref="target"
        v-if="showActiveFiltersDropdown"
        @close="closeActiveFiltersDropdown"
      />
    </d-box>
    <d-box class="ui-table__wrapper">
      <d-box is="table" class="ui-table">
        <d-box is="thead" class="ui-table__heading">
          <d-box is="tr" class="ui-table__heading-row">
            <d-box
              is="td"
              v-if="showCheckboxes"
              class="ui-table__heading-cell is-checkbox"
              :style="{
                ...getColumnWidth(null, true),
              }"
            >
              <d-checkbox v-model="selectedItems" :values="computedItemsID" />
            </d-box>
            <d-box
              v-for="(column, index) in filteredRenderedColumns"
              is="td"
              :key="`column__${index}`"
              class="ui-table__heading-cell"
              :class="{
                width: column.width,
                minWidth: column.minWidth,
                maxWidth: column.maxWidth,
                smartColor,
              }"
              :style="{
                ...getColumnWidth(column),
              }"
            >
              <table-head-cell :column="column" />
            </d-box>
          </d-box>
        </d-box>
        <d-box is="tbody" class="ui-table__body">
          <d-box
            is="tr"
            class="ui-table__body-row"
            v-for="(datum, index) in paginatedData"
            :key="`table__column_${index}`"
            :class="{
              checked: selectedItems.includes(datum[checkboxDataSelector]),
              enableHover: enableRowHoverCursor,
            }"
            @click="emitRowClickedEvent(datum)"
          >
            <d-box
              is="td"
              v-if="showCheckboxes"
              class="ui-table__body-cell is-checkbox"
              :style="{
                ...getColumnWidth(null, true),
              }"
            >
              <d-checkbox
                v-model="selectedItems"
                :value="datum[checkboxDataSelector]"
              />
            </d-box>
            <d-box
              is="td"
              v-for="(column, index) in filteredRenderedColumns"
              :key="`table_column__${index}`"
              class="ui-table__body-cell"
              :style="{
                ...getColumnWidth(column),
              }"
            >
              <slot
                v-if="$slots[`item.${column.dataSelector}`]"
                :name="`item.${column.dataSelector}`"
                v-bind="datum"
              ></slot>
              <d-text
                font-face="circularSTD"
                v-else
                my0
                class="ui-table__body-cell-text"
              >
                {{ datum[column.dataSelector] }}
              </d-text>
            </d-box>
          </d-box>
        </d-box>
      </d-box>
    </d-box>
    <d-box
      class="ui-table__pagination"
      :class="{ right: paginateRight }"
      margin-top="1rem"
      v-if="paginate"
    >
      <d-pagination
        :total-pages="totalPages"
        :current-page="currentPage"
        :current-page-siblings="currentPageSiblings"
        @page-changed="handlePageChange"
        :smart-color="smartColor"
      />
    </d-box>
    <table-customize-view-modal
      :columns="renderedColumns"
      :column-hash-map="columnHashmap"
      :show="showCustomizeViewModal"
      @close-modal="toggleCustomizeViewModal(false)"
    />
  </d-box>
</template>

<script setup>
import {
  DBox,
  DTextfield,
  DButton,
  DCheckbox,
  DText,
  DPagination,
} from "../main";
import {
  SearchIcon,
  ExternalLinkIcon,
  CloseIcon,
  FunnelIcon,
  Sort2Icon,
} from "../main";
import TableHeadCell from "./components/TableHeadCell.vue";
import TableActiveFiltersDropdown from "./components/TableActiveFiltersDropdown.vue";
import { getColumnWidth } from "./utils/getColumnWidth";
import { tableProps } from "./utils/tableProps";
import {
  ref,
  unref,
  nextTick,
  computed,
  provide,
  shallowRef,
  onMounted,
} from "vue";
import { computePosition, flip, shift, offset } from "@floating-ui/dom";
import { sort } from "./utils/sort";
import { filter as filterItems } from "./utils/filter";
import { search as searchItems } from "./utils/filter";
import uniqueRandomString from "../utils/uniqueRandomString";
import TableCustomizeViewModal from "./components/TableCustomizeViewModal.vue";
import Column from "./utils/Column";
import { useCsvExport } from "./composables/useCsvExport";
import { getTextColor } from "../utils/colorManager";
import DAutoLayout from "../d-auto-layout/DAutoLayout.vue";

const props = defineProps({ ...tableProps });
const emit = defineEmits([
  "page-updated",
  "row-clicked",
  "search",
  "filter",
  "sort",
  "export",
]);

const { exportCsv } = useCsvExport(props.data, props.generatedCsvName);

const columnHashmap = computed(() => {
  const hashMap = {};
  props.columns.forEach((column) => {
    hashMap[column.dataSelector] = column;
  });
  return hashMap;
});

const emitRowClickedEvent = (datum) => {
  emit("row-clicked", datum);
};

const showActiveFiltersDropdown = ref(false);
const target = ref(null);
const trigger = ref(null);

const showCustomizeViewModal = ref(false);
const closeActiveFiltersDropdown = () => {
  showActiveFiltersDropdown.value = false;
};
const toggleCustomizeViewModal = (value) =>
  (showCustomizeViewModal.value = value);

const scopedCurrentPage = ref(props.currentPage);
const searchValue = ref("");
const sortConfiguration = ref(null);
const updateSortConfiguration = (value) => (sortConfiguration.value = value);
const filter = ref({
  column: null,
  selectedFilter: null,
  selectedFilterValue: null,
  join: null,
  selectedFilter2: null,
  selectedFilterValue2: null,
});
const updateFilterValue = (value) => (filter.value = value);

const selectedItems = shallowRef([]);

const toggleActiveFilters = async (e) => {
  if (e !== false && e && e.target.classList.contains("activeFiltersTrigger")) {
    showActiveFiltersDropdown.value = !showActiveFiltersDropdown.value;
    await nextTick();
    if (showActiveFiltersDropdown.value) {
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
};

const renderedColumns = shallowRef([]);

const updateRenderedColumns = (value) => (renderedColumns.value = value);

const filteredRenderedColumns = computed(() =>
  renderedColumns.value.filter((column) => column.visible)
);

onMounted(() => {
  updateRenderedColumns(props.columns.map((column) => new Column(column)));
});

provide("sortConfiguration", sortConfiguration);
provide("updateSortConfiguration", updateSortConfiguration);
provide("filter", filter);
provide("updateFilterValue", updateFilterValue);
provide("updateRenderedColumns", updateRenderedColumns);

const handlePageChange = (currentPage) => {
  if (!props.asyncPagination) {
    scopedCurrentPage.value = currentPage;
  }
  emit("page-updated", currentPage);
};

const dataFactory = computed(() => {
  let filteredData = [...props.data];

  if (searchValue.value) {
    filteredData = searchItems(
      searchValue.value,
      filteredData,
      columnHashmap.value,
      props.caseSensitiveSearch
    );
  }

  if (filter.value && filter.value.column) {
    filteredData = filterItems(filter.value, filteredData);
  }

  if (sortConfiguration.value) {
    sort(sortConfiguration.value, filteredData);
  }

  return filteredData.map((item) => ({
    ...item,
    uuuid: uniqueRandomString(30, 8),
  }));
});

const paginatedData = computed(() => {
  let filteredData = [...unref(dataFactory.value)];
  if (props.paginate && !props.asyncPagination) {
    let start = (scopedCurrentPage.value - 1) * props.itemsPerPage;
    filteredData = filteredData.splice(start, props.itemsPerPage);
  }
  return filteredData;
});

const computedItemsID = computed(() => {
  return dataFactory.value.map((item) => item[props.checkboxDataSelector]);
});

const totalPages = computed(() => {
  if (searchValue.value || filter.value.column) {
    return Math.ceil(dataFactory.value.length / props.itemsPerPage);
  }
  return Math.ceil(props.data.length / props.itemsPerPage);
});

const buttonActionsEnabled = computed(
  () => props.enableCustomizeView && props.enableCsvExport
);
</script>

<style lang="scss">
.ui-table__container {
  .activeFiltersBox.dark_mode {
    color: #cbd5e1;
  }
  .ui-table__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    .ui-table__header__search-wrapper {
      display: flex;
      &.left,
      &.right {
        flex: 1;
      }
      &.right {
        justify-content: flex-end;
      }
    }
    .ui-table__header-btns {
      display: flex;
      align-items: center;
      &.left,
      &.right {
        flex: 1;
      }
      &.right {
        justify-content: flex-end;
      }
      & > *:not(:last-child) {
        margin-right: 8px;
      }
      @media only screen and (max-width: 380px) {
        flex-direction: column;
        align-items: flex-start;
        & > *:not(:last-child) {
          margin-right: 0;
          margin-bottom: 8px;
        }
      }
    }
    @media only screen and (max-width: 720px) {
      flex-direction: column;
      align-items: flex-start;
      & > :first-child {
        margin-bottom: 16px;
      }
    }
  }
  .ui-table__heading-row {
    background: #f5f8fa;
    border-radius: 4px 4px 0 0;
    &.dark_mode {
      background: #202b3c;
    }
  }
  .ui-table__body-row {
    &:hover {
      &.enableHover {
        cursor: pointer;
      }
      td {
        background: #f5f8fa;
        &.dark_mode {
          background: #041d25;
        }
      }
    }
    &.checked {
      background: #f2fafc;
      &.dark_mode {
        background: #041d25;
      }
      td {
        background: #f2fafc;
        &.dark_mode {
          background: #041d25;
        }
      }
    }
  }
  .ui-table__heading-cell {
    position: relative;
    cursor: pointer;
    &.smartColor {
      &:hover {
        .ui-table__heading-cell-text.ui-text {
          color: var(--smart-color);
        }
        .ui-table__heading-cell__icon {
          color: var(--smart-color);
        }
        color: var(--smart-color);
      }
    }
    &.dark_mode:not(.smartColor) {
      .ui-table__heading-cell-text.ui-text {
        color: #f1f5f9;
      }
      &:hover {
        .ui-table__heading-cell-text.ui-text {
          color: var(--dark-primary-color);
        }
        .ui-table__heading-cell__icon {
          color: var(--dark-primary-color);
        }
        color: var(--dark-primary-color);
      }
    }
    &:hover {
      .ui-table__heading-cell-text.ui-text {
        color: var(--light-primary-color);
      }
      .ui-table__heading-cell__icon {
        color: var(--light-primary-color);
      }
      color: var(--light-primary-color);
    }
  }
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
  .ui-table__body-cell {
    background: #fff;
    &.dark_mode {
      background: #121a26;
      box-shadow: inset 0px -1px 0px #1d2632;
    }
    .ui-table__body-cell-text {
      color: #3f3e4d;
      font-size: 16px;
      &.dark_mode {
        color: #f1f5f9;
      }
    }
  }
  .ui-table__wrapper {
    border: 1px solid #e1e7ec;
    border-radius: 4px;
    width: 100%;
    overflow: auto;
    &.dark_mode {
      border-color: #202b3c;
    }
  }
  .ui-table {
    border-collapse: collapse;
    min-width: 100%;
  }
  .ui-table tbody tr {
    &:not(.dark_mode) {
      border-bottom: 1px solid #e1e7ec;
    }

    td {
    }
  }
  .ui-table__heading-cell__content {
    display: inline-flex;
    align-items: center;
    position: relative;
    &.selected {
      color: #0db9e9;
      box-shadow: 0 0 0 3px rgba(67, 210, 250, 0.25);
      padding: 3px 8px;
      border-radius: 4px;
      .ui-table__heading-cell-text.ui-text {
        color: #0db9e9;
      }
      .ui-table__heading-cell__icon {
        color: #0db9e9;
      }
    }
    .ui-table__heading-cell__icon {
      color: #8895a7;
    }
  }
  .ui-table__active-filter-group {
    display: inline-flex;
    padding: 12px 16px;
    justify-content: space-between;
    background: #f5f8fa;
    border-radius: 4px;
    margin-top: 8px;
    margin-bottom: 8px;
    cursor: pointer;
    &.dark_mode {
      background: #202b3c;
    }
    &.active {
      border: 1px solid #0db9e9;
      box-shadow: 0 0 0 3px rgba(67, 210, 250, 0.25);
    }
  }
  .ui-table__active-filters {
    & > * {
      &:not(:first-child) {
        margin-left: 16px;
      }
    }
  }
  .ui-table__pagination {
    display: flex;
    &.right {
      justify-content: flex-end;
    }
  }
}
.ui-virtual-table {
  display: table;
}
</style>
