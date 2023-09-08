import{e as oe,j as l,k as n,u as a,l as s,n as ce,m as _,t as D,p as x,q as t,x as g}from"./vue.esm-bundler-d253c880.js";import{N as de,ac as re,g as I,q as C,e as o,B as X,ad as le,y as r,z as se,A as Y}from"./DWysiwyg-409150b0.js";import"./floating-ui.dom-c3a31ea6.js";import"./_commonjsHelpers-042e6b4d.js";const Z={__name:"DCheckboxCard",props:{heading:{type:String},description:{type:String},checked:{type:Boolean,default:null},value:{type:[String,Number],default:""},modelValue:{default:!1},trueValue:{default:!0},falseValue:{default:!1},values:{type:Array,default:()=>[]},dashed:{type:Boolean},disabled:{type:Boolean},expandable:{type:Boolean},label:{type:String},labelClass:{type:String},labelFontFace:{type:String,default:"heroNew"}},emits:["update:modelValue","click"],setup(e,{emit:ae}){const y=e,k=oe(!1),{isChecked:ne,triggerChange:A}=re(y,ae),te=d=>{y.disabled||(y.expandable?d.target.closest(".d-checkbox-card__checkbox")?A():k.value=!k.value:A())};return(d,ve)=>(s(),l(a(o),{class:"d-checkbox-card__wrapper"},{default:n(()=>[e.label?(s(),l(a(I),{key:0,"margin-top":"0px",class:ce(["ui-text-field__label",e.labelClass]),scale:"subhead","font-face":e.labelFontFace},{default:n(()=>[_(D(e.label),1)]),_:1},8,["class","font-face"])):x("",!0),t(a(o),{onClick:te,class:"d-checkbox-card"},{default:n(()=>[t(a(C),{"justify-content":"space-between","align-items":"center"},{default:n(()=>[t(a(C),{gap:"16px"},{default:n(()=>[d.$slots.icon?(s(),l(a(o),{key:0,"align-self":"center",class:"d-checkbox-card__icon"},{default:n(()=>[g(d.$slots,"icon",{},void 0,!0)]),_:3})):x("",!0),t(a(o),{class:"d-checkbox-card__content"},{default:n(()=>[g(d.$slots,"heading",{},()=>[t(a(X),{my0:""},{default:n(()=>[_(D(e.heading),1)]),_:1})],!0),g(d.$slots,"description",{},()=>[t(a(I),{scale:"subhead","light-color":"#8C97A7",my0:""},{default:n(()=>[_(D(e.description),1)]),_:1})],!0)]),_:3})]),_:3}),t(a(o),{class:"d-checkbox-card__checkbox"},{default:n(()=>[t(a(le),{dashed:e.dashed,size:"18px",checked:a(ne)},null,8,["dashed","checked"])]),_:1})]),_:3}),e.expandable&&k.value?(s(),l(a(o),{key:0,class:"d-checkbox-card__expansion-border"})):x("",!0),k.value?(s(),l(a(o),{key:1,class:"d-checkbox-card__expanded"},{default:n(()=>[g(d.$slots,"default",{},void 0,!0)]),_:3})):x("",!0)]),_:3})]),_:3}))}},c=de(Z,[["__scopeId","data-v-718ac998"]]);Z.__docgenInfo={exportName:"default",displayName:"DCheckboxCard",description:"",tags:{},props:[{name:"heading",type:{name:"string"}},{name:"description",type:{name:"string"}},{name:"checked",type:{name:"boolean"},defaultValue:{func:!1,value:"null"}},{name:"value",type:{name:"string|number"},defaultValue:{func:!1,value:'""'}},{name:"modelValue",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"trueValue",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"falseValue",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"values",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"dashed",type:{name:"boolean"}},{name:"disabled",type:{name:"boolean"}},{name:"expandable",type:{name:"boolean"}},{name:"label",type:{name:"string"}},{name:"labelClass",type:{name:"string"}},{name:"labelFontFace",type:{name:"string"},defaultValue:{func:!1,value:'"heroNew"'}}],events:[{name:"update:modelValue"},{name:"click"}],slots:[{name:"icon"},{name:"heading"},{name:"description"},{name:"default"}],sourceFiles:["/Users/ericmcwinner/Documents/Work/Projects/Work/Vue/deposits-ui-kit-vue/src/d-checkbox-card/DCheckboxCard.vue"]};const Ce={title:"Forms/Cards/Checkbox Card",component:c,argTypes:{}},ee=e=>({components:{DCheckboxCard:c,CardIcon:r},data:()=>({value:!1}),setup(){return{args:e}},template:`
    <d-checkbox-card v-model="value" value="value" v-bind="args">
    <template #icon>
      <card-icon />
    </template>
    </d-checkbox-card>
    <p>Checkbox value is: {{value}}</p>
  `}),i=ee.bind({});i.args={heading:"Card",description:"Add your debit / credit card information",label:"Select card option"};const ie=e=>({components:{DCheckboxCard:c,CardIcon:r},data:()=>({value:!1}),setup(){return{args:e}},template:`
    <d-checkbox-card v-model="value" v-bind="args">
    <template #icon>
      <card-icon />
    </template>
    </d-checkbox-card>
    <p>Checkbox value is: {{value}}</p>
  `}),u=ie.bind({});u.args={heading:"Card",description:"Add your debit / credit card information"};const p=ee.bind({});p.args={heading:"Card",description:"Add your debit / credit card information"};const ue=e=>({components:{DCheckboxCard:c,CardIcon:r,BankIcon:se,DAutoLayout:C},data:()=>({values:[]}),setup(){return{args:e}},template:`
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
  `}),f=ue.bind({}),pe=e=>({components:{DCheckboxCard:c},data:()=>({value:""}),setup(){return{args:e}},template:`
    <d-checkbox-card v-model="value" value="value" v-bind="args">
    </d-checkbox-card>
    <p>Checkbox value is: {{value}}</p>
  `}),m=pe.bind({});m.args={heading:"One time payment",description:"Use this option to collect a one off payment"};const me=e=>({components:{DCheckboxCard:c,DFilePicker:Y,CardIcon:r},data:()=>({value:""}),setup(){return{args:e}},template:`
    <d-checkbox-card v-model="value" value="value" v-bind="args">
      <template #icon>
        <card-icon />
      </template>
      <d-file-picker />
    </d-checkbox-card>
    <p>Checkbox value is: {{value}}</p>
  `}),b=me.bind({});b.args={heading:"One time payment",description:"Use this option to collect a one off payment",expandable:!0};const be=e=>({components:{DCheckboxCard:c,DFilePicker:Y,CardIcon:r},data:()=>({value:""}),setup(){return{args:e}},template:`
    <d-checkbox-card v-model="value" value="value" v-bind="args">
      <d-file-picker />
    </d-checkbox-card>
    <p>Checkbox value is: {{value}}</p>
  `}),h=be.bind({});h.args={heading:"One time payment",description:"Use this option to collect a one off payment",expandable:!0};const he=e=>({components:{DCheckboxCard:c,CardIcon:r,DHeading:X,DText:I,DAutoLayout:C,DBox:o},data:()=>({value:""}),setup(){return{args:e}},template:`<d-checkbox-card v-model="value" value="value" v-bind="args">
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
  `}),v=he.bind({});v.args={heading:"One time payment",description:"Use this option to collect a one off payment"};var V,S,F;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`args => ({
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
})`,...(F=(S=i.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var T,B,N;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
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
})`,...(N=(B=u.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};var w,W,O;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
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
})`,...(O=(W=p.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var $,E,U;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`args => ({
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
})`,...(U=(E=f.parameters)==null?void 0:E.docs)==null?void 0:U.source}}};var M,H,L;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`args => ({
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
})`,...(L=(H=m.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var P,j,z;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`args => ({
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
})`,...(z=(j=b.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var q,J,G;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
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
})`,...(G=(J=h.parameters)==null?void 0:J.docs)==null?void 0:G.source}}};var K,Q,R;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`args => ({
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
})`,...(R=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:R.source}}};const ye=["WithLabel","TrueOrFalseCheckbox","CheckboxWithValue","CheckboxArray","NoIcon","ExpandMode","ExpandModeWithoutIcon","CustomHeadingAndDescription"];export{f as CheckboxArray,p as CheckboxWithValue,v as CustomHeadingAndDescription,b as ExpandMode,h as ExpandModeWithoutIcon,m as NoIcon,u as TrueOrFalseCheckbox,i as WithLabel,ye as __namedExportsOrder,Ce as default};
//# sourceMappingURL=DCheckboxCard.stories-0c5dbad1.js.map
