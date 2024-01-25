import{X as e,I as s,K as E,L as B,o as U,h as H,n as L,J as O}from"./DWysiwyg-a2525844.js";import"./vue.esm-bundler-a99e1ba3.js";import"./floating-ui.dom-c3a31ea6.js";import"./_commonjsHelpers-042e6b4d.js";const q={title:"Forms/Radio Card",component:e,tags:["autodocs"],argTypes:{}},P=a=>({components:{DRadioCard:e,CardIcon:s},data:()=>({value:""}),setup(){return{args:a}},template:`<d-radio-card v-model="value" value="value" v-bind="args">
  <template #icon>
    <card-icon />
  </template>
  </d-radio-card>
  <p>Radio value is: {{value}}</p>
  `}),n=P.bind({});n.args={heading:"Card",description:"Add your debit / credit card information"};const t=P.bind({});t.args={heading:"Card",description:"Add your debit / credit card information",label:"Select card option"};const W=a=>({components:{DRadioCard:e},data:()=>({value:""}),setup(){return{args:a}},template:`
    <d-radio-card v-model="value" value="value" v-bind="args">
    </d-radio-card>
    <p>Radio value is: {{value}}</p>
  `}),d=W.bind({});d.args={heading:"One time payment",description:"Use this option to collect a one off payment"};const w=a=>({components:{DRadioCard:e,DFilePicker:E,CardIcon:s},data:()=>({value:""}),setup(){return{args:a}},template:`
    <d-radio-card v-model="value" value="value" v-bind="args">
      <template #icon>
        <card-icon />
      </template>
      <d-file-picker />
    </d-radio-card>
    <p>Radio value is: {{value}}</p>
  `}),o=w.bind({});o.args={heading:"One time payment",description:"Use this option to collect a one off payment",expandable:!0};const F=a=>({components:{DRadioCard:e,DFilePicker:E,CardIcon:s},data:()=>({value:""}),setup(){return{args:a}},template:`
    <d-radio-card v-model="value" value="value" v-bind="args">
      <d-file-picker />
    </d-radio-card>
    <p>Radio value is: {{value}}</p>
  `}),r=F.bind({});r.args={heading:"One time payment",description:"Use this option to collect a one off payment",expandable:!0};const J=a=>({components:{DRadioCard:e,CardIcon:s,DHeading:B,DText:U,DAutoLayout:H,DBox:L},data:()=>({value:""}),setup(){return{args:a}},template:`<d-radio-card v-model="value" value="value" v-bind="args">
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
  `}),i=J.bind({});i.args={heading:"One time payment",description:"Use this option to collect a one off payment"};const N=a=>({components:{DRadioCard:e,CardIcon:s,BankIcon:O},setup(){return{args:a}},data:()=>({value:""}),template:`
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
  `}),c=N.bind({});var l,p,u;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`args => ({
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
})`,...(g=(v=t.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var b,h,C;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
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
})`,...(C=(h=d.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var y,D,f;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
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
})`,...(f=(D=o.parameters)==null?void 0:D.docs)==null?void 0:f.source}}};var x,R,I;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
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
})`,...(I=(R=r.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var k,T,M;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
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
})`,...(M=(T=i.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var _,S,A;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
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
})`,...(A=(S=c.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};const z=["Default","WithLabel","NoIcon","ExpandMode","ExpandModeWithoutIcon","CustomHeadingAndDescription","MultipleCards"];export{i as CustomHeadingAndDescription,n as Default,o as ExpandMode,r as ExpandModeWithoutIcon,c as MultipleCards,d as NoIcon,t as WithLabel,z as __namedExportsOrder,q as default};
//# sourceMappingURL=DRadioCard.stories-074f42b4.js.map
