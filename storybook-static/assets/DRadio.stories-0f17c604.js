import{a4 as s,h as x,_ as M}from"./DWysiwyg-27c4e042.js";import"./vue.esm-bundler-c483924c.js";import"./_commonjsHelpers-042e6b4d.js";import"./floating-ui.dom-c3a31ea6.js";const L={title:"Forms/Radio",component:s,tags:["autodocs"],argTypes:{ringed:{control:{type:"boolean"}},alignToTop:{control:{type:"boolean"}},label:{control:{type:"text"}},value:{control:{type:"text"}},disabled:{control:{type:"boolean"}},alignRight:{control:{type:"boolean"}},ringSize:{control:{type:"text"},default:"16px"},ringThickness:{control:{type:"text"},default:"5px"}}},R=e=>({components:{DRadio:s},setup:function(){return{args:e}},template:'<d-radio v-bind="args" />'}),S=e=>({components:{DRadio:s,DarkModeProvider:M},data:()=>({value:""}),setup(){return{args:e}},template:`
    <dark-mode-provider :dark-mode="true">
      <d-radio v-bind="args" />
    </dark-mode-provider>
    `}),T=()=>{const e=S.bind({});return e.decorators=[()=>({template:'<div style="padding: 3em; background: #121A26;"><story /></div>'})],e},a=R.bind({});a.args={label:"Checking"};const o=T();o.args={label:"Checking"};const r=R.bind({});r.args={label:"Checking",ringed:!0};const t=T();t.args={label:"Checking",ringed:!0};const V=e=>({components:{DRadio:s,DAutoLayout:x},data:()=>({checkValue:""}),setup(){return{args:e}},template:`
    <d-auto-layout align-items="center">
    <d-radio label="Yes" value="yes" v-model="checkValue" />
    <d-radio label="No" v-model="checkValue" value="no"  />
    </d-auto-layout>
    `}),n=V.bind({});var d,l,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  components: {
    DRadio
  },
  setup: function () {
    return {
      args
    };
  },
  template: \`<d-radio v-bind="args" />\`
})`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var i,u,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:"DarkModeTemplateFactory()",...(p=(u=o.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,g,k;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  components: {
    DRadio
  },
  setup: function () {
    return {
      args
    };
  },
  template: \`<d-radio v-bind="args" />\`
})`,...(k=(g=r.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};var b,y,D;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:"DarkModeTemplateFactory()",...(D=(y=t.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var v,h,f;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
  components: {
    DRadio,
    DAutoLayout
  },
  data: () => ({
    checkValue: ""
  }),
  setup() {
    return {
      args
    };
  },
  template: \`
    <d-auto-layout align-items="center">
    <d-radio label="Yes" value="yes" v-model="checkValue" />
    <d-radio label="No" v-model="checkValue" value="no"  />
    </d-auto-layout>
    \`
})`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const N=["Default","DarkDefault","Ringed","DarkRinged","Multiple"];export{o as DarkDefault,t as DarkRinged,a as Default,n as Multiple,r as Ringed,N as __namedExportsOrder,L as default};
//# sourceMappingURL=DRadio.stories-0f17c604.js.map
