var c=Object.defineProperty;var o=(n,a)=>c(n,"name",{value:a,configurable:!0});import{U as t,A as m,V as u,_ as i}from"./DAccordion-78a63ab7.js";import"./vue.esm-bundler-f42bdcc2.js";import"./iframe-699909b0.js";const M={parameters:{storySource:{source:`import DTagDropdown from "./DTagDropdown.vue";
import DarkModeProvider from "../providers/DarkModeProvider.vue";
import { inputArgTypes } from "../utils/inputProps";
import { ExternalLinkIcon } from "../main";

export default {
  title: "Forms/Tag Dropdown",
  component: DTagDropdown,
  argTypes: {
    ...inputArgTypes,
    placeholder: {
      control: { type: "text" },
    },
    showCheckboxes: {
      control: { type: "boolean" },
    },
    options: {
      control: { type: "object" },
    },
  },
};

const Template = (args) => ({
  components: { DTagDropdown },
  data: () => ({
    value: [],
  }),
  setup() {
    return { args };
  },
  template: \`<d-tag-dropdown v-model="value" v-bind="args" />\`,
});

const PredefinedTemplate = (args) => ({
  components: { DTagDropdown },
  data: () => ({
    value: ["banking", "money"],
  }),
  setup() {
    return { args };
  },
  template: \`<d-tag-dropdown v-model="value" v-bind="args" />\`,
});

const DarkModePredefinedTemplate = (args) => ({
  components: { DTagDropdown, DarkModeProvider },
  data: () => ({
    value: "identity",
  }),
  setup() {
    return { args };
  },
  template: \`
    <dark-mode-provider :dark-mode="true">
      <d-tag-dropdown v-bind="args" v-model="value" />
    </dark-mode-provider>
    \`,
});

const DarkModeTemplate = (args) => ({
  components: { DTagDropdown, DarkModeProvider },
  data: () => ({
    value: "",
  }),
  setup() {
    return { args };
  },
  template: \`
    <dark-mode-provider :dark-mode="true">
      <d-tag-dropdown v-bind="args" v-model="value" />
    </dark-mode-provider>
    \`,
});

const DarkModeTemplateFactory = (Template = null) => {
  const Bound = Template ? Template.bind({}) : DarkModeTemplate.bind({});
  Bound.decorators = [
    () => ({
      template:
        '<div style="padding: 3em; background: #121A26;"><story /></div>',
    }),
  ];
  return Bound;
};

const options = [
  {
    text: "Banking kit",
    value: "banking",
  },
  {
    text: "Money kit",
    value: "money",
  },
  {
    text: "Identity kit",
    value: "identity",
  },
  {
    text: "UI kit",
    value: "ui",
  },
  {
    text: "Commerce kit",
    value: "commerce",
  },
  {
    text: "Benefits",
    value: "benefits",
  },
  {
    text: "API Docs",
    value: "api_docs",
  },
  {
    text: "Console",
    value: "console",
  },
  {
    text: "Statements",
    value: "statements",
  },
  {
    text: "Payouts",
    value: "payouts",
  },
];

const stringOptions = ["Commerce", "Identity", "UI", "Money", "Banking"];

export const Default = Template.bind({});
Default.args = {
  options: [...options],
};

export const DefaultDark = DarkModeTemplateFactory();
DefaultDark.args = {
  options: [...options],
};

export const Label = Template.bind({});
Label.args = {
  options: [...options],
  label: "Dropdown",
};

export const LabelDark = DarkModeTemplateFactory();
LabelDark.args = {
  options: [...options],
  label: "Dropdown",
};

export const StringOptions = Template.bind({});
StringOptions.args = {
  options: [...stringOptions],
  label: "String Options",
};

export const StringOptionsDark = DarkModeTemplate();
StringOptionsDark.args = {
  options: [...stringOptions],
  label: "String Options",
};

export const PredefinedOptions = PredefinedTemplate.bind({});
PredefinedOptions.args = {
  options: [...options],
  label: "Predefined Options",
};

export const PredefinedOptionsDark = DarkModeTemplateFactory(
  DarkModePredefinedTemplate
);
PredefinedOptionsDark.args = {
  options: [...options],
  label: "Predefined Options",
};

export const LeftIcon = PredefinedTemplate.bind({});
LeftIcon.args = {
  options: [...options],
  label: "Predefined Options",
  leftIcon: ExternalLinkIcon,
};
`,locationsMap:{default:{startLoc:{col:17,line:23},endLoc:{col:2,line:32},startBody:{col:17,line:23},endBody:{col:2,line:32}},"default-dark":{startLoc:{col:27,line:136},endLoc:{col:52,line:136},startBody:{col:27,line:136},endBody:{col:52,line:136}},label:{startLoc:{col:17,line:23},endLoc:{col:2,line:32},startBody:{col:17,line:23},endBody:{col:2,line:32}},"label-dark":{startLoc:{col:25,line:147},endLoc:{col:50,line:147},startBody:{col:25,line:147},endBody:{col:50,line:147}},"string-options":{startLoc:{col:17,line:23},endLoc:{col:2,line:32},startBody:{col:17,line:23},endBody:{col:2,line:32}},"string-options-dark":{startLoc:{col:33,line:159},endLoc:{col:51,line:159},startBody:{col:33,line:159},endBody:{col:51,line:159}},"predefined-options":{startLoc:{col:27,line:34},endLoc:{col:2,line:43},startBody:{col:27,line:34},endBody:{col:2,line:43}},"predefined-options-dark":{startLoc:{col:37,line:171},endLoc:{col:1,line:173},startBody:{col:37,line:171},endBody:{col:1,line:173}},"left-icon":{startLoc:{col:27,line:34},endLoc:{col:2,line:43},startBody:{col:27,line:34},endBody:{col:2,line:43}}}}},title:"Forms/Tag Dropdown",component:t,argTypes:{...m,placeholder:{control:{type:"text"}},showCheckboxes:{control:{type:"boolean"}},options:{control:{type:"object"}}}},r=o(n=>({components:{DTagDropdown:t},data:()=>({value:[]}),setup(){return{args:n}},template:'<d-tag-dropdown v-model="value" v-bind="args" />'}),"Template"),l=o(n=>({components:{DTagDropdown:t},data:()=>({value:["banking","money"]}),setup(){return{args:n}},template:'<d-tag-dropdown v-model="value" v-bind="args" />'}),"PredefinedTemplate"),g=o(n=>({components:{DTagDropdown:t,DarkModeProvider:i},data:()=>({value:"identity"}),setup(){return{args:n}},template:`
    <dark-mode-provider :dark-mode="true">
      <d-tag-dropdown v-bind="args" v-model="value" />
    </dark-mode-provider>
    `}),"DarkModePredefinedTemplate"),s=o(n=>({components:{DTagDropdown:t,DarkModeProvider:i},data:()=>({value:""}),setup(){return{args:n}},template:`
    <dark-mode-provider :dark-mode="true">
      <d-tag-dropdown v-bind="args" v-model="value" />
    </dark-mode-provider>
    `}),"DarkModeTemplate"),d=o((n=null)=>{const a=n?n.bind({}):s.bind({});return a.decorators=[()=>({template:'<div style="padding: 3em; background: #121A26;"><story /></div>'})],a},"DarkModeTemplateFactory"),e=[{text:"Banking kit",value:"banking"},{text:"Money kit",value:"money"},{text:"Identity kit",value:"identity"},{text:"UI kit",value:"ui"},{text:"Commerce kit",value:"commerce"},{text:"Benefits",value:"benefits"},{text:"API Docs",value:"api_docs"},{text:"Console",value:"console"},{text:"Statements",value:"statements"},{text:"Payouts",value:"payouts"}],p=["Commerce","Identity","UI","Money","Banking"],k=r.bind({});k.args={options:[...e]};const v=d();v.args={options:[...e]};const D=r.bind({});D.args={options:[...e],label:"Dropdown"};const b=d();b.args={options:[...e],label:"Dropdown"};const y=r.bind({});y.args={options:[...p],label:"String Options"};const f=s();f.args={options:[...p],label:"String Options"};const T=l.bind({});T.args={options:[...e],label:"Predefined Options"};const x=d(g);x.args={options:[...e],label:"Predefined Options"};const L=l.bind({});L.args={options:[...e],label:"Predefined Options",leftIcon:u};const I=["Default","DefaultDark","Label","LabelDark","StringOptions","StringOptionsDark","PredefinedOptions","PredefinedOptionsDark","LeftIcon"];export{k as Default,v as DefaultDark,D as Label,b as LabelDark,L as LeftIcon,T as PredefinedOptions,x as PredefinedOptionsDark,y as StringOptions,f as StringOptionsDark,I as __namedExportsOrder,M as default};
//# sourceMappingURL=DTagDropdown.stories-9cb4a113.js.map
