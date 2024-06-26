import{av as d,_ as F}from"./DWysiwyg-c17e0e8e.js";import"./vue.esm-bundler-ea20084a.js";import"./_commonjsHelpers-042e6b4d.js";import"./floating-ui.dom-c3a31ea6.js";const O={title:"Forms/Checkbox",component:d,tags:["autodocs"],argTypes:{wrapperClass:{control:{type:"text"}},disabled:{control:{type:"boolean"}},alignToTop:{control:{type:"boolean"}},dashed:{control:{type:"boolean"}},label:{control:{type:"text"}},labelClass:{control:{type:"text"}},top:{control:{type:"boolean"}},alignRight:{control:{type:"boolean"}}}},c=e=>({components:{DCheckbox:d},data:()=>({value:!1}),setup:function(){return{args:e}},template:'<d-checkbox v-bind="args" v-model="value" />'}),I=e=>({components:{DCheckbox:d,DarkModeProvider:F},data:()=>({value:!1}),setup(){return{args:e}},template:`
    <dark-mode-provider :dark-mode="true">
      <d-checkbox v-bind="args" v-model="value" />
    </dark-mode-provider>
    `}),l=()=>{const e=I.bind({});return e.decorators=[()=>({template:'<div style="padding: 3em; background: #121A26;"><story /></div>'})],e},a=c.bind({});a.args={label:"I agree to the terms and conditions"};const r=l();r.args={label:"I agree to the terms and conditions"};const o=c.bind({});o.args={label:"I agree to the terms and conditions",dashed:!0};const t=l();t.args={label:"I agree to the terms and conditions",dashed:!0};const s=c.bind({});s.args={label:"Disabled checkbox",disabled:!0};const n=l();n.args={label:"I agree to the terms and conditions",disabled:!0};var p,m,i;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  components: {
    DCheckbox
  },
  data: () => ({
    value: false
  }),
  setup: function () {
    return {
      args
    };
  },
  template: \`<d-checkbox v-bind="args" v-model="value" />\`
})`,...(i=(m=a.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var u,b,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:"DarkModeTemplateFactory()",...(g=(b=r.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var D,k,v;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
  components: {
    DCheckbox
  },
  data: () => ({
    value: false
  }),
  setup: function () {
    return {
      args
    };
  },
  template: \`<d-checkbox v-bind="args" v-model="value" />\`
})`,...(v=(k=o.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var h,x,f;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:"DarkModeTemplateFactory()",...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var y,T,C;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
  components: {
    DCheckbox
  },
  data: () => ({
    value: false
  }),
  setup: function () {
    return {
      args
    };
  },
  template: \`<d-checkbox v-bind="args" v-model="value" />\`
})`,...(C=(T=s.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var M,S,_;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:"DarkModeTemplateFactory()",...(_=(S=n.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};const P=["Default","DarkDefault","Dashed","DarkDashed","Disabled","DarkDisabled"];export{t as DarkDashed,r as DarkDefault,n as DarkDisabled,o as Dashed,a as Default,s as Disabled,P as __namedExportsOrder,O as default};
//# sourceMappingURL=DCheckbox.stories-b4ce2595.js.map
