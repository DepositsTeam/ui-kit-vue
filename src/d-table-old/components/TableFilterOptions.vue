<template>
  <d-box :class="{ show }" class="ui-table-filter__option">
    <d-box
      display="flex"
      justify-content="flex-end"
      class="ui-table-filter__section"
    >
      <d-text
        @click="closeOptions"
        scale="subhead"
        my0
        margin-right="8px"
        class="text-gray-600"
        >Cancel</d-text
      >
      <d-text
        scale="subhead"
        :class="{ disabled: disableApplyFilter }"
        my0
        class="text-blue-500 ui-table-filter__option__filter_trigger"
        @click="applyFilters"
        >Apply Filter</d-text
      >
    </d-box>
    <table-filter-option
      v-for="(option, index) in filterOptions"
      :key="`option_${index}`"
      :current-label="selectedOption"
      :current-filter-value="filterValue"
      :label="option"
      @update-filter-option="updateFilterOption"
      :index="index"
      @update-filter-value="updateFilterValue"
    />
  </d-box>
</template>

<script>
import DBox from "../../d-box/DBox.vue";
import DText from "../../d-text/DText.vue";
import TableFilterOption from "./TableFilterOption.vue";
import { computed, ref, watch, inject } from "vue";
export default {
  name: "TableFilterOptions",
  emits: ["close-options"],
  components: {
    DBox,
    DText,
    TableFilterOption,
  },
  props: {
    show: {
      type: Boolean,
    },
  },
  setup(props, { emit }) {
    const updateFilters = inject("updateFilters");
    const filters = inject("filters");
    const column = inject("column");
    const filterOptions = inject("filterOptions");
    const selectedOption = ref("");
    const emptyFilterOptions = inject("emptyFilterOptions");
    const filterValue = ref("");

    const disableApplyFilter = computed(() => {
      if (emptyFilterOptions.includes(selectedOption.value)) {
        return false;
      } else {
        return !filterValue.value;
      }
    });

    // watch(
    //   () => filters.value,
    //   (newVal, oldVal) => {
    //     if (newVal.first === null && oldVal.first) {
    //       filterValue.value = "";
    //       selectedOption.value = "";
    //     }
    //   }
    // );

    const updateFilterOption = (value) => {
      selectedOption.value = value;
    };

    const updateFilterValue = (value) => {
      filterValue.value = value;
    };

    const closeOptions = () => {
      selectedOption.value = "";
      filterValue.value = "";
      emit("close-options");
    };

    const applyFilters = () => {
      updateFilters({
        column,
        first: {
          option: selectedOption.value,
          value: filterValue.value,
        },
        joiner: null,
        second: null,
      });
      emit("close-options");
    };

    // watch(selectedOption.value, () => {
    //   filterValue.value = "";
    // });

    return {
      closeOptions,
      selectedOption,
      filterValue,
      filterOptions,
      disableApplyFilter,
      updateFilterValue,
      updateFilterOption,
      applyFilters,
    };
  },
};
</script>

<style lang="scss">
.ui-table-filter__option {
  min-width: 220px;
  background: white;
  box-shadow: 0 4px 8px rgba(3, 47, 60, 0.14);
  border-radius: 6px;
  position: absolute;
  display: none;
  z-index: 999;

  &.show {
    display: block;
  }

  .ui-table-filter__section {
    border-bottom: 1px solid #ebf2f7;
    padding: 12px 16px;
  }

  .ui-table-filter__option__filter_trigger {
    cursor: pointer;

    &.disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
}
</style>
