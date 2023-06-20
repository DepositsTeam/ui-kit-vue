import{a5 as y,_ as ee}from"./DAccordion-bf179bbb.js";import"./vue.esm-bundler-02a62393.js";import"./_commonjsHelpers-87174ba5.js";const re={title:"Forms/Tag Input",component:y,argTypes:{label:{control:{type:"text"}},size:{control:{type:"select"},options:["small","medium","large","xlarge","huge","massive"]},values:{control:{type:"object"},table:{defaultValue:["Option 1","Option 2","Option 3"]}},tagDelimiterKey:{control:{type:"select"},options:["enter","comma","space"],table:{defaultValue:"enter"}}}},o=n=>({components:{DTagInput:y},data:()=>({input:["Option one","Option 2","Option 3"]}),methods:{onTagAdded:function(e,a){console.log(e,a)},onTagChanged:function(e,a){console.log(e,a)},onTagDeleted:function(e,a){console.log(e,a)},onTextChanged:function(e){console.log(e)}},setup(){return{args:n}},template:'<d-tag-input @tag-added="onTagAdded" @text-changed="onTextChanged" @tag-deleted="onTagDeleted" @tag-changed="onTagChanged" v-model="input" v-bind="args" />'}),ae=n=>({components:{DTagInput:y,DarkModeProvider:ee},data:()=>({input:["Option one","Option 2","Option 3"]}),methods:{onTagAdded:function(e,a){console.log(e,a)},onTagChanged:function(e,a){console.log(e,a)},onTagDeleted:function(e,a){console.log(e,a)},onTextChanged:function(e){console.log(e)}},setup(){return{args:n}},template:`
    <dark-mode-provider :dark-mode="true">
    <d-tag-input @tag-added="onTagAdded" @text-changed="onTextChanged" @tag-deleted="onTagDeleted" @tag-changed="onTagChanged" :values="input" v-bind="args" />
    </dark-mode-provider>
    `}),t=()=>{const n=ae.bind({});return n.decorators=[()=>({template:'<div style="padding: 3em; background: #121A26;"><story /></div>'})],n},r=o.bind({});r.args={label:"Form Label",size:"massive"};const s=t();s.args={label:"Form Label",size:"massive"};const g=o.bind({});g.args={label:"Form Label",size:"huge"};const d=t();d.args={label:"Form Label",size:"huge"};const l=o.bind({});l.args={label:"Form Label",size:"xlarge"};const c=t();c.args={label:"Form Label",size:"xlarge"};const i=o.bind({});i.args={label:"Form Label",size:"large"};const p=t();p.args={label:"Form Label",size:"large"};const u=o.bind({});u.args={label:"Form Label",size:"medium"};const m=t();m.args={label:"Form Label",size:"medium"};const T=o.bind({});T.args={label:"Form Label",size:"small"};const A=t();A.args={label:"Form Label",size:"small"};var h,D,b;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
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
})`,...(b=(D=r.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};var v,S,f;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:"DarkModeTemplateFactory()",...(f=(S=s.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var z,C,x;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`args => ({
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
})`,...(x=(C=g.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var O,k,w;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:"DarkModeTemplateFactory()",...(w=(k=d.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var F,L,M;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`args => ({
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
})`,...(M=(L=l.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var I,_,H;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:"DarkModeTemplateFactory()",...(H=(_=c.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var X,V,j;i.parameters={...i.parameters,docs:{...(X=i.parameters)==null?void 0:X.docs,source:{originalSource:`args => ({
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
})`,...(j=(V=i.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var B,E,K;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:"DarkModeTemplateFactory()",...(K=(E=p.parameters)==null?void 0:E.docs)==null?void 0:K.source}}};var P,q,G;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`args => ({
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
})`,...(G=(q=u.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,N,Q;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:"DarkModeTemplateFactory()",...(Q=(N=m.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var R,U,W;T.parameters={...T.parameters,docs:{...(R=T.parameters)==null?void 0:R.docs,source:{originalSource:`args => ({
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
})`,...(W=(U=T.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var Y,Z,$;A.parameters={...A.parameters,docs:{...(Y=A.parameters)==null?void 0:Y.docs,source:{originalSource:"DarkModeTemplateFactory()",...($=(Z=A.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};const se=["SizeMassive","SizeMassiveDark","SizeHuge","SizeHugeDark","SizeXLarge","SizeXLargeDark","SizeLarge","SizeLargeDark","SizeMedium","SizeMediumDark","SizeSmall","SizeSmallDark"];export{g as SizeHuge,d as SizeHugeDark,i as SizeLarge,p as SizeLargeDark,r as SizeMassive,s as SizeMassiveDark,u as SizeMedium,m as SizeMediumDark,T as SizeSmall,A as SizeSmallDark,l as SizeXLarge,c as SizeXLargeDark,se as __namedExportsOrder,re as default};
//# sourceMappingURL=DTagInput.stories-2879f5df.js.map
