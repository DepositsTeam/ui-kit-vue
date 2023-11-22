import DVerticalMovable from "./DVerticalMovable.vue";
import DAutoLayout from "@/d-auto-layout/DAutoLayout.vue";
import DQuickTool from "@/d-quick-tool/DQuickTool.vue";
import {
  Tag2OutlineIcon,
  Receipt2OutlineIcon,
  CardsOutlineIcon,
  WalletOutlineIcon,
  AddUserIcon,
} from "@/main";

export default {
  components: { DQuickTool },
  title: "Vertical Movable",
  component: DVerticalMovable,
  argTypes: {
    list: {
      control: { type: "object" },
    },
  },
};

const Template = (args) => ({
  components: {
    DVerticalMovable,
  },
  data: () => ({
    list: [
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
  }),
  watch: {
    list: function (value) {
      console.log("New value is", value);
    },
  },
  setup() {
    return { args };
  },
  template: `
      <d-vertical-movable v-bind="args" v-model="list"/>`,
});

export const Default = Template.bind({});

const MoreListsTemplate = (args) => ({
  setup() {
    return { args };
  },
  data: () => ({
    list: [
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
    secondList: [
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
  }),
  components: {
    DVerticalMovable,
    DAutoLayout,
    DQuickTool,
  },
  template: `
    <d-auto-layout direction="vertical">
      <d-vertical-movable name="options" title="Selected options" v-model="list">
        <template #drag-item="element">
          <d-quick-tool :title="element.title" :icon="element.icon" is-added />
        </template>
      </d-vertical-movable>
      <d-vertical-movable name="options" title="More options" v-model="secondList">
        <template #drag-item="element">
          <d-quick-tool :title="element.title" :icon="element.icon" />
        </template>
      </d-vertical-movable>
    </d-auto-layout>
  `,
});

Default.args = {
  title: "Selected Options",
};

export const MultipleMoveable = MoreListsTemplate.bind({});
