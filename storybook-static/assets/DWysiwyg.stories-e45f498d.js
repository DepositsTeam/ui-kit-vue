var a=Object.defineProperty;var n=(e,o)=>a(e,"name",{value:o,configurable:!0});import{a0 as t,_ as r}from"./DAccordion-8b25468e.js";import"./vue.esm-bundler-da4a8dbf.js";import"./iframe-e1a5a4b4.js";const u={parameters:{storySource:{source:`import DWysiwyg from "./DWysiwyg.vue";
import { DarkModeProvider } from "../main";

export default {
  components: DWysiwyg,
  title: "Forms/WYSIWYG Editor",
  component: DWysiwyg,
  argTypes: {
    label: {
      control: { type: "text" },
    },
    labelClass: {
      control: { type: "text" },
    },
    fontFace: {
      control: { type: "select" },
      options: ["circularSTD", "heroNew"],
    },
    labelFontFace: {
      control: { type: "text" },
    },
  },
};

const Template = (args) => ({
  components: { DWysiwyg },
  data: () => ({
    value: "",
  }),
  setup() {
    return { args };
  },
  template: \`<d-wysiwyg v-bind="args" v-model="value"  />\`,
});

const DarkModeTemplate = (args) => ({
  components: { DWysiwyg, DarkModeProvider },
  data: () => ({
    value: "",
  }),
  setup() {
    return { args };
  },
  template: \`
    <dark-mode-provider :dark-mode="true">
      <d-wysiwyg v-bind="args" v-model="value"  />
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

export const DarkDefault = DarkModeTemplateFactory();
DarkDefault.args = {
  label: "WYSIWYG Input area",
};
`,locationsMap:{default:{startLoc:{col:17,line:25},endLoc:{col:2,line:34},startBody:{col:17,line:25},endBody:{col:2,line:34}},"dark-default":{startLoc:{col:27,line:64},endLoc:{col:52,line:64},startBody:{col:27,line:64},endBody:{col:52,line:64}}}}},components:t,title:"Forms/WYSIWYG Editor",component:t,argTypes:{label:{control:{type:"text"}},labelClass:{control:{type:"text"}},fontFace:{control:{type:"select"},options:["circularSTD","heroNew"]},labelFontFace:{control:{type:"text"}}}},l=n(e=>({components:{DWysiwyg:t},data:()=>({value:""}),setup(){return{args:e}},template:'<d-wysiwyg v-bind="args" v-model="value"  />'}),"Template"),d=n(e=>({components:{DWysiwyg:t,DarkModeProvider:r},data:()=>({value:""}),setup(){return{args:e}},template:`
    <dark-mode-provider :dark-mode="true">
      <d-wysiwyg v-bind="args" v-model="value"  />
    </dark-mode-provider>
    `}),"DarkModeTemplate"),s=n(()=>{const e=d.bind({});return e.decorators=[()=>({template:'<div style="padding: 3em; background: #121A26;"><story /></div>'})],e},"DarkModeTemplateFactory"),D=l.bind({}),c=s();c.args={label:"WYSIWYG Input area"};const g=["Default","DarkDefault"];export{c as DarkDefault,D as Default,g as __namedExportsOrder,u as default};
//# sourceMappingURL=DWysiwyg.stories-e45f498d.js.map
