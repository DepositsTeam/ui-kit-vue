<template>
  <d-box class="ui-table__body__row" :class="{ selected: this.selectedRow }">
    <table-body-cell v-if="checkbox" is-checkbox first>
      <d-checkbox v-model="selectedRow" />
    </table-body-cell>
    <table-body-cell
      v-for="(column, index) in columns"
      :key="`${keyGen()}_body_cell_${index}`"
      :column="column"
      :data="row"
      :first="index === 0 && !checkbox"
    />
  </d-box>
</template>

<script>
import DBox from "../../d-box/DBox.vue";
import TableBodyCell from "./TableBodyCell.vue";
import DCheckbox from "../../d-checkbox/DCheckbox.vue";
import keyGen from "../../utils/keyGen";
import { inject } from "vue";

export default {
  name: "TableBodyRow",
  emit: ["update-selected-rows"],
  components: {
    DBox,
    TableBodyCell,
    DCheckbox,
  },
  computed: {
    selectedRow: {
      get() {
        return (
          this.selectedRows.length &&
          this.selectedRows.filter((row) => row.id === this.row.id).length === 1
        );
      },
      set() {
        this.$emit("update-selected-rows", this.row.id);
      },
    },
  },
  props: {
    row: {
      type: Object,
    },
  },
  methods: {
    keyGen,
  },
  setup() {
    const columns = inject("columns");
    const checkbox = inject("checkbox");
    const selectedRows = inject("selectedRows");

    return {
      columns,
      checkbox,
      selectedRows,
    };
  },
};
</script>

<style lang="scss">
.ui-table__body__row {
  display: flex;
  background: #fff;
  padding: 16px 24px;
  border: 1px solid #e1e7ec;
  border-bottom: none;
  &:hover {
    background: #f5f8fa;
  }
  &.selected {
    background: #f2fafc;
  }
}
</style>
