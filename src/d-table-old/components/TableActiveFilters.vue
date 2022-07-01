<template>
  <d-box ref="reference" class="ui-table__active-filters">
    <d-banner
      @click="showOptions"
      :icon="FunnelIcon"
      @removed="clearFilters"
      removable
    >
      <d-text my0 class="text-gray-500"
        ><span class="text-gray-700">{{ filters.column.display }}</span>
        {{ filters.first.option.toLowerCase() }}
        <span class="text-gray-700">{{ filters.first.value }}</span>

        <span
          v-if="filters.joiner && filters.second.option && filters.second.value"
        >
          {{ " " + filters.joiner }} {{ filters.second.option }}
          <span class="text-gray-700">
            {{ filters.second.value }}
          </span>
        </span>
      </d-text>
    </d-banner>
    <table-active-filter-options
      @close-options="showOptions"
      ref="popper"
      :show="shouldShowOptions"
    />
  </d-box>
</template>

<script>
import DBox from "../../d-box/DBox.vue";
import DText from "../../d-text/DText.vue";
import DBanner from "../../d-banner/DBanner.vue";
import TableActiveFilterOptions from "./TableActiveFilterOptions.vue";
import { inject, ref } from "vue";
import { FunnelIcon } from "../../icons";
import { computePosition, flip, offset, shift } from "@floating-ui/dom";

export default {
  name: "TableActiveFilters",
  components: {
    TableActiveFilterOptions,
    DBox,
    DText,
    DBanner,
  },
  setup() {
    const popper = ref(null);
    const reference = ref(null);
    const filters = inject("filters");
    const updateFilters = inject("updateFilters");
    const shouldShowOptions = ref(false);

    const clearFilters = () => {
      updateFilters({ column: null, first: null, joiner: null, second: null });
      if (shouldShowOptions.value) {
        showOptions();
      }
    };

    const showOptions = () => {
      shouldShowOptions.value = !shouldShowOptions.value;

      if (shouldShowOptions.value) {
        computePosition(reference.value.$el, popper.value.$el, {
          placement: "bottom",
          middleware: [offset(6), flip(), shift({ padding: 5 })],
        }).then(({ x, y }) => {
          Object.assign(popper.value.$el.style, {
            left: `${x}px`,
            top: `${y}px`,
          });
        });
      }
    };

    return {
      filters,
      clearFilters,
      showOptions,
      FunnelIcon,
      shouldShowOptions,
      popper,
      reference,
    };
  },
};
</script>

<style lang="scss">
.ui-table__active-filters {
  position: relative;
}
</style>
