import{ac as l}from"./DWysiwyg-54ac81a6.js";import"./vue.esm-bundler-64d654d1.js";import"./floating-ui.dom-c3a31ea6.js";import"./_commonjsHelpers-87174ba5.js";const i={title:"Forms/Custom Color Config",component:l,argTypes:{label:{control:{type:"text"},default:"Color"},colorHeight:{control:{type:"text"},default:"28.997px"},colorWidth:{control:{type:"text"},default:"28.997px"},colors:{control:{type:"object"}},size:{control:{type:"select"},options:["small","medium","large","xlarge","huge","massive"]}}},s=n=>({components:{DCustomColorConfig:l},data:()=>({value:"#000000"}),setup(){return{args:n}},template:`
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
//# sourceMappingURL=DCustomColorConfig.stories-cde1df38.js.map
