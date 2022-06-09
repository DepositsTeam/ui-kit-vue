<template>
  <d-box class="ui-table__active-filters">
    <d-banner
      :icon="sortingBy.order === 'ASC' ? SortAscendingIcon : SortDescendingIcon"
      @removed="updateSortingBy(null)"
      removable
    >
      <d-text my0 class="text-gray-500"
        ><span class="text-gray-700">{{ sortingBy.column.display }}</span> is
        <span class="text-gray-700">{{
          sortingBy.order === "ASC" ? "Ascending" : "Descending"
        }}</span></d-text
      >
    </d-banner>
  </d-box>
</template>

<script>
import { inject } from "vue";
import { DBanner, DText, DBox } from "../../main";
import { SortAscendingIcon, SortDescendingIcon } from "../../icons";

export default {
  name: "TableActiveSort",
  components: {
    DBanner,
    DText,
    DBox,
  },
  setup() {
    const sortingBy = inject("sortingBy");
    const updateSortingBy = inject("updateSortingBy");

    return {
      sortingBy,
      updateSortingBy,
      SortAscendingIcon,
      SortDescendingIcon,
    };
  },
};
</script>

<style scoped></style>
