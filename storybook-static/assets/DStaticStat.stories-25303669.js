import{P as s,Q as i}from"./DWysiwyg-54ac81a6.js";import"./vue.esm-bundler-64d654d1.js";import"./floating-ui.dom-c3a31ea6.js";import"./_commonjsHelpers-87174ba5.js";const d={title:"Static Stat",component:s,argTypes:{label:{control:{type:"text"}},icon:{control:{type:"object"}},collections:{control:{type:"object"}}}},r=o=>({components:{DStaticStat:s},setup(){return{args:o}},template:`
      <d-static-stat v-bind="args"/>`}),t=r.bind({});t.args={label:"Entities",icon:i,collections:[{title:"Total entities",text:"10,432"},{title:"Active entities",text:"7,432"},{title:"Entities",text:"220,842"},{title:"Transactions",text:"1,098 / $2.7M"}]};var e,a,n;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`args => ({
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
})`,...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const u=["Default"];export{t as Default,u as __namedExportsOrder,d as default};
//# sourceMappingURL=DStaticStat.stories-25303669.js.map
