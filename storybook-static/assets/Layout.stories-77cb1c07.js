var d=Object.defineProperty;var e=(o,l)=>d(o,"name",{value:l,configurable:!0});import{N as n,O as t,P as s,c as a}from"./DAccordion-70812f94.js";import"./vue.esm-bundler-f42bdcc2.js";import"./iframe-87663d28.js";const b={parameters:{storySource:{source:`import DResponsiveLayout from "./DResponsiveLayout.vue";
import DCol from "./DCol.vue";
import DRow from "./DRow.vue";
import { DBox } from "../main";

export default {
  title: "Layouts/Responsive Layout",
  component: DResponsiveLayout,
  argTypes: {},
};

const Template = (args) => ({
  components: { DResponsiveLayout, DRow, DCol },
  setup() {
    return { args };
  },

  template: \`<d-responsive-layout debug-mode v-bind="args">
  <d-row>
    <d-col :xs="3" :sm="12">
      Some random item
    </d-col>
    <d-col :xs="9" :sm="12">
      Item begins here
    </d-col>
    
  </d-row>
  </d-responsive-layout>\`,
});

export const Default = Template.bind({});

const ColTemplate = (args) => ({
  components: { DResponsiveLayout, DCol, DRow, DBox },
  setup() {
    return { args };
  },
  template: \`<d-responsive-layout debug-mode  v-bind="args">
  <d-row>
    <d-col :xs="{span: 3, offset: 3}" >
      <d-box height="90px" background="black" width="100%">
      </d-box>
    </d-col>
    <d-col :xs="6">
      <d-box height="90px" background="blue" width="100%">
      </d-box>
    </d-col>
  </d-row>

  </d-responsive-layout>\`,
});

export const EqualCol = ColTemplate.bind({});
`,locationsMap:{default:{startLoc:{col:17,line:12},endLoc:{col:2,line:29},startBody:{col:17,line:12},endBody:{col:2,line:29}},"equal-col":{startLoc:{col:20,line:33},endLoc:{col:2,line:51},startBody:{col:20,line:33},endBody:{col:2,line:51}}}}},title:"Layouts/Responsive Layout",component:n,argTypes:{}},r=e(o=>({components:{DResponsiveLayout:n,DRow:t,DCol:s},setup(){return{args:o}},template:`<d-responsive-layout debug-mode v-bind="args">
  <d-row>
    <d-col :xs="3" :sm="12">
      Some random item
    </d-col>
    <d-col :xs="9" :sm="12">
      Item begins here
    </d-col>
    
  </d-row>
  </d-responsive-layout>`}),"Template"),x=r.bind({}),i=e(o=>({components:{DResponsiveLayout:n,DCol:s,DRow:t,DBox:a},setup(){return{args:o}},template:`<d-responsive-layout debug-mode  v-bind="args">
  <d-row>
    <d-col :xs="{span: 3, offset: 3}" >
      <d-box height="90px" background="black" width="100%">
      </d-box>
    </d-col>
    <d-col :xs="6">
      <d-box height="90px" background="blue" width="100%">
      </d-box>
    </d-col>
  </d-row>

  </d-responsive-layout>`}),"ColTemplate"),y=i.bind({}),g=["Default","EqualCol"];export{x as Default,y as EqualCol,g as __namedExportsOrder,b as default};
//# sourceMappingURL=Layout.stories-77cb1c07.js.map
