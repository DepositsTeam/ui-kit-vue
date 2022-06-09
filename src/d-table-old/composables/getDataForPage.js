export const getDataForPage = (currentPage, itemsPerPage, data) => {
  const copiedData = [...data];
  if (copiedData.length <= itemsPerPage) {
    return copiedData;
  } else {
    if (currentPage > 1) {
      return copiedData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      );
    } else {
      return copiedData.slice(0, itemsPerPage);
    }
  }
};

export const sortData = (sortBy, data) => {
  const copiedData = [...data];
  copiedData.sort(function (a, b) {
    if (typeof a === "number" && typeof b === "number") {
      if (sortBy.order === "ASC") {
        return a[sortBy.column.dataSelector] - b[sortBy.column.dataSelector];
      } else {
        return b[sortBy.column.dataSelector] - a[sortBy.column.dataSelector];
      }
    } else {
      const dataSelectedA = a[sortBy.column.dataSelector];
      const dataSelectedB = b[sortBy.column.dataSelector];
      const nameA =
        typeof dataSelectedA === "object"
          ? dataSelectedA.text.toUpperCase()
          : dataSelectedA.toUpperCase();
      const nameB =
        typeof dataSelectedB === "object"
          ? dataSelectedB.text.toUpperCase()
          : dataSelectedB.toUpperCase();
      if (sortBy.order === "ASC") {
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      } else {
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        return 0;
      }
    }
  });
  return copiedData;
};

const runFilter = (column, filter, datum) => {
  const selectedDatum = datum[column.dataSelector];
  const computedDatum =
    typeof selectedDatum === "object" ? selectedDatum.text : selectedDatum;
  switch (filter.option.toLowerCase()) {
    case "is":
    case "is equal to":
      return computedDatum.toLowerCase() == filter.value.toLowerCase();
    case "is not":
    case "is not equal to":
      return computedDatum.toLowerCase() != filter.value.toLowerCase();
    case "is empty":
      return (
        computedDatum.toLowerCase() == "" || computedDatum.toLowerCase() == 0
      );
    case "is not empty":
      return (
        computedDatum.toLowerCase() != "" && computedDatum.toLowerCase() != 0
      );
    case "begins with":
      return computedDatum.toLowerCase().startsWith(filter.value.toLowerCase());
    case "ends with":
      return computedDatum.toLowerCase().endsWith(filter.value.toLowerCase());
    case "contains":
      return computedDatum.toLowerCase().includes(filter.value.toLowerCase());
    case "does not contain":
      return !computedDatum.toLowerCase().includes(filter.value.toLowerCase());
  }
};

export const filterData = (filters, data) => {
  const copiedData = [...data];
  return copiedData.filter((datum) => {
    if (!filters.second) {
      return runFilter(filters.column, filters.first, datum);
    } else {
      if (filters.joiner === "AND") {
        return (
          runFilter(filters.column, filters.first, datum) &&
          runFilter(filters.column, filters.second, datum)
        );
      } else {
        return (
          runFilter(filters.column, filters.first, datum) ||
          runFilter(filters.column, filters.second, datum)
        );
      }
    }
  });
};

export const searchData = (data, search) => {
  const copiedData = [...data];
  return copiedData.filter((datum) => {
    let pass = false;
    for (let datumValue of Object.values(datum)) {
      let value;
      if (typeof datumValue === "string") {
        value = datumValue;
      } else if (typeof datumValue === "object") {
        value = datumValue.text;
      } else {
        value = undefined;
      }
      if (value && value.toLowerCase().includes(search.toLowerCase())) {
        pass = true;
        break;
      }
    }
    return pass;
  });
};
