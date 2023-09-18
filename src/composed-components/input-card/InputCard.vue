<script setup>
import { DAutoLayout, DBox, DHeading, DText } from "@/main";
import { ref } from "vue";
import inputCardProps from "@/composed-components/input-card/inputCardProps";

const props = defineProps({
  ...inputCardProps,
});

const emit = defineEmits(["clicked"]);

const expanded = ref(false);

const handleClick = (e) => {
  if (!props.disabled) {
    if (props.expandable) {
      // Handle stuff if it's expandable
      if (e.target.closest(".d-input-card__selector")) {
        emit("clicked");
      } else {
        expanded.value = !expanded.value;
      }
    } else {
      emit("clicked");
    }
  }
};
</script>

<template>
  <d-box class="d-input-card__wrapper">
    <d-text
      v-if="label"
      margin-top="0px"
      class="ui-text-field__label"
      :class="labelClass"
      scale="subhead"
      :font-face="labelFontFace"
    >
      {{ label }}
    </d-text>
    <d-box @click="handleClick" class="d-input-card">
      <d-auto-layout justify-content="space-between" align-items="center">
        <d-auto-layout item-spacing="18px" alignment="center-left">
          <d-box
            align-self="center"
            v-if="$slots.icon"
            class="d-input-card__icon"
          >
            <slot name="icon"></slot>
          </d-box>
          <d-auto-layout
            direction="vertical"
            item-spacing="8px"
            class="d-input-card__content"
          >
            <slot name="heading">
              <d-text
                font-face="heroNew"
                font-size="14px"
                font-weight="500"
                my0
                >{{ heading }}</d-text
              >
            </slot>
            <slot name="description">
              <d-text font-size="12px" light-color="#8C97A7" my0>{{
                description
              }}</d-text>
            </slot>
          </d-auto-layout>
        </d-auto-layout>

        <d-box class="d-input-card__selector">
          <slot name="selector"></slot>
        </d-box>
      </d-auto-layout>
      <d-box
        v-if="expandable && expanded"
        class="d-input-card__expansion-border"
      ></d-box>

      <d-box v-if="expanded" class="d-input-card__expanded">
        <slot></slot>
      </d-box>
    </d-box>
  </d-box>
</template>

<style lang="scss" scoped>
.d-input-card {
  padding: 19px 16px;
  position: relative;
  border: 1px solid #e1e7ec;
  border-radius: 8px;
  background: white;
  cursor: pointer;
  .d-input-card__expansion-border {
    width: 100%;
    height: 0.5px;
    background: #e2e8f0;
    margin: 16px 0;
  }
  .d-input-card__icon {
    border: 1px solid #e1e7ec;
    display: flex;
    min-height: 42px;
    min-width: 42px;
    height: 42px;
    width: 42px;
    padding: 9px;
    aspect-ratio: 1 / 1;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
  }
}
</style>
