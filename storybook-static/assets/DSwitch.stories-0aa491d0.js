var r=Object.defineProperty;var e=(t,o)=>r(t,"name",{value:o,configurable:!0});import{R as n,c as a,_ as l}from"./DAccordion-70812f94.js";import"./vue.esm-bundler-f42bdcc2.js";import"./iframe-87663d28.js";const g={parameters:{storySource:{source:`import DSwitch from "./DSwitch.vue";
import { DBox } from "../main";
import { DarkModeProvider } from "../main";

export default {
  title: "Forms/Switch",
  component: DSwitch,
  argTypes: {
    colorScheme: {
      control: { type: "select" },
      options: ["primary", "danger", "success", "outline", "invisible"],
    },
    label: {
      control: { type: "text" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    thumbColor: {
      control: { type: "color" },
    },
    switchColor: {
      control: { type: "color" },
    },
    alignRight: {
      control: { type: "boolean" },
    },
    thumbSize: {
      control: { type: "text" },
      default: "18px",
    },
    switchWidth: {
      control: { type: "text" },
      default: "56px",
    },
    switchHeight: {
      control: { type: "text" },
      default: "26px",
    },
  },
};

const Template = (args) => ({
  components: { DSwitch },
  setup() {
    return { args };
  },
  template: \`<d-switch v-bind="args" />\`,
});

const DarkModeTemplate = (args) => ({
  components: { DSwitch, DarkModeProvider },
  setup() {
    return { args };
  },
  template: \`
    <dark-mode-provider :dark-mode="true">
      <d-switch v-bind="args" />
    </dark-mode-provider>
    \`,
});

const VModelledTemplate = (args) => ({
  components: { DSwitch, DBox },
  setup() {
    return { args };
  },
  data: () => ({
    currentState: true,
  }),
  template: \`
    <d-box>
      <d-switch v-bind="args" v-model="currentState" />
      <d-box>{{JSON.stringify(currentState)}}</d-box>
    </d-box>
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
  label: "I agree to the terms and conditions",
};

export const DarkDefault = DarkModeTemplateFactory();
DarkDefault.args = {
  label: "I agree to the terms and conditions",
};

export const ModelledMode = VModelledTemplate.bind({});
`,locationsMap:{default:{startLoc:{col:17,line:43},endLoc:{col:2,line:49},startBody:{col:17,line:43},endBody:{col:2,line:49}},"dark-default":{startLoc:{col:27,line:95},endLoc:{col:52,line:95},startBody:{col:27,line:95},endBody:{col:52,line:95}},"modelled-mode":{startLoc:{col:26,line:63},endLoc:{col:2,line:77},startBody:{col:26,line:63},endBody:{col:2,line:77}}}}},title:"Forms/Switch",component:n,argTypes:{colorScheme:{control:{type:"select"},options:["primary","danger","success","outline","invisible"]},label:{control:{type:"text"}},disabled:{control:{type:"boolean"}},thumbColor:{control:{type:"color"}},switchColor:{control:{type:"color"}},alignRight:{control:{type:"boolean"}},thumbSize:{control:{type:"text"},default:"18px"},switchWidth:{control:{type:"text"},default:"56px"},switchHeight:{control:{type:"text"},default:"26px"}}},d=e(t=>({components:{DSwitch:n},setup(){return{args:t}},template:'<d-switch v-bind="args" />'}),"Template"),c=e(t=>({components:{DSwitch:n,DarkModeProvider:l},setup(){return{args:t}},template:`
    <dark-mode-provider :dark-mode="true">
      <d-switch v-bind="args" />
    </dark-mode-provider>
    `}),"DarkModeTemplate"),s=e(t=>({components:{DSwitch:n,DBox:a},setup(){return{args:t}},data:()=>({currentState:!0}),template:`
    <d-box>
      <d-switch v-bind="args" v-model="currentState" />
      <d-box>{{JSON.stringify(currentState)}}</d-box>
    </d-box>
  `}),"VModelledTemplate"),i=e(()=>{const t=c.bind({});return t.decorators=[()=>({template:'<div style="padding: 3em; background: #121A26;"><story /></div>'})],t},"DarkModeTemplateFactory"),p=d.bind({});p.args={label:"I agree to the terms and conditions"};const m=i();m.args={label:"I agree to the terms and conditions"};const D=s.bind({}),x=["Default","DarkDefault","ModelledMode"];export{m as DarkDefault,p as Default,D as ModelledMode,x as __namedExportsOrder,g as default};
//# sourceMappingURL=DSwitch.stories-0aa491d0.js.map
