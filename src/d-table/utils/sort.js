export const sort = (sortConfiguration, data) => {
  data.sort((a, b) => {
    if (sortConfiguration.column.sortNumerically) {
      const valueA = a[sortConfiguration.column.dataSelector];
      const valueB = b[sortConfiguration.column.dataSelector];
      return sortConfiguration.direction === "asc"
        ? valueA - valueB
        : valueB - valueA;
    }
    const valueA = a[sortConfiguration.column.dataSelector].toUpperCase();
    const valueB = b[sortConfiguration.column.dataSelector].toUpperCase();
    if (valueA < valueB) {
      return sortConfiguration.direction === "asc" ? -1 : 1;
    }
    if (valueA > valueB) {
      return sortConfiguration.direction === "asc" ? 1 : -1;
    }
    return 0;
  });
};
