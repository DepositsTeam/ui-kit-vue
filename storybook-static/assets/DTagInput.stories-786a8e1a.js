import{v as h,s as te,_ as re}from"./DWysiwyg-27c4e042.js";import"./vue.esm-bundler-c483924c.js";import"./_commonjsHelpers-042e6b4d.js";import"./floating-ui.dom-c3a31ea6.js";const ie={title:"Forms/Tag Input",component:h,tags:["autodocs"],argTypes:{...te,label:{control:{type:"text"}},size:{control:{type:"select"},options:["small","medium","large","xlarge","huge","massive"]},values:{control:{type:"object"},table:{defaultValue:["Option 1","Option 2","Option 3"]}},tagDelimiterKey:{control:{type:"select"},options:["enter","comma","space"],table:{defaultValue:"enter"}}}},n=o=>({components:{DTagInput:h},data:()=>({input:["Option one","Option 2","Option 3"]}),methods:{onTagAdded:function(e,a){console.log(e,a)},onTagChanged:function(e,a){console.log(e,a)},onTagDeleted:function(e,a){console.log(e,a)},onTextChanged:function(e){console.log(e)}},setup(){return{args:o}},template:'<d-tag-input @tag-added="onTagAdded" @text-changed="onTextChanged" @tag-deleted="onTagDeleted" @tag-changed="onTagChanged" v-model="input" v-bind="args" />'}),se=o=>({components:{DTagInput:h,DarkModeProvider:re},data:()=>({input:["Option one","Option 2","Option 3"]}),methods:{onTagAdded:function(e,a){console.log(e,a)},onTagChanged:function(e,a){console.log(e,a)},onTagDeleted:function(e,a){console.log(e,a)},onTextChanged:function(e){console.log(e)}},setup(){return{args:o}},template:`
    <dark-mode-provider :dark-mode="true">
    <d-tag-input @tag-added="onTagAdded" @text-changed="onTextChanged" @tag-deleted="onTagDeleted" @tag-changed="onTagChanged" :values="input" v-bind="args" />
    </dark-mode-provider>
    `}),t=()=>{const o=se.bind({});return o.decorators=[()=>({template:'<div style="padding: 3em; background: #121A26;"><story /></div>'})],o},r=n.bind({});r.args={label:"Form Label",size:"massive"};const s=n.bind({});s.args={label:"Form Label",size:"massive",errorMessage:"Random, default error"};const g=t();g.args={label:"Form Label",size:"massive"};const d=n.bind({});d.args={label:"Form Label",size:"huge"};const l=t();l.args={label:"Form Label",size:"huge"};const c=n.bind({});c.args={label:"Form Label",size:"xlarge"};const i=t();i.args={label:"Form Label",size:"xlarge"};const p=n.bind({});p.args={label:"Form Label",size:"large"};const u=t();u.args={label:"Form Label",size:"large"};const T=n.bind({});T.args={label:"Form Label",size:"medium"};const m=t();m.args={label:"Form Label",size:"medium"};const A=n.bind({});A.args={label:"Form Label",size:"small"};const y=t();y.args={label:"Form Label",size:"small"};var D,b,v;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
  components: {
    DTagInput
  },
  data: () => ({
    input: ["Option one", "Option 2", "Option 3"]
  }),
  methods: {
    onTagAdded: function (newTag, tagsArray) {
      console.log(newTag, tagsArray);
    },
    onTagChanged: function (oldTagsArray, newTagsArray) {
      console.log(oldTagsArray, newTagsArray);
    },
    onTagDeleted: function (deletedTag, tagsArray) {
      console.log(deletedTag, tagsArray);
    },
    onTextChanged: function (value) {
      console.log(value);
    }
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-tag-input @tag-added="onTagAdded" @text-changed="onTextChanged" @tag-deleted="onTagDeleted" @tag-changed="onTagChanged" v-model="input" v-bind="args" />\`
})`,...(v=(b=r.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var f,S,z;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
  components: {
    DTagInput
  },
  data: () => ({
    input: ["Option one", "Option 2", "Option 3"]
  }),
  methods: {
    onTagAdded: function (newTag, tagsArray) {
      console.log(newTag, tagsArray);
    },
    onTagChanged: function (oldTagsArray, newTagsArray) {
      console.log(oldTagsArray, newTagsArray);
    },
    onTagDeleted: function (deletedTag, tagsArray) {
      console.log(deletedTag, tagsArray);
    },
    onTextChanged: function (value) {
      console.log(value);
    }
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-tag-input @tag-added="onTagAdded" @text-changed="onTextChanged" @tag-deleted="onTagDeleted" @tag-changed="onTagChanged" v-model="input" v-bind="args" />\`
})`,...(z=(S=s.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var C,x,O;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:"DarkModeTemplateFactory()",...(O=(x=g.parameters)==null?void 0:x.docs)==null?void 0:O.source}}};var w,k,F;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
  components: {
    DTagInput
  },
  data: () => ({
    input: ["Option one", "Option 2", "Option 3"]
  }),
  methods: {
    onTagAdded: function (newTag, tagsArray) {
      console.log(newTag, tagsArray);
    },
    onTagChanged: function (oldTagsArray, newTagsArray) {
      console.log(oldTagsArray, newTagsArray);
    },
    onTagDeleted: function (deletedTag, tagsArray) {
      console.log(deletedTag, tagsArray);
    },
    onTextChanged: function (value) {
      console.log(value);
    }
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-tag-input @tag-added="onTagAdded" @text-changed="onTextChanged" @tag-deleted="onTagDeleted" @tag-changed="onTagChanged" v-model="input" v-bind="args" />\`
})`,...(F=(k=d.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var L,M,I;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:"DarkModeTemplateFactory()",...(I=(M=l.parameters)==null?void 0:M.docs)==null?void 0:I.source}}};var H,_,X;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`args => ({
  components: {
    DTagInput
  },
  data: () => ({
    input: ["Option one", "Option 2", "Option 3"]
  }),
  methods: {
    onTagAdded: function (newTag, tagsArray) {
      console.log(newTag, tagsArray);
    },
    onTagChanged: function (oldTagsArray, newTagsArray) {
      console.log(oldTagsArray, newTagsArray);
    },
    onTagDeleted: function (deletedTag, tagsArray) {
      console.log(deletedTag, tagsArray);
    },
    onTextChanged: function (value) {
      console.log(value);
    }
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-tag-input @tag-added="onTagAdded" @text-changed="onTextChanged" @tag-deleted="onTagDeleted" @tag-changed="onTagChanged" v-model="input" v-bind="args" />\`
})`,...(X=(_=c.parameters)==null?void 0:_.docs)==null?void 0:X.source}}};var E,V,j;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:"DarkModeTemplateFactory()",...(j=(V=i.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var B,K,P;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
  components: {
    DTagInput
  },
  data: () => ({
    input: ["Option one", "Option 2", "Option 3"]
  }),
  methods: {
    onTagAdded: function (newTag, tagsArray) {
      console.log(newTag, tagsArray);
    },
    onTagChanged: function (oldTagsArray, newTagsArray) {
      console.log(oldTagsArray, newTagsArray);
    },
    onTagDeleted: function (deletedTag, tagsArray) {
      console.log(deletedTag, tagsArray);
    },
    onTextChanged: function (value) {
      console.log(value);
    }
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-tag-input @tag-added="onTagAdded" @text-changed="onTextChanged" @tag-deleted="onTagDeleted" @tag-changed="onTagChanged" v-model="input" v-bind="args" />\`
})`,...(P=(K=p.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};var R,q,G;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:"DarkModeTemplateFactory()",...(G=(q=u.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,N,Q;T.parameters={...T.parameters,docs:{...(J=T.parameters)==null?void 0:J.docs,source:{originalSource:`args => ({
  components: {
    DTagInput
  },
  data: () => ({
    input: ["Option one", "Option 2", "Option 3"]
  }),
  methods: {
    onTagAdded: function (newTag, tagsArray) {
      console.log(newTag, tagsArray);
    },
    onTagChanged: function (oldTagsArray, newTagsArray) {
      console.log(oldTagsArray, newTagsArray);
    },
    onTagDeleted: function (deletedTag, tagsArray) {
      console.log(deletedTag, tagsArray);
    },
    onTextChanged: function (value) {
      console.log(value);
    }
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-tag-input @tag-added="onTagAdded" @text-changed="onTextChanged" @tag-deleted="onTagDeleted" @tag-changed="onTagChanged" v-model="input" v-bind="args" />\`
})`,...(Q=(N=T.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var U,W,Y;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:"DarkModeTemplateFactory()",...(Y=(W=m.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var Z,$,ee;A.parameters={...A.parameters,docs:{...(Z=A.parameters)==null?void 0:Z.docs,source:{originalSource:`args => ({
  components: {
    DTagInput
  },
  data: () => ({
    input: ["Option one", "Option 2", "Option 3"]
  }),
  methods: {
    onTagAdded: function (newTag, tagsArray) {
      console.log(newTag, tagsArray);
    },
    onTagChanged: function (oldTagsArray, newTagsArray) {
      console.log(oldTagsArray, newTagsArray);
    },
    onTagDeleted: function (deletedTag, tagsArray) {
      console.log(deletedTag, tagsArray);
    },
    onTextChanged: function (value) {
      console.log(value);
    }
  },
  setup() {
    return {
      args
    };
  },
  template: \`<d-tag-input @tag-added="onTagAdded" @text-changed="onTextChanged" @tag-deleted="onTagDeleted" @tag-changed="onTagChanged" v-model="input" v-bind="args" />\`
})`,...(ee=($=A.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ae,ne,oe;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:"DarkModeTemplateFactory()",...(oe=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};const pe=["SizeMassive","HasError","SizeMassiveDark","SizeHuge","SizeHugeDark","SizeXLarge","SizeXLargeDark","SizeLarge","SizeLargeDark","SizeMedium","SizeMediumDark","SizeSmall","SizeSmallDark"];export{s as HasError,d as SizeHuge,l as SizeHugeDark,p as SizeLarge,u as SizeLargeDark,r as SizeMassive,g as SizeMassiveDark,T as SizeMedium,m as SizeMediumDark,A as SizeSmall,y as SizeSmallDark,c as SizeXLarge,i as SizeXLargeDark,pe as __namedExportsOrder,ie as default};
//# sourceMappingURL=DTagInput.stories-786a8e1a.js.map
