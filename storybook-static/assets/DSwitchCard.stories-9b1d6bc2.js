import{G as a,H as n,I as V,v as J,J as N,K as $,c as G,d as K,L as j}from"./DWysiwyg-d71235a5.js";import"./vue.esm-bundler-64d654d1.js";import"./floating-ui.dom-c3a31ea6.js";import"./_commonjsHelpers-87174ba5.js";const oe={title:"Forms/Cards/Switch Card",component:a,argTypes:{}},P=e=>({components:{DSwitchCard:a,CardIcon:n},data:()=>({value:!1}),setup(){return{args:e}},template:`
    <d-switch-card v-model="value" value="value" v-bind="args">
    <template #icon>
      <card-icon />
    </template>
    </d-switch-card>
    <p>Checkbox value is: {{value}}</p>
  `}),t=P.bind({});t.args={heading:"Card",description:"Add your debit / credit card information",label:"Select card option"};const q=e=>({components:{DSwitchCard:a,CardIcon:n},data:()=>({value:!1}),setup(){return{args:e}},template:`
    <d-switch-card v-model="value" v-bind="args">
    <template #icon>
      <card-icon />
    </template>
    </d-switch-card>
    <p>Checkbox value is: {{value}}</p>
  `}),o=q.bind({});o.args={heading:"Card",description:"Add your debit / credit card information"};const r=P.bind({});r.args={heading:"Card",description:"Add your debit / credit card information"};const z=e=>({components:{DSwitchCard:a,CardIcon:n,BankIcon:V,DAutoLayout:J},data:()=>({values:[]}),setup(){return{args:e}},template:`
    <d-auto-layout direction="vertical">
      <d-switch-card v-model="values" value="card" heading="Card" description="Add the option to pay with a credit card" v-bind="args">
        <template #icon>
          <card-icon />
        </template>    
      </d-switch-card>
      <d-switch-card v-model="values" value="bank" heading="Bank Account" description="Add the option to pay with a bank account" v-bind="args">
        <template #icon>
          <bank-icon />
        </template>
      </d-switch-card>
    </d-auto-layout>
    <p>Checkbox value is: {{values}}</p>
  `}),p=z.bind({}),Q=e=>({components:{DSwitchCard:a},data:()=>({value:""}),setup(){return{args:e}},template:`
    <d-switch-card v-model="value" value="value" v-bind="args">
    </d-switch-card>
    <p>Checkbox value is: {{value}}</p>
  `}),c=Q.bind({});c.args={heading:"One time payment",description:"Use this option to collect a one off payment"};const R=e=>({components:{DSwitchCard:a,DFilePicker:N,CardIcon:n},data:()=>({value:""}),setup(){return{args:e}},template:`
    <d-switch-card v-model="value" value="value" v-bind="args">
      <template #icon>
        <card-icon />
      </template>
      <d-file-picker />
    </d-switch-card>
    <p>Checkbox value is: {{value}}</p>
  `}),d=R.bind({});d.args={heading:"One time payment",description:"Use this option to collect a one off payment",expandable:!0};const X=e=>({components:{DSwitchCard:a,DFilePicker:N,CardIcon:n},data:()=>({value:""}),setup(){return{args:e}},template:`
    <d-switch-card v-model="value" value="value" v-bind="args">
      <d-file-picker />
    </d-switch-card>
    <p>Checkbox value is: {{value}}</p>
  `}),s=X.bind({});s.args={heading:"One time payment",description:"Use this option to collect a one off payment",expandable:!0};const Y=e=>({components:{DSwitchCard:a,CardIcon:n,DHeading:$,DText:G,DAutoLayout:J,DBox:K},data:()=>({value:""}),setup(){return{args:e}},template:`<d-switch-card v-model="value" value="value" v-bind="args">
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
  </d-switch-card>
  <p>Checkbox value is: {{value}}</p>
  `}),i=Y.bind({});i.args={heading:"One time payment",description:"Use this option to collect a one off payment"};const Z=e=>({components:{DSwitchCard:a,CardIcon:n,DAlert:j},data:()=>({value:!1}),setup(){return{args:e}},template:`
    <d-switch-card v-model="value" value="value" v-bind="args">
      <template #footer>
        <d-alert margin-top="16px" color-scheme="info" description="I am an alert" />
      </template>
    </d-switch-card>
    <p>Checkbox value is: {{value}}</p>
  `}),l=Z.bind({});l.args={heading:"One time payment",description:"Use this option to collect a one off payment"};var u,m,v;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
  components: {
    DSwitchCard,
    CardIcon
  },
  data: () => ({
    value: false
  }),
  setup() {
    return {
      args
    };
  },
  template: \`
    <d-switch-card v-model="value" value="value" v-bind="args">
    <template #icon>
      <card-icon />
    </template>
    </d-switch-card>
    <p>Checkbox value is: {{value}}</p>
  \`
})`,...(v=(m=t.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var h,g,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
  components: {
    DSwitchCard,
    CardIcon
  },
  data: () => ({
    value: false
  }),
  setup() {
    return {
      args
    };
  },
  template: \`
    <d-switch-card v-model="value" v-bind="args">
    <template #icon>
      <card-icon />
    </template>
    </d-switch-card>
    <p>Checkbox value is: {{value}}</p>
  \`
})`,...(b=(g=o.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var C,w,x;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
  components: {
    DSwitchCard,
    CardIcon
  },
  data: () => ({
    value: false
  }),
  setup() {
    return {
      args
    };
  },
  template: \`
    <d-switch-card v-model="value" value="value" v-bind="args">
    <template #icon>
      <card-icon />
    </template>
    </d-switch-card>
    <p>Checkbox value is: {{value}}</p>
  \`
})`,...(x=(w=r.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var k,y,f;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
  components: {
    DSwitchCard,
    CardIcon,
    BankIcon,
    DAutoLayout
  },
  data: () => ({
    values: []
  }),
  setup() {
    return {
      args
    };
  },
  template: \`
    <d-auto-layout direction="vertical">
      <d-switch-card v-model="values" value="card" heading="Card" description="Add the option to pay with a credit card" v-bind="args">
        <template #icon>
          <card-icon />
        </template>    
      </d-switch-card>
      <d-switch-card v-model="values" value="bank" heading="Bank Account" description="Add the option to pay with a bank account" v-bind="args">
        <template #icon>
          <bank-icon />
        </template>
      </d-switch-card>
    </d-auto-layout>
    <p>Checkbox value is: {{values}}</p>
  \`
})`,...(f=(y=p.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var D,I,S;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
  components: {
    DSwitchCard
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
    <d-switch-card v-model="value" value="value" v-bind="args">
    </d-switch-card>
    <p>Checkbox value is: {{value}}</p>
  \`
})`,...(S=(I=c.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var A,T,F;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`args => ({
  components: {
    DSwitchCard,
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
    <d-switch-card v-model="value" value="value" v-bind="args">
      <template #icon>
        <card-icon />
      </template>
      <d-file-picker />
    </d-switch-card>
    <p>Checkbox value is: {{value}}</p>
  \`
})`,...(F=(T=d.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var O,_,E;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
  components: {
    DSwitchCard,
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
    <d-switch-card v-model="value" value="value" v-bind="args">
      <d-file-picker />
    </d-switch-card>
    <p>Checkbox value is: {{value}}</p>
  \`
})`,...(E=(_=s.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var U,W,B;i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:`args => ({
  components: {
    DSwitchCard,
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
  template: \`<d-switch-card v-model="value" value="value" v-bind="args">
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
  </d-switch-card>
  <p>Checkbox value is: {{value}}</p>
  \`
})`,...(B=(W=i.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var H,L,M;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`args => ({
  components: {
    DSwitchCard,
    CardIcon,
    DAlert
  },
  data: () => ({
    value: false
  }),
  setup() {
    return {
      args
    };
  },
  template: \`
    <d-switch-card v-model="value" value="value" v-bind="args">
      <template #footer>
        <d-alert margin-top="16px" color-scheme="info" description="I am an alert" />
      </template>
    </d-switch-card>
    <p>Checkbox value is: {{value}}</p>
  \`
})`,...(M=(L=l.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};const re=["WithLabel","TrueOrFalseCheckbox","CheckboxWithValue","CheckboxArray","NoIcon","ExpandMode","ExpandModeWithoutIcon","CustomHeadingAndDescription","FooterSlot"];export{p as CheckboxArray,r as CheckboxWithValue,i as CustomHeadingAndDescription,d as ExpandMode,s as ExpandModeWithoutIcon,l as FooterSlot,c as NoIcon,o as TrueOrFalseCheckbox,t as WithLabel,re as __namedExportsOrder,oe as default};
//# sourceMappingURL=DSwitchCard.stories-9b1d6bc2.js.map