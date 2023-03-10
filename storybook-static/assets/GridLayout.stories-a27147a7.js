var n=Object.defineProperty;var r=(o,d)=>n(o,"name",{value:d,configurable:!0});import{E as t,c as e}from"./DAccordion-70812f94.js";import"./vue.esm-bundler-f42bdcc2.js";import"./iframe-87663d28.js";const c={parameters:{storySource:{source:`import DGridLayout from "./DGridLayout.vue";
import { DBox } from "../main";

export default {
  title: "Layouts/Grid Layout",
  component: DGridLayout,
  argTypes: {
    gridWidth: {
      control: { type: "text" },
    },
    gridHeight: {
      control: { type: "text" },
    },
    colGutter: {
      control: { type: "text" },
    },
    rowGutter: {
      control: { type: "text" },
    },
  },
};

const Template = (args) => ({
  components: { DGridLayout, DBox },
  setup() {
    return { args };
  },
  template: \`<d-grid-layout v-bind="args">
    <d-box background="#0CB9E9" border-radius="6px" />
    <d-box background="#0CB9E9" border-radius="6px" />
    <d-box background="#0CB9E9" border-radius="6px" />
    <d-box background="#0CB9E9" border-radius="6px" />
    <d-box background="#0CB9E9" border-radius="6px" />
    <d-box background="#0CB9E9" border-radius="6px" />
    <d-box background="#0CB9E9" border-radius="6px" /> 
  </d-grid-layout>\`,
});

export const Default = Template.bind({});
`,locationsMap:{default:{startLoc:{col:17,line:23},endLoc:{col:2,line:37},startBody:{col:17,line:23},endBody:{col:2,line:37}}}}},title:"Layouts/Grid Layout",component:t,argTypes:{gridWidth:{control:{type:"text"}},gridHeight:{control:{type:"text"}},colGutter:{control:{type:"text"}},rowGutter:{control:{type:"text"}}}},a=r(o=>({components:{DGridLayout:t,DBox:e},setup(){return{args:o}},template:`<d-grid-layout v-bind="args">
    <d-box background="#0CB9E9" border-radius="6px" />
    <d-box background="#0CB9E9" border-radius="6px" />
    <d-box background="#0CB9E9" border-radius="6px" />
    <d-box background="#0CB9E9" border-radius="6px" />
    <d-box background="#0CB9E9" border-radius="6px" />
    <d-box background="#0CB9E9" border-radius="6px" />
    <d-box background="#0CB9E9" border-radius="6px" /> 
  </d-grid-layout>`}),"Template"),s=a.bind({}),x=["Default"];export{s as Default,x as __namedExportsOrder,c as default};
//# sourceMappingURL=GridLayout.stories-a27147a7.js.map
