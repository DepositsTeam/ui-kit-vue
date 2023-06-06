import{a1 as m,F as R,a2 as V,_ as N}from"./DAccordion-9d3c9598.js";import"./vue.esm-bundler-b2140274.js";import"./_commonjsHelpers-87174ba5.js";const ne={title:"Forms/Tag Dropdown",component:m,argTypes:{...R,placeholder:{control:{type:"text"}},showCheckboxes:{control:{type:"boolean"}},options:{control:{type:"object"}}}},g=e=>({components:{DTagDropdown:m},data:()=>({value:[]}),setup(){return{args:e}},template:'<d-tag-dropdown v-model="value" v-bind="args" />'}),v=e=>({components:{DTagDropdown:m},data:()=>({value:["banking","money"]}),setup(){return{args:e}},template:`
    <d-tag-dropdown v-model="value" v-bind="args" />
    <p>Selected value is {{value}}</p>
  `}),X=e=>({components:{DTagDropdown:m,DarkModeProvider:N},data:()=>({value:"identity"}),setup(){return{args:e}},template:`
    <dark-mode-provider :dark-mode="true">
      <d-tag-dropdown v-bind="args" v-model="value" />
    </dark-mode-provider>
    `}),Y=e=>({components:{DTagDropdown:m,DarkModeProvider:N},data:()=>({value:""}),setup(){return{args:e}},template:`
    <dark-mode-provider :dark-mode="true">
      <d-tag-dropdown v-bind="args" v-model="value" />
    </dark-mode-provider>
    `}),u=(e=null)=>{const b=e?e.bind({}):Y.bind({});return b.decorators=[()=>({template:'<div style="padding: 3em; background: #121A26;"><story /></div>'})],b},a=[{text:"Banking kit",value:"banking"},{text:"Money kit",value:"money"},{text:"Identity kit",value:"identity"},{text:"UI kit",value:"ui"},{text:"Commerce kit",value:"commerce"},{text:"Benefits",value:"benefits"},{text:"API Docs",value:"api_docs"},{text:"Console",value:"console"},{text:"Statements",value:"statements"},{text:"Payouts",value:"payouts"}],Q=["Commerce","Identity","UI","Money","Banking"],n=g.bind({});n.args={options:[...a]};const r=u();r.args={options:[...a]};const o=g.bind({});o.args={options:[...a],label:"Dropdown"};const t=u();t.args={options:[...a],label:"Dropdown"};const s=g.bind({});s.args={options:[...Q],label:"String Options"};const d=u();d.args={options:[...Q],label:"String Options"};const p=v.bind({});p.args={options:[...a],label:"Predefined Options"};const i=v.bind({});i.args={options:[...a],label:"Predefined Options",returnFullObject:!0};const l=u(X);l.args={options:[...a],label:"Predefined Options"};const c=v.bind({});c.args={options:[...a],label:"Predefined Options",leftIcon:V};var D,k,f;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
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
})`,...(f=(k=n.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var y,w,O;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:"DarkModeTemplateFactory()",...(O=(w=r.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var S,T,P;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
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
})`,...(P=(T=o.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var x,M,F;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:"DarkModeTemplateFactory()",...(F=(M=t.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};var _,I,L;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
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
})`,...(L=(I=s.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var h,j,B;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:"DarkModeTemplateFactory()",...(B=(j=d.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var C,A,U;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
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
})`,...(U=(A=p.parameters)==null?void 0:A.docs)==null?void 0:U.source}}};var W,E,$;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`args => ({
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
})`,...($=(E=i.parameters)==null?void 0:E.docs)==null?void 0:$.source}}};var q,z,G;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:"DarkModeTemplateFactory(DarkModePredefinedTemplate)",...(G=(z=l.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var H,J,K;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`args => ({
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
})`,...(K=(J=c.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const re=["Default","DefaultDark","Label","LabelDark","StringOptions","StringOptionsDark","PredefinedOptions","PredefinedOptionsWithFullObject","PredefinedOptionsDark","LeftIcon"];export{n as Default,r as DefaultDark,o as Label,t as LabelDark,c as LeftIcon,p as PredefinedOptions,l as PredefinedOptionsDark,i as PredefinedOptionsWithFullObject,s as StringOptions,d as StringOptionsDark,re as __namedExportsOrder,ne as default};
//# sourceMappingURL=DTagDropdown.stories-a90535dc.js.map
