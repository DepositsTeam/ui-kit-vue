import{ai as d,_ as x}from"./DWysiwyg-308857eb.js";import"./vue.esm-bundler-4e4410a9.js";import"./floating-ui.dom-c3a31ea6.js";import"./_commonjsHelpers-87174ba5.js";const T={title:"Forms/Counter",component:d,argTypes:{}},t=s=>({components:{DCounter:d},data:()=>({value:""}),setup(){return{args:s}},template:'<d-counter v-model="value" v-bind="args"></d-counter>'}),I=s=>({components:{DCounter:d,DarkModeProvider:x},data:()=>({value:""}),setup(){return{args:s}},template:`
    <div style="padding: 3em; background: #121A26;">
      <dark-mode-provider :dark-mode="true">
        <d-counter v-model="value" v-bind="args" />
      </dark-mode-provider>
    </div>
    `}),a=t.bind({}),e=t.bind({});e.args={label:"Counter Input"};const r=t.bind({});r.args={errorMessage:"Error message"};const o=I.bind({}),n=t.bind({});n.args={max:10,min:0};var u,m,c;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
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
})`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,l,i;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
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
})`,...(C=(k=o.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var M,f,_;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`args => ({
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
})`,...(_=(f=n.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};const H=["Default","Label","HasError","DarkDefault","MaxIs10AndMinIs0"];export{o as DarkDefault,a as Default,r as HasError,e as Label,n as MaxIs10AndMinIs0,H as __namedExportsOrder,T as default};
//# sourceMappingURL=DCounter.stories-5fd1186e.js.map
