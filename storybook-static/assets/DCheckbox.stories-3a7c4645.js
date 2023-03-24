var l=Object.defineProperty;var n=(e,r)=>l(e,"name",{value:r,configurable:!0});import{o,_ as d}from"./DAccordion-2c9864a0.js";import"./vue.esm-bundler-f42bdcc2.js";import"./iframe-20b6c25f.js";const y={parameters:{storySource:{source:`import DCheckbox from "./DCheckbox.vue";
import DarkModeProvider from "../providers/DarkModeProvider.vue";

export default {
  title: "Forms/Checkbox",
  component: DCheckbox,
  argTypes: {
    wrapperClass: {
      control: { type: "text" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    alignToTop: {
      control: { type: "boolean" },
    },
    dashed: {
      control: { type: "boolean" },
    },
    label: {
      control: { type: "text" },
    },
    labelClass: {
      control: { type: "text" },
    },
    top: {
      control: { type: "boolean" },
    },
    alignRight: {
      control: { type: "boolean" },
    },
  },
};

const Template = (args) => ({
  components: { DCheckbox },
  data: () => ({
    value: false,
  }),
  setup: function () {
    return { args };
  },
  template: \`<d-checkbox v-bind="args" v-model="value" />\`,
});

const DarkModeTemplate = (args) => ({
  components: { DCheckbox, DarkModeProvider },
  data: () => ({
    value: false,
  }),
  setup() {
    return { args };
  },
  template: \`
    <dark-mode-provider :dark-mode="true">
      <d-checkbox v-bind="args" v-model="value" />
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
  label: "I agree to the terms and conditions",
};

export const DarkDefault = DarkModeTemplateFactory();
DarkDefault.args = {
  label: "I agree to the terms and conditions",
};

export const Dashed = Template.bind({});
Dashed.args = {
  label: "I agree to the terms and conditions",
  dashed: true,
};

export const DarkDashed = DarkModeTemplateFactory();
DarkDashed.args = {
  label: "I agree to the terms and conditions",
  dashed: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled checkbox",
  disabled: true,
};

export const DarkDisabled = DarkModeTemplateFactory();
DarkDisabled.args = {
  label: "I agree to the terms and conditions",
  disabled: true,
};
`,locationsMap:{default:{startLoc:{col:17,line:35},endLoc:{col:2,line:44},startBody:{col:17,line:35},endBody:{col:2,line:44}},"dark-default":{startLoc:{col:27,line:77},endLoc:{col:52,line:77},startBody:{col:27,line:77},endBody:{col:52,line:77}},dashed:{startLoc:{col:17,line:35},endLoc:{col:2,line:44},startBody:{col:17,line:35},endBody:{col:2,line:44}},"dark-dashed":{startLoc:{col:26,line:88},endLoc:{col:51,line:88},startBody:{col:26,line:88},endBody:{col:51,line:88}},disabled:{startLoc:{col:17,line:35},endLoc:{col:2,line:44},startBody:{col:17,line:35},endBody:{col:2,line:44}},"dark-disabled":{startLoc:{col:28,line:100},endLoc:{col:53,line:100},startBody:{col:28,line:100},endBody:{col:53,line:100}}}}},title:"Forms/Checkbox",component:o,argTypes:{wrapperClass:{control:{type:"text"}},disabled:{control:{type:"boolean"}},alignToTop:{control:{type:"boolean"}},dashed:{control:{type:"boolean"}},label:{control:{type:"text"}},labelClass:{control:{type:"text"}},top:{control:{type:"boolean"}},alignRight:{control:{type:"boolean"}}}},t=n(e=>({components:{DCheckbox:o},data:()=>({value:!1}),setup:function(){return{args:e}},template:'<d-checkbox v-bind="args" v-model="value" />'}),"Template"),s=n(e=>({components:{DCheckbox:o,DarkModeProvider:d},data:()=>({value:!1}),setup(){return{args:e}},template:`
    <dark-mode-provider :dark-mode="true">
      <d-checkbox v-bind="args" v-model="value" />
    </dark-mode-provider>
    `}),"DarkModeTemplate"),a=n(()=>{const e=s.bind({});return e.decorators=[()=>({template:'<div style="padding: 3em; background: #121A26;"><story /></div>'})],e},"DarkModeTemplateFactory"),c=t.bind({});c.args={label:"I agree to the terms and conditions"};const i=a();i.args={label:"I agree to the terms and conditions"};const p=t.bind({});p.args={label:"I agree to the terms and conditions",dashed:!0};const b=a();b.args={label:"I agree to the terms and conditions",dashed:!0};const m=t.bind({});m.args={label:"Disabled checkbox",disabled:!0};const D=a();D.args={label:"I agree to the terms and conditions",disabled:!0};const v=["Default","DarkDefault","Dashed","DarkDashed","Disabled","DarkDisabled"];export{b as DarkDashed,i as DarkDefault,D as DarkDisabled,p as Dashed,c as Default,m as Disabled,v as __namedExportsOrder,y as default};
//# sourceMappingURL=DCheckbox.stories-3a7c4645.js.map
