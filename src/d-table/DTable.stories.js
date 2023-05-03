import DTable from "./DTable.vue";
import { DBadge, DSelect } from "../main";
import {
  data,
  paginatedData,
  customComponentData,
  customRowData,
} from "./data/sitcom-data";
import {
  overflowColumns,
  overflowFixedColumns,
  sitcomColumns,
} from "./data/columns";
import DarkModeProvider from "../providers/DarkModeProvider.vue";
import DAutoLayout from "../d-auto-layout/DAutoLayout.vue";
import { overflowColumnsData } from "./data/data";

export default {
  components: { DBadge, DAutoLayout },
  title: "Table",
  component: DTable,
  argTypes: {
    showCheckboxes: {
      control: { type: "boolean" },
    },
    itemsPerPage: {
      control: { type: "text" },
    },
    paginate: {
      control: { type: "boolean" },
    },
    paginateRight: {
      control: { type: "boolean" },
    },
    currentPage: {
      control: { type: "text" },
    },
    currentPageSiblings: {
      control: { type: "text" },
    },
    asyncPagination: {
      control: { type: "boolean" },
    },
    columns: {
      control: { type: "object" },
    },
    data: {
      control: { type: "object" },
    },
    enableCsvExport: {
      control: { type: "boolean" },
    },
    exportCsvBtn: {
      control: { type: "object" },
    },
    customizeViewBtn: {
      control: { type: "object" },
    },
    generatedCsvName: {
      control: { type: "text" },
    },
    enableCustomizeView: {
      control: { type: "boolean" },
    },
    loading: {
      control: { type: "boolean" },
    },
    search: {
      control: { type: "boolean" },
    },
    searchPlaceholder: {
      control: { type: "text" },
    },
    buttonActionsAlignment: {
      control: { type: "select" },
      options: ["left", "right"],
      default: "left",
    },
    searchAlignment: {
      control: { type: "select" },
      options: ["left", "right"],
      default: "left",
    },
    smartColor: {
      control: { type: "color" },
    },
    enableRowHoverCursor: {
      control: { type: "boolean" },
    },
    expandMode: {
      control: { type: "boolean" },
    },
  },
};

const Template = (args) => ({
  components: { DTable },
  setup() {
    return { args };
  },
  template: `<d-table v-bind="args" />`,
});

const ExtraHeadingsTemplate = (args) => ({
  components: { DTable, DBadge, DAutoLayout, DSelect },
  setup() {
    return { args };
  },
  template: `
    <d-table v-bind="args">
      <template #table-header-left>
          <d-select size="large" placeholder="Last 7 days" width="200px" />
          <d-select size="large" placeholder="By Events" width="200px" />
        <d-select size="large" placeholder="All environments" width="200px" />
      </template>
    </d-table>
  `,
});

export const ExtraHeadings = ExtraHeadingsTemplate.bind({});
ExtraHeadings.args = {
  columns: sitcomColumns,
  data,
  enableCsvExport: true,
  enableCustomizeView: true,
};

const DarkModeTemplate = (args) => ({
  components: { DTable, DarkModeProvider },
  setup() {
    return { args };
  },
  template: `
    <dark-mode-provider :dark-mode="true">
    <d-table v-bind="args" />
    </dark-mode-provider>
    `,
});

const DarkModeTemplateFactory = () => {
  const Bound = DarkModeTemplate.bind({});
  Bound.decorators = [
    () => ({
      template:
        '<div style="padding: 3em; background: #121A26;"><story /></div>',
    }),
  ];
  return Bound;
};

export const Default = Template.bind({});
Default.args = {
  columns: sitcomColumns,
  data,
};

export const ChangeColorForRow = Template.bind({});
ChangeColorForRow.args = {
  columns: sitcomColumns,
  data: customRowData,
};

export const DarkModeDefault = DarkModeTemplateFactory();
DarkModeDefault.args = {
  columns: sitcomColumns,
  data,
};

export const ExpandMode = Template.bind({});
ExpandMode.args = {
  data,
  columns: sitcomColumns,
  expandMode: true,
  paginate: true,
};

export const ExpandModeWithSpecifiedExpandedColumns = Template.bind({});
ExpandModeWithSpecifiedExpandedColumns.args = {
  data,
  columns: sitcomColumns,
  expandMode: true,
  expandedColumns: ["name", "city"],
};

export const Search = Template.bind({});
Search.args = {
  search: true,
  data,
  columns: sitcomColumns,
};

export const DarkModeSearch = DarkModeTemplateFactory();
DarkModeSearch.args = {
  search: true,
  columns: sitcomColumns,
  data,
};

export const Checkboxes = Template.bind({});
Checkboxes.args = {
  search: true,
  columns: sitcomColumns,
  data,
  showCheckboxes: true,
};

export const DarkModeCheckboxes = DarkModeTemplateFactory();
DarkModeCheckboxes.args = {
  search: true,
  showCheckboxes: true,
  columns: sitcomColumns,
  data,
};

export const ButtonActions = Template.bind({});
ButtonActions.args = {
  search: true,
  enableCsvExport: true,
  enableCustomizeView: true,
  columns: sitcomColumns,
  data,
};

export const DarkModeButtonActions = DarkModeTemplateFactory();
DarkModeButtonActions.args = {
  search: true,
  enableCsvExport: true,
  enableCustomizeView: true,
  columns: sitcomColumns,
  data,
};

export const Pagination = Template.bind({});
Pagination.args = {
  search: true,
  enableCsvExport: true,
  enableCustomizeView: true,
  columns: sitcomColumns,
  data: paginatedData,
  paginate: true,
};

export const DarkModePagination = DarkModeTemplateFactory();
DarkModePagination.args = {
  search: true,
  enableCsvExport: true,
  enableCustomizeView: true,
  columns: sitcomColumns,
  data: paginatedData,
  paginate: true,
};

export const RightPagination = Template.bind({});
RightPagination.args = {
  search: true,
  enableCsvExport: true,
  enableCustomizeView: true,
  columns: sitcomColumns,
  data: paginatedData,
  paginate: true,
  paginateRight: true,
};

export const DarkModeRightPagination = DarkModeTemplateFactory();
DarkModeRightPagination.args = {
  search: true,
  enableCsvExport: true,
  enableCustomizeView: true,
  columns: sitcomColumns,
  data: paginatedData,
  paginate: true,
  paginateRight: true,
};

export const CustomComponent = Template.bind({});
CustomComponent.args = {
  search: true,
  enableCsvExport: true,
  enableCustomizeView: true,
  columns: sitcomColumns,
  data: customComponentData,
  paginate: true,
};

export const DarkModeCustomComponent = DarkModeTemplateFactory();
DarkModeCustomComponent.args = {
  search: true,
  enableCsvExport: true,
  enableCustomizeView: true,
  columns: sitcomColumns,
  data: customComponentData,
  paginate: true,
};

export const PipedColumnExampleMultiplyQtyByTwo = Template.bind({});
PipedColumnExampleMultiplyQtyByTwo.args = {
  columns: [
    {
      display: "Name",
      dataSelector: "name",
      uppercase: true,
      sortable: true,
      filterable: true,
      width: "",
      minWidth: "",
      maxWidth: "",
      pipe: (value) => value.toUpperCase(),
    },
    {
      display: "City",
      dataSelector: "city",
      uppercase: true,
      sortable: true,
      filterable: true,
      width: "",
      minWidth: "",
      maxWidth: "",
    },
    {
      display: "Company/Work",
      dataSelector: "company",
      uppercase: true,
      filterable: true,
      width: "",
      minWidth: "",
      maxWidth: "",
    },
    {
      display: "Country",
      dataSelector: "country",
      uppercase: true,
      sortable: true,
      filterable: false,
      width: "",
      minWidth: "",
      maxWidth: "",
    },
    {
      display: "Qty",
      dataSelector: "qty",
      uppercase: true,
      sortable: true,
      sortNumerically: true,
      filterable: true,
      width: "80px",
      minWidth: "80px",
      maxWidth: "80px",
      position: "right",
      pipe: (value) => value * 2,
    },
    {
      display: "State",
      dataSelector: "state",
      uppercase: true,
      sortable: false,
      filterable: true,
      width: "",
      minWidth: "",
      maxWidth: "",
      excludeFromCSV: true,
    },
  ],
  data,
};

const OverflowTableTemplate = (args) => ({
  components: {
    DTable,
    DBadge,
    DarkModeProvider,
  },
  setup() {
    return { args };
  },
  template: `
    <dark-mode-provider :dark-mode="args.darkMode">
  <d-table v-bind="args">
    <template v-slot:item.tags="item">
      <d-badge v-for="(tag, index) in item.tags" :key="index">
        {{tag}}
      </d-badge>
    </template>
  </d-table>
    </dark-mode-provider>
  `,
});

export const OverflowTable = OverflowTableTemplate.bind({});
OverflowTable.args = {
  columns: overflowColumns,
  paginate: true,
  data: overflowColumnsData,
  darkMode: false,
};

export const DarkModeOverflowTable = OverflowTableTemplate.bind({});
DarkModeOverflowTable.args = {
  columns: overflowColumns,
  paginate: true,
  data: overflowColumnsData,
  darkMode: true,
};

export const FixedColumnOverflowTable = OverflowTableTemplate.bind({});
FixedColumnOverflowTable.args = {
  columns: overflowFixedColumns,
  paginate: true,
  data: overflowColumnsData,
  darkMode: false,
};

export const FixedColumnOverflowTableWithCheckboxes =
  OverflowTableTemplate.bind({});
FixedColumnOverflowTableWithCheckboxes.args = {
  columns: overflowFixedColumns,
  paginate: true,
  data: overflowColumnsData,
  darkMode: false,
  showCheckboxes: true,
};
