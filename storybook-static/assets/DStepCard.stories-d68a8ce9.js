import{M as r}from"./DVerticalMovable-256bb483.js";import"./vue.esm-bundler-aecd4be6.js";import"./_commonjsHelpers-042e6b4d.js";import"./floating-ui.dom-c3a31ea6.js";const u={title:"Step Card",component:r,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}},image:{control:{type:"text"}},lists:{control:{type:"object"}}}},n=s=>({components:{DStepCard:r},setup(){return{args:s}},template:`
      <d-step-card v-bind="args"/>`}),e=n.bind({});e.args={title:"QuickBooks",description:"Connect Renapay to your QuickBooks account to allow seamles synchronisation of your invoices, payments and customers to QuickBooks automatically.",image:"https://launch.new/assets/onboarding_illus.5386a148.svg",lists:[{text:"Complete account creation",active:!1,done:!0},{text:"Complete basic KYB",active:!1,done:!0},{text:"Select your program use case",active:!0,done:!1},{text:"Configure your fintech program",active:!1,done:!1},{text:"Launch your program",active:!1,done:!1}]};var t,o,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  components: {
    DStepCard
  },
  setup() {
    return {
      args
    };
  },
  template: \`
      <d-step-card v-bind="args"/>\`
})`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const m=["Default"];export{e as Default,m as __namedExportsOrder,u as default};
//# sourceMappingURL=DStepCard.stories-d68a8ce9.js.map
