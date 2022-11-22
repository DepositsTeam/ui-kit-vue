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
};
