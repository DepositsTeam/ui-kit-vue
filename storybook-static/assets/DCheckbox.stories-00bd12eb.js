import{au as c,h as P,_ as A}from"./DWysiwyg-8b06f99b.js";import"./vue.esm-bundler-77038495.js";import"./iframe-81abf740.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-042e6b4d.js";import"./floating-ui.dom-c3a31ea6.js";const H={title:"Forms/Checkbox",component:c,tags:["autodocs"],argTypes:{wrapperClass:{control:{type:"text"}},disabled:{control:{type:"boolean"}},alignToTop:{control:{type:"boolean"}},dashed:{control:{type:"boolean"}},label:{control:{type:"text"}},labelClass:{control:{type:"text"}},top:{control:{type:"boolean"}},alignRight:{control:{type:"boolean"}}}},l=e=>({components:{DCheckbox:c},data:()=>({value:!1}),setup:function(){return{args:e}},template:'<d-checkbox v-bind="args" v-model="value" />'}),L=e=>({components:{DCheckbox:c,DarkModeProvider:A},data:()=>({value:!1}),setup(){return{args:e}},template:`
    <dark-mode-provider :dark-mode="true">
      <d-checkbox v-bind="args" v-model="value" />
    </dark-mode-provider>
    `}),m=()=>{const e=L.bind({});return e.decorators=[()=>({template:'<div style="padding: 3em; background: #121A26;"><story /></div>'})],e},a=l.bind({});a.args={label:"I agree to the terms and conditions"};const o=m();o.args={label:"I agree to the terms and conditions"};const t=l.bind({});t.args={label:"I agree to the terms and conditions",dashed:!0};const r=m();r.args={label:"I agree to the terms and conditions",dashed:!0};const s=l.bind({});s.args={label:"Disabled checkbox",disabled:!0};const n=m();n.args={label:"I agree to the terms and conditions",disabled:!0};const w=e=>({components:{DCheckbox:c,DAutoLayout:P},setup(){return{args:e}},data:()=>({items:["Eggs"]}),template:`
    <d-auto-layout direction="vertical">
      <p>Selected items are: {{items}}</p>
      
      <d-auto-layout>
        <d-checkbox v-model="items" label="Eggs" readonly value="Eggs"></d-checkbox>
        <d-checkbox v-model="items" label="Beans" value="Beans"></d-checkbox>
        <d-checkbox v-model="items" label="Potatoes" value="Potatoes"></d-checkbox>
        <d-checkbox v-model="items" label="Salad" value="Salad"></d-checkbox>
      </d-auto-layout>
    </d-auto-layout>
  `}),d=w.bind({});var u,p,i;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
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
})`,...(i=(p=a.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var b,g,k;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:"DarkModeTemplateFactory()",...(k=(g=o.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};var h,v,x;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
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
})`,...(x=(v=t.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var D,y,f;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:"DarkModeTemplateFactory()",...(f=(y=r.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var S,T,C;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
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
})`,...(C=(T=s.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var M,E,_;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:"DarkModeTemplateFactory()",...(_=(E=n.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var B,F,I;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
  components: {
    DCheckbox,
    DAutoLayout
  },
  setup() {
    return {
      args
    };
  },
  data: () => ({
    items: ["Eggs"]
  }),
  template: \`
    <d-auto-layout direction="vertical">
      <p>Selected items are: {{items}}</p>
      
      <d-auto-layout>
        <d-checkbox v-model="items" label="Eggs" readonly value="Eggs"></d-checkbox>
        <d-checkbox v-model="items" label="Beans" value="Beans"></d-checkbox>
        <d-checkbox v-model="items" label="Potatoes" value="Potatoes"></d-checkbox>
        <d-checkbox v-model="items" label="Salad" value="Salad"></d-checkbox>
      </d-auto-layout>
    </d-auto-layout>
  \`
})`,...(I=(F=d.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};const J=["Default","DarkDefault","Dashed","DarkDashed","Disabled","DarkDisabled","Multiple"];export{r as DarkDashed,o as DarkDefault,n as DarkDisabled,t as Dashed,a as Default,s as Disabled,d as Multiple,J as __namedExportsOrder,H as default};
//# sourceMappingURL=DCheckbox.stories-00bd12eb.js.map
