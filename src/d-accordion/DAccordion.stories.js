import DAccordion from "./DAccordion.vue";

export default {
  title: "Accordion",
  component: DAccordion,
  argTypes: {},
  tags: ["autodocs"],
};

const Template = (args) => ({
  components: { DAccordion },
  setup() {
    return { args };
  },
  template: `<d-accordion v-bind="args" />`,
});

const ContentTemplate = (args) => ({
  components: { DAccordion },
  setup() {
    return { args };
  },
  template: `<d-accordion v-bind="args">
  Some hidden content
</d-accordion>`,
});

export const Default = Template.bind({});
Default.args = {
  title: "Personal information verification",
};

export const Content = ContentTemplate.bind({});
Content.args = {
  title: "Personal information verification",
};

const SlotTestTemplate = (args) => ({
  components: { DAccordion },
  setup() {
    return { args };
  },
  template: `<d-accordion v-bind="args">
    <template #left-icon-inactive>
      Something for your mind
    </template>
  </d-accordion>`,
});

export const SlotTest = SlotTestTemplate.bind({});
SlotTest.args = {
  title: "Slot Test",
};
