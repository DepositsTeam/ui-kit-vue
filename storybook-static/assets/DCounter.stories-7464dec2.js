import{ak as d,_ as f}from"./DWysiwyg-eafffd59.js";import"./vue.esm-bundler-a99e1ba3.js";import"./_commonjsHelpers-042e6b4d.js";import"./floating-ui.dom-c3a31ea6.js";const F={title:"Forms/Counter",component:d,tags:["autodocs"],argTypes:{fontFace:{control:{type:"text"}},errorMessage:{control:{type:"text"}},name:{control:{type:"text"}},label:{control:{type:"text"}},labelFontFace:{control:{type:"text"}},labelClass:{control:{type:"text"}},placeholder:{control:{type:"text"}}}},o=s=>({components:{DCounter:d},data:()=>({value:""}),setup(){return{args:s}},template:'<d-counter v-model="value" v-bind="args"></d-counter>'}),_=s=>({components:{DCounter:d,DarkModeProvider:f},data:()=>({value:""}),setup(){return{args:s}},template:`
    <div style="padding: 3em; background: #121A26;">
      <dark-mode-provider :dark-mode="true">
        <d-counter v-model="value" v-bind="args" />
      </dark-mode-provider>
    </div>
    `}),a=o.bind({}),e=o.bind({});e.args={label:"Counter Input"};const r=o.bind({});r.args={errorMessage:"Error message"};const t=_.bind({}),n=o.bind({});n.args={max:10,min:0};var u,c,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
  components: {
    DCounter
  },
  data: () => ({
    value: ""
  }),
  setup() {
    return {
      args
    };
  },
  template: \`<d-counter v-model="value" v-bind="args"></d-counter>\`
})`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,l,i;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  components: {
    DCounter
  },
  data: () => ({
    value: ""
  }),
  setup() {
    return {
      args
    };
  },
  template: \`<d-counter v-model="value" v-bind="args"></d-counter>\`
})`,...(i=(l=e.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var v,g,b;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
  components: {
    DCounter
  },
  data: () => ({
    value: ""
  }),
  setup() {
    return {
      args
    };
  },
  template: \`<d-counter v-model="value" v-bind="args"></d-counter>\`
})`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var D,k,x;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
  components: {
    DCounter,
    DarkModeProvider
  },
  data: () => ({
    value: ""
  }),
  setup() {
    return {
      args
    };
  },
  template: \`
    <div style="padding: 3em; background: #121A26;">
      <dark-mode-provider :dark-mode="true">
        <d-counter v-model="value" v-bind="args" />
      </dark-mode-provider>
    </div>
    \`
})`,...(x=(k=t.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var y,C,M;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
  components: {
    DCounter
  },
  data: () => ({
    value: ""
  }),
  setup() {
    return {
      args
    };
  },
  template: \`<d-counter v-model="value" v-bind="args"></d-counter>\`
})`,...(M=(C=n.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};const T=["Default","Label","HasError","DarkDefault","MaxIs10AndMinIs0"];export{t as DarkDefault,a as Default,r as HasError,e as Label,n as MaxIs10AndMinIs0,T as __namedExportsOrder,F as default};
//# sourceMappingURL=DCounter.stories-7464dec2.js.map
