import uniqueRandomString from "../../utils/uniqueRandomString";

const validSortTypes = ["string", "numeric", "date"];

export default class Column {
  constructor({
    display = "",
    dataSelector = "",
    uppercase = true,
    sortable = true,
    sortNumerically = false,
    sortType = "string",
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
    if (sortType) {
      if (validSortTypes.includes(sortType)) {
        this.sortType = sortType;
      } else {
        throw new Error(
          `Invalid sort type ${sortType} provided for column ${this.dataSelector} [${this.display}]`
        );
      }
    } else {
      this.sortType = "string";
    }
  }
}
