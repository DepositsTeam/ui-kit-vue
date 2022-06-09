<template>
  <d-box class="ui-table__body">
    <table-body-row
      v-for="(datum, index) in data"
      :key="`datum_${keyGen()}_${index}`"
      :row="datum"
      class="ui-table__body__row"
      :class="{ last: index === data.length - 1 }"
      @update-selected-rows="$emit('update-selected-rows', $event)"
    />
  </d-box>
</template>

<script>
import DBox from "../../d-box/DBox.vue";
import TableBodyRow from "./TableBodyRow.vue";
import keyGen from "../../utils/keyGen";
import { inject } from "vue";
export default {
  name: "TableBody",
  emits: ["update-selected-rows"],
  components: {
    DBox,
    TableBodyRow,
  },
  methods: {
    keyGen,
  },
  setup() {
    const data = inject("data");

    return {
      data,
    };
  },
};
</script>

<style lang="scss">
.ui-table__body__row {
  &.last {
    border-radius: 0 0 4px 4px;
    border-bottom: 1px solid #e1e7ec;
  }
}
</style>
