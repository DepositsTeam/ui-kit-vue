import{ai as dt,aj as f,a4 as gt}from"./DWysiwyg-8b9259c7.js";import"./vue.esm-bundler-2f75f87e.js";import"./floating-ui.dom-c3a31ea6.js";import"./_commonjsHelpers-87174ba5.js";const St={components:{HomeFilledIcon:dt},title:"Composite Button",component:f,tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","medium","large","xlarge","huge","massive"]},is:{control:{type:"select"},options:["button","a","span","div"]},colorScheme:{control:{type:"select"},options:["primary","danger","success","outline","invisible"]},loaderType:{control:{type:"select"},options:["text","ring","equalizer","ringed-circle"],table:{defaultValue:"text"}}}},t=n=>({components:{DCompositeButton:f},setup(){return{args:n}},methods:{leftButtonClick:function(){alert("Left button clicked!")},rightButtonClick:function(){alert("Right button clicked!")}},template:'<d-composite-button v-bind="args" @left-button-click="leftButtonClick" @right-button-click="rightButtonClick" />'}),kt=n=>({components:{DCompositeButton:f,ThemeProvider:gt},setup(){return{args:n}},methods:{leftButtonClick:function(){alert("Left button clicked!")},rightButtonClick:function(){alert("Right button clicked!")}},template:`
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
})`,...(T=(y=c.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var z,x,I;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`args => ({
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
})`,...(I=(x=h.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var P,_,H;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`args => ({
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
})`,...(H=(_=r.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var M,W,O;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`args => ({
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
})`,...(O=(W=i.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var w,F,X;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
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
})`,...(X=(F=s.parameters)==null?void 0:F.docs)==null?void 0:X.source}}};var j,q,E;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`args => ({
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
})`,...(E=(q=l.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var V,A,G;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`args => ({
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
})`,...(G=(A=u.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var J,K,N;a.parameters={...a.parameters,docs:{...(J=a.parameters)==null?void 0:J.docs,source:{originalSource:`args => ({
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
})`,...(N=(K=a.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var Q,U,Y;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`args => ({
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
})`,...(Y=(U=m.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var Z,$,tt;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`args => ({
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
})`,...(tt=($=p.parameters)==null?void 0:$.docs)==null?void 0:tt.source}}};var nt,et,ot;d.parameters={...d.parameters,docs:{...(nt=d.parameters)==null?void 0:nt.docs,source:{originalSource:`args => ({
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
})`,...(pt=(mt=b.parameters)==null?void 0:mt.docs)==null?void 0:pt.source}}};const vt=["CompositeBtn","WithCustomTheme","WithCustomIcon","Default","Primary","Danger","Success","Outline","Small","Medium","Large","XLarge","Huge","Massive","Disabled","Loading"];export{e as CompositeBtn,i as Danger,h as Default,k as Disabled,d as Huge,m as Large,b as Loading,g as Massive,a as Medium,l as Outline,r as Primary,u as Small,s as Success,c as WithCustomIcon,o as WithCustomTheme,p as XLarge,vt as __namedExportsOrder,St as default};
//# sourceMappingURL=DCompositeButton.stories-a2e43327.js.map
