import{M as a,o as b,h as g}from"./DVerticalMovable-2454bcb3.js";import"./vue.esm-bundler-c1de2c1e.js";import"./iframe-b809c49e.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-042e6b4d.js";import"./floating-ui.dom-c3a31ea6.js";const _={title:"Forms/Switch",component:a,tags:["autodocs"],argTypes:{colorScheme:{control:{type:"select"},options:["primary","danger","success","outline","invisible"]},label:{control:{type:"text"}},disabled:{control:{type:"boolean"}},thumbColor:{control:{type:"color"}},switchColor:{control:{type:"color"}},alignRight:{control:{type:"boolean"}},thumbSize:{control:{type:"text"},default:"18px"},switchWidth:{control:{type:"text"},default:"56px"},switchHeight:{control:{type:"text"},default:"26px"}}},h=t=>({components:{DSwitch:a},setup(){return{args:t}},template:'<d-switch v-bind="args" />'}),x=t=>({components:{DSwitch:a,DarkModeProvider:g},setup(){return{args:t}},template:`
    <dark-mode-provider :dark-mode="true">
      <d-switch v-bind="args" />
    </dark-mode-provider>
    `}),S=t=>({components:{DSwitch:a,DBox:b},setup(){return{args:t}},data:()=>({currentState:!0}),template:`
    <d-box>
      <d-switch v-bind="args" v-model="currentState" />
      <d-box>{{JSON.stringify(currentState)}}</d-box>
    </d-box>
  `}),y=()=>{const t=x.bind({});return t.decorators=[()=>({template:'<div style="padding: 3em; background: #121A26;"><story /></div>'})],t},e=h.bind({});e.args={label:"I agree to the terms and conditions"};const o=y();o.args={label:"I agree to the terms and conditions"};const r=S.bind({});var n,s,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`args => ({
  components: {
    DSwitch
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-switch v-bind="args" />\`
})`,...(c=(s=e.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var d,i,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:"DarkModeTemplateFactory()",...(p=(i=o.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var l,m,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`args => ({
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
})`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const T=["Default","DarkDefault","ModelledMode"];export{o as DarkDefault,e as Default,r as ModelledMode,T as __namedExportsOrder,_ as default};
//# sourceMappingURL=DSwitch.stories-5856b351.js.map
