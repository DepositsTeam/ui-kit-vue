import{aa as r}from"./DTooltip-d12abcff.js";import"./vue.esm-bundler-673e2372.js";import"./floating-ui.dom-c3a31ea6.js";import"./_commonjsHelpers-042e6b4d.js";const m={title:"Forms/Copy Input",component:r,argTypes:{label:{control:{type:"text"}},text:{control:{type:"text"}},footnote:{control:{type:"text"}},size:{control:{type:"select"},options:["small","medium","large","xlarge","huge","massive"]}}},p=s=>({components:{DCopyInput:r},setup(){return{args:s}},template:`
      <d-copy-input v-bind="args"/>`}),t=p.bind({});t.args={label:"Demo Key",text:"dk_17j48r8qnxq9984w9429uqcwur09quw0r",footnote:"**Use this key in public places such as our JS web sdk."};var e,o,n;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`args => ({
  components: {
    DCopyInput
  },
  setup() {
    return {
      args
    };
  },
  template: \`
      <d-copy-input v-bind="args"/>\`
})`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const i=["Default"];export{t as Default,i as __namedExportsOrder,m as default};
//# sourceMappingURL=DCopyInput.stories-f28eb03e.js.map
