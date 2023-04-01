var p=Object.defineProperty;var o=(e,r)=>p(e,"name",{value:r,configurable:!0});import{x as t,y as s,_ as a}from"./DAccordion-dc0cb5a1.js";import"./vue.esm-bundler-da4a8dbf.js";import"./iframe-e26828aa.js";const B={parameters:{storySource:{source:`import DDropdown from "./DDropdown.vue";
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
  template: \`
    <d-dropdown v-model="value" v-bind="args" />
    <p>Selected value is: {{value}}</p>
  \`,
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

export const PredefinedReturnFullObject = PredefinedTemplate.bind({});
PredefinedReturnFullObject.args = {
  label: "Predefined Dropdown",
  options: [...options],
  returnFullObject: true,
};

export const PredefinedDark = DarkModeTemplateFactory(
  DarkModePredefinedTemplate
);
PredefinedDark.args = {
  label: "Predefined Dropdown",
  options: [...options],
};
`,locationsMap:{default:{startLoc:{col:17,line:50},endLoc:{col:2,line:63},startBody:{col:17,line:50},endBody:{col:2,line:63}},"text-options":{startLoc:{col:17,line:50},endLoc:{col:2,line:63},startBody:{col:17,line:50},endBody:{col:2,line:63}},"default-dark":{startLoc:{col:27,line:159},endLoc:{col:52,line:159},startBody:{col:27,line:159},endBody:{col:52,line:159}},label:{startLoc:{col:17,line:50},endLoc:{col:2,line:63},startBody:{col:17,line:50},endBody:{col:2,line:63}},"label-dark":{startLoc:{col:25,line:170},endLoc:{col:50,line:170},startBody:{col:25,line:170},endBody:{col:50,line:170}},predefined:{startLoc:{col:27,line:65},endLoc:{col:2,line:77},startBody:{col:27,line:65},endBody:{col:2,line:77}},"predefined-return-full-object":{startLoc:{col:27,line:65},endLoc:{col:2,line:77},startBody:{col:27,line:65},endBody:{col:2,line:77}},"predefined-dark":{startLoc:{col:30,line:189},endLoc:{col:1,line:191},startBody:{col:30,line:189},endBody:{col:1,line:191}}}}},title:"Forms/Dropdown",component:t,argTypes:{label:{control:{type:"text"}},placeholder:{control:{type:"text"}},disabled:{control:{type:"boolean"}},dropDown:{control:{type:"boolean"}},size:{control:{type:"select"},options:["small","medium","large","xlarge","huge","massive"]},errorMessage:{control:{type:"text"}},rightIcon:{control:{type:"object"}},leftIcon:{control:{type:"object"}},onlyNumbers:{control:{type:"boolean"}},wrapperClass:{control:{type:"text"}},fontFace:{control:{type:"select"},options:["circularSTD","heroNew"]},options:{control:{type:"object"}}}},d=o(e=>({components:{DDropdown:t,ThemeProvider:s},data:()=>({value:""}),setup(){return{args:e}},template:`
    <ThemeProvider :initial-theme="{defaultInputSize: 'medium'}">
      <d-dropdown v-model="value" v-bind="args" />
    </ThemeProvider>
  `}),"Template"),i=o(e=>({components:{DDropdown:t},data:()=>({value:"identity"}),setup(){return{args:e}},template:`
    <d-dropdown v-model="value" v-bind="args" />
    <p>Selected value is: {{value}}</p>
  `}),"PredefinedTemplate"),c=o(e=>({components:{DDropdown:t,DarkModeProvider:a},data:()=>({value:"identity"}),setup(){return{args:e}},template:`
    <dark-mode-provider :dark-mode="true">
      <d-dropdown v-bind="args" v-model="value" />
    </dark-mode-provider>
    `}),"DarkModePredefinedTemplate"),m=o(e=>({components:{DDropdown:t,DarkModeProvider:a},data:()=>({value:""}),setup(){return{args:e}},template:`
    <dark-mode-provider :dark-mode="true">
      <d-dropdown v-bind="args" v-model="value" />
    </dark-mode-provider>
    `}),"DarkModeTemplate"),l=o((e=null)=>{const r=e?e.bind({}):m.bind({});return r.decorators=[()=>({template:'<div style="padding: 3em; background: #121A26;"><story /></div>'})],r},"DarkModeTemplateFactory"),n=[{text:"Banking kit",value:"banking"},{text:"Money kit",value:"money"},{text:"Identity kit",value:"identity"},{text:"UI kit",value:"ui"},{text:"Commerce kit",value:"commerce"}],u=d.bind({});u.args={options:[...n]};const v=d.bind({});v.args={options:["Banking kit","Money kit","Identity kit","UI kit","Commerce kit"]};const k=l();k.args={options:[...n]};const b=d.bind({});b.args={options:[...n],label:"Dropdown"};const y=l();y.args={options:[...n],label:"Dropdown"};const D=i.bind({});D.args={label:"Predefined Dropdown",options:[...n]};const g=i.bind({});g.args={label:"Predefined Dropdown",options:[...n],returnFullObject:!0};const f=l(c);f.args={label:"Predefined Dropdown",options:[...n]};const L=["Default","TextOptions","DefaultDark","Label","LabelDark","Predefined","PredefinedReturnFullObject","PredefinedDark"];export{u as Default,k as DefaultDark,b as Label,y as LabelDark,D as Predefined,f as PredefinedDark,g as PredefinedReturnFullObject,v as TextOptions,L as __namedExportsOrder,B as default};
//# sourceMappingURL=DDropdown.stories-74c59330.js.map
