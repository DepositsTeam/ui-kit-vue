<template>
  <d-box class="ui-table__filters">
    <d-box
      v-for="(filter, index) in availableFilters"
      :key="`filter-item-${index}`"
      class="ui-table__filters-item"
      :class="{
        bordered: index > 0 && index % 2 === 1,
      }"
    >
      <d-radio ringed>
        <d-text my0 scale="subhead" font-face="circularSTD">{{
          filter.text
        }}</d-text>
      </d-radio>
    </d-box>
  </d-box>
</template>

<script setup>
import { DBox, DRadio, DText } from "../../main";

const availableFilters = [
  {
    text: "Is",
  },
  {
    text: "Is not",
  },
  {
    text: "Is empty",
  },
  {
    text: "Is not empty",
  },
  {
    text: "Is equal to",
  },
  {
    text: "Is not equal to",
  },
  {
    text: "Begins with",
  },
  {
    text: "Ends with",
  },
  {
    text: "Contains",
  },
  {
    text: "Does not contain",
  },
];
</script>

<style lang="scss" scoped>
.ui-table__filters {
  background: #ffffff;
  border: 1px solid #e1e7ec;
  box-shadow: 0 4px 8px rgba(3, 47, 60, 0.14);
  border-radius: 6px;
  display: flex;
  position: absolute;
  flex-direction: column;
  min-width: 240px;
  z-index: 100;
  .ui-table__filters-item {
    padding: 8px 16px;
    color: #5f6b7a;
    &.bordered {
      border-bottom: 1px solid #ecf2f7;
    }
  }
}
</style>
