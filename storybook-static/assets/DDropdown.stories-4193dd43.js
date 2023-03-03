var i=Object.defineProperty;var n=(e,r)=>i(e,"name",{value:r,configurable:!0});import{x as t,_ as l}from"./DAccordion-8db56995.js";import"./vue.esm-bundler-f42bdcc2.js";import"./iframe-db4edb5d.js";const T={parameters:{storySource:{source:`import DDropdown from "./DDropdown.vue";
import DarkModeProvider from "../providers/DarkModeProvider.vue";

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
  components: { DDropdown },
  data: () => ({
    value: "",
  }),
  setup() {
    return { args };
  },
  template: \`<d-dropdown v-model="value" v-bind="args" />\`,
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
`,locationsMap:{default:{startLoc:{col:17,line:49},endLoc:{col:2,line:58},startBody:{col:17,line:49},endBody:{col:2,line:58}},"text-options":{startLoc:{col:17,line:49},endLoc:{col:2,line:58},startBody:{col:17,line:49},endBody:{col:2,line:58}},"default-dark":{startLoc:{col:27,line:151},endLoc:{col:52,line:151},startBody:{col:27,line:151},endBody:{col:52,line:151}},label:{startLoc:{col:17,line:49},endLoc:{col:2,line:58},startBody:{col:17,line:49},endBody:{col:2,line:58}},"label-dark":{startLoc:{col:25,line:162},endLoc:{col:50,line:162},startBody:{col:25,line:162},endBody:{col:50,line:162}},predefined:{startLoc:{col:27,line:60},endLoc:{col:2,line:69},startBody:{col:27,line:60},endBody:{col:2,line:69}},"predefined-dark":{startLoc:{col:30,line:174},endLoc:{col:1,line:176},startBody:{col:30,line:174},endBody:{col:1,line:176}}}}},title:"Forms/Dropdown",component:t,argTypes:{label:{control:{type:"text"}},placeholder:{control:{type:"text"}},disabled:{control:{type:"boolean"}},dropDown:{control:{type:"boolean"}},size:{control:{type:"select"},options:["small","medium","large","xlarge","huge","massive"]},errorMessage:{control:{type:"text"}},rightIcon:{control:{type:"object"}},leftIcon:{control:{type:"object"}},onlyNumbers:{control:{type:"boolean"}},wrapperClass:{control:{type:"text"}},fontFace:{control:{type:"select"},options:["circularSTD","heroNew"]},options:{control:{type:"object"}}}},a=n(e=>({components:{DDropdown:t},data:()=>({value:""}),setup(){return{args:e}},template:'<d-dropdown v-model="value" v-bind="args" />'}),"Template"),p=n(e=>({components:{DDropdown:t},data:()=>({value:"identity"}),setup(){return{args:e}},template:'<d-dropdown v-model="value" v-bind="args" />'}),"PredefinedTemplate"),s=n(e=>({components:{DDropdown:t,DarkModeProvider:l},data:()=>({value:"identity"}),setup(){return{args:e}},template:`
    <dark-mode-provider :dark-mode="true">
      <d-dropdown v-bind="args" v-model="value" />
    </dark-mode-provider>
    `}),"DarkModePredefinedTemplate"),c=n(e=>({components:{DDropdown:t,DarkModeProvider:l},data:()=>({value:""}),setup(){return{args:e}},template:`
    <dark-mode-provider :dark-mode="true">
      <d-dropdown v-bind="args" v-model="value" />
    </dark-mode-provider>
    `}),"DarkModeTemplate"),d=n((e=null)=>{const r=e?e.bind({}):c.bind({});return r.decorators=[()=>({template:'<div style="padding: 3em; background: #121A26;"><story /></div>'})],r},"DarkModeTemplateFactory"),o=[{text:"Banking kit",value:"banking"},{text:"Money kit",value:"money"},{text:"Identity kit",value:"identity"},{text:"UI kit",value:"ui"},{text:"Commerce kit",value:"commerce"}],m=a.bind({});m.args={options:[...o]};const u=a.bind({});u.args={options:["Banking kit","Money kit","Identity kit","UI kit","Commerce kit"]};const k=d();k.args={options:[...o]};const D=a.bind({});D.args={options:[...o],label:"Dropdown"};const y=d();y.args={options:[...o],label:"Dropdown"};const v=p.bind({});v.args={label:"Predefined Dropdown",options:[...o]};const b=d(s);b.args={label:"Predefined Dropdown",options:[...o]};const M=["Default","TextOptions","DefaultDark","Label","LabelDark","Predefined","PredefinedDark"];export{m as Default,k as DefaultDark,D as Label,y as LabelDark,v as Predefined,b as PredefinedDark,u as TextOptions,M as __namedExportsOrder,T as default};
//# sourceMappingURL=DDropdown.stories-4193dd43.js.map
