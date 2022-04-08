import Color from "./Color.vue";

export default {
  title: "Color",
  component: Color,
  argTypes: {
    colorName: {
      control: { type: "text" },
    },
    colorCode: {
      control: { type: "text" },
    },
    textColor: {
      control: { type: "text" },
    },
    colors: {
      control: { type: "object" },
    },
  },
};

const Template = (args) => ({
  components: {
    Color,
  },
  setup() {
    return { args };
  },
  template: `<color v-bind="args" />`,
});

export const Cyan = Template.bind({});
Cyan.args = {
  colors: [
    {
      colorName: "Cyan 100",
      colorCode: "#F2FAFC",
    },
    {
      colorName: "Cyan 200",
      colorCode: "#BDF3FC",
    },
    {
      colorName: "Cyan 300",
      colorCode: "#75E2FA",
    },
    {
      colorName: "Cyan 400",
      colorCode: "#43D2FA",
    },
    {
      colorName: "Cyan 500",
      colorCode: "#0DB9E9",
    },
    {
      colorName: "Cyan 600",
      colorCode: "#0C9CCC",
    },
    {
      colorName: "Cyan 700",
      colorCode: "#0B87B0",
      textColor: "white",
    },
    {
      colorName: "Cyan 800",
      colorCode: "#085E7A",
      textColor: "white",
    },
    {
      colorName: "Cyan 900",
      colorCode: "#094357",
      textColor: "white",
    },
  ],
};

export const Green = Template.bind({});
Green.args = {
  colors: [
    {
      colorName: "Green 100",
      colorCode: "#EDFFF9",
    },
    {
      colorName: "Green 200",
      colorCode: "#C4EFDF",
    },
    {
      colorName: "Green 300",
      colorCode: "#9BDFC4",
    },
    {
      colorName: "Green 400",
      colorCode: "#71D0A7",
    },
    {
      colorName: "Green 500",
      colorCode: "#27C079",
    },
    {
      colorName: "Green 600",
      colorCode: "#00B058",
    },
    {
      colorName: "Green 700",
      colorCode: "#158957",
    },
    {
      colorName: "Green 800",
      colorCode: "#1F624A",
      textColor: "white",
    },
    {
      colorName: "Green 900",
      colorCode: "#1D3B32",
      textColor: "white",
    },
  ],
};

export const Orange = Template.bind({});
Orange.args = {
  colors: [
    {
      colorName: "Orange 100",
      colorCode: "#FFF8F0",
    },
    {
      colorName: "Orange 200",
      colorCode: "#FFF0DB",
    },
    {
      colorName: "Orange 300",
      colorCode: "#FFE5C2",
    },
    {
      colorName: "Orange 400",
      colorCode: "#FFD49B",
    },
    {
      colorName: "Orange 500",
      colorCode: "#FFB44F",
    },
    {
      colorName: "Orange 600",
      colorCode: "#FF9505",
    },
    {
      colorName: "Orange 700",
      colorCode: "#E08304",
    },
    {
      colorName: "Orange 800",
      colorCode: "#995A06",
      textColor: "white",
    },
    {
      colorName: "Orange 900",
      colorCode: "#573302",
      textColor: "white",
    },
  ],
};

export const Red = Template.bind({});
Red.args = {
  colors: [
    {
      colorName: "Red 100",
      colorCode: "#FFF0F2",
    },
    {
      colorName: "Red 200",
      colorCode: "#FCC5CE",
    },
    {
      colorName: "Red 300",
      colorCode: "#F99BAB",
    },
    {
      colorName: "Red 400",
      colorCode: "#E85E75",
    },
    {
      colorName: "Red 500",
      colorCode: "#D62F4B",
      textColor: "white",
    },
    {
      colorName: "Red 600",
      colorCode: "#AD283D",
      textColor: "white",
    },
    {
      colorName: "Red 700",
      colorCode: "#842432",
      textColor: "white",
    },
    {
      colorName: "Red 800",
      colorCode: "#5C1E27",
      textColor: "white",
    },
    {
      colorName: "Red 900",
      colorCode: "#331418",
      textColor: "white",
    },
  ],
};

export const Blue = Template.bind({});
Blue.args = {
  colors: [
    {
      colorName: "Blue 100",
      colorCode: "#F7FBFF",
    },
    {
      colorName: "Blue 200",
      colorCode: "#DDEFFF",
    },
    {
      colorName: "Blue 300",
      colorCode: "#ACD7FF",
    },
    {
      colorName: "Blue 400",
      colorCode: "#62B2FD",
    },
    {
      colorName: "Blue 500",
      colorCode: "#0D7FE9",
    },
    {
      colorName: "Blue 600",
      colorCode: "#0059AC",
      textColor: "white",
    },
    {
      colorName: "Blue 700",
      colorCode: "#003F79",
      textColor: "white",
    },
    {
      colorName: "Blue 800",
      colorCode: "#022A50",
      textColor: "white",
    },
    {
      colorName: "Blue 900",
      colorCode: "#051B30",
      textColor: "white",
    },
  ],
};

export const Cyan100 = Template.bind({});
Cyan100.args = {
  colorName: "Cyan 100",
  colorCode: "#F2FAFC",
};

Cyan100.storyName = "Cyan 100";

export const Cyan200 = Template.bind({});
Cyan200.args = {
  colorName: "Cyan 200",
  colorCode: "#BDF3FC",
};
Cyan200.storyName = "Cyan 200";

export const Cyan300 = Template.bind({});
Cyan300.args = {
  colorName: "Cyan 300",
  colorCode: "#75E2FA",
};
Cyan300.storyName = "Cyan 300";

export const Cyan400 = Template.bind({});
Cyan400.args = {
  colorName: "Cyan 400",
  colorCode: "#43D2FA",
};
Cyan400.storyName = "Cyan 400";

export const Cyan500 = Template.bind({});
Cyan500.args = {
  colorName: "Cyan 500",
  colorCode: "#0DB9E9",
};
Cyan500.storyName = "Cyan 500";

export const Cyan600 = Template.bind({});
Cyan600.args = {
  colorName: "Cyan 600",
  colorCode: "#0C9CCC",
};
Cyan600.storyName = "Cyan 600";

export const Cyan700 = Template.bind({});
Cyan700.args = {
  colorName: "Cyan 700",
  colorCode: "#0B87B0",
  textColor: "white",
};
Cyan700.storyName = "Cyan 700";

export const Cyan800 = Template.bind({});
Cyan800.args = {
  colorName: "Cyan 800",
  colorCode: "#085E7A",
  textColor: "white",
};
Cyan800.storyName = "Cyan 800";

export const Cyan900 = Template.bind({});
Cyan900.args = {
  colorName: "Cyan 900",
  colorCode: "#094357",
  textColor: "white",
};
Cyan900.storyName = "Cyan 900";

export const Green100 = Template.bind({});
Green100.args = {
  colorName: "Green 100",
  colorCode: "#EDFFF9",
};
Green100.storyName = "Green 100";

export const Green200 = Template.bind({});
Green200.args = {
  colorName: "Green 200",
  colorCode: "#C4EFDF",
};
Green200.storyName = "Green 200";

export const Green300 = Template.bind({});
Green300.args = {
  colorName: "Green 300",
  colorCode: "#9BDFC4",
};
Green300.storyName = "Green 300";

export const Green400 = Template.bind({});
Green400.args = {
  colorName: "Green 400",
  colorCode: "#71D0A7",
};
Green400.storyName = "Green 400";

export const Green500 = Template.bind({});
Green500.args = {
  colorName: "Green 500",
  colorCode: "#27C079",
};
Green500.storyName = "Green 500";

export const Green600 = Template.bind({});
Green600.args = {
  colorName: "Green 600",
  colorCode: "#00B058",
};
Green600.storyName = "Green 600";

export const Green700 = Template.bind({});
Green700.args = {
  colorName: "Green 700",
  colorCode: "#158957",
};
Green700.storyName = "Green 700";

export const Green800 = Template.bind({});
Green800.args = {
  colorName: "Green 800",
  colorCode: "#1F624A",
  textColor: "white",
};
Green800.storyName = "Green 800";

export const Green900 = Template.bind({});
Green900.args = {
  colorName: "Green 900",
  colorCode: "#1D3B32",
  textColor: "white",
};
Green900.storyName = "Green 900";

export const Orange100 = Template.bind({});
Orange100.args = {
  colorName: "Orange 100",
  colorCode: "#FFF8F0",
};

Orange100.storyName = "Orange 100";

export const Orange200 = Template.bind({});
Orange200.args = {
  colorName: "Orange 200",
  colorCode: "#FFF0DB",
};

Orange200.storyName = "Orange 200";

export const Orange300 = Template.bind({});
Orange300.args = {
  colorName: "Orange 300",
  colorCode: "#FFE5C2",
};

Orange300.storyName = "Orange 300";

export const Orange400 = Template.bind({});
Orange400.args = {
  colorName: "Orange 400",
  colorCode: "#FFD49B",
};

Orange400.storyName = "Orange 400";

export const Orange500 = Template.bind({});
Orange500.args = {
  colorName: "Orange 500",
  colorCode: "#FFB44F",
};

Orange500.storyName = "Orange 500";

export const Orange600 = Template.bind({});
Orange600.args = {
  colorName: "Orange 600",
  colorCode: "#FF9505",
};

Orange600.storyName = "Orange 600";

export const Orange700 = Template.bind({});
Orange700.args = {
  colorName: "Orange 700",
  colorCode: "#E08304",
};

Orange700.storyName = "Orange 700";

export const Orange800 = Template.bind({});
Orange800.args = {
  colorName: "Orange 800",
  colorCode: "#995A06",
  textColor: "white",
};

Orange800.storyName = "Orange 800";

export const Orange900 = Template.bind({});
Orange900.args = {
  colorName: "Orange 900",
  colorCode: "#573302",
  textColor: "white",
};

Orange900.storyName = "Orange 900";

export const Red100 = Template.bind({});
Red100.args = {
  colorName: "Red 100",
  colorCode: "#FFF0F2",
};

Red100.storyName = "Red 100";

export const Red200 = Template.bind({});
Red200.args = {
  colorName: "Red 200",
  colorCode: "#FCC5CE",
};

Red200.storyName = "Red 200";

export const Red300 = Template.bind({});
Red300.args = {
  colorName: "Red 300",
  colorCode: "#F99BAB",
};

Red300.storyName = "Red 300";

export const Red400 = Template.bind({});
Red400.args = {
  colorName: "Red 400",
  colorCode: "#E85E75",
};

Red400.storyName = "Red 400";

export const Red500 = Template.bind({});
Red500.args = {
  colorName: "Red 500",
  colorCode: "#D62F4B",
  textColor: "white",
};

Red500.storyName = "Red 500";

export const Red600 = Template.bind({});
Red600.args = {
  colorName: "Red 600",
  colorCode: "#AD283D",
  textColor: "white",
};

Red600.storyName = "Red 600";

export const Red700 = Template.bind({});
Red700.args = {
  colorName: "Red 700",
  colorCode: "#842432",
  textColor: "white",
};

Red700.storyName = "Red 700";

export const Red800 = Template.bind({});
Red800.args = {
  colorName: "Red 800",
  colorCode: "#5C1E27",
  textColor: "white",
};

Red800.storyName = "Red 800";

export const Red900 = Template.bind({});
Red900.args = {
  colorName: "Red 900",
  colorCode: "#331418",
  textColor: "white",
};

Red900.storyName = "Red 900";

export const Blue100 = Template.bind({});
Blue100.args = {
  colorName: "Blue 100",
  colorCode: "#F7FBFF",
};
Blue100.storyName = "Blue 100";

export const Blue200 = Template.bind({});
Blue200.args = {
  colorName: "Blue 200",
  colorCode: "#DDEFFF",
};
Blue200.storyName = "Blue 200";

export const Blue300 = Template.bind({});
Blue300.args = {
  colorName: "Blue 300",
  colorCode: "#ACD7FF",
};
Blue300.storyName = "Blue 300";

export const Blue400 = Template.bind({});
Blue400.args = {
  colorName: "Blue 400",
  colorCode: "#62B2FD",
};
Blue400.storyName = "Blue 400";

export const Blue500 = Template.bind({});
Blue500.args = {
  colorName: "Blue 500",
  colorCode: "#0D7FE9",
};
Blue500.storyName = "Blue 500";

export const Blue600 = Template.bind({});
Blue600.args = {
  colorName: "Blue 600",
  colorCode: "#0059AC",
  textColor: "white",
};
Blue600.storyName = "Blue 600";

export const Blue700 = Template.bind({});
Blue700.args = {
  colorName: "Blue 700",
  colorCode: "#003F79",
  textColor: "white",
};
Blue700.storyName = "Blue 700";

export const Blue800 = Template.bind({});
Blue800.args = {
  colorName: "Blue 800",
  colorCode: "#022A50",
  textColor: "white",
};
Blue800.storyName = "Blue 800";

export const Blue900 = Template.bind({});
Blue900.args = {
  colorName: "Blue 900",
  colorCode: "#051B30",
  textColor: "white",
};
Blue900.storyName = "Blue 900";
