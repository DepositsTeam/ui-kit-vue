import{M as t,_ as m}from"./DAccordion-c32a3d62.js";import"./vue.esm-bundler-02a62393.js";import"./_commonjsHelpers-87174ba5.js";const y={title:"Pagination",component:t,argTypes:{totalPages:{control:{type:"number"}},currentPage:{control:{type:"number"}},currentPageSiblings:{control:{type:"number"}},smartColor:{control:{type:"color"}}}},l=e=>({components:{DPagination:t},setup(){return{args:e}},template:'<d-pagination v-bind="args" />'}),u=e=>({components:{DPagination:t,DarkModeProvider:m},methods:{console:function(i){console.log("Page changed to: ",i)}},setup(){return{args:e}},template:`
    <dark-mode-provider :dark-mode="true">
      <d-pagination @page-changed="console" v-bind="args" />
    </dark-mode-provider>
    `}),g=()=>{const e=u.bind({});return e.decorators=[()=>({template:'<div style="padding: 3em; background: #121A26;"><story /></div>'})],e},o=l.bind({}),r=g();var a,n,s;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  components: {
    DPagination
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-pagination v-bind="args" />\`
})`,...(s=(n=o.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var c,d,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:"DarkModeTemplateFactory()",...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const P=["Default","DarkDefault"];export{r as DarkDefault,o as Default,P as __namedExportsOrder,y as default};
//# sourceMappingURL=DPagination.stories-88884728.js.map
