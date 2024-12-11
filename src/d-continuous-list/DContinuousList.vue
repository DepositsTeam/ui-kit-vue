<template>
  <d-box class="ui-continuous-list__wrapper">
    <slot name="title">
      <d-text my0 class="ui-continuous-list__title" font-face="heroNew">{{
        title
      }}</d-text>
    </slot>

    <d-box class="ui-continuous-list">
      <d-box
        class="ui-continuous-list__row"
        v-for="list in lists"
        @click="handleClick(list)"
        :key="list.id"
      >
        <slot name="row" v-bind="list">
          <d-box class="ui-continuous-list__left">
            <slot name="icon" v-bind="list">
              <d-box class="ui-continuous-list__icon">
                <component :is="list.icon" />
              </d-box>
            </slot>

            <slot name="text" v-bind="list">
              <d-box class="ui-continuous-list__texts">
                <d-text
                  my0
                  is="h3"
                  class="ui-continuous-list__texts__title"
                  font-face="heroNew"
                  >{{ list.title }}</d-text
                >
                <d-text
                  my0
                  is="p"
                  class="ui-continuous-list__texts__text"
                  font-face="circularSTD"
                  >{{ list.description }}
                </d-text>
              </d-box>
            </slot>
          </d-box>
          <d-box>
            <slot name="chevron-icon">
              <ChevronArrowRightIcon />
            </slot>
          </d-box>
        </slot>
      </d-box>
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
.ui-continuous-list__wrapper {
  display: inline-flex;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  border-radius: 8px;
  background: #ffffff;
  width: 100%;

  .ui-continuous-list__title {
    color: var(--light-primary-500);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
  }

  .ui-continuous-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    width: 100%;

    .ui-continuous-list__row {
      display: flex;
      padding: 12px 0;
      justify-content: space-between;
      align-items: center;
      border-bottom: 0.5px solid #e1e7ec;
      width: 100%;
      cursor: pointer;

      .ui-continuous-list__left {
        display: flex;
        align-items: flex-start;
        gap: 12px;

        .ui-continuous-list__icon {
          color: var(--light-primary-500);
        }
      }

      .ui-continuous-list__texts {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;

        .ui-continuous-list__texts__title {
          color: #2a2e33;
          font-size: 18px;
          font-style: normal;
          font-weight: 600;
          line-height: 23px;
        }

        .ui-continuous-list__texts__text {
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
</style>
