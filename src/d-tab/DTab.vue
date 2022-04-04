<template>
  <div class="ui-tabs" :class="{ horizontal }">
    <d-box
      v-for="(tab, index) in tabs"
      :key="`tab_${index}_${keyGen()}`"
      :is="tab.is ? tab.is : `a`"
      v-bind="generateSpacing(index)"
      class="ui-tab"
    >
      <d-text is="span" scale="subhead">
        {{ tab.text }}
      </d-text>
    </d-box>
  </div>
</template>

<script>
import DBox from "../d-box/DBox.vue";
import DText from "../d-text/DText.vue";
import keyGen from "../utils/keyGen";
export default {
  name: "DTab",
  components: {
    DBox,
    DText,
  },
  props: {
    tabs: {
      type: Array,
    },
    horizontal: {
      type: Boolean,
    },
    spacing: {
      type: String,
    },
  },
  methods: {
    keyGen,
    generateSpacing: function (index) {
      if (index < this.tabs.length - 1) {
        if (this.horizontal) {
          return {
            marginRight: this.spacing || 0,
          };
        } else {
          return {
            marginBottom: this.spacing || 0,
          };
        }
      } else {
        return {};
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.ui-tab {
  text-decoration: none;
  color: #5f6b7a;
  padding: 8px 16px;
  border-radius: 4px;

  &:hover {
    color: #0d7fe9;
    background: #f5f8fa;
  }

  &:active {
    color: #fff;
    background: #0d7fe9;
  }
}

.ui-tabs {
  display: flex;
  flex-direction: column;

  &.horizontal {
    flex-direction: row;
  }
}
</style>
