import{ai as a}from"./DWysiwyg-80ca4765.js";import"./vue.esm-bundler-a99e1ba3.js";import"./_commonjsHelpers-042e6b4d.js";import"./floating-ui.dom-c3a31ea6.js";const c={title:"Empty State",component:a,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}},illustration:{control:{type:"text"}},buttonText:{control:{type:"text"}},buttonSmartColor:{control:{type:"text"}},buttonColorScheme:{control:{type:"select"},options:["primary","danger","success","outline","invisible"]},buttonSize:{control:{type:"select"},options:["small","medium","large","xlarge","huge","massive"]}}},n=s=>({components:{DEmptyState:a},setup(){return{args:s}},template:'<d-empty-state v-bind="args"/>'}),t=n.bind({});t.args={title:"No programs have been created yet?",description:"No programs have been created yet, your programs will show up here.",illustration:"https://launch.new/assets/group-7995.74c17caa.svg",buttonText:"Create a new program"};var e,o,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`args => ({
  components: {
    DEmptyState
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-empty-state v-bind="args"/>\`
})`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const u=["Default"];export{t as Default,u as __namedExportsOrder,c as default};
//# sourceMappingURL=DEmptyState.stories-6b3d20a9.js.map
