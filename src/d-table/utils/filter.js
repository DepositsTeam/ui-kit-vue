import Column from "@/d-table/utils/Column";

export const search = (
  search,
  rows,
  columnHashMap,
  caseSensitiveSearch = false
) => {
  return rows.filter((row) => {
    // for (let key of Object.keys(row)) {

    for (let key of Object.keys(columnHashMap)) {
      const currentColHashMap = new Column(columnHashMap[key]);
      if (currentColHashMap && currentColHashMap.filterable) {
        if (
          !currentColHashMap.pipe &&
          (!row[key] ||
            (typeof row[key] !== "string" && typeof row[key] !== "number"))
        ) {
          continue;
        }
        let hayStack;
        if (currentColHashMap.pipe) {
          let processedPipe = currentColHashMap.pipe(
            row[key] ? row[key] : undefined,
            row
          );
          if (processedPipe !== undefined && processedPipe !== null) {
            hayStack = processedPipe + "";
            hayStack = caseSensitiveSearch ? hayStack : hayStack.toLowerCase();
          }
        } else if (row[key]) {
          const stringRow =
            typeof row[key] === "number" ? "" + row[key] : row[key];

          hayStack = caseSensitiveSearch ? stringRow : stringRow.toLowerCase();
        }

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
  Is: (dataItemToCheck, value) => dataItemToCheck === value,
  "Is not": (dataItemToCheck, value) => dataItemToCheck !== value,
  "Is empty": (dataItemToCheck) =>
    dataItemToCheck === null ||
    dataItemToCheck === "" ||
    dataItemToCheck === undefined ||
    dataItemToCheck === 0 ||
    dataItemToCheck === "0" ||
    !dataItemToCheck,
  "Is not empty": (dataItemToCheck) => !!dataItemToCheck,
  "Is equal to": (dataItemToCheck, value) => dataItemToCheck == value,
  "Is not equal to": (dataItemToCheck, value) => dataItemToCheck != value,
  "Begins with": (dataItemToCheck, value) => {
    if (typeof dataItemToCheck === "number") {
      dataItemToCheck = "" + dataItemToCheck;
    }
    return dataItemToCheck.startsWith(value);
  },
  "Ends with": (dataItemToCheck, value) => {
    if (typeof dataItemToCheck === "number") {
      dataItemToCheck = "" + dataItemToCheck;
    }
    return dataItemToCheck.endsWith(value);
  },
  Contains: (dataItemToCheck, value) => {
    if (typeof dataItemToCheck === "number") {
      dataItemToCheck = "" + dataItemToCheck;
    }
    return dataItemToCheck.includes(value);
  },
  "Does not contain": (dataItemToCheck, value) => {
    if (typeof dataItemToCheck === "number") {
      dataItemToCheck = "" + dataItemToCheck;
    }
    return !dataItemToCheck.includes(value);
  },
};

export const filter = (filter, rows, caseSensitiveSearch = false) => {
  const column = filter.column.dataSelector;
  return rows.filter((row) => {
    let dataItemToCheck;
    if (filter.column.pipe) {
      dataItemToCheck = filter.column.pipe(
        row[column] ? row[column] : undefined,
        row
      );
    } else {
      dataItemToCheck = row[column];
    }

    let haystack1 = filter.selectedFilterValue;

    if (!caseSensitiveSearch) {
      dataItemToCheck = dataItemToCheck.toLowerCase();
      haystack1 = haystack1.toLowerCase();
    }

    const leftFilter = filterMaps[filter.selectedFilter](
      dataItemToCheck,
      haystack1
    );

    let rightFilter = null;
    if (filter.join) {
      let haystack2 = filter.selectedFilterValue2;
      if (!caseSensitiveSearch) {
        haystack2 = haystack2.toLowerCase();
      }
      rightFilter = filterMaps[filter.selectedFilter2](
        dataItemToCheck,
        haystack2
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
