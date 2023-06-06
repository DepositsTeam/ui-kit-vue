import{z as n,C as s}from"./DAccordion-9d3c9598.js";import"./vue.esm-bundler-b2140274.js";import"./_commonjsHelpers-87174ba5.js";const l={component:n,title:"Debit Card",argTypes:{logo:{control:{type:"text"}},cardNo:{control:{type:"text"}},exp:{control:{type:"text"}},cvv:{control:{type:"text"}},name:{control:{type:"text"}},brand:{control:{type:"select",options:s}}}},p=a=>({components:{DDebitCard:n},setup(){return{args:a}},template:'<d-debit-card v-bind="args" />'}),t=p.bind({});var e,r,o;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`args => ({
  components: {
    DDebitCard
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-debit-card v-bind="args" />\`
})`,...(o=(r=t.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const m=["Default"];export{t as Default,m as __namedExportsOrder,l as default};
//# sourceMappingURL=DDebitCard.stories-9c2e1255.js.map
