import{F as dt,G as f,p as gt}from"./DAccordion-wg4yIoXK.js";import"./vue.esm-bundler-CUqwZzoc.js";import"./iframe-CqJBfuYe.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-BosuxZz1.js";const vt={components:{HomeFilledIcon:dt},title:"Composite Button",component:f,tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","medium","large","xlarge","huge","massive"]},is:{control:{type:"select"},options:["button","a","span","div"]},colorScheme:{control:{type:"select"},options:["primary","danger","success","outline","invisible"]},loaderType:{control:{type:"select"},options:["text","ring","equalizer","ringed-circle"],table:{defaultValue:"text"}}}},t=n=>({components:{DCompositeButton:f},setup(){return{args:n}},methods:{leftButtonClick:function(){alert("Left button clicked!")},rightButtonClick:function(){alert("Right button clicked!")}},template:'<d-composite-button v-bind="args" @left-button-click="leftButtonClick" @right-button-click="rightButtonClick" />'}),kt=n=>({components:{DCompositeButton:f,ThemeProvider:gt},setup(){return{args:n}},methods:{leftButtonClick:function(){alert("Left button clicked!")},rightButtonClick:function(){alert("Right button clicked!")}},template:`
    <theme-provider :initial-theme="{primaryColor: '#800080'}" >
      <d-composite-button v-bind="args" @left-button-click="leftButtonClick" @right-button-click="rightButtonClick" />
    </theme-provider>
  `}),bt=n=>({components:{DCompositeButton:f,HomeFilledIcon:dt},setup(){return{args:n}},methods:{leftButtonClick:function(){alert("Left button clicked!")},rightButtonClick:function(){alert("Right button clicked!")}},template:`<d-composite-button v-bind="args" @left-button-click="leftButtonClick" @right-button-click="rightButtonClick">
    <template #icon>
      <home-filled-icon smart-color="white" />
    </template>
  </d-composite-button>
  `}),e=t.bind({});e.args={colorScheme:"success"};const o=kt.bind({});o.args={colorScheme:"primary"};const c=bt.bind({});c.args={colorScheme:"primary",smartColor:"#a10d3f"};const h=t.bind({}),r=t.bind({});r.args={colorScheme:"primary"};const i=t.bind({});i.args={colorScheme:"danger"};const s=t.bind({});s.args={colorScheme:"success"};const l=t.bind({});l.args={colorScheme:"outline"};const u=t.bind({});u.args={colorScheme:"success",size:"small"};const a=t.bind({});a.args={colorScheme:"success",size:"medium"};const m=t.bind({});m.args={colorScheme:"success",size:"large"};const p=t.bind({});p.args={colorScheme:"success",size:"xlarge"};const d=t.bind({});d.args={colorScheme:"success",size:"huge"};const g=t.bind({});g.args={colorScheme:"success",size:"massive"};const k=t.bind({});k.args={colorScheme:"success",disabled:!0};const b=t.bind({});b.args={colorScheme:"success",loading:!0};var C,B,S;e.parameters={...e.parameters,docs:{...(C=e.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
  components: {
    DCompositeButton
  },
  setup() {
    return {
      args
    };
  },
  methods: {
    leftButtonClick: function () {
      alert("Left button clicked!");
    },
    rightButtonClick: function () {
      alert("Right button clicked!");
    }
  },
  template: \`<d-composite-button v-bind="args" @left-button-click="leftButtonClick" @right-button-click="rightButtonClick" />\`
})`,...(S=(B=e.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var v,L,D;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
  components: {
    DCompositeButton,
    ThemeProvider
  },
  setup() {
    return {
      args
    };
  },
  methods: {
    leftButtonClick: function () {
      alert("Left button clicked!");
    },
    rightButtonClick: function () {
      alert("Right button clicked!");
    }
  },
  template: \`
    <theme-provider :initial-theme="{primaryColor: '#800080'}" >
      <d-composite-button v-bind="args" @left-button-click="leftButtonClick" @right-button-click="rightButtonClick" />
    </theme-provider>
  \`
})`,...(D=(L=o.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var R,y,T;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`args => ({
  components: {
    DCompositeButton,
    HomeFilledIcon
  },
  setup() {
    return {
      args
    };
  },
  methods: {
    leftButtonClick: function () {
      alert("Left button clicked!");
    },
    rightButtonClick: function () {
      alert("Right button clicked!");
    }
  },
  template: \`<d-composite-button v-bind="args" @left-button-click="leftButtonClick" @right-button-click="rightButtonClick">
    <template #icon>
      <home-filled-icon smart-color="white" />
    </template>
  </d-composite-button>
  \`
})`,...(T=(y=c.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var z,_,x;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`args => ({
  components: {
    DCompositeButton
  },
  setup() {
    return {
      args
    };
  },
  methods: {
    leftButtonClick: function () {
      alert("Left button clicked!");
    },
    rightButtonClick: function () {
      alert("Right button clicked!");
    }
  },
  template: \`<d-composite-button v-bind="args" @left-button-click="leftButtonClick" @right-button-click="rightButtonClick" />\`
})`,...(x=(_=h.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var I,H,P;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
  components: {
    DCompositeButton
  },
  setup() {
    return {
      args
    };
  },
  methods: {
    leftButtonClick: function () {
      alert("Left button clicked!");
    },
    rightButtonClick: function () {
      alert("Right button clicked!");
    }
  },
  template: \`<d-composite-button v-bind="args" @left-button-click="leftButtonClick" @right-button-click="rightButtonClick" />\`
})`,...(P=(H=r.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var F,M,W;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`args => ({
  components: {
    DCompositeButton
  },
  setup() {
    return {
      args
    };
  },
  methods: {
    leftButtonClick: function () {
      alert("Left button clicked!");
    },
    rightButtonClick: function () {
      alert("Right button clicked!");
    }
  },
  template: \`<d-composite-button v-bind="args" @left-button-click="leftButtonClick" @right-button-click="rightButtonClick" />\`
})`,...(W=(M=i.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var O,w,X;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
  components: {
    DCompositeButton
  },
  setup() {
    return {
      args
    };
  },
  methods: {
    leftButtonClick: function () {
      alert("Left button clicked!");
    },
    rightButtonClick: function () {
      alert("Right button clicked!");
    }
  },
  template: \`<d-composite-button v-bind="args" @left-button-click="leftButtonClick" @right-button-click="rightButtonClick" />\`
})`,...(X=(w=s.parameters)==null?void 0:w.docs)==null?void 0:X.source}}};var q,E,G;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
  components: {
    DCompositeButton
  },
  setup() {
    return {
      args
    };
  },
  methods: {
    leftButtonClick: function () {
      alert("Left button clicked!");
    },
    rightButtonClick: function () {
      alert("Right button clicked!");
    }
  },
  template: \`<d-composite-button v-bind="args" @left-button-click="leftButtonClick" @right-button-click="rightButtonClick" />\`
})`,...(G=(E=l.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var V,$,j;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`args => ({
  components: {
    DCompositeButton
  },
  setup() {
    return {
      args
    };
  },
  methods: {
    leftButtonClick: function () {
      alert("Left button clicked!");
    },
    rightButtonClick: function () {
      alert("Right button clicked!");
    }
  },
  template: \`<d-composite-button v-bind="args" @left-button-click="leftButtonClick" @right-button-click="rightButtonClick" />\`
})`,...(j=($=u.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};var A,J,K;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`args => ({
  components: {
    DCompositeButton
  },
  setup() {
    return {
      args
    };
  },
  methods: {
    leftButtonClick: function () {
      alert("Left button clicked!");
    },
    rightButtonClick: function () {
      alert("Right button clicked!");
    }
  },
  template: \`<d-composite-button v-bind="args" @left-button-click="leftButtonClick" @right-button-click="rightButtonClick" />\`
})`,...(K=(J=a.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var N,Q,U;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`args => ({
  components: {
    DCompositeButton
  },
  setup() {
    return {
      args
    };
  },
  methods: {
    leftButtonClick: function () {
      alert("Left button clicked!");
    },
    rightButtonClick: function () {
      alert("Right button clicked!");
    }
  },
  template: \`<d-composite-button v-bind="args" @left-button-click="leftButtonClick" @right-button-click="rightButtonClick" />\`
})`,...(U=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var Y,Z,tt;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`args => ({
  components: {
    DCompositeButton
  },
  setup() {
    return {
      args
    };
  },
  methods: {
    leftButtonClick: function () {
      alert("Left button clicked!");
    },
    rightButtonClick: function () {
      alert("Right button clicked!");
    }
  },
  template: \`<d-composite-button v-bind="args" @left-button-click="leftButtonClick" @right-button-click="rightButtonClick" />\`
})`,...(tt=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:tt.source}}};var nt,et,ot;d.parameters={...d.parameters,docs:{...(nt=d.parameters)==null?void 0:nt.docs,source:{originalSource:`args => ({
  components: {
    DCompositeButton
  },
  setup() {
    return {
      args
    };
  },
  methods: {
    leftButtonClick: function () {
      alert("Left button clicked!");
    },
    rightButtonClick: function () {
      alert("Right button clicked!");
    }
  },
  template: \`<d-composite-button v-bind="args" @left-button-click="leftButtonClick" @right-button-click="rightButtonClick" />\`
})`,...(ot=(et=d.parameters)==null?void 0:et.docs)==null?void 0:ot.source}}};var ct,rt,it;g.parameters={...g.parameters,docs:{...(ct=g.parameters)==null?void 0:ct.docs,source:{originalSource:`args => ({
  components: {
    DCompositeButton
  },
  setup() {
    return {
      args
    };
  },
  methods: {
    leftButtonClick: function () {
      alert("Left button clicked!");
    },
    rightButtonClick: function () {
      alert("Right button clicked!");
    }
  },
  template: \`<d-composite-button v-bind="args" @left-button-click="leftButtonClick" @right-button-click="rightButtonClick" />\`
})`,...(it=(rt=g.parameters)==null?void 0:rt.docs)==null?void 0:it.source}}};var st,lt,ut;k.parameters={...k.parameters,docs:{...(st=k.parameters)==null?void 0:st.docs,source:{originalSource:`args => ({
  components: {
    DCompositeButton
  },
  setup() {
    return {
      args
    };
  },
  methods: {
    leftButtonClick: function () {
      alert("Left button clicked!");
    },
    rightButtonClick: function () {
      alert("Right button clicked!");
    }
  },
  template: \`<d-composite-button v-bind="args" @left-button-click="leftButtonClick" @right-button-click="rightButtonClick" />\`
})`,...(ut=(lt=k.parameters)==null?void 0:lt.docs)==null?void 0:ut.source}}};var at,mt,pt;b.parameters={...b.parameters,docs:{...(at=b.parameters)==null?void 0:at.docs,source:{originalSource:`args => ({
  components: {
    DCompositeButton
  },
  setup() {
    return {
      args
    };
  },
  methods: {
    leftButtonClick: function () {
      alert("Left button clicked!");
    },
    rightButtonClick: function () {
      alert("Right button clicked!");
    }
  },
  template: \`<d-composite-button v-bind="args" @left-button-click="leftButtonClick" @right-button-click="rightButtonClick" />\`
})`,...(pt=(mt=b.parameters)==null?void 0:mt.docs)==null?void 0:pt.source}}};const Lt=["CompositeBtn","WithCustomTheme","WithCustomIcon","Default","Primary","Danger","Success","Outline","Small","Medium","Large","XLarge","Huge","Massive","Disabled","Loading"];export{e as CompositeBtn,i as Danger,h as Default,k as Disabled,d as Huge,m as Large,b as Loading,g as Massive,a as Medium,l as Outline,r as Primary,u as Small,s as Success,c as WithCustomIcon,o as WithCustomTheme,p as XLarge,Lt as __namedExportsOrder,vt as default};
