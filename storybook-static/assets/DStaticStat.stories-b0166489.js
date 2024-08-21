import{P as s,Q as i}from"./DVerticalMovable-b7d344e7.js";import"./vue.esm-bundler-c1de2c1e.js";import"./iframe-011ae96e.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-042e6b4d.js";import"./floating-ui.dom-c3a31ea6.js";const S={title:"Static Stat",component:s,tags:["autodocs"],argTypes:{label:{control:{type:"text"}},icon:{control:{type:"object"}},collections:{control:{type:"object"}}}},r=n=>({components:{DStaticStat:s},setup(){return{args:n}},template:`
      <d-static-stat v-bind="args"/>`}),t=r.bind({});t.args={label:"Entities",icon:i,collections:[{title:"Total entities",text:"10,432"},{title:"Active entities",text:"7,432"},{title:"Entities",text:"220,842"},{title:"Transactions",text:"1,098 / $2.7M"}]};var e,a,o;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`args => ({
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
})`,...(o=(a=t.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const g=["Default"];export{t as Default,g as __namedExportsOrder,S as default};
//# sourceMappingURL=DStaticStat.stories-b0166489.js.map
