import{ad as r,J as a}from"./DAccordion-92522e5b.js";import"./vue.esm-bundler-e81cbe33.js";import"./iframe-c93c47b8.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-87174ba5.js";const u={title:"Quick Tool",component:r,tags:["autodocs"],argTypes:{title:{control:{type:"text"}},icon:{control:{type:"object"}},isAdded:{control:{type:"boolean"}}}},c=s=>({components:{DQuickTool:r},setup(){return{args:s}},template:`
      <d-quick-tool v-bind="args"/>`}),o=c.bind({});o.args={title:"Send money",icon:a,isAdded:!0};var t,e,n;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  components: {
    DQuickTool
  },
  setup() {
    return {
      args
    };
  },
  template: \`
      <d-quick-tool v-bind="args"/>\`
})`,...(n=(e=o.parameters)==null?void 0:e.docs)==null?void 0:n.source}}};const g=["Default"];export{o as Default,g as __namedExportsOrder,u as default};
