import DResponsiveLayout from "./DResponsiveLayout.vue";
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

  template: `<d-responsive-layout debug-mode v-bind="args">
  <d-row>
    <d-col :md="3">
      Some random item
    </d-col>
    <d-col :md="9">
      Item begins here
    </d-col>
    
  </d-row>
  </d-responsive-layout>`,
});

export const Default = Template.bind({});

const ColTemplate = (args) => ({
  components: { DResponsiveLayout, DCol, DRow, DBox },
  setup() {
    return { args };
  },
  template: `<d-responsive-layout debug-mode  v-bind="args">
  <d-row>
    <d-col :xs="{span: 3, offset: 3}">
      <d-box height="90px" background="black" width="100%">
      </d-box>
    </d-col>
    <d-col :xs="6" >
      <d-box height="90px" background="blue" width="100%">
      </d-box>
    </d-col>
  </d-row>

  </d-responsive-layout>`,
});

export const EqualCol = ColTemplate.bind({});
