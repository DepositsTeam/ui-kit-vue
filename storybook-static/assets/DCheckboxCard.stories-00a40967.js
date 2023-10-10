import{j as K,O as Q,k as p,u as m,l as R,x as v,q as X}from"./vue.esm-bundler-f842f4aa.js";import{ad as Y,ae as Z,af as ee,ag as ae,q as o,r as ne,s as H,t as L,u as oe,g as te,f as ce}from"./DWysiwyg-8847abda.js";import"./floating-ui.dom-c3a31ea6.js";import"./_commonjsHelpers-042e6b4d.js";const P={__name:"DCheckboxCard",props:{...Y,checked:{type:Boolean,default:null},value:{type:[String,Number],default:""},modelValue:{default:!1},trueValue:{default:!0},falseValue:{default:!1},values:{type:Array,default:()=>[]},dashed:{type:Boolean},disabled:{type:Boolean}},emits:["update:modelValue"],setup(e,{emit:q}){const J=e,{isChecked:b,triggerChange:z}=Z(J,q),G=()=>{z()};return(a,pe)=>(R(),K(ee,{heading:a.heading,description:a.description,expandable:a.expandable,label:a.label,"label-class":a.labelClass,"label-font-face":a.labelFontFace,"expand-on-checked":a.expandOnChecked,"is-checked":m(b),onClicked:G},Q({selector:p(()=>[X(m(ae),{dashed:e.dashed,size:"18px",checked:m(b)},null,8,["dashed","checked"])]),default:p(()=>[v(a.$slots,"default")]),_:2},[a.$slots.icon?{name:"icon",fn:p(()=>[v(a.$slots,"icon")]),key:"0"}:void 0]),1032,["heading","description","expandable","label","label-class","label-font-face","expand-on-checked","is-checked"]))}},n=P;P.__docgenInfo={exportName:"default",displayName:"DCheckboxCard",description:"",tags:{},props:[{name:"checked",type:{name:"boolean"},defaultValue:{func:!1,value:"null"}},{name:"value",type:{name:"string|number"},defaultValue:{func:!1,value:'""'}},{name:"modelValue",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"trueValue",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"falseValue",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"values",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"dashed",type:{name:"boolean"}},{name:"disabled",type:{name:"boolean"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"},{name:"icon"}],sourceFiles:["/Users/ericmcwinner/Documents/Work/Projects/Work/Vue/deposits-ui-kit-vue/src/d-checkbox-card/DCheckboxCard.vue"]};const ke={title:"Forms/Cards/Checkbox Card",component:n,argTypes:{}},j=e=>({components:{DCheckboxCard:n,CardIcon:o},data:()=>({value:!1}),setup(){return{args:e}},template:`
    <d-checkbox-card v-model="value" value="value" v-bind="args">
    <template #icon>
      <card-icon />
    </template>
    </d-checkbox-card>
    <p>Checkbox value is: {{value}}</p>
  `}),t=j.bind({});t.args={heading:"Card",description:"Add your debit / credit card information",label:"Select card option"};const de=e=>({components:{DCheckboxCard:n,CardIcon:o},data:()=>({value:!1}),setup(){return{args:e}},template:`
    <d-checkbox-card v-model="value" v-bind="args">
    <template #icon>
      <card-icon />
    </template>
    </d-checkbox-card>
    <p>Checkbox value is: {{value}}</p>
  `}),c=de.bind({});c.args={heading:"Card",description:"Add your debit / credit card information"};const d=j.bind({});d.args={heading:"Card",description:"Add your debit / credit card information"};const re=e=>({components:{DCheckboxCard:n,CardIcon:o,BankIcon:ne,DAutoLayout:H},data:()=>({values:[]}),setup(){return{args:e}},template:`
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
  `}),u=re.bind({}),le=e=>({components:{DCheckboxCard:n},data:()=>({value:""}),setup(){return{args:e}},template:`
    <d-checkbox-card v-model="value" value="value" v-bind="args">
    </d-checkbox-card>
    <p>Checkbox value is: {{value}}</p>
  `}),r=le.bind({});r.args={heading:"One time payment",description:"Use this option to collect a one off payment"};const se=e=>({components:{DCheckboxCard:n,DFilePicker:L,CardIcon:o},data:()=>({value:""}),setup(){return{args:e}},template:`
    <d-checkbox-card v-model="value" value="value" v-bind="args">
      <template #icon>
        <card-icon />
      </template>
      <d-file-picker />
    </d-checkbox-card>
    <p>Checkbox value is: {{value}}</p>
  `}),l=se.bind({});l.args={heading:"One time payment",description:"Use this option to collect a one off payment",expandable:!0};const ie=e=>({components:{DCheckboxCard:n,DFilePicker:L,CardIcon:o},data:()=>({value:""}),setup(){return{args:e}},template:`
    <d-checkbox-card v-model="value" value="value" v-bind="args">
      <d-file-picker />
    </d-checkbox-card>
    <p>Checkbox value is: {{value}}</p>
  `}),s=ie.bind({});s.args={heading:"One time payment",description:"Use this option to collect a one off payment",expandable:!0};const ue=e=>({components:{DCheckboxCard:n,CardIcon:o,DHeading:oe,DText:te,DAutoLayout:H,DBox:ce},data:()=>({value:""}),setup(){return{args:e}},template:`<d-checkbox-card v-model="value" value="value" v-bind="args">
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
  `}),i=ue.bind({});i.args={heading:"One time payment",description:"Use this option to collect a one off payment"};var h,k,x;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
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
})`,...(x=(k=t.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var g,C,f;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`args => ({
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
})`,...(f=(C=c.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var y,D,I;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
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
})`,...(I=(D=d.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var A,V,T;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`args => ({
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
})`,...(T=(V=u.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};var S,B,F;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
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
})`,...(F=(B=r.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var O,W,E;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
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
})`,...(E=(W=l.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var N,U,w;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`args => ({
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
})`,...(w=(U=s.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};var M,_,$;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`args => ({
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
})`,...($=(_=i.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};const xe=["WithLabel","TrueOrFalseCheckbox","CheckboxWithValue","CheckboxArray","NoIcon","ExpandMode","ExpandModeWithoutIcon","CustomHeadingAndDescription"];export{u as CheckboxArray,d as CheckboxWithValue,i as CustomHeadingAndDescription,l as ExpandMode,s as ExpandModeWithoutIcon,r as NoIcon,c as TrueOrFalseCheckbox,t as WithLabel,xe as __namedExportsOrder,ke as default};
//# sourceMappingURL=DCheckboxCard.stories-00a40967.js.map
