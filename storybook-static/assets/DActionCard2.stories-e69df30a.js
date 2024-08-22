import{aJ as n}from"./DTransactionTimeline-0692a1df.js";import"./vue.esm-bundler-77038495.js";import"./iframe-52df6b08.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-042e6b4d.js";import"./floating-ui.dom-c3a31ea6.js";const d={title:"Action Card 2",component:n,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}},illustration:{control:{type:"text"}},buttonText:{control:{type:"text"}},buttonSmartColor:{control:{type:"text"}},buttonColorScheme:{control:{type:"select"},options:["primary","danger","success","outline","invisible"]},buttonSize:{control:{type:"select"},options:["small","medium","large","xlarge","huge","massive"]}}},a=s=>({components:{DActionCard2:n},setup(){return{args:s}},template:`
      <d-action-card2 v-bind="args"/>
    `}),t=a.bind({});t.args={title:"Setup your program",description:"Select a use case, configure your fintech programs and generate API keys.",illustration:"https://launch.new/assets/setup-program.7e364d0e.svg",buttonText:"Get Started"};var e,o,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`args => ({
  components: {
    DActionCard2
  },
  setup() {
    return {
      args
    };
  },
  template: \`
      <d-action-card2 v-bind="args"/>
    \`
})`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const g=["Default"];export{t as Default,g as __namedExportsOrder,d as default};
//# sourceMappingURL=DActionCard2.stories-e69df30a.js.map
