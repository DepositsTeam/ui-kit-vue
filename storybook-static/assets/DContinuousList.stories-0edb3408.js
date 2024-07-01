import{ao as o,a1 as p,ap as u,aq as l,ar as m,p as b}from"./DWysiwyg-cc9c127d.js";import"./vue.esm-bundler-77038495.js";import"./_commonjsHelpers-042e6b4d.js";import"./floating-ui.dom-c3a31ea6.js";const h={title:"Continuous List",component:o,tags:["autodocs"],argTypes:{title:{control:{type:"text"}},lists:{control:{type:"object"}}}},y=e=>({components:{DContinuousList:o},setup(){return{args:e}},template:`
      <d-continuous-list v-bind="args" />
  `}),g=e=>({components:{DContinuousList:o,DBox:b},setup(){return{args:e}},template:`
    <d-continuous-list v-bind="args" >
        <template #icon="{icon}">
          <d-box border="1px solid grey" border-radius="4px" padding="4px">
            <component :is="icon" />
          </d-box>
        </template>
    </d-continuous-list>
  `}),n=y.bind({});n.args={title:"Send & Request Money",lists:[{id:1,title:"Send",description:"Send money to friends, pay to bank accounts or saved beneficiaries",icon:p},{id:2,title:"Request",description:"Request to get paid, send an invoice or ask your payer to scan a QR",icon:u},{id:3,title:"Withdraw",description:"Withdraw funds to your linked bank accounts",icon:l},{id:4,title:"Send Internationally",description:"Send money to people in other countries in different currencies",icon:m}]};const t=g.bind({});t.args={title:"Send & Request Money",lists:[{id:1,title:"Send",description:"Send money to friends, pay to bank accounts or saved beneficiaries",icon:p},{id:2,title:"Request",description:"Request to get paid, send an invoice or ask your payer to scan a QR",icon:u},{id:3,title:"Withdraw",description:"Withdraw funds to your linked bank accounts",icon:l},{id:4,title:"Send Internationally",description:"Send money to people in other countries in different currencies",icon:m}]};var i,s,r;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  components: {
    DContinuousList
  },
  setup() {
    return {
      args
    };
  },
  template: \`
      <d-continuous-list v-bind="args" />
  \`
})`,...(r=(s=n.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};var a,c,d;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  components: {
    DContinuousList,
    DBox
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <d-continuous-list v-bind="args" >
        <template #icon="{icon}">
          <d-box border="1px solid grey" border-radius="4px" padding="4px">
            <component :is="icon" />
          </d-box>
        </template>
    </d-continuous-list>
  \`
})`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const k=["Default","WithCustomIcon"];export{n as Default,t as WithCustomIcon,k as __namedExportsOrder,h as default};
//# sourceMappingURL=DContinuousList.stories-0edb3408.js.map
