import { computed } from "vue";

export const useDropdown = (props) => {
  const computedOptions = computed(() => {
    return props.options.map((option) => {
      let newOption = {
        ...option,
      };
      newOption.text =
        typeof option === "string" ? option : option[props.optionTitle];
      if (typeof option === "string") {
        newOption.value = option;
      } else {
        newOption.value =
          option[props.optionValue] === undefined
            ? option[props.optionTitle]
            : option[props.optionValue];
      }
      newOption.originalOption = option;
      return newOption;
    });
  });

  return { computedOptions };
};
