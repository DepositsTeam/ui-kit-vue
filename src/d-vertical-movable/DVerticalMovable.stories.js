import DVerticalMovable from "./DVerticalMovable.vue";
import {
  Tag2OutlineIcon,
  Receipt2OutlineIcon,
  CardsOutlineIcon,
  WalletOutlineIcon,
  AddUserIcon,
} from "@/main";

export default {
  title: "Vertical Movable",
  component: DVerticalMovable,
  argTypes: {
    selectedLists: {
      control: { type: "object" },
    },
    moreLists: {
      control: { type: "object" },
    },
  },
};

const Template = (args) => ({
  components: {
    DVerticalMovable,
  },
  setup() {
    return { args };
  },
  template: `
      <d-vertical-movable v-bind="args"/>`,
});

export const Default = Template.bind({});
Default.args = {
  selectedLists: {
    title: "Selected Options",
    items: [
      {
        id: 1,
        title: "Send money",
        icon: Tag2OutlineIcon,
        isAdded: false,
      },
      {
        id: 2,
        title: "New invoice",
        icon: Receipt2OutlineIcon,
        isAdded: false,
      },
      {
        id: 3,
        title: "New payment page",
        icon: CardsOutlineIcon,
        isAdded: false,
      },
      {
        id: 4,
        title: "Add customer",
        icon: WalletOutlineIcon,
        isAdded: false,
      },
      {
        id: 5,
        title: "Link bank / card",
        icon: AddUserIcon,
        isAdded: false,
      },
    ],
  },
  moreLists: {
    title: "more options",
    items: [
      {
        id: 6,
        title: "New subscription plan",
        icon: Tag2OutlineIcon,
        isAdded: false,
      },
      {
        id: 7,
        title: "Pay a bill",
        icon: Receipt2OutlineIcon,
        isAdded: false,
      },
      {
        id: 8,
        title: "Create new card",
        icon: CardsOutlineIcon,
        isAdded: false,
      },
      {
        id: 9,
        title: "Create new account",
        icon: WalletOutlineIcon,
        isAdded: false,
      },
      {
        id: 10,
        title: "Invite new team member",
        icon: AddUserIcon,
        isAdded: false,
      },
    ],
  },
};
