<template>
  <d-box class="ui-table__head">
    <table-head-cell v-if="checkbox" is-checkbox first>
      <d-checkbox v-model="toggleAll" />
    </table-head-cell>
    <table-head-cell
      v-for="(column, index) in columns"
      :key="`${keyGen()}_cell_${index}`"
      :column="column"
      :first="index === 0 && !checkbox"
      :index="index"
      @recently-opened="recentlyOpened"
    />
  </d-box>
</template>

<script>
import DBox from "../../d-box/DBox.vue";
import TableHeadCell from "./TableHeadCell.vue";
import keyGen from "../../utils/keyGen";
import DCheckbox from "../../d-checkbox/DCheckbox.vue";
import { inject } from "vue";

export default {
  name: "TableHead",
  data: () => ({
    toggleAll: false,
  }),
  components: {
    DBox,
    TableHeadCell,
    DCheckbox,
  },
  emits: ["all-checked", "clear-checked"],
  methods: {
    keyGen,
  },
  watch: {
    toggleAll: function (val) {
      if (val) {
        this.$emit("all-checked");
      } else {
        if (this.selectedRows.length === this.data.length) {
          this.$emit("clear-checked");
        }
      }
    },
    selectedRows: function (val) {
      if (val && val.length !== this.data.length) {
        this.toggleAll = false;
      }
    },
  },
  setup() {
    const columns = inject("columns");
    const data = inject("data");
    const checkbox = inject("checkbox");
    const selectedRows = inject("selectedRows");

    const recentlyOpened = () => {
    };

    return {
      columns,
      data,
      checkbox,
      selectedRows,
      recentlyOpened,
    };
  },
};
</script>

<style lang="scss">
.ui-table__head {
  display: flex;
  background: #f5f8fa;
  padding: 16px 24px;
  border-radius: 4px 4px 0 0;
  border: 1px solid #e1e7ec;
  border-bottom: none;
  position: relative;
}
</style>
