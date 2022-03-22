<template>
  <d-box is="label" class="{generatedClassName}">
    <d-radio v-if="radio" v-bind="$attrs" v-model="updateValue" />
    <d-checkbox v-else-if="checkbox" v-bind="$attrs" v-model="updateValue" />

    <div class="ui-card__content">
      <div class="ui-card__title">{{ title }}</div>

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
  },title: {
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
  checkbox: {
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

<style scoped></style>
