<template>
  <d-box class="ui-d__card">
    <d-text class="ui-title" font-face="heroNew">{{ title }}</d-text>

    <d-box class="ui-list">
      <slot name="list">
        <d-box
          class="ui-row"
          v-for="list in lists"
          @click="handleClick(list)"
          :key="list.id"
        >
          <slot name="row">
            <d-box class="ui-left">
              <slot name="icon" v-bind="list">
                <d-box class="ui-icon">
                  <component :is="list.icon" />
                </d-box>
              </slot>

              <d-box class="ui-texts">
                <d-text is="h3" class="ui-d_title" font-face="heroNew">{{
                  list.title
                }}</d-text>
                <d-text is="p" class="ui-d_text" font-face="circularSTD"
                  >{{ list.description }}
                </d-text>
              </d-box>
            </d-box>
            <d-box class="ui-caret-right">
              <ChevronArrowRightIcon />
            </d-box>
          </slot>
        </d-box>
      </slot>
    </d-box>
  </d-box>
</template>

<script setup>
import { DBox, DText, ChevronArrowRightIcon } from "@/main";

const emit = defineEmits(["clicked"]);

defineProps({
  lists: {
    type: Array,
  },
  title: {
    type: String,
    required: true,
  },
});

const handleClick = (list) => {
  emit("clicked", list);
};
</script>

<style scoped lang="scss">
.ui-d__card {
  display: inline-flex;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  border-radius: 8px;
  background: #ffffff;
  width: 100%;

  .ui-title {
    color: var(--light-primary-500);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
  }

  .ui-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    width: 100%;

    .ui-row {
      display: flex;
      padding: 12px 0;
      justify-content: space-between;
      align-items: center;
      border-bottom: 0.5px solid #e1e7ec;
      width: 100%;
      cursor: pointer;

      .ui-left {
        display: flex;
        align-items: flex-start;
        gap: 12px;

        .ui-icon {
          color: var(--light-primary-500);
        }
      }

      .ui-texts {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;

        .ui-d_title {
          color: #2a2e33;
          font-size: 18px;
          font-style: normal;
          font-weight: 600;
          line-height: 23px;
        }

        .ui-d_text {
          color: #6d7786;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 18px;
          letter-spacing: -0.4px;
        }
      }
    }
  }
}

p,
h3 {
  margin: 0;
}
</style>
