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
        @click="closeDropdown"
        >Cancel</d-text
      >
      <d-text
        @click="updateGlobalFilter"
        :class="applyFilterColor"
        font-face="heroNew"
        scale="footnote"
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
        <d-text
          my0
          scale="subhead"
          class="filterText"
          font-face="circularSTD"
          >{{ filter.text }}</d-text
        >
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
          @keypress="applyFilterOnEnter"
        />
      </d-box>
    </d-box>
  </d-box>
</template>

<script setup>
import { DBox, DRadio, DText, DTextfield } from "../../main";
import {
  onMounted,
  reactive,
  computed,
  inject,
  onBeforeUnmount,
  nextTick,
} from "vue";
import { availableFiltersTextMap, availableFilters } from "../utils/reused";

const emit = defineEmits(["close"]);

const closeDropdown = () => {
  emit("close");
};
const props = defineProps({
  column: Object,
});
// const selectedFilter = ref(null);
// const selectedFilterValue = ref("");
// const column = inject("column");
const updateFilterValue = inject("updateFilterValue");
const filter = inject("filter");
const toggleSelection = inject("toggleSelection");
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
const updateGlobalFilter = async () => {
  let detachedLocalFilter = localFilter.filter;
  updateFilterValue(detachedLocalFilter);
  await nextTick();
  toggleSelection();
};

const applyFilterOnEnter = (e) => {
  if (
    localFilter.filter.selectedFilterValue &&
    localFilter.filter.selectedFilterValue.length &&
    e.key === "Enter"
  ) {
    updateGlobalFilter();
  }
};

onMounted(() => {
  if (filter.value) {
    localFilter.filter.column = filter.value.column;
    localFilter.filter.selectedFilter = filter.value.selectedFilter;
    localFilter.filter.selectedFilterValue = filter.value.selectedFilterValue;
    localFilter.filter.join = filter.value.join;
    localFilter.filter.selectedFilter2 = filter.value.selectedFilter2;
    localFilter.filter.selectedFilterValue2 = filter.value.selectedFilterValue2;
  }
});
onBeforeUnmount(() => {
  localFilter.filter = {
    column: null,
    selectedFilter: null,
    selectedFilterValue: null,
    join: null,
    selectedFilter2: null,
    selectedFilterValue2: null,
  };
});

const applyFilterColor = computed(() => {
  if (!availableFiltersTextMap[selectedFilter.value]) {
    return "text-blue-500";
  } else {
    return selectedFilterValue.value ? "text-blue-500" : "text-blue-300";
  }
});

const selectedFilter = computed({
  get() {
    if (
      localFilter.filter.column !== null &&
      localFilter.filter.column.dataSelector === props.column.dataSelector
    ) {
      return localFilter.filter.selectedFilter;
    } else {
      return null;
    }
  },
  set(value) {
    localFilter.filter = {
      column: props.column,
      selectedFilter: value,
      selectedFilterValue: selectedFilterValue.value,
      join: null,
      selectedFilter2: null,
      selectedFilterValue2: null,
    };
  },
});

const selectedFilterValue = computed({
  get() {
    if (
      localFilter.filter.column !== null &&
      localFilter.filter.column.dataSelector === props.column.dataSelector
    ) {
      return localFilter.filter.selectedFilterValue;
    } else {
      return null;
    }
  },
  set(value) {
    localFilter.filter = {
      column: props.column,
      selectedFilter: selectedFilter.value,
      selectedFilterValue: value,
      join: null,
      selectedFilter2: null,
      selectedFilterValue2: null,
    };
  },
});
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
  &.dark_mode {
    background: #202b3c;
    border: 1px solid #202b3c;
    box-shadow: inset 0px -1px 0px #1d2632;
  }
  .ui-table__filters-item {
    padding: 8px 16px;
    color: #5f6b7a;
    .filterText {
      &.dark_mode {
        color: #94a3b8;
      }
    }
    &.bordered {
      &:not(.dark_mode) {
        border-bottom: 1px solid #ecf2f7;
      }
      &.dark_mode {
        box-shadow: inset 0px -1px 0px #1a2535;
      }
    }
  }
}
</style>
