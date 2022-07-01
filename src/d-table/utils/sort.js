export const sort = (sortValue, data) => {
  console.log(sortValue);
  data.sort((a, b) => {

    const nameA = a[sortValue.column.dataSelector].toUpperCase();
    const nameB = b[sortValue.column.dataSelector].toUpperCase();
    if (nameA < nameB) {
      return sortValue.direction === "asc" ? -1 : 1;
    }
    if (nameA > nameB) {
      return sortValue.direction === "asc" ? 1 : -1;
    }
    return 0;
  });
};
