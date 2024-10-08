<template>
  <d-box
    class="ui-table__container-wrapper"
    :style="{
      '--smart-color': smartColor,
      '--smart-text-color': getTextColor(smartColor),
    }"
    ref="tableWrapperRef"
  >
    <d-box
      class="ui-table__container"
      :class="{ expandMode, isExpanded, hidden: hideTableContainer }"
      ref="tableContainerRef"
    >
      <d-box class="ui-table__header custom-scroll-bar" v-if="!expandMode">
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
              <d-button size="medium"> Customize view</d-button>
            </slot>
          </d-box>

          <d-box v-if="enableCsvExport" @click="exportCSVFunction">
            <slot name="export-csv-button">
              <d-button size="medium" :left-icon="ExternalLinkIcon"
                >Export
              </d-button>
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
        <d-auto-layout
          between
          alignment="center"
          width="100%"
          margin-y="8px"
          v-if="
            (expandMode && !hideExpandModeHeader) ||
            sortConfiguration ||
            filter.column
          "
        >
          <d-box
            ref="trigger"
            class="ui-table__active-filters"
            :class="{ isExpandMode: expandMode }"
          >
            <slot
              v-if="expandMode && !hideExpandModeHeader"
              name="expand-mode-left-header"
            >
              <d-box
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
                  >Add filter
                </d-text>
                <chevron-filled-down-icon
                  class="activeFiltersTrigger activeFiltersBox"
                />
              </d-box>
            </slot>

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
                  >{{ filter.selectedFilter.toLowerCase() }}
                </d-box>
                {{ filter.selectedFilterValue }}
                <d-box
                  is="span"
                  class="activeFiltersTrigger"
                  v-if="filter.join"
                >
                  {{ filter.join }}
                  <d-box
                    light-color="#64748B"
                    class="activeFiltersTrigger"
                    dark-color="#64748B"
                    is="span"
                    >{{ filter.selectedFilter2.toLowerCase() }}
                  </d-box>
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
                }}
              </d-text>
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
          <slot
            name="expand-mode-right-header"
            v-if="expandMode && !hideExpandModeHeader"
          >
            <d-button color-scheme="primary" size="large">+ New card</d-button>
          </slot>
        </d-auto-layout>
      </d-auto-layout>

      <d-box
        ref="currentTable"
        @scroll="watchScroll"
        class="ui-table__wrapper"
        :class="{ falseHeight: loading && paginatedData.length < 3 }"
      >
        <d-box ref="tableLoader" v-if="loading" class="ui-table-loader">
          <d-loader :loader="loaderType" :loader-size="loaderSize" />
        </d-box>
        <d-box is="table" ref="tableElemRef" class="ui-table">
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
              <d-box
                is="td"
                v-if="expandedData"
                class="ui-table__heading-cell is-checkbox ui-table__fixed_column_right"
                :style="{
                  ...getColumnWidth(null, true),
                  left: 0,
                }"
              >
              </d-box>
            </d-box>
          </d-box>
          <d-box
            v-if="!paginatedData.length && !loading"
            is="tbody"
            class="ui-table__body"
          >
            <d-box is="tr" class="ui-table__body-row">
              <d-box
                is="td"
                class="ui-table__body-cell empty-content"
                :colspan="
                  showCheckboxes
                    ? filteredRenderedColumns.length + 1
                    : filteredRenderedColumns.length
                "
              >
                <slot name="empty-table-content">
                  <d-text center>{{ emptyTableText }}</d-text>
                </slot>
              </d-box>
            </d-box>
          </d-box>
          <d-box is="tbody" v-else class="ui-table__body">
            <d-box
              is="tr"
              class="ui-table__body-row"
              v-for="(datum, columnIndex) in paginatedData"
              :key="`table__column_${columnIndex}`"
              :class="{
                checked: selectedItems.includes(datum[checkboxDataSelector]),
                enableHover: enableRowHoverCursor,
                isSelected: expandedData && expandedData.index === columnIndex,
              }"
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
                @click="(e) => emitRowClickedEvent(e, datum, columnIndex)"
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
                        background: validateBackground(
                          datum.deposits_row_config.background,
                          columnIndex
                        ),
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
                  :class="{ noWrap: column.noWrap }"
                  :max-char-width="column.maxCharWidth"
                >
                  <!--                  {{ transformDataWithColumnPipe(datum)[column.dataSelector] }}-->
                  {{
                    transformColumnDisplayWithPipe(column.dataSelector, datum)
                  }}
                </d-text>
              </d-box>
              <d-box
                is="td"
                class="ui-table__body-cell arrow-cell ui-table__fixed_column_right"
                :style="{
                  '--column_width': '10px',
                  '--column_min_width': '10px',
                  '--column_max_width': '10px',
                  ...(datum?.deposits_row_config?.background
                    ? {
                        background: validateBackground(
                          datum.deposits_row_config.background
                        ),
                      }
                    : {}),
                }"
                v-if="expandedData"
              >
                <chevron-arrow-right-icon
                  v-if="expandedData.index === columnIndex"
                />
              </d-box>
            </d-box>
          </d-box>
        </d-box>
      </d-box>
      <d-box
        margin-top="1rem"
        class="ui-table__pagination"
        :class="{ right: paginateRight }"
      >
        <d-pagination
          :total-pages="totalPages"
          :current-page="internalCurrentPage"
          :current-page-siblings="currentPageSiblings"
          @page-changed="handlePageChange"
          :smart-color="smartColor"
          :hide-pages="hidePages"
          :next-disabled="nextDisabled"
          :prev-disabled="prevDisabled"
          :async-prev-next="asyncPrevNext"
          :disabled="loading"
        />
        <d-box>
          <d-auto-layout
            alignment="center-left"
            v-if="paginate && showPaginationPerPage"
          >
            <d-text my0>Show</d-text>
            <d-select
              v-model="internalItemsPerPage"
              :options="['5', '10', '25', '50', '100']"
              size="large"
              placeholder="- Select -"
              :disabled="loading"
            />
            <d-text my0>rows per page</d-text>
          </d-auto-layout>
        </d-box>
      </d-box>

      <table-customize-view-modal
        :columns="renderedColumns"
        :column-hash-map="columnHashmap"
        :show="showCustomizeViewModal"
        @close-modal="toggleCustomizeViewModal(false)"
      />
    </d-box>
    <d-box
      v-if="
        expandMode &&
        !isExpanded &&
        $slots['no-expanded-row-content'] &&
        !hideNoExpandedRowContent
      "
      class="ui-table__no-expanded-row-content"
    >
      <slot name="no-expanded-row-content"></slot>
    </d-box>
    <d-box
      v-if="expandMode && isExpanded"
      class="ui-table__card"
      :class="{
        'is-displaying-alone': hideTableContainer,
        [expandCardClass]: expandCardClass,
      }"
    >
      <d-box class="ui-table__card-header">
        <d-text scale="subhead" class="ui-table__card-header-text"
          >{{ expandModeCardTitle }}
        </d-text>
        <close-icon
          @click="closeExpandedCard"
          v-if="hideTableContainer"
          cursor="poin=er"
          class="close-card-icon"
        />
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
  ChevronArrowRightIcon,
  ChevronFilledDownIcon,
  CloseIcon,
  DAutoLayout,
  DBox,
  DButton,
  DCheckbox,
  DDebitCardBalance,
  DLoader,
  DPagination,
  DText,
  DTextfield,
  ExternalLinkIcon,
  FunnelIcon,
  SearchIcon,
  Sort2Icon,
  DSelect,
} from "../main";
import TableHeadCell from "./components/TableHeadCell.vue";
import TableActiveFiltersDropdown from "./components/TableActiveFiltersDropdown.vue";
import { getColumnWidth } from "./utils/getColumnWidth";
import { tableProps } from "./utils/tableProps";
import {
  computed,
  nextTick,
  onMounted,
  onUnmounted,
  provide,
  ref,
  shallowRef,
  unref,
  watch,
} from "vue";
import { computePosition, flip, offset, shift } from "@floating-ui/dom";
import { sort } from "./utils/sort";
import { filter as filterItems, search as searchItems } from "./utils/filter";
import uniqueRandomString from "../utils/uniqueRandomString";
import TableCustomizeViewModal from "./components/TableCustomizeViewModal.vue";
import Column from "./utils/Column";
import { useCsvExport } from "./composables/useCsvExport";
import { getTextColor } from "@/utils/colorManager";
import validateColor from "validate-color";

const props = defineProps({ ...tableProps });
const tableElemRef = ref(null);
const tableWrapperRef = ref(null);
const tableContainerRef = ref(null);
const hideTableContainer = ref(false);
const hideNoExpandedRowContent = ref(false);
const emit = defineEmits([
  "page-updated",
  "row-clicked",
  "search",
  "filter",
  "sort",
  "export",
  "download-csv",
  "async-table-update",
  "rows-selected",
]);
const isExpanded = ref(false);

const internalItemsPerPage = ref("10");

const currentTable = ref(null);

const tableLoader = ref(null);

const viewportShrunkToMobile = ref(false);

const expandedData = ref(null);

const internalCurrentPage = ref(props.currentPage);

const { exportCsv } = useCsvExport(props.generatedCsvName);

const closeExpandedCard = () => {
  isExpanded.value = false;
  expandedData.value = null;
};

watch(isExpanded, (value) => {
  if (value) {
    if (tableWrapperRef.value.$el.getBoundingClientRect().width < 750) {
      hideTableContainer.value = true;
    }
  } else {
    hideTableContainer.value = false;
  }
});

watch(
  () => props.itemsPerPage,
  () => {
    if (props.itemsPerPage) {
      internalItemsPerPage.value = props.itemsPerPage;
    }
  }
);

watch(internalItemsPerPage, () => {
  handlePageChange(1);
});

const watchScroll = (e) => {
  if (tableLoader?.value?.$el && props.loading) {
    tableLoader.value.$el.style.left = e.target.scrollLeft + "px";
  }
};

const columnHashmap = computed(() => {
  const hashMap = {};
  props.columns.forEach((column) => {
    hashMap[column.dataSelector] = column;
  });
  return hashMap;
});

const exportCSVFunction = () => {
  if (props.asyncCsvExport || props.asyncCSVExport) {
    const exportCsvUrl = props.exportCSVURL || props.exportCsvUrl;
    if (exportCsvUrl) {
      window.open(exportCsvUrl, "_blank");
    } else {
      emit("download-csv");
    }
  } else {
    exportCsv(props.data, columnHashmap.value);
  }
};

const transformDataWithColumnPipe = (datum) => {
  return Object.keys(datum).reduce((previousValue, key) => {
    if (
      columnHashmap.value[key] &&
      columnHashmap.value[key].pipe &&
      typeof columnHashmap.value[key].pipe === "function"
    ) {
      previousValue[key] = columnHashmap.value[key].pipe(datum[key], datum);
    } else {
      previousValue[key] = datum[key];
    }
    return previousValue;
  }, {});
};

const transformColumnDisplayWithPipe = (column, datum) => {
  if (columnHashmap.value[column].pipe) {
    if (datum[column]) {
      return columnHashmap.value[column].pipe(datum[column], datum);
    } else {
      return columnHashmap.value[column].pipe(undefined, datum);
    }
  }
  return datum[column];
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
  let escapedQuerySelectors = [
    ".btn",
    ".ui-button",
    ".d-context-menu-dropdown-wrapper",
    "button",
    "a",
  ];
  if (props.overrideDefaultEscapedRowClickSelectors) {
    escapedQuerySelectors = [...props.escapedRowClickSelectors];
  } else {
    escapedQuerySelectors = [
      ...escapedQuerySelectors,
      ...props.escapedRowClickSelectors,
    ];
  }
  let containsEscapedSelector = false;
  escapedQuerySelectors.forEach((escapedSelector) => {
    if (e.target.closest(escapedSelector)) {
      containsEscapedSelector = true;
    }
  });

  if (!containsEscapedSelector) {
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

watch(selectedItems, () => {
  emit(
    "rows-selected",
    selectedItems.value.map((id) =>
      paginatedData.value.find(
        (item) => item[props.checkboxDataSelector] === id
      )
    )
  );
});

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

const updateRenderedColumns = (value) => {
  renderedColumns.value = [...value];
};

const filteredRenderedColumns = computed(() => {
  return renderedColumns.value.filter((column) => column.visible);
});

const manageResize = () => {
  // Handle hiding expand mode placeholder content
  if (props.expandMode) {
    hideNoExpandedRowContent.value =
      tableWrapperRef.value.$el.getBoundingClientRect().width <= 750;
  }

  // Manage columns
  // expandedData.value = null;
  // isExpanded.value = false;
  if (!isExpanded.value) {
    if (window.outerWidth <= props.mobileBreakpoint) {
      if (!viewportShrunkToMobile.value) {
        const clonedColumns = [...renderedColumns.value].map((column) => {
          if (props.mobileColumns && props.mobileColumns.length) {
            column.visible = props.mobileColumns.includes(column.dataSelector);
            return column;
          } else {
            return column;
          }

          // if (
          //   (props.mobileColumns && !props.mobileColumns.length) ||
          //   !props.mobileColumns
          // ) {
          //   if (index >= 2) {
          //     column.visible = false;
          //   }
          //   return column;
          // } else {
          // column.visible = props.mobileColumns.includes(column.dataSelector);
          // return column;
          // }
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
  }
};

const calculateColumnOffset = async () => {
  let initialOffset = props.showCheckboxes ? 50 : 0;
  const clonedRenderedColumns = [...renderedColumns.value];
  await nextTick();
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
  manageResize();
  window.addEventListener("resize", manageResize);
  await nextTick();
  setTimeout(() => {
    calculateColumnOffset();
  }, 500);
});

onUnmounted(() => {
  window.removeEventListener("resize", manageResize);
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
  internalCurrentPage.value = currentPage;
  emit("page-updated", currentPage, internalItemsPerPage.value);
  // if (searchValue.value) {
  //   emit("search", searchValue.value, currentPage);
  // }
  if (props.asyncPagination && props.asyncSearch) {
    emit("async-table-update", {
      page: currentPage,
      search: searchValue.value,
      itemsPerPage: internalItemsPerPage.value,
    });
  }
};

const dataFactory = computed(() => {
  let filteredData = [...props.data];

  if (searchValue.value && !props.asyncSearch) {
    filteredData = searchItems(
      searchValue.value,
      filteredData,
      columnHashmap.value,
      props.caseSensitiveSearch
    );
  }

  if (filter.value && filter.value.column && !props.asyncFilter) {
    filteredData = filterItems(
      filter.value,
      filteredData,
      props.caseSensitiveSearch
    );
  }

  if (sortConfiguration.value && !props.asyncSort) {
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
    let start = (scopedCurrentPage.value - 1) * internalItemsPerPage.value;
    filteredData = filteredData.splice(start, internalItemsPerPage.value);
  }
  return filteredData;
});

const computedItemsID = computed(() => {
  return dataFactory.value.map((item) => item[props.checkboxDataSelector]);
});

const totalPages = computed(() => {
  if (props.totalPages !== null && props.totalPages > 0) {
    return props.totalPages;
  }
  if (searchValue.value || filter.value.column) {
    return Math.ceil(dataFactory.value.length / internalItemsPerPage.value);
  }
  return Math.ceil(props.data.length / internalItemsPerPage.value);
});

const buttonActionsEnabled = computed(
  () => props.enableCustomizeView && props.enableCsvExport
);

watch(renderedColumns, (newVal, oldVal) => {
  if (newVal.length !== oldVal.length) {
    calculateColumnOffset();
  }
});

watch(
  () => props.currentPage,
  () => {
    internalCurrentPage.value = props.currentPage;
  }
);

watch(searchValue, () => {
  scopedCurrentPage.value = 1;

  if (props.asyncSearch) {
    emit("search", searchValue.value, 1);
  }
  internalCurrentPage.value = 1;
  if (props.asyncSearch && props.asyncPagination) {
    emit("async-table-update", {
      page: 1,
      search: searchValue.value,
    });
  }
});

watch(sortConfiguration, () => {
  if (props.asyncSort) {
    emit("sort", sortConfiguration.value);
  }
});

watch(filter, () => {
  if (props.asyncFilter) {
    emit("filter", filter.value);
  }
});

const validateBackground = (background, index) => {
  if (validateColor(background)) {
    return background;
  }
  throw Error(
    `Invalid CSS color (data[x].deposits_row_config.background) at row index ${index}: ${background}`
  );
};
</script>

<style lang="scss">
.ui-table__container-wrapper {
  display: flex;
  align-items: flex-start;
  width: 100%;

  .ui-table__card {
    background: white;
    filter: drop-shadow(0px 1px 5px rgba(63, 63, 68, 0.098));
    border-radius: 0 8px 8px 8px;
    padding: 24px;
    position: relative;
    min-width: 280px;

    &.is-displaying-alone {
      width: 100%;
      border-radius: 8px;
    }

    .close-card-icon {
      position: absolute;
      top: 15px;
      right: 20px;
    }

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

    &.hidden {
      display: none;
    }

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
        padding: 0 24px;
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

        td:not(.empty-content) {
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
      position: relative;

      &.ui-table__fixed-column {
        position: sticky;
        left: 0;
        z-index: 30;
      }

      &.ui-table__fixed_column_right {
        position: sticky;
        right: 0;
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

        &.noWrap {
          white-space: nowrap;
        }

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
      position: relative;

      &.falseHeight {
        min-height: 200px;
      }

      .ui-table-loader {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 255, 255, 0.8);
        z-index: 31;

        .ui-d-loader {
          position: relative;
          z-index: 9;
        }

        &.dark_mode {
          background-color: transparent;
          z-index: 9;

          &::before {
            content: "";
            background: var(--dark-background-color);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0.7;
            z-index: 5;
          }
        }
      }

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
      justify-content: space-between;

      &:not(.right) {
        & > :last-child {
          display: flex;
          justify-content: flex-end;
        }
      }

      & > * {
        flex: 1;
      }

      &.right {
        flex-direction: row-reverse;
        & > :first-child {
          justify-content: flex-end;
        }
      }
    }
  }

  .ui-virtual-table {
    display: table;
  }
}

.ui-table__no-expanded-row-content {
  padding: 1rem;
}
</style>
