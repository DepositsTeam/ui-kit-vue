<template>
  <d-box class="ui-table__container">
    <d-box class="ui-table__header">
      <d-box v-if="search">
        <d-textfield
          :left-icon="SearchIcon"
          :placeholder="searchPlaceholder"
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
              <d-checkbox />
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
            v-for="(datum, index) in data"
            :key="`table__column_${index}`"
          >
            <d-box
              is="td"
              v-if="showCheckboxes"
              class="ui-table__body-cell is-checkbox"
              :style="{
                ...getColumnWidth(null, true),
              }"
            >
              <d-checkbox />
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
              <d-text
                font-face="circularSTD"
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
    <d-box class="ui-table__pagination" v-if="paginate">
      <d-pagination
        :total-pages="Math.ceil(data.length / itemsPerPage)"
        :current-page="currentPage"
        :current-page-siblings="currentPageSiblings"
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
import { SearchIcon, ExternalLinkIcon } from "../main";
import TableHeadCell from "./components/TableHeadCell.vue";
const props = defineProps({
  showCheckboxes: {
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
});

const getColumnWidth = (column, isCheckbox = false) => {
  let returnedStyles = { "--column_min_width": "120px" };
  if (!isCheckbox) {
    if (column.width) {
      returnedStyles["--column_width"] = column.width;
    }
    if (column.maxWidth) {
      returnedStyles["--column_max_width"] = column.maxWidth;
    }
    if (column.minWidth) {
      returnedStyles["--column_min_width"] = column.minWidth;
    }
  } else {
    returnedStyles = {
      "--column_width": "50px",
      "--column_min_width": "50px",
      "--column_max_width": "50px",
    };
  }
  return returnedStyles;
};
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
}
</style>
