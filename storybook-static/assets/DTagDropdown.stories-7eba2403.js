import{a5 as u,F as Z,a6 as ee,_ as X}from"./DAccordion-e55d2420.js";import"./vue.esm-bundler-02a62393.js";import"./_commonjsHelpers-87174ba5.js";const se={title:"Forms/Tag Dropdown",component:u,argTypes:{...Z,placeholder:{control:{type:"text"}},showCheckboxes:{control:{type:"boolean"}},options:{control:{type:"object"}}}},g=e=>({components:{DTagDropdown:u},data:()=>({value:[]}),setup(){return{args:e}},template:'<d-tag-dropdown v-model="value" v-bind="args" />'}),b=e=>({components:{DTagDropdown:u},data:()=>({value:["banking","money"]}),setup(){return{args:e}},template:`
    <d-tag-dropdown v-model="value" v-bind="args" />
    <p>Selected value is {{value}}</p>
  `}),ae=e=>({components:{DTagDropdown:u,DarkModeProvider:X},data:()=>({value:"identity"}),setup(){return{args:e}},template:`
    <dark-mode-provider :dark-mode="true">
      <d-tag-dropdown v-bind="args" v-model="value" />
    </dark-mode-provider>
    `}),ne=e=>({components:{DTagDropdown:u,DarkModeProvider:X},data:()=>({value:""}),setup(){return{args:e}},template:`
    <dark-mode-provider :dark-mode="true">
      <d-tag-dropdown v-bind="args" v-model="value" />
    </dark-mode-provider>
    `}),v=(e=null)=>{const D=e?e.bind({}):ne.bind({});return D.decorators=[()=>({template:'<div style="padding: 3em; background: #121A26;"><story /></div>'})],D},a=[{text:"Banking kit",value:"banking"},{text:"Money kit",value:"money"},{text:"Identity kit",value:"identity"},{text:"UI kit",value:"ui"},{text:"Commerce kit",value:"commerce"},{text:"Benefits",value:"benefits"},{text:"API Docs",value:"api_docs"},{text:"Console",value:"console"},{text:"Statements",value:"statements"},{text:"Payouts",value:"payouts"}],Y=["Commerce","Identity","UI","Money","Banking"],n=g.bind({});n.args={options:[...a]};const r=v();r.args={options:[...a]};const o=g.bind({});o.args={options:[...a],label:"Dropdown"};const t=v();t.args={options:[...a],label:"Dropdown"};const s=g.bind({});s.args={options:[...Y],label:"String Options"};const d=v();d.args={options:[...Y],label:"String Options"};const p=b.bind({});p.args={options:[...a],label:"Predefined Options"};const i=b.bind({});i.args={options:[...a],label:"Predefined Options",returnFullObject:!0};const l=v(ae);l.args={options:[...a],label:"Predefined Options"};const c=b.bind({});c.args={options:[...a],label:"Predefined Options",leftIcon:ee};const m=g.bind({});m.args={options:[...a],label:"Loading",loading:!0};var k,f,y;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
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
})`,...(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var w,S,O;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:"DarkModeTemplateFactory()",...(O=(S=r.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};var T,P,x;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
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
})`,...(x=(P=o.parameters)==null?void 0:P.docs)==null?void 0:x.source}}};var M,F,L;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:"DarkModeTemplateFactory()",...(L=(F=t.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var _,I,h;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
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
})`,...(h=(I=s.parameters)==null?void 0:I.docs)==null?void 0:h.source}}};var j,B,C;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:"DarkModeTemplateFactory()",...(C=(B=d.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var A,U,W;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`args => ({
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
})`,...(W=(U=p.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var E,$,q;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
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
})`,...(q=($=i.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var z,G,H;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:"DarkModeTemplateFactory(DarkModePredefinedTemplate)",...(H=(G=l.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,N;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`args => ({
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
})`,...(N=(K=c.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var Q,R,V;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`args => ({
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
})`,...(V=(R=m.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};const de=["Default","DefaultDark","Label","LabelDark","StringOptions","StringOptionsDark","PredefinedOptions","PredefinedOptionsWithFullObject","PredefinedOptionsDark","LeftIcon","Loading"];export{n as Default,r as DefaultDark,o as Label,t as LabelDark,c as LeftIcon,m as Loading,p as PredefinedOptions,l as PredefinedOptionsDark,i as PredefinedOptionsWithFullObject,s as StringOptions,d as StringOptionsDark,de as __namedExportsOrder,se as default};
//# sourceMappingURL=DTagDropdown.stories-7eba2403.js.map
