import{ak as o,$ as p,al as u,am as l,an as m,d as b}from"./DWysiwyg-9bf70373.js";import"./vue.esm-bundler-7e79c529.js";import"./floating-ui.dom-c3a31ea6.js";import"./_commonjsHelpers-87174ba5.js";const k={title:"Continuous List",component:o,argTypes:{title:{control:{type:"text"}},lists:{control:{type:"object"}}}},y=e=>({components:{DContinuousList:o},setup(){return{args:e}},template:`
      <d-continuous-list v-bind="args" />
  `}),f=e=>({components:{DContinuousList:o,DBox:b},setup(){return{args:e}},template:`
    <d-continuous-list v-bind="args" >
        <template #icon="{icon}">
          <d-box border="1px solid grey" border-radius="4px" padding="4px">
            <component :is="icon" />
          </d-box>
        </template>
    </d-continuous-list>
  `}),n=y.bind({});n.args={title:"Send & Request Money",lists:[{id:1,title:"Send",description:"Send money to friends, pay to bank accounts or saved beneficiaries",icon:p},{id:2,title:"Request",description:"Request to get paid, send an invoice or ask your payer to scan a QR",icon:u},{id:3,title:"Withdraw",description:"Withdraw funds to your linked bank accounts",icon:l},{id:4,title:"Send Internationally",description:"Send money to people in other countries in different currencies",icon:m}]};const t=f.bind({});t.args={title:"Send & Request Money",lists:[{id:1,title:"Send",description:"Send money to friends, pay to bank accounts or saved beneficiaries",icon:p},{id:2,title:"Request",description:"Request to get paid, send an invoice or ask your payer to scan a QR",icon:u},{id:3,title:"Withdraw",description:"Withdraw funds to your linked bank accounts",icon:l},{id:4,title:"Send Internationally",description:"Send money to people in other countries in different currencies",icon:m}]};var i,s,r;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
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
})`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const h=["Default","WithCustomIcon"];export{n as Default,t as WithCustomIcon,h as __namedExportsOrder,k as default};
//# sourceMappingURL=DContinuousList.stories-3d285c2f.js.map
