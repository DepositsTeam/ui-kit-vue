var l=Object.defineProperty;var n=(t,a)=>l(t,"name",{value:a,configurable:!0});import{u as e,C as r}from"./DAccordion-4bc919d8.js";import"./vue.esm-bundler-f42bdcc2.js";import"./iframe-72b4e0f8.js";const b={parameters:{storySource:{source:`import DDebitCardBalance from "./DDebitCardBalance.vue";
import { CardBrands } from "../utils/debitCardUtils";

export default {
  title: "Debit Card Balance",
  component: DDebitCardBalance,
  argTypes: {
    logo: {
      control: { type: "text" },
    },
    cardNo: {
      control: { type: "text" },
    },
    exp: {
      control: { type: "text" },
    },
    cvv: {
      control: { type: "text" },
    },
    name: {
      control: { type: "text" },
    },
    brand: {
      control: { type: "select" },
      options: CardBrands,
    },
    width: {
      control: { type: "text" },
    },
    balance: {
      control: { type: "text" },
    },
    theme: {
      control: { type: "select" },
      options: ["dark", "light"],
    },
    enableHiding: {
      control: { type: "boolean" },
      default: true,
    },
  },
};

const Template = (args) => ({
  components: { DDebitCardBalance },
  setup() {
    return { args };
  },
  template: \`<d-debit-card-balance v-bind="args" />\`,
});

export const Default = Template.bind({});

export const DisabledHiding = Template.bind({});
DisabledHiding.args = {
  enableHiding: false,
};
`,locationsMap:{default:{startLoc:{col:17,line:44},endLoc:{col:2,line:50},startBody:{col:17,line:44},endBody:{col:2,line:50}},"disabled-hiding":{startLoc:{col:17,line:44},endLoc:{col:2,line:50},startBody:{col:17,line:44},endBody:{col:2,line:50}}}}},title:"Debit Card Balance",component:e,argTypes:{logo:{control:{type:"text"}},cardNo:{control:{type:"text"}},exp:{control:{type:"text"}},cvv:{control:{type:"text"}},name:{control:{type:"text"}},brand:{control:{type:"select"},options:r},width:{control:{type:"text"}},balance:{control:{type:"text"}},theme:{control:{type:"select"},options:["dark","light"]},enableHiding:{control:{type:"boolean"},default:!0}}},o=n(t=>({components:{DDebitCardBalance:e},setup(){return{args:t}},template:'<d-debit-card-balance v-bind="args" />'}),"Template"),y=o.bind({}),c=o.bind({});c.args={enableHiding:!1};const m=["Default","DisabledHiding"];export{y as Default,c as DisabledHiding,m as __namedExportsOrder,b as default};
//# sourceMappingURL=DDebitCardBalance.stories-afdfd415.js.map
