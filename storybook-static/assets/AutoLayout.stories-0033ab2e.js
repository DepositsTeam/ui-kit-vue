var r=Object.defineProperty;var o=(t,n)=>r(t,"name",{value:n,configurable:!0});import{b as e,c as d}from"./DAccordion-70812f94.js";import"./vue.esm-bundler-f42bdcc2.js";import"./iframe-87663d28.js";const c={parameters:{storySource:{source:`import DAutoLayout from "./DAutoLayout.vue";
import { DBox } from "../main";

export default {
  title: "Layouts/Auto layout",
  component: DAutoLayout,
  argTypes: {
    direction: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
    },
    itemSpacing: {
      control: { type: "text" },
    },
    alignment: {
      control: { type: "select" },
      options: [
        "top-left",
        "top-center",
        "top-right",
        "center-right",
        "center",
        "center-left",
        "bottom-left",
        "bottom-center",
        "bottom-right",
      ],
    },
  },
};

const Template = (args) => ({
  components: { DAutoLayout, DBox },
  setup() {
    return { args };
  },
  template: \`<d-auto-layout :switch-breakpoint="500" v-bind="args">
    <d-box background="#0CB9E9" border-radius="6px" height="48px" width="48px" />
    <d-box background="#0CB9E9" border-radius="6px" height="48px" width="48px" />
    <d-box background="#0CB9E9" border-radius="6px" height="48px" width="48px" />
    <d-box background="#0CB9E9" border-radius="6px" height="48px" width="48px" />
    <d-box background="#0CB9E9" border-radius="6px" height="48px" width="48px" />
    <d-box background="#0CB9E9" border-radius="6px" height="48px" width="48px" />
    <d-box background="#0CB9E9" border-radius="6px" height="48px" width="48px" /> 
  </d-auto-layout>\`,
});

export const Default = Template.bind({});
`,locationsMap:{default:{startLoc:{col:17,line:32},endLoc:{col:2,line:46},startBody:{col:17,line:32},endBody:{col:2,line:46}}}}},title:"Layouts/Auto layout",component:e,argTypes:{direction:{control:{type:"select"},options:["horizontal","vertical"]},itemSpacing:{control:{type:"text"}},alignment:{control:{type:"select"},options:["top-left","top-center","top-right","center-right","center","center-left","bottom-left","bottom-center","bottom-right"]}}},i=o(t=>({components:{DAutoLayout:e,DBox:d},setup(){return{args:t}},template:`<d-auto-layout :switch-breakpoint="500" v-bind="args">
    <d-box background="#0CB9E9" border-radius="6px" height="48px" width="48px" />
    <d-box background="#0CB9E9" border-radius="6px" height="48px" width="48px" />
    <d-box background="#0CB9E9" border-radius="6px" height="48px" width="48px" />
    <d-box background="#0CB9E9" border-radius="6px" height="48px" width="48px" />
    <d-box background="#0CB9E9" border-radius="6px" height="48px" width="48px" />
    <d-box background="#0CB9E9" border-radius="6px" height="48px" width="48px" />
    <d-box background="#0CB9E9" border-radius="6px" height="48px" width="48px" /> 
  </d-auto-layout>`}),"Template"),b=i.bind({}),s=["Default"];export{b as Default,s as __namedExportsOrder,c as default};
//# sourceMappingURL=AutoLayout.stories-0033ab2e.js.map
