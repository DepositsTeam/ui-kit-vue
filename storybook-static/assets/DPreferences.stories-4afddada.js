import{a1 as n}from"./DWysiwyg-9bf70373.js";import"./vue.esm-bundler-7e79c529.js";import"./floating-ui.dom-c3a31ea6.js";import"./_commonjsHelpers-87174ba5.js";const u={title:"Preferences",component:n,argTypes:{lists:{control:{type:"object"}}}},o=a=>({components:{DPreferences:n},setup(){return{args:a}},template:`
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
})`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const l=["Default"];export{e as Default,l as __namedExportsOrder,u as default};
//# sourceMappingURL=DPreferences.stories-4afddada.js.map
