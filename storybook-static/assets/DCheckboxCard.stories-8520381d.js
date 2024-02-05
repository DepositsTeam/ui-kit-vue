import{at as a,G as n,H as w,h as M,I as U,J,q as N,o as P}from"./DWysiwyg-b1144304.js";import"./vue.esm-bundler-a99e1ba3.js";import"./floating-ui.dom-c3a31ea6.js";import"./_commonjsHelpers-042e6b4d.js";const Y={title:"Forms/Checkbox Card",component:a,tags:["autodocs"],argTypes:{labelClass:{control:{type:"text"}},labelFontFace:{control:{type:"text"}},heading:{control:{type:"text"}},description:{control:{type:"text"}},label:{control:{type:"text"}},expandOnChecked:{control:{type:"text"}},expandable:{control:{type:"text"}}}},L=e=>({components:{DCheckboxCard:a,CardIcon:n},data:()=>({value:!1}),setup(){return{args:e}},template:`
    <d-checkbox-card v-model="value" value="value" v-bind="args">
    <template #icon>
      <card-icon />
    </template>
    </d-checkbox-card>
    <p>Checkbox value is: {{value}}</p>
  `}),t=L.bind({});t.args={heading:"Card",description:"Add your debit / credit card information",label:"Select card option"};const V=e=>({components:{DCheckboxCard:a,CardIcon:n},data:()=>({value:!1}),setup(){return{args:e}},template:`
    <d-checkbox-card v-model="value" v-bind="args">
    <template #icon>
      <card-icon />
    </template>
    </d-checkbox-card>
    <p>Checkbox value is: {{value}}</p>
  `}),o=V.bind({});o.args={heading:"Card",description:"Add your debit / credit card information"};const c=L.bind({});c.args={heading:"Card",description:"Add your debit / credit card information"};const $=e=>({components:{DCheckboxCard:a,CardIcon:n,BankIcon:w,DAutoLayout:M},data:()=>({values:[]}),setup(){return{args:e}},template:`
    <d-auto-layout direction="vertical">
      <d-checkbox-card v-model="values" value="card" heading="Card" description="Add the option to pay with a credit card" v-bind="args">
        <template #icon>
          <card-icon />
        </template>    
      </d-checkbox-card>
      <d-checkbox-card v-model="values" value="bank" heading="Bank Account" description="Add the option to pay with a bank account" v-bind="args">
        <template #icon>
          <bank-icon />
        </template>
      </d-checkbox-card>
    </d-auto-layout>
    <p>Checkbox value is: {{values}}</p>
  `}),i=$.bind({}),q=e=>({components:{DCheckboxCard:a},data:()=>({value:""}),setup(){return{args:e}},template:`
    <d-checkbox-card v-model="value" value="value" v-bind="args">
    </d-checkbox-card>
    <p>Checkbox value is: {{value}}</p>
  `}),r=q.bind({});r.args={heading:"One time payment",description:"Use this option to collect a one off payment"};const G=e=>({components:{DCheckboxCard:a,DFilePicker:U,CardIcon:n},data:()=>({value:""}),setup(){return{args:e}},template:`
    <d-checkbox-card v-model="value" value="value" v-bind="args">
      <template #icon>
        <card-icon />
      </template>
      <d-file-picker />
    </d-checkbox-card>
    <p>Checkbox value is: {{value}}</p>
  `}),d=G.bind({});d.args={heading:"One time payment",description:"Use this option to collect a one off payment",expandable:!0};const j=e=>({components:{DCheckboxCard:a,DFilePicker:U,CardIcon:n},data:()=>({value:""}),setup(){return{args:e}},template:`
    <d-checkbox-card v-model="value" value="value" v-bind="args">
      <d-file-picker />
    </d-checkbox-card>
    <p>Checkbox value is: {{value}}</p>
  `}),s=j.bind({});s.args={heading:"One time payment",description:"Use this option to collect a one off payment",expandable:!0};const z=e=>({components:{DCheckboxCard:a,CardIcon:n,DHeading:J,DText:N,DAutoLayout:M,DBox:P},data:()=>({value:""}),setup(){return{args:e}},template:`<d-checkbox-card v-model="value" value="value" v-bind="args">
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
  </d-checkbox-card>
  <p>Checkbox value is: {{value}}</p>
  `}),l=z.bind({});l.args={heading:"One time payment",description:"Use this option to collect a one off payment"};var p,u,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  components: {
    DCheckboxCard,
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
    <d-checkbox-card v-model="value" value="value" v-bind="args">
    <template #icon>
      <card-icon />
    </template>
    </d-checkbox-card>
    <p>Checkbox value is: {{value}}</p>
  \`
})`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var v,b,h;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
  components: {
    DCheckboxCard,
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
    <d-checkbox-card v-model="value" v-bind="args">
    <template #icon>
      <card-icon />
    </template>
    </d-checkbox-card>
    <p>Checkbox value is: {{value}}</p>
  \`
})`,...(h=(b=o.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var x,k,g;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
  components: {
    DCheckboxCard,
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
    <d-checkbox-card v-model="value" value="value" v-bind="args">
    <template #icon>
      <card-icon />
    </template>
    </d-checkbox-card>
    <p>Checkbox value is: {{value}}</p>
  \`
})`,...(g=(k=c.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};var C,y,f;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
  components: {
    DCheckboxCard,
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
      <d-checkbox-card v-model="values" value="card" heading="Card" description="Add the option to pay with a credit card" v-bind="args">
        <template #icon>
          <card-icon />
        </template>    
      </d-checkbox-card>
      <d-checkbox-card v-model="values" value="bank" heading="Bank Account" description="Add the option to pay with a bank account" v-bind="args">
        <template #icon>
          <bank-icon />
        </template>
      </d-checkbox-card>
    </d-auto-layout>
    <p>Checkbox value is: {{values}}</p>
  \`
})`,...(f=(y=i.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var D,I,A;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
  components: {
    DCheckboxCard
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
    <d-checkbox-card v-model="value" value="value" v-bind="args">
    </d-checkbox-card>
    <p>Checkbox value is: {{value}}</p>
  \`
})`,...(A=(I=r.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var T,F,O;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
  components: {
    DCheckboxCard,
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
    <d-checkbox-card v-model="value" value="value" v-bind="args">
      <template #icon>
        <card-icon />
      </template>
      <d-file-picker />
    </d-checkbox-card>
    <p>Checkbox value is: {{value}}</p>
  \`
})`,...(O=(F=d.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var S,_,E;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
  components: {
    DCheckboxCard,
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
    <d-checkbox-card v-model="value" value="value" v-bind="args">
      <d-file-picker />
    </d-checkbox-card>
    <p>Checkbox value is: {{value}}</p>
  \`
})`,...(E=(_=s.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var W,B,H;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`args => ({
  components: {
    DCheckboxCard,
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
  template: \`<d-checkbox-card v-model="value" value="value" v-bind="args">
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
  </d-checkbox-card>
  <p>Checkbox value is: {{value}}</p>
  \`
})`,...(H=(B=l.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};const Z=["WithLabel","TrueOrFalseCheckbox","CheckboxWithValue","CheckboxArray","NoIcon","ExpandMode","ExpandModeWithoutIcon","CustomHeadingAndDescription"];export{i as CheckboxArray,c as CheckboxWithValue,l as CustomHeadingAndDescription,d as ExpandMode,s as ExpandModeWithoutIcon,r as NoIcon,o as TrueOrFalseCheckbox,t as WithLabel,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=DCheckboxCard.stories-8520381d.js.map
