import{a7 as l}from"./DWysiwyg-e296c1df.js";import"./vue.esm-bundler-f842f4aa.js";import"./floating-ui.dom-c3a31ea6.js";import"./_commonjsHelpers-042e6b4d.js";const i={title:"Forms/Custom Color Config",component:l,argTypes:{label:{control:{type:"text"},default:"Color"},colorHeight:{control:{type:"text"},default:"28.997px"},colorWidth:{control:{type:"text"},default:"28.997px"},colors:{control:{type:"object"}},size:{control:{type:"select"},options:["small","medium","large","xlarge","huge","massive"]}}},s=n=>({components:{DCustomColorConfig:l},data:()=>({value:"#000000"}),setup(){return{args:n}},template:`
      <d-custom-color-config v-model="value" v-bind="args"/>`}),o=s.bind({});o.args={colors:["#0DB9E9","#7B61FF","#00BBAA","#0D7FE9","#FFCC00","#27C079","#E85E75"],label:"Color",colorHeight:"28.997px",colorWidth:"28.997px"};var t,e,r;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
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
})`,...(r=(e=o.parameters)==null?void 0:e.docs)==null?void 0:r.source}}};const u=["Default"];export{o as Default,u as __namedExportsOrder,i as default};
//# sourceMappingURL=DCustomColorConfig.stories-59a303ef.js.map
