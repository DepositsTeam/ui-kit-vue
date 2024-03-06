import{a as f,b as s,c as i,d,e as l,f as a,g as o,h as b}from"./DWysiwyg-7da6f1ce.js";import"./vue.esm-bundler-a99e1ba3.js";import"./_commonjsHelpers-042e6b4d.js";import"./floating-ui.dom-c3a31ea6.js";const _={components:{DQuickTool:f},title:"Vertical Movable",component:s,argTypes:{list:{control:{type:"object"}}}},g=t=>({components:{DVerticalMovable:s},data:()=>({list:[{id:1,title:"Send money",icon:i,isAdded:!1},{id:2,title:"New invoice",icon:d,isAdded:!1},{id:3,title:"New payment page",icon:l,isAdded:!1},{id:4,title:"Add customer",icon:a,isAdded:!1},{id:5,title:"Link bank / card",icon:o,isAdded:!1}]}),watch:{list:function(A){console.log("New value is",A)}},setup(){return{args:t}},template:`
      <d-vertical-movable v-bind="args" v-model="list"/>`}),e=g.bind({}),w=t=>({setup(){return{args:t}},data:()=>({list:[{id:1,title:"Send money",icon:i,isAdded:!1},{id:2,title:"New invoice",icon:d,isAdded:!1},{id:3,title:"New payment page",icon:l,isAdded:!1},{id:4,title:"Add customer",icon:a,isAdded:!1},{id:5,title:"Link bank / card",icon:o,isAdded:!1}],secondList:[{id:6,title:"New subscription plan",icon:i,isAdded:!1},{id:7,title:"Pay a bill",icon:d,isAdded:!1},{id:8,title:"Create new card",icon:l,isAdded:!1},{id:9,title:"Create new account",icon:a,isAdded:!1},{id:10,title:"Invite new team member",icon:o,isAdded:!1}]}),components:{DVerticalMovable:s,DAutoLayout:b,DQuickTool:f},template:`
    <d-auto-layout direction="vertical">
      <d-vertical-movable name="options" title="Selected options" v-model="list">
        <template #drag-item="element">
          <d-quick-tool :title="element.title" :icon="element.icon" is-added />
        </template>
      </d-vertical-movable>
      <d-vertical-movable name="options" title="More options" v-model="secondList">
        <template #drag-item="element">
          <d-quick-tool :title="element.title" :icon="element.icon" />
        </template>
      </d-vertical-movable>
    </d-auto-layout>
  `});e.args={title:"Selected Options"};const n=w.bind({});var c,r,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
  components: {
    DVerticalMovable
  },
  data: () => ({
    list: [{
      id: 1,
      title: "Send money",
      icon: Tag2OutlineIcon,
      isAdded: false
    }, {
      id: 2,
      title: "New invoice",
      icon: Receipt2OutlineIcon,
      isAdded: false
    }, {
      id: 3,
      title: "New payment page",
      icon: CardsOutlineIcon,
      isAdded: false
    }, {
      id: 4,
      title: "Add customer",
      icon: WalletOutlineIcon,
      isAdded: false
    }, {
      id: 5,
      title: "Link bank / card",
      icon: AddUserIcon,
      isAdded: false
    }]
  }),
  watch: {
    list: function (value) {
      console.log("New value is", value);
    }
  },
  setup() {
    return {
      args
    };
  },
  template: \`
      <d-vertical-movable v-bind="args" v-model="list"/>\`
})`,...(m=(r=e.parameters)==null?void 0:r.docs)==null?void 0:m.source}}};var p,u,v;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  setup() {
    return {
      args
    };
  },
  data: () => ({
    list: [{
      id: 1,
      title: "Send money",
      icon: Tag2OutlineIcon,
      isAdded: false
    }, {
      id: 2,
      title: "New invoice",
      icon: Receipt2OutlineIcon,
      isAdded: false
    }, {
      id: 3,
      title: "New payment page",
      icon: CardsOutlineIcon,
      isAdded: false
    }, {
      id: 4,
      title: "Add customer",
      icon: WalletOutlineIcon,
      isAdded: false
    }, {
      id: 5,
      title: "Link bank / card",
      icon: AddUserIcon,
      isAdded: false
    }],
    secondList: [{
      id: 6,
      title: "New subscription plan",
      icon: Tag2OutlineIcon,
      isAdded: false
    }, {
      id: 7,
      title: "Pay a bill",
      icon: Receipt2OutlineIcon,
      isAdded: false
    }, {
      id: 8,
      title: "Create new card",
      icon: CardsOutlineIcon,
      isAdded: false
    }, {
      id: 9,
      title: "Create new account",
      icon: WalletOutlineIcon,
      isAdded: false
    }, {
      id: 10,
      title: "Invite new team member",
      icon: AddUserIcon,
      isAdded: false
    }]
  }),
  components: {
    DVerticalMovable,
    DAutoLayout,
    DQuickTool
  },
  template: \`
    <d-auto-layout direction="vertical">
      <d-vertical-movable name="options" title="Selected options" v-model="list">
        <template #drag-item="element">
          <d-quick-tool :title="element.title" :icon="element.icon" is-added />
        </template>
      </d-vertical-movable>
      <d-vertical-movable name="options" title="More options" v-model="secondList">
        <template #drag-item="element">
          <d-quick-tool :title="element.title" :icon="element.icon" />
        </template>
      </d-vertical-movable>
    </d-auto-layout>
  \`
})`,...(v=(u=n.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};const M=["Default","MultipleMoveable"];export{e as Default,n as MultipleMoveable,M as __namedExportsOrder,_ as default};
//# sourceMappingURL=DVerticalMovable.stories-d74570e6.js.map
