var i=Object.defineProperty;var n=(e,r)=>i(e,"name",{value:r,configurable:!0});import{x as t,y as p,_ as l}from"./DAccordion-0fbec2ba.js";import"./vue.esm-bundler-f42bdcc2.js";import"./iframe-10927c47.js";const P={parameters:{storySource:{source:`import DDropdown from "./DDropdown.vue";
import DarkModeProvider from "../providers/DarkModeProvider.vue";
import ThemeProvider from "../providers/ThemeProvider.vue";

export default {
  title: "Forms/Dropdown",
  component: DDropdown,
  argTypes: {
    label: {
      control: { type: "text" },
    },
    placeholder: {
      control: { type: "text" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    dropDown: {
      control: { type: "boolean" },
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large", "xlarge", "huge", "massive"],
    },
    errorMessage: {
      control: { type: "text" },
    },
    rightIcon: {
      control: { type: "object" },
    },
    leftIcon: {
      control: { type: "object" },
    },
    onlyNumbers: {
      control: { type: "boolean" },
    },
    wrapperClass: {
      control: { type: "text" },
    },
    fontFace: {
      control: { type: "select" },
      options: ["circularSTD", "heroNew"],
    },
    options: {
      control: { type: "object" },
    },
  },
};

const Template = (args) => ({
  components: { DDropdown, ThemeProvider },
  data: () => ({
    value: "",
  }),
  setup() {
    return { args };
  },
  template: \`
    <ThemeProvider :initial-theme="{defaultInputSize: 'medium'}">
      <d-dropdown v-model="value" v-bind="args" />
    </ThemeProvider>
  \`,
});

const PredefinedTemplate = (args) => ({
  components: { DDropdown },
  data: () => ({
    value: "identity",
  }),
  setup() {
    return { args };
  },
  template: \`<d-dropdown v-model="value" v-bind="args" />\`,
});

const DarkModePredefinedTemplate = (args) => ({
  components: { DDropdown, DarkModeProvider },
  data: () => ({
    value: "identity",
  }),
  setup() {
    return { args };
  },
  template: \`
    <dark-mode-provider :dark-mode="true">
      <d-dropdown v-bind="args" v-model="value" />
    </dark-mode-provider>
    \`,
});

const DarkModeTemplate = (args) => ({
  components: { DDropdown, DarkModeProvider },
  data: () => ({
    value: "",
  }),
  setup() {
    return { args };
  },
  template: \`
    <dark-mode-provider :dark-mode="true">
      <d-dropdown v-bind="args" v-model="value" />
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
];

export const Default = Template.bind({});
Default.args = {
  options: [...options],
};

export const TextOptions = Template.bind({});
TextOptions.args = {
  options: [
    "Banking kit",
    "Money kit",
    "Identity kit",
    "UI kit",
    "Commerce kit",
  ],
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

export const Predefined = PredefinedTemplate.bind({});
Predefined.args = {
  label: "Predefined Dropdown",
  options: [...options],
};

export const PredefinedDark = DarkModeTemplateFactory(
  DarkModePredefinedTemplate
);
PredefinedDark.args = {
  label: "Predefined Dropdown",
  options: [...options],
};
`,locationsMap:{default:{startLoc:{col:17,line:50},endLoc:{col:2,line:63},startBody:{col:17,line:50},endBody:{col:2,line:63}},"text-options":{startLoc:{col:17,line:50},endLoc:{col:2,line:63},startBody:{col:17,line:50},endBody:{col:2,line:63}},"default-dark":{startLoc:{col:27,line:156},endLoc:{col:52,line:156},startBody:{col:27,line:156},endBody:{col:52,line:156}},label:{startLoc:{col:17,line:50},endLoc:{col:2,line:63},startBody:{col:17,line:50},endBody:{col:2,line:63}},"label-dark":{startLoc:{col:25,line:167},endLoc:{col:50,line:167},startBody:{col:25,line:167},endBody:{col:50,line:167}},predefined:{startLoc:{col:27,line:65},endLoc:{col:2,line:74},startBody:{col:27,line:65},endBody:{col:2,line:74}},"predefined-dark":{startLoc:{col:30,line:179},endLoc:{col:1,line:181},startBody:{col:30,line:179},endBody:{col:1,line:181}}}}},title:"Forms/Dropdown",component:t,argTypes:{label:{control:{type:"text"}},placeholder:{control:{type:"text"}},disabled:{control:{type:"boolean"}},dropDown:{control:{type:"boolean"}},size:{control:{type:"select"},options:["small","medium","large","xlarge","huge","massive"]},errorMessage:{control:{type:"text"}},rightIcon:{control:{type:"object"}},leftIcon:{control:{type:"object"}},onlyNumbers:{control:{type:"boolean"}},wrapperClass:{control:{type:"text"}},fontFace:{control:{type:"select"},options:["circularSTD","heroNew"]},options:{control:{type:"object"}}}},d=n(e=>({components:{DDropdown:t,ThemeProvider:p},data:()=>({value:""}),setup(){return{args:e}},template:`
    <ThemeProvider :initial-theme="{defaultInputSize: 'medium'}">
      <d-dropdown v-model="value" v-bind="args" />
    </ThemeProvider>
  `}),"Template"),s=n(e=>({components:{DDropdown:t},data:()=>({value:"identity"}),setup(){return{args:e}},template:'<d-dropdown v-model="value" v-bind="args" />'}),"PredefinedTemplate"),c=n(e=>({components:{DDropdown:t,DarkModeProvider:l},data:()=>({value:"identity"}),setup(){return{args:e}},template:`
    <dark-mode-provider :dark-mode="true">
      <d-dropdown v-bind="args" v-model="value" />
    </dark-mode-provider>
    `}),"DarkModePredefinedTemplate"),m=n(e=>({components:{DDropdown:t,DarkModeProvider:l},data:()=>({value:""}),setup(){return{args:e}},template:`
    <dark-mode-provider :dark-mode="true">
      <d-dropdown v-bind="args" v-model="value" />
    </dark-mode-provider>
    `}),"DarkModeTemplate"),a=n((e=null)=>{const r=e?e.bind({}):m.bind({});return r.decorators=[()=>({template:'<div style="padding: 3em; background: #121A26;"><story /></div>'})],r},"DarkModeTemplateFactory"),o=[{text:"Banking kit",value:"banking"},{text:"Money kit",value:"money"},{text:"Identity kit",value:"identity"},{text:"UI kit",value:"ui"},{text:"Commerce kit",value:"commerce"}],u=d.bind({});u.args={options:[...o]};const v=d.bind({});v.args={options:["Banking kit","Money kit","Identity kit","UI kit","Commerce kit"]};const k=a();k.args={options:[...o]};const y=d.bind({});y.args={options:[...o],label:"Dropdown"};const D=a();D.args={options:[...o],label:"Dropdown"};const b=s.bind({});b.args={label:"Predefined Dropdown",options:[...o]};const g=a(c);g.args={label:"Predefined Dropdown",options:[...o]};const M=["Default","TextOptions","DefaultDark","Label","LabelDark","Predefined","PredefinedDark"];export{u as Default,k as DefaultDark,y as Label,D as LabelDark,b as Predefined,g as PredefinedDark,v as TextOptions,M as __namedExportsOrder,P as default};
//# sourceMappingURL=DDropdown.stories-0371a534.js.map
