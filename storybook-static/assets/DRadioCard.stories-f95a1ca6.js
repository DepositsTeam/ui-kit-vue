import{Z as e,m as P,y as s,A as B,B as U,q as H,h as O,o as W,z as w}from"./DWysiwyg-7da6f1ce.js";import"./vue.esm-bundler-a99e1ba3.js";import"./_commonjsHelpers-042e6b4d.js";import"./floating-ui.dom-c3a31ea6.js";const G={title:"Forms/Radio Card",component:e,tags:["autodocs"],argTypes:{...P,value:{control:{type:"text"}},ringed:{control:{type:"boolean"}},ringSize:{control:{type:"text"}},ringThickness:{control:{type:"text"}}}},E=a=>({components:{DRadioCard:e,CardIcon:s},data:()=>({value:""}),setup(){return{args:a}},template:`<d-radio-card v-model="value" value="value" v-bind="args">
  <template #icon>
    <card-icon />
  </template>
  </d-radio-card>
  <p>Radio value is: {{value}}</p>
  `}),n=E.bind({});n.args={heading:"Card",description:"Add your debit / credit card information"};const t=E.bind({});t.args={heading:"Card",description:"Add your debit / credit card information",label:"Select card option"};const F=a=>({components:{DRadioCard:e},data:()=>({value:""}),setup(){return{args:a}},template:`
    <d-radio-card v-model="value" value="value" v-bind="args">
    </d-radio-card>
    <p>Radio value is: {{value}}</p>
  `}),o=F.bind({});o.args={heading:"One time payment",description:"Use this option to collect a one off payment"};const L=a=>({components:{DRadioCard:e,DFilePicker:B,CardIcon:s},data:()=>({value:""}),setup(){return{args:a}},template:`
    <d-radio-card v-model="value" value="value" v-bind="args">
      <template #icon>
        <card-icon />
      </template>
      <d-file-picker />
    </d-radio-card>
    <p>Radio value is: {{value}}</p>
  `}),d=L.bind({});d.args={heading:"One time payment",description:"Use this option to collect a one off payment",expandable:!0};const N=a=>({components:{DRadioCard:e,DFilePicker:B,CardIcon:s},data:()=>({value:""}),setup(){return{args:a}},template:`
    <d-radio-card v-model="value" value="value" v-bind="args">
      <d-file-picker />
    </d-radio-card>
    <p>Radio value is: {{value}}</p>
  `}),r=N.bind({});r.args={heading:"One time payment",description:"Use this option to collect a one off payment",expandable:!0};const z=a=>({components:{DRadioCard:e,CardIcon:s,DHeading:U,DText:H,DAutoLayout:O,DBox:W},data:()=>({value:""}),setup(){return{args:a}},template:`<d-radio-card v-model="value" value="value" v-bind="args">
  <template #icon>
    <card-icon />
  </template>
  <template #heading>
    <d-auto-layout>
      <d-box is="img" alt="" src="https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png"  />
      <d-heading my0 color="purple">Jane Doe</d-heading>
    </d-auto-layout>
  </template>
  <template #description>
    <d-text margin-top="8px" margin-bottom="0">Unidentifiable person</d-text>
  </template>
  </d-radio-card>
  <p>Radio value is: {{value}}</p>
  `}),i=z.bind({});i.args={heading:"One time payment",description:"Use this option to collect a one off payment"};const J=a=>({components:{DRadioCard:e,CardIcon:s,BankIcon:w},setup(){return{args:a}},data:()=>({value:""}),template:`
    <d-radio-card heading="Card" description="Pay with a credit card"  v-model="value" value="card" v-bind="args">
      <template #icon>
        <card-icon />
      </template>
    </d-radio-card>
    <d-radio-card heading="Bank account" description="Pay with your bank account"  v-model="value" value="bank" v-bind="args">
    <template #icon>
      <bank-icon />
    </template>
    </d-radio-card>
    <p>The selected value is {{value}}</p>
  `}),c=J.bind({});var l,p,u;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`args => ({
  components: {
    DRadioCard,
    CardIcon
  },
  data: () => ({
    value: ""
  }),
  setup() {
    return {
      args
    };
  },
  template: \`<d-radio-card v-model="value" value="value" v-bind="args">
  <template #icon>
    <card-icon />
  </template>
  </d-radio-card>
  <p>Radio value is: {{value}}</p>
  \`
})`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,v,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  components: {
    DRadioCard,
    CardIcon
  },
  data: () => ({
    value: ""
  }),
  setup() {
    return {
      args
    };
  },
  template: \`<d-radio-card v-model="value" value="value" v-bind="args">
  <template #icon>
    <card-icon />
  </template>
  </d-radio-card>
  <p>Radio value is: {{value}}</p>
  \`
})`,...(g=(v=t.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var b,h,y;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
  components: {
    DRadioCard
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
    <d-radio-card v-model="value" value="value" v-bind="args">
    </d-radio-card>
    <p>Radio value is: {{value}}</p>
  \`
})`,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var C,D,x;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
  components: {
    DRadioCard,
    DFilePicker,
    CardIcon
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
    <d-radio-card v-model="value" value="value" v-bind="args">
      <template #icon>
        <card-icon />
      </template>
      <d-file-picker />
    </d-radio-card>
    <p>Radio value is: {{value}}</p>
  \`
})`,...(x=(D=d.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};var f,R,k;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
  components: {
    DRadioCard,
    DFilePicker,
    CardIcon
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
    <d-radio-card v-model="value" value="value" v-bind="args">
      <d-file-picker />
    </d-radio-card>
    <p>Radio value is: {{value}}</p>
  \`
})`,...(k=(R=r.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var I,T,A;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
  components: {
    DRadioCard,
    CardIcon,
    DHeading,
    DText,
    DAutoLayout,
    DBox
  },
  data: () => ({
    value: ""
  }),
  setup() {
    return {
      args
    };
  },
  template: \`<d-radio-card v-model="value" value="value" v-bind="args">
  <template #icon>
    <card-icon />
  </template>
  <template #heading>
    <d-auto-layout>
      <d-box is="img" alt="" src="https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png"  />
      <d-heading my0 color="purple">Jane Doe</d-heading>
    </d-auto-layout>
  </template>
  <template #description>
    <d-text margin-top="8px" margin-bottom="0">Unidentifiable person</d-text>
  </template>
  </d-radio-card>
  <p>Radio value is: {{value}}</p>
  \`
})`,...(A=(T=i.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var M,S,_;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`args => ({
  components: {
    DRadioCard,
    CardIcon,
    BankIcon
  },
  setup() {
    return {
      args
    };
  },
  data: () => ({
    value: ""
  }),
  template: \`
    <d-radio-card heading="Card" description="Pay with a credit card"  v-model="value" value="card" v-bind="args">
      <template #icon>
        <card-icon />
      </template>
    </d-radio-card>
    <d-radio-card heading="Bank account" description="Pay with your bank account"  v-model="value" value="bank" v-bind="args">
    <template #icon>
      <bank-icon />
    </template>
    </d-radio-card>
    <p>The selected value is {{value}}</p>
  \`
})`,...(_=(S=c.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};const K=["Default","WithLabel","NoIcon","ExpandMode","ExpandModeWithoutIcon","CustomHeadingAndDescription","MultipleCards"];export{i as CustomHeadingAndDescription,n as Default,d as ExpandMode,r as ExpandModeWithoutIcon,c as MultipleCards,o as NoIcon,t as WithLabel,K as __namedExportsOrder,G as default};
//# sourceMappingURL=DRadioCard.stories-f95a1ca6.js.map
