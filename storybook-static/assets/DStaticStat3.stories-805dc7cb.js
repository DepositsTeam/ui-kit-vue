import{N as o,O as r}from"./DWysiwyg-da7c8d17.js";import"./vue.esm-bundler-a99e1ba3.js";import"./floating-ui.dom-c3a31ea6.js";import"./_commonjsHelpers-042e6b4d.js";const u={title:"Static Stats 3",component:o,argTypes:{stat1:{control:{type:"object"}},stat2:{control:{type:"object"}},icon:{control:{type:["object","text"]}}}},c=n=>({components:{DStaticStat3:o},setup(){return{args:n}},template:`
      <d-static-stat3 v-bind="args"/>
    `}),t=c.bind({});t.args={stat1:{text:"API Calls this month",value:10},stat2:{text:"Total API Calls",value:50},icon:r};var a,e,s;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  components: {
    DStaticStat3
  },
  setup() {
    return {
      args
    };
  },
  template: \`
      <d-static-stat3 v-bind="args"/>
    \`
})`,...(s=(e=t.parameters)==null?void 0:e.docs)==null?void 0:s.source}}};const d=["Default"];export{t as Default,d as __namedExportsOrder,u as default};
//# sourceMappingURL=DStaticStat3.stories-805dc7cb.js.map