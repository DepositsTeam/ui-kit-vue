<template>
  <d-box
    class="ui-table__container-wrapper"
    :style="{
      '--smart-color': smartColor,
      '--smart-text-color': getTextColor(smartColor),
    }"
  >
    <d-box class="ui-table__container" :class="{ expandMode, isExpanded }">
      <d-box class="ui-table__header custom-scroll-bar">
        <d-auto-layout
          v-if="$slots['table-header-left'] || search"
          class="ui-table__header__search-wrapper"
          :class="{
            [searchAlignment]: buttonActionsEnabled ? false : searchAlignment,
          }"
        >
          <slot name="table-search" v-if="!expandMode">
            <d-textfield
              v-if="search"
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
            [buttonActionsAlignment]:
              search || $slots['table-header-left']
                ? false
                : buttonActionsAlignment,
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
      <d-auto-layout
        class="ui-table__filters-container"
        :class="{ isExpandMode: expandMode }"
        between
        alignment="center"
      >
        <d-box
          ref="trigger"
          class="ui-table__active-filters"
          :class="{ isExpandMode: expandMode }"
        >
          <d-box
            v-if="expandMode"
            class="ui-table__active-filter-group activeFiltersTrigger activeFiltersBox expandMode-filters-trigger"
            @click="toggleActiveFilters"
            @close="toggleActiveFilters(false)"
          >
            <funnel-icon class="activeFiltersTrigger activeFiltersBox" />
            <d-text
              font-face="circularSTD"
              scale="p-16"
              margin-x="8px"
              my0
              v-if="!viewportShrunkToMobile"
              class="activeFiltersTrigger activeFiltersBox"
              >Add filter</d-text
            >
            <chevron-filled-down-icon
              class="activeFiltersTrigger activeFiltersBox"
            />
          </d-box>
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
                sortConfiguration.direction === "asc"
                  ? "Ascending"
                  : "Descending"
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
        <slot name="call-to-action" v-if="expandMode">
          <d-button color-scheme="primary" size="large">+ New card</d-button>
        </slot>
      </d-auto-layout>

      <d-box ref="currentTable" class="ui-table__wrapper">
        <d-box is="table" class="ui-table">
          <d-box is="thead" class="ui-table__heading">
            <d-box is="tr" class="ui-table__heading-row">
              <d-box
                is="td"
                v-if="showCheckboxes"
                class="ui-table__heading-cell is-checkbox ui-table__fixed-column"
                :style="{
                  ...getColumnWidth(null, true),
                  left: 0,
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
                  isExpandMode: expandMode,
                  'ui-table__fixed-column': column.fixed,
                  [`ui-table__column-${column.dataSelector}`]: true,
                }"
                :style="{
                  ...getColumnWidth(column),
                  ...(column.leftOffset ? { left: column.leftOffset } : {}),
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
                isSelected: expandedData && expandedData.index === index,
              }"
              @click="(e) => emitRowClickedEvent(e, datum, index)"
            >
              <d-box
                is="td"
                v-if="showCheckboxes"
                class="ui-table__body-cell is-checkbox ui-table__fixed-column"
                :style="{
                  ...getColumnWidth(null, true),
                  left: 0,
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
                :class="{
                  'ui-table__fixed-column': column.fixed,
                }"
                :style="{
                  ...getColumnWidth(column),
                  ...(datum?.deposits_row_config?.background
                    ? {
                        background: datum.deposits_row_config.background,
                      }
                    : {}),
                  ...(column.leftOffset ? { left: column.leftOffset } : {}),
                }"
              >
                <slot
                  v-if="$slots[`item.${column.dataSelector}`]"
                  :name="`item.${column.dataSelector}`"
                  v-bind="transformDataWithColumnPipe(datum)"
                ></slot>
                <d-text
                  font-face="circularSTD"
                  v-else
                  my0
                  class="ui-table__body-cell-text"
                >
                  {{ transformDataWithColumnPipe(datum)[column.dataSelector] }}
                </d-text>
              </d-box>
              <d-box
                is="td"
                class="ui-table__body-cell arrow-cell"
                :style="{
                  '--column_width': '10px',
                  '--column_min_width': '10px',
                  '--column_max_width': '10px',
                }"
                v-if="expandedData"
              >
                <chevron-arrow-right-icon v-if="expandedData.index === index" />
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
    <d-box v-if="expandMode && isExpanded" class="ui-table__card">
      <d-box class="ui-table__card-header">
        <d-text scale="subhead" class="ui-table__card-header-text"
          >CARD DETAILS</d-text
        >
      </d-box>
      <d-box class="ui-table__card-body">
        <slot name="expanded-card-body" v-bind="expandedData.datum">
          <d-auto-layout direction="vertical" margin-top=".5rem">
            <d-debit-card-balance :name="expandedData.datum.name" />
            <d-text>
              First column data is:
              {{ expandedData.datum[filteredRenderedColumns[0].dataSelector] }}
            </d-text>
          </d-auto-layout>
        </slot>
      </d-box>
    </d-box>
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
  DDebitCardBalance,
  DAutoLayout,
} from "../main";
import {
  SearchIcon,
  ExternalLinkIcon,
  CloseIcon,
  FunnelIcon,
  Sort2Icon,
  ChevronFilledDownIcon,
  ChevronArrowRightIcon,
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
  watch,
  onUnmounted,
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

const props = defineProps({ ...tableProps });
const emit = defineEmits([
  "page-updated",
  "row-clicked",
  "search",
  "filter",
  "sort",
  "export",
]);
const isExpanded = ref(false);

const currentTable = ref(null);

const viewportShrunkToMobile = ref(false);

const expandedData = ref(null);

const { exportCsv } = useCsvExport(props.data, props.generatedCsvName);

const columnHashmap = computed(() => {
  const hashMap = {};
  props.columns.forEach((column) => {
    hashMap[column.dataSelector] = column;
  });
  return hashMap;
});

const transformDataWithColumnPipe = (datum) => {
  return Object.keys(datum).reduce((previousValue, key) => {
    if (
      columnHashmap.value[key] &&
      columnHashmap.value[key].pipe &&
      typeof columnHashmap.value[key].pipe === "function"
    ) {
      previousValue[key] = columnHashmap.value[key].pipe(datum[key]);
    } else {
      previousValue[key] = datum[key];
    }
    return previousValue;
  }, {});
};

const emitRowClickedEvent = (e, datum, index) => {
  if (props.expandMode) {
    if (!isExpanded.value) {
      const clonedColumns = [...renderedColumns.value].map((column, index) => {
        if (
          (props.expandedColumns && !props.expandedColumns.length) ||
          !props.expandedColumns
        ) {
          if (index >= 4) {
            column.visible = false;
          }
          return column;
        } else {
          column.visible = props.expandedColumns.includes(column.dataSelector);
          return column;
        }
      });
      updateRenderedColumns(clonedColumns);
      expandedData.value = {
        index,
        datum,
      };
      isExpanded.value = true;
    } else {
      if (index === expandedData.value.index) {
        expandedData.value = null;
        isExpanded.value = false;
        const clonedColumns = [...renderedColumns.value].map((column) => {
          column.visible = true;
          return column;
        });
        updateRenderedColumns(clonedColumns);
      } else {
        expandedData.value = {
          index,
          datum,
        };
      }
    }
  }
  const tagName = e.target.tagName.toLowerCase();
  switch (tagName) {
    case "a":
    case "button":
      break;
    default:
      emit("row-clicked", datum);
  }
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

const hideColumnsOnMobile = () => {
  expandedData.value = null;
  isExpanded.value = false;
  if (window.outerWidth <= props.mobileBreakpoint) {
    if (!viewportShrunkToMobile.value) {
      const clonedColumns = [...renderedColumns.value].map((column, index) => {
        if (
          (props.mobileColumns && !props.mobileColumns.length) ||
          !props.mobileColumns
        ) {
          if (index >= 2) {
            column.visible = false;
          }
          return column;
        } else {
          column.visible = props.mobileColumns.includes(column.dataSelector);
          return column;
        }
      });
      updateRenderedColumns(clonedColumns);
      viewportShrunkToMobile.value = true;
    }
  } else {
    const clonedColumns = [...renderedColumns.value].map((column) => {
      column.visible = true;
      return column;
    });
    updateRenderedColumns(clonedColumns);
    viewportShrunkToMobile.value = false;
  }
};

const calculateColumnOffset = () => {
  let initialOffset = props.showCheckboxes ? 50 : 0;
  const clonedRenderedColumns = [...renderedColumns.value];
  renderedColumns.value = clonedRenderedColumns.map((column) => {
    if (column.fixed) {
      column.leftOffset = initialOffset + "px";
      initialOffset += currentTable.value.$el
        .getElementsByClassName(`ui-table__column-${column.dataSelector}`)[0]
        .getBoundingClientRect().width;
      return column;
    }
    return column;
  });
};

onMounted(async () => {
  updateRenderedColumns(props.columns.map((column) => new Column(column)));
  hideColumnsOnMobile();
  window.addEventListener("resize", hideColumnsOnMobile);
  await nextTick();
  calculateColumnOffset();
});

onUnmounted(() => {
  window.removeEventListener("resize", hideColumnsOnMobile);
});

provide("sortConfiguration", sortConfiguration);
provide("updateSortConfiguration", updateSortConfiguration);
provide("filter", filter);
provide("updateFilterValue", updateFilterValue);
provide("updateRenderedColumns", updateRenderedColumns);
provide("isExpandMode", props.expandMode);
provide("columns", props.columns);

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

watch(renderedColumns, (newVal, oldVal) => {
  if (newVal.length !== oldVal.length) {
    calculateColumnOffset();
  }
});
</script>

<style lang="scss">
.ui-table__container-wrapper {
  display: flex;
  align-items: flex-start;
  width: 100%;
  .ui-table__card {
    min-width: 390px;
    width: max-content;
    background: white;
    filter: drop-shadow(0px 1px 5px rgba(63, 63, 68, 0.098));
    border-radius: 0 8px 8px 8px;
    padding: 24px;
    .ui-table__card-header {
      border-bottom: 0.5px solid #cbd5e1;

      .ui-table__card-header-text {
        font-weight: 500;
      }
    }
  }
  .ui-table__container {
    flex: 1;
    overflow: auto;
    position: relative;

    &.expandMode {
      background: #fff;
      border-right: 0.5px solid #e2e8f0;
      filter: drop-shadow(0px 1px 5px rgba(63, 63, 68, 0.098));
      border-radius: 8px;
      padding-bottom: 16px;
      &.isExpanded {
        border-radius: 8px 0 0 8px;
      }
      .ui-table__filters-container {
        padding: 8px 24px;
      }
      .ui-table__body-cell,
      .ui-table__heading-cell {
        padding: 18px 8px;
        &.arrow-cell {
          padding: 18px 2px;
        }
      }
      .ui-table thead tr {
        td.ui-table__heading-cell:first-child {
          padding-left: 24px;
        }
        td.ui-table__heading-cell:last-child {
          padding-right: 24px;
        }
      }
      .ui-table tbody tr {
        &:not(.dark_mode) {
          border-bottom: 0.5px solid #e2e8f0;
          background: #f8fafc;
        }

        td.ui-table__body-cell:first-child {
          padding-left: 24px;
        }
        td.ui-table__body-cell:last-child {
          padding-right: 24px;
        }

        &:last-child {
          border-bottom: none;
        }
      }
      .ui-table__wrapper {
        border: none;
      }

      .ui-table__heading-row {
        background: transparent;
      }
    }
    .activeFiltersBox.dark_mode {
      color: #cbd5e1;
    }
    .ui-table__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
      gap: 16px;
      overflow: auto;
      padding-bottom: 4px;
      .ui-table__header__search-wrapper {
        display: flex;
        flex: 1;
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
      td {
        background: #f5f8fa;
      }
      &.dark_mode {
        background: #202b3c;
        td {
          background: #202b3c;
        }
      }
    }
    .ui-table__body-row {
      &:hover,
      &.isSelected {
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
      z-index: 1;
      &.ui-table__fixed-column {
        position: sticky;
        left: 0;
        z-index: 30;
      }
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
      scrollbar-color: #929292 #e1e7ec;
      scrollbar-width: thin;
      &::-webkit-scrollbar {
        height: 8px;
      }
      &::-webkit-scrollbar-track {
        //box-shadow: inset 0 0 5px grey;
        background: #e1e7ec;
      }
      &::-webkit-scrollbar-thumb {
        background: #929292;
        border-radius: 10px;
      }
      &.dark_mode {
        border-color: #202b3c;
        scrollbar-color: #64748b #202b3c;
        scrollbar-width: thin;
        &::-webkit-scrollbar {
          height: 8px;
        }
        &::-webkit-scrollbar-track {
          //box-shadow: inset 0 0 5px grey;
          background: #202b3c;
        }
        &::-webkit-scrollbar-thumb {
          background: #64748b;
          border-radius: 10px;
          transition: 0.8s;
          &:hover {
            background: #5b697d;
          }
        }
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
    }
    .ui-table__heading-cell__content {
      display: inline-flex;
      align-items: center;
      position: relative;
      &.selected {
        color: var(--light-primary-color);
        box-shadow: 0 0 0 3px rgba(67, 210, 250, 0.25);
        padding: 3px 8px;
        border-radius: 4px;
        .ui-table__heading-cell-text.ui-text {
          color: var(--light-primary-color);
        }
        .ui-table__heading-cell__icon {
          color: var(--light-primary-color);
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
      &.expandMode-filters-trigger {
        background: #f5f8fa;
        border: 1px solid #e1e7ec;
        border-radius: 6px;
        color: #6d7786;
        .ui-text {
          color: #6d7786;
        }
      }
      &.dark_mode {
        background: #202b3c;
      }
      &.active {
        border: 1px solid var(--light-primary-color);
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
}
</style>
