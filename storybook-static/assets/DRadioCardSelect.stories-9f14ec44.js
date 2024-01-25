import{a0 as t,h as O}from"./DWysiwyg-a2525844.js";import"./vue.esm-bundler-a99e1ba3.js";import"./floating-ui.dom-c3a31ea6.js";import"./_commonjsHelpers-042e6b4d.js";const P={component:t,title:"Forms/Radio Card Select",argTypes:{},tags:["autodocs"]},f=e=>({components:{DRadioCardSelect:t},setup(){return{args:e}},data:()=>({selected:null}),template:`
    <d-radio-card-select v-model="selected" v-bind="args" />
    <p>Selected value is: {{selected}}</p>
  `}),a=f.bind({}),T=e=>({components:{DRadioCardSelect:t},setup(){return{args:e}},data:()=>({selected:{title:"Citibank",description:"Checking **8350",otherValue:"othervalue",icon:"https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady3.png"}}),template:`
    <d-radio-card-select v-model="selected" v-bind="args" />
    <p>Selected value is: {{selected}}</p>
  `}),n=T.bind({}),S=e=>({components:{DRadioCardSelect:t},setup(){return{args:e}},data:()=>({selected:null,options:[{title:"Visa",description:"Ending **8350",otherValue:"othervalue",icon:"https://assets.ondeposits.com/img/ui-kit-demo/payment-methods/visa.png"}]}),template:`
  <d-radio-card-select v-model="selected" :options="options" v-bind="args" />
  `}),o=S.bind({}),D=e=>({components:{DRadioCardSelect:t,DAutoLayout:O},setup(){return{args:e}},data:()=>({selected:null,bankOptions:[{title:"Wells Fargo",description:"Checking **7698",otherValue:"othervalue",icon:"https://assets.ondeposits.com/img/ui-kit-demo/payment-methods/wells-fargo.png"},{title:"Bank of America",description:"Checking **1243",otherValue:"othervalue",icon:"https://assets.ondeposits.com/img/ui-kit-demo/payment-methods/bank-of-america.png"},{title:"Citibank",description:"Checking **8350",otherValue:"othervalue",icon:"https://assets.ondeposits.com/img/ui-kit-demo/payment-methods/citi-bank.png"}],cardOptions:[{title:"Visa",description:"Ending **8350",otherValue:"othervalue",icon:"https://assets.ondeposits.com/img/ui-kit-demo/payment-methods/visa.png"}],bankValue:null,cardValue:null,radioValue:""}),template:`
    <d-auto-layout direction="vertical">
  <d-radio-card-select v-model="bankValue" :options="bankOptions" v-model:radio-value="radioValue" value="bank"  v-bind="args" />
  <d-radio-card-select v-model="cardValue" :options="cardOptions" v-model:radio-value="radioValue" value="card" v-bind="args" />
    </d-auto-layout>
  <p>The bank value is: {{bankValue}}</p>
  <p>The card value is: {{cardValue}}</p>
  <p>The selected option (radio option) is: {{radioValue}}</p>
  `}),i=D.bind({}),R=e=>({components:{DRadioCardSelect:t,DAutoLayout:O},setup(){return{args:e}},data:()=>({selected:null,bankOptions:[{title:"Wells Fargo",description:"Checking **7698",otherValue:"othervalue",icon:"https://assets.ondeposits.com/img/ui-kit-demo/payment-methods/wells-fargo.png"},{title:"Bank of America",description:"Checking **1243",otherValue:"othervalue",icon:"https://assets.ondeposits.com/img/ui-kit-demo/payment-methods/bank-of-america.png"},{title:"Citibank",description:"Checking **8350",otherValue:"othervalue",icon:"https://assets.ondeposits.com/img/ui-kit-demo/payment-methods/citi-bank.png"}],cardOptions:[{title:"Visa",description:"Ending **8350",otherValue:"othervalue",icon:"https://assets.ondeposits.com/img/ui-kit-demo/payment-methods/visa.png"}],bankValue:null,cardValue:null,radioValue:"card"}),template:`
    <d-auto-layout direction="vertical">
    <d-radio-card-select v-model="bankValue" :options="bankOptions" v-model:radio-value="radioValue" value="bank"  v-bind="args" />
    <d-radio-card-select v-model="cardValue" :options="cardOptions" v-model:radio-value="radioValue" value="card" v-bind="args" />
    </d-auto-layout>
  <p>The bank value is: {{bankValue}}</p>
  <p>The card value is: {{cardValue}}</p>
  <p>The selected option (radio option) is: {{radioValue}}</p>
  `}),s=R.bind({});var d,r,l;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  components: {
    DRadioCardSelect
  },
  setup() {
    return {
      args
    };
  },
  data: () => ({
    selected: null
  }),
  template: \`
    <d-radio-card-select v-model="selected" v-bind="args" />
    <p>Selected value is: {{selected}}</p>
  \`
})`,...(l=(r=a.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};var c,p,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
  components: {
    DRadioCardSelect
  },
  setup() {
    return {
      args
    };
  },
  data: () => ({
    selected: {
      title: "Citibank",
      description: "Checking **8350",
      otherValue: "othervalue",
      icon: "https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady3.png"
    }
  }),
  template: \`
    <d-radio-card-select v-model="selected" v-bind="args" />
    <p>Selected value is: {{selected}}</p>
  \`
})`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,h,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  components: {
    DRadioCardSelect
  },
  setup() {
    return {
      args
    };
  },
  data: () => ({
    selected: null,
    options: [{
      title: "Visa",
      description: "Ending **8350",
      otherValue: "othervalue",
      icon: "https://assets.ondeposits.com/img/ui-kit-demo/payment-methods/visa.png"
    }]
  }),
  template: \`
  <d-radio-card-select v-model="selected" :options="options" v-bind="args" />
  \`
})`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var v,k,V;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
  components: {
    DRadioCardSelect,
    DAutoLayout
  },
  setup() {
    return {
      args
    };
  },
  data: () => ({
    selected: null,
    bankOptions: [{
      title: "Wells Fargo",
      description: "Checking **7698",
      otherValue: "othervalue",
      icon: "https://assets.ondeposits.com/img/ui-kit-demo/payment-methods/wells-fargo.png"
    }, {
      title: "Bank of America",
      description: "Checking **1243",
      otherValue: "othervalue",
      icon: "https://assets.ondeposits.com/img/ui-kit-demo/payment-methods/bank-of-america.png"
    }, {
      title: "Citibank",
      description: "Checking **8350",
      otherValue: "othervalue",
      icon: "https://assets.ondeposits.com/img/ui-kit-demo/payment-methods/citi-bank.png"
    }],
    cardOptions: [{
      title: "Visa",
      description: "Ending **8350",
      otherValue: "othervalue",
      icon: "https://assets.ondeposits.com/img/ui-kit-demo/payment-methods/visa.png"
    }],
    bankValue: null,
    cardValue: null,
    radioValue: ""
  }),
  template: \`
    <d-auto-layout direction="vertical">
  <d-radio-card-select v-model="bankValue" :options="bankOptions" v-model:radio-value="radioValue" value="bank"  v-bind="args" />
  <d-radio-card-select v-model="cardValue" :options="cardOptions" v-model:radio-value="radioValue" value="card" v-bind="args" />
    </d-auto-layout>
  <p>The bank value is: {{bankValue}}</p>
  <p>The card value is: {{cardValue}}</p>
  <p>The selected option (radio option) is: {{radioValue}}</p>
  \`
})`,...(V=(k=i.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};var b,C,y;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
  components: {
    DRadioCardSelect,
    DAutoLayout
  },
  setup() {
    return {
      args
    };
  },
  data: () => ({
    selected: null,
    bankOptions: [{
      title: "Wells Fargo",
      description: "Checking **7698",
      otherValue: "othervalue",
      icon: "https://assets.ondeposits.com/img/ui-kit-demo/payment-methods/wells-fargo.png"
    }, {
      title: "Bank of America",
      description: "Checking **1243",
      otherValue: "othervalue",
      icon: "https://assets.ondeposits.com/img/ui-kit-demo/payment-methods/bank-of-america.png"
    }, {
      title: "Citibank",
      description: "Checking **8350",
      otherValue: "othervalue",
      icon: "https://assets.ondeposits.com/img/ui-kit-demo/payment-methods/citi-bank.png"
    }],
    cardOptions: [{
      title: "Visa",
      description: "Ending **8350",
      otherValue: "othervalue",
      icon: "https://assets.ondeposits.com/img/ui-kit-demo/payment-methods/visa.png"
    }],
    bankValue: null,
    cardValue: null,
    radioValue: "card"
  }),
  template: \`
    <d-auto-layout direction="vertical">
    <d-radio-card-select v-model="bankValue" :options="bankOptions" v-model:radio-value="radioValue" value="bank"  v-bind="args" />
    <d-radio-card-select v-model="cardValue" :options="cardOptions" v-model:radio-value="radioValue" value="card" v-bind="args" />
    </d-auto-layout>
  <p>The bank value is: {{bankValue}}</p>
  <p>The card value is: {{cardValue}}</p>
  <p>The selected option (radio option) is: {{radioValue}}</p>
  \`
})`,...(y=(C=s.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};const w=["Default","PredefinedValue","OneOption","MultipleCards","MultipleCardsPreselected"];export{a as Default,i as MultipleCards,s as MultipleCardsPreselected,o as OneOption,n as PredefinedValue,w as __namedExportsOrder,P as default};
//# sourceMappingURL=DRadioCardSelect.stories-9f14ec44.js.map
