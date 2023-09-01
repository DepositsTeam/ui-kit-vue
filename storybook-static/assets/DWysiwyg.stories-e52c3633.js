import{D as a,_ as c}from"./DWysiwyg-7400274a.js";import"./vue.esm-bundler-d253c880.js";import"./floating-ui.dom-c3a31ea6.js";import"./_commonjsHelpers-042e6b4d.js";const b={components:a,title:"Forms/WYSIWYG Editor",component:a,argTypes:{label:{control:{type:"text"}},labelClass:{control:{type:"text"}},fontFace:{control:{type:"select"},options:["circularSTD","heroNew"]},labelFontFace:{control:{type:"text"}}}},m=e=>({components:{DWysiwyg:a},data:()=>({value:""}),setup(){return{args:e}},template:'<d-wysiwyg v-bind="args" v-model="value"  />'}),i=e=>({components:{DWysiwyg:a,DarkModeProvider:c},data:()=>({value:""}),setup(){return{args:e}},template:`
    <dark-mode-provider :dark-mode="true">
      <d-wysiwyg v-bind="args" v-model="value"  />
    </dark-mode-provider>
    `}),u=()=>{const e=i.bind({});return e.decorators=[()=>({template:'<div style="padding: 3em; background: #121A26;"><story /></div>'})],e},r=m.bind({}),t=u();t.args={label:"WYSIWYG Input area"};var o,s,n;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`args => ({
  components: {
    DWysiwyg
  },
  data: () => ({
    value: ""
  }),
  setup() {
    return {
      args
    };
  },
  template: \`<d-wysiwyg v-bind="args" v-model="value"  />\`
})`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var d,l,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"DarkModeTemplateFactory()",...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const k=["Default","DarkDefault"];export{t as DarkDefault,r as Default,k as __namedExportsOrder,b as default};
//# sourceMappingURL=DWysiwyg.stories-e52c3633.js.map
