import{O as r}from"./DWysiwyg-515702cd.js";import"./vue.esm-bundler-77038495.js";import"./iframe-734e6c86.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-042e6b4d.js";import"./floating-ui.dom-c3a31ea6.js";const d={title:"Step Card",component:r,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}},image:{control:{type:"text"}},lists:{control:{type:"object"}}}},n=s=>({components:{DStepCard:r},setup(){return{args:s}},template:`
      <d-step-card v-bind="args"/>`}),t=n.bind({});t.args={title:"QuickBooks",description:"Connect Renapay to your QuickBooks account to allow seamles synchronisation of your invoices, payments and customers to QuickBooks automatically.",image:"https://launch.new/assets/onboarding_illus.5386a148.svg",lists:[{text:"Complete account creation",active:!1,done:!0},{text:"Complete basic KYB",active:!1,done:!0},{text:"Select your program use case",active:!0,done:!1},{text:"Configure your fintech program",active:!1,done:!1},{text:"Launch your program",active:!1,done:!1}]};var e,o,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`args => ({
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
})`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const g=["Default"];export{t as Default,g as __namedExportsOrder,d as default};
//# sourceMappingURL=DStepCard.stories-678157e7.js.map
