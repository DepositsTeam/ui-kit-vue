import DTransactionTimeline from "./DTransactionTimeline.vue";

export default {
  component: DTransactionTimeline,
  title: "Transaction Timeline",
  tags: ["autodocs"],
  argTypes: {
    timeline: {
      control: { type: "object" },
    },
    currentStep: {
      control: { type: "number" },
    },
  },
};

const Template = (args) => ({
  components: { DTransactionTimeline },
  setup() {
    return { args };
  },
  template: `<d-transaction-timeline v-bind="args" />`,
});

export const Active = Template.bind({});
Active.args = {
  timeline: [
    {
      text: "Initiated a transfer from Joseph",
      description: "February 21, 2024 at 5:22 PM",
      status: "completed",
    },
    {
      text: "We received $540 from Joseph to you...",
      description: "February 21, 2024 at 5:22 PM",
      status: "active",
    },
    {
      text: "We received $540 from Joseph to you...",
      description: "February 21, 2024 at 5:22 PM",
    },
    {
      text: "We received $540 from Joseph to you...",
      description: "February 21, 2024 at 5:22 PM",
    },
    {
      text: "We received $540 from Joseph to you...",
      description: "February 21, 2024 at 5:22 PM",
    },
  ],
};

export const Successful = Template.bind({});
Successful.args = {
  timeline: [
    {
      text: "Initiated a transfer from Joseph",
      description: "February 21, 2024 at 5:22 PM",
      status: "completed",
    },
    {
      text: "We received $540 from Joseph to you...",
      description: "February 21, 2024 at 5:22 PM",
      status: "completed",
    },
    {
      text: "We received $540 from Joseph to you...",
      description: "February 21, 2024 at 5:22 PM",
      status: "completed",
    },
    {
      text: "We received $540 from Joseph to you...",
      description: "February 21, 2024 at 5:22 PM",
      status: "successful",
    },
  ],
};

export const Failed = Template.bind({});
Failed.args = {
  timeline: [
    {
      text: "Initiated a transfer from Joseph",
      description: "February 21, 2024 at 5:22 PM",
      status: "completed",
    },
    {
      text: "We received $540 from Joseph to you...",
      description: "February 21, 2024 at 5:22 PM",
      status: "completed",
    },
    {
      text: "We received $540 from Joseph to you...",
      description: "February 21, 2024 at 5:22 PM",
      status: "completed",
    },
    {
      text: "We received $540 from Joseph to you...",
      description: "February 21, 2024 at 5:22 PM",
      status: "failed",
    },
  ],
};

export const Pending = Template.bind({});
Pending.args = {
  timeline: [
    {
      text: "Initiated a transfer from Joseph",
      description: "February 21, 2024 at 5:22 PM",
      status: "completed",
    },
    {
      text: "We received $540 from Joseph to you...",
      description: "February 21, 2024 at 5:22 PM",
      status: "completed",
    },
    {
      text: "We received $540 from Joseph to you...",
      description: "February 21, 2024 at 5:22 PM",
      status: "completed",
    },
    {
      text: "We received $540 from Joseph to you...",
      description: "February 21, 2024 at 5:22 PM",
      status: "pending",
    },
  ],
};
