import DAccordion from "./DAccordion.vue";

export default {
  title: "Accordion",
  component: DAccordion,
  argTypes: {},
};

const Template = (args) => ({
  components: { DAccordion },
  setup() {
    return { args };
  },
  template: `<d-accordion v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  title: "Personal information verification",
};

const SlotTestTemplate = (args) => ({
  components: { DAccordion },
  setup() {
    return { args };
  },
  template: `<d-accordion v-bind="args">
    <template #leftIcon-inactive>
      Something for your mind
    </template>
  </d-accordion>`,
});

export const SlotTest = SlotTestTemplate.bind({});
SlotTest.args = {
  title: "Slot Test",
};
