import{G as s}from"./DAccordion-b6de2cdd.js";import"./vue.esm-bundler-02a62393.js";import"./_commonjsHelpers-87174ba5.js";const R={title:"Forms/Filter Dropdown",component:s,argTypes:{}},_=e=>({components:{DFilterDropdown:s},data:()=>({value:""}),setup(){return{args:e}},template:'<d-filter-dropdown v-model="value" v-bind="args" />'}),t=_.bind({});t.args={options:[{text:"All Time",value:"all_time"},{text:"Today",value:"today"},{text:"This month",value:"this_month"}]};const d=e=>({components:{DFilterDropdown:s},setup(){return{args:e}},data:()=>({value:""}),template:`
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
})`,...(y=(h=a.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var T,b,f;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
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
})`,...(f=(b=r.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var w,F,O;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
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
})`,...(O=(F=o.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var x,D,V;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
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
})`,...(V=(D=l.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};const C=["Default","ReturnFullObject","ReturnOnlyValue","PredefinedValueWithOnlyValue","PredefinedValueWithOnlyFullObject","CustomOptionTitleAndValue"];export{l as CustomOptionTitleAndValue,t as Default,o as PredefinedValueWithOnlyFullObject,r as PredefinedValueWithOnlyValue,n as ReturnFullObject,a as ReturnOnlyValue,C as __namedExportsOrder,R as default};
//# sourceMappingURL=DFilterDropdown.stories-18f256a0.js.map
