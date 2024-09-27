import{N as n,p as m}from"./DAccordion-c00eb372.js";import"./vue.esm-bundler-e81cbe33.js";import"./iframe-f71edc5d.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-87174ba5.js";const h={title:"Forms/Copy Input",component:n,tags:["autodocs"],argTypes:{label:{control:{type:"text"}},text:{control:{type:"text"}},footnote:{control:{type:"text"}},size:{control:{type:"select"},options:["small","medium","large","xlarge","huge","massive"]}}},c=o=>({components:{DCopyInput:n},setup(){return{args:o}},template:`
      <d-copy-input v-bind="args"/>`}),e=c.bind({});e.args={label:"Demo Key",text:"dk_17j48r8qnxq9984w9429uqcwur09quw0r",footnote:"**Use this key in public places such as our JS web sdk."};const l=o=>({components:{DCopyInput:n,ThemeProvider:m},setup(){return{args:o}},template:`
    <theme-provider :initial-theme="{defaultInputSize: 'small'}">
        <d-copy-input v-bind="args"/>
    </theme-provider>
  `}),t=l.bind({});t.args={label:"Demo Key",text:"dk_17j48r8qnxq9984w9429uqcwur09quw0r",footnote:"**Use this key in public places such as our JS web sdk."};var r,s,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
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
})`,...(i=(u=t.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};const v=["Default","CustomDefaultSize"];export{t as CustomDefaultSize,e as Default,v as __namedExportsOrder,h as default};
