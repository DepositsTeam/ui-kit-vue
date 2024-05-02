import{aC as o}from"./DWysiwyg-2ec3836e.js";import"./vue.esm-bundler-a99e1ba3.js";import"./_commonjsHelpers-042e6b4d.js";import"./floating-ui.dom-c3a31ea6.js";const m={title:"Avatar Card 2",component:o,tags:["autodocs"],argTypes:{heading:{control:{type:"text"}},title:{control:{type:"text"}},description:{control:{type:"text"}},headerButtonText:{control:{type:"text"}},footerButtonText:{control:{type:"text"}},noOfVisibleAvatars:{control:{type:"number"}},isAvatarSubtle:{control:{type:"boolean"}},avatars:{control:{type:"object"}},buttonSizes:{control:{type:"select"},options:["small","medium","large","xlarge","huge","massive"]}}},s=n=>({components:{DAvatarCard2:o},setup(){return{args:n}},template:`
      <d-avatar-card2 v-bind="args"/>`}),e=s.bind({});e.args={heading:"UNPAID INVOICES",title:"Overdue",description:"16 ($41,350.56)",headerButtonText:"See all",footerButtonText:"Send reminder",noOfVisibleAvatars:6,isAvatarSubtle:!0,avatars:[{name:"John"},{imgURL:"https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg"},{name:"Saviour"},{name:"June"},{imgURL:"https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg"},{name:"Nora"},{name:"Presh"},{name:"Master"}]};var t,r,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
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
})`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const c=["Default"];export{e as Default,c as __namedExportsOrder,m as default};
//# sourceMappingURL=DAvatarCard2.stories-9a809b7f.js.map
