import{$ as s,f as c}from"./DAccordion-BcJ7fCmy.js";import"./vue.esm-bundler-XIZ-WwZ4.js";import"./iframe-CdPvGOON.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-BosuxZz1.js";const v={component:s,title:"Error Message",tags:["autodocs"],argTypes:{errorMessage:{control:{type:"text"}},showIcon:{control:{type:"text"}},redText:{control:{type:"boolean"}},alignToTop:{control:{type:"boolean"}}}},i=o=>({components:{DErrorMessage:s},setup(){return{args:o}},template:'<d-error-message v-bind="args" />'}),g=o=>({components:{DErrorMessage:s,DarkModeProvider:c},setup(){return{args:o}},template:`
    <dark-mode-provider :dark-mode="true">
      <d-error-message v-bind="args" />
    </dark-mode-provider>
  `}),e=i.bind({});e.args={errorMessage:"This is an error message"};const r=g.bind({});r.decorators=[()=>({template:'<div style="background: #121A26; padding: 3em"><story /></div>'})];r.args={errorMessage:"This is an error message"};var a,t,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  components: {
    DErrorMessage
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-error-message v-bind="args" />\`
})`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var d,m,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  components: {
    DErrorMessage,
    DarkModeProvider
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <dark-mode-provider :dark-mode="true">
      <d-error-message v-bind="args" />
    </dark-mode-provider>
  \`
})`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const b=["Default","DarkModeDefault"];export{r as DarkModeDefault,e as Default,b as __namedExportsOrder,v as default};
