import DTable from "./DTable.vue";
import {
  DTooltip,
  DBadge,
  DSelect,
  DButton,
  DMenu,
  DTableCellText,
  DBox,
  DText,
  EyeFilledIcon,
} from "../main";
import {
  baseData,
  paginatedData,
  largePaginatedData,
  customComponentData,
  customRowData,
} from "./data/sitcom-data";
import {
  actionSitcomsTable,
  fixedActionsTable,
  overflowColumns,
  overflowFixedColumns,
  sitcomColumns,
} from "./data/columns";
import DarkModeProvider from "../providers/DarkModeProvider.vue";
import DAutoLayout from "../d-auto-layout/DAutoLayout.vue";
import { overflowColumnsData } from "./data/data";
import { onMounted, reactive, ref } from "vue";
import moment from "moment";
import {
  sampleColumn1,
  sampleColumn2,
  sampleData1,
  sampleData2,
} from "@/d-table/data/sampleData";

export default {
  components: { DTableCellText, DBadge, DAutoLayout },
  title: "Table",
  component: DTable,
  argTypes: {
    showCheckboxes: {
      control: { type: "boolean" },
    },
    itemsPerPage: {
      control: { type: "text" },
    },
    showPaginationPerPage: {
      control: { type: "boolean" },
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
    loaderType: {
      control: { type: "select" },
      options: ["ring", "equalizer", "ringed-circle"],
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
    asyncSearch: {
      control: { type: "boolean" },
    },
    emptyTableText: {
      control: { type: "text" },
      default: "No data available",
    },
  },
};

const Template = (args) => ({
  components: { DTable },
  setup() {
    return { args };
  },
  template: `
    <d-table v-bind="args" />`,
});

const RowClickedTemplate = (args) => ({
  components: { DTable },
  setup() {
    return { args };
  },
  methods: {
    alertName: function (row) {
      alert(`The name on the row clicked is: ${row.name}`);
    },
  },
  template: `
    <d-table @row-clicked="alertName" v-bind="args" />`,
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
  data: paginatedData,
  enableCsvExport: true,
  enableCustomizeView: true,
  paginate: true,
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
  data: baseData,
};

export const ChangeColorForRow = Template.bind({});
ChangeColorForRow.args = {
  columns: sitcomColumns,
  data: customRowData,
};

export const DarkModeDefault = DarkModeTemplateFactory();
DarkModeDefault.args = {
  columns: sitcomColumns,
  data: baseData,
};

export const RowClicked = RowClickedTemplate.bind({});
RowClicked.args = {
  columns: sitcomColumns,
  data: baseData,
};

export const ExpandMode = Template.bind({});
ExpandMode.args = {
  data: baseData,
  columns: sitcomColumns,
  expandMode: true,
  paginate: true,
};

export const ExpandModeWithoutHeader = Template.bind({});
ExpandModeWithoutHeader.args = {
  data: baseData,
  columns: sitcomColumns,
  expandMode: true,
  paginate: true,
  hideExpandModeHeader: true,
};

const ExpandModeWithPlaceholderWhenNoSelectedRowTemplate = (args) => ({
  components: {
    DTable,
  },
  setup() {
    return { args };
  },
  template: `
    <d-table v-bind="args">
      <template #no-expanded-row-content>
        Select a row on the left pane to see more details
      </template>
    </d-table>
  `,
});

export const ExpandModeWithPlaceholderWhenNoSelectedRow =
  ExpandModeWithPlaceholderWhenNoSelectedRowTemplate.bind({});
ExpandModeWithPlaceholderWhenNoSelectedRow.args = {
  data: baseData,
  columns: sitcomColumns,
  expandMode: true,
  paginate: true,
  hideExpandModeHeader: true,
};
export const ExpandModeWithSpecifiedExpandedColumns = Template.bind({});
ExpandModeWithSpecifiedExpandedColumns.args = {
  data: baseData,
  columns: sitcomColumns,
  expandMode: true,
  expandedColumns: ["name", "city"],
};

export const Search = Template.bind({});
Search.args = {
  search: true,
  data: baseData,
  columns: sitcomColumns,
};

const AsyncSearchTemplate = (args) => ({
  components: {
    DTable,
  },
  methods: {
    handleSearch: function (text) {
      alert(`I will search for ${text} from an API`);
    },
  },
  setup() {
    return { args };
  },
  template: `
    <d-table 
      v-bind="args"
      @search="handleSearch"
    />
  `,
});

export const AsyncSearch = AsyncSearchTemplate.bind({});
AsyncSearch.args = {
  search: true,
  data: baseData,
  columns: sitcomColumns,
  asyncSearch: true,
};

export const DarkModeSearch = DarkModeTemplateFactory();
DarkModeSearch.args = {
  search: true,
  columns: sitcomColumns,
  data: baseData,
};

export const Checkboxes = Template.bind({});
Checkboxes.args = {
  columns: sitcomColumns,
  data: baseData,
  showCheckboxes: true,
};

export const DarkModeCheckboxes = DarkModeTemplateFactory();
DarkModeCheckboxes.args = {
  showCheckboxes: true,
  columns: sitcomColumns,
  data: baseData,
};

export const CustomizeView = Template.bind({});
CustomizeView.args = {
  columns: sitcomColumns,
  data: baseData,
  enableCustomizeView: true,
};

export const CSVExport = Template.bind({});
CSVExport.args = {
  columns: sitcomColumns,
  data: baseData,
  enableCsvExport: true,
  buttonActionsAlignment: "right",
};

const AsyncCSVExportTemplate = (args) => ({
  components: {
    DTable,
  },
  setup() {
    return { args };
  },
  methods: {
    alertStuff: function () {
      alert("Downloading CSV...");
    },
  },
  template: `
    <d-table @download-csv="alertStuff" v-bind="args" />
  `,
});

const AsyncCSVURLExportTemplate = (args) => ({
  components: {
    DTable,
  },
  setup() {
    return { args };
  },
  template: `
    <d-table v-bind="args" />
  `,
});
export const AsyncCSVURLExport = AsyncCSVURLExportTemplate.bind({});
AsyncCSVURLExport.args = {
  columns: sitcomColumns,
  data: baseData,
  enableCsvExport: true,
  asyncCSVExport: true,
  exportCsvUrl:
    "https://www.stats.govt.nz/assets/Uploads/Business-employment-data/Business-employment-data-June-2023-quarter/Download-data/business-employment-data-june-2023-quarter.zip",
};

export const AsyncCSVExport = AsyncCSVExportTemplate.bind({});
AsyncCSVExport.args = {
  columns: sitcomColumns,
  data: baseData,
  enableCsvExport: true,
  asyncCSVExport: true,
};

export const Loading = Template.bind({});
Loading.args = {
  columns: sitcomColumns,
  data: baseData,
  loading: true,
};

export const ButtonActions = Template.bind({});
ButtonActions.args = {
  enableCsvExport: true,
  enableCustomizeView: true,
  columns: sitcomColumns,
  data: baseData,
};

export const EmptyTableData = Template.bind({});
EmptyTableData.args = {
  search: true,
  enableCsvExport: true,
  enableCustomizeView: true,
  columns: sitcomColumns,
  data: [],
};

const EmptyTableSlotTemplate = (args) => ({
  components: {
    DTable,
    DAutoLayout,
    DText,
    DButton,
  },
  setup() {
    return { args };
  },
  template: `
    <d-table v-bind="args">
      <template #empty-table-content>
        <d-auto-layout margin-y="1rem" direction="vertical" item-spacing="6px" alignment="center">
          <d-text font-face="heroNew" font-weight="500" my0>No payments yet</d-text>
          <d-text scale="subhead" font-face="heroNew" my0 color="#6D7786">You haven’t made any transfer yet.
            Your transfers will show up here once you have any.</d-text>
          <d-auto-layout margin-top="1rem">
            <d-button color-scheme="primary" size="medium">Send money</d-button>
            <d-button color-scheme="outline" size="medium">Pay a bill</d-button>
          </d-auto-layout>
        </d-auto-layout>
      </template>
    </d-table>
  `,
});

export const EmptyTableCustomSlot = EmptyTableSlotTemplate.bind({});
EmptyTableCustomSlot.args = {
  search: true,
  enableCsvExport: true,
  enableCustomizeView: true,
  columns: sitcomColumns,
  data: [],
};

export const DarkModeButtonActions = DarkModeTemplateFactory();
DarkModeButtonActions.args = {
  search: true,
  enableCsvExport: true,
  enableCustomizeView: true,
  columns: sitcomColumns,
  data: baseData,
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

export const MassiveDataPagination = Template.bind({});
MassiveDataPagination.args = {
  search: true,
  enableCsvExport: true,
  enableCustomizeView: true,
  columns: sitcomColumns,
  paginate: true,
  data: largePaginatedData,
};

export const DarkModePagination = DarkModeTemplateFactory();
DarkModePagination.args = {
  search: true,
  enableCsvExport: true,
  enableCustomizeView: true,
  columns: sitcomColumns,
  data: largePaginatedData,
  paginate: true,
};

export const RightPagination = Template.bind({});
RightPagination.args = {
  search: true,
  enableCsvExport: true,
  enableCustomizeView: true,
  columns: sitcomColumns,
  data: largePaginatedData,
  paginate: true,
  paginateRight: true,
};

export const DarkModeRightPagination = DarkModeTemplateFactory();
DarkModeRightPagination.args = {
  search: true,
  enableCsvExport: true,
  enableCustomizeView: true,
  columns: sitcomColumns,
  data: largePaginatedData,
  paginate: true,
  paginateRight: true,
};

const CustomComponentTemplate = (args) => ({
  components: {
    DTable,
    DButton,
    DBadge,
  },
  methods: {
    deleteRow: function (alerted) {
      alert(alerted);
    },
  },

  setup() {
    return { args };
  },
  template: `
    <d-table v-bind="args">
      <template v-slot:item.state="row">
        <d-badge>{{row.state}}</d-badge>
      </template>
      
      <template v-slot:item.action="row">
        <d-button size="medium" @click="deleteRow(row.uuuid)">Delete row</d-button>
      </template>
      
    </d-table>
  `,
});

export const CustomComponent = CustomComponentTemplate.bind({});
CustomComponent.args = {
  columns: [
    ...sitcomColumns,
    {
      dataSelector: "action",
      display: "Action",
    },
  ],
  data: customComponentData,
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
      display: "No of characters in City",
      dataSelector: "non_existent_and_not_necessary",
      pipe: (value, row) => row.city.length,
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
  data: baseData,
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
          {{ tag }}
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

const AsyncPaginationTableTemplate = (args) => ({
  components: { DTable },
  setup() {
    return { args };
  },
  methods: {
    alertPageChange(page) {
      console.log(page);
      alert(
        "The page changed and the new page is " +
          page +
          ". I can do an ajax call to get this page's content."
      );
    },
  },
  template: `
    <d-table v-bind="args" @page-updated="alertPageChange" />`,
});

export const AsyncPaginationTable = AsyncPaginationTableTemplate.bind({});
AsyncPaginationTable.args = {
  columns: sitcomColumns,
  data: paginatedData,
  paginate: true,
  asyncPagination: true,
  totalPages: 7,
};

const ActionSitcomsTemplate = (args) => ({
  components: {
    DTable,
    DMenu,
    DButton,
  },
  setup() {
    return { args };
  },
  methods: {
    handleRowClick: () => {
      alert("Row was clicked but not button");
    },
  },
  template: `
    <d-table @row-clicked="handleRowClick" v-bind="args">
    <template v-slot:item.actions="item">
      <d-menu :options="['Fintech', 'UI Kit', 'Finance', 'Identity' ]">
        <d-button size="medium">...</d-button>
      </d-menu>
    </template>
    </d-table>
  `,
});

export const ActionSitcomsTable = ActionSitcomsTemplate.bind({});
ActionSitcomsTable.args = {
  columns: actionSitcomsTable,
  data: paginatedData,
};

export const FixedActionSitcomsTable = ActionSitcomsTemplate.bind({});
FixedActionSitcomsTable.args = {
  columns: fixedActionsTable,
  data: paginatedData,
};

const TooltipTableTemplate = (args) => ({
  components: {
    DTable,
    DTooltip,
    DBadge,
    DTableCellText,
  },
  setup() {
    return { args };
  },
  template: `
    <d-table v-bind="args">
    <template v-slot:item.tags="item">
      <d-badge v-for="(tag, index) in item.tags" :key="index">
        {{ tag }}
      </d-badge>
    </template>
    <template v-slot:item.customer_email="item">
      <d-tooltip :tooltip="item.customer_email">
        <d-table-cell-text>{{item.customer_email}}</d-table-cell-text>
      </d-tooltip>
    </template>
    <template v-slot:item.customer_phone="item">
      <d-tooltip :tooltip="item.customer_phone">
        <d-table-cell-text>{{item.customer_phone}}</d-table-cell-text>
      </d-tooltip>
    </template>
    </d-table>
  `,
});

export const FixedTooltipTable = TooltipTableTemplate.bind({});
FixedTooltipTable.args = {
  columns: overflowFixedColumns,
  paginate: true,
  data: overflowColumnsData,
  darkMode: false,
};

const AsyncTableUpdateTemplate = (args) => ({
  components: {
    DTable,
  },
  methods: {
    tableUpdate: function (payload) {
      alert(
        `The current page is ${payload.page} and the search value is ${
          payload.search
        }. The returned payload is ${JSON.stringify(payload)}`
      );
    },
    pageUpdate: function (page) {
      console.log("Pagination changed", page);
    },
    searchUpdate: function (search) {
      console.log("Search changed", search);
    },
  },
  setup() {
    return { args };
  },
  template: ` <d-table v-bind="args" @page-updated="pageUpdate" @search="searchUpdate" @async-table-update="tableUpdate" />`,
});

export const MobileColumns = Template.bind({});
MobileColumns.args = {
  columns: sitcomColumns,
  data: baseData,
  mobileColumns: ["name", "city"],
};

export const AsyncTableUpdate = AsyncTableUpdateTemplate.bind({});
AsyncTableUpdate.args = {
  columns: sitcomColumns,
  data: baseData,
  asyncPagination: true,
  asyncSearch: true,
  totalPages: 49,
  paginate: true,
  search: true,
};

export const TestTableTemplate = (args) => ({
  components: {
    DTable,
    DBox,
    DBadge,
    DButton,
  },
  methods: {
    sort: function (value) {
      console.log(value);
    },
  },
  setup() {
    const columns = ref(sampleColumn1);
    const state = reactive({
      identities: [],
      data: [],
      per_page: 0,
      currentPage: 1,
      totalPages: 1,
    });
    onMounted(() => {
      const data = {
        data: sampleData1,
        links: {
          first:
            "https://api.ghost.deposits.dev/api/v1/user/get-identities?page=1",
          last: "https://api.ghost.deposits.dev/api/v1/user/get-identities?page=13",
          prev: null,
          next: "https://api.ghost.deposits.dev/api/v1/user/get-identities?page=2",
        },
        meta: {
          current_page: 1,
          from: 1,
          last_page: 13,
          path: "https://api.ghost.deposits.dev/api/v1/user/get-identities",
          per_page: "20",
          to: 20,
          total: 243,
        },
      };
      state.identities = data.data;
      if (data.data.length == 0) {
        state.data = [];
      }
      state.currentPage = data.meta.current_page;
      state.totalPages = data.meta.last_page;
      for (let i = 0; i < data.data.length; i++) {
        const thisUser = data.data[i];
        let status = "pending";
        let tenantName = "";
        if (thisUser["tenant"] && thisUser["tenant"]["name"]) {
          tenantName = thisUser["tenant"]["name"];
        }
        if (
          thisUser["personal_information"] &&
          thisUser["personal_information"]["name"]
        ) {
          status = thisUser["personal_information"]["status"];
        }

        let userInfo = {
          Name: thisUser["name"],
          Tenants: tenantName,
          Email: thisUser["email"],
          Date: moment(thisUser["created_at"]).format("MMM DD, Y"),
          Action: thisUser["id"],
          Kyc: status,
          route: "/identity/" + thisUser["id"],
        };
        state.data.push(userInfo);
      }
    });
    return { args, columns, state };
  },
  template: `
    <d-table
      v-bind="args"
      :columns="columns"
      :data="state.data"
      :enable-csv-export="true"
      :enable-customize-view="true"
      :paginate="true"
      :async-pagination="true"
      :search="true"
      :show-checkboxes="true"
      padding="none"
      paginate-right
      searchPlaceholder="Search entities"
      :total-pages="state.totalPages"
      :current-page="state.currentPage"
      async-sort
      @sort="sort"
    >
    <template v-slot:item.Kyc="item">
      <d-box
        align-items="center"
        display="inline-flex"
        text-decoration="none"
      >
        <d-badge
          :subtle="true"
          color-scheme="red"
          size="medium"
          text="failed"
        />
      </d-box>
    </template>
    <template v-slot:item.Action="item">
      <d-box
        is="a"
        :to="{ name: 'Identity', params: { id: item.Action } }"
        align-items="center"
        display="inline-flex"
        text-decoration="none"
      >
        <d-button
          responsive
          size="medium"
          text="Manual verify"
        ></d-button>
      </d-box>
    </template>
    </d-table>
  `,
});

export const TestTableTwo = (args) => ({
  components: {
    DTable,
    DBox,
    DBadge,
    DButton,
    DText,
    EyeFilledIcon,
  },
  setup() {
    const columns = ref(sampleColumn2);

    const state = reactive({
      tenants: [],
      data: [],
      per_page: 10,
      currentPage: 1,
      totalPages: 1,
    });

    onMounted(() => {
      const data = {
        data: sampleData2,
        links: {
          first:
            "https://api.ghost.deposits.dev/api/v1/user/get-tenants?page=1",
          last: "https://api.ghost.deposits.dev/api/v1/user/get-tenants?page=17",
          prev: null,
          next: "https://api.ghost.deposits.dev/api/v1/user/get-tenants?page=2",
        },
        meta: {
          current_page: 1,
          from: 1,
          last_page: 17,
          path: "https://api.ghost.deposits.dev/api/v1/user/get-tenants",
          per_page: 10,
          to: 10,
          total: 170,
        },
      };

      state.data = [];
      state.tenants = data.data;
      if (data.data.length == 0) {
        state.data = [];
      }
      state.currentPage = data.meta.current_page;
      state.totalPages = data.meta.last_page;
      for (let i = 0; i < data.data.length; i++) {
        const thisTenant = data.data[i];

        let tenantInfo = {
          ID: thisTenant["id"],
          currency: `$${Math.floor(Math.random() * (100 - 20) + 20)}`,
          Tenants: thisTenant["name"],
          Email: thisTenant["contact_email"],
          Date: moment(thisTenant["created_at"]).format("MMM DD, YYYY"),
          Action: thisTenant["id"],
          route: "/tenant/" + thisTenant["id"] + "/overview",
        };
        state.data.push(tenantInfo);
      }
    });

    return { columns, state, args };
  },
  template: `
  <d-table
            :columns="columns"
            :data="state.data"
            :enable-csv-export="true"
            :enable-customize-view="true"
            :paginate="true"
            :search="true"
            :show-checkboxes="true"
            padding="none"
            paginate-right
            searchPlaceholder="Search tenant"
            :total-pages="state.totalPages"
            :current-page="state.currentPage"
            :async-pagination="true"
            
          >
            <template v-slot:item.Action="item">
              <d-box
                is="a"
                :to="{ name: 'TenantOverview', params: { id: item.Action } }"
                align-items="center"
                class="text-cyan-500"
                display="inline-flex"
                text-decoration="none"
              >
                <eye-filled-icon height="18px" width="18px" />
                <d-text
                  class="text-cyan-500"
                  font-face="circularSTD"
                  margin-left="4px"
                  my0
                  scale="p-16"
                >
                  View details
                </d-text>
              </d-box>
            </template>
          </d-table>
  `,
});
