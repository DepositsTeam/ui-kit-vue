import{q as h,_ as te}from"./DWysiwyg-c45d111f.js";import"./vue.esm-bundler-41d8d808.js";import"./floating-ui.dom-c3a31ea6.js";import"./_commonjsHelpers-042e6b4d.js";const ce={title:"Forms/Tag Input",component:h,tags:["autodocs"],argTypes:{label:{control:{type:"text"}},size:{control:{type:"select"},options:["small","medium","large","xlarge","huge","massive"]},values:{control:{type:"object"},table:{defaultValue:["Option 1","Option 2","Option 3"]}},tagDelimiterKey:{control:{type:"select"},options:["enter","comma","space"],table:{defaultValue:"enter"}}}},n=o=>({components:{DTagInput:h},data:()=>({input:["Option one","Option 2","Option 3"]}),methods:{onTagAdded:function(e,a){console.log(e,a)},onTagChanged:function(e,a){console.log(e,a)},onTagDeleted:function(e,a){console.log(e,a)},onTextChanged:function(e){console.log(e)}},setup(){return{args:o}},template:'<d-tag-input @tag-added="onTagAdded" @text-changed="onTextChanged" @tag-deleted="onTagDeleted" @tag-changed="onTagChanged" v-model="input" v-bind="args" />'}),re=o=>({components:{DTagInput:h,DarkModeProvider:te},data:()=>({input:["Option one","Option 2","Option 3"]}),methods:{onTagAdded:function(e,a){console.log(e,a)},onTagChanged:function(e,a){console.log(e,a)},onTagDeleted:function(e,a){console.log(e,a)},onTextChanged:function(e){console.log(e)}},setup(){return{args:o}},template:`
    <dark-mode-provider :dark-mode="true">
    <d-tag-input @tag-added="onTagAdded" @text-changed="onTextChanged" @tag-deleted="onTagDeleted" @tag-changed="onTagChanged" :values="input" v-bind="args" />
    </dark-mode-provider>
    `}),t=()=>{const o=re.bind({});return o.decorators=[()=>({template:'<div style="padding: 3em; background: #121A26;"><story /></div>'})],o},r=n.bind({});r.args={label:"Form Label",size:"massive"};const g=n.bind({});g.args={label:"Form Label",size:"massive",errorMessage:"Random, default error"};const s=t();s.args={label:"Form Label",size:"massive"};const d=n.bind({});d.args={label:"Form Label",size:"huge"};const l=t();l.args={label:"Form Label",size:"huge"};const c=n.bind({});c.args={label:"Form Label",size:"xlarge"};const i=t();i.args={label:"Form Label",size:"xlarge"};const p=n.bind({});p.args={label:"Form Label",size:"large"};const u=t();u.args={label:"Form Label",size:"large"};const m=n.bind({});m.args={label:"Form Label",size:"medium"};const T=t();T.args={label:"Form Label",size:"medium"};const A=n.bind({});A.args={label:"Form Label",size:"small"};const y=t();y.args={label:"Form Label",size:"small"};var D,b,v;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
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
})`,...(v=(b=r.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var f,S,z;g.parameters={...g.parameters,docs:{...(f=g.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
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
})`,...(z=(S=g.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var C,x,O;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:"DarkModeTemplateFactory()",...(O=(x=s.parameters)==null?void 0:x.docs)==null?void 0:O.source}}};var w,k,F;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
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
})`,...(X=(_=c.parameters)==null?void 0:_.docs)==null?void 0:X.source}}};var E,V,j;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:"DarkModeTemplateFactory()",...(j=(V=i.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var q,B,K;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
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
})`,...(K=(B=p.parameters)==null?void 0:B.docs)==null?void 0:K.source}}};var P,R,G;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:"DarkModeTemplateFactory()",...(G=(R=u.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};var J,N,Q;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`args => ({
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
})`,...(Q=(N=m.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var U,W,Y;T.parameters={...T.parameters,docs:{...(U=T.parameters)==null?void 0:U.docs,source:{originalSource:"DarkModeTemplateFactory()",...(Y=(W=T.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var Z,$,ee;A.parameters={...A.parameters,docs:{...(Z=A.parameters)==null?void 0:Z.docs,source:{originalSource:`args => ({
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
})`,...(ee=($=A.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ae,ne,oe;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:"DarkModeTemplateFactory()",...(oe=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};const ie=["SizeMassive","HasError","SizeMassiveDark","SizeHuge","SizeHugeDark","SizeXLarge","SizeXLargeDark","SizeLarge","SizeLargeDark","SizeMedium","SizeMediumDark","SizeSmall","SizeSmallDark"];export{g as HasError,d as SizeHuge,l as SizeHugeDark,p as SizeLarge,u as SizeLargeDark,r as SizeMassive,s as SizeMassiveDark,m as SizeMedium,T as SizeMediumDark,A as SizeSmall,y as SizeSmallDark,c as SizeXLarge,i as SizeXLargeDark,ie as __namedExportsOrder,ce as default};
//# sourceMappingURL=DTagInput.stories-aa1fe4d1.js.map
