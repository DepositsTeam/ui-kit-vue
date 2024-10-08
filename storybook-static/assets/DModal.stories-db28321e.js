import{k as n,l as x,o as w,h as D,q as S,_ as k}from"./DWysiwyg-02771dd6.js";import"./vue.esm-bundler-77038495.js";import"./iframe-468a85b4.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-042e6b4d.js";import"./floating-ui.dom-c3a31ea6.js";const A={title:"Modal",component:n,tags:["autodocs"],argTypes:{show:{control:{type:"boolean"}},greyContent:{control:{type:"boolean"}},requestClose:{control:{type:"object"}},modalWidth:{control:{type:"text"}},maxModalWidth:{control:{type:"text"}},minModalWidth:{control:{type:"text"}},heading:{control:{type:"text"}},overlayBg:{control:{type:"color"}},alignment:{control:{type:"select"},options:["center","top","bottom"]}}},v=e=>({components:{DModal:n,DButton:x,DTextfield:w,DAutoLayout:D},data:()=>({show:!1}),setup(){return{args:e}},methods:{setShow:function(l){this.show=l}},template:`
    <d-modal :show="show" @closeModal="setShow(false)" v-bind="args">
    <template v-slot>${e.children}</template>
    </d-modal>
    <d-button
      @click="setShow(true)"
    >
    Toggle Modal
    </d-button>
  `}),T=e=>({components:{DModal:n,DButton:x,DTextfield:w,DBox:S,DarkModeProvider:k,DAutoLayout:D},data:()=>({show:!1}),setup(){return{args:e}},methods:{setShow:function(l){this.show=l}},template:`
    <dark-mode-provider :dark-mode="true">
    <d-modal :show="show" @closeModal="setShow(false)" v-bind="args">
      <template v-slot>${e.children}</template>
    </d-modal>
    <d-button
      @click="setShow(true)"
    >
      Toggle Modal
    </d-button>
    </dark-mode-provider>
  `}),M=()=>{const e=T.bind({});return e.decorators=[()=>({template:'<div style="padding: 3em; background: #121A26;"><story /></div>'})],e},t=v.bind({});t.args={heading:"Title",children:`
    <d-box>
    <d-auto-layout direction="vertical">
      <d-textfield width="900px" label="Form label" />
      <d-textfield label="Form label" />
      <d-textfield label="Form label" />
      <d-button responsive size="huge" colorScheme="primary" margin-top="2rem">
        Primary Button
      </d-button>
      </d-auto-layout>
    </d-box>
      `};const o=M();o.args={heading:"Title",children:`
    <d-box>
    <d-auto-layout direction="vertical">
      <d-textfield width="900px" label="Form label" />
      <d-textfield label="Form label" />
      <d-textfield label="Form label" />
      <d-button responsive size="huge" colorScheme="primary" margin-top="2rem">
        Primary Button
      </d-button>
      </d-auto-layout>
    </d-box>
      `};const a=v.bind({});a.args={heading:"Title",greyContent:!0,children:`
<d-box>
<d-auto-layout direction="vertical">
      <d-textfield label="Form label" />
      <d-textfield label="Form label" />
      <d-textfield label="Form label" />
      <d-button
        responsive
        size="huge"
        colorScheme="primary"
        margin-top="2rem"
      >
        Primary Button
      </d-button>
      </d-auto-layout>
    </d-box>
`};const r=M();r.args={heading:"Title",greyContent:!0,children:`
    <d-box>
    <d-auto-layout direction="vertical">
      <d-textfield label="Form label" />
      <d-textfield label="Form label" />
      <d-textfield label="Form label" />
      <d-button
        responsive
        size="huge"
        colorScheme="primary"
        margin-top="2rem"
      >
        Primary Button
      </d-button>
      </d-auto-layout>
    </d-box>
  `};var d,s,i;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  components: {
    DModal,
    DButton,
    DTextfield,
    DAutoLayout
  },
  data: () => ({
    show: false
  }),
  setup() {
    return {
      args
    };
  },
  methods: {
    setShow: function (val) {
      this.show = val;
    }
  },
  template: \`
    <d-modal :show="show" @closeModal="setShow(false)" v-bind="args">
    <template v-slot>\${args.children}</template>
    </d-modal>
    <d-button
      @click="setShow(true)"
    >
    Toggle Modal
    </d-button>
  \`
})`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var m,c,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:"DarkModeTemplateFactory()",...(u=(c=o.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var p,h,b;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  components: {
    DModal,
    DButton,
    DTextfield,
    DAutoLayout
  },
  data: () => ({
    show: false
  }),
  setup() {
    return {
      args
    };
  },
  methods: {
    setShow: function (val) {
      this.show = val;
    }
  },
  template: \`
    <d-modal :show="show" @closeModal="setShow(false)" v-bind="args">
    <template v-slot>\${args.children}</template>
    </d-modal>
    <d-button
      @click="setShow(true)"
    >
    Toggle Modal
    </d-button>
  \`
})`,...(b=(h=a.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var g,y,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:"DarkModeTemplateFactory()",...(f=(y=r.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const C=["Default","DarkDefault","GreyBody","DarkGreyBody"];export{o as DarkDefault,r as DarkGreyBody,t as Default,a as GreyBody,C as __namedExportsOrder,A as default};
//# sourceMappingURL=DModal.stories-db28321e.js.map
