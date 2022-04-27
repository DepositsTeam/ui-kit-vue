<template>
  <d-box :class="{ show }" class="table-active-filter-options__wrapper">
    <d-box class="table-active-filter-options__section">
      <d-select
        label="Filter"
        v-model="holdingFilters.first.option"
        size="medium"
        :options="filterOptions"
      />
      <d-textfield
        :disabled="disableFirstFilterValue"
        label="Value"
        size="medium"
        v-model="holdingFilters.first.value"
      />
    </d-box>
    <d-box
      v-if="showExtraConditions"
      class="table-active-filter-options__section"
    >
      <d-radio ringed label="And" value="AND" v-model="holdingFilters.joiner" />
      <d-radio ringed label="Or" value="OR" v-model="holdingFilters.joiner" />
    </d-box>
    <d-box
      v-if="showExtraConditions"
      class="table-active-filter-options__section"
    >
      <d-banner align-top :onRemove="removeExtraOptions" removable>
        <d-box class="active-filter__flex">
          <d-select
            label="Filter"
            v-model="holdingFilters.second.option"
            size="medium"
            :options="filterOptions"
          />
          <d-textfield
            label="Value"
            :disabled="disableSecondFilterValue"
            size="medium"
            v-model="holdingFilters.second.value"
          />
        </d-box>
      </d-banner>
    </d-box>
    <d-box class="table-active-filter-options__section">
      <d-button
        @click="applyFilters"
        :disabled="disableApplyFiltersBtn"
        color-scheme="primary"
        size="medium"
        >Apply Filter</d-button
      >
      <d-button @click="closeOptions" size="medium">Cancel</d-button>
    </d-box>
    <d-box
      v-if="!showExtraConditions"
      class="text-cyan-500"
      display="flex"
      align-items="center"
      @click="showExtraOptions"
      cursor="pointer"
    >
      <AddIcon />
      <d-text my0> Add condition </d-text>
    </d-box>
  </d-box>
</template>

<script>
import DBox from "../../d-box/DBox.vue";
import DSelect from "../../d-select/DSelect.vue";
import DTextfield from "../../d-textfield/DTextfield.vue";
import DButton from "../../d-button/DButton.vue";
import DText from "../../d-text/DText.vue";
import AddIcon from "../../icons/AddIcon.vue";
import DBanner from "../../d-banner/DBanner.vue";
import DRadio from "../../d-radio/DRadio.vue";
import { ref, inject, computed, unref, reactive } from "vue";
export default {
  name: "TableActiveFilterOptions",
  emits: ["close-options"],
  props: {
    show: {
      type: Boolean,
    },
  },
  components: {
    DRadio,
    DBanner,
    AddIcon,
    DText,
    DButton,
    DTextfield,
    DSelect,
    DBox,
  },
  setup(props, { emit }) {
    const filters = inject("filters");
    const updateFilters = inject("updateFilters");
    const filterOptions = inject("filterOptions");
    const emptyFilterOptions = inject("emptyFilterOptions");
    const holdingFilters = ref(Object.assign({}, filters.value));

    const showExtraConditions = ref(false);

    const showExtraOptions = () => {
      holdingFilters.value.second = {
        option: "",
        value: "",
      };
      showExtraConditions.value = true;
    };

    const removeExtraOptions = () => {
      showExtraConditions.value = false;
      holdingFilters.value.second = null;
      holdingFilters.value.joiner = null;
    };

    const disableFirstFilterValue = computed(() => {
      return emptyFilterOptions.includes(holdingFilters.value.first.option);
    });

    const disableSecondFilterValue = computed(() => {
      if (holdingFilters.value.second.option) {
        return emptyFilterOptions.includes(holdingFilters.value.second.option);
      } else {
        return null;
      }
    });

    const closeOptions = () => {
      emit("close-options");
    };

    const applyFilters = () => {
      updateFilters({
        column: Object.assign({}, unref(holdingFilters.value.column)),
        joiner: unref(holdingFilters.value.joiner),
        first: Object.assign({}, unref(holdingFilters.value.first)),
        second: Object.assign({}, unref(holdingFilters.value.second)),
      });

      emit("close-options");
    };

    const disableApplyFiltersBtn = computed(() => {
      if (showExtraConditions.value) {
        if (holdingFilters.value.joiner) {
          if (holdingFilters.value.second.option) {
            if (disableSecondFilterValue.value) {
              if (
                holdingFilters.value.first.option ===
                holdingFilters.value.second.option
              ) {
                return true;
              } else return false;
            } else {
              if (
                holdingFilters.value.first.value ===
                  holdingFilters.value.second.value &&
                holdingFilters.value.first.option ===
                  holdingFilters.value.second.option
              ) {
                return true;
              } else return !holdingFilters.value.second.value;
            }
          } else return true;
        } else {
          return true;
        }
      } else return false;
    });

    return {
      filterOptions,
      showExtraConditions,
      showExtraOptions,
      removeExtraOptions,
      closeOptions,
      applyFilters,
      disableFirstFilterValue,
      holdingFilters,
      disableApplyFiltersBtn,
      disableSecondFilterValue,
    };
  },
};
</script>

<style lang="scss">
.table-active-filter-options__wrapper {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 320px;
  max-width: 570px;
  width: 570px;
  padding: 24px;
  background: white;
  box-shadow: 0 4px 8px rgba(3, 47, 60, 0.14);
  border-radius: 6px;
  display: none;
  z-index: 9999;

  &.show {
    display: block;
  }
}
.table-active-filter-options__section {
  display: flex;
  margin-bottom: 24px;
  & > * {
    &:not(:last-child) {
      margin-right: 16px;
    }
  }
}
.active-filter__flex {
  display: flex;
  & > * {
    &:not(:last-child) {
      margin-right: 16px;
    }
  }
}
</style>