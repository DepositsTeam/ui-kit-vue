import Dashboard2FilledIcon from "../filled/Dashboard2FilledIcon.vue";
import ActivityFilledIcon from "../filled/ActivityFilledIcon.vue";
import MessageFilledIcon from "../filled/MessageFilledIcon.vue";
import BankFilledIcon from "../filled/BankFilledIcon.vue";
import CardFilledIcon from "../filled/CardFilledIcon.vue";
import Profile2UserFilledIcon from "../filled/Profile2UserFilledIcon.vue";
import BoxFilledIcon from "../filled/BoxFilledIcon.vue";
import PersonalCardFilledIcon from "../filled/PersonalCardFilledIcon.vue";
import ArrowDownFilledIcon from "../filled/ArrowDownFilledIcon.vue";
import ShopFilledIcon from "../filled/ShopFilledIcon.vue";
import SettingFilledIcon from "../filled/SettingFilledIcon.vue";

export default {
  title: "Icons/Test Icons for Review",
  component: Dashboard2FilledIcon,
  argTypes: {},
};

const Template = (args) => ({
  setup() {
    return { args };
  },
  template: `<component :is="args.icon" />`,
});

export const Dashboard2FilledIconExample = Template.bind({});
Dashboard2FilledIconExample.args = {
  icon: Dashboard2FilledIcon,
};

export const ActivityFilledIconExample = Template.bind({});
ActivityFilledIconExample.args = {
  icon: ActivityFilledIcon,
};

export const MessageFilledIconExample = Template.bind({});
MessageFilledIconExample.args = {
  icon: MessageFilledIcon,
};

export const BankFilledIconExample = Template.bind({});
BankFilledIconExample.args = {
  icon: BankFilledIcon,
};

export const CardFilledIconExample = Template.bind({});
CardFilledIconExample.args = {
  icon: CardFilledIcon,
};

export const Profile2UserFilledIconExample = Template.bind({});
Profile2UserFilledIconExample.args = {
  icon: Profile2UserFilledIcon,
};

export const BoxFilledIconExample = Template.bind({});
BoxFilledIconExample.args = {
  icon: BoxFilledIcon,
};

export const PersonalCardFilledIconExample = Template.bind({});
PersonalCardFilledIconExample.args = {
  icon: PersonalCardFilledIcon,
};

export const ArrowDownFilledIconExample = Template.bind({});
ArrowDownFilledIconExample.args = {
  icon: ArrowDownFilledIcon,
};

export const ShopFilledIconExample = Template.bind({});
ShopFilledIconExample.args = {
  icon: ShopFilledIcon,
};

export const SettingFilledIconExample = Template.bind({});
SettingFilledIconExample.args = {
  icon: SettingFilledIcon,
};
