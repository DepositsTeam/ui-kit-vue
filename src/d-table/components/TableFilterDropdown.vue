<template>
  <d-box class="ui-table__filters">
    <d-box
      v-if="selectedFilter"
      padding-x="16px"
      display="flex"
      justify-content="flex-end"
    >
      <d-text
        font-face="heroNew"
        class="text-grey-600"
        scale="footnote"
        margin-right="10px"
        >Cancel</d-text
      >
      <d-text :class="applyFilterColor" font-face="heroNew" scale="footnote"
        >Apply filter</d-text
      >
    </d-box>
    <d-box
      v-for="(filter, index) in availableFilters"
      :key="`filter-item-${index}`"
      class="ui-table__filters-item"
      :class="{
        bordered: index > 0 && index % 2 === 1,
      }"
    >
      <d-radio v-model="selectedFilter" :value="filter.text" ringed>
        <d-text my0 scale="subhead" font-face="circularSTD">{{
          filter.text
        }}</d-text>
      </d-radio>
      <d-box
        margin-top=".5rem"
        v-if="selectedFilter === filter.text && filter.requiresText"
      >
        <d-textfield
          size="medium"
          label="Value"
          placeholder="Type something"
          v-model="selectedFilterValue"
          font-face="circularSTD"
        />
      </d-box>
    </d-box>
  </d-box>
</template>

<script setup>
import { DBox, DRadio, DText, DTextfield } from "../../main";
import { ref, computed } from "vue";

const selectedFilter = ref(null);
const selectedFilterValue = ref("");

const applyFilterColor = computed(() => {
  if (!availableFiltersTextMap[selectedFilter.value]) {
    return "text-blue-500";
  } else {
    return selectedFilterValue.value ? "text-blue-500" : "text-blue-300";
  }
});

const availableFiltersTextMap = {
  Is: true,
  "Is not": true,
  "Is empty": false,
  "Is not empty": false,
  "Is equal to": true,
  "Is not equal to": true,
  "Begins with": true,
  "Ends with": true,
  Contains: true,
  "Does not contain": true,
};

const availableFilters = [
  {
    text: "Is",
    requiresText: true,
  },
  {
    text: "Is not",
    requiresText: true,
  },
  {
    text: "Is empty",
    requiresText: false,
  },
  {
    text: "Is not empty",
    requiresText: false,
  },
  {
    text: "Is equal to",
    requiresText: true,
  },
  {
    text: "Is not equal to",
    requiresText: true,
  },
  {
    text: "Begins with",
    requiresText: true,
  },
  {
    text: "Ends with",
    requiresText: true,
  },
  {
    text: "Contains",
    requiresText: true,
  },
  {
    text: "Does not contain",
    requiresText: true,
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
