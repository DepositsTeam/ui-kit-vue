import{D as a,_ as c}from"./DWysiwyg-d62d5613.js";import"./vue.esm-bundler-77038495.js";import"./iframe-fea5ef6c.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-042e6b4d.js";import"./floating-ui.dom-c3a31ea6.js";const w={components:a,title:"Forms/WYSIWYG Editor",tags:["autodocs"],component:a,argTypes:{label:{control:{type:"text"}},labelClass:{control:{type:"text"}},fontFace:{control:{type:"select"},options:["circularSTD","heroNew"]},labelFontFace:{control:{type:"text"}}}},m=e=>({components:{DWysiwyg:a},data:()=>({value:""}),setup(){return{args:e}},template:'<d-wysiwyg v-bind="args" v-model="value"  />'}),i=e=>({components:{DWysiwyg:a,DarkModeProvider:c},data:()=>({value:""}),setup(){return{args:e}},template:`
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
})`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var d,p,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"DarkModeTemplateFactory()",...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const f=["Default","DarkDefault"];export{t as DarkDefault,r as Default,f as __namedExportsOrder,w as default};
//# sourceMappingURL=DWysiwyg.stories-d2024a13.js.map
