import DAvatar from "./DAvatar.vue";

export default {
  title: "Avatar",
  component: DAvatar,
  argTypes: {
    subtle: {
      control: { type: "boolean" },
    },
    stacked: {
      control: { type: "boolean" },
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    avatar: {
      control: { type: "object" },
    },
    avatars: {
      control: { type: "object" },
    },
    dropDown: {
      control: { type: "boolean" },
    },
    visibleAvatars: {
      control: { type: "number" },
    },
  },
};

const Template = (args) => ({
  components: { DAvatar },
  setup() {
    return { args };
  },
  template: `<d-avatar v-bind="args" />`,
});

export const SubtleLargeAvatars = Template.bind({});
SubtleLargeAvatars.args = {
  subtle: true,
  avatars: [
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
      imgURL:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/242107088_4173627519426881_5983806533700593233_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=fCYdyTSZ2O0AX-cL--J&_nc_ht=scontent-los2-1.xx&oh=00_AT_B0QyvGgFgYNygC16ovQYHLjLMfcpLc_gY6k_xS_rrvA&oe=61F72E6C",
    },
  ],
};

export const SubtleMediumAvatars = Template.bind({});
SubtleMediumAvatars.args = {
  subtle: true,
  size: "medium",
  avatars: [
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
      imgURL:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/242107088_4173627519426881_5983806533700593233_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=fCYdyTSZ2O0AX-cL--J&_nc_ht=scontent-los2-1.xx&oh=00_AT_B0QyvGgFgYNygC16ovQYHLjLMfcpLc_gY6k_xS_rrvA&oe=61F72E6C",
    },
  ],
};

export const SubtleSmallAvatars = Template.bind({});
SubtleSmallAvatars.args = {
  subtle: true,
  size: "small",
  avatars: [
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
      imgURL:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/242107088_4173627519426881_5983806533700593233_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=fCYdyTSZ2O0AX-cL--J&_nc_ht=scontent-los2-1.xx&oh=00_AT_B0QyvGgFgYNygC16ovQYHLjLMfcpLc_gY6k_xS_rrvA&oe=61F72E6C",
    },
  ],
};

export const SubtleCyan = Template.bind({});
SubtleCyan.args = {
  subtle: true,
  avatar: {
    colorScheme: "cyan",
    name: "Charles Ukpe",
  },
};
SubtleCyan.storyName = "Subtle Cyan";

export const SubtleGreen = Template.bind({});
SubtleGreen.args = {
  subtle: true,
  avatar: {
    colorScheme: "green",
    name: "Steven Taliban",
  },
};
SubtleGreen.storyName = "Subtle Green";

export const SubtleOrange = Template.bind({});
SubtleOrange.args = {
  subtle: true,
  avatar: {
    colorScheme: "orange",
    name: "John Doe",
  },
};
SubtleOrange.storyName = "Subtle Orange";

export const SubtleRed = Template.bind({});
SubtleRed.args = {
  subtle: true,
  avatar: {
    colorScheme: "red",
    name: "Cynthia Karen",
  },
};
SubtleRed.storyName = "Subtle Red";

export const SubtleGray = Template.bind({});
SubtleGray.args = {
  subtle: true,
  avatar: {
    colorScheme: "gray",
    name: "Yasmine Belle Deuce",
  },
};
SubtleGray.storyName = "Subtle Gray";

export const SubtleBlue = Template.bind({});
SubtleBlue.args = {
  subtle: true,
  avatar: {
    colorScheme: "blue",
    name: "Steven Taliban",
  },
};
SubtleBlue.storyName = "Subtle Blue";

export const Cyan = Template.bind({});
Cyan.args = {
  avatar: {
    colorScheme: "cyan",
    name: "Charles Ukpe",
  },
};
Cyan.storyName = "Solid Cyan";

export const Green = Template.bind({});
Green.args = {
  avatar: {
    colorScheme: "green",
    name: "Steven Taliban",
  },
};
Green.storyName = "Solid Green";

export const Orange = Template.bind({});
Orange.args = {
  avatar: {
    colorScheme: "orange",
    name: "John Doe",
  },
};
Orange.storyName = "Solid Orange";

export const Red = Template.bind({});
Red.args = {
  avatar: {
    colorScheme: "orange",
    name: "Cynthia Karen",
  },
};
Red.storyName = "Solid Red";

export const Gray = Template.bind({});
Gray.args = {
  avatar: {
    colorScheme: "gray",
    name: "Yasmine Belle Deuce",
  },
};
Gray.storyName = "Solid Gray";

export const Blue = Template.bind({});
Blue.args = {
  avatar: {
    colorScheme: "blue",
    name: "Steven Taliban",
  },
};
Blue.storyName = "Solid Blue";

export const CyanStatusGreen = Template.bind({});
CyanStatusGreen.args = {
  avatar: {
    colorScheme: "cyan",
    name: "Charles Ukpe",
    status: "green",
  },
};

export const CyanStatusOrange = Template.bind({});
CyanStatusOrange.args = {
  avatar: {
    colorScheme: "cyan",
    name: "Charles Ukpe",
    status: "orange",
  },
};

export const CyanStatusGray = Template.bind({});
CyanStatusGray.args = {
  avatar: {
    colorScheme: "cyan",
    name: "Charles Ukpe",
    status: "gray",
  },
};

export const ImageAvatar = Template.bind({});
ImageAvatar.args = {
  avatar: {
    imgURL: "https://assets.deposits.com/img/ui-kit-demo/avatar/lady1.png",
  },
};

export const ImageAvatarStatus = Template.bind({});
ImageAvatarStatus.args = {
  avatar: {
    imgURL: "https://assets.deposits.com/img/ui-kit-demo/avatar/lady1.png",
    status: "green",
  },
};
