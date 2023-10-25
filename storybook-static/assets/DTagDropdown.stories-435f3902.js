import{q as g,r as ne,s as oe,_ as re}from"./DWysiwyg-54ac81a6.js";import"./vue.esm-bundler-64d654d1.js";import"./floating-ui.dom-c3a31ea6.js";import"./_commonjsHelpers-87174ba5.js";const ce={title:"Forms/Tag Dropdown",component:g,argTypes:{...ne,placeholder:{control:{type:"text"}},showCheckboxes:{control:{type:"boolean"}},options:{control:{type:"object"}}}},v=e=>({components:{DTagDropdown:g},data:()=>({value:[]}),setup(){return{args:e}},template:'<d-tag-dropdown v-model="value" v-bind="args" />'}),D=e=>({components:{DTagDropdown:g},data:()=>({value:["banking","money"]}),setup(){return{args:e}},template:`
    <d-tag-dropdown v-model="value" v-bind="args" />
    <p>Selected value is {{value}}</p>
  `}),te=e=>({components:{DTagDropdown:g,DarkModeProvider:re},data:()=>({value:"identity"}),setup(){return{args:e}},template:`
    <dark-mode-provider :dark-mode="true">
      <d-tag-dropdown v-bind="args" v-model="value" />
    </dark-mode-provider>
    `}),se=e=>({components:{DTagDropdown:g,DarkModeProvider:re},data:()=>({value:""}),setup(){return{args:e}},template:`
    <dark-mode-provider :dark-mode="true">
      <d-tag-dropdown v-bind="args" v-model="value" />
    </dark-mode-provider>
    `}),b=(e=null)=>{const k=e?e.bind({}):se.bind({});return k.decorators=[()=>({template:'<div style="padding: 3em; background: #121A26;"><story /></div>'})],k},r=[{text:"Banking kit",value:"banking"},{text:"Money kit",value:"money"},{text:"Identity kit",value:"identity"},{text:"UI kit",value:"ui"},{text:"Commerce kit",value:"commerce"},{text:"Benefits",value:"benefits"},{text:"API Docs",value:"api_docs"},{text:"Console",value:"console"},{text:"Statements",value:"statements"},{text:"Payouts",value:"payouts"}],ae=["Commerce","Identity","UI","Money","Banking"],a=v.bind({});a.args={options:[...r]};const n=b();n.args={options:[...r]};const o=v.bind({});o.args={options:[...r],label:"Dropdown"};const t=v.bind({});t.args={options:[...r],label:"Error",errorMessage:"Error message"};const s=b();s.args={options:[...r],label:"Dropdown"};const d=v.bind({});d.args={options:[...ae],label:"String Options"};const p=b();p.args={options:[...ae],label:"String Options"};const i=D.bind({});i.args={options:[...r],label:"Predefined Options"};const l=D.bind({});l.args={options:[...r],label:"Predefined Options",returnFullObject:!0};const c=b(te);c.args={options:[...r],label:"Predefined Options"};const m=D.bind({});m.args={options:[...r],label:"Predefined Options",leftIcon:oe};const u=v.bind({});u.args={options:[...r],label:"Loading",loading:!0};var f,w,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
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
})`,...(y=(w=a.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var S,T,O;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:"DarkModeTemplateFactory()",...(O=(T=n.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var P,x,M;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`args => ({
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
})`,...(M=(x=o.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};var F,L,_;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`args => ({
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
})`,...(_=(L=t.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var I,h,E;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:"DarkModeTemplateFactory()",...(E=(h=s.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};var j,B,C;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`args => ({
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
})`,...(C=(B=d.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var A,H,U;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:"DarkModeTemplateFactory()",...(U=(H=p.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};var W,q,$;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`args => ({
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
})`,...($=(q=i.parameters)==null?void 0:q.docs)==null?void 0:$.source}}};var z,G,J;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`args => ({
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
})`,...(J=(G=l.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,N,Q;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:"DarkModeTemplateFactory(DarkModePredefinedTemplate)",...(Q=(N=c.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var R,V,X;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`args => ({
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
})`,...(ee=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const me=["Default","DefaultDark","Label","HasError","LabelDark","StringOptions","StringOptionsDark","PredefinedOptions","PredefinedOptionsWithFullObject","PredefinedOptionsDark","LeftIcon","Loading"];export{a as Default,n as DefaultDark,t as HasError,o as Label,s as LabelDark,m as LeftIcon,u as Loading,i as PredefinedOptions,c as PredefinedOptionsDark,l as PredefinedOptionsWithFullObject,d as StringOptions,p as StringOptionsDark,me as __namedExportsOrder,ce as default};
//# sourceMappingURL=DTagDropdown.stories-435f3902.js.map
