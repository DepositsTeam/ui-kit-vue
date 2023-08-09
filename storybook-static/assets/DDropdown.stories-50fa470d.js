import{V as m,W as A,_ as N}from"./DWysiwyg-c25e4b65.js";import"./vue.esm-bundler-d253c880.js";import"./floating-ui.dom-c3a31ea6.js";import"./_commonjsHelpers-042e6b4d.js";const H={title:"Forms/Dropdown",component:m,argTypes:{label:{control:{type:"text"}},placeholder:{control:{type:"text"}},disabled:{control:{type:"boolean"}},dropDown:{control:{type:"boolean"}},size:{control:{type:"select"},options:["small","medium","large","xlarge","huge","massive"]},errorMessage:{control:{type:"text"}},rightIcon:{control:{type:"object"}},leftIcon:{control:{type:"object"}},onlyNumbers:{control:{type:"boolean"}},wrapperClass:{control:{type:"text"}},fontFace:{control:{type:"select"},options:["circularSTD","heroNew"]},options:{control:{type:"object"}}}},p=e=>({components:{DDropdown:m,ThemeProvider:A},data:()=>({value:""}),setup(){return{args:e}},template:`
    <ThemeProvider :initial-theme="{defaultInputSize: 'medium'}">
      <d-dropdown v-model="value" v-bind="args" />
    </ThemeProvider>
  `}),R=e=>({components:{DDropdown:m},data:()=>({value:"identity",internalOptions:[{text:"Banking kit",value:"banking"},{text:"Money kit",value:"money"},{text:"Identity kit",value:"identity"},{text:"UI kit",value:"ui"},{text:"Commerce kit",value:"commerce"}]}),setup(){return{args:e}},mounted(){setTimeout(()=>{this.value="ui",this.internalOptions=[{text:"Money kit",value:"money"},{text:"Identity kit",value:"identity"},{text:"UI kit",value:"ui"},{text:"Commerce kit",value:"commerce"}]},3e3)},template:`
    <d-dropdown v-model="value" v-bind="args" :options="internalOptions" />
    <p>Selected value is: {{value}}</p>
  `}),E=e=>({components:{DDropdown:m,DarkModeProvider:N},data:()=>({value:"identity"}),setup(){return{args:e}},template:`
    <dark-mode-provider :dark-mode="true">
      <d-dropdown v-bind="args" v-model="value" />
    </dark-mode-provider>
    `}),V=e=>({components:{DDropdown:m,DarkModeProvider:N},data:()=>({value:""}),setup(){return{args:e}},template:`
    <dark-mode-provider :dark-mode="true">
      <d-dropdown v-bind="args" v-model="value" />
    </dark-mode-provider>
    `}),u=(e=null)=>{const c=e?e.bind({}):V.bind({});return c.decorators=[()=>({template:'<div style="padding: 3em; background: #121A26;"><story /></div>'})],c},n=[{text:"Banking kit",value:"banking"},{text:"Money kit",value:"money"},{text:"Identity kit",value:"identity"},{text:"UI kit",value:"ui"},{text:"Commerce kit",value:"commerce"}],t=p.bind({});t.args={options:[...n]};const o=p.bind({});o.args={options:["Banking kit","Money kit","Identity kit","UI kit","Commerce kit"]};const r=u();r.args={options:[...n]};const a=p.bind({});a.args={options:[...n],label:"Dropdown"};const i=u();i.args={options:[...n],label:"Dropdown"};const d=R.bind({});d.args={label:"Predefined Dropdown",options:[...n]};const s=R.bind({});s.args={label:"Predefined Dropdown",options:[...n],returnFullObject:!0};const l=u(E);l.args={label:"Predefined Dropdown",options:[...n]};var v,k,y;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
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
})`,...(y=(k=t.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var g,b,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`args => ({
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
})`,...(x=(b=o.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var D,T,f;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:"DarkModeTemplateFactory()",...(f=(T=r.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var h,P,w;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
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
})`,...(w=(P=a.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var I,M,S;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:"DarkModeTemplateFactory()",...(S=(M=i.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};var O,C,F;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
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
})`,...(F=(C=d.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var U,_,j;s.parameters={...s.parameters,docs:{...(U=s.parameters)==null?void 0:U.docs,source:{originalSource:`args => ({
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
})`,...(j=(_=s.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var B,z,L;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:"DarkModeTemplateFactory(DarkModePredefinedTemplate)",...(L=(z=l.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};const J=["Default","TextOptions","DefaultDark","Label","LabelDark","Predefined","PredefinedReturnFullObject","PredefinedDark"];export{t as Default,r as DefaultDark,a as Label,i as LabelDark,d as Predefined,l as PredefinedDark,s as PredefinedReturnFullObject,o as TextOptions,J as __namedExportsOrder,H as default};
//# sourceMappingURL=DDropdown.stories-50fa470d.js.map
