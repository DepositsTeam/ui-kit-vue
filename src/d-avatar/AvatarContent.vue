<template>
  <div
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
    <div
      v-if="avatar && avatar.status && !stacked"
      class="ui-avatar__avatar-status"
    />
  </div>
  <ChevronFilledDownIcon
    v-if="dropDown && !stacked"
    class="ui-avatar__dropdown-icon"
  />
</template>

<script>
import getInitials from "./utils/getInitials";
import ChevronFilledDownIcon from "../icons/ChevronFilledDownIcon.vue";
import DText from "../d-text/DText.vue";
const colorSchemes = ["cyan", "green", "orange", "red", "gray", "blue"];
export default {
  name: "AvatarContent",
  components: {
    ChevronFilledDownIcon,
    DText,
  },
  props: {
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
  },
  setup() {
    return { colorSchemes };
  },
  methods: {
    getInitials,
    generateAvatarColorScheme: function (avatar, index) {
      return (
        avatar.colorScheme ||
        (index < colorSchemes.length
          ? colorSchemes[index]
          : colorSchemes[index % colorSchemes.length])
      );
    },
    generateAvatarClassName: function (avatar = null, index = 0) {
      return avatar
        ? {
            [`background__${this.generateAvatarColorScheme(avatar, index)}`]:
              !avatar.imgURL,
            [`status__${avatar.status}`]: avatar.status,
          }
        : ["background__extra"];
    },
  },
};
</script>

<style scoped></style>
