import uniqueRandomString from "../../utils/uniqueRandomString";

export default class Column {
  constructor({
    display = "",
    dataSelector = "",
    uppercase = true,
    sortable = true,
    sortNumerically = false,
    filterable = true,
    fixed = false,
    width = "",
    minWidth = "",
    maxWidth = "",
    excludeFromCSV = false,
    position = "left",
    visible = true,
    noWrap = false,
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
    this.fixed = fixed;
    this.uuid = uniqueRandomString(30, 8);
    this.noWrap = noWrap;
  }
}
