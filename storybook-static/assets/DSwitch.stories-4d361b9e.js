import{B as a,p as b,_ as g}from"./DWysiwyg-c17e0e8e.js";import"./vue.esm-bundler-ea20084a.js";import"./_commonjsHelpers-042e6b4d.js";import"./floating-ui.dom-c3a31ea6.js";const k={title:"Forms/Switch",component:a,tags:["autodocs"],argTypes:{colorScheme:{control:{type:"select"},options:["primary","danger","success","outline","invisible"]},label:{control:{type:"text"}},disabled:{control:{type:"boolean"}},thumbColor:{control:{type:"color"}},switchColor:{control:{type:"color"}},alignRight:{control:{type:"boolean"}},thumbSize:{control:{type:"text"},default:"18px"},switchWidth:{control:{type:"text"},default:"56px"},switchHeight:{control:{type:"text"},default:"26px"}}},h=e=>({components:{DSwitch:a},setup(){return{args:e}},template:'<d-switch v-bind="args" />'}),x=e=>({components:{DSwitch:a,DarkModeProvider:g},setup(){return{args:e}},template:`
    <dark-mode-provider :dark-mode="true">
      <d-switch v-bind="args" />
    </dark-mode-provider>
    `}),S=e=>({components:{DSwitch:a,DBox:b},setup(){return{args:e}},data:()=>({currentState:!0}),template:`
    <d-box>
      <d-switch v-bind="args" v-model="currentState" />
      <d-box>{{JSON.stringify(currentState)}}</d-box>
    </d-box>
  `}),y=()=>{const e=x.bind({});return e.decorators=[()=>({template:'<div style="padding: 3em; background: #121A26;"><story /></div>'})],e},t=h.bind({});t.args={label:"I agree to the terms and conditions"};const r=y();r.args={label:"I agree to the terms and conditions"};const o=S.bind({});var n,s,c;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`args => ({
  components: {
    DSwitch
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-switch v-bind="args" />\`
})`,...(c=(s=t.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var d,i,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:"DarkModeTemplateFactory()",...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var p,m,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  components: {
    DSwitch,
    DBox
  },
  setup() {
    return {
      args
    };
  },
  data: () => ({
    currentState: true
  }),
  template: \`
    <d-box>
      <d-switch v-bind="args" v-model="currentState" />
      <d-box>{{JSON.stringify(currentState)}}</d-box>
    </d-box>
  \`
})`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const M=["Default","DarkDefault","ModelledMode"];export{r as DarkDefault,t as Default,o as ModelledMode,M as __namedExportsOrder,k as default};
//# sourceMappingURL=DSwitch.stories-4d361b9e.js.map
