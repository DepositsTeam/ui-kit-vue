import DModal from "./DModal.vue";
import DButton from "../d-button/DButton.vue";
import DTextfield from "../d-textfield/DTextfield.vue";

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
    DTextfield
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

export const Default = Template.bind({});

Default.args = {
  heading: "Title",
  children: `
    <div>
      <d-textfield width="900px" label="Form label" />
      <d-textfield label="Form label" />
      <d-textfield label="Form label" />
      <d-button responsive size="huge" colorScheme="primary" margin-top="2rem>
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
