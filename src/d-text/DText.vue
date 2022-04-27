<template>
  <d-box
    class="ui-text"
    :class="{
      [scale]: scale,
      uppercase,
      'equal-line-height': equalLineHeight,
      my0,
    }"
    :is="is"
    v-bind="{ ...$props, ...$attrs }"
  >
    <slot></slot>
  </d-box>
</template>

<script>
import DBox from "../d-box/DBox.vue";
export default {
  name: "DText",
  components: { DBox },
  props: {
    is: {
      type: [String, Object],
      validator: (value) => {
        if (typeof value !== "object") {
          return ["p", "span", "small", "sub", "sup", "subhead", "a"].includes(
            value
          );
        } else {
          return true;
        }
      },
      default: "p",
    },
    fontFace: {
      type: String,
      validator: (value) => ["heroNew", "circularSTD"].includes(value),
      default: "circularSTD",
    },
    scale: {
      type: String,
      validator: (value) =>
        [
          "body",
          "subhead",
          "p-18",
          "overline",
          "footnote",
          "overline",
          "footnote-caps",
        ].includes(value),
    },
    uppercase: {
      type: Boolean,
    },
    equalLineHeight: {
      type: Boolean,
    },
    my0: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss">
.uppercase {
  text-transform: uppercase;
}

.ui-text {
  &.my0 {
    margin-top: 0;
    margin-bottom: 0;
  }
  &.body {
    font-size: 16px;
    line-height: 24px;

    &.equal-line-height {
      line-height: 16px;
    }
  }

  &.p-18 {
    font-size: 18px;
    line-height: 30px;

    &.equal-line-height {
      line-height: 18px;
    }
  }

  &.subhead {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;

    &.equal-line-height {
      line-height: 14px;
    }
  }

  &.overline {
    font-size: 10px;
    line-height: 12px;

    &.equal-line-height {
      line-height: 10px;
    }
  }

  &.footnote {
    font-size: 12px;
    line-height: 16px;

    &.equal-line-height {
      line-height: 12px;
    }
  }

  &.footnote-caps {
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
}
</style>
