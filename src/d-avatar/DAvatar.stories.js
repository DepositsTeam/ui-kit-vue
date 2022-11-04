import DAvatar from "./DAvatar.vue";
import DarkModeProvider from "../providers/DarkModeProvider.vue";

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

const DarkModeTemplate = (args) => ({
  components: { DAvatar, DarkModeProvider },
  setup() {
    return { args };
  },
  template: `<dark-mode-provider :dark-mode="true"><d-avatar v-bind="args" /></dark-mode-provider>`,
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
      imgURL: "https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png",
    },
  ],
};

export const SubtleDarkLargeAvatars = DarkModeTemplateFactory();
SubtleDarkLargeAvatars.args = {
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
      imgURL: "https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png",
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
      imgURL: "https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png",
    },
  ],
};

export const SubtleDarkMediumAvatars = DarkModeTemplateFactory();
SubtleDarkMediumAvatars.args = {
  subtle: true,
  size: "medium",
  avatars: [
    {
      status: "grey",
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
      imgURL: "https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png",
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
      imgURL: "https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png",
    },
  ],
};

export const SubtleDarkSmallAvatars = DarkModeTemplateFactory();
SubtleDarkSmallAvatars.args = {
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
      imgURL: "https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png",
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

export const SubtleDarkCyan = DarkModeTemplateFactory();
SubtleDarkCyan.args = {
  subtle: true,
  avatar: {
    colorScheme: "cyan",
    name: "Charles Ukpe",
  },
};

export const SubtleGreen = Template.bind({});
SubtleGreen.args = {
  subtle: true,
  avatar: {
    colorScheme: "green",
    name: "Steven Taliban",
  },
};

export const SubtleDarkGreen = DarkModeTemplateFactory();
SubtleDarkGreen.args = {
  subtle: true,
  avatar: {
    colorScheme: "green",
    name: "Steven Taliban",
  },
};

export const SubtleOrange = Template.bind({});
SubtleOrange.args = {
  subtle: true,
  avatar: {
    colorScheme: "orange",
    name: "John Doe",
  },
};

export const SubtleDarkOrange = DarkModeTemplateFactory();
SubtleDarkOrange.args = {
  subtle: true,
  avatar: {
    colorScheme: "orange",
    name: "John Doe",
  },
};

export const SubtleRed = Template.bind({});
SubtleRed.args = {
  subtle: true,
  avatar: {
    colorScheme: "red",
    name: "Cynthia Karen",
  },
};

export const SubtleDarkRed = DarkModeTemplateFactory();
SubtleDarkRed.args = {
  subtle: true,
  avatar: {
    colorScheme: "red",
    name: "Cynthia Karen",
  },
};

export const SubtleGray = Template.bind({});
SubtleGray.args = {
  subtle: true,
  avatar: {
    colorScheme: "gray",
    name: "Yasmine Belle Deuce",
  },
};

export const SubtleDarkGray = DarkModeTemplateFactory();
SubtleDarkGray.args = {
  subtle: true,
  avatar: {
    colorScheme: "gray",
    name: "Yasmine Belle Deuce",
  },
};

export const SubtleBlue = Template.bind({});
SubtleBlue.args = {
  subtle: true,
  avatar: {
    colorScheme: "blue",
    name: "Steven Taliban",
  },
};

export const SubtleDarkBlue = DarkModeTemplateFactory();
SubtleDarkBlue.args = {
  subtle: true,
  avatar: {
    colorScheme: "blue",
    name: "Steven Taliban",
  },
};

export const Cyan = Template.bind({});
Cyan.args = {
  avatar: {
    colorScheme: "cyan",
    name: "Charles Ukpe",
  },
};
Cyan.storyName = "Solid Cyan";

export const DarkCyan = DarkModeTemplateFactory();
DarkCyan.args = {
  avatar: {
    colorScheme: "cyan",
    name: "Charles Ukpe",
  },
};
DarkCyan.storyName = "Solid Cyan Dark";

export const Green = Template.bind({});
Green.args = {
  avatar: {
    colorScheme: "green",
    name: "Steven Taliban",
  },
};
Green.storyName = "Solid Green";

export const DarkGreen = DarkModeTemplateFactory();
DarkGreen.args = {
  avatar: {
    colorScheme: "green",
    name: "Steven Taliban",
  },
};
DarkGreen.storyName = "Solid Green Dark";

export const Orange = Template.bind({});
Orange.args = {
  avatar: {
    colorScheme: "orange",
    name: "John Doe",
  },
};
Orange.storyName = "Solid Orange";

export const DarkOrange = DarkModeTemplateFactory();
DarkOrange.args = {
  avatar: {
    colorScheme: "orange",
    name: "John Doe",
  },
};
DarkOrange.storyName = "Solid Orange Dark";

export const Red = Template.bind({});
Red.args = {
  avatar: {
    colorScheme: "orange",
    name: "Cynthia Karen",
  },
};
Red.storyName = "Solid Red";

export const DarkRed = DarkModeTemplateFactory();
DarkRed.args = {
  avatar: {
    colorScheme: "orange",
    name: "Cynthia Karen",
  },
};
DarkRed.storyName = "Solid Red Dark";

export const Gray = Template.bind({});
Gray.args = {
  avatar: {
    colorScheme: "gray",
    name: "Yasmine Belle Deuce",
  },
};
Gray.storyName = "Solid Gray";

export const DarkGray = DarkModeTemplateFactory();
DarkGray.args = {
  avatar: {
    colorScheme: "gray",
    name: "Yasmine Belle Deuce",
  },
};
DarkGray.storyName = "Solid Gray Dark";

export const Blue = Template.bind({});
Blue.args = {
  avatar: {
    colorScheme: "blue",
    name: "Steven Taliban",
  },
};
Blue.storyName = "Solid Blue";

export const DarkBlue = DarkModeTemplateFactory();
DarkBlue.args = {
  avatar: {
    colorScheme: "blue",
    name: "Steven Taliban",
  },
};
DarkBlue.storyName = "Solid Blue Dark";

export const CyanStatusGreen = Template.bind({});
CyanStatusGreen.args = {
  avatar: {
    colorScheme: "cyan",
    name: "Charles Ukpe",
    status: "green",
  },
};

export const DarkCyanStatusGreen = DarkModeTemplateFactory();
DarkCyanStatusGreen.args = {
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

export const DarkCyanStatusOrange = DarkModeTemplateFactory();
DarkCyanStatusOrange.args = {
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

export const DarkCyanStatusGray = DarkModeTemplateFactory();
DarkCyanStatusGray.args = {
  avatar: {
    colorScheme: "cyan",
    name: "Charles Ukpe",
    status: "gray",
  },
};

export const ImageAvatar = Template.bind({});
ImageAvatar.args = {
  avatar: {
    imgURL: "https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png",
  },
};

export const DarkImageAvatar = DarkModeTemplateFactory();
DarkImageAvatar.args = {
  avatar: {
    imgURL: "https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png",
  },
};

export const ImageAvatarStatus = Template.bind({});
ImageAvatarStatus.args = {
  avatar: {
    imgURL: "https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png",
    status: "green",
  },
};

export const DarkImageAvatarStatus = DarkModeTemplateFactory();
DarkImageAvatarStatus.args = {
  avatar: {
    imgURL: "https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png",
    status: "green",
  },
};
