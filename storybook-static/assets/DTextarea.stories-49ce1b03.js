import{p as c,m as w,_ as H}from"./DWysiwyg-208de099.js";import"./vue.esm-bundler-a99e1ba3.js";import"./floating-ui.dom-c3a31ea6.js";import"./_commonjsHelpers-042e6b4d.js";const O={title:"Forms/Text Area",component:c,tags:["autodocs"],argTypes:{...w,label:{control:{type:"text"}},disabled:{control:{type:"boolean"}},errorMessage:{control:{type:"text"}},textAreaClassName:{control:{type:"text"}},size:{control:{type:"select"},options:["small","medium","large","xlarge","huge","massive"]},fontFace:{control:{type:"select"},options:["circularSTD","heroNew"]},rows:{control:{type:"text"}},minHeight:{control:{type:"text"}},maxHeight:{control:{type:"text"}}}},d=e=>({components:{DTextarea:c},data:()=>({text:"dd"}),setup:function(){return{args:e}},template:'<d-textarea v-bind="args" v-model="text" />'}),N=e=>({components:{DTextarea:c,DarkModeProvider:H},data:()=>({value:""}),setup(){return{args:e}},template:`
    <dark-mode-provider :dark-mode="true">
      <d-textarea v-bind="args" v-model="value" />
    </dark-mode-provider>
    `}),p=()=>{const e=N.bind({});return e.decorators=[()=>({template:'<div style="padding: 3em; background: #121A26;"><story /></div>'})],e},r=d.bind({});r.args={label:"Form Label",placeholder:"Input placeholder"};const a=p();a.args={label:"Form Label",placeholder:"Input placeholder"};const t=d.bind({});t.args={label:"Form Label",placeholder:"Input placeholder",disabled:!0};const o=p();o.args={label:"Form Label",placeholder:"Input placeholder",disabled:!0};const s=d.bind({});s.args={label:"Form Label",placeholder:"Input placeholder",errorMessage:"Error message"};const n=p();n.args={label:"Form Label",placeholder:"Input placeholder",errorMessage:"Error message"};const l=d.bind({});l.args={label:"Form label",placeholder:"Input placeholder",width:"100%"};var m,u,i;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  components: {
    DTextarea
  },
  data: () => ({
    text: "dd"
  }),
  setup: function () {
    return {
      args
    };
  },
  template: \`<d-textarea v-bind="args" v-model="text" />\`
})`,...(i=(u=r.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var g,b,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:"DarkModeTemplateFactory()",...(x=(b=a.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var D,h,v;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
  components: {
    DTextarea
  },
  data: () => ({
    text: "dd"
  }),
  setup: function () {
    return {
      args
    };
  },
  template: \`<d-textarea v-bind="args" v-model="text" />\`
})`,...(v=(h=t.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var y,k,T;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:"DarkModeTemplateFactory()",...(T=(k=o.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var F,f,M;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`args => ({
  components: {
    DTextarea
  },
  data: () => ({
    text: "dd"
  }),
  setup: function () {
    return {
      args
    };
  },
  template: \`<d-textarea v-bind="args" v-model="text" />\`
})`,...(M=(f=s.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var S,E,I;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:"DarkModeTemplateFactory()",...(I=(E=n.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var L,_,A;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`args => ({
  components: {
    DTextarea
  },
  data: () => ({
    text: "dd"
  }),
  setup: function () {
    return {
      args
    };
  },
  template: \`<d-textarea v-bind="args" v-model="text" />\`
})`,...(A=(_=l.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};const P=["Default","DefaultDark","Disabled","DisabledDark","Error","ErrorDark","FullWidth"];export{r as Default,a as DefaultDark,t as Disabled,o as DisabledDark,s as Error,n as ErrorDark,l as FullWidth,P as __namedExportsOrder,O as default};
//# sourceMappingURL=DTextarea.stories-49ce1b03.js.map
