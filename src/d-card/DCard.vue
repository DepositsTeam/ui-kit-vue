<template>
  <d-box
    is="label"
    class="ui-card"
    :class="{ state__selected: selected, [wrapperClass]: wrapperClass }"
  >
    <div class="ui-card__heading"></div>
    <d-radio
      class="ui-card__form-selector"
      v-if="radio"
      :ringed="ringedRadio"
      v-bind="$attrs"
      v-model="updateValue"
    />
    <d-checkbox
      class="ui-card__form-selector"
      v-else-if="checkbox"
      v-bind="$attrs"
      v-model="updateValue"
      :dashed="dashedCheckbox"
    />

    <div class="ui-card__content">
      <div v-if="title" class="ui-card__title">{{ title }}</div>

      <div v-if="desc || $slots.default" class="ui-card__card-text">
        <span v-if="desc" v-html="desc"></span>
        <slot v-else></slot>
      </div>
    </div>

    <component :is="icon" v-if="icon" class="ui-card__icon"></component>
  </d-box>
</template>

<script>
import DBox from "../d-box/DBox.vue";
import DRadio from "../d-radio/DRadio.vue";
import DCheckbox from "../d-checkbox/DCheckbox.vue";
import CardIcon from "../icons/CardIcon.vue";
export default {
  name: "DCard",
  components: {
    DBox,
    DRadio,
    DCheckbox,
  },
  emits: ["update:modelValue"],
  props: {
    title: {
      type: String,
      default: "Title",
    },
    icon: {
      type: Object,
    },
    selected: {
      type: Boolean,
    },
    radio: {
      type: Boolean,
    },
    checkbox: {
      type: Boolean,
    },
    desc: {
      type: String,
      default: "I rock",
    },
    value: {
      type: String,
    },
    wrapperClass: {
      type: [String, Array, Object],
    },
  },
  computed: {
    updateValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
  title: {
    type: String,
  },
  icon: {
    type: Object,
    default: () => CardIcon,
  },
  selected: {
    type: Boolean,
  },
  radio: {
    type: Boolean,
  },
  ringedRadio: {
    type: Boolean,
  },
  checkbox: {
    type: Boolean,
  },
  dashedCheckbox: {
    type: Boolean,
  },
  desc: {
    type: String,
  },
  modelValue: {
    type: [String, Number, Array],
  },
  value: {
    type: [String, Number, Boolean],
  },
};
</script>

<style lang="scss">
.ui-card {
  font-family: "Circular Std", sans-serif;
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  color: #5f6b7a;
  text-decoration: none;
  transition-property: border-color;
  transition-duration: 0.5s;
  border: 1px solid #e1e7ec;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 1px 0 rgba(27, 31, 35, 0.05);
  background-color: #ffffff;
  display: flex;
  align-items: flex-start;
  justify-content: flex-between;
  // --tw-space-x-reverse: 0;
  // margin-right: calc(0.75rem * var(--tw-space-x-reverse));
  // margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));
  cursor: pointer;

  &:hover {
    border: 1px solid #0db9e9;
  }
}

.ui-card__form-selector {
  margin-top: 4px;
}

.state__selected {
  border: 1px solid #0db9e9;
  color: #212934;
  transition-property: color;
  transition-duration: 0.5s;
}

.ui-card__content {
  width: 100%;
  padding: 0 5px;
}

.ui-card__title {
  font-weight: 700;
  font-family: Hero New;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  width: 100%;
}

.ui-card__card-text {
  font-family: Circular Std;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
}
</style>
