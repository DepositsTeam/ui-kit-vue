import{ad as G,ae as J}from"./DWysiwyg-208de099.js";import"./vue.esm-bundler-a99e1ba3.js";import"./floating-ui.dom-c3a31ea6.js";import"./_commonjsHelpers-042e6b4d.js";const U={title:"Debit Card Balance",component:G,tags:["autodocs"],argTypes:{logo:{control:{type:"text"}},cardNo:{control:{type:"text"}},exp:{control:{type:"text"}},cvv:{control:{type:"text"}},name:{control:{type:"text"}},brand:{control:{type:"select"},options:J},width:{control:{type:"text"}},balance:{control:{type:"text"}},theme:{control:{type:"select"},options:["dark","light"]},enableHiding:{control:{type:"boolean"},default:!0}}},e=I=>({components:{DDebitCardBalance:G},setup(){return{args:I}},template:'<d-debit-card-balance v-bind="args" />'}),i=e.bind({}),c=e.bind({});c.args={enableHiding:!1};const a=e.bind({});a.args={exp:"2032-12"};a.storyName="Exp (YYYY-MM)";const r=e.bind({});r.args={exp:"12-2032"};r.storyName="Exp (MM-YYYY)";const n=e.bind({});n.args={exp:"2032/12"};n.storyName="Exp (YYYY/MM)";const t=e.bind({});t.args={exp:"12/2032"};t.storyName="Exp (MM/YYYY)";const s=e.bind({});s.args={exp:"12-32"};s.storyName="Exp (MM-YY)";const o=e.bind({});o.args={exp:"12/32"};o.storyName="Exp (MM/YY)";const p=e.bind({});p.args={lastFourCardNo:"1234",exp:"12/2032"};const d=e.bind({});d.args={firstFourCardNo:"5399",lastFourCardNo:"1234",exp:"12/2032"};var m,l,u;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  components: {
    DDebitCardBalance
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-debit-card-balance v-bind="args" />\`
})`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var b,g,M;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
  components: {
    DDebitCardBalance
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-debit-card-balance v-bind="args" />\`
})`,...(M=(g=c.parameters)==null?void 0:g.docs)==null?void 0:M.source}}};var Y,x,D;a.parameters={...a.parameters,docs:{...(Y=a.parameters)==null?void 0:Y.docs,source:{originalSource:`args => ({
  components: {
    DDebitCardBalance
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-debit-card-balance v-bind="args" />\`
})`,...(D=(x=a.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var E,y,C;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
  components: {
    DDebitCardBalance
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-debit-card-balance v-bind="args" />\`
})`,...(C=(y=r.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var B,v,N;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
  components: {
    DDebitCardBalance
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-debit-card-balance v-bind="args" />\`
})`,...(N=(v=n.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var S,F,f;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
  components: {
    DDebitCardBalance
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-debit-card-balance v-bind="args" />\`
})`,...(f=(F=t.parameters)==null?void 0:F.docs)==null?void 0:f.source}}};var H,L,h;s.parameters={...s.parameters,docs:{...(H=s.parameters)==null?void 0:H.docs,source:{originalSource:`args => ({
  components: {
    DDebitCardBalance
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-debit-card-balance v-bind="args" />\`
})`,...(h=(L=s.parameters)==null?void 0:L.docs)==null?void 0:h.source}}};var _,A,T;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
  components: {
    DDebitCardBalance
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-debit-card-balance v-bind="args" />\`
})`,...(T=(A=o.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var k,w,O;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
  components: {
    DDebitCardBalance
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-debit-card-balance v-bind="args" />\`
})`,...(O=(w=p.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var j,q,z;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`args => ({
  components: {
    DDebitCardBalance
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-debit-card-balance v-bind="args" />\`
})`,...(z=(q=d.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};const V=["Default","DisabledHiding","ExpYYYMMMM1","ExpYYYMMMM2","ExpYYYMMMM3","ExpYYYMMMM4","ExpMMYY1","ExpMMYY4","LastFourDigits","FirstAndLastFourDigits"];export{i as Default,c as DisabledHiding,s as ExpMMYY1,o as ExpMMYY4,a as ExpYYYMMMM1,r as ExpYYYMMMM2,n as ExpYYYMMMM3,t as ExpYYYMMMM4,d as FirstAndLastFourDigits,p as LastFourDigits,V as __namedExportsOrder,U as default};
//# sourceMappingURL=DDebitCardBalance.stories-6d9e360d.js.map
