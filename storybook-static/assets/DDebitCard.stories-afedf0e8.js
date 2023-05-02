var r=Object.defineProperty;var e=(t,o)=>r(t,"name",{value:o,configurable:!0});import{w as n,C as a}from"./DAccordion-a261f9c8.js";import"./vue.esm-bundler-da4a8dbf.js";import"./iframe-b399bdf6.js";const i={parameters:{storySource:{source:`import DDebitCard from "./DDebitCard.vue";
import { CardBrands } from "../utils/debitCardUtils";

export default {
  component: DDebitCard,
  title: "Debit Card",
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
      control: { type: "select", options: CardBrands },
    },
  },
};

const Template = (args) => ({
  components: { DDebitCard },
  setup() {
    return { args };
  },
  template: \`<d-debit-card v-bind="args" />\`,
});

export const Default = Template.bind({});
`,locationsMap:{default:{startLoc:{col:17,line:29},endLoc:{col:2,line:35},startBody:{col:17,line:29},endBody:{col:2,line:35}}}}},component:n,title:"Debit Card",argTypes:{logo:{control:{type:"text"}},cardNo:{control:{type:"text"}},exp:{control:{type:"text"}},cvv:{control:{type:"text"}},name:{control:{type:"text"}},brand:{control:{type:"select",options:a}}}},l=e(t=>({components:{DDebitCard:n},setup(){return{args:t}},template:'<d-debit-card v-bind="args" />'}),"Template"),m=l.bind({}),b=["Default"];export{m as Default,b as __namedExportsOrder,i as default};
//# sourceMappingURL=DDebitCard.stories-afedf0e8.js.map
