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

const ExpandModeWithPlaceholderWhenNoSelectedRowTemplate = args => ({
  components: {
    DTable
  },
  setup() {
    return {args}
  },
  template: `
    <d-table v-bind="args">
      <template #no-expanded-row-content>
        Select a row on the left pane to see more details
      </template>
    </d-table>
  `
})

export const ExpandModeWithPlaceholderWhenNoSelectedRow = ExpandModeWithPlaceholderWhenNoSelectedRowTemplate.bind({})
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
  setup() {
    const columns = ref([
      {
        display: "Name",
        dataSelector: "Name",
        uppercase: true,
        sortable: true,
        filterable: true,
        width: "",
        minWidth: "",
        maxWidth: "",
      },
      {
        display: "Email",
        dataSelector: "Email",
        uppercase: true,
        filterable: true,
        width: "",
        minWidth: "",
        maxWidth: "",
      },
      {
        display: "Tenants",
        dataSelector: "Tenants",
        uppercase: true,
        sortable: true,
        filterable: true,
        width: "",
        minWidth: "",
        maxWidth: "",
      },
      {
        display: "Reg Date",
        dataSelector: "Date",
        uppercase: true,
        sortable: true,
        filterable: true,
        width: "",
        minWidth: "",
        maxWidth: "",
      },
      {
        display: "kyc/kyb status",
        dataSelector: "Kyc",
        uppercase: true,
        sortable: false,
        filterable: false,
        width: "",
        minWidth: "",
        maxWidth: "",
      },
      {
        display: "Action",
        dataSelector: "Action",
        uppercase: true,
        sortable: false,
        filterable: false,
        position: "right",
      },
    ]);
    const state = reactive({
      identities: [],
      data: [],
      per_page: 0,
      currentPage: 1,
      totalPages: 1,
    });
    onMounted(() => {
      const data = {
        data: [
          {
            id: 2554,
            name: "Test Test",
            email: "deposits.test@gmail.com",
            tenant: {
              name: "money",
            },
            personal_information: {
              first_name: "Test",
              middle_name: null,
              last_name: "Test",
              phone_number: "+1-3854234144",
              email: "deposits.test@gmail.com",
              address: "Test",
              status: "verified",
            },
            liveliness_detection: {
              id: 325,
              image_front:
                "https://api.files.deposits.dev/uploads/images/name-1686578167.",
              status: "pending",
            },
            document: [
              {
                id: 326,
                image_front:
                  "https://api.files.deposits.dev/uploads/images/photo-2022-05-31-09-54-14-1686578203.jpg",
                image_back:
                  "https://api.files.deposits.dev/uploads/images/photo-2022-05-31-09-54-14-1686578204.jpg",
                status: "active",
              },
            ],
            status: "active",
            created_at: "2023-05-10T11:13:15.000000Z",
          },
          {
            id: 2555,
            name: "Test Test",
            email: "qa.deposits@gmail.com1687853960700",
            tenant: {
              name: "money",
            },
            personal_information: {
              first_name: "Test",
              middle_name: null,
              last_name: "Test",
              phone_number: "+1-6157635478",
              email: "qa.deposits@gmail.com1687853960700",
              address: "Test",
              status: "verified",
            },
            liveliness_detection: {
              id: 321,
              image_front:
                "https://api.files.deposits.dev/uploads/images/name-1686408966.",
              status: "pending",
            },
            document: [
              {
                id: 322,
                image_front:
                  "https://api.files.deposits.dev/uploads/images/560a178f-c60d-4c11-b7aa-df33daa56303-1687349045.png",
                image_back:
                  "https://api.files.deposits.dev/uploads/images/0ceddce0-a1b8-4267-9f28-c7a9ce1e8b3c-1687349054.png",
                status: "active",
              },
            ],
            status: "active",
            created_at: "2023-05-10T13:54:51.000000Z",
          },
          {
            id: 2258,
            name: "william qa",
            email: "william@freezepointqa.com",
            tenant: {
              name: "money",
            },
            personal_information: {
              first_name: "william",
              middle_name: null,
              last_name: "qa",
              phone_number: "+1-555 555-5555",
              email: "william@freezepointqa.com",
              address: "Street 1",
              status: "inprogress",
            },
            liveliness_detection: {
              id: 228,
              image_front:
                "https://api.files.deposits.dev/uploads/images/name-1673437909.",
              status: "pending",
            },
            document: [
              {
                id: 229,
                image_front:
                  "https://api.files.deposits.dev/uploads/images/name-1673438000.",
                image_back: null,
                status: "completed",
              },
            ],
            status: "pending",
            created_at: "2023-01-11T11:46:05.000000Z",
          },
          {
            id: 1444,
            name: "Justin  Anton",
            email: "janton1@mail.com",
            tenant: {
              name: "money",
            },
            personal_information: {
              first_name: "Justin ",
              middle_name: null,
              last_name: "Anton",
              phone_number: "+13096207099",
              email: "janton1@mail.com",
              address: "1401 Royal Ave apt B ",
              status: "verified",
            },
            liveliness_detection: {
              id: 195,
              image_front:
                "https://api.client.wallet.swys.xyz/files/PL8CoSiARaaa9Ap0J2HdDTVLglyUnbopUvddBzySRnqui5Prnq2tOopmh7bvi57I.png",
              status: "completed",
            },
            document: [],
            status: "active",
            created_at: "2022-06-09T03:40:36.000000Z",
          },
          {
            id: 925,
            name: "Joseph Akintolayo",
            email: "Joseph.akintolayo@gmail.com",
            tenant: {
              name: "money",
            },
            personal_information: {
              first_name: "Joseph",
              middle_name: null,
              last_name: "Akintolayo",
              phone_number: "+12104879832",
              email: "Joseph.akintolayo@gmail.com",
              address: "1511 Clinton",
              status: "pending",
            },
            liveliness_detection: {
              id: 36,
              image_front:
                "https://api.client.wallet.deposits.dev/files/2nBlX6XDQxpHezsgA6DMeb0HjV2W58IwY8ejo4z3AH8PUiBulLEO96TNtrdcRp0l.png",
              status: "failed",
            },
            document: [],
            status: "active",
            created_at: "2021-11-30T00:18:56.000000Z",
          },
          {
            id: 945,
            name: "Nancy Akinkugbe",
            email: "nancy@renaissance.ng1688550068352",
            tenant: {
              name: "money",
            },
            personal_information: {
              first_name: "Nancy",
              middle_name: null,
              last_name: "Akinkugbe",
              phone_number: "+1-7798006712",
              email: "nancy@renaissance.ng1688550068352",
              address: "Location",
              status: "verified",
            },
            liveliness_detection: {
              id: 5,
              image_front:
                "https://api.client.wallet.deposits.dev/files/mUfYR5QNUXZKoraRSe1A9TYQuoDOscepnF67HkcDwHUsaY3L9ZCTS6uy7vUFgbvM.jpg",
              status: "failed",
            },
            document: [
              {
                id: 107,
                image_front:
                  "https://api.files.deposits.dev/uploads/images/cu4fxvnofvd-1660045305.jpg",
                image_back:
                  "https://api.files.deposits.dev/uploads/images/aamfl3gyjeb-1660045318.jpg",
                status: "active",
              },
              {
                id: 346,
                image_front:
                  "https://api.files.deposits.dev/uploads/images/img-4525-1688491706.png",
                image_back: null,
                status: "active",
              },
            ],
            status: "active",
            created_at: "2021-12-21T17:36:19.000000Z",
          },
          {
            id: 929,
            name: "Maxwell Case",
            email: "maxwell@deposits.com",
            tenant: {
              name: "money",
            },
            personal_information: {
              first_name: "Maxwell",
              middle_name: null,
              last_name: "Case",
              phone_number: "+18188005740",
              email: "maxwell@deposits.com",
              address: "5222 Belmont Ave",
              status: "verified",
            },
            liveliness_detection: {
              id: 3,
              image_front:
                "https://api.client.wallet.deposits.dev/files/tuqSkr8drfFX0P8wDJE5tRUitpqSLqPSJSA6ScQTWzL9l65aWNH82E1LAfRJiGVz.jpg",
              status: "failed",
            },
            document: [],
            status: "active",
            created_at: "2021-12-02T17:19:54.000000Z",
          },
          {
            id: 952,
            name: "William Iyomere",
            email: "esanjumi@hotmail.co.uk",
            tenant: {
              name: "money",
            },
            personal_information: {
              first_name: "William",
              middle_name: null,
              last_name: "Iyomere",
              phone_number: "+18030406538",
              email: "esanjumi@hotmail.co.uk",
              address: "321 road e close  house 1 festac town",
              status: "verified",
            },
            liveliness_detection: {
              id: 2,
              image_front:
                "https://api.client.wallet.deposits.dev/files/CgP9oxFZS36xfyqgpiVwVUuNiQ4KeIYK7idJvvQC7BUTy3l9R69HIjc2gZvgZpRb.png",
              status: "failed",
            },
            document: [],
            status: "active",
            created_at: "2022-01-05T14:35:56.000000Z",
          },
          {
            id: 998,
            name: "Taylor Mills",
            email: "taylormillsjr2@gmail.com",
            tenant: {
              name: "money",
            },
            personal_information: {
              first_name: "Taylor",
              middle_name: null,
              last_name: "Mills",
              phone_number: "+14438168593",
              email: "taylormillsjr2@gmail.com",
              address: "4416 Purple Martins Road  ",
              status: "verified",
            },
            liveliness_detection: {
              id: 10,
              image_front:
                "https://api.client.wallet.deposits.dev/files/iAtM9FO1tK9N28psCAmTAqGZ8XUWZxMYsJUwdp7Ccx11foEqiauO7aYAoPt3Kjg4.png",
              status: "failed",
            },
            document: [],
            status: "active",
            created_at: "2022-02-17T14:51:50.000000Z",
          },
          {
            id: 1008,
            name: "Ada William",
            email: "willspglobal@gmail.com",
            tenant: {
              name: "money",
            },
            personal_information: {
              first_name: "Ada",
              middle_name: null,
              last_name: "William",
              phone_number: "+16505130514",
              email: "willspglobal@gmail.com",
              address: "Texas chainsaw",
              status: "verified",
            },
            liveliness_detection: {
              id: 1,
              image_front:
                "https://api.client.wallet.deposits.dev/files/DbF7fFg7tuH5AFiFcq665yH5SsyqHNBHTZKzvr1q4KgAQTATrqO40MHMnpmBgyae.png",
              status: "failed",
            },
            document: [],
            status: "active",
            created_at: "2022-02-23T14:35:40.000000Z",
          },
          {
            id: 1026,
            name: "zachary hoffman",
            email: "bigstepperrz@gmail.com",
            tenant: {
              name: "money",
            },
            personal_information: {
              first_name: "zachary",
              middle_name: null,
              last_name: "hoffman",
              phone_number: null,
              email: "bigstepperrz@gmail.com",
              address: "7265 County Road u",
              status: "pending",
            },
            liveliness_detection: {
              id: 4,
              image_front:
                "https://api.client.wallet.deposits.dev/files/FZa2DKQ3jyfCLaQDNJb9o28RdbxBdK00ZFrpfIJXqB9AVAQl70iS18nNdX16wvTC.jpg",
              status: "failed",
            },
            document: [],
            status: "active",
            created_at: "2022-03-02T03:12:37.000000Z",
          },
          {
            id: 2488,
            name: "Eric McWinNEr",
            email: "mcwinnerwebdeveloper+3489347@gmail.com",
            tenant: {
              name: "money",
            },
            personal_information: {
              first_name: "Eric",
              middle_name: null,
              last_name: "McWinNEr",
              phone_number: "+1-2524196165",
              email: "mcwinnerwebdeveloper+3489347@gmail.com",
              address: null,
              status: "pending",
            },
            liveliness_detection: {
              id: 312,
              image_front:
                "https://api.files.deposits.dev/uploads/images/name-1681387311.",
              status: "pending",
            },
            document: [
              {
                id: 313,
                image_front:
                  "https://api.files.deposits.dev/uploads/images/name-1681387520.",
                image_back: null,
                status: "active",
              },
            ],
            status: "pending",
            created_at: "2023-04-13T11:48:48.000000Z",
          },
          {
            id: 1041,
            name: "Matthew Lavigne",
            email: "paytonrlaws@outlook.com",
            tenant: {
              name: "money",
            },
            personal_information: {
              first_name: "Matthew",
              middle_name: null,
              last_name: "Lavigne",
              phone_number: "+16178540879",
              email: "paytonrlaws@outlook.com",
              address: "10 w river pkwy ",
              status: "verified",
            },
            liveliness_detection: {
              id: 8,
              image_front:
                "https://api.client.wallet.deposits.dev/files/cNUr15H5U43HKYAJXwCF6qcWG49Q7Lj9CsnJLUfi1PXwJxJSL5TusgciyhsCbJxm.png",
              status: "failed",
            },
            document: [],
            status: "active",
            created_at: "2022-03-13T21:21:02.000000Z",
          },
          {
            id: 2489,
            name: "Ericko McWinNEr",
            email: "mcwinnerwebdeveloper+8958967856968598@gmail.com",
            tenant: {
              name: "money",
            },
            personal_information: {
              first_name: "Ericko",
              middle_name: null,
              last_name: "McWinNEr",
              phone_number: "+1-2524196165",
              email: "mcwinnerwebdeveloper+8958967856968598@gmail.com",
              address: "Gguiuugg",
              status: "in_progress",
            },
            liveliness_detection: {
              id: 314,
              image_front:
                "https://api.files.deposits.dev/uploads/images/name-1681388733.",
              status: "pending",
            },
            document: [
              {
                id: 315,
                image_front:
                  "https://api.files.deposits.dev/uploads/images/61718d57-b03f-4f4f-8649-09c3c586e2f6-1681413227.png",
                image_back: null,
                status: "active",
              },
            ],
            status: "pending",
            created_at: "2023-04-13T12:15:55.000000Z",
          },
          {
            id: 1042,
            name: "Thuy Walsh",
            email: "aabenadeola@yandex.com",
            tenant: {
              name: "money",
            },
            personal_information: {
              first_name: "Thuy",
              middle_name: null,
              last_name: "Walsh",
              phone_number: "+18125142332",
              email: "aabenadeola@yandex.com",
              address: "2023 Rockfield road  ",
              status: "verified",
            },
            liveliness_detection: {
              id: 6,
              image_front:
                "https://api.client.wallet.deposits.dev/files/XHchEGoPv2acQVxHszBYOs6IqmGbetjTkRU4XDsyqN62ZgPfR9PRqfIrwJnEimHy.png",
              status: "failed",
            },
            document: [],
            status: "active",
            created_at: "2022-03-13T21:57:44.000000Z",
          },
          {
            id: 1043,
            name: "Jacie Delahoussaye",
            email: "jaydel120390@gmail.com",
            tenant: {
              name: "money",
            },
            personal_information: {
              first_name: "Jacie",
              middle_name: null,
              last_name: "Delahoussaye",
              phone_number: "+13373515813",
              email: "jaydel120390@gmail.com",
              address: "408 bull tiger lane lot a",
              status: "verified",
            },
            liveliness_detection: {
              id: 7,
              image_front:
                "https://api.client.wallet.deposits.dev/files/JNQZuDntX54Yow9PruTFFLdyYOLT1A87e7whVADvXWvTj1tgQQA8zFNWxVLY8F7l.png",
              status: "failed",
            },
            document: [],
            status: "active",
            created_at: "2022-03-15T12:45:55.000000Z",
          },
          {
            id: 1046,
            name: "Cassandra Corbisiero",
            email: "Cassycorb@gmail.com",
            tenant: {
              name: "money",
            },
            personal_information: {
              first_name: "Cassandra",
              middle_name: null,
              last_name: "Corbisiero",
              phone_number: "+19412469997",
              email: "Cassycorb@gmail.com",
              address: "1157 Capricorn Blvd apt b1 ",
              status: "verified",
            },
            liveliness_detection: {
              id: 9,
              image_front:
                "https://api.client.wallet.deposits.dev/files/WZVxx7nnUmFwlgHp2ADWqyIe89OOjisXaYJ6PigN9vDFmsYZGczWLl7Hajw3LN0Z.png",
              status: "failed",
            },
            document: [],
            status: "active",
            created_at: "2022-03-21T03:12:33.000000Z",
          },
          {
            id: 1056,
            name: "ROMEL SHEPPARD",
            email: "Romelsheppard649072@gmail.com",
            tenant: {
              name: "money",
            },
            personal_information: {
              first_name: "ROMEL",
              middle_name: null,
              last_name: "SHEPPARD",
              phone_number: "+15109789857",
              email: "Romelsheppard649072@gmail.com",
              address: "897 55TH ST  APT B ",
              status: "verified",
            },
            liveliness_detection: {
              id: 11,
              image_front:
                "https://api.client.wallet.deposits.dev/files/FJDSrsmAYuYp5r7MoEtArtMxZ7179JebjMHKczHtrsbVrnWSew8FMFTxGaoZx9pq.png",
              status: "failed",
            },
            document: [],
            status: "active",
            created_at: "2022-03-24T17:16:38.000000Z",
          },
          {
            id: 1067,
            name: "Alexa Cottage",
            email: "hufinjcdydyg1399@gmail.com",
            tenant: {
              name: "money",
            },
            personal_information: {
              first_name: "Alexa",
              middle_name: null,
              last_name: "Cottage",
              phone_number: "+16468836426",
              email: "hufinjcdydyg1399@gmail.com",
              address: "7997 Independence Dr ",
              status: "verified",
            },
            liveliness_detection: {
              id: 12,
              image_front:
                "https://api.client.wallet.deposits.dev/files/QXAt8ALPVUxdugLfUBwSXXNLFmTu1Rj7aha7qPDipXdC0umEHJAItLlfKoAVA4UK.png",
              status: "failed",
            },
            document: [],
            status: "active",
            created_at: "2022-03-27T21:03:32.000000Z",
          },
          {
            id: 1087,
            name: "shania lynn",
            email: "shanialynn0609@gmail.com",
            tenant: {
              name: "money",
            },
            personal_information: {
              first_name: "shania",
              middle_name: null,
              last_name: "lynn",
              phone_number: "+18453130859",
              email: "shanialynn0609@gmail.com",
              address: "5 borden rd  ",
              status: "verified",
            },
            liveliness_detection: {
              id: 13,
              image_front:
                "https://api.client.wallet.deposits.dev/files/LUr7kgzHQi2VboU6Zy0OmXISkO4fWlPtu8yZm5ku0NMcONMVJGid3VZsGDNB6rBv.png",
              status: "failed",
            },
            document: [],
            status: "active",
            created_at: "2022-03-29T18:58:18.000000Z",
          },
        ],
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
          Date: moment(thisUser["created_at"]).format("MMM d, Y"),
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
    const columns = ref([
      {
        display: "ID",
        dataSelector: "ID",
        uppercase: true,
        sortable: true,
        filterable: true,
        sortNumerically: true,
        width: "",
        minWidth: "",
        maxWidth: "",
      },
      {
        display: "Tenants",
        dataSelector: "Tenants",
        uppercase: true,
        sortable: true,
        filterable: true,
        width: "",
        minWidth: "",
        maxWidth: "",
      },
      {
        display: "Email",
        dataSelector: "Email",
        uppercase: true,
        filterable: true,
        width: "",
        minWidth: "",
        maxWidth: "",
      },
      {
        display: "Created Date",
        dataSelector: "Date",
        uppercase: true,
        sortable: true,
        filterable: true,
        width: "",
        minWidth: "",
        maxWidth: "",
      },
      {
        display: "Action",
        dataSelector: "Action",
        uppercase: true,
        sortable: false,
        filterable: false,
        position: "right",
      },
    ]);

    const state = reactive({
      tenants: [],
      data: [],
      per_page: 10,
      currentPage: 1,
      totalPages: 1,
    });

    onMounted(() => {
      const data = {
        data: [
          {
            id: 6456789,
            name: "A new program",
            website: "http://somethingcom.com",
            contact_name: "Jonathan Doe",
            contact_email: "eapriok+6378639478@gmail.com",
            status: "active",
            created_at: "2022-07-03T21:05:12.000000Z",
          },
          {
            id: 109,
            name: "AfroTech",
            website: "https://afrotech.clm",
            contact_name: "Joseph A",
            contact_email: "joseph@renapay.com",
            status: "active",
            created_at: "2022-11-15T17:17:03.000000Z",
          },
          {
            id: 24,
            name: "AiBuy",
            website: "https://aibuy.io",
            contact_name: null,
            contact_email: null,
            status: "active",
            created_at: "2022-04-06T19:06:47.000000Z",
          },
          {
            id: 20,
            name: "aibuy-demo",
            website: "https://aibuy.com",
            contact_name: null,
            contact_email: null,
            status: "active",
            created_at: "2022-03-29T18:19:10.000000Z",
          },
          {
            id: 72,
            name: "Alias vel nihil haru",
            website: "https://www.naxunenucimy.mobi",
            contact_name: "Voluptas et dolor no",
            contact_email: "kibaso@mailinator.com",
            status: "active",
            created_at: "2022-07-15T13:08:41.000000Z",
          },
          {
            id: 30,
            name: "Anna Rogachyova",
            website: "https://aibuy.io",
            contact_name: null,
            contact_email: null,
            status: "active",
            created_at: "2022-04-08T12:46:21.000000Z",
          },
          {
            id: 58,
            name: "Another Team",
            website: "https://www.deposits.com",
            contact_name: "John Doe",
            contact_email: "william+01@deposits.com",
            status: "active",
            created_at: "2022-06-30T21:49:42.000000Z",
          },
          {
            id: 11,
            name: "Ben smith",
            website: "http://www.facebook.com",
            contact_name: null,
            contact_email: "",
            status: "active",
            created_at: "2021-10-28T11:50:02.000000Z",
          },
          {
            id: 51,
            name: "Benode",
            website: "https://dsdsdsd.dsd",
            contact_name: "John Doe",
            contact_email: "b@b.com",
            status: "active",
            created_at: "2022-06-26T15:03:27.000000Z",
          },
          {
            id: 49,
            name: "Bernode limited",
            website: "https://bernode.com",
            contact_name: "Bernar",
            contact_email: "bernard@gmail.com",
            status: "active",
            created_at: "2022-06-26T14:17:07.000000Z",
          },
        ],
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
          Tenants: thisTenant["name"],
          Email: thisTenant["contact_email"],
          Date: moment(thisTenant["created_at"]).format("MMM DD, YYYY"),
          Action: thisTenant["id"],
          route: "/tenant/" + thisTenant["id"] + "/overview",
        };
        state.data.push(tenantInfo);
      }
    });

    return { columns, state };
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
