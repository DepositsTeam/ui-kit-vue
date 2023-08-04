import{O as t,_ as m}from"./UndoOutlineIcon-7f54b2d3.js";import"./vue.esm-bundler-d253c880.js";import"./floating-ui.dom-c3a31ea6.js";import"./_commonjsHelpers-042e6b4d.js";const P={title:"Pagination",component:t,argTypes:{totalPages:{control:{type:"number"}},currentPage:{control:{type:"number"}},currentPageSiblings:{control:{type:"number"}},smartColor:{control:{type:"color"}}}},l=e=>({components:{DPagination:t},setup(){return{args:e}},template:'<d-pagination v-bind="args" />'}),u=e=>({components:{DPagination:t,DarkModeProvider:m},methods:{console:function(i){console.log("Page changed to: ",i)}},setup(){return{args:e}},template:`
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
})`,...(s=(n=o.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var c,p,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:"DarkModeTemplateFactory()",...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const f=["Default","DarkDefault"];export{r as DarkDefault,o as Default,f as __namedExportsOrder,P as default};
//# sourceMappingURL=DPagination.stories-b3e6b13f.js.map
