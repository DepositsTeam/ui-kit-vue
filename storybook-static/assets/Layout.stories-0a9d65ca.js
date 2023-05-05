var l=Object.defineProperty;var n=(o,d)=>l(o,"name",{value:d,configurable:!0});import{O as e,P as t,Q as s,c as a}from"./DAccordion-747ca11f.js";import"./vue.esm-bundler-da4a8dbf.js";import"./iframe-03b5867e.js";const b={parameters:{storySource:{source:`import DResponsiveLayout from "./DResponsiveLayout.vue";
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
    <d-col :md="{span: 3}" >
      <d-box height="90px" background="black" width="100%">
      </d-box>
    </d-col>
    <d-col :md="{span: 3}" >
      <d-box height="90px" background="purple" width="100%">
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
`,locationsMap:{default:{startLoc:{col:17,line:12},endLoc:{col:2,line:29},startBody:{col:17,line:12},endBody:{col:2,line:29}},"equal-col":{startLoc:{col:20,line:33},endLoc:{col:2,line:55},startBody:{col:20,line:33},endBody:{col:2,line:55}}}}},title:"Layouts/Responsive Layout",component:e,argTypes:{}},r=n(o=>({components:{DResponsiveLayout:e,DRow:t,DCol:s},setup(){return{args:o}},template:`<d-responsive-layout debug-mode v-bind="args">
  <d-row>
    <d-col :xs="3" :sm="12">
      Some random item
    </d-col>
    <d-col :xs="9" :sm="12">
      Item begins here
    </d-col>
    
  </d-row>
  </d-responsive-layout>`}),"Template"),x=r.bind({}),p=n(o=>({components:{DResponsiveLayout:e,DCol:s,DRow:t,DBox:a},setup(){return{args:o}},template:`<d-responsive-layout debug-mode  v-bind="args">
  <d-row>
    <d-col :md="{span: 3}" >
      <d-box height="90px" background="black" width="100%">
      </d-box>
    </d-col>
    <d-col :md="{span: 3}" >
      <d-box height="90px" background="purple" width="100%">
      </d-box>
    </d-col>
    <d-col :xs="6">
      <d-box height="90px" background="blue" width="100%">
      </d-box>
    </d-col>
  </d-row>

  </d-responsive-layout>`}),"ColTemplate"),g=p.bind({}),y=["Default","EqualCol"];export{x as Default,g as EqualCol,y as __namedExportsOrder,b as default};
//# sourceMappingURL=Layout.stories-0a9d65ca.js.map
