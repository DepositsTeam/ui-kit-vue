import{ai as l}from"./DWysiwyg-8b06f99b.js";import"./vue.esm-bundler-77038495.js";import"./iframe-81abf740.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-042e6b4d.js";import"./floating-ui.dom-c3a31ea6.js";const d={title:"Forms/Custom Color Config",component:l,tags:["autodocs"],argTypes:{label:{control:{type:"text"},default:"Color"},colorHeight:{control:{type:"text"},default:"28.997px"},colorWidth:{control:{type:"text"},default:"28.997px"},colors:{control:{type:"object"}},size:{control:{type:"select"},options:["small","medium","large","xlarge","huge","massive"]}}},a=s=>({components:{DCustomColorConfig:l},data:()=>({value:"#000000"}),setup(){return{args:s}},template:`
      <d-custom-color-config v-model="value" v-bind="args"/>`}),o=a.bind({});o.args={colors:["#0DB9E9","#7B61FF","#00BBAA","#0D7FE9","#FFCC00","#27C079","#E85E75"],label:"Color",colorHeight:"28.997px",colorWidth:"28.997px"};var t,e,r;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  components: {
    DCustomColorConfig
  },
  data: () => ({
    value: "#000000"
  }),
  setup() {
    return {
      args
    };
  },
  template: \`
      <d-custom-color-config v-model="value" v-bind="args"/>\`
})`,...(r=(e=o.parameters)==null?void 0:e.docs)==null?void 0:r.source}}};const g=["Default"];export{o as Default,g as __namedExportsOrder,d as default};
//# sourceMappingURL=DCustomColorConfig.stories-9e8d7c0b.js.map
