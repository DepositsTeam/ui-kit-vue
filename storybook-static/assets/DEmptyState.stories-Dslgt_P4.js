import{Z as s}from"./DAccordion-BcJ7fCmy.js";import"./vue.esm-bundler-XIZ-WwZ4.js";import"./iframe-CdPvGOON.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-BosuxZz1.js";const u={title:"Empty State",component:s,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}},illustration:{control:{type:"text"}},buttonText:{control:{type:"text"}},buttonSmartColor:{control:{type:"text"}},buttonColorScheme:{control:{type:"select"},options:["primary","danger","success","outline","invisible"]},buttonSize:{control:{type:"select"},options:["small","medium","large","xlarge","huge","massive"]}}},n=a=>({components:{DEmptyState:s},setup(){return{args:a}},template:'<d-empty-state v-bind="args"/>'}),t=n.bind({});t.args={title:"No programs have been created yet?",description:"No programs have been created yet, your programs will show up here.",illustration:"https://launch.new/assets/group-7995.74c17caa.svg",buttonText:"Create a new program"};var e,o,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`args => ({
  components: {
    DEmptyState
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-empty-state v-bind="args"/>\`
})`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const y=["Default"];export{t as Default,y as __namedExportsOrder,u as default};
