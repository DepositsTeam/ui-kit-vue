import DRadioCard from "./DRadioCard.vue";
import { CardIcon } from "../main";

export default {
  title: "Forms/Radio Card",
  component: DRadioCard,
  argTypes: {},
};

const Template = (args) => ({
  components: { DRadioCard, CardIcon },
  data: () => ({
    value: "",
  }),
  setup() {
    return { args };
  },
  template: `<d-radio-card v-model="value" value="value" v-bind="args">
  <template #icon>
    <card-icon />
  </template>
  </d-radio-card>
  <p>Radio value is: {{value}}</p>
  `,
});

export const Default = Template.bind({});
Default.args = {
  heading: "Card",
  description: "Add your debit / credit card information",
};
