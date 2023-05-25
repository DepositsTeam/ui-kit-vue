import{O as d,P as t}from"./DAccordion-15ab541e.js";import"./vue.esm-bundler-90c41ac5.js";import"./_commonjsHelpers-87174ba5.js";const l={title:"Forms/Radio Card",component:d,argTypes:{}},i=o=>({components:{DRadioCard:d,CardIcon:t},data:()=>({value:""}),setup(){return{args:o}},template:`<d-radio-card v-model="value" value="value" v-bind="args">
  <template #icon>
    <card-icon />
  </template>
  </d-radio-card>
  <p>Radio value is: {{value}}</p>
  `}),a=i.bind({});a.args={heading:"Card",description:"Add your debit / credit card information"};var e,r,n;a.parameters={...a.parameters,docs:{...(e=a.parameters)==null?void 0:e.docs,source:{originalSource:`args => ({
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
})`,...(n=(r=a.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const m=["Default"];export{a as Default,m as __namedExportsOrder,l as default};
//# sourceMappingURL=DRadioCard.stories-2405e810.js.map
