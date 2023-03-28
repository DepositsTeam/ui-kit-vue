var a=Object.defineProperty;var o=(n,e)=>a(n,"name",{value:e,configurable:!0});import{J as t,_ as r}from"./DAccordion-63ca2c4a.js";import"./vue.esm-bundler-f42bdcc2.js";import"./iframe-d64ba1f7.js";const g={parameters:{storySource:{source:`import DPagination from "./DPagination.vue";
import { DarkModeProvider } from "../main";

export default {
  title: "Pagination",
  component: DPagination,
  argTypes: {
    totalPages: {
      control: { type: "number" },
    },
    currentPage: {
      control: { type: "number" },
    },
    currentPageSiblings: {
      control: { type: "number" },
    },
    smartColor: {
      control: { type: "color" },
    },
  },
};

const Template = (args) => ({
  components: {
    DPagination,
  },
  setup() {
    return { args };
  },
  template: \`<d-pagination v-bind="args" />\`,
});

const DarkModeTemplate = (args) => ({
  components: {
    DPagination,
    DarkModeProvider,
  },
  methods: {
    console: function (value) {
      console.log("Page changed to: ", value);
    },
  },
  setup() {
    return { args };
  },
  template: \`
    <dark-mode-provider :dark-mode="true">
      <d-pagination @page-changed="console" v-bind="args" />
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

export const DarkDefault = DarkModeTemplateFactory();
`,locationsMap:{default:{startLoc:{col:17,line:23},endLoc:{col:2,line:31},startBody:{col:17,line:23},endBody:{col:2,line:31}},"dark-default":{startLoc:{col:27,line:66},endLoc:{col:52,line:66},startBody:{col:27,line:66},endBody:{col:52,line:66}}}}},title:"Pagination",component:t,argTypes:{totalPages:{control:{type:"number"}},currentPage:{control:{type:"number"}},currentPageSiblings:{control:{type:"number"}},smartColor:{control:{type:"color"}}}},d=o(n=>({components:{DPagination:t},setup(){return{args:n}},template:'<d-pagination v-bind="args" />'}),"Template"),i=o(n=>({components:{DPagination:t,DarkModeProvider:r},methods:{console:function(e){console.log("Page changed to: ",e)}},setup(){return{args:n}},template:`
    <dark-mode-provider :dark-mode="true">
      <d-pagination @page-changed="console" v-bind="args" />
    </dark-mode-provider>
    `}),"DarkModeTemplate"),l=o(()=>{const n=i.bind({});return n.decorators=[()=>({template:'<div style="padding: 3em; background: #121A26;"><story /></div>'})],n},"DarkModeTemplateFactory"),u=d.bind({}),D=l(),y=["Default","DarkDefault"];export{D as DarkDefault,u as Default,y as __namedExportsOrder,g as default};
//# sourceMappingURL=DPagination.stories-4e9bbea3.js.map
