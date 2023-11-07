import{d as x,e as i,u as e,o as b,f as n,g as y,t as k,m as S,p as F,q as O,F as U}from"./vue.esm-bundler-a18595c0.js";import{a as K,c as s,b as Q,l as H,aA as X,az as N}from"./DWysiwyg-3f7adbd7.js";import"./floating-ui.dom-c3a31ea6.js";import"./_commonjsHelpers-87174ba5.js";const q={__name:"DActionList",props:{label:{type:String,required:!0},list:{type:Array,required:!0},size:{type:String,default:"large"},callToActionText:{type:String,default:"New Connection"}},emits:["call-to-action-clicked","list-action-clicked"],setup(o,{emit:p}){const w=g=>{p("list-action-clicked",g)};return(g,h)=>(b(),x(e(s),{class:"ui-action-list"},{default:i(()=>[n(e(s),{class:"ui-action-list__header"},{default:i(()=>[n(e(s),{class:"ui-action-list__header__left"},{default:i(()=>[n(e(Q),{"font-face":"circularSTD"},{default:i(()=>[y(k(o.label),1)]),_:1})]),_:1}),n(e(s),{class:"ui-action-list__header__left"},{default:i(()=>[S(g.$slots,"call-to-action",{},()=>[n(e(H),{colorScheme:"primary","left-icon":e(X),size:o.size,onClick:h[0]||(h[0]=t=>p("call-to-action-clicked"))},{default:i(()=>[y(k(o.callToActionText),1)]),_:1},8,["left-icon","size"])],!0)]),_:3})]),_:3}),n(e(s),{class:"ui-action-list__body__wrapper"},{default:i(()=>[S(g.$slots,"default",{},()=>[(b(!0),F(U,null,O(o.list,(t,V)=>(b(),x(e(s),{key:`application__${V}`},{default:i(()=>[n(e(N),{logo:t.logo,title:t.title,subtitle:t.subtitle,description:t.description,"button-size":t.buttonSize,"button-color-scheme":t.buttonColorScheme,"button-smart-color":t.buttonSmartColor,buttonText:t.buttonText,onClicked:Z=>w(t)},null,8,["logo","title","subtitle","description","button-size","button-color-scheme","button-smart-color","buttonText","onClicked"])]),_:2},1024))),128))],!0)]),_:3})]),_:3}))}},f=K(q,[["__scopeId","data-v-835fa744"]]);q.__docgenInfo={exportName:"default",displayName:"DActionList",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0},{name:"list",type:{name:"array"},required:!0},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"large"'}},{name:"callToActionText",type:{name:"string"},defaultValue:{func:!1,value:'"New Connection"'}}],events:[{name:"call-to-action-clicked"},{name:"list-action-clicked"}],slots:[{name:"call-to-action"},{name:"default"}],sourceFiles:["/Users/ericmcwinner/Documents/Work/Projects/Work/Vue/deposits-ui-kit-vue/src/d-action-list/DActionList.vue"]};const it={title:"Action List",component:f,tags:["autodocs"],argTypes:{label:{control:{type:"text"}},list:{control:{type:"object"}},size:{control:{type:"select"},options:["small","medium","large","xlarge","huge","massive"]}}},d=o=>({components:{DActionList:f},setup(){return{args:o}},methods:{alertMessage(p){alert("Hello"),console.log(p)}},template:`
      <d-action-list @list-action-clicked="alertMessage" v-bind="args"/>`}),Y=o=>({components:{DActionList:f,DActionListItem:N,DButton:H},setup(){return{args:o}},template:`
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
  `}),r=d.bind({});r.args={label:"Application",list:[{id:1,title:"example@gmail.com",description:"Duration: 1hr | Expires: July 27, 2021 12:45 PM",logo:"https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg",buttonText:"Revoke access",subtitle:"Granted, July 27, 2021 12:45 PM",buttonSize:"large"},{id:2,title:"example@gmail.com",description:"Duration: 1hr | Expires: July 27, 2021 12:45 PM",logo:"https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg",buttonText:"Revoke access",subtitle:"Granted, July 27, 2021 12:45 PM",buttonSize:"large"},{id:3,title:"example@gmail.com",description:"Duration: 1hr | Expires: July 27, 2021 12:45 PM",logo:"https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg",buttonText:"Revoke access",subtitle:"Granted, July 27, 2021 12:45 PM",buttonSize:"large"}]};const l=Y.bind({});l.args={label:"Application"};const a=d.bind({});a.args={label:"Application",list:[{id:1,title:"example@gmail.com",description:"Duration: 1hr | Expires: July 27, 2021 12:45 PM",logo:"https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg",buttonText:"Revoke Access",subtitle:"Granted, July 27, 2021 12:45 PM",buttonSize:"large",buttonColorScheme:"primary",buttonSmartColor:"#000000"},{id:2,title:"example@gmail.com",description:"Duration: 1hr | Expires: July 27, 2021 12:45 PM",logo:"https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg",buttonText:"Revoke Access",subtitle:"Granted, July 27, 2021 12:45 PM",buttonSize:"large",buttonColorScheme:"primary"},{id:3,title:"example@gmail.com",description:"Duration: 1hr | Expires: July 27, 2021 12:45 PM",logo:"https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg",buttonText:"Revoke Access",subtitle:"Granted, July 27, 2021 12:45 PM",buttonSize:"large",buttonColorScheme:"danger"}]};const c=d.bind({});c.args={label:"Application",list:[{id:1,title:"example@gmail.com",logo:"https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg",buttonText:"Revoke Access",subtitle:"Granted, July 27, 2021 12:45 PM",buttonSize:"large",buttonColorScheme:"primary",buttonSmartColor:"#000000"},{id:2,title:"example@gmail.com",logo:"https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg",buttonText:"Revoke Access",subtitle:"Granted, July 27, 2021 12:45 PM",buttonSize:"large",buttonColorScheme:"primary"},{id:3,title:"example@gmail.com",logo:"https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg",buttonText:"Revoke Access",subtitle:"Granted, July 27, 2021 12:45 PM",buttonSize:"large",buttonColorScheme:"danger"}]};const u=d.bind({});u.args={label:"Application",list:[{id:1,title:"example@gmail.com",description:"Duration: 1hr | Expires: July 27, 2021 12:45 PM",buttonText:"Revoke Access",subtitle:"Granted, July 27, 2021 12:45 PM",buttonSize:"large",buttonColorScheme:"primary",buttonSmartColor:"#000000"},{id:2,title:"example@gmail.com",description:"Duration: 1hr | Expires: July 27, 2021 12:45 PM",buttonText:"Revoke Access",subtitle:"Granted, July 27, 2021 12:45 PM",buttonSize:"large",buttonColorScheme:"primary"},{id:3,title:"example@gmail.com",description:"Duration: 1hr | Expires: July 27, 2021 12:45 PM",buttonText:"Revoke Access",subtitle:"Granted, July 27, 2021 12:45 PM",buttonSize:"large",buttonColorScheme:"danger"}]};const m=d.bind({});m.args={label:"Application",list:[{id:1,title:"example@gmail.com",description:"Duration: 1hr | Expires: July 27, 2021 12:45 PM",buttonText:"Revoke Access",subtitle:"Granted, July 27, 2021 12:45 PM",buttonSize:"small",buttonColorScheme:"primary",buttonSmartColor:"#000000"},{id:2,title:"example@gmail.com",description:"Duration: 1hr | Expires: July 27, 2021 12:45 PM",buttonText:"Revoke Access",subtitle:"Granted, July 27, 2021 12:45 PM",buttonSize:"medium",buttonColorScheme:"primary"},{id:3,title:"example@gmail.com",description:"Duration: 1hr | Expires: July 27, 2021 12:45 PM",buttonText:"Revoke Access",subtitle:"Granted, July 27, 2021 12:45 PM",buttonSize:"large",buttonColorScheme:"danger"},{id:4,title:"example@gmail.com",description:"Duration: 1hr | Expires: July 27, 2021 12:45 PM",buttonText:"Revoke Access",subtitle:"Granted, July 27, 2021 12:45 PM",buttonSize:"xlarge",buttonColorScheme:"danger"},{id:5,title:"example@gmail.com",description:"Duration: 1hr | Expires: July 27, 2021 12:45 PM",buttonText:"Revoke Access",subtitle:"Granted, July 27, 2021 12:45 PM",buttonSize:"huge",buttonColorScheme:"danger"},{id:6,title:"example@gmail.com",description:"Duration: 1hr | Expires: July 27, 2021 12:45 PM",buttonText:"Revoke Access",subtitle:"Granted, July 27, 2021 12:45 PM",buttonSize:"massive",buttonColorScheme:"danger"}]};var v,A,_;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
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
})`,...(_=(A=r.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var M,T,D;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`args => ({
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
})`,...(D=(T=l.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var z,P,J;a.parameters={...a.parameters,docs:{...(z=a.parameters)==null?void 0:z.docs,source:{originalSource:`args => ({
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
})`,...(J=(P=a.parameters)==null?void 0:P.docs)==null?void 0:J.source}}};var C,R,L;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
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
})`,...(L=(R=c.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var G,E,j;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`args => ({
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
})`,...(j=(E=u.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var W,B,$;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`args => ({
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
})`,...($=(B=m.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};const nt=["Default","ActionListWithoutListProps","DifferentButtonColors","WithImage","WithDescription","WithDifferentButtonSizes"];export{l as ActionListWithoutListProps,r as Default,a as DifferentButtonColors,u as WithDescription,m as WithDifferentButtonSizes,c as WithImage,nt as __namedExportsOrder,it as default};
//# sourceMappingURL=DActionList.stories-b16da585.js.map
