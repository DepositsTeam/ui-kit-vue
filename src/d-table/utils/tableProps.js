import { ExternalLinkIcon } from "../../main";

export const tableProps = {
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
  paginateRight: {
    type: Boolean,
    default: false,
  },
  currentPage: {
    type: Number,
    default: 1,
  },
  totalPages: {
    type: Number,
    default: null,
  },
  currentPageSiblings: {
    type: Number,
    default: 3,
  },
  asyncPagination: {
    type: Boolean,
    default: false,
  },
  hidePages: {
    type: Boolean,
  },
  nextDisabled: {
    type: Boolean,
  },
  prevDisabled: {
    type: Boolean,
  },
  asyncPrevNext: {
    type: Boolean,
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
  loaderType: {
    type: String,
    validator: (value) =>
      ["ring", "equalizer", "ringed-circle"].includes(value),
    default: "ring",
  },
  search: {
    type: Boolean,
  },
  searchPlaceholder: {
    type: String,
    default: "Search",
  },
  checkboxDataSelector: {
    type: String,
    default: "uuuid",
  },
  buttonActionsAlignment: {
    type: String,
    default: "left",
    validator: (value) => ["left", "right"].includes(value),
  },
  searchAlignment: {
    type: String,
    default: "left",
    validator: (value) => ["left", "right"].includes(value),
  },
  smartColor: {
    type: String,
  },
  caseSensitiveSearch: {
    type: Boolean,
    default: false,
  },
  enableRowHoverCursor: {
    type: Boolean,
    default: true,
  },
  expandMode: {
    type: Boolean,
  },
  expandedColumns: {
    type: Array,
    default: () => [],
  },
  mobileColumns: {
    type: Array,
    default: () => [],
  },
  mobileBreakpoint: {
    type: Number,
    default: 800,
  },
  escapedRowClickSelectors: {
    type: Array,
    default: () => [],
  },
  overrideDefaultEscapedRowClickSelectors: {
    type: Boolean,
    default: false,
  },
  expandModeCardTitle: {
    type: String,
    default: "CARD DETAILS",
  },
  asyncSearch: {
    type: Boolean,
  },
  asyncCSVExport: {
    type: Boolean,
  },
  asyncCsvExport: {
    type: Boolean,
  },
  asyncSort: {
    type: Boolean,
  },
  asyncFilter: {
    type: Boolean,
  },
  emptyTableText: {
    type: String,
    default: "No data available",
  },
  exportCSVURL: {
    type: String,
  },
  exportCsvUrl: {
    type: String,
  },
  hideExpandModeHeader: {
    type: Boolean,
  },
  expandCardClass: {
    type: Boolean,
  },
};
