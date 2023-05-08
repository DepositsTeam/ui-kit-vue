var r=Object.defineProperty;var e=(a,o)=>r(a,"name",{value:o,configurable:!0});import{N as n,O as d}from"./DAccordion-8de76d4c.js";import"./vue.esm-bundler-da4a8dbf.js";import"./iframe-55eb32d1.js";const m={parameters:{storySource:{source:`import DRadioCard from "./DRadioCard.vue";
import { CardIcon } from "../main";

export default {
  title: "Forms/Radio Card",
  component: DRadioCard,
  argTypes: {},
};

const Template = (args) => ({
  components: { DRadioCard, CardIcon },
  data: () => ({
    value: "",
  }),
  setup() {
    return { args };
  },
  template: \`<d-radio-card v-model="value" value="value" v-bind="args">
  <template #icon>
    <card-icon />
  </template>
  </d-radio-card>
  <p>Radio value is: {{value}}</p>
  \`,
});

export const Default = Template.bind({});
Default.args = {
  heading: "Card",
  description: "Add your debit / credit card information",
};
`,locationsMap:{default:{startLoc:{col:17,line:10},endLoc:{col:2,line:25},startBody:{col:17,line:10},endBody:{col:2,line:25}}}}},title:"Forms/Radio Card",component:n,argTypes:{}},t=e(a=>({components:{DRadioCard:n,CardIcon:d},data:()=>({value:""}),setup(){return{args:a}},template:`<d-radio-card v-model="value" value="value" v-bind="args">
  <template #icon>
    <card-icon />
  </template>
  </d-radio-card>
  <p>Radio value is: {{value}}</p>
  `}),"Template"),i=t.bind({});i.args={heading:"Card",description:"Add your debit / credit card information"};const u=["Default"];export{i as Default,u as __namedExportsOrder,m as default};
//# sourceMappingURL=DRadioCard.stories-4e64283a.js.map
