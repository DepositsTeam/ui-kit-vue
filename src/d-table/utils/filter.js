export const search = (
  search,
  rows,
  columnHashMap,
  caseSensitiveSearch = false
) => {
  return rows.filter((row) => {
    for (let key of Object.keys(row)) {
      if (columnHashMap[key].filterable) {
        let hayStack = caseSensitiveSearch ? row[key] : row[key].toLowerCase();
        let needle = caseSensitiveSearch ? search : search.toLowerCase();
        if (hayStack.includes(needle)) {
          return true;
        }
      }
    }
    return false;
  });
};

const filterMaps = {
  Is: (dataItemToCheck, value) => dataItemToCheck == value,
  "Is not": (dataItemToCheck, value) => dataItemToCheck != value,
  "Is empty": (dataItemToCheck) =>
    dataItemToCheck === null ||
    dataItemToCheck === "" ||
    dataItemToCheck === undefined ||
    dataItemToCheck === 0 ||
    dataItemToCheck === "0" ||
    !dataItemToCheck,
  "Is not empty": (dataItemToCheck) => !!dataItemToCheck,
  "Is equal to": (dataItemToCheck, value) => dataItemToCheck === value,
  "Is not equal to": (dataItemToCheck, value) => dataItemToCheck !== value,
  "Begins with": (dataItemToCheck, value) => dataItemToCheck.startsWith(value),
  "Ends with": (dataItemToCheck, value) => dataItemToCheck.endsWith(value),
  Contains: (dataItemToCheck, value) => dataItemToCheck.includes(value),
  "Does not contain": (dataItemToCheck, value) =>
    !dataItemToCheck.includes(value),
};

export const filter = (filter, rows) => {
  const column = filter.column.dataSelector;
  return rows.filter((row) => {
    const dataItemToCheck = row[column];
    const leftFilter = filterMaps[filter.selectedFilter](
      dataItemToCheck,
      filter.selectedFilterValue
    );
    let rightFilter = null;
    if (filter.join) {
      rightFilter = filterMaps[filter.selectedFilter2](
        dataItemToCheck,
        filter.selectedFilterValue2
      );
    }
    if (filter.join) {
      return filter.join === "and"
        ? leftFilter && rightFilter
        : leftFilter || rightFilter;
    } else {
      return leftFilter;
    }
  });
};
