import{t as o,_ as g}from"./DAccordion-28d40e9b.js";import"./vue.esm-bundler-02a62393.js";import"./_commonjsHelpers-87174ba5.js";const M={title:"Forms/Counter",component:o,argTypes:{}},v=a=>({components:{DCounter:o},data:()=>({value:""}),setup(){return{args:a}},template:'<d-counter v-model="value" v-bind="args"></d-counter>'}),D=a=>({components:{DCounter:o,DarkModeProvider:g},data:()=>({value:""}),setup(){return{args:a}},template:`
    <div style="padding: 3em; background: #121A26;">
      <dark-mode-provider :dark-mode="true">
        <d-counter v-model="value" v-bind="args" />
      </dark-mode-provider>
    </div>
    `}),r=v.bind({}),n=D.bind({}),e=v.bind({});e.args={max:10,min:0};var t,d,s;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
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
})`,...(s=(d=r.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};var u,m,c;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
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
})`,...(c=(m=n.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,i,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
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
})`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const C=["Default","DarkDefault","MaxIs10AndMinIs0"];export{n as DarkDefault,r as Default,e as MaxIs10AndMinIs0,C as __namedExportsOrder,M as default};
//# sourceMappingURL=DCounter.stories-5ce1916b.js.map
