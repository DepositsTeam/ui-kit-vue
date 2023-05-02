var a=Object.defineProperty;var e=(n,r)=>a(n,"name",{value:r,configurable:!0});import{q as o,_ as d}from"./DAccordion-0f8b7af0.js";import"./vue.esm-bundler-da4a8dbf.js";import"./iframe-1500b55f.js";const p={parameters:{storySource:{source:`import DCounter from "./DCounter.vue";
import { DarkModeProvider } from "../main";

export default {
  title: "Forms/Counter",
  component: DCounter,
  argTypes: {},
};

const Template = (args) => ({
  components: { DCounter },
  data: () => ({
    value: "",
  }),
  setup() {
    return { args };
  },
  template: \`<d-counter v-model="value" v-bind="args"></d-counter>\`,
});

const DarkModeTemplate = (args) => ({
  components: { DCounter, DarkModeProvider },
  data: () => ({
    value: "",
  }),
  setup() {
    return { args };
  },
  template: \`
    <div style="padding: 3em; background: #121A26;">
      <dark-mode-provider :dark-mode="true">
        <d-counter v-model="value" v-bind="args" />
      </dark-mode-provider>
    </div>
    \`,
});

export const Default = Template.bind({});

export const DarkDefault = DarkModeTemplate.bind({});

export const MaxIs10AndMinIs0 = Template.bind({});
MaxIs10AndMinIs0.args = {
  max: 10,
  min: 0,
};
`,locationsMap:{default:{startLoc:{col:17,line:10},endLoc:{col:2,line:19},startBody:{col:17,line:10},endBody:{col:2,line:19}},"dark-default":{startLoc:{col:25,line:21},endLoc:{col:2,line:36},startBody:{col:25,line:21},endBody:{col:2,line:36}},"max-is-10-and-min-is-0":{startLoc:{col:17,line:10},endLoc:{col:2,line:19},startBody:{col:17,line:10},endBody:{col:2,line:19}}}}},title:"Forms/Counter",component:o,argTypes:{}},t=e(n=>({components:{DCounter:o},data:()=>({value:""}),setup(){return{args:n}},template:'<d-counter v-model="value" v-bind="args"></d-counter>'}),"Template"),s=e(n=>({components:{DCounter:o,DarkModeProvider:d},data:()=>({value:""}),setup(){return{args:n}},template:`
    <div style="padding: 3em; background: #121A26;">
      <dark-mode-provider :dark-mode="true">
        <d-counter v-model="value" v-bind="args" />
      </dark-mode-provider>
    </div>
    `}),"DarkModeTemplate"),v=t.bind({}),D=s.bind({}),l=t.bind({});l.args={max:10,min:0};const k=["Default","DarkDefault","MaxIs10AndMinIs0"];export{D as DarkDefault,v as Default,l as MaxIs10AndMinIs0,k as __namedExportsOrder,p as default};
//# sourceMappingURL=DCounter.stories-0b19c85a.js.map
