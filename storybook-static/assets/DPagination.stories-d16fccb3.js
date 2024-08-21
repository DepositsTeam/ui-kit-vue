import{a7 as i,_}from"./DWysiwyg-d62d5613.js";import"./vue.esm-bundler-77038495.js";import"./iframe-fea5ef6c.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-042e6b4d.js";import"./floating-ui.dom-c3a31ea6.js";const w={title:"Pagination",component:i,tags:["autodocs"],argTypes:{totalPages:{control:{type:"number"}},currentPage:{control:{type:"number"}},currentPageSiblings:{control:{type:"number"}},smartColor:{control:{type:"color"}},disabled:{control:{type:"boolean"}}}},s=e=>({components:{DPagination:i},setup(){return{args:e}},template:'<d-pagination v-bind="args" />'}),T=e=>({components:{DPagination:i,DarkModeProvider:_},methods:{console:function(h){console.log("Page changed to: ",h)}},setup(){return{args:e}},template:`
    <dark-mode-provider :dark-mode="true">
      <d-pagination @page-changed="console" v-bind="args" />
    </dark-mode-provider>
    `}),M=()=>{const e=T.bind({});return e.decorators=[()=>({template:'<div style="padding: 3em; background: #121A26;"><story /></div>'})],e},o=s.bind({}),d=M(),n=s.bind({});n.args={disabled:!0};const r=s.bind({});r.args={hidePages:!0,asyncPrevNext:!0};const a=s.bind({});a.args={hidePages:!0,asyncPrevNext:!0,prevDisabled:!0};const t=s.bind({});t.args={hidePages:!0,asyncPrevNext:!0,nextDisabled:!0};var c,p,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
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
})`,...(S=(O=t.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};const z=["Default","DarkDefault","Disabled","OnlyNextAndPrevAsync","DisabledPrevOnlyNextAndPrevAsync","DisabledNextOnlyNextAndPrevAsync"];export{d as DarkDefault,o as Default,n as Disabled,t as DisabledNextOnlyNextAndPrevAsync,a as DisabledPrevOnlyNextAndPrevAsync,r as OnlyNextAndPrevAsync,z as __namedExportsOrder,w as default};
//# sourceMappingURL=DPagination.stories-d16fccb3.js.map
