var s=Object.defineProperty;var o=(e,t)=>s(e,"name",{value:t,configurable:!0});import{H as n,g as l,I as a,b as d,c,_ as m}from"./DAccordion-8b25468e.js";import"./vue.esm-bundler-da4a8dbf.js";import"./iframe-e1a5a4b4.js";const v={parameters:{storySource:{source:`import DModal from "./DModal.vue";
import {
  DarkModeProvider,
  DAutoLayout,
  DBox,
  DButton,
  DTextfield,
} from "../main";

export default {
  title: "Modal",
  component: DModal,
  argTypes: {
    show: {
      control: { type: "boolean" },
    },
    greyContent: {
      control: { type: "boolean" },
    },
    requestClose: {
      control: { type: "object" },
    },
    modalWidth: {
      control: { type: "text" },
    },
    maxModalWidth: {
      control: { type: "text" },
    },
    minModalWidth: {
      control: { type: "text" },
    },
    heading: {
      control: { type: "text" },
    },
    overlayBg: {
      control: { type: "color" },
    },
    alignment: {
      control: { type: "select" },
      options: ["center", "top", "bottom"],
    },
  },
};

const Template = (args) => ({
  components: {
    DModal,
    DButton,
    DTextfield,
    DAutoLayout,
  },
  data: () => ({
    show: false,
  }),
  setup() {
    return { args };
  },
  methods: {
    setShow: function (val) {
      this.show = val;
    },
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
  \`,
});

const DarkModeTemplate = (args) => ({
  components: {
    DModal,
    DButton,
    DTextfield,
    DBox,
    DarkModeProvider,
    DAutoLayout,
  },
  data: () => ({
    show: false,
  }),
  setup() {
    return { args };
  },
  methods: {
    setShow: function (val) {
      this.show = val;
    },
  },
  template: \`
    <dark-mode-provider :dark-mode="true">
    <d-modal :show="show" @closeModal="setShow(false)" v-bind="args">
      <template v-slot>\${args.children}</template>
    </d-modal>
    <d-button
      @click="setShow(true)"
    >
      Toggle Modal
    </d-button>
    </dark-mode-provider>
  \`,
});

const DarkModeTemplateFactory = () => {
  const Bound = DarkModeTemplate.bind({});
  Bound.decorators = [
    () => ({
      template:
        '<div style="padding: 3em; background: #121A26;"><story /></div>',
    }),
  ];
  return Bound;
};

export const Default = Template.bind({});

Default.args = {
  heading: "Title",
  children: \`
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
      \`,
};

export const DarkDefault = DarkModeTemplateFactory();

DarkDefault.args = {
  heading: "Title",
  children: \`
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
      \`,
};

export const GreyBody = Template.bind({});

GreyBody.args = {
  heading: "Title",
  greyContent: true,
  children: \`
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
\`,
};

export const DarkGreyBody = DarkModeTemplateFactory();

DarkGreyBody.args = {
  heading: "Title",
  greyContent: true,
  children: \`
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
  \`,
};
`,locationsMap:{default:{startLoc:{col:17,line:45},endLoc:{col:2,line:73},startBody:{col:17,line:45},endBody:{col:2,line:73}},"dark-default":{startLoc:{col:27,line:138},endLoc:{col:52,line:138},startBody:{col:27,line:138},endBody:{col:52,line:138}},"grey-body":{startLoc:{col:17,line:45},endLoc:{col:2,line:73},startBody:{col:17,line:45},endBody:{col:2,line:73}},"dark-grey-body":{startLoc:{col:28,line:180},endLoc:{col:53,line:180},startBody:{col:28,line:180},endBody:{col:53,line:180}}}}},title:"Modal",component:n,argTypes:{show:{control:{type:"boolean"}},greyContent:{control:{type:"boolean"}},requestClose:{control:{type:"object"}},modalWidth:{control:{type:"text"}},maxModalWidth:{control:{type:"text"}},minModalWidth:{control:{type:"text"}},heading:{control:{type:"text"}},overlayBg:{control:{type:"color"}},alignment:{control:{type:"select"},options:["center","top","bottom"]}}},r=o(e=>({components:{DModal:n,DButton:l,DTextfield:a,DAutoLayout:d},data:()=>({show:!1}),setup(){return{args:e}},methods:{setShow:function(t){this.show=t}},template:`
    <d-modal :show="show" @closeModal="setShow(false)" v-bind="args">
    <template v-slot>${e.children}</template>
    </d-modal>
    <d-button
      @click="setShow(true)"
    >
    Toggle Modal
    </d-button>
  `}),"Template"),u=o(e=>({components:{DModal:n,DButton:l,DTextfield:a,DBox:c,DarkModeProvider:m,DAutoLayout:d},data:()=>({show:!1}),setup(){return{args:e}},methods:{setShow:function(t){this.show=t}},template:`
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
  `}),"DarkModeTemplate"),i=o(()=>{const e=u.bind({});return e.decorators=[()=>({template:'<div style="padding: 3em; background: #121A26;"><story /></div>'})],e},"DarkModeTemplateFactory"),b=r.bind({});b.args={heading:"Title",children:`
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
      `};const p=i();p.args={heading:"Title",children:`
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
      `};const y=r.bind({});y.args={heading:"Title",greyContent:!0,children:`
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
`};const h=i();h.args={heading:"Title",greyContent:!0,children:`
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
  `};const B=["Default","DarkDefault","GreyBody","DarkGreyBody"];export{p as DarkDefault,h as DarkGreyBody,b as Default,y as GreyBody,B as __namedExportsOrder,v as default};
//# sourceMappingURL=DModal.stories-c8bc7b2b.js.map
