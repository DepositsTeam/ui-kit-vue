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
  template: \`<d-table v-bind="args" />\`,
});

const ExtraHeadingsTemplate = (args) => ({
  components: { DTable, DBadge, DAutoLayout, DSelect },
  setup() {
    return { args };
  },
  template: \`
    <d-table v-bind="args">
      <template #table-header-left>
          <d-select size="large" placeholder="Last 7 days" width="200px" />
          <d-select size="large" placeholder="By Events" width="200px" />
        <d-select size="large" placeholder="All environments" width="200px" />
      </template>
    </d-table>
  \`,
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
  template: \`
    <dark-mode-provider :dark-mode="true">
    <d-table v-bind="args" />
    </dark-mode-provider>
    \`,
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
  template: \`
    <dark-mode-provider :dark-mode="args.darkMode">
  <d-table v-bind="args">
    <template v-slot:item.tags="item">
      <d-badge v-for="(tag, index) in item.tags" :key="index">
        {{tag}}
      </d-badge>
    </template>
  </d-table>
    </dark-mode-provider>
  \`,
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
  template: \`<d-table v-bind="args" @page-updated="alertPageChange" />\`,
});

export const AsyncPaginationTable = AsyncPaginationTableTemplate.bind({});
AsyncPaginationTable.args = {
  columns: sitcomColumns,
  data,
  paginate: true,
  asyncPagination: true,
  totalPages: 7,
};
`,locationsMap:{"extra-headings":{startLoc:{col:30,line:104},endLoc:{col:2,line:118},startBody:{col:30,line:104},endBody:{col:2,line:118}},default:{startLoc:{col:17,line:96},endLoc:{col:2,line:102},startBody:{col:17,line:96},endBody:{col:2,line:102}},"change-color-for-row":{startLoc:{col:17,line:96},endLoc:{col:2,line:102},startBody:{col:17,line:96},endBody:{col:2,line:102}},"dark-mode-default":{startLoc:{col:31,line:163},endLoc:{col:56,line:163},startBody:{col:31,line:163},endBody:{col:56,line:163}},"expand-mode":{startLoc:{col:17,line:96},endLoc:{col:2,line:102},startBody:{col:17,line:96},endBody:{col:2,line:102}},"expand-mode-with-specified-expanded-columns":{startLoc:{col:17,line:96},endLoc:{col:2,line:102},startBody:{col:17,line:96},endBody:{col:2,line:102}},search:{startLoc:{col:17,line:96},endLoc:{col:2,line:102},startBody:{col:17,line:96},endBody:{col:2,line:102}},"dark-mode-search":{startLoc:{col:30,line:192},endLoc:{col:55,line:192},startBody:{col:30,line:192},endBody:{col:55,line:192}},checkboxes:{startLoc:{col:17,line:96},endLoc:{col:2,line:102},startBody:{col:17,line:96},endBody:{col:2,line:102}},"dark-mode-checkboxes":{startLoc:{col:34,line:207},endLoc:{col:59,line:207},startBody:{col:34,line:207},endBody:{col:59,line:207}},"button-actions":{startLoc:{col:17,line:96},endLoc:{col:2,line:102},startBody:{col:17,line:96},endBody:{col:2,line:102}},"dark-mode-button-actions":{startLoc:{col:37,line:224},endLoc:{col:62,line:224},startBody:{col:37,line:224},endBody:{col:62,line:224}},pagination:{startLoc:{col:17,line:96},endLoc:{col:2,line:102},startBody:{col:17,line:96},endBody:{col:2,line:102}},"dark-mode-pagination":{startLoc:{col:34,line:243},endLoc:{col:59,line:243},startBody:{col:34,line:243},endBody:{col:59,line:243}},"right-pagination":{startLoc:{col:17,line:96},endLoc:{col:2,line:102},startBody:{col:17,line:96},endBody:{col:2,line:102}},"dark-mode-right-pagination":{startLoc:{col:39,line:264},endLoc:{col:64,line:264},startBody:{col:39,line:264},endBody:{col:64,line:264}},"custom-component":{startLoc:{col:17,line:96},endLoc:{col:2,line:102},startBody:{col:17,line:96},endBody:{col:2,line:102}},"dark-mode-custom-component":{startLoc:{col:39,line:285},endLoc:{col:64,line:285},startBody:{col:39,line:285},endBody:{col:64,line:285}},"piped-column-example-multiply-qty-by-two":{startLoc:{col:17,line:96},endLoc:{col:2,line:102},startBody:{col:17,line:96},endBody:{col:2,line:102}},"overflow-table":{startLoc:{col:30,line:366},endLoc:{col:2,line:386},startBody:{col:30,line:366},endBody:{col:2,line:386}},"dark-mode-overflow-table":{startLoc:{col:30,line:366},endLoc:{col:2,line:386},startBody:{col:30,line:366},endBody:{col:2,line:386}},"fixed-column-overflow-table":{startLoc:{col:30,line:366},endLoc:{col:2,line:386},startBody:{col:30,line:366},endBody:{col:2,line:386}},"fixed-column-overflow-table-with-checkboxes":{startLoc:{col:30,line:366},endLoc:{col:2,line:386},startBody:{col:30,line:366},endBody:{col:2,line:386}},"async-pagination-table":{startLoc:{col:37,line:422},endLoc:{col:2,line:437},startBody:{col:37,line:422},endBody:{col:2,line:437}}}}},components:{DBadge:m,DAutoLayout:S},title:"Table",component:r,argTypes:{showCheckboxes:{control:{type:"boolean"}},itemsPerPage:{control:{type:"text"}},paginate:{control:{type:"boolean"}},paginateRight:{control:{type:"boolean"}},currentPage:{control:{type:"text"}},currentPageSiblings:{control:{type:"text"}},asyncPagination:{control:{type:"boolean"}},columns:{control:{type:"object"}},data:{control:{type:"object"}},enableCsvExport:{control:{type:"boolean"}},exportCsvBtn:{control:{type:"object"}},customizeViewBtn:{control:{type:"object"}},generatedCsvName:{control:{type:"text"}},enableCustomizeView:{control:{type:"boolean"}},loading:{control:{type:"boolean"}},search:{control:{type:"boolean"}},searchPlaceholder:{control:{type:"text"}},buttonActionsAlignment:{control:{type:"select"},options:["left","right"],default:"left"},searchAlignment:{control:{type:"select"},options:["left","right"],default:"left"},smartColor:{control:{type:"color"}},enableRowHoverCursor:{control:{type:"boolean"}},expandMode:{control:{type:"boolean"}}}},n=o(a=>({components:{DTable:r},setup(){return{args:a}},template:'<d-table v-bind="args" />'}),"Template"),w=o(a=>({components:{DTable:r,DBadge:m,DAutoLayout:S,DSelect:g},setup(){return{args:a}},template:`
    <d-table v-bind="args">
      <template #table-header-left>
          <d-select size="large" placeholder="Last 7 days" width="200px" />
          <d-select size="large" placeholder="By Events" width="200px" />
        <d-select size="large" placeholder="All environments" width="200px" />
      </template>
    </d-table>
  `}),"ExtraHeadingsTemplate"),f=w.bind({});f.args={columns:t,data:e,enableCsvExport:!0,enableCustomizeView:!0};const d=o(a=>({components:{DTable:r,DarkModeProvider:u},setup(){return{args:a}},template:`
    <dark-mode-provider :dark-mode="true">
    <d-table v-bind="args" />
    </dark-mode-provider>
    `}),"DarkModeTemplate"),y=o(()=>{const a=d.bind({});return a.decorators=[()=>({template:'<div style="padding: 3em; background: #121A26;"><story /></div>'})],a},"DarkModeTemplateFactory"),k=n.bind({});k.args={columns:t,data:e};const M=n.bind({});M.args={columns:t,data:C};const B=y();B.args={columns:t,data:e};const N=n.bind({});N.args={data:e,columns:t,expandMode:!0,paginate:!0};const v=n.bind({});v.args={data:e,columns:t,expandMode:!0,expandedColumns:["name","city"]};const Y=n.bind({});Y.args={search:!0,data:e,columns:t};const D=y();D.args={search:!0,columns:t,data:e};const P=n.bind({});P.args={search:!0,columns:t,data:e,showCheckboxes:!0};const H=y();H.args={search:!0,showCheckboxes:!0,columns:t,data:e};const J=n.bind({});J.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:t,data:e};const W=y();W.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:t,data:e};const L=n.bind({});L.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:t,data:i,paginate:!0};const A=y();A.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:t,data:i,paginate:!0};const T=n.bind({});T.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:t,data:i,paginate:!0,paginateRight:!0};const R=y();R.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:t,data:i,paginate:!0,paginateRight:!0};const F=n.bind({});F.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:t,data:h,paginate:!0};const O=y();O.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:t,data:h,paginate:!0};const I=n.bind({});I.args={columns:[{display:"Name",dataSelector:"name",uppercase:!0,sortable:!0,filterable:!0,width:"",minWidth:"",maxWidth:"",pipe:a=>a.toUpperCase()},{display:"City",dataSelector:"city",uppercase:!0,sortable:!0,filterable:!0,width:"",minWidth:"",maxWidth:""},{display:"Company/Work",dataSelector:"company",uppercase:!0,filterable:!0,width:"",minWidth:"",maxWidth:""},{display:"Country",dataSelector:"country",uppercase:!0,sortable:!0,filterable:!1,width:"",minWidth:"",maxWidth:""},{display:"Qty",dataSelector:"qty",uppercase:!0,sortable:!0,sortNumerically:!0,filterable:!0,width:"80px",minWidth:"80px",maxWidth:"80px",position:"right",pipe:a=>a*2},{display:"State",dataSelector:"state",uppercase:!0,sortable:!1,filterable:!0,width:"",minWidth:"",maxWidth:"",excludeFromCSV:!0}],data:e};const s=o(a=>({components:{DTable:r,DBadge:m,DarkModeProvider:u},setup(){return{args:a}},template:`
    <dark-mode-provider :dark-mode="args.darkMode">
  <d-table v-bind="args">
    <template v-slot:item.tags="item">
      <d-badge v-for="(tag, index) in item.tags" :key="index">
        {{tag}}
      </d-badge>
    </template>
  </d-table>
    </dark-mode-provider>
  `}),"OverflowTableTemplate"),b=s.bind({});b.args={columns:p,paginate:!0,data:c,darkMode:!1};const E=s.bind({});E.args={columns:p,paginate:!0,data:c,darkMode:!0};const V=s.bind({});V.args={columns:q,paginate:!0,data:c,darkMode:!1};const z=s.bind({});z.args={columns:q,paginate:!0,data:c,darkMode:!1,showCheckboxes:!0};const j=o(a=>({components:{DTable:r},setup(){return{args:a}},methods:{alertPageChange(l){alert("The page changed and the new page is "+l+". I can do an ajax call to get this page's content.")}},template:'<d-table v-bind="args" @page-updated="alertPageChange" />'}),"AsyncPaginationTableTemplate"),G=j.bind({});G.args={columns:t,data:e,paginate:!0,asyncPagination:!0,totalPages:7};const Z=["ExtraHeadings","Default","ChangeColorForRow","DarkModeDefault","ExpandMode","ExpandModeWithSpecifiedExpandedColumns","Search","DarkModeSearch","Checkboxes","DarkModeCheckboxes","ButtonActions","DarkModeButtonActions","Pagination","DarkModePagination","RightPagination","DarkModeRightPagination","CustomComponent","DarkModeCustomComponent","PipedColumnExampleMultiplyQtyByTwo","OverflowTable","DarkModeOverflowTable","FixedColumnOverflowTable","FixedColumnOverflowTableWithCheckboxes","AsyncPaginationTable"];export{G as AsyncPaginationTable,J as ButtonActions,M as ChangeColorForRow,P as Checkboxes,F as CustomComponent,W as DarkModeButtonActions,H as DarkModeCheckboxes,O as DarkModeCustomComponent,B as DarkModeDefault,E as DarkModeOverflowTable,A as DarkModePagination,R as DarkModeRightPagination,D as DarkModeSearch,k as Default,N as ExpandMode,v as ExpandModeWithSpecifiedExpandedColumns,f as ExtraHeadings,V as FixedColumnOverflowTable,z as FixedColumnOverflowTableWithCheckboxes,b as OverflowTable,L as Pagination,I as PipedColumnExampleMultiplyQtyByTwo,T as RightPagination,Y as Search,Z as __namedExportsOrder,X as default};
//# sourceMappingURL=DTable.stories-76d42680.js.map