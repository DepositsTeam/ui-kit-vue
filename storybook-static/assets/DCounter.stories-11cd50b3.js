import{ae as t,_ as M}from"./DWysiwyg-688f494a.js";import"./vue.esm-bundler-673e2372.js";import"./floating-ui.dom-c3a31ea6.js";import"./_commonjsHelpers-042e6b4d.js";const E={title:"Forms/Counter",component:t,argTypes:{}},s=o=>({components:{DCounter:t},data:()=>({value:""}),setup(){return{args:o}},template:'<d-counter v-model="value" v-bind="args"></d-counter>'}),f=o=>({components:{DCounter:t,DarkModeProvider:M},data:()=>({value:""}),setup(){return{args:o}},template:`
    <div style="padding: 3em; background: #121A26;">
      <dark-mode-provider :dark-mode="true">
        <d-counter v-model="value" v-bind="args" />
      </dark-mode-provider>
    </div>
    `}),n=s.bind({}),e=s.bind({});e.args={errorMessage:"Error message"};const a=f.bind({}),r=s.bind({});r.args={max:10,min:0};var d,u,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
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
})`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var c,p,i;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
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
})`,...(i=(p=e.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var l,v,g;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`args => ({
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
})`,...(g=(v=a.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var D,k,b;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
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
})`,...(b=(k=r.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};const I=["Default","HasError","DarkDefault","MaxIs10AndMinIs0"];export{a as DarkDefault,n as Default,e as HasError,r as MaxIs10AndMinIs0,I as __namedExportsOrder,E as default};
//# sourceMappingURL=DCounter.stories-11cd50b3.js.map
