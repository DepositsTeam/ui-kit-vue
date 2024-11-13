import{a8 as c,f as T}from"./DAccordion-B9M9CmEs.js";import"./vue.esm-bundler-XIZ-WwZ4.js";import"./iframe-pVKoPNgJ.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-BosuxZz1.js";const q={title:"Pagination",component:c,tags:["autodocs"],argTypes:{totalPages:{control:{type:"number"}},currentPage:{control:{type:"number"}},currentPageSiblings:{control:{type:"number"}},smartColor:{control:{type:"color"}},disabled:{control:{type:"boolean"}}}},s=e=>({components:{DPagination:c},setup(){return{args:e}},template:'<d-pagination v-bind="args" />'}),_=e=>({components:{DPagination:c,DarkModeProvider:T},methods:{console:function(h){console.log("Page changed to: ",h)}},setup(){return{args:e}},template:`
    <dark-mode-provider :dark-mode="true">
      <d-pagination @page-changed="console" v-bind="args" />
    </dark-mode-provider>
    `}),M=()=>{const e=_.bind({});return e.decorators=[()=>({template:'<div style="padding: 3em; background: #121A26;"><story /></div>'})],e},o=s.bind({}),d=M(),n=s.bind({});n.args={disabled:!0};const r=s.bind({});r.args={hidePages:!0,asyncPrevNext:!0};const a=s.bind({});a.args={hidePages:!0,asyncPrevNext:!0,prevDisabled:!0};const t=s.bind({});t.args={hidePages:!0,asyncPrevNext:!0,nextDisabled:!0};var i,p,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  components: {
    DPagination
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-pagination v-bind="args" />\`
})`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,u,l;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:"DarkModeTemplateFactory()",...(l=(u=d.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var b,P,y;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
  components: {
    DPagination
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-pagination v-bind="args" />\`
})`,...(y=(P=n.parameters)==null?void 0:P.docs)==null?void 0:y.source}}};var D,v,x;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
  components: {
    DPagination
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-pagination v-bind="args" />\`
})`,...(x=(v=r.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var A,N,k;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`args => ({
  components: {
    DPagination
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-pagination v-bind="args" />\`
})`,...(k=(N=a.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var f,O,S;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
  components: {
    DPagination
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-pagination v-bind="args" />\`
})`,...(S=(O=t.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};const w=["Default","DarkDefault","Disabled","OnlyNextAndPrevAsync","DisabledPrevOnlyNextAndPrevAsync","DisabledNextOnlyNextAndPrevAsync"];export{d as DarkDefault,o as Default,n as Disabled,t as DisabledNextOnlyNextAndPrevAsync,a as DisabledPrevOnlyNextAndPrevAsync,r as OnlyNextAndPrevAsync,w as __namedExportsOrder,q as default};
