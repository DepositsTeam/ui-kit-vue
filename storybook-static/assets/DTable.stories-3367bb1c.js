import { DBadge, DSelect } from "../main";
import {
  columns,
  data,
  paginatedData,
  customComponentData,
} from "./data/sitcom-data";
import DarkModeProvider from "../providers/DarkModeProvider.vue";
import DAutoLayout from "../d-auto-layout/DAutoLayout.vue";

export default {
  components: { DAutoLayout },
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
      </template>
    </d-table>
  \`,
});

export const ExtraHeadings = ExtraHeadingsTemplate.bind({});
ExtraHeadings.args = {
  columns,
  data,
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
  columns,
  data,
};

export const DarkModeDefault = DarkModeTemplateFactory();
DarkModeDefault.args = {
  columns,
  data,
};

export const ExpandMode = Template.bind({});
ExpandMode.args = {
  data,
  columns,
  expandMode: true,
  paginate: true,
};

export const ExpandModeWithSpecifiedExpandedColumns = Template.bind({});
ExpandModeWithSpecifiedExpandedColumns.args = {
  data,
  columns,
  expandMode: true,
  expandedColumns: ["name", "city"],
};

export const Search = Template.bind({});
Search.args = {
  search: true,
  data,
  columns,
};

export const DarkModeSearch = DarkModeTemplateFactory();
DarkModeSearch.args = {
  search: true,
  columns,
  data,
};

export const Checkboxes = Template.bind({});
Checkboxes.args = {
  search: true,
  columns,
  data,
  showCheckboxes: true,
};

export const DarkModeCheckboxes = DarkModeTemplateFactory();
DarkModeCheckboxes.args = {
  search: true,
  showCheckboxes: true,
  columns,
  data,
};

export const ButtonActions = Template.bind({});
ButtonActions.args = {
  search: true,
  enableCsvExport: true,
  enableCustomizeView: true,
  columns,
  data,
};

export const DarkModeButtonActions = DarkModeTemplateFactory();
DarkModeButtonActions.args = {
  search: true,
  enableCsvExport: true,
  enableCustomizeView: true,
  columns,
  data,
};

export const Pagination = Template.bind({});
Pagination.args = {
  search: true,
  enableCsvExport: true,
  enableCustomizeView: true,
  columns,
  data: paginatedData,
  paginate: true,
};

export const DarkModePagination = DarkModeTemplateFactory();
DarkModePagination.args = {
  search: true,
  enableCsvExport: true,
  enableCustomizeView: true,
  columns,
  data: paginatedData,
  paginate: true,
};

export const RightPagination = Template.bind({});
RightPagination.args = {
  search: true,
  enableCsvExport: true,
  enableCustomizeView: true,
  columns,
  data: paginatedData,
  paginate: true,
  paginateRight: true,
};

export const DarkModeRightPagination = DarkModeTemplateFactory();
DarkModeRightPagination.args = {
  search: true,
  enableCsvExport: true,
  enableCustomizeView: true,
  columns,
  data: paginatedData,
  paginate: true,
  paginateRight: true,
};

export const CustomComponent = Template.bind({});
CustomComponent.args = {
  search: true,
  enableCsvExport: true,
  enableCustomizeView: true,
  columns,
  data: customComponentData,
  paginate: true,
};

export const DarkModeCustomComponent = DarkModeTemplateFactory();
DarkModeCustomComponent.args = {
  search: true,
  enableCsvExport: true,
  enableCustomizeView: true,
  columns,
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
`,locationsMap:{"extra-headings":{startLoc:{col:30,line:98},endLoc:{col:2,line:111},startBody:{col:30,line:98},endBody:{col:2,line:111}},default:{startLoc:{col:17,line:90},endLoc:{col:2,line:96},startBody:{col:17,line:90},endBody:{col:2,line:96}},"dark-mode-default":{startLoc:{col:31,line:148},endLoc:{col:56,line:148},startBody:{col:31,line:148},endBody:{col:56,line:148}},"expand-mode":{startLoc:{col:17,line:90},endLoc:{col:2,line:96},startBody:{col:17,line:90},endBody:{col:2,line:96}},"expand-mode-with-specified-expanded-columns":{startLoc:{col:17,line:90},endLoc:{col:2,line:96},startBody:{col:17,line:90},endBody:{col:2,line:96}},search:{startLoc:{col:17,line:90},endLoc:{col:2,line:96},startBody:{col:17,line:90},endBody:{col:2,line:96}},"dark-mode-search":{startLoc:{col:30,line:177},endLoc:{col:55,line:177},startBody:{col:30,line:177},endBody:{col:55,line:177}},checkboxes:{startLoc:{col:17,line:90},endLoc:{col:2,line:96},startBody:{col:17,line:90},endBody:{col:2,line:96}},"dark-mode-checkboxes":{startLoc:{col:34,line:192},endLoc:{col:59,line:192},startBody:{col:34,line:192},endBody:{col:59,line:192}},"button-actions":{startLoc:{col:17,line:90},endLoc:{col:2,line:96},startBody:{col:17,line:90},endBody:{col:2,line:96}},"dark-mode-button-actions":{startLoc:{col:37,line:209},endLoc:{col:62,line:209},startBody:{col:37,line:209},endBody:{col:62,line:209}},pagination:{startLoc:{col:17,line:90},endLoc:{col:2,line:96},startBody:{col:17,line:90},endBody:{col:2,line:96}},"dark-mode-pagination":{startLoc:{col:34,line:228},endLoc:{col:59,line:228},startBody:{col:34,line:228},endBody:{col:59,line:228}},"right-pagination":{startLoc:{col:17,line:90},endLoc:{col:2,line:96},startBody:{col:17,line:90},endBody:{col:2,line:96}},"dark-mode-right-pagination":{startLoc:{col:39,line:249},endLoc:{col:64,line:249},startBody:{col:39,line:249},endBody:{col:64,line:249}},"custom-component":{startLoc:{col:17,line:90},endLoc:{col:2,line:96},startBody:{col:17,line:90},endBody:{col:2,line:96}},"dark-mode-custom-component":{startLoc:{col:39,line:270},endLoc:{col:64,line:270},startBody:{col:39,line:270},endBody:{col:64,line:270}},"piped-column-example-multiply-qty-by-two":{startLoc:{col:17,line:90},endLoc:{col:2,line:96},startBody:{col:17,line:90},endBody:{col:2,line:96}}}}},components:{DAutoLayout:c},title:"Table",component:r,argTypes:{showCheckboxes:{control:{type:"boolean"}},itemsPerPage:{control:{type:"text"}},paginate:{control:{type:"boolean"}},paginateRight:{control:{type:"boolean"}},currentPage:{control:{type:"text"}},currentPageSiblings:{control:{type:"text"}},asyncPagination:{control:{type:"boolean"}},columns:{control:{type:"object"}},data:{control:{type:"object"}},enableCsvExport:{control:{type:"boolean"}},exportCsvBtn:{control:{type:"object"}},customizeViewBtn:{control:{type:"object"}},generatedCsvName:{control:{type:"text"}},enableCustomizeView:{control:{type:"boolean"}},loading:{control:{type:"boolean"}},search:{control:{type:"boolean"}},searchPlaceholder:{control:{type:"text"}},buttonActionsAlignment:{control:{type:"select"},options:["left","right"],default:"left"},searchAlignment:{control:{type:"select"},options:["left","right"],default:"left"},smartColor:{control:{type:"color"}},enableRowHoverCursor:{control:{type:"boolean"}},expandMode:{control:{type:"boolean"}}}},n=y(a=>({components:{DTable:r},setup(){return{args:a}},template:'<d-table v-bind="args" />'}),"Template"),p=y(a=>({components:{DTable:r,DBadge:S,DAutoLayout:c,DSelect:u},setup(){return{args:a}},template:`
    <d-table v-bind="args">
      <template #table-header-left>
          <d-select size="large" placeholder="Last 7 days" width="200px" />
          <d-select size="large" placeholder="By Events" width="200px" />
      </template>
    </d-table>
  `}),"ExtraHeadingsTemplate"),q=p.bind({});q.args={columns:t,data:e};const U=y(a=>({components:{DTable:r,DarkModeProvider:h},setup(){return{args:a}},template:`
    <dark-mode-provider :dark-mode="true">
    <d-table v-bind="args" />
    </dark-mode-provider>
    `}),"DarkModeTemplate"),o=y(()=>{const a=U.bind({});return a.decorators=[()=>({template:'<div style="padding: 3em; background: #121A26;"><story /></div>'})],a},"DarkModeTemplateFactory"),g=n.bind({});g.args={columns:t,data:e};const C=o();C.args={columns:t,data:e};const w=n.bind({});w.args={data:e,columns:t,expandMode:!0,paginate:!0};const f=n.bind({});f.args={data:e,columns:t,expandMode:!0,expandedColumns:["name","city"]};const d=n.bind({});d.args={search:!0,data:e,columns:t};const k=o();k.args={search:!0,columns:t,data:e};const M=n.bind({});M.args={search:!0,columns:t,data:e,showCheckboxes:!0};const B=o();B.args={search:!0,showCheckboxes:!0,columns:t,data:e};const N=n.bind({});N.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:t,data:e};const v=o();v.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:t,data:e};const Y=n.bind({});Y.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:t,data:i,paginate:!0};const D=o();D.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:t,data:i,paginate:!0};const P=n.bind({});P.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:t,data:i,paginate:!0,paginateRight:!0};const H=o();H.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:t,data:i,paginate:!0,paginateRight:!0};const J=n.bind({});J.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:t,data:s,paginate:!0};const L=o();L.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:t,data:s,paginate:!0};const W=n.bind({});W.args={columns:[{display:"Name",dataSelector:"name",uppercase:!0,sortable:!0,filterable:!0,width:"",minWidth:"",maxWidth:"",pipe:a=>a.toUpperCase()},{display:"City",dataSelector:"city",uppercase:!0,sortable:!0,filterable:!0,width:"",minWidth:"",maxWidth:""},{display:"Company/Work",dataSelector:"company",uppercase:!0,filterable:!0,width:"",minWidth:"",maxWidth:""},{display:"Country",dataSelector:"country",uppercase:!0,sortable:!0,filterable:!1,width:"",minWidth:"",maxWidth:""},{display:"Qty",dataSelector:"qty",uppercase:!0,sortable:!0,sortNumerically:!0,filterable:!0,width:"80px",minWidth:"80px",maxWidth:"80px",position:"right",pipe:a=>a*2},{display:"State",dataSelector:"state",uppercase:!0,sortable:!1,filterable:!0,width:"",minWidth:"",maxWidth:"",excludeFromCSV:!0}],data:e};const I=["ExtraHeadings","Default","DarkModeDefault","ExpandMode","ExpandModeWithSpecifiedExpandedColumns","Search","DarkModeSearch","Checkboxes","DarkModeCheckboxes","ButtonActions","DarkModeButtonActions","Pagination","DarkModePagination","RightPagination","DarkModeRightPagination","CustomComponent","DarkModeCustomComponent","PipedColumnExampleMultiplyQtyByTwo"];export{N as ButtonActions,M as Checkboxes,J as CustomComponent,v as DarkModeButtonActions,B as DarkModeCheckboxes,L as DarkModeCustomComponent,C as DarkModeDefault,D as DarkModePagination,H as DarkModeRightPagination,k as DarkModeSearch,g as Default,w as ExpandMode,f as ExpandModeWithSpecifiedExpandedColumns,q as ExtraHeadings,Y as Pagination,W as PipedColumnExampleMultiplyQtyByTwo,P as RightPagination,d as Search,I as __namedExportsOrder,O as default};
//# sourceMappingURL=DTable.stories-3367bb1c.js.map