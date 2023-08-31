import{ah as R,q as je,h as ze,e as Ge,_ as He}from"./DWysiwyg-4f9daa5a.js";import"./vue.esm-bundler-d253c880.js";import"./floating-ui.dom-c3a31ea6.js";import"./_commonjsHelpers-042e6b4d.js";const Xe={title:"Banner",component:R,argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}},colorScheme:{control:{type:"select"},options:["default","info","warning","error","success"]},removable:{control:{type:"boolean"}},alignTop:{control:{type:"boolean"}},full:{control:{type:"boolean"},default:!0},smartColor:{control:{type:"color"}},iconColor:{control:{type:"color"}}}},e=o=>({components:{DBanner:R},setup(){return{args:o}},template:'<d-banner v-bind="args" />'}),Je=o=>({components:{DBanner:R,DarkModeProvider:He},setup(){return{args:o}},template:`
    <dark-mode-provider :dark-mode="true">
      <d-banner v-bind="args" />
    </dark-mode-provider>
    `}),r=()=>{const o=Je.bind({});return o.decorators=[()=>({template:'<div style="padding: 3em; background: #121A26;"><story /></div>'})],o},t=e.bind({});t.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la."};const a=e.bind({});a.args={description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"info"};const s=e.bind({});s.args={description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"info",removable:!0};const n=r();n.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la."};const i=e.bind({});i.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"success"};const c=r();c.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"success"};const d=e.bind({});d.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"error"};const m=r();m.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"error"};const l=e.bind({});l.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"warning"};const p=r();p.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"warning"};const u=e.bind({});u.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"info"};const g=r();g.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"info"};const b=e.bind({});b.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",removable:!0};const D=r();D.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",removable:!0};const v=e.bind({});v.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"success",removable:!0};const S=r();S.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"success",removable:!0};const T=e.bind({});T.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"error",removable:!0};const k=r();k.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"error",removable:!0};const y=e.bind({});y.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"warning",removable:!0};const f=r();f.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"warning",removable:!0};const h=e.bind({});h.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"info",removable:!0};const B=r();B.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"info",removable:!0};const Ke=o=>({components:{DBanner:R,DAutoLayout:je,DText:ze,DBox:Ge},setup(){return{args:o}},template:`
    <d-banner smart-color="#FFD49B" theme="filled">
    <d-auto-layout stretch-items alignment="center">
      <d-text center>
        You are on a 7 day free trial. Billing will begin in 7 days. To
        cancel,
        <d-box is="span" color="#995A06" no-line>click here</d-box>
      </d-text>
    </d-auto-layout>
    </d-banner>
  `}),L=Ke.bind({});var x,F,M;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
  components: {
    DBanner
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-banner v-bind="args" />\`
})`,...(M=(F=t.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var E,I,W;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
  components: {
    DBanner
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-banner v-bind="args" />\`
})`,...(W=(I=a.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var _,w,A;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
  components: {
    DBanner
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-banner v-bind="args" />\`
})`,...(A=(w=s.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var C,O,Y;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:"DarkModeTemplateFactory()",...(Y=(O=n.parameters)==null?void 0:O.docs)==null?void 0:Y.source}}};var q,P,$;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
  components: {
    DBanner
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-banner v-bind="args" />\`
})`,...($=(P=i.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var j,z,G;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:"DarkModeTemplateFactory()",...(G=(z=c.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var H,J,K;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`args => ({
  components: {
    DBanner
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-banner v-bind="args" />\`
})`,...(K=(J=d.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var N,Q,U;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:"DarkModeTemplateFactory()",...(U=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var V,X,Z;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`args => ({
  components: {
    DBanner
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-banner v-bind="args" />\`
})`,...(Z=(X=l.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,re,oe;p.parameters={...p.parameters,docs:{...(ee=p.parameters)==null?void 0:ee.docs,source:{originalSource:"DarkModeTemplateFactory()",...(oe=(re=p.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var te,ae,se;u.parameters={...u.parameters,docs:{...(te=u.parameters)==null?void 0:te.docs,source:{originalSource:`args => ({
  components: {
    DBanner
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-banner v-bind="args" />\`
})`,...(se=(ae=u.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var ne,ie,ce;g.parameters={...g.parameters,docs:{...(ne=g.parameters)==null?void 0:ne.docs,source:{originalSource:"DarkModeTemplateFactory()",...(ce=(ie=g.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var de,me,le;b.parameters={...b.parameters,docs:{...(de=b.parameters)==null?void 0:de.docs,source:{originalSource:`args => ({
  components: {
    DBanner
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-banner v-bind="args" />\`
})`,...(le=(me=b.parameters)==null?void 0:me.docs)==null?void 0:le.source}}};var pe,ue,ge;D.parameters={...D.parameters,docs:{...(pe=D.parameters)==null?void 0:pe.docs,source:{originalSource:"DarkModeTemplateFactory()",...(ge=(ue=D.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};var be,De,ve;v.parameters={...v.parameters,docs:{...(be=v.parameters)==null?void 0:be.docs,source:{originalSource:`args => ({
  components: {
    DBanner
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-banner v-bind="args" />\`
})`,...(ve=(De=v.parameters)==null?void 0:De.docs)==null?void 0:ve.source}}};var Se,Te,ke;S.parameters={...S.parameters,docs:{...(Se=S.parameters)==null?void 0:Se.docs,source:{originalSource:"DarkModeTemplateFactory()",...(ke=(Te=S.parameters)==null?void 0:Te.docs)==null?void 0:ke.source}}};var ye,fe,he;T.parameters={...T.parameters,docs:{...(ye=T.parameters)==null?void 0:ye.docs,source:{originalSource:`args => ({
  components: {
    DBanner
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-banner v-bind="args" />\`
})`,...(he=(fe=T.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};var Be,Le,Re;k.parameters={...k.parameters,docs:{...(Be=k.parameters)==null?void 0:Be.docs,source:{originalSource:"DarkModeTemplateFactory()",...(Re=(Le=k.parameters)==null?void 0:Le.docs)==null?void 0:Re.source}}};var xe,Fe,Me;y.parameters={...y.parameters,docs:{...(xe=y.parameters)==null?void 0:xe.docs,source:{originalSource:`args => ({
  components: {
    DBanner
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-banner v-bind="args" />\`
})`,...(Me=(Fe=y.parameters)==null?void 0:Fe.docs)==null?void 0:Me.source}}};var Ee,Ie,We;f.parameters={...f.parameters,docs:{...(Ee=f.parameters)==null?void 0:Ee.docs,source:{originalSource:"DarkModeTemplateFactory()",...(We=(Ie=f.parameters)==null?void 0:Ie.docs)==null?void 0:We.source}}};var _e,we,Ae;h.parameters={...h.parameters,docs:{...(_e=h.parameters)==null?void 0:_e.docs,source:{originalSource:`args => ({
  components: {
    DBanner
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-banner v-bind="args" />\`
})`,...(Ae=(we=h.parameters)==null?void 0:we.docs)==null?void 0:Ae.source}}};var Ce,Oe,Ye;B.parameters={...B.parameters,docs:{...(Ce=B.parameters)==null?void 0:Ce.docs,source:{originalSource:"DarkModeTemplateFactory()",...(Ye=(Oe=B.parameters)==null?void 0:Oe.docs)==null?void 0:Ye.source}}};var qe,Pe,$e;L.parameters={...L.parameters,docs:{...(qe=L.parameters)==null?void 0:qe.docs,source:{originalSource:`args => ({
  components: {
    DBanner,
    DAutoLayout,
    DText,
    DBox
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <d-banner smart-color="#FFD49B" theme="filled">
    <d-auto-layout stretch-items alignment="center">
      <d-text center>
        You are on a 7 day free trial. Billing will begin in 7 days. To
        cancel,
        <d-box is="span" color="#995A06" no-line>click here</d-box>
      </d-text>
    </d-auto-layout>
    </d-banner>
  \`
})`,...($e=(Pe=L.parameters)==null?void 0:Pe.docs)==null?void 0:$e.source}}};const Ze=["Default","OnlyDescription","OnlyDescriptionRemoveable","DarkDefault","Success","DarkSuccess","Error","DarkError","Warning","DarkWarning","Info","DarkInfo","DefaultRemovable","DarkDefaultRemovable","SuccessRemovable","DarkSuccessRemovable","ErrorRemovable","DarkErrorRemovable","WarningRemovable","DarkWarningRemovable","InfoRemovable","DarkInfoRemovable","CustomBanner"];export{L as CustomBanner,n as DarkDefault,D as DarkDefaultRemovable,m as DarkError,k as DarkErrorRemovable,g as DarkInfo,B as DarkInfoRemovable,c as DarkSuccess,S as DarkSuccessRemovable,p as DarkWarning,f as DarkWarningRemovable,t as Default,b as DefaultRemovable,d as Error,T as ErrorRemovable,u as Info,h as InfoRemovable,a as OnlyDescription,s as OnlyDescriptionRemoveable,i as Success,v as SuccessRemovable,l as Warning,y as WarningRemovable,Ze as __namedExportsOrder,Xe as default};
//# sourceMappingURL=DBanner.stories-b6ed9409.js.map
