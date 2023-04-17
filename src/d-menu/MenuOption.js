import uniqueRandomString from "../utils/uniqueRandomString";

export default class MenuOption {
  constructor(option, optionTitle = "text") {
    if (typeof option === "string") {
      this.text = option;
      this.uuid = uniqueRandomString(30, 8);
      this.fontFace = "circularSTD";
      this.originalOption = option;
      this.disabled = false;
    } else {
      const originalOption = { ...option };
      const {
        leftIcon = "",
        rightIcon = "",
        href = "",
        to = "",
        textColor = "",
        className = "",
        onClick = undefined,
        onHover = undefined,
        fontFace = "circularSTD",
        disabled = false,
        ...otherArgs
      } = option;
      this.leftIcon = leftIcon;
      this.rightIcon = rightIcon;
      this.text = otherArgs[optionTitle];
      this.href = href;
      this.to = to;
      this.textColor = textColor;
      this.fontFace = fontFace;
      this.className = className;
      this.onClick = onClick;
      this.onHover = onHover;
      this.disabled = disabled;
      this.uuid = uniqueRandomString(30, 8);
      this.originalOption = originalOption;
    }
  }
}
