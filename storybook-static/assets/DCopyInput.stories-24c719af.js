import{al as o,a4 as m}from"./DWysiwyg-ceedb84c.js";import"./vue.esm-bundler-41d8d808.js";import"./floating-ui.dom-c3a31ea6.js";import"./_commonjsHelpers-042e6b4d.js";const f={title:"Forms/Copy Input",component:o,tags:["autodocs"],argTypes:{label:{control:{type:"text"}},text:{control:{type:"text"}},footnote:{control:{type:"text"}},size:{control:{type:"select"},options:["small","medium","large","xlarge","huge","massive"]}}},l=n=>({components:{DCopyInput:o},setup(){return{args:n}},template:`
      <d-copy-input v-bind="args"/>`}),e=l.bind({});e.args={label:"Demo Key",text:"dk_17j48r8qnxq9984w9429uqcwur09quw0r",footnote:"**Use this key in public places such as our JS web sdk."};const c=n=>({components:{DCopyInput:o,ThemeProvider:m},setup(){return{args:n}},template:`
    <theme-provider :initial-theme="{defaultInputSize: 'small'}">
        <d-copy-input v-bind="args"/>
    </theme-provider>
  `}),t=c.bind({});t.args={label:"Demo Key",text:"dk_17j48r8qnxq9984w9429uqcwur09quw0r",footnote:"**Use this key in public places such as our JS web sdk."};var r,s,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
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
})`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var p,u,i;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
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
})`,...(i=(u=t.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};const h=["Default","CustomDefaultSize"];export{t as CustomDefaultSize,e as Default,h as __namedExportsOrder,f as default};
//# sourceMappingURL=DCopyInput.stories-24c719af.js.map
