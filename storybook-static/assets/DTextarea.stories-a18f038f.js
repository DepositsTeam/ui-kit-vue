var a=Object.defineProperty;var r=(e,l)=>a(e,"name",{value:l,configurable:!0});import{Y as n,_ as d}from"./DAccordion-5e36a576.js";import"./vue.esm-bundler-da4a8dbf.js";import"./iframe-c285f804.js";const k={parameters:{storySource:{source:`import DTextarea from "./DTextarea.vue";
import DarkModeProvider from "../providers/DarkModeProvider.vue";

export default {
  title: "Forms/Text Area",
  component: DTextarea,
  argTypes: {
    label: {
      control: { type: "text" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    errorMessage: {
      control: { type: "text" },
    },
    textAreaClassName: {
      control: { type: "text" },
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large", "xlarge", "huge", "massive"],
    },
    fontFace: {
      control: { type: "select" },
      options: ["circularSTD", "heroNew"],
    },
    rows: {
      control: { type: "text" },
    },
    minHeight: {
      control: { type: "text" },
    },
    maxHeight: {
      control: { type: "text" },
    },
  },
};

const Template = (args) => ({
  components: {
    DTextarea,
  },
  data: () => ({
    text: "dd",
  }),
  setup: function () {
    return { args };
  },
  template: \`<d-textarea v-bind="args" v-model="text" />\`,
});

const DarkModeTemplate = (args) => ({
  components: { DTextarea, DarkModeProvider },
  data: () => ({
    value: "",
  }),
  setup() {
    return { args };
  },
  template: \`
    <dark-mode-provider :dark-mode="true">
      <d-textarea v-bind="args" v-model="value" />
    </dark-mode-provider>
    \`,
});

const DarkModeTemplateFactory = () => {
  const Bound = DarkModeTemplate.bind({});
  Bound.decorators = [
    () => ({
      template:
        '<div style="padding: 3em; background: #121A26;"><story /></div>',
    }),
  ];
  return Bound;
};

export const Default = Template.bind({});
Default.args = {
  label: "Form Label",
  placeholder: "Input placeholder",
};

export const DefaultDark = DarkModeTemplateFactory();
DefaultDark.args = {
  label: "Form Label",
  placeholder: "Input placeholder",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Form Label",
  placeholder: "Input placeholder",
  disabled: true,
};

export const DisabledDark = DarkModeTemplateFactory();
DisabledDark.args = {
  label: "Form Label",
  placeholder: "Input placeholder",
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  label: "Form Label",
  placeholder: "Input placeholder",
  errorMessage: "Error message",
};

export const ErrorDark = DarkModeTemplateFactory();
ErrorDark.args = {
  label: "Form Label",
  placeholder: "Input placeholder",
  errorMessage: "Error message",
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  label: "Form label",
  placeholder: "Input placeholder",
  width: "100%",
};
`,locationsMap:{default:{startLoc:{col:17,line:40},endLoc:{col:2,line:51},startBody:{col:17,line:40},endBody:{col:2,line:51}},"default-dark":{startLoc:{col:27,line:85},endLoc:{col:52,line:85},startBody:{col:27,line:85},endBody:{col:52,line:85}},disabled:{startLoc:{col:17,line:40},endLoc:{col:2,line:51},startBody:{col:17,line:40},endBody:{col:2,line:51}},"disabled-dark":{startLoc:{col:28,line:98},endLoc:{col:53,line:98},startBody:{col:28,line:98},endBody:{col:53,line:98}},error:{startLoc:{col:17,line:40},endLoc:{col:2,line:51},startBody:{col:17,line:40},endBody:{col:2,line:51}},"error-dark":{startLoc:{col:25,line:112},endLoc:{col:50,line:112},startBody:{col:25,line:112},endBody:{col:50,line:112}},"full-width":{startLoc:{col:17,line:40},endLoc:{col:2,line:51},startBody:{col:17,line:40},endBody:{col:2,line:51}}}}},title:"Forms/Text Area",component:n,argTypes:{label:{control:{type:"text"}},disabled:{control:{type:"boolean"}},errorMessage:{control:{type:"text"}},textAreaClassName:{control:{type:"text"}},size:{control:{type:"select"},options:["small","medium","large","xlarge","huge","massive"]},fontFace:{control:{type:"select"},options:["circularSTD","heroNew"]},rows:{control:{type:"text"}},minHeight:{control:{type:"text"}},maxHeight:{control:{type:"text"}}}},o=r(e=>({components:{DTextarea:n},data:()=>({text:"dd"}),setup:function(){return{args:e}},template:'<d-textarea v-bind="args" v-model="text" />'}),"Template"),s=r(e=>({components:{DTextarea:n,DarkModeProvider:d},data:()=>({value:""}),setup(){return{args:e}},template:`
    <dark-mode-provider :dark-mode="true">
      <d-textarea v-bind="args" v-model="value" />
    </dark-mode-provider>
    `}),"DarkModeTemplate"),t=r(()=>{const e=s.bind({});return e.decorators=[()=>({template:'<div style="padding: 3em; background: #121A26;"><story /></div>'})],e},"DarkModeTemplateFactory"),c=o.bind({});c.args={label:"Form Label",placeholder:"Input placeholder"};const p=t();p.args={label:"Form Label",placeholder:"Input placeholder"};const i=o.bind({});i.args={label:"Form Label",placeholder:"Input placeholder",disabled:!0};const m=t();m.args={label:"Form Label",placeholder:"Input placeholder",disabled:!0};const u=o.bind({});u.args={label:"Form Label",placeholder:"Input placeholder",errorMessage:"Error message"};const b=t();b.args={label:"Form Label",placeholder:"Input placeholder",errorMessage:"Error message"};const D=o.bind({});D.args={label:"Form label",placeholder:"Input placeholder",width:"100%"};const v=["Default","DefaultDark","Disabled","DisabledDark","Error","ErrorDark","FullWidth"];export{c as Default,p as DefaultDark,i as Disabled,m as DisabledDark,u as Error,b as ErrorDark,D as FullWidth,v as __namedExportsOrder,k as default};
//# sourceMappingURL=DTextarea.stories-a18f038f.js.map
