import{aI as a,aH as T,j as R}from"./DVerticalMovable-29e3531d.js";import"./vue.esm-bundler-d8a916b0.js";import"./_commonjsHelpers-042e6b4d.js";import"./floating-ui.dom-c3a31ea6.js";const _={title:"Action List",component:a,tags:["autodocs"],argTypes:{label:{control:{type:"text"}},list:{control:{type:"object"}},size:{control:{type:"select"},options:["small","medium","large","xlarge","huge","massive"]}}},r=l=>({components:{DActionList:a},setup(){return{args:l}},methods:{alertMessage(J){alert("Hello"),console.log(J)}},template:`
      <d-action-list @list-action-clicked="alertMessage" v-bind="args"/>`}),z=l=>({components:{DActionList:a,DActionListItem:T,DButton:R},setup(){return{args:l}},template:`
    <d-action-list v-bind="args">
      <d-action-list-item title="Testing stuff" subtitle="Testing the random stuff out there" description="Random description">
        <template #action>
          <d-button text="Revoke Access" size="medium"/>
        </template>
      </d-action-list-item>
      <d-action-list-item title="Testing other stuff" subtitle="Testing the other random stuff out there" description="Other random description">
        <template #action>
          <d-button text="Revoke Access" size="medium"/>
        </template>
      </d-action-list-item>
      <d-action-list-item title="Testing much more stuff" subtitle="Testing the much more random stuff out there" description="Random description">
        <template #action>
          <d-button text="Revoke Access" size="medium"/>
        </template>
      </d-action-list-item>
    </d-action-list>
  `}),t=r.bind({});t.args={label:"Application",list:[{id:1,title:"example@gmail.com",description:"Duration: 1hr | Expires: July 27, 2021 12:45 PM",logo:"https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg",buttonText:"Revoke access",subtitle:"Granted, July 27, 2021 12:45 PM",buttonSize:"large"},{id:2,title:"example@gmail.com",description:"Duration: 1hr | Expires: July 27, 2021 12:45 PM",logo:"https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg",buttonText:"Revoke access",subtitle:"Granted, July 27, 2021 12:45 PM",buttonSize:"large"},{id:3,title:"example@gmail.com",description:"Duration: 1hr | Expires: July 27, 2021 12:45 PM",logo:"https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg",buttonText:"Revoke access",subtitle:"Granted, July 27, 2021 12:45 PM",buttonSize:"large"}]};const e=z.bind({});e.args={label:"Application"};const o=r.bind({});o.args={label:"Application",list:[{id:1,title:"example@gmail.com",description:"Duration: 1hr | Expires: July 27, 2021 12:45 PM",logo:"https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg",buttonText:"Revoke Access",subtitle:"Granted, July 27, 2021 12:45 PM",buttonSize:"large",buttonColorScheme:"primary",buttonSmartColor:"#000000"},{id:2,title:"example@gmail.com",description:"Duration: 1hr | Expires: July 27, 2021 12:45 PM",logo:"https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg",buttonText:"Revoke Access",subtitle:"Granted, July 27, 2021 12:45 PM",buttonSize:"large",buttonColorScheme:"primary"},{id:3,title:"example@gmail.com",description:"Duration: 1hr | Expires: July 27, 2021 12:45 PM",logo:"https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg",buttonText:"Revoke Access",subtitle:"Granted, July 27, 2021 12:45 PM",buttonSize:"large",buttonColorScheme:"danger"}]};const i=r.bind({});i.args={label:"Application",list:[{id:1,title:"example@gmail.com",logo:"https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg",buttonText:"Revoke Access",subtitle:"Granted, July 27, 2021 12:45 PM",buttonSize:"large",buttonColorScheme:"primary",buttonSmartColor:"#000000"},{id:2,title:"example@gmail.com",logo:"https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg",buttonText:"Revoke Access",subtitle:"Granted, July 27, 2021 12:45 PM",buttonSize:"large",buttonColorScheme:"primary"},{id:3,title:"example@gmail.com",logo:"https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg",buttonText:"Revoke Access",subtitle:"Granted, July 27, 2021 12:45 PM",buttonSize:"large",buttonColorScheme:"danger"}]};const n=r.bind({});n.args={label:"Application",list:[{id:1,title:"example@gmail.com",description:"Duration: 1hr | Expires: July 27, 2021 12:45 PM",buttonText:"Revoke Access",subtitle:"Granted, July 27, 2021 12:45 PM",buttonSize:"large",buttonColorScheme:"primary",buttonSmartColor:"#000000"},{id:2,title:"example@gmail.com",description:"Duration: 1hr | Expires: July 27, 2021 12:45 PM",buttonText:"Revoke Access",subtitle:"Granted, July 27, 2021 12:45 PM",buttonSize:"large",buttonColorScheme:"primary"},{id:3,title:"example@gmail.com",description:"Duration: 1hr | Expires: July 27, 2021 12:45 PM",buttonText:"Revoke Access",subtitle:"Granted, July 27, 2021 12:45 PM",buttonSize:"large",buttonColorScheme:"danger"}]};const s=r.bind({});s.args={label:"Application",list:[{id:1,title:"example@gmail.com",description:"Duration: 1hr | Expires: July 27, 2021 12:45 PM",buttonText:"Revoke Access",subtitle:"Granted, July 27, 2021 12:45 PM",buttonSize:"small",buttonColorScheme:"primary",buttonSmartColor:"#000000"},{id:2,title:"example@gmail.com",description:"Duration: 1hr | Expires: July 27, 2021 12:45 PM",buttonText:"Revoke Access",subtitle:"Granted, July 27, 2021 12:45 PM",buttonSize:"medium",buttonColorScheme:"primary"},{id:3,title:"example@gmail.com",description:"Duration: 1hr | Expires: July 27, 2021 12:45 PM",buttonText:"Revoke Access",subtitle:"Granted, July 27, 2021 12:45 PM",buttonSize:"large",buttonColorScheme:"danger"},{id:4,title:"example@gmail.com",description:"Duration: 1hr | Expires: July 27, 2021 12:45 PM",buttonText:"Revoke Access",subtitle:"Granted, July 27, 2021 12:45 PM",buttonSize:"xlarge",buttonColorScheme:"danger"},{id:5,title:"example@gmail.com",description:"Duration: 1hr | Expires: July 27, 2021 12:45 PM",buttonText:"Revoke Access",subtitle:"Granted, July 27, 2021 12:45 PM",buttonSize:"huge",buttonColorScheme:"danger"},{id:6,title:"example@gmail.com",description:"Duration: 1hr | Expires: July 27, 2021 12:45 PM",buttonText:"Revoke Access",subtitle:"Granted, July 27, 2021 12:45 PM",buttonSize:"massive",buttonColorScheme:"danger"}]};var c,m,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
  components: {
    DActionList
  },
  setup() {
    return {
      args
    };
  },
  methods: {
    alertMessage(list) {
      alert("Hello");
      console.log(list);
    }
  },
  template: \`
      <d-action-list @list-action-clicked="alertMessage" v-bind="args"/>\`
})`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var d,p,g;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  components: {
    DActionList,
    DActionListItem,
    DButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <d-action-list v-bind="args">
      <d-action-list-item title="Testing stuff" subtitle="Testing the random stuff out there" description="Random description">
        <template #action>
          <d-button text="Revoke Access" size="medium"/>
        </template>
      </d-action-list-item>
      <d-action-list-item title="Testing other stuff" subtitle="Testing the other random stuff out there" description="Other random description">
        <template #action>
          <d-button text="Revoke Access" size="medium"/>
        </template>
      </d-action-list-item>
      <d-action-list-item title="Testing much more stuff" subtitle="Testing the much more random stuff out there" description="Random description">
        <template #action>
          <d-button text="Revoke Access" size="medium"/>
        </template>
      </d-action-list-item>
    </d-action-list>
  \`
})`,...(g=(p=e.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var b,h,x;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
  components: {
    DActionList
  },
  setup() {
    return {
      args
    };
  },
  methods: {
    alertMessage(list) {
      alert("Hello");
      console.log(list);
    }
  },
  template: \`
      <d-action-list @list-action-clicked="alertMessage" v-bind="args"/>\`
})`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var f,y,M;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
  components: {
    DActionList
  },
  setup() {
    return {
      args
    };
  },
  methods: {
    alertMessage(list) {
      alert("Hello");
      console.log(list);
    }
  },
  template: \`
      <d-action-list @list-action-clicked="alertMessage" v-bind="args"/>\`
})`,...(M=(y=i.parameters)==null?void 0:y.docs)==null?void 0:M.source}}};var S,v,A;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
  components: {
    DActionList
  },
  setup() {
    return {
      args
    };
  },
  methods: {
    alertMessage(list) {
      alert("Hello");
      console.log(list);
    }
  },
  template: \`
      <d-action-list @list-action-clicked="alertMessage" v-bind="args"/>\`
})`,...(A=(v=n.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var k,D,P;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
  components: {
    DActionList
  },
  setup() {
    return {
      args
    };
  },
  methods: {
    alertMessage(list) {
      alert("Hello");
      console.log(list);
    }
  },
  template: \`
      <d-action-list @list-action-clicked="alertMessage" v-bind="args"/>\`
})`,...(P=(D=s.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};const j=["Default","ActionListWithoutListProps","DifferentButtonColors","WithImage","WithDescription","WithDifferentButtonSizes"];export{e as ActionListWithoutListProps,t as Default,o as DifferentButtonColors,n as WithDescription,s as WithDifferentButtonSizes,i as WithImage,j as __namedExportsOrder,_ as default};
//# sourceMappingURL=DActionList.stories-b306ab5f.js.map
