import{P as o,Q as i}from"./DWysiwyg-82f524ba.js";import"./vue.esm-bundler-2f75f87e.js";import"./floating-ui.dom-c3a31ea6.js";import"./_commonjsHelpers-87174ba5.js";const d={title:"Static Stat",component:o,tags:["autodocs"],argTypes:{label:{control:{type:"text"}},icon:{control:{type:"object"}},collections:{control:{type:"object"}}}},r=n=>({components:{DStaticStat:o},setup(){return{args:n}},template:`
      <d-static-stat v-bind="args"/>`}),t=r.bind({});t.args={label:"Entities",icon:i,collections:[{title:"Total entities",text:"10,432"},{title:"Active entities",text:"7,432"},{title:"Entities",text:"220,842"},{title:"Transactions",text:"1,098 / $2.7M"}]};var e,a,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`args => ({
  components: {
    DStaticStat
  },
  setup() {
    return {
      args
    };
  },
  template: \`
      <d-static-stat v-bind="args"/>\`
})`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const u=["Default"];export{t as Default,u as __namedExportsOrder,d as default};
//# sourceMappingURL=DStaticStat.stories-7e9b77f1.js.map
