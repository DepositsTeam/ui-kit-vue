<template>
  <d-box
    class="ui-avatars__wrapper"
    :class="{
      subtle,
      [`size__${size}`]: true,
      padded: avatars && avatars.length && !stacked,
      stacked: avatars && avatars.length && stacked,
    }"
  >
    <d-box v-if="avatars && avatars.length">
      <d-box
        v-for="(avatar, index) in avatars"
        :key="`ui-avatar__${keyGen()}_${index}`"
        class="ui-avatar__wrapper"
      >
        <avatar-content
          :avatar="avatar"
          :index="index"
          :stacked="stacked"
          :drop-down="dropDown"
          :size="size"
        />
      </d-box>
    </d-box>
    <d-box v-else>
      <avatar-content
        :avatar="avatar"
        :index="0"
        :stacked="stacked"
        :drop-down="dropDown"
        :size="size"
      />
    </d-box>
  </d-box>
</template>

<script>
// Find a way to keep this markup clean while using scoped CSS
import DBox from "../d-box/DBox.vue";
import keyGen from "../utils/keyGen";
import AvatarContent from "./AvatarContent.vue";
export default {
  name: "DAvatar",
  components: {
    DBox,
    AvatarContent,
  },
  computed: {
    extraAvatars: function () {
      return this.avatars && this.avatars.length
        ? this.avatars.length - this.visibleAvatars
        : 0;
    },
  },
  props: {
    subtle: {
      type: Boolean,
    },
    stacked: {
      type: Boolean,
    },
    size: {
      type: String,
      validator: (value) => ["small", "medium", "large"].includes(value),
      default: "large",
    },
    avatar: {
      type: Object,
    },
    avatars: {
      type: Array,
    },
    dropDown: {
      type: Boolean,
    },
    visibleAvatars: {
      type: Number,
    },
  },
  methods: {
    keyGen,
  },
};
</script>

<style lang="scss">
.ui-avatars__wrapper {
  display: inline-flex;
  align-items: center;

  .ui-avatar,
  &.size__large .ui-avatar {
    height: 40px;
    width: 40px;
  }

  &.size__medium .ui-avatar {
    height: 32px;
    width: 32px;
  }

  &.size__small .ui-avatar {
    height: 24px;
    width: 24px;
  }
}

.ui-avatar__wrapper {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.ui-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: relative;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  &.background__cyan {
    background: #0c9ccc;
    color: #212934;
  }

  &.background__green {
    background: #00b058;
    color: #fff;
  }

  &.background__orange {
    background: #ff9505;
    color: #212934;
  }

  &.background__red {
    background: #d62f4b;
    color: #fff;
  }

  &.background__gray,
  &.background__grey {
    background: #5f6b7a;
    color: #fff;
  }

  &.background__blue {
    background: #0d7fe9;
    color: #fff;
  }
}

.ui-avatars__wrapper.subtle .ui-avatar {
  &.background__cyan {
    background: #bdf3fc;
    color: #085e7a;
  }

  &.background__green {
    background: #c4efdf;
    color: #1f624a;
  }

  &.background__orange {
    background: #fff0db;
    color: #995a06;
  }

  &.background__red {
    background: #fcc5ce;
    color: #5c1e27;
  }

  &.background__grey,
  &.background__gray {
    background: #e1e7ec;
    color: #212934;
  }

  &.background__blue {
    background: #ddefff;
    color: #003f79;
  }
}

.ui-avatar {
  &.background__extra {
    background: #e1e7ec;
    color: #212934;
  }

  > .ui-avatar__avatar-status {
    position: absolute;
    height: 8px;
    width: 8px;
    border: 2px solid #fff;
    border-radius: 50%;
    bottom: 0;
    right: -5%;
  }

  &.status__green > .ui-avatar__avatar-status {
    background-color: #27c079;
  }

  &.status__orange > .ui-avatar__avatar-status {
    background-color: #ff9505;
  }

  &.status__gray > .ui-avatar__avatar-status {
    background-color: #e1e7ec;
  }

  &.status__grey > .ui-avatar__avatar-status {
    background-color: #e1e7ec;
  }
}

.ui-avatars__wrapper {
  &.size__large .ui-avatar > .ui-avatar__avatar-status {
    height: 8px;
    width: 8px;
  }

  &.size__medium .ui-avatar > .ui-avatar__avatar-status {
    height: 6px;
    width: 6px;
  }

  &.size__small .ui-avatar > .ui-avatar__avatar-status {
    height: 4px;
    width: 4px;
  }
}

.ui-avatar + .ui-avatar__dropdown-icon {
  height: 20px;
  width: 20px;
}

.ui-avatars__wrapper {
  &.padded > .ui-avatar__wrapper {
    margin-right: 24px;

    &:last-child {
      margin-right: 0;
    }
  }

  &.stacked {
    .ui-avatar {
      border: 3px solid #fff;
    }

    > .ui-avatar__wrapper:not(:first-child) {
      margin-left: -14px;
    }
  }

  &.size__medium.stacked > .ui-avatar__wrapper:not(:first-child) {
    margin-left: -10px;
  }

  &.size__small.stacked > .ui-avatar__wrapper:not(:first-child) {
    margin-left: -7px;
  }
}
</style>
