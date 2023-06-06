import { computed } from "vue";
import uniqueRandomString from "../../utils/uniqueRandomString";

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
      return {
        ...newOption,
        unique_identifier_for_dropdown: uniqueRandomString(30, 8),
        ...(props.optionDescription
          ? { description: option[props.optionDescription] }
          : {}),
        ...(props.optionIcon ? { icon: option[props.optionIcon] } : {}),
      };
    });
  });

  return { computedOptions };
};
