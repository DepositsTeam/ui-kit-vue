import{H as n,I as i}from"./DWysiwyg-12929a9f.js";import"./vue.esm-bundler-d253c880.js";import"./floating-ui.dom-c3a31ea6.js";import"./_commonjsHelpers-042e6b4d.js";const d={title:"Static Stats",component:n,argTypes:{label:{control:{type:"text"}},icon:{control:{type:"object"}},collections:{control:{type:"object"}}}},r=o=>({components:{DStaticStats:n},setup(){return{args:o}},template:`
      <d-static-stats v-bind="args"/>`}),t=r.bind({});t.args={label:"Entities",icon:i,collections:[{title:"Total entities",text:"10,432"},{title:"Active entities",text:"7,432"},{title:"Entities",text:"220,842"},{title:"Transactions",text:"1,098 / $2.7M"}]};var e,s,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`args => ({
  components: {
    DStaticStats
  },
  setup() {
    return {
      args
    };
  },
  template: \`
      <d-static-stats v-bind="args"/>\`
})`,...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const u=["Default"];export{t as Default,u as __namedExportsOrder,d as default};
//# sourceMappingURL=DStaticStats.stories-5c3bd012.js.map
