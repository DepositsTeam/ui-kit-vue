import { computed } from "vue";

const unitizeValue = (value) =>
  typeof value === "number" ? `${value}px` : value;

export function useWrapperProps(props) {
  const computedMargin = computed(() => ({
    marginTop: unitizeValue(
      props.marginTop ? props.marginTop : props.marginY ? props.marginY : 0
    ),
    marginLeft: unitizeValue(
      props.marginLeft ? props.marginLeft : props.marginX ? props.marginX : 0
    ),
    marginBottom: unitizeValue(
      props.marginBottom
        ? props.marginBottom
        : props.marginY
        ? props.marginY
        : 0
    ),
    marginRight: unitizeValue(
      props.marginRight ? props.marginRight : props.marginX ? props.marginX : 0
    ),
  }));
  const computedPadding = computed(() => ({
    paddingTop: unitizeValue(
      props.paddingTop ? props.paddingTop : props.paddingY ? props.paddingY : 0
    ),
    paddingLeft: unitizeValue(
      props.paddingLeft
        ? props.paddingLeft
        : props.paddingX
        ? props.paddingX
        : 0
    ),
    paddingBottom: unitizeValue(
      props.paddingBottom
        ? props.paddingBottom
        : props.paddingY
        ? props.paddingY
        : 0
    ),
    paddingRight: unitizeValue(
      props.paddingRight
        ? props.paddingRight
        : props.paddingX
        ? props.paddingX
        : 0
    ),
  }));

  const computedWidth = computed(() => ({
    width: unitizeValue(props.width ? props.width : "100%"),
  }));

  return { computedPadding, computedMargin, computedWidth };
}
