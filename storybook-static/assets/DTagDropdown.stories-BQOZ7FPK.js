import{as as g,Q as ne,at as oe,f as ae}from"./DAccordion-BVk4RD25.js";import"./vue.esm-bundler-CUqwZzoc.js";import"./iframe-DyUYSNBQ.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-BosuxZz1.js";const me={title:"Forms/Tag Dropdown",component:g,tags:["autodocs"],argTypes:{...ne,showCheckboxes:{control:{type:"boolean"}},loading:{control:{type:"boolean"}}}},v=e=>({components:{DTagDropdown:g},data:()=>({value:[]}),setup(){return{args:e}},template:'<d-tag-dropdown v-model="value" v-bind="args" />'}),b=e=>({components:{DTagDropdown:g},data:()=>({value:["banking","money"]}),setup(){return{args:e}},template:`
    <d-tag-dropdown v-model="value" v-bind="args" />
    <p>Selected value is {{value}}</p>
  `}),te=e=>({components:{DTagDropdown:g,DarkModeProvider:ae},data:()=>({value:"identity"}),setup(){return{args:e}},template:`
    <dark-mode-provider :dark-mode="true">
      <d-tag-dropdown v-bind="args" v-model="value" />
    </dark-mode-provider>
    `}),se=e=>({components:{DTagDropdown:g,DarkModeProvider:ae},data:()=>({value:""}),setup(){return{args:e}},template:`
    <dark-mode-provider :dark-mode="true">
      <d-tag-dropdown v-bind="args" v-model="value" />
    </dark-mode-provider>
    `}),D=(e=null)=>{const k=e?e.bind({}):se.bind({});return k.decorators=[()=>({template:'<div style="padding: 3em; background: #121A26;"><story /></div>'})],k},a=[{text:"Banking kit",value:"banking"},{text:"Money kit",value:"money"},{text:"Identity kit",value:"identity"},{text:"UI kit",value:"ui"},{text:"Commerce kit",value:"commerce"},{text:"Benefits",value:"benefits"},{text:"API Docs",value:"api_docs"},{text:"Console",value:"console"},{text:"Statements",value:"statements"},{text:"Payouts",value:"payouts"}],re=["Commerce","Identity","UI","Money","Banking"],r=v.bind({});r.args={options:[...a]};const n=D();n.args={options:[...a]};const o=v.bind({});o.args={options:[...a],label:"Dropdown"};const t=v.bind({});t.args={options:[...a],label:"Error",errorMessage:"Error message"};const s=D();s.args={options:[...a],label:"Dropdown"};const d=v.bind({});d.args={options:[...re],label:"String Options"};const p=D();p.args={options:[...re],label:"String Options"};const i=b.bind({});i.args={options:[...a],label:"Predefined Options"};const l=b.bind({});l.args={options:[...a],label:"Predefined Options",returnFullObject:!0};const c=D(te);c.args={options:[...a],label:"Predefined Options"};const m=b.bind({});m.args={options:[...a],label:"Predefined Options",leftIcon:oe};const u=v.bind({});u.args={options:[...a],label:"Loading",loading:!0};var w,f,T;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
  components: {
    DTagDropdown
  },
  data: () => ({
    value: []
  }),
  setup() {
    return {
      args
    };
  },
  template: \`<d-tag-dropdown v-model="value" v-bind="args" />\`
})`,...(T=(f=r.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var y,S,O;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:"DarkModeTemplateFactory()",...(O=(S=n.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};var P,x,M;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`args => ({
  components: {
    DTagDropdown
  },
  data: () => ({
    value: []
  }),
  setup() {
    return {
      args
    };
  },
  template: \`<d-tag-dropdown v-model="value" v-bind="args" />\`
})`,...(M=(x=o.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};var _,F,L;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
  components: {
    DTagDropdown
  },
  data: () => ({
    value: []
  }),
  setup() {
    return {
      args
    };
  },
  template: \`<d-tag-dropdown v-model="value" v-bind="args" />\`
})`,...(L=(F=t.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var I,E,h;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:"DarkModeTemplateFactory()",...(h=(E=s.parameters)==null?void 0:E.docs)==null?void 0:h.source}}};var B,C,j;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
  components: {
    DTagDropdown
  },
  data: () => ({
    value: []
  }),
  setup() {
    return {
      args
    };
  },
  template: \`<d-tag-dropdown v-model="value" v-bind="args" />\`
})`,...(j=(C=d.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var A,H,U;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:"DarkModeTemplateFactory()",...(U=(H=p.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};var W,$,Q;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`args => ({
  components: {
    DTagDropdown
  },
  data: () => ({
    value: ["banking", "money"]
  }),
  setup() {
    return {
      args
    };
  },
  template: \`
    <d-tag-dropdown v-model="value" v-bind="args" />
    <p>Selected value is {{value}}</p>
  \`
})`,...(Q=($=i.parameters)==null?void 0:$.docs)==null?void 0:Q.source}}};var q,z,G;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
  components: {
    DTagDropdown
  },
  data: () => ({
    value: ["banking", "money"]
  }),
  setup() {
    return {
      args
    };
  },
  template: \`
    <d-tag-dropdown v-model="value" v-bind="args" />
    <p>Selected value is {{value}}</p>
  \`
})`,...(G=(z=l.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var J,K,N;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:"DarkModeTemplateFactory(DarkModePredefinedTemplate)",...(N=(K=c.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var R,V,X;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`args => ({
  components: {
    DTagDropdown
  },
  data: () => ({
    value: ["banking", "money"]
  }),
  setup() {
    return {
      args
    };
  },
  template: \`
    <d-tag-dropdown v-model="value" v-bind="args" />
    <p>Selected value is {{value}}</p>
  \`
})`,...(X=(V=m.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var Y,Z,ee;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`args => ({
  components: {
    DTagDropdown
  },
  data: () => ({
    value: []
  }),
  setup() {
    return {
      args
    };
  },
  template: \`<d-tag-dropdown v-model="value" v-bind="args" />\`
})`,...(ee=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const ue=["Default","DefaultDark","Label","HasError","LabelDark","StringOptions","StringOptionsDark","PredefinedOptions","PredefinedOptionsWithFullObject","PredefinedOptionsDark","LeftIcon","Loading"];export{r as Default,n as DefaultDark,t as HasError,o as Label,s as LabelDark,m as LeftIcon,u as Loading,i as PredefinedOptions,c as PredefinedOptionsDark,l as PredefinedOptionsWithFullObject,d as StringOptions,p as StringOptionsDark,ue as __namedExportsOrder,me as default};
