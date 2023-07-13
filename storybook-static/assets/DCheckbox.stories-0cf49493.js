import{o as d,_ as F}from"./DAccordion-a61d52f6.js";import"./vue.esm-bundler-02a62393.js";import"./_commonjsHelpers-87174ba5.js";const E={title:"Forms/Checkbox",component:d,argTypes:{wrapperClass:{control:{type:"text"}},disabled:{control:{type:"boolean"}},alignToTop:{control:{type:"boolean"}},dashed:{control:{type:"boolean"}},label:{control:{type:"text"}},labelClass:{control:{type:"text"}},top:{control:{type:"boolean"}},alignRight:{control:{type:"boolean"}}}},c=e=>({components:{DCheckbox:d},data:()=>({value:!1}),setup:function(){return{args:e}},template:'<d-checkbox v-bind="args" v-model="value" />'}),I=e=>({components:{DCheckbox:d,DarkModeProvider:F},data:()=>({value:!1}),setup(){return{args:e}},template:`
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
})`,...(i=(m=a.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var u,b,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:"DarkModeTemplateFactory()",...(g=(b=r.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var D,k,h;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
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
})`,...(h=(k=o.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var v,x,f;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:"DarkModeTemplateFactory()",...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var y,T,C;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
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
})`,...(C=(T=s.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var M,S,_;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:"DarkModeTemplateFactory()",...(_=(S=n.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};const O=["Default","DarkDefault","Dashed","DarkDashed","Disabled","DarkDisabled"];export{t as DarkDashed,r as DarkDefault,n as DarkDisabled,o as Dashed,a as Default,s as Disabled,O as __namedExportsOrder,E as default};
//# sourceMappingURL=DCheckbox.stories-0cf49493.js.map
