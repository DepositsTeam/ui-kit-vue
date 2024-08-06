import{a5 as n}from"./DWysiwyg-3c0e030f.js";import"./vue.esm-bundler-77038495.js";import"./iframe-6ddd522f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-042e6b4d.js";import"./floating-ui.dom-c3a31ea6.js";const d={title:"Preferences",component:n,tags:["autodocs"],argTypes:{lists:{control:{type:"object"}}}},o=a=>({components:{DPreferences:n},setup(){return{args:a}},template:`
      <d-preferences v-bind="args"/>`}),e=o.bind({});e.args={lists:[{title:"PAY & TRANSFER",items:[{id:1,key:"Successful payments",value:!0},{id:2,key:"Failed payments",value:!0}]},{title:"ACCOUNTS",items:[{id:3,key:"Debits",value:!0},{id:4,key:"Credits",value:!0}]}]};var t,r,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  components: {
    DPreferences
  },
  setup() {
    return {
      args
    };
  },
  template: \`
      <d-preferences v-bind="args"/>\`
})`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const f=["Default"];export{e as Default,f as __namedExportsOrder,d as default};
//# sourceMappingURL=DPreferences.stories-9ac06fb1.js.map
