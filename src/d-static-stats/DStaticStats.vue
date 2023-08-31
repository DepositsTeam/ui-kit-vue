<template>
  <d-box class="ui-box">
    <d-box class="ui-header">
      <d-box class="ui-image__circle">
        <slot name="icon">
          <d-box class="ui-icon">
            <component :is="icon" />
          </d-box>
        </slot>
      </d-box>
      <d-text class="ui-card__title" font-face="circularSTD">
        {{ label }}</d-text
      >
    </d-box>
    <d-box class="ui-body">
      <d-box class="ui-boxes">
        <d-box
          class="ui-body__box"
          :key="`collection__${index}`"
          v-for="(collection, index) in collections"
        >
          <d-box class="ui-title" font-face="circularSTD">
            {{ collection.title }}
          </d-box>
          <d-box class="ui-text" font-face="circularSTD">
            {{ collection.text }}
          </d-box>
        </d-box>
      </d-box>
    </d-box>
  </d-box>
</template>

<script setup>
import { DBox, DText } from "@/main";

defineProps({
  label: {
    type: String,
    required: true,
  },
  icon: {
    type: Object,
    required: true,
  },
  collections: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.ui-box {
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 2px 6px 0 rgba(174, 174, 192, 0.1);
  padding: 14px 24px 24px 24px;

  .ui-header {
    display: flex;
    align-items: center;
    gap: 8px;
    border-bottom: 1px solid #e1e7ec;
    padding-bottom: 10px;

    .ui-image__circle {
      width: 36px;
      height: 36px;
      flex-shrink: 0;
      background: var(--color-grey-100, #f5f8fa);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      .ui-icon {
        display: flex;
        width: 19.2px;
        height: 19.2px;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        color: #6d7786;
      }
    }

    .ui-card__title {
      color: #2a2e33;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      margin: 0;
    }
  }

  .ui-body {
    margin-top: 24px;

    .ui-boxes {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      display: grid;
      justify-content: space-between;
      align-items: flex-end;
      grid-gap: 50px;

      .ui-body__box {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;

        .ui-title {
          color: #8c97a7;
          font-size: 16px;
          font-style: normal;
          font-weight: 450;
          line-height: normal;
          margin: 0;
        }

        .ui-text {
          color: #2a2e33;
          font-size: 18px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          margin: 0;
        }
      }
    }
  }
}
</style>
