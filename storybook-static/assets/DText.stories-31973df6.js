import{q as i}from"./DWysiwyg-697bbd28.js";import"./vue.esm-bundler-a99e1ba3.js";import"./_commonjsHelpers-042e6b4d.js";import"./floating-ui.dom-c3a31ea6.js";const A={title:"Text",component:i,tags:["autodocs"],argTypes:{is:{control:{type:"select"},options:["p","span","small","sub","sup"]},scale:{control:{type:"select"},options:["body","subhead","p-18","overline","footnote","overline","footnote-caps"]},uppercase:{control:{type:"boolean"}},equalLineHeight:{control:{type:"boolean"}},fontFace:{control:{type:"select"},options:["circularSTD","heroNew"]},underline:{control:{type:"boolean"}},noLine:{control:{type:"boolean"}}}},c=t=>({components:{DText:i},setup(){return{args:t}},template:'<d-text v-bind="args"><span>{{args.children}}</span></d-text>'}),O=({fontSize:t,...d})=>({components:{DText:i},setup(){return{args:d,fontSize:t}},template:'<d-text :font-size="fontSize" v-bind="args">{{args.children}}</d-text>'}),_=({fontWeight:t,...d})=>({components:{DText:i},setup(){return{args:d,fontWeight:t}},template:'<d-text :font-weight="fontWeight" v-bind="args">{{args.children}}</d-text>'}),n=c.bind({});n.args={children:"The quick brown fox jumps over the lazy dog."};const o=c.bind({});o.args={children:"The quick brown fox jumps over the lazy dog.",scale:"p-18"};const r=c.bind({});r.args={children:"The quick brown fox jumps over the lazy dog.",scale:"footnote"};const s=c.bind({});s.args={children:"The quick brown fox jumps over the lazy dog.",scale:"overline"};const e=c.bind({});e.args={children:"The quick brown fox jumps over the lazy dog.",scale:"footnote-caps"};e.storyName="Footnote All Caps";const a=O.bind({});a.args={children:"The quick brown fox jumps over the lazy dog.",fontSize:"88px"};const p=_.bind({});p.args={children:"The quick brown fox jumps over the lazy dog.",fontWeight:"700",scale:"subhead"};var l,m,u;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`args => ({
  components: {
    DText
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-text v-bind="args"><span>{{args.children}}</span></d-text>\`
})`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,h,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`args => ({
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
})`,...(w=(F=e.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};var D,q,C;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`({
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
})`,...(C=(q=a.parameters)==null?void 0:q.docs)==null?void 0:C.source}}};var W,j,k;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`({
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
})`,...(k=(j=p.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};const E=["Body","Paragraph18","Footnote","Overline","FootnoteCaps","CustomFontSize","CustomFontWeight"];export{n as Body,a as CustomFontSize,p as CustomFontWeight,r as Footnote,e as FootnoteCaps,s as Overline,o as Paragraph18,E as __namedExportsOrder,A as default};
//# sourceMappingURL=DText.stories-31973df6.js.map
