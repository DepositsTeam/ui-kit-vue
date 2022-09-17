import DModal from "./DModal.vue";
import { DButton, DTextfield, DarkModeProvider } from "../main";

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
    heading: {
      control: { type: "text" },
    },
  },
};

const Template = (args) => ({
  components: {
    DModal,
    DButton,
    DTextfield,
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
  template: `
    <d-modal :show="show" @closeModal="setShow(false)" v-bind="args">
      <template v-slot>${args.children}</template>
    </d-modal>
    <d-button
      @click="setShow(true)"
    >
    Toggle Modal
    </d-button>
  `,
});

const DarkModeTemplate = (args) => ({
  components: {
    DModal,
    DButton,
    DTextfield,
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
  template: `
    <dark-mode-provider :dark-mode="true">
      <d-modal :show="show" @closeModal="setShow(false)" v-bind="args">
        <template v-slot>${args.children}</template>
      </d-modal>
      <d-button
        @click="setShow(true)"
      >
      Toggle Modal
      </d-button>
    </dark-mode-provider>
  `,
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
  children: `
    <div>
      <d-textfield width="900px" label="Form label" />
      <d-textfield label="Form label" />
      <d-textfield label="Form label" />
      <d-button responsive size="huge" colorScheme="primary" margin-top="2rem">
        Primary Button
      </d-button>
    </div>
      `,
};

export const DarkDefault = DarkModeTemplateFactory();

DarkDefault.args = {
  heading: "Title",
  children: `
    <div>
      <d-textfield width="900px" label="Form label" />
      <d-textfield label="Form label" />
      <d-textfield label="Form label" />
      <d-button responsive size="huge" colorScheme="primary" margin-top="2rem">
        Primary Button
      </d-button>
    </div>
      `,
};

export const GreyBody = Template.bind({});

GreyBody.args = {
  heading: "Title",
  greyContent: true,
  children: `
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
    </>
  `,
};

export const DarkGreyBody = DarkModeTemplateFactory();

DarkGreyBody.args = {
  heading: "Title",
  greyContent: true,
  children: `
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
    </>
  `,
};
