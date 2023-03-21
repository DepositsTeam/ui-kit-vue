<template>
  <d-box class="ui-table__active-filters-dropdown">
    <d-box class="filter__row" margin-bottom="1rem">
      <d-select
        width="100%"
        size="medium"
        placeholder="Select column"
        label="Column"
        font-face="circularSTD"
        v-model="selectedLocalColumn"
        option-value="dataSelector"
        option-title="display"
        return-full-object
        :options="columns"
      />
    </d-box>
    <d-box class="filter__row">
      <d-select
        size="medium"
        placeholder="Select filter"
        label="Filter"
        font-face="circularSTD"
        v-model="localFilter.filter.selectedFilter"
        :options="availableFilters"
      />
      <d-textfield
        size="medium"
        label="Value"
        font-face="circularSTD"
        placeholder="Type something"
        v-model="localFilter.filter.selectedFilterValue"
        :disabled="!availableFiltersTextMap[localFilter.filter.selectedFilter]"
      />
    </d-box>
    <d-box v-if="showSecondOptions" class="filter__radios">
      <d-radio ringed v-model="localFilter.filter.join" value="and">
        <d-text
          my0
          scale="subhead"
          class="text-grey-700"
          font-face="circularSTD"
          >And</d-text
        >
      </d-radio>
      <d-radio ringed v-model="localFilter.filter.join" value="or">
        <d-text
          my0
          scale="subhead"
          class="text-grey-700"
          font-face="circularSTD"
          >Or</d-text
        >
      </d-radio>
    </d-box>
    <d-box v-if="showSecondOptions" class="filter__row grey">
      <d-select
        size="medium"
        placeholder="Select filter"
        label="Filter"
        font-face="circularSTD"
        v-model="localFilter.filter.selectedFilter2"
        :options="availableFilters"
        :disabled="!localFilter.filter.join"
      />
      <d-textfield
        size="medium"
        label="Value"
        font-face="circularSTD"
        placeholder="Type something"
        v-model="localFilter.filter.selectedFilterValue2"
        :disabled="
          !localFilter.filter.join ||
          !availableFiltersTextMap[localFilter.filter.selectedFilter2]
        "
      />
      {{
        JSON.stringify(
          availableFiltersTextMap[localFilter.filter.selectedFilterValue2]
        )
      }}
      <d-box
        class="close__icon ui-table__triggerer"
        cursor="pointer"
        @click="hideOtherOptions"
      >
        <close-icon class="close__icon" />
      </d-box>
    </d-box>
    <d-box display="inline-flex" margin-top="16px">
      <d-button @click="updateGlobalFilter" color-scheme="primary" size="medium"
        >Apply filter</d-button
      >
      <d-button
        @click="closeFilters"
        background=" #202B3C"
        margin-left="16px"
        size="medium"
        >Cancel</d-button
      >
    </d-box>
    <d-box
      @click="showOtherOptions"
      v-if="!showSecondOptions"
      class="condition ui-table__triggerer"
    >
      <d-box
        cursor="pointer"
        display="inline-block"
        light-class="text-primary-light-500"
        dark-class="text-primary-dark-500"
        class="text"
        ><add-icon />
        <d-text
          my0
          scale="footnote"
          font-face="heroNew"
          light-class="text-primary-light-500"
          dark-class="text-primary-dark-500"
          >Add condition</d-text
        ></d-box
      >
    </d-box>
  </d-box>
</template>

<script setup>
import {
  DBox,
  DTextfield,
  DSelect,
  DButton,
  DRadio,
  CloseIcon,
  AddIcon,
  DText,
} from "../../main";
import { ref, reactive, inject, onMounted, onBeforeUnmount } from "vue";
import { availableFilters, availableFiltersTextMap } from "../utils/reused";

const updateFilterValue = inject("updateFilterValue");
const filter = inject("filter");
const columns = inject("columns");

const selectedLocalColumn = ref(null);

const emit = defineEmits(["close"]);

const closeFilters = () => {
  emit("close");
};

const localFilter = reactive({
  filter: {
    column: null,
    selectedFilter: null,
    selectedFilterValue: null,
    join: null,
    selectedFilter2: null,
    selectedFilterValue2: null,
  },
});

const closeActiveFiltersDropdownOnOutsideClick = (e) => {
  if (
    e.target.closest(".ui-table__active-filters") === null &&
    e.target.closest(".ui-table__active-filter-group") === null &&
    e.target.closest(".ui-table__triggerer") === null
  ) {
    emit("close");
  }
};

const closeActiveFiltersDropdownOnEsc = (e) => {
  if (e.key === "Escape") {
    emit("close");
  }
};

onMounted(() => {
  if (filter.value) {
    localFilter.filter.column = filter.value.column;
    if (filter.value.column) {
      selectedLocalColumn.value = filter.value.column.dataSelector;
    }
    localFilter.filter.selectedFilter = filter.value.selectedFilter;
    localFilter.filter.selectedFilterValue = filter.value.selectedFilterValue;
    localFilter.filter.join = filter.value.join;
    localFilter.filter.selectedFilter2 = filter.value.selectedFilter2;
    localFilter.filter.selectedFilterValue2 = filter.value.selectedFilterValue2;
    if (filter.value.join) {
      showSecondOptions.value = true;
    }
  }
  window.addEventListener("click", closeActiveFiltersDropdownOnOutsideClick);
  window.addEventListener("keydown", closeActiveFiltersDropdownOnEsc);
});

const updateGlobalFilter = () => {
  let detachedLocalFilter = {
    column: selectedLocalColumn.value,
    selectedFilter: localFilter.filter.selectedFilter,
    selectedFilterValue: localFilter.filter.selectedFilterValue,
    join: localFilter.filter.join,
    selectedFilter2: localFilter.filter.selectedFilter2,
    selectedFilterValue2: localFilter.filter.selectedFilterValue2,
  };
  updateFilterValue(detachedLocalFilter);
  emit("close");
};

onBeforeUnmount(() => {
  localFilter.filter = {
    column: null,
    selectedFilter: null,
    selectedFilterValue: null,
    join: null,
    selectedFilter2: null,
    selectedFilterValue2: null,
  };
  window.removeEventListener("click", closeActiveFiltersDropdownOnOutsideClick);
  window.removeEventListener("keydown", closeActiveFiltersDropdownOnEsc);
});

const showSecondOptions = ref(false);

const showOtherOptions = () => {
  showSecondOptions.value = true;
};
const hideOtherOptions = () => {
  showSecondOptions.value = false;
  localFilter.filter.join = null;
  localFilter.filter.selectedFilter2 = null;
  localFilter.filter.selectedFilterValue2 = null;
};
</script>

<style lang="scss">
.ui-table__active-filters-dropdown {
  background: #ffffff;
  border: 1px solid #e1e7ec;
  box-shadow: 0 4px 8px rgba(3, 47, 60, 0.14);
  border-radius: 6px;
  display: flex;
  position: absolute;
  flex-direction: column;
  z-index: 100;
  min-width: 600px;
  padding: 24px;
  &.dark_mode {
    background: #121a26;
    border: 1px solid #202b3c;
    box-shadow: 0px 4px 8px #1a2535;
  }
  .filter__row {
    display: flex;
    align-items: center;
    & > * {
      flex: 1;

      &:first-child {
        margin-right: 16px;
      }
    }
    &.grey {
      padding: 16px;
      background: #f5f8fa;
      border-radius: 8px;
      align-items: flex-start;
      & > * {
        flex: 3;
        &:last-child {
          flex: 1;
        }
      }
      &.dark_mode {
        background: #202b3c;
      }
    }
  }
  .filter__radios {
    display: flex;
    margin-top: 16px;
    margin-bottom: 16px;
    & > *:first-child {
      margin-right: 16px;
    }
  }
  .condition {
    margin-top: 16px;
    display: inline-flex;
    width: max-content;
    .text {
      display: inline-flex;
      align-items: center;
    }
  }
  .close__icon {
    &.dark_mode {
      color: #94a3b8;
    }
  }
}
</style>
