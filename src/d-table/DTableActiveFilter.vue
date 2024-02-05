<template>
  <d-box
    @click="emit('clicked')"
    class="ui-table-active-filter"
    cursor="pointer"
  >
    <slot>
      <d-box display="flex" gap="4px">
        <slot name="icon"> </slot>
        <d-text my0 margin-x="8px" font-face="circularSTD" scale="p-16">
          {{ title1 }}
          <d-box
            :font-face="fontFace"
            is="span"
            light-color="#64748B"
            dark-color="#64748B"
          >
            {{ filter1 }}
          </d-box>
          {{ value1 }}
          <d-box is="span" v-if="join">
            <d-box
              :font-face="fontFace"
              is="span"
              light-color="#64748B"
              dark-color="#64748B"
            >
              {{ join }}
            </d-box>

            <d-box is="span">{{ ` ${title2} ` }}</d-box>
            <d-box
              :font-face="fontFace"
              is="span"
              light-color="#64748B"
              dark-color="#64748B"
            >
              {{ filter2 }}
            </d-box>
            {{ value2 }}
          </d-box>
        </d-text>
        <close-icon @click="emit('close')"> </close-icon>
      </d-box>
    </slot>
  </d-box>
</template>

<script setup>
import DBox from "@/d-box/DBox.vue";
import DText from "@/d-text/DText.vue";
import CloseIcon from "@/icons/CloseIcon.vue";

const emit = defineEmits(["close", "clicked"]);

defineProps({
  title1: {
    type: String,
  },
  fontFace: {
    type: String,
    default: "circularSTD",
  },
  filter1: {
    type: String,
  },
  value1: {
    type: String,
  },
  join: {
    type: String,
  },
  title2: {
    type: String,
  },
  filter2: {
    type: String,
  },
  value2: {
    type: String,
  },
});
</script>

<style lang="scss" scoped>
.ui-table-active-filter {
  display: inline-flex;
  padding: 12px 16px;
  justify-content: space-between;
  background: #f5f8fa;
  margin-top: 8px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: 5px;
  &.dark_mode {
    background: #2a2e33;
  }
  &.active {
    border: 1px solid var(--light-primary-color);
    box-shadow: 0 0 0 3px rgba(67, 210, 250, 0.25);
  }
}
</style>
