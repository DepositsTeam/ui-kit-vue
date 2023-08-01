import{aa as r,_ as p}from"./DAccordion-6382e15d.js";import"./vue.esm-bundler-02a62393.js";import"./_commonjsHelpers-87174ba5.js";const D={components:r,title:"Forms/WYSIWYG Editor",component:r,argTypes:{label:{control:{type:"text"}},labelClass:{control:{type:"text"}},fontFace:{control:{type:"select"},options:["circularSTD","heroNew"]},labelFontFace:{control:{type:"text"}}}},m=e=>({components:{DWysiwyg:r},data:()=>({value:""}),setup(){return{args:e}},template:'<d-wysiwyg v-bind="args" v-model="value"  />'}),i=e=>({components:{DWysiwyg:r,DarkModeProvider:p},data:()=>({value:""}),setup(){return{args:e}},template:`
    <dark-mode-provider :dark-mode="true">
      <d-wysiwyg v-bind="args" v-model="value"  />
    </dark-mode-provider>
    `}),u=()=>{const e=i.bind({});return e.decorators=[()=>({template:'<div style="padding: 3em; background: #121A26;"><story /></div>'})],e},a=m.bind({}),t=u();t.args={label:"WYSIWYG Input area"};var o,s,n;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`args => ({
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
})`,...(n=(s=a.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var d,l,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"DarkModeTemplateFactory()",...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const b=["Default","DarkDefault"];export{t as DarkDefault,a as Default,b as __namedExportsOrder,D as default};
//# sourceMappingURL=DWysiwyg.stories-f875cc42.js.map
