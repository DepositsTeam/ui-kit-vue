<template>
  <d-box class="ui-table__wrapper">
    <table-actions />
    <d-box class="ui-table__immediate-wrapper">
      <d-box class="ui-table">
        <table-head
          @all-checked="selectAllRows"
          @clear-checked="removeAllSelectedRows"
        />
        <table-body @update-selected-rows="updateSelectedRows" />
      </d-box>
    </d-box>
    <d-box display="flex" justify-content="flex-end" margin-top="1.5rem">
      <d-pagination
        v-if="paginate"
        :total-pages="totalPages"
        :current-page="initializedCurrentPage"
        :current-page-siblings="currentPageSiblings"
        @page-changed="changePage"
      ></d-pagination>
    </d-box>
  </d-box>
</template>

<script>
import DBox from "../d-box/DBox.vue";
import TableHead from "./components/TableHead.vue";
import TableBody from "./components/TableBody.vue";
import DPagination from "../d-pagination/DPagination.vue";
import { useTable } from "./composables/useTable";
import { provide } from "vue";
import TableActions from "./components/TableActions.vue";
import { ExternalLinkIcon } from "../icons";

export default {
  name: "DTable",
  components: {
    TableActions,
    DBox,
    TableHead,
    TableBody,
    DPagination,
  },
  emits: ["page-changed", "export-clicked", "sort", "filter", "search"],
  props: {
    checkboxes: {
      type: Boolean,
      default: false,
    },
    itemsPerPage: {
      type: Number,
      default: 10,
    },
    paginate: {
      type: Boolean,
      default: false,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    currentPageSiblings: {
      type: Number,
      default: 3,
    },
    asyncPagination: {
      type: Boolean,
      default: false,
    },
    columns: {
      type: Array,
    },
    data: {
      type: Array,
    },
    enableCsvExport: {
      type: Boolean,
    },
    exportCsvBtn: {
      type: Object,
      default: () => ({
        textValue: "Export",
        size: "small",
        colorScheme: "default",
        leftIcon: ExternalLinkIcon,
      }),
    },
    customizeViewBtn: {
      type: Object,
      default: () => ({
        textValue: "Customize view",
        size: "small",
        colorScheme: "default",
      }),
    },
    generatedCsvName: {
      type: String,
      default: "Exported CSV",
    },
    enableCustomizeView: {
      type: Boolean,
    },
    loading: {
      type: Boolean,
    },
    search: {
      type: Boolean,
    },
    searchPlaceholder: {
      type: String,
      default: "Search",
    },
  },
  setup(props, { emit }) {
    const tableContext = useTable(props, emit);
    provide("columns", props.columns);
    provide("data", tableContext.computedData);
    provide("checkbox", props.checkboxes);
    provide("selectedRows", tableContext.selectedRows);
    provide("enableCsvExport", props.enableCsvExport);
    provide("exportCsvBtn", props.exportCsvBtn);
    provide("generatedCsvName", props.generatedCsvName);
    provide("enableCustomizeView", props.enableCustomizeView);
    provide("customizeViewBtn", props.customizeViewBtn);
    provide("updateSortingBy", tableContext.updateSortingBy);
    provide("updateFilters", tableContext.updateFilters);
    provide("sortingBy", tableContext.sortingBy);
    provide("filters", tableContext.filters);
    provide("filterOptions", tableContext.filterOptions);
    provide("emptyFilterOptions", tableContext.emptyFilterOptions);
    provide("loading", props.loading);
    provide("search", props.search);
    provide("searchPlaceholder", props.searchPlaceholder);
    provide("searchValue", tableContext.searchValue);
    provide("updateSearchValue", tableContext.updateSearchValue);
    provide("handleSearch", tableContext.handleSearch);

    return { ...tableContext };
  },
};
</script>

<style scoped></style>
