import{aC as o}from"./DWysiwyg-a2525844.js";import"./vue.esm-bundler-a99e1ba3.js";import"./floating-ui.dom-c3a31ea6.js";import"./_commonjsHelpers-042e6b4d.js";const m={title:"Avatar Card",component:o,tags:["autodocs"],argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}},subTitle:{control:{type:"text"}},buttonText:{control:{type:"text"}},noOfVisibleAvatars:{control:{type:"number"}},isAvatarSubtle:{control:{type:"boolean"}},avatars:{control:{type:"object"}},buttonSize:{control:{type:"select"},options:["small","medium","large","xlarge","huge","massive"]}}},l=r=>({components:{DActionableAvatar:o},setup(){return{args:r}},methods:{deleteClicked:function(){alert("Delete clicked")}},template:`
      <d-actionable-avatar @delete-clicked="deleteClicked" v-bind="args">
      </d-actionable-avatar>
  `}),e=l.bind({});e.args={title:"Platinum",description:"7 Tenants",subTitle:"(ID: 001)",buttonText:"+ Add tenants",noOfVisibleAvatars:6,isAvatarSubtle:!0,avatars:[{name:"John"},{imgURL:"https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg"},{name:"Saviour"},{name:"June"},{imgURL:"https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg"},{name:"Nora"},{name:"Presh"},{name:"Master"}]};var t,a,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  components: {
    DActionableAvatar
  },
  setup() {
    return {
      args
    };
  },
  methods: {
    deleteClicked: function () {
      alert("Delete clicked");
    }
  },
  template: \`
      <d-actionable-avatar @delete-clicked="deleteClicked" v-bind="args">
      </d-actionable-avatar>
  \`
})`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const p=["Default"];export{e as Default,p as __namedExportsOrder,m as default};
//# sourceMappingURL=DAvatarCard.stories-989f2981.js.map
