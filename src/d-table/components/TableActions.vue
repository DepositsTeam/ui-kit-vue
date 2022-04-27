<template>
  <d-box
    display="flex"
    justify-content="space-between"
    class="ui-table__actions-wrapper"
  >
    <d-box class="ui-table__actions__left">
      <d-textfield
        v-if="search"
        size="large"
        v-model="searchText"
        :placeholder="searchPlaceholder"
        :left-icon="SearchIcon"
        @keydown="initiateSearch"
      />
      <d-box display="flex">
        <table-active-sort v-if="sortingBy" />
        <table-active-filters v-if="filters.first" />
      </d-box>
    </d-box>
    <d-box class="ui-table__actions__right">
      <d-button
        v-bind="customizeViewBtn"
        @click="showCustomizeModal"
        v-if="enableCustomizeView"
        >Customize view
      </d-button>
      <d-button @click="exportCsv" v-if="enableCsvExport" v-bind="exportCsvBtn">
        <d-text color="text-gray-700" font-weight="500" font-face="heroNew">{{
          exportCsvBtn.textValue
        }}</d-text>
      </d-button>
    </d-box>
    <table-customize-view-modal
      @close-modal="closeModal"
      :should-show-customize-modal="shouldShowCustomizeModal"
    />
  </d-box>
</template>

<script>
import DBox from "../../d-box/DBox.vue";
import DButton from "../../d-button/DButton.vue";
import DText from "../../d-text/DText.vue";
import { inject, ref, computed } from "vue";
import { useCsvExport } from "../composables/useCsvExport";
import TableActiveFilters from "./TableActiveFilters.vue";
import TableCustomizeViewModal from "./TableCustomizeViewModal.vue";
import TableActiveSort from "./TableActiveSort.vue";
import DTextfield from "../../d-textfield/DTextfield.vue";
import { SearchIcon } from "../../icons";

export default {
  name: "TableActions",
  components: {
    DTextfield,
    TableCustomizeViewModal,
    TableActiveFilters,
    TableActiveSort,
    DBox,
    DButton,
    DText,
  },
  setup() {
    const shouldShowCustomizeModal = ref(false);
    const enableCsvExport = inject("enableCsvExport");
    const exportCsvBtn = inject("exportCsvBtn");
    const data = inject("data");
    const generatedCsvName = inject("generatedCsvName");
    const enableCustomizeView = inject("enableCustomizeView");
    const customizeViewBtn = inject("customizeViewBtn");
    const sortingBy = inject("sortingBy");
    const filters = inject("filters");
    const search = inject("search");
    const handleSearch = inject("handleSearch");
    const searchPlaceholder = inject("searchPlaceholder");
    const searchValue = inject("searchValue");
    const updateSearchValue = inject("updateSearchValue");

    const { exportCsv } = useCsvExport(data, generatedCsvName);

    const showCustomizeModal = () => (shouldShowCustomizeModal.value = true);

    const closeModal = () => (shouldShowCustomizeModal.value = false);

    const searchText = computed({
      get() {
        return searchValue.value;
      },
      set(value) {
        updateSearchValue(value);
      },
    });

    const initiateSearch = (e) => {
      if (e.code === "Enter") {
        handleSearch(search);
      }
    };

    return {
      enableCsvExport,
      exportCsvBtn,
      filters,
      exportCsv,
      enableCustomizeView,
      shouldShowCustomizeModal,
      showCustomizeModal,
      closeModal,
      customizeViewBtn,
      sortingBy,
      search,
      SearchIcon,
      searchPlaceholder,
      searchText,
      initiateSearch,
    };
  },
};
</script>

<style lang="scss">
.ui-table__actions-wrapper {
  margin-bottom: 16px;
}
.ui-table__actions__left {
  display: flex;
  & > :first-of-type {
    margin-right: 8px;
  }
}
</style>
