export const getColumnWidth = (column, isCheckbox = false) => {
  let returnedStyles = { "--column_min_width": "120px" };
  if (!isCheckbox) {
    if (column.width) {
      returnedStyles["--column_width"] = column.width;
    }
    if (column.maxWidth) {
      returnedStyles["--column_max_width"] = column.maxWidth;
    }
    if (column.minWidth) {
      returnedStyles["--column_min_width"] = column.minWidth;
    }
  } else {
    returnedStyles = {
      "--column_width": "50px",
      "--column_min_width": "50px",
      "--column_max_width": "50px",
    };
  }
  return returnedStyles;
};
