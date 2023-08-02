import{g as i}from"./DAccordion-38349640.js";import"./vue.esm-bundler-02a62393.js";import"./_commonjsHelpers-87174ba5.js";const P={title:"Text",component:i,argTypes:{is:{control:{type:"select"},options:["p","span","small","sub","sup"]},scale:{control:{type:"select"},options:["body","subhead","p-18","overline","footnote","overline","footnote-caps"]},uppercase:{control:{type:"boolean"}},equalLineHeight:{control:{type:"boolean"}},fontFace:{control:{type:"select"},options:["circularSTD","heroNew"]},underline:{control:{type:"boolean"}},noLine:{control:{type:"boolean"}}}},c=n=>({components:{DText:i},setup(){return{args:n}},template:'<d-text v-bind="args"><span>{{args.children}}</span></d-text>'}),O=({fontSize:n,...d})=>({components:{DText:i},setup(){return{args:d,fontSize:n}},template:'<d-text :font-size="fontSize" v-bind="args">{{args.children}}</d-text>'}),_=({fontWeight:n,...d})=>({components:{DText:i},setup(){return{args:d,fontWeight:n}},template:'<d-text :font-weight="fontWeight" v-bind="args">{{args.children}}</d-text>'}),t=c.bind({});t.args={children:"The quick brown fox jumps over the lazy dog."};const o=c.bind({});o.args={children:"The quick brown fox jumps over the lazy dog.",scale:"p-18"};const r=c.bind({});r.args={children:"The quick brown fox jumps over the lazy dog.",scale:"footnote"};const s=c.bind({});s.args={children:"The quick brown fox jumps over the lazy dog.",scale:"overline"};const e=c.bind({});e.args={children:"The quick brown fox jumps over the lazy dog.",scale:"footnote-caps"};e.storyName="Footnote All Caps";const a=O.bind({});a.args={children:"The quick brown fox jumps over the lazy dog.",fontSize:"88px"};const p=_.bind({});p.args={children:"The quick brown fox jumps over the lazy dog.",fontWeight:"700",scale:"subhead"};var l,m,g;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`args => ({
  components: {
    DText
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-text v-bind="args"><span>{{args.children}}</span></d-text>\`
})`,...(g=(m=t.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var u,h,x;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
  components: {
    DText
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-text v-bind="args"><span>{{args.children}}</span></d-text>\`
})`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var b,f,v;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
  components: {
    DText
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-text v-bind="args"><span>{{args.children}}</span></d-text>\`
})`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var T,y,z;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
  components: {
    DText
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-text v-bind="args"><span>{{args.children}}</span></d-text>\`
})`,...(z=(y=s.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var S,F,w;e.parameters={...e.parameters,docs:{...(S=e.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
  components: {
    DText
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-text v-bind="args"><span>{{args.children}}</span></d-text>\`
})`,...(w=(F=e.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};var D,C,q;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`({
  fontSize,
  ...args
}) => ({
  components: {
    DText
  },
  setup() {
    return {
      args,
      fontSize
    };
  },
  template: \`<d-text :font-size="fontSize" v-bind="args">{{args.children}}</d-text>\`
})`,...(q=(C=a.parameters)==null?void 0:C.docs)==null?void 0:q.source}}};var W,j,k;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`({
  fontWeight,
  ...args
}) => ({
  components: {
    DText
  },
  setup() {
    return {
      args,
      fontWeight
    };
  },
  template: \`<d-text :font-weight="fontWeight" v-bind="args">{{args.children}}</d-text>\`
})`,...(k=(j=p.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};const A=["Body","Paragraph18","Footnote","Overline","FootnoteCaps","CustomFontSize","CustomFontWeight"];export{t as Body,a as CustomFontSize,p as CustomFontWeight,r as Footnote,e as FootnoteCaps,s as Overline,o as Paragraph18,A as __namedExportsOrder,P as default};
//# sourceMappingURL=DText.stories-5b8d424a.js.map
