var p=Object.defineProperty;var o=(n,r)=>p(n,"name",{value:r,configurable:!0});import{V as t,A as c,W as u,_ as l}from"./DAccordion-747ca11f.js";import"./vue.esm-bundler-da4a8dbf.js";import"./iframe-03b5867e.js";const I={parameters:{storySource:{source:`import DTagDropdown from "./DTagDropdown.vue";
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
  template: \`
    <d-tag-dropdown v-model="value" v-bind="args" />
    <p>Selected value is {{value}}</p>
  \`,
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

export const StringOptionsDark = DarkModeTemplateFactory();
StringOptionsDark.args = {
  options: [...stringOptions],
  label: "String Options",
};

export const PredefinedOptions = PredefinedTemplate.bind({});
PredefinedOptions.args = {
  options: [...options],
  label: "Predefined Options",
};

export const PredefinedOptionsWithFullObject = PredefinedTemplate.bind({});
PredefinedOptionsWithFullObject.args = {
  options: [...options],
  label: "Predefined Options",
  returnFullObject: true,
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
`,locationsMap:{default:{startLoc:{col:17,line:23},endLoc:{col:2,line:32},startBody:{col:17,line:23},endBody:{col:2,line:32}},"default-dark":{startLoc:{col:27,line:139},endLoc:{col:52,line:139},startBody:{col:27,line:139},endBody:{col:52,line:139}},label:{startLoc:{col:17,line:23},endLoc:{col:2,line:32},startBody:{col:17,line:23},endBody:{col:2,line:32}},"label-dark":{startLoc:{col:25,line:150},endLoc:{col:50,line:150},startBody:{col:25,line:150},endBody:{col:50,line:150}},"string-options":{startLoc:{col:17,line:23},endLoc:{col:2,line:32},startBody:{col:17,line:23},endBody:{col:2,line:32}},"string-options-dark":{startLoc:{col:33,line:162},endLoc:{col:58,line:162},startBody:{col:33,line:162},endBody:{col:58,line:162}},"predefined-options":{startLoc:{col:27,line:34},endLoc:{col:2,line:46},startBody:{col:27,line:34},endBody:{col:2,line:46}},"predefined-options-with-full-object":{startLoc:{col:27,line:34},endLoc:{col:2,line:46},startBody:{col:27,line:34},endBody:{col:2,line:46}},"predefined-options-dark":{startLoc:{col:37,line:181},endLoc:{col:1,line:183},startBody:{col:37,line:181},endBody:{col:1,line:183}},"left-icon":{startLoc:{col:27,line:34},endLoc:{col:2,line:46},startBody:{col:27,line:34},endBody:{col:2,line:46}}}}},title:"Forms/Tag Dropdown",component:t,argTypes:{...c,placeholder:{control:{type:"text"}},showCheckboxes:{control:{type:"boolean"}},options:{control:{type:"object"}}}},d=o(n=>({components:{DTagDropdown:t},data:()=>({value:[]}),setup(){return{args:n}},template:'<d-tag-dropdown v-model="value" v-bind="args" />'}),"Template"),i=o(n=>({components:{DTagDropdown:t},data:()=>({value:["banking","money"]}),setup(){return{args:n}},template:`
    <d-tag-dropdown v-model="value" v-bind="args" />
    <p>Selected value is {{value}}</p>
  `}),"PredefinedTemplate"),m=o(n=>({components:{DTagDropdown:t,DarkModeProvider:l},data:()=>({value:"identity"}),setup(){return{args:n}},template:`
    <dark-mode-provider :dark-mode="true">
      <d-tag-dropdown v-bind="args" v-model="value" />
    </dark-mode-provider>
    `}),"DarkModePredefinedTemplate"),g=o(n=>({components:{DTagDropdown:t,DarkModeProvider:l},data:()=>({value:""}),setup(){return{args:n}},template:`
    <dark-mode-provider :dark-mode="true">
      <d-tag-dropdown v-bind="args" v-model="value" />
    </dark-mode-provider>
    `}),"DarkModeTemplate"),a=o((n=null)=>{const r=n?n.bind({}):g.bind({});return r.decorators=[()=>({template:'<div style="padding: 3em; background: #121A26;"><story /></div>'})],r},"DarkModeTemplateFactory"),e=[{text:"Banking kit",value:"banking"},{text:"Money kit",value:"money"},{text:"Identity kit",value:"identity"},{text:"UI kit",value:"ui"},{text:"Commerce kit",value:"commerce"},{text:"Benefits",value:"benefits"},{text:"API Docs",value:"api_docs"},{text:"Console",value:"console"},{text:"Statements",value:"statements"},{text:"Payouts",value:"payouts"}],s=["Commerce","Identity","UI","Money","Banking"],v=d.bind({});v.args={options:[...e]};const k=a();k.args={options:[...e]};const b=d.bind({});b.args={options:[...e],label:"Dropdown"};const D=a();D.args={options:[...e],label:"Dropdown"};const f=d.bind({});f.args={options:[...s],label:"String Options"};const y=a();y.args={options:[...s],label:"String Options"};const O=i.bind({});O.args={options:[...e],label:"Predefined Options"};const T=i.bind({});T.args={options:[...e],label:"Predefined Options",returnFullObject:!0};const x=a(m);x.args={options:[...e],label:"Predefined Options"};const P=i.bind({});P.args={options:[...e],label:"Predefined Options",leftIcon:u};const S=["Default","DefaultDark","Label","LabelDark","StringOptions","StringOptionsDark","PredefinedOptions","PredefinedOptionsWithFullObject","PredefinedOptionsDark","LeftIcon"];export{v as Default,k as DefaultDark,b as Label,D as LabelDark,P as LeftIcon,O as PredefinedOptions,x as PredefinedOptionsDark,T as PredefinedOptionsWithFullObject,f as StringOptions,y as StringOptionsDark,S as __namedExportsOrder,I as default};
//# sourceMappingURL=DTagDropdown.stories-3fc8ea98.js.map
