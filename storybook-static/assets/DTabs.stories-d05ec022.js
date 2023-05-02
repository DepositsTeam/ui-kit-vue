var o=Object.defineProperty;var t=(n,e)=>o(n,"name",{value:e,configurable:!0});import{U as a,c as d,j as r,l as s,_ as i}from"./DAccordion-21edd2a5.js";import"./vue.esm-bundler-da4a8dbf.js";import"./iframe-de61a4b2.js";const D={parameters:{storySource:{source:`import DTabs from "./DTabs.vue";
import { DarkModeProvider, DBox, DText, DCard } from "../main";

export default {
  title: "Tabs",
  component: DTabs,
  argTypes: {
    tabs: {
      control: { type: "object" },
    },
    horizontal: {
      control: { type: "boolean" },
    },
    spacing: {
      control: { type: "text" },
    },
    initiallyActive: {
      control: { type: "text" },
    },
    inline: {
      control: { type: "boolean" },
    },
    scheme: {
      control: { type: "select" },
      options: ["button", "underline", "inline"],
    },
  },
};

const Template = (args) => ({
  components: {
    DTabs,
  },
  setup() {
    return { args };
  },
  template: \`<d-tabs v-bind="args" />\`,
});

const DarkModeTemplate = (args) => ({
  components: {
    DTabs,
    DarkModeProvider,
  },
  setup() {
    return { args };
  },
  template: \`
    <dark-mode-provider :dark-mode="true">
      <d-tabs v-bind="args" />
    </dark-mode-provider>
  \`,
});

const DarkModeTemplateFactory = (Template = null) => {
  const Bound = Template ? Template.bind({}) : DarkModeTemplate.bind({});
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
  tabs: [
    {
      text: "Tab 1",
      href: "#",
    },
    {
      text: "Tab 2",
      href: "#",
    },
    {
      text: "Tab 3",
      href: "#",
    },
    {
      text: "Tab 4",
      href: "#",
    },
    {
      text: "Tab 5 (Disabled)",
      disabled: true,
    },
  ],
};

export const DarkDefault = DarkModeTemplateFactory();
DarkDefault.args = {
  tabs: [
    {
      text: "Test link",
      href: "#",
    },
    {
      text: "Test link",
      href: "#",
    },
    {
      text: "Test link",
      href: "#",
    },
    {
      text: "Test link",
      href: "#",
    },
    {
      text: "Test link",
      href: "#",
    },
  ],
};

const TemplateWithContent = (args) => ({
  components: {
    DTabs,
    DBox,
    DText,
    DCard,
  },
  data: () => ({
    activeTabIndex: 0,
    tabs: [
      {
        text: "Tab 1",
        href: "#",
      },
      {
        text: "Tab 2",
        href: "#",
      },
      {
        text: "Tab 3",
        href: "#",
      },
      {
        text: "Tab 4",
        href: "#",
      },
      {
        text: "Tab 5 (Disabled)",
        href: "#",
        disabled: true,
      },
    ],
  }),
  setup() {
    return { args };
  },
  template: \`
    <d-box>
    <d-tabs v-bind="args" v-model="activeTabIndex" :tabs="tabs" />
    <d-box v-if="activeTabIndex === 0">
      <d-card>
        <d-text>
          First set of content
        </d-text>
      </d-card>
    </d-box>
    <d-box v-if="activeTabIndex === 1">
      <d-card>
        <d-text>
          Second set of content
        </d-text>
      </d-card>
    </d-box>
    <d-box v-if="activeTabIndex === 2">
      <d-card>
        <d-text>
          Third set of content
        </d-text>
      </d-card>
    </d-box>
    <d-box v-if="activeTabIndex === 3">
      <d-card>
        <d-text>
          Fourth set of content
        </d-text>
      </d-card>
    </d-box>
    
    </d-box>
    <d-text>Active Tab Index: {{activeTabIndex}}</d-text>
  \`,
});

export const SampleWithContent = TemplateWithContent.bind({});

const DarkModeTemplateWithContent = (args) => ({
  components: {
    DTabs,
    DarkModeProvider,
  },
  data: () => ({
    selectedTabIndex: 0,
  }),
  setup() {
    return { args };
  },
  template: \`
    <dark-mode-provider :dark-mode="true">
      <d-tabs v-bind="args" v-model="selectedTabIndex"  />
    </dark-mode-provider>
  \`,
});
`,locationsMap:{default:{startLoc:{col:17,line:30},endLoc:{col:2,line:38},startBody:{col:17,line:30},endBody:{col:2,line:38}},"dark-default":{startLoc:{col:27,line:92},endLoc:{col:52,line:92},startBody:{col:27,line:92},endBody:{col:52,line:92}},"sample-with-content":{startLoc:{col:28,line:118},endLoc:{col:2,line:189},startBody:{col:28,line:118},endBody:{col:2,line:189}}}}},title:"Tabs",component:a,argTypes:{tabs:{control:{type:"object"}},horizontal:{control:{type:"boolean"}},spacing:{control:{type:"text"}},initiallyActive:{control:{type:"text"}},inline:{control:{type:"boolean"}},scheme:{control:{type:"select"},options:["button","underline","inline"]}}},l=t(n=>({components:{DTabs:a},setup(){return{args:n}},template:'<d-tabs v-bind="args" />'}),"Template"),c=t(n=>({components:{DTabs:a,DarkModeProvider:i},setup(){return{args:n}},template:`
    <dark-mode-provider :dark-mode="true">
      <d-tabs v-bind="args" />
    </dark-mode-provider>
  `}),"DarkModeTemplate"),b=t((n=null)=>{const e=n?n.bind({}):c.bind({});return e.decorators=[()=>({template:'<div style="padding: 3em; background: #121A26;"><story /></div>'})],e},"DarkModeTemplateFactory"),x=l.bind({});x.args={tabs:[{text:"Tab 1",href:"#"},{text:"Tab 2",href:"#"},{text:"Tab 3",href:"#"},{text:"Tab 4",href:"#"},{text:"Tab 5 (Disabled)",disabled:!0}]};const p=b();p.args={tabs:[{text:"Test link",href:"#"},{text:"Test link",href:"#"},{text:"Test link",href:"#"},{text:"Test link",href:"#"},{text:"Test link",href:"#"}]};const T=t(n=>({components:{DTabs:a,DBox:d,DText:r,DCard:s},data:()=>({activeTabIndex:0,tabs:[{text:"Tab 1",href:"#"},{text:"Tab 2",href:"#"},{text:"Tab 3",href:"#"},{text:"Tab 4",href:"#"},{text:"Tab 5 (Disabled)",href:"#",disabled:!0}]}),setup(){return{args:n}},template:`
    <d-box>
    <d-tabs v-bind="args" v-model="activeTabIndex" :tabs="tabs" />
    <d-box v-if="activeTabIndex === 0">
      <d-card>
        <d-text>
          First set of content
        </d-text>
      </d-card>
    </d-box>
    <d-box v-if="activeTabIndex === 1">
      <d-card>
        <d-text>
          Second set of content
        </d-text>
      </d-card>
    </d-box>
    <d-box v-if="activeTabIndex === 2">
      <d-card>
        <d-text>
          Third set of content
        </d-text>
      </d-card>
    </d-box>
    <d-box v-if="activeTabIndex === 3">
      <d-card>
        <d-text>
          Fourth set of content
        </d-text>
      </d-card>
    </d-box>
    
    </d-box>
    <d-text>Active Tab Index: {{activeTabIndex}}</d-text>
  `}),"TemplateWithContent"),h=T.bind({}),k=["Default","DarkDefault","SampleWithContent"];export{p as DarkDefault,x as Default,h as SampleWithContent,k as __namedExportsOrder,D as default};
//# sourceMappingURL=DTabs.stories-d05ec022.js.map
