import{al as r,a6 as m}from"./DVerticalMovable-2454bcb3.js";import"./vue.esm-bundler-c1de2c1e.js";import"./iframe-b809c49e.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-042e6b4d.js";import"./floating-ui.dom-c3a31ea6.js";const v={title:"Forms/Copy Input",component:r,tags:["autodocs"],argTypes:{label:{control:{type:"text"}},text:{control:{type:"text"}},footnote:{control:{type:"text"}},size:{control:{type:"select"},options:["small","medium","large","xlarge","huge","massive"]}}},l=o=>({components:{DCopyInput:r},setup(){return{args:o}},template:`
      <d-copy-input v-bind="args"/>`}),e=l.bind({});e.args={label:"Demo Key",text:"dk_17j48r8qnxq9984w9429uqcwur09quw0r",footnote:"**Use this key in public places such as our JS web sdk."};const c=o=>({components:{DCopyInput:r,ThemeProvider:m},setup(){return{args:o}},template:`
    <theme-provider :initial-theme="{defaultInputSize: 'small'}">
        <d-copy-input v-bind="args"/>
    </theme-provider>
  `}),t=c.bind({});t.args={label:"Demo Key",text:"dk_17j48r8qnxq9984w9429uqcwur09quw0r",footnote:"**Use this key in public places such as our JS web sdk."};var n,s,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`args => ({
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
})`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var p,i,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  components: {
    DCopyInput,
    ThemeProvider
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <theme-provider :initial-theme="{defaultInputSize: 'small'}">
        <d-copy-input v-bind="args"/>
    </theme-provider>
  \`
})`,...(u=(i=t.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const x=["Default","CustomDefaultSize"];export{t as CustomDefaultSize,e as Default,x as __namedExportsOrder,v as default};
//# sourceMappingURL=DCopyInput.stories-56d7e864.js.map
