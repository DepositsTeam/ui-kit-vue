import{j as K,k as p,l as Q,q as R,u as m,x as b}from"./vue.esm-bundler-673e2372.js";import{ac as X,ad as Y,ae as Z,af as ee,x as o,y as ae,q as H,z as L,A as ne,g as oe,e as te}from"./DWysiwyg-fa9e3e3f.js";import"./floating-ui.dom-c3a31ea6.js";import"./_commonjsHelpers-042e6b4d.js";const P={__name:"DCheckboxCard",props:{...X,checked:{type:Boolean,default:null},value:{type:[String,Number],default:""},modelValue:{default:!1},trueValue:{default:!0},falseValue:{default:!1},values:{type:Array,default:()=>[]},dashed:{type:Boolean},disabled:{type:Boolean}},emits:["update:modelValue","click"],setup(e,{emit:j}){const q=e,{isChecked:z,triggerChange:J}=Y(q,j),G=()=>{J()};return(a,ue)=>(Q(),K(Z,{heading:a.heading,description:a.description,expandable:a.expandable,label:a.label,"label-class":a.labelClass,"label-font-face":a.labelFontFace,onClicked:G},{selector:p(()=>[R(m(ee),{dashed:e.dashed,size:"18px",checked:m(z)},null,8,["dashed","checked"])]),icon:p(()=>[b(a.$slots,"icon")]),default:p(()=>[b(a.$slots,"default")]),_:3},8,["heading","description","expandable","label","label-class","label-font-face"]))}},n=P;P.__docgenInfo={exportName:"default",displayName:"DCheckboxCard",description:"",tags:{},props:[{name:"checked",type:{name:"boolean"},defaultValue:{func:!1,value:"null"}},{name:"value",type:{name:"string|number"},defaultValue:{func:!1,value:'""'}},{name:"modelValue",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"trueValue",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"falseValue",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"values",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"dashed",type:{name:"boolean"}},{name:"disabled",type:{name:"boolean"}}],events:[{name:"update:modelValue"},{name:"click"}],slots:[{name:"default"},{name:"icon"}],sourceFiles:["/Users/ericmcwinner/Documents/Work/Projects/Work/Vue/deposits-ui-kit-vue/src/d-checkbox-card/DCheckboxCard.vue"]};const he={title:"Forms/Cards/Checkbox Card",component:n,argTypes:{}},$=e=>({components:{DCheckboxCard:n,CardIcon:o},data:()=>({value:!1}),setup(){return{args:e}},template:`
    <d-checkbox-card v-model="value" value="value" v-bind="args">
    <template #icon>
      <card-icon />
    </template>
    </d-checkbox-card>
    <p>Checkbox value is: {{value}}</p>
  `}),t=$.bind({});t.args={heading:"Card",description:"Add your debit / credit card information",label:"Select card option"};const ce=e=>({components:{DCheckboxCard:n,CardIcon:o},data:()=>({value:!1}),setup(){return{args:e}},template:`
    <d-checkbox-card v-model="value" v-bind="args">
    <template #icon>
      <card-icon />
    </template>
    </d-checkbox-card>
    <p>Checkbox value is: {{value}}</p>
  `}),c=ce.bind({});c.args={heading:"Card",description:"Add your debit / credit card information"};const d=$.bind({});d.args={heading:"Card",description:"Add your debit / credit card information"};const de=e=>({components:{DCheckboxCard:n,CardIcon:o,BankIcon:ae,DAutoLayout:H},data:()=>({values:[]}),setup(){return{args:e}},template:`
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
  `}),u=de.bind({}),re=e=>({components:{DCheckboxCard:n},data:()=>({value:""}),setup(){return{args:e}},template:`
    <d-checkbox-card v-model="value" value="value" v-bind="args">
    </d-checkbox-card>
    <p>Checkbox value is: {{value}}</p>
  `}),r=re.bind({});r.args={heading:"One time payment",description:"Use this option to collect a one off payment"};const le=e=>({components:{DCheckboxCard:n,DFilePicker:L,CardIcon:o},data:()=>({value:""}),setup(){return{args:e}},template:`
    <d-checkbox-card v-model="value" value="value" v-bind="args">
      <template #icon>
        <card-icon />
      </template>
      <d-file-picker />
    </d-checkbox-card>
    <p>Checkbox value is: {{value}}</p>
  `}),l=le.bind({});l.args={heading:"One time payment",description:"Use this option to collect a one off payment",expandable:!0};const se=e=>({components:{DCheckboxCard:n,DFilePicker:L,CardIcon:o},data:()=>({value:""}),setup(){return{args:e}},template:`
    <d-checkbox-card v-model="value" value="value" v-bind="args">
      <d-file-picker />
    </d-checkbox-card>
    <p>Checkbox value is: {{value}}</p>
  `}),s=se.bind({});s.args={heading:"One time payment",description:"Use this option to collect a one off payment",expandable:!0};const ie=e=>({components:{DCheckboxCard:n,CardIcon:o,DHeading:ne,DText:oe,DAutoLayout:H,DBox:te},data:()=>({value:""}),setup(){return{args:e}},template:`<d-checkbox-card v-model="value" value="value" v-bind="args">
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
  `}),i=ie.bind({});i.args={heading:"One time payment",description:"Use this option to collect a one off payment"};var v,h,k;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
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
})`,...(k=(h=t.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var x,g,C;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
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
})`,...(C=(g=c.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var f,y,D;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
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
})`,...(D=(y=d.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var I,A,V;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
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
})`,...(V=(A=u.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var T,B,S;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
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
})`,...(S=(B=r.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var F,W,O;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`args => ({
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
})`,...(O=(W=l.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var _,E,N;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
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
})`,...(N=(E=s.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var U,w,M;i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:`args => ({
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
})`,...(M=(w=i.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};const ke=["WithLabel","TrueOrFalseCheckbox","CheckboxWithValue","CheckboxArray","NoIcon","ExpandMode","ExpandModeWithoutIcon","CustomHeadingAndDescription"];export{u as CheckboxArray,d as CheckboxWithValue,i as CustomHeadingAndDescription,l as ExpandMode,s as ExpandModeWithoutIcon,r as NoIcon,c as TrueOrFalseCheckbox,t as WithLabel,ke as __namedExportsOrder,he as default};
//# sourceMappingURL=DCheckboxCard.stories-0f0b6035.js.map
