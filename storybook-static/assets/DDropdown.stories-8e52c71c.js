import{ac as l,l as G,a5 as J,_ as $}from"./DWysiwyg-da7c8d17.js";import{s as K}from"./selectProps-2e81a4d1.js";import"./vue.esm-bundler-a99e1ba3.js";import"./floating-ui.dom-c3a31ea6.js";import"./_commonjsHelpers-042e6b4d.js";const ee={title:"Forms/Dropdown",component:l,tags:["autodocs"],argTypes:{...G,...K}},p=e=>({components:{DDropdown:l,ThemeProvider:J},data:()=>({value:""}),setup(){return{args:e}},template:`
    <ThemeProvider :initial-theme="{defaultInputSize: 'medium'}">
      <d-dropdown v-model="value" v-bind="args" />
    </ThemeProvider>
  `}),q=e=>({components:{DDropdown:l},data:()=>({value:"identity",internalOptions:[{text:"Banking kit",value:"banking"},{text:"Money kit",value:"money"},{text:"Identity kit",value:"identity"},{text:"UI kit",value:"ui"},{text:"Commerce kit",value:"commerce"}]}),setup(){return{args:e}},mounted(){setTimeout(()=>{this.value="ui",this.internalOptions=[{text:"Money kit",value:"money"},{text:"Identity kit",value:"identity"},{text:"UI kit",value:"ui"},{text:"Commerce kit",value:"commerce"}]},3e3)},template:`
    <d-dropdown v-model="value" v-bind="args" :options="internalOptions" />
    <p>Selected value is: {{value}}</p>
  `}),N=e=>({components:{DDropdown:l,DarkModeProvider:$},data:()=>({value:"identity"}),setup(){return{args:e}},template:`
    <dark-mode-provider :dark-mode="true">
      <d-dropdown v-bind="args" v-model="value" />
    </dark-mode-provider>
    `}),Q=e=>({components:{DDropdown:l,DarkModeProvider:$},data:()=>({value:""}),setup(){return{args:e}},template:`
    <dark-mode-provider :dark-mode="true">
      <d-dropdown v-bind="args" v-model="value" />
    </dark-mode-provider>
    `}),c=(e=null)=>{const v=e?e.bind({}):Q.bind({});return v.decorators=[()=>({template:'<div style="padding: 3em; background: #121A26;"><story /></div>'})],v},n=[{text:"Banking kit",value:"banking"},{text:"Money kit",value:"money"},{text:"Identity kit",value:"identity"},{text:"UI kit",value:"ui"},{text:"Commerce kit",value:"commerce"}],t=p.bind({});t.args={options:[...n]};const r=p.bind({});r.args={options:[...n],errorMessage:"Error Message"};const a=p.bind({});a.args={options:["Banking kit","Money kit","Identity kit","UI kit","Commerce kit"]};const o=c();o.args={options:[...n]};const i=p.bind({});i.args={options:[...n],label:"Dropdown"};const d=c();d.args={options:[...n],label:"Dropdown"};const s=q.bind({});s.args={label:"Predefined Dropdown",options:[...n]};const m=q.bind({});m.args={label:"Predefined Dropdown",options:[...n],returnFullObject:!0};const u=c(N);u.args={label:"Predefined Dropdown",options:[...n]};var k,g,y;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
  components: {
    DDropdown,
    ThemeProvider
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
    <ThemeProvider :initial-theme="{defaultInputSize: 'medium'}">
      <d-dropdown v-model="value" v-bind="args" />
    </ThemeProvider>
  \`
})`,...(y=(g=t.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var D,x,b;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
  components: {
    DDropdown,
    ThemeProvider
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
    <ThemeProvider :initial-theme="{defaultInputSize: 'medium'}">
      <d-dropdown v-model="value" v-bind="args" />
    </ThemeProvider>
  \`
})`,...(b=(x=r.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var T,P,f;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
  components: {
    DDropdown,
    ThemeProvider
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
    <ThemeProvider :initial-theme="{defaultInputSize: 'medium'}">
      <d-dropdown v-model="value" v-bind="args" />
    </ThemeProvider>
  \`
})`,...(f=(P=a.parameters)==null?void 0:P.docs)==null?void 0:f.source}}};var h,w,I;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:"DarkModeTemplateFactory()",...(I=(w=o.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var M,S,O;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`args => ({
  components: {
    DDropdown,
    ThemeProvider
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
    <ThemeProvider :initial-theme="{defaultInputSize: 'medium'}">
      <d-dropdown v-model="value" v-bind="args" />
    </ThemeProvider>
  \`
})`,...(O=(S=i.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};var C,F,U;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:"DarkModeTemplateFactory()",...(U=(F=d.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};var _,B,z;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
  components: {
    DDropdown
  },
  data: () => ({
    value: "identity",
    internalOptions: [{
      text: "Banking kit",
      value: "banking"
    }, {
      text: "Money kit",
      value: "money"
    }, {
      text: "Identity kit",
      value: "identity"
    }, {
      text: "UI kit",
      value: "ui"
    }, {
      text: "Commerce kit",
      value: "commerce"
    }]
  }),
  setup() {
    return {
      args
    };
  },
  mounted() {
    setTimeout(() => {
      this.value = "ui";
      this.internalOptions = [{
        text: "Money kit",
        value: "money"
      }, {
        text: "Identity kit",
        value: "identity"
      }, {
        text: "UI kit",
        value: "ui"
      }, {
        text: "Commerce kit",
        value: "commerce"
      }];
    }, 3000);
  },
  template: \`
    <d-dropdown v-model="value" v-bind="args" :options="internalOptions" />
    <p>Selected value is: {{value}}</p>
  \`
})`,...(z=(B=s.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var E,L,j;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
  components: {
    DDropdown
  },
  data: () => ({
    value: "identity",
    internalOptions: [{
      text: "Banking kit",
      value: "banking"
    }, {
      text: "Money kit",
      value: "money"
    }, {
      text: "Identity kit",
      value: "identity"
    }, {
      text: "UI kit",
      value: "ui"
    }, {
      text: "Commerce kit",
      value: "commerce"
    }]
  }),
  setup() {
    return {
      args
    };
  },
  mounted() {
    setTimeout(() => {
      this.value = "ui";
      this.internalOptions = [{
        text: "Money kit",
        value: "money"
      }, {
        text: "Identity kit",
        value: "identity"
      }, {
        text: "UI kit",
        value: "ui"
      }, {
        text: "Commerce kit",
        value: "commerce"
      }];
    }, 3000);
  },
  template: \`
    <d-dropdown v-model="value" v-bind="args" :options="internalOptions" />
    <p>Selected value is: {{value}}</p>
  \`
})`,...(j=(L=m.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var A,H,R;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:"DarkModeTemplateFactory(DarkModePredefinedTemplate)",...(R=(H=u.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};const ne=["Default","HasError","TextOptions","DefaultDark","Label","LabelDark","Predefined","PredefinedReturnFullObject","PredefinedDark"];export{t as Default,o as DefaultDark,r as HasError,i as Label,d as LabelDark,s as Predefined,u as PredefinedDark,m as PredefinedReturnFullObject,a as TextOptions,ne as __namedExportsOrder,ee as default};
//# sourceMappingURL=DDropdown.stories-8e52c71c.js.map
