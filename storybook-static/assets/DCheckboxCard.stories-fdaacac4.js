import{f as y,e as le,j as m,k as t,u as n,l as v,n as de,m as S,t as F,p as V,q as o,x as _}from"./vue.esm-bundler-d253c880.js";import{I as re,e as T,q as I,l as c,a4 as se,G as ne,E as i,H as ue,F as te}from"./DTooltip-d412d8f4.js";import"./floating-ui.dom-c3a31ea6.js";import"./_commonjsHelpers-042e6b4d.js";const ie=(e,p)=>{const d=y(()=>e.value===""?e.label:e.value),r=y(()=>e.value?e.value:e.trueValue===!0?!0:globalThis.value),A=y(()=>e.falseValue===!1?!1:e.falseValue),s=y(()=>e.modelValue instanceof Array?e.values.length?e.values.every(a=>e.modelValue.includes(a)):e.modelValue.includes(d.value):e.modelValue===r.value);return{isChecked:s,triggerChange:()=>{if(!e.disabled)if(e.values.length){let a=[...e.modelValue];s.value?e.values.forEach(u=>{a.includes(u)&&a.splice(a.indexOf(u),1)}):e.values.forEach(u=>{a.includes(u)||a.push(u)}),p("update:modelValue",a)}else if(e.modelValue instanceof Array){let a=[...e.modelValue];s.value?a.splice(a.indexOf(d.value),1):a.push(d.value),p("update:modelValue",a)}else p("update:modelValue",s.value?A.value:r.value)}}};const oe={__name:"DCheckboxCard",props:{heading:{type:String},description:{type:String},checked:{type:Boolean,default:null},value:{type:[String,Number],default:""},modelValue:{default:!1},trueValue:{default:!0},falseValue:{default:!1},values:{type:Array,default:()=>[]},dashed:{type:Boolean},disabled:{type:Boolean},expandable:{type:Boolean},label:{type:String},labelClass:{type:String},labelFontFace:{type:String,default:"heroNew"}},emits:["update:modelValue","click"],setup(e,{emit:p}){const d=e,r=le(!1),{isChecked:A,triggerChange:s}=ie(d,p),B=a=>{d.disabled||(d.expandable?a.target.closest(".d-checkbox-card__checkbox")?s():r.value=!r.value:s())};return(a,u)=>(v(),m(n(c),{class:"d-checkbox-card__wrapper"},{default:t(()=>[e.label?(v(),m(n(T),{key:0,"margin-top":"0px",class:de(["ui-text-field__label",e.labelClass]),scale:"subhead","font-face":e.labelFontFace},{default:t(()=>[S(F(e.label),1)]),_:1},8,["class","font-face"])):V("",!0),o(n(c),{onClick:B,class:"d-checkbox-card"},{default:t(()=>[o(n(I),{"justify-content":"space-between","align-items":"center"},{default:t(()=>[o(n(I),{gap:"16px"},{default:t(()=>[a.$slots.icon?(v(),m(n(c),{key:0,"align-self":"center",class:"d-checkbox-card__icon"},{default:t(()=>[_(a.$slots,"icon",{},void 0,!0)]),_:3})):V("",!0),o(n(c),{class:"d-checkbox-card__content"},{default:t(()=>[_(a.$slots,"heading",{},()=>[o(n(ne),{my0:""},{default:t(()=>[S(F(e.heading),1)]),_:1})],!0),_(a.$slots,"description",{},()=>[o(n(T),{scale:"subhead","light-color":"#8C97A7",my0:""},{default:t(()=>[S(F(e.description),1)]),_:1})],!0)]),_:3})]),_:3}),o(n(c),{class:"d-checkbox-card__checkbox"},{default:t(()=>[o(n(se),{dashed:e.dashed,size:"18px",checked:n(A)},null,8,["dashed","checked"])]),_:1})]),_:3}),e.expandable&&r.value?(v(),m(n(c),{key:0,class:"d-checkbox-card__expansion-border"})):V("",!0),r.value?(v(),m(n(c),{key:1,class:"d-checkbox-card__expanded"},{default:t(()=>[_(a.$slots,"default",{},void 0,!0)]),_:3})):V("",!0)]),_:3})]),_:3}))}},l=re(oe,[["__scopeId","data-v-718ac998"]]);oe.__docgenInfo={exportName:"default",displayName:"DCheckboxCard",description:"",tags:{},props:[{name:"heading",type:{name:"string"}},{name:"description",type:{name:"string"}},{name:"checked",type:{name:"boolean"},defaultValue:{func:!1,value:"null"}},{name:"value",type:{name:"string|number"},defaultValue:{func:!1,value:'""'}},{name:"modelValue",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"trueValue",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"falseValue",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"values",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"dashed",type:{name:"boolean"}},{name:"disabled",type:{name:"boolean"}},{name:"expandable",type:{name:"boolean"}},{name:"label",type:{name:"string"}},{name:"labelClass",type:{name:"string"}},{name:"labelFontFace",type:{name:"string"},defaultValue:{func:!1,value:'"heroNew"'}}],events:[{name:"update:modelValue"},{name:"click"}],slots:[{name:"icon"},{name:"heading"},{name:"description"},{name:"default"}],sourceFiles:["/Users/ericmcwinner/Documents/Work/Projects/Work/Vue/deposits-ui-kit-vue/src/d-checkbox-card/DCheckboxCard.vue"]};const ye={title:"Forms/Cards/Checkbox Card",component:l,argTypes:{}},ce=e=>({components:{DCheckboxCard:l,CardIcon:i},data:()=>({value:!1}),setup(){return{args:e}},template:`
    <d-checkbox-card v-model="value" value="value" v-bind="args">
    <template #icon>
      <card-icon />
    </template>
    </d-checkbox-card>
    <p>Checkbox value is: {{value}}</p>
  `}),b=ce.bind({});b.args={heading:"Card",description:"Add your debit / credit card information",label:"Select card option"};const pe=e=>({components:{DCheckboxCard:l,CardIcon:i},data:()=>({value:!1}),setup(){return{args:e}},template:`
    <d-checkbox-card v-model="value" v-bind="args">
    <template #icon>
      <card-icon />
    </template>
    </d-checkbox-card>
    <p>Checkbox value is: {{value}}</p>
  `}),h=pe.bind({});h.args={heading:"Card",description:"Add your debit / credit card information"};const k=ce.bind({});k.args={heading:"Card",description:"Add your debit / credit card information"};const me=e=>({components:{DCheckboxCard:l,CardIcon:i,BankIcon:ue,DAutoLayout:I},data:()=>({values:[]}),setup(){return{args:e}},template:`
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
  `}),D=me.bind({}),ve=e=>({components:{DCheckboxCard:l},data:()=>({value:""}),setup(){return{args:e}},template:`
    <d-checkbox-card v-model="value" value="value" v-bind="args">
    </d-checkbox-card>
    <p>Checkbox value is: {{value}}</p>
  `}),g=ve.bind({});g.args={heading:"One time payment",description:"Use this option to collect a one off payment"};const be=e=>({components:{DCheckboxCard:l,DFilePicker:te,CardIcon:i},data:()=>({value:""}),setup(){return{args:e}},template:`
    <d-checkbox-card v-model="value" value="value" v-bind="args">
      <template #icon>
        <card-icon />
      </template>
      <d-file-picker />
    </d-checkbox-card>
    <p>Checkbox value is: {{value}}</p>
  `}),x=be.bind({});x.args={heading:"One time payment",description:"Use this option to collect a one off payment",expandable:!0};const he=e=>({components:{DCheckboxCard:l,DFilePicker:te,CardIcon:i},data:()=>({value:""}),setup(){return{args:e}},template:`
    <d-checkbox-card v-model="value" value="value" v-bind="args">
      <d-file-picker />
    </d-checkbox-card>
    <p>Checkbox value is: {{value}}</p>
  `}),f=he.bind({});f.args={heading:"One time payment",description:"Use this option to collect a one off payment",expandable:!0};const ke=e=>({components:{DCheckboxCard:l,CardIcon:i,DHeading:ne,DText:T,DAutoLayout:I,DBox:c},data:()=>({value:""}),setup(){return{args:e}},template:`<d-checkbox-card v-model="value" value="value" v-bind="args">
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
  `}),C=ke.bind({});C.args={heading:"One time payment",description:"Use this option to collect a one off payment"};var N,w,E;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`args => ({
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
})`,...(E=(w=b.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var O,W,$;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
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
})`,...($=(W=h.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var U,H,M;k.parameters={...k.parameters,docs:{...(U=k.parameters)==null?void 0:U.docs,source:{originalSource:`args => ({
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
})`,...(M=(H=k.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var L,P,j;D.parameters={...D.parameters,docs:{...(L=D.parameters)==null?void 0:L.docs,source:{originalSource:`args => ({
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
})`,...(j=(P=D.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var q,z,J;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
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
})`,...(J=(z=g.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var G,K,Q;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`args => ({
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
})`,...(Q=(K=x.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var R,X,Y;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`args => ({
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
})`,...(Y=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;C.parameters={...C.parameters,docs:{...(Z=C.parameters)==null?void 0:Z.docs,source:{originalSource:`args => ({
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
})`,...(ae=(ee=C.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};const Ve=["WithLabel","TrueOrFalseCheckbox","CheckboxWithValue","CheckboxArray","NoIcon","ExpandMode","ExpandModeWithoutIcon","CustomHeadingAndDescription"];export{D as CheckboxArray,k as CheckboxWithValue,C as CustomHeadingAndDescription,x as ExpandMode,f as ExpandModeWithoutIcon,g as NoIcon,h as TrueOrFalseCheckbox,b as WithLabel,Ve as __namedExportsOrder,ye as default};
//# sourceMappingURL=DCheckboxCard.stories-fdaacac4.js.map