<template>
  <d-box
    :style="{
      ...(avatar && avatar.imgURL
        ? { backgroundImage: `url(${avatar.imgURL})` }
        : {}),
    }"
    class="ui-avatar"
    :class="generateAvatarClassName(avatar, index)"
  >
    <d-text
      v-if="(avatar && !avatar.imgURL) || extras"
      equalLineHeight
      :scale="size === 'small' ? 'overline' : 'footnote'"
    >
      <span v-if="extras">+{{ extras }}</span>
      <span v-else>{{ getInitials(avatar.name) }}</span>
    </d-text>
    <d-box
      v-if="avatar && avatar.status && !stacked"
      class="ui-avatar__avatar-status"
    />
  </d-box>
  <ChevronFilledDownIcon
    v-if="dropDown && !stacked"
    class="ui-avatar__dropdown-icon"
  />
</template>

<script setup>
import getInitials from "./utils/getInitials";
import { DBox, DText } from "../main";
import { ChevronFilledDownIcon } from "../main";
const colorSchemes = ["cyan", "green", "orange", "red", "gray", "blue"];

defineProps({
  avatar: {
    type: Object,
    default: undefined,
  },
  extras: {
    type: Number,
  },
  stacked: {
    type: Boolean,
  },
  dropDown: {
    type: Boolean,
  },
  index: {
    type: Number,
  },
  size: {
    type: String,
  },
});

const generateAvatarColorScheme = (avatar, index) => {
  return (
    avatar.colorScheme ||
    (index < colorSchemes.length
      ? colorSchemes[index]
      : colorSchemes[index % colorSchemes.length])
  );
};
const generateAvatarClassName = (avatar = null, index = 0) => {
  return avatar
    ? {
        [`background__${generateAvatarColorScheme(avatar, index)}`]:
          !avatar.imgURL,
        [`status__${avatar.status}`]: avatar.status,
      }
    : ["background__extra"];
};
</script>

<style scoped></style>
