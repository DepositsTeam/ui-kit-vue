<template>
  <d-box class="table-filter-option" :class="{ bordered }">
    <d-radio
      label-class="text-gray-600"
      v-model="computedValue"
      :label="label"
      ringed
    />
    <d-textfield
      v-if="isSelected && !shouldBeEmpty"
      label="Value"
      placeholder="Type something"
      size="medium"
      label-class="text-gray-600"
      v-model="filterValue"
    />
  </d-box>
</template>

<script>
import DBox from "../../d-box/DBox.vue";
import DRadio from "../../d-radio/DRadio.vue";
import DTextfield from "../../d-textfield/DTextfield.vue";
import { computed, inject } from "vue";
export default {
  name: "TableFilterOption",
  components: {
    DBox,
    DRadio,
    DTextfield,
  },
  emits: ["update-filter-option", "update-filter-value"],
  props: {
    label: {
      type: String,
      default: "Is",
    },
    currentLabel: {
      type: String,
    },
    index: {
      type: Number,
    },
    currentFilterValue: {
      type: String,
    },
  },
  setup(props, { emit }) {
    const emptyFilterOptions = inject("emptyFilterOptions");

    const computedValue = computed({
      get() {
        return props.label === props.currentLabel ? props.label : false;
      },
      set() {
        emit("update-filter-option", props.label);
      },
    });

    const filterValue = computed({
      get() {
        return props.currentFilterValue;
      },
      set(value) {
        emit("update-filter-value", value);
      },
    });

    const shouldBeEmpty = computed(() => {
      return emptyFilterOptions.includes(computedValue.value);
    });

    const isSelected = computed(() => {
      return props.currentLabel === props.label;
    });

    const bordered = computed(() => {
      return (props.index + 1) % 2 === 0 || isSelected.value;
    });

    return {
      emptyFilterOptions,
      computedValue,
      filterValue,
      shouldBeEmpty,
      isSelected,
      bordered,
    };
  },
};
</script>

<style lang="scss">
.table-filter-option {
  padding: 8px 16px;
  &.bordered {
    border-bottom: 1px solid #ecf2f7;
  }
}
</style>
