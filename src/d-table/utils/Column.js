import uniqueRandomString from "../../utils/uniqueRandomString";

export default class Column {
  constructor({
    display = "",
    dataSelector = "",
    uppercase = true,
    sortable = true,
    sortNumerically = false,
    filterable = true,
    width = "",
    minWidth = "",
    maxWidth = "",
    excludeFromCSV = false,
    position = "left",
    visible = true,
  } = {}) {
    this.display = display;
    this.dataSelector = dataSelector;
    this.uppercase = uppercase;
    this.sortable = sortable;
    this.sortNumerically = sortNumerically;
    this.filterable = filterable;
    this.width = width;
    this.minWidth = minWidth;
    this.maxWidth = maxWidth;
    this.excludeFromCSV = excludeFromCSV;
    this.position = position;
    this.visible = visible;
    this.uuid = uniqueRandomString(30, 8);
  }
}
