import{a1 as s}from"./DAccordion-DPvhlSJk.js";import"./vue.esm-bundler-CUqwZzoc.js";import"./iframe-CY1HI4ps.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-BosuxZz1.js";const E={title:"Forms/Filter Dropdown",component:s,tags:["autodocs"],argTypes:{}},V=e=>({components:{DFilterDropdown:s},data:()=>({value:""}),setup(){return{args:e}},template:'<d-filter-dropdown v-model="value" v-bind="args" />'}),t=V.bind({});t.args={options:[{text:"All Time",value:"all_time"},{text:"Today",value:"today"},{text:"This month",value:"this_month"}]};const d=e=>({components:{DFilterDropdown:s},setup(){return{args:e}},data:()=>({value:""}),template:`
    <d-filter-dropdown v-model="value" v-bind="args" />
    <p>{{value}}</p>
  `}),n=d.bind({});n.args={options:[{text:"All Time",value:"all_time"},{text:"Today",value:"today"},{text:"This month",value:"this_month"}],returnFullObject:!0};const a=d.bind({});a.args={options:[{text:"All Time",value:"all_time"},{text:"Today",value:"today"},{text:"This month",value:"this_month"}],returnFullObject:!1};const j=e=>({components:{DFilterDropdown:s},setup(){return{args:e}},data:()=>({value:"today"}),template:`
    <d-filter-dropdown v-model="value" v-bind="args" />
    <p>{{value}}</p>
  `}),r=j.bind({});r.args={options:[{text:"All Time",value:"all_time"},{text:"Today",value:"today"},{text:"This month",value:"this_month"}],returnFullObject:!0};const A=e=>({components:{DFilterDropdown:s},setup(){return{args:e}},data:()=>({value:{text:"Today",value:"today"}}),template:`
    <d-filter-dropdown v-model="value" v-bind="args" />
    <p>{{value}}</p>
  `}),o=A.bind({});o.args={options:[{text:"All Time",value:"all_time"},{text:"Today",value:"today"},{text:"This month",value:"this_month"}],returnFullObject:!0};const l=d.bind({});l.args={options:[{display:"All Time",sigma:"all_time"},{display:"Today",sigma:"today"},{display:"This month",sigma:"this_month"}],optionTitle:"display",optionValue:"sigma",returnFullObject:!0};var u,p,i;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
  components: {
    DFilterDropdown
  },
  data: () => ({
    value: ""
  }),
  setup() {
    return {
      args
    };
  },
  template: \`<d-filter-dropdown v-model="value" v-bind="args" />\`
})`,...(i=(p=t.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var m,c,v;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  components: {
    DFilterDropdown
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
    <d-filter-dropdown v-model="value" v-bind="args" />
    <p>{{value}}</p>
  \`
})`,...(v=(c=n.parameters)==null?void 0:c.docs)==null?void 0:v.source}}};var g,h,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`args => ({
  components: {
    DFilterDropdown
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
    <d-filter-dropdown v-model="value" v-bind="args" />
    <p>{{value}}</p>
  \`
})`,...(y=(h=a.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var T,b,D;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
  components: {
    DFilterDropdown
  },
  setup() {
    return {
      args
    };
  },
  data: () => ({
    value: "today"
  }),
  template: \`
    <d-filter-dropdown v-model="value" v-bind="args" />
    <p>{{value}}</p>
  \`
})`,...(D=(b=r.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};var w,F,f;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
  components: {
    DFilterDropdown
  },
  setup() {
    return {
      args
    };
  },
  data: () => ({
    value: {
      text: "Today",
      value: "today"
    }
  }),
  template: \`
    <d-filter-dropdown v-model="value" v-bind="args" />
    <p>{{value}}</p>
  \`
})`,...(f=(F=o.parameters)==null?void 0:F.docs)==null?void 0:f.source}}};var O,x,_;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
  components: {
    DFilterDropdown
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
    <d-filter-dropdown v-model="value" v-bind="args" />
    <p>{{value}}</p>
  \`
})`,...(_=(x=l.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};const k=["Default","ReturnFullObject","ReturnOnlyValue","PredefinedValueWithOnlyValue","PredefinedValueWithOnlyFullObject","CustomOptionTitleAndValue"];export{l as CustomOptionTitleAndValue,t as Default,o as PredefinedValueWithOnlyFullObject,r as PredefinedValueWithOnlyValue,n as ReturnFullObject,a as ReturnOnlyValue,k as __namedExportsOrder,E as default};
