import{a5 as c,_ as f}from"./DWysiwyg-2b801905.js";import"./vue.esm-bundler-6f1630d7.js";import"./iframe-6b342987.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-042e6b4d.js";import"./floating-ui.dom-c3a31ea6.js";const C={title:"Pagination",component:c,tags:["autodocs"],argTypes:{totalPages:{control:{type:"number"}},currentPage:{control:{type:"number"}},currentPageSiblings:{control:{type:"number"}},smartColor:{control:{type:"color"}}}},s=e=>({components:{DPagination:c},setup(){return{args:e}},template:'<d-pagination v-bind="args" />'}),O=e=>({components:{DPagination:c,DarkModeProvider:f},methods:{console:function(k){console.log("Page changed to: ",k)}},setup(){return{args:e}},template:`
    <dark-mode-provider :dark-mode="true">
      <d-pagination @page-changed="console" v-bind="args" />
    </dark-mode-provider>
    `}),h=()=>{const e=O.bind({});return e.decorators=[()=>({template:'<div style="padding: 3em; background: #121A26;"><story /></div>'})],e},t=s.bind({}),o=h(),r=s.bind({});r.args={hidePages:!0,asyncPrevNext:!0};const n=s.bind({});n.args={hidePages:!0,asyncPrevNext:!0,prevDisabled:!0};const a=s.bind({});a.args={hidePages:!0,asyncPrevNext:!0,nextDisabled:!0};var d,i,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  components: {
    DPagination
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-pagination v-bind="args" />\`
})`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,g,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:"DarkModeTemplateFactory()",...(u=(g=o.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var l,P,y;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`args => ({
  components: {
    DPagination
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-pagination v-bind="args" />\`
})`,...(y=(P=r.parameters)==null?void 0:P.docs)==null?void 0:y.source}}};var v,b,D;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
  components: {
    DPagination
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-pagination v-bind="args" />\`
})`,...(D=(b=n.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};var x,A,N;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
  components: {
    DPagination
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-pagination v-bind="args" />\`
})`,...(N=(A=a.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};const E=["Default","DarkDefault","OnlyNextAndPrevAsync","DisabledPrevOnlyNextAndPrevAsync","DisabledNextOnlyNextAndPrevAsync"];export{o as DarkDefault,t as Default,a as DisabledNextOnlyNextAndPrevAsync,n as DisabledPrevOnlyNextAndPrevAsync,r as OnlyNextAndPrevAsync,E as __namedExportsOrder,C as default};
//# sourceMappingURL=DPagination.stories-f97054cc.js.map
