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
`,locationsMap:{"extra-headings":{startLoc:{col:30,line:95},endLoc:{col:2,line:108},startBody:{col:30,line:95},endBody:{col:2,line:108}},default:{startLoc:{col:17,line:87},endLoc:{col:2,line:93},startBody:{col:17,line:87},endBody:{col:2,line:93}},"dark-mode-default":{startLoc:{col:31,line:145},endLoc:{col:56,line:145},startBody:{col:31,line:145},endBody:{col:56,line:145}},search:{startLoc:{col:17,line:87},endLoc:{col:2,line:93},startBody:{col:17,line:87},endBody:{col:2,line:93}},"dark-mode-search":{startLoc:{col:30,line:158},endLoc:{col:55,line:158},startBody:{col:30,line:158},endBody:{col:55,line:158}},checkboxes:{startLoc:{col:17,line:87},endLoc:{col:2,line:93},startBody:{col:17,line:87},endBody:{col:2,line:93}},"dark-mode-checkboxes":{startLoc:{col:34,line:173},endLoc:{col:59,line:173},startBody:{col:34,line:173},endBody:{col:59,line:173}},"button-actions":{startLoc:{col:17,line:87},endLoc:{col:2,line:93},startBody:{col:17,line:87},endBody:{col:2,line:93}},"dark-mode-button-actions":{startLoc:{col:37,line:190},endLoc:{col:62,line:190},startBody:{col:37,line:190},endBody:{col:62,line:190}},pagination:{startLoc:{col:17,line:87},endLoc:{col:2,line:93},startBody:{col:17,line:87},endBody:{col:2,line:93}},"dark-mode-pagination":{startLoc:{col:34,line:209},endLoc:{col:59,line:209},startBody:{col:34,line:209},endBody:{col:59,line:209}},"right-pagination":{startLoc:{col:17,line:87},endLoc:{col:2,line:93},startBody:{col:17,line:87},endBody:{col:2,line:93}},"dark-mode-right-pagination":{startLoc:{col:39,line:230},endLoc:{col:64,line:230},startBody:{col:39,line:230},endBody:{col:64,line:230}},"custom-component":{startLoc:{col:17,line:87},endLoc:{col:2,line:93},startBody:{col:17,line:87},endBody:{col:2,line:93}},"dark-mode-custom-component":{startLoc:{col:39,line:251},endLoc:{col:64,line:251},startBody:{col:39,line:251},endBody:{col:64,line:251}}}}},components:{DAutoLayout:c},title:"Table",component:r,argTypes:{showCheckboxes:{control:{type:"boolean"}},itemsPerPage:{control:{type:"text"}},paginate:{control:{type:"boolean"}},paginateRight:{control:{type:"boolean"}},currentPage:{control:{type:"text"}},currentPageSiblings:{control:{type:"text"}},asyncPagination:{control:{type:"boolean"}},columns:{control:{type:"object"}},data:{control:{type:"object"}},enableCsvExport:{control:{type:"boolean"}},exportCsvBtn:{control:{type:"object"}},customizeViewBtn:{control:{type:"object"}},generatedCsvName:{control:{type:"text"}},enableCustomizeView:{control:{type:"boolean"}},loading:{control:{type:"boolean"}},search:{control:{type:"boolean"}},searchPlaceholder:{control:{type:"text"}},buttonActionsAlignment:{control:{type:"select"},options:["left","right"],default:"left"},searchAlignment:{control:{type:"select"},options:["left","right"],default:"left"},smartColor:{control:{type:"color"}},enableRowHoverCursor:{control:{type:"boolean"}}}},n=y(a=>({components:{DTable:r},setup(){return{args:a}},template:'<d-table v-bind="args" />'}),"Template"),p=y(a=>({components:{DTable:r,DBadge:S,DAutoLayout:c,DSelect:u},setup(){return{args:a}},template:`
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
    `}),"DarkModeTemplate"),o=y(()=>{const a=U.bind({});return a.decorators=[()=>({template:'<div style="padding: 3em; background: #121A26;"><story /></div>'})],a},"DarkModeTemplateFactory"),g=n.bind({});g.args={columns:t,data:e};const C=o();C.args={columns:t,data:e};const w=n.bind({});w.args={search:!0,data:e,columns:t};const f=o();f.args={search:!0,columns:t,data:e};const d=n.bind({});d.args={search:!0,columns:t,data:e,showCheckboxes:!0};const k=o();k.args={search:!0,showCheckboxes:!0,columns:t,data:e};const B=n.bind({});B.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:t,data:e};const M=o();M.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:t,data:e};const N=n.bind({});N.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:t,data:i,paginate:!0};const v=o();v.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:t,data:i,paginate:!0};const Y=n.bind({});Y.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:t,data:i,paginate:!0,paginateRight:!0};const D=o();D.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:t,data:i,paginate:!0,paginateRight:!0};const P=n.bind({});P.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:t,data:s,paginate:!0};const H=o();H.args={search:!0,enableCsvExport:!0,enableCustomizeView:!0,columns:t,data:s,paginate:!0};const R=["ExtraHeadings","Default","DarkModeDefault","Search","DarkModeSearch","Checkboxes","DarkModeCheckboxes","ButtonActions","DarkModeButtonActions","Pagination","DarkModePagination","RightPagination","DarkModeRightPagination","CustomComponent","DarkModeCustomComponent"];export{B as ButtonActions,d as Checkboxes,P as CustomComponent,M as DarkModeButtonActions,k as DarkModeCheckboxes,H as DarkModeCustomComponent,C as DarkModeDefault,v as DarkModePagination,D as DarkModeRightPagination,f as DarkModeSearch,g as Default,q as ExtraHeadings,N as Pagination,Y as RightPagination,w as Search,R as __namedExportsOrder,T as default};
//# sourceMappingURL=DTable.stories-6e28e079.js.map