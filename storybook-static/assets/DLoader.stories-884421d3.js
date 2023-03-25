var a=Object.defineProperty;var t=(e,l)=>a(e,"name",{value:l,configurable:!0});import{F as o,j as r}from"./DAccordion-866dc07b.js";import"./vue.esm-bundler-f42bdcc2.js";import"./iframe-e3c9dd8c.js";const u={parameters:{storySource:{source:`import DLoader from "./DLoader.vue";
import DText from "../d-text/DText.vue";

export default {
  title: "Loader",
  component: DLoader,
  argTypes: {
    fullPage: {
      control: { type: "boolean" },
    },
    loading: {
      control: { type: "boolean" },
    },
    loader: {
      control: { type: "select" },
      options: ["ring"],
    },
  },
};

const Template = (args) => ({
  components: {
    DLoader,
    DText,
  },
  setup() {
    return { args };
  },
  template: \`<d-loader v-bind="args"><d-text>I am some text that will show after loading</d-text></d-loader>\`,
});

export const Default = Template.bind({});

export const FullPage = Template.bind({});
FullPage.args = {
  fullPage: true,
};
`,locationsMap:{default:{startLoc:{col:17,line:21},endLoc:{col:2,line:30},startBody:{col:17,line:21},endBody:{col:2,line:30}},"full-page":{startLoc:{col:17,line:21},endLoc:{col:2,line:30},startBody:{col:17,line:21},endBody:{col:2,line:30}}}}},title:"Loader",component:o,argTypes:{fullPage:{control:{type:"boolean"}},loading:{control:{type:"boolean"}},loader:{control:{type:"select"},options:["ring"]}}},n=t(e=>({components:{DLoader:o,DText:r},setup(){return{args:e}},template:'<d-loader v-bind="args"><d-text>I am some text that will show after loading</d-text></d-loader>'}),"Template"),m=n.bind({}),d=n.bind({});d.args={fullPage:!0};const g=["Default","FullPage"];export{m as Default,d as FullPage,g as __namedExportsOrder,u as default};
//# sourceMappingURL=DLoader.stories-884421d3.js.map
