import{Y as m,A as N,Z as Q,_ as J}from"./DAccordion-15ab541e.js";import"./vue.esm-bundler-90c41ac5.js";import"./_commonjsHelpers-87174ba5.js";const ne={title:"Forms/Tag Dropdown",component:m,argTypes:{...N,placeholder:{control:{type:"text"}},showCheckboxes:{control:{type:"boolean"}},options:{control:{type:"object"}}}},g=e=>({components:{DTagDropdown:m},data:()=>({value:[]}),setup(){return{args:e}},template:'<d-tag-dropdown v-model="value" v-bind="args" />'}),v=e=>({components:{DTagDropdown:m},data:()=>({value:["banking","money"]}),setup(){return{args:e}},template:`
    <d-tag-dropdown v-model="value" v-bind="args" />
    <p>Selected value is {{value}}</p>
  `}),R=e=>({components:{DTagDropdown:m,DarkModeProvider:J},data:()=>({value:"identity"}),setup(){return{args:e}},template:`
    <dark-mode-provider :dark-mode="true">
      <d-tag-dropdown v-bind="args" v-model="value" />
    </dark-mode-provider>
    `}),V=e=>({components:{DTagDropdown:m,DarkModeProvider:J},data:()=>({value:""}),setup(){return{args:e}},template:`
    <dark-mode-provider :dark-mode="true">
      <d-tag-dropdown v-bind="args" v-model="value" />
    </dark-mode-provider>
    `}),u=(e=null)=>{const b=e?e.bind({}):V.bind({});return b.decorators=[()=>({template:'<div style="padding: 3em; background: #121A26;"><story /></div>'})],b},a=[{text:"Banking kit",value:"banking"},{text:"Money kit",value:"money"},{text:"Identity kit",value:"identity"},{text:"UI kit",value:"ui"},{text:"Commerce kit",value:"commerce"},{text:"Benefits",value:"benefits"},{text:"API Docs",value:"api_docs"},{text:"Console",value:"console"},{text:"Statements",value:"statements"},{text:"Payouts",value:"payouts"}],K=["Commerce","Identity","UI","Money","Banking"],n=g.bind({});n.args={options:[...a]};const r=u();r.args={options:[...a]};const o=g.bind({});o.args={options:[...a],label:"Dropdown"};const t=u();t.args={options:[...a],label:"Dropdown"};const s=g.bind({});s.args={options:[...K],label:"String Options"};const d=u();d.args={options:[...K],label:"String Options"};const p=v.bind({});p.args={options:[...a],label:"Predefined Options"};const i=v.bind({});i.args={options:[...a],label:"Predefined Options",returnFullObject:!0};const l=u(R);l.args={options:[...a],label:"Predefined Options"};const c=v.bind({});c.args={options:[...a],label:"Predefined Options",leftIcon:Q};var D,k,f;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
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
})`,...(L=(I=s.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var h,j,A;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:"DarkModeTemplateFactory()",...(A=(j=d.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var B,C,U;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
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
})`,...(U=(C=p.parameters)==null?void 0:C.docs)==null?void 0:U.source}}};var W,E,Y;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`args => ({
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
})`,...(Y=(E=i.parameters)==null?void 0:E.docs)==null?void 0:Y.source}}};var Z,$,q;l.parameters={...l.parameters,docs:{...(Z=l.parameters)==null?void 0:Z.docs,source:{originalSource:"DarkModeTemplateFactory(DarkModePredefinedTemplate)",...(q=($=l.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var z,G,H;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`args => ({
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
})`,...(H=(G=c.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};const re=["Default","DefaultDark","Label","LabelDark","StringOptions","StringOptionsDark","PredefinedOptions","PredefinedOptionsWithFullObject","PredefinedOptionsDark","LeftIcon"];export{n as Default,r as DefaultDark,o as Label,t as LabelDark,c as LeftIcon,p as PredefinedOptions,l as PredefinedOptionsDark,i as PredefinedOptionsWithFullObject,s as StringOptions,d as StringOptionsDark,re as __namedExportsOrder,ne as default};
//# sourceMappingURL=DTagDropdown.stories-69dcc09b.js.map
