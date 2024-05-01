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
      // console.log("I got here", key, columnHashMap, columnHashMap[key], key);
      const currentColHashMap = new Column(columnHashMap[key]);
      if (currentColHashMap && currentColHashMap.filterable) {
        console.log("I got here for real");
        console.log(currentColHashMap);
        if (
          !currentColHashMap.pipe &&
          (!row[key] ||
            (typeof row[key] !== "string" && typeof row[key] !== "number"))
        ) {
          continue;
        }
        let hayStack;
        if (row[key]) {
          console.log("I also got hre", key);
          const stringRow =
            typeof row[key] === "number" ? "" + row[key] : row[key];
          try {
            hayStack = caseSensitiveSearch
              ? stringRow
              : stringRow.toLowerCase();
          } catch (err) {
            console.log(key, err, row[key]);
            throw err;
          }

          console.log("Before pipe is", hayStack);
        } else if (currentColHashMap.pipe) {
          let processedPipe = currentColHashMap.pipe(
            row[key] ? row[key] : undefined,
            row
          );
          if (processedPipe !== undefined && processedPipe !== null) {
            hayStack = processedPipe + "";
            hayStack = caseSensitiveSearch ? hayStack : hayStack.toLowerCase();
          }
        }
        if (key == "description") {
          console.log(hayStack);
        }
        console.log("Haysstack is ", hayStack);
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
