import moment from "moment";

const numericSort = (a, b, sortConfiguration) => {
  const valueA = a[sortConfiguration.column.dataSelector];
  const valueB = b[sortConfiguration.column.dataSelector];
  return sortConfiguration.direction === "asc"
    ? valueA - valueB
    : valueB - valueA;
};

const stringSort = (a, b, sortConfiguration) => {
  const valueA = ("" + a[sortConfiguration.column.dataSelector]).toUpperCase();
  const valueB = ("" + b[sortConfiguration.column.dataSelector]).toUpperCase();
  if (valueA < valueB) {
    return sortConfiguration.direction === "asc" ? -1 : 1;
  }
  if (valueA > valueB) {
    return sortConfiguration.direction === "asc" ? 1 : -1;
  }
  return 0;
};

const dateSort = (a, b, sortConfiguration) => {
  const valueA = moment(a[sortConfiguration.column.dataSelector]);
  const valueB = moment(b[sortConfiguration.column.dataSelector]);
  if (!valueA.isValid()) {
    throw new Error(
      `Invalid date provided for column ${
        sortConfiguration.column.dataSelector
      } [${sortConfiguration.column.display}] - ${
        a[sortConfiguration.column.dataSelector]
      }`
    );
  } else if (!valueB.isValid()) {
    throw new Error(
      `Invalid date provided for column ${
        sortConfiguration.column.dataSelector
      } [${sortConfiguration.column.display}] - ${
        b[sortConfiguration.column.dataSelector]
      }`
    );
  } else {
    if (valueA.isBefore(valueB)) {
      return sortConfiguration.direction === "asc" ? -1 : 1;
    }
    if (valueA.isAfter(valueB)) {
      return sortConfiguration.direction === "asc" ? 1 : -1;
    }
    return 0;
  }
};

const sortTypes = {
  string: stringSort,
  numeric: numericSort,
  date: dateSort,
};

export const sort = (sortConfiguration, data) => {
  data.sort((a, b) => {
    if (sortConfiguration.column.sortNumerically) {
      return sortTypes.numeric(a, b, sortConfiguration);
    }
    return sortTypes[sortConfiguration.column.sortType](
      a,
      b,
      sortConfiguration
    );
  });
};
