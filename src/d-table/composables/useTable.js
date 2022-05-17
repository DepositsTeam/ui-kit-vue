import { ref, onMounted, computed, watch, shallowRef, unref } from "vue";
import keyGen from "../../utils/keyGen";
import {
  filterData,
  getDataForPage,
  searchData,
  sortData,
} from "./getDataForPage";

export function useTable(props, emit) {
  const selectedRows = ref([]);
  const initializedCurrentPage = ref(1);
  const initializedData = shallowRef([]);
  const sortingBy = ref(null);
  const filters = shallowRef({
    column: null,
    first: null,
    joiner: null,
    second: null,
  });
  const searchValue = ref("");
  const filterOptions = [
    "Is",
    "Is not",
    "Is empty",
    "Is not empty",
    "Is equal to",
    "Is not equal to",
    "Begins with",
    "Ends with",
    "Contains",
    "Does not contain",
  ];
  const emptyFilterOptions = ["Is empty", "Is not empty"];
  const searchFilterObj = ref(null);

  onMounted(() => {
    initializedData.value = props.data.map((datum) => {
      if (!datum.id) {
        datum.id = keyGen();
      }
      return datum;
    });
  });

  watch(
    () => searchValue.value,
    (val) => {
      if (!val) {
        searchFilterObj.value = null;
      }
    }
  );

  const handleSearch = () => {
    searchFilterObj.value = { search: searchValue.value };
  };

  const updateSortingBy = (val) => (sortingBy.value = val);

  const updateSearchValue = (val) => (searchValue.value = val);

  const updateFilters = (val) =>
    (filters.value = Object.assign({}, unref(val)));

  const computedData = computed(() => {
    let placeholderData = [...initializedData.value];
    if (searchFilterObj.value) {
      placeholderData = searchData(
        initializedData.value,
        searchFilterObj.value.search
      );
    }
    if (filters.value.first) {
      placeholderData = filterData(filters.value, initializedData.value);
    }
    if (sortingBy.value) {
      placeholderData = sortData(sortingBy.value, placeholderData);
    }
    if (props.paginate) {
      return getDataForPage(
        initializedCurrentPage.value,
        props.itemsPerPage,
        placeholderData
      );
    } else {
      return placeholderData;
    }
  });

  const totalPages = computed(() => {
    return Math.ceil(initializedData.value.length / props.itemsPerPage);
  });

  watch(selectedRows, (val) => {
    emit("selections-changed", val);
  });

  const selectAllRows = function () {
    selectedRows.value = [];
    selectedRows.value = [...computedData.value];
  };

  const removeAllSelectedRows = function () {
    selectedRows.value = [];
  };

  const updateSelectedRows = function (arg) {
    if (
      selectedRows.value.length &&
      selectedRows.value.filter((row) => row.id === arg).length === 1
    ) {
      selectedRows.value = selectedRows.value.filter((row) => row.id !== arg);
    } else {
      const dataToPush = computedData.value.filter((datum) => datum.id === arg);
      if (dataToPush.length) {
        selectedRows.value.push(dataToPush[0]);
      }
    }
  };

  const changePage = function (newPage) {
    initializedCurrentPage.value = newPage;
  };

  return {
    selectedRows,
    initializedCurrentPage,
    initializedData,
    totalPages,
    computedData,
    sortingBy,
    filters,
    filterOptions,
    emptyFilterOptions,
    searchValue,
    searchFilterObj,
    updateSearchValue,
    updateSortingBy,
    updateFilters,
    changePage,
    updateSelectedRows,
    removeAllSelectedRows,
    selectAllRows,
    handleSearch,
  };
}
