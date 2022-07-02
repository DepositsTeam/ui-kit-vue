<template>
  <d-box class="ui-table__container">
    <d-box class="ui-table__header">
      <d-box v-if="search">
        <d-textfield
          :left-icon="SearchIcon"
          :placeholder="searchPlaceholder"
          v-model="searchValue"
          size="large"
        />
      </d-box>
      <d-box class="ui-table__header-btns">
        <d-button v-if="enableCustomizeView" size="medium">
          Customize view
        </d-button>
        <d-button
          v-if="enableCsvExport"
          size="medium"
          :left-icon="ExternalLinkIcon"
          >Export</d-button
        >
      </d-box>
    </d-box>
    <d-box ref="trigger" class="ui-table__active-filters">
      <d-box
        :class="{ active: showActiveFiltersDropdown }"
        class="ui-table__active-filter-group activeFiltersTrigger"
        @click="toggleActiveFilters"
        v-if="filter.column"
        @close="toggleActiveFilters(false)"
      >
        <funnel-icon class="activeFiltersTrigger" />
        <d-text
          class="activeFiltersTrigger"
          margin-x="8px"
          my0
          font-face="circularSTD"
          scale="p-16"
          >{{ filter.column.display }}
          <d-box color="#8895A7" is="span">{{
            filter.selectedFilter.toLowerCase()
          }}</d-box>
          {{ filter.selectedFilterValue }}
          <span v-if="filter.join">
            {{ filter.join }}
            <d-box color="#8895A7" is="span">{{
              filter.selectedFilter2.toLowerCase()
            }}</d-box>
            {{ filter.selectedFilterValue2 }}
          </span>
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
        />
      </d-box>
      <d-box
        :class="{ active: showActiveFiltersDropdown }"
        class="ui-table__active-filter-group"
        v-if="sortConfiguration"
      >
        <sort2-icon />
        <d-text margin-x="8px" my0 font-face="circularSTD" scale="p-16"
          >{{ sortConfiguration.column.display }}
          <d-box color="#8895A7" is="span">is</d-box>
          {{
            sortConfiguration.direction === "asc" ? "Ascending" : "Descending"
          }}</d-text
        >
        <close-icon @click="updateSortConfiguration(null)" />
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
              v-for="(column, index) in columns"
              is="td"
              :key="`column__${index}`"
              class="ui-table__heading-cell"
              :class="{
                width: column.width,
                minWidth: column.minWidth,
                maxWidth: column.maxWidth,
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
            v-for="(datum, index) in dataFactory"
            :key="`table__column_${index}`"
            :class="{
              checked: selectedItems.includes(datum[checkboxDataSelector]),
            }"
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
              v-for="(column, index) in columns"
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
    <d-box class="ui-table__pagination" margin-top="1rem" v-if="paginate">
      <d-pagination
        :total-pages="totalPages"
        :current-page="currentPage"
        :current-page-siblings="currentPageSiblings"
        @page-changed="handlePageChange"
      />
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
import { ref, nextTick, computed, provide, reactive } from "vue";
import { computePosition, flip, shift, offset } from "@floating-ui/dom";
import { sort } from "./utils/sort";
import { filter as filterItems } from "./utils/filter";
import { search as searchItems } from "./utils/filter";
import uniqueRandomString from "../utils/uniqueRandomString";

const props = defineProps({ ...tableProps });
const emit = defineEmits(["page-updated"]);

const columnHashmap = computed(() => {
  const hashMap = {};
  props.columns.forEach((column) => {
    hashMap[column.dataSelector] = column;
  });
  return hashMap;
});

const showActiveFiltersDropdown = ref(false);
const target = ref(null);
const trigger = ref(null);
const closeActiveFiltersDropdown = () => {
  showActiveFiltersDropdown.value = false;
};

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

const selectedItems = reactive([]);

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

provide("sortConfiguration", sortConfiguration);
provide("updateSortConfiguration", updateSortConfiguration);
provide("filter", filter);
provide("updateFilterValue", updateFilterValue);

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
      columnHashmap.value
    );
  }

  if (filter.value && filter.value.column) {
    filteredData = filterItems(filter.value, filteredData);
  }

  if (sortConfiguration.value) {
    sort(sortConfiguration.value, filteredData);
  }

  if (props.paginate && !props.asyncPagination) {
    let start = (scopedCurrentPage.value - 1) * props.itemsPerPage;
    filteredData = filteredData.splice(start, props.itemsPerPage);
  }

  return filteredData.map((item) => ({
    ...item,
    uuuid: uniqueRandomString(30, 8),
  }));
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
</script>

<style lang="scss">
.ui-table__container {
  .ui-table__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    .ui-table__header-btns {
      display: flex;
      align-items: center;
      & > *:not(:last-child) {
        margin-right: 8px;
      }
    }
  }
  .ui-table__heading-row {
    background: #f5f8fa;
    border-radius: 4px 4px 0 0;
  }
  .ui-table__body-row {
    &:hover {
      td {
        background: #f5f8fa;
      }
    }
    &.checked {
      background: #f2fafc;
      td {
        background: #f2fafc;
      }
    }
  }
  .ui-table__heading-cell {
    position: relative;
    cursor: pointer;
    &:hover {
      .ui-table__heading-cell-text.ui-text {
        color: #0db9e9;
      }
      .ui-table__heading-cell__icon {
        color: #0db9e9;
      }
      color: #0db9e9;
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
    .ui-table__body-cell-text {
      color: #3f3e4d;
      font-size: 16px;
    }
  }
  .ui-table__wrapper {
    border: 1px solid #e1e7ec;
    border-radius: 4px;
    width: 100%;
    overflow: auto;
  }
  .ui-table {
    border-collapse: collapse;
    min-width: 100%;
  }
  .ui-table tbody tr {
    border-bottom: 1px solid #e1e7ec;

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
    &.active {
      border: 1px solid #0db9e9;
      box-shadow: 0px 0px 0px 3px rgba(67, 210, 250, 0.25);
    }
  }
  .ui-table__active-filters {
    & > * {
      &:not(:first-child) {
        margin-left: 16px;
      }
    }
  }
}
</style>
