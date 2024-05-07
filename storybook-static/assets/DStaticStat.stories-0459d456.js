import{K as o,H as i}from"./DWysiwyg-c17e0e8e.js";import"./vue.esm-bundler-ea20084a.js";import"./_commonjsHelpers-042e6b4d.js";import"./floating-ui.dom-c3a31ea6.js";const d={title:"Static Stat",component:o,tags:["autodocs"],argTypes:{label:{control:{type:"text"}},icon:{control:{type:"object"}},collections:{control:{type:"object"}}}},r=n=>({components:{DStaticStat:o},setup(){return{args:n}},template:`
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
//# sourceMappingURL=DStaticStat.stories-0459d456.js.map
