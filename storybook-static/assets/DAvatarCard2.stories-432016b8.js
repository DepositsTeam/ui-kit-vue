import{aC as o}from"./DWysiwyg-02771dd6.js";import"./vue.esm-bundler-77038495.js";import"./iframe-468a85b4.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-042e6b4d.js";import"./floating-ui.dom-c3a31ea6.js";const g={title:"Avatar Card 2",component:o,tags:["autodocs"],argTypes:{heading:{control:{type:"text"}},title:{control:{type:"text"}},description:{control:{type:"text"}},headerButtonText:{control:{type:"text"}},footerButtonText:{control:{type:"text"}},noOfVisibleAvatars:{control:{type:"number"}},isAvatarSubtle:{control:{type:"boolean"}},avatars:{control:{type:"object"}},buttonSizes:{control:{type:"select"},options:["small","medium","large","xlarge","huge","massive"]}}},s=n=>({components:{DAvatarCard2:o},setup(){return{args:n}},template:`
      <d-avatar-card2 v-bind="args"/>`}),t=s.bind({});t.args={heading:"UNPAID INVOICES",title:"Overdue",description:"16 ($41,350.56)",headerButtonText:"See all",footerButtonText:"Send reminder",noOfVisibleAvatars:6,isAvatarSubtle:!0,avatars:[{name:"John"},{imgURL:"https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg"},{name:"Saviour"},{name:"June"},{imgURL:"https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg"},{name:"Nora"},{name:"Presh"},{name:"Master"}]};var e,r,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`args => ({
  components: {
    DAvatarCard2
  },
  setup() {
    return {
      args
    };
  },
  template: \`
      <d-avatar-card2 v-bind="args"/>\`
})`,...(a=(r=t.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const u=["Default"];export{t as Default,u as __namedExportsOrder,g as default};
//# sourceMappingURL=DAvatarCard2.stories-432016b8.js.map
