import { computed } from "vue";

export function useWrapperProps(props) {
  const computedMargin = computed(() => ({
    marginTop: props.marginTop
      ? props.marginTop
      : props.marginY
      ? props.marginY
      : 0,
    marginLeft: props.marginLeft
      ? props.marginLeft
      : props.marginX
      ? props.marginX
      : 0,
    marginBottom: props.marginBottom
      ? props.marginBottom
      : props.marginY
      ? props.marginY
      : 0,
    marginRight: props.marginRight
      ? props.marginRight
      : props.marginX
      ? props.marginX
      : 0,
  }));
  const computedPadding = computed(() => ({
    paddingTop: props.paddingTop
      ? props.paddingTop
      : props.paddingY
      ? props.paddingY
      : 0,
    paddingLeft: props.paddingLeft
      ? props.paddingLeft
      : props.paddingX
      ? props.paddingX
      : 0,
    paddingBottom: props.paddingBottom
      ? props.paddingBottom
      : props.paddingY
      ? props.paddingY
      : 0,
    paddingRight: props.paddingRight
      ? props.paddingRight
      : props.paddingX
      ? props.paddingX
      : 0,
  }));

  const computedWidth = computed(() => ({
    width: props.width ? props.width : "100%",
  }));

  return { computedPadding, computedMargin, computedWidth };
}
