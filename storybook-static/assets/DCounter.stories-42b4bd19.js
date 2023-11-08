import{ah as d,i as I}from"./WalletOutlineIcon-89f6eca1.js";import"./vue.esm-bundler-2f75f87e.js";import"./floating-ui.dom-c3a31ea6.js";import"./_commonjsHelpers-87174ba5.js";const T={title:"Forms/Counter",component:d,tags:["autodocs"],argTypes:{}},t=s=>({components:{DCounter:d},data:()=>({value:""}),setup(){return{args:s}},template:'<d-counter v-model="value" v-bind="args"></d-counter>'}),S=s=>({components:{DCounter:d,DarkModeProvider:I},data:()=>({value:""}),setup(){return{args:s}},template:`
    <div style="padding: 3em; background: #121A26;">
      <dark-mode-provider :dark-mode="true">
        <d-counter v-model="value" v-bind="args" />
      </dark-mode-provider>
    </div>
    `}),a=t.bind({}),e=t.bind({});e.args={label:"Counter Input"};const r=t.bind({});r.args={errorMessage:"Error message"};const o=S.bind({}),n=t.bind({});n.args={max:10,min:0};var u,c,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
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
})`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,l,i;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
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
})`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var D,k,C;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
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
})`,...(C=(k=o.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var M,f,x;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`args => ({
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
})`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const H=["Default","Label","HasError","DarkDefault","MaxIs10AndMinIs0"];export{o as DarkDefault,a as Default,r as HasError,e as Label,n as MaxIs10AndMinIs0,H as __namedExportsOrder,T as default};
//# sourceMappingURL=DCounter.stories-42b4bd19.js.map
