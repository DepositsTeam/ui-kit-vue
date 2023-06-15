import { computed } from "vue";

export const useCheckbox = (props, emit) => {
  const computedValue = computed(() =>
    props.value === "" ? props.label : props.value
  );

  const computedTrueValue = computed(() => {
    if (props.value) {
      return props.value;
    } else {
      return props.trueValue === true ? true : this.value;
    }
  });

  const computedFalseValue = computed(() => {
    return props.falseValue === false ? false : props.falseValue;
  });

  const isChecked = computed(() => {
    if (props.modelValue instanceof Array) {
      if (props.values.length) {
        return props.values.every((element) => {
          return props.modelValue.includes(element);
        });
      }
      return props.modelValue.includes(computedValue.value);
    }
    return props.modelValue === computedTrueValue.value;
  });

  const triggerChange = () => {
    if (props.disabled) {
      return;
    }
    if (props.values.length) {
      let modelValue = [...props.modelValue];
      if (isChecked.value) {
        props.values.forEach((value) => {
          if (modelValue.includes(value)) {
            modelValue.splice(modelValue.indexOf(value), 1);
          }
        });
      } else {
        props.values.forEach((value) => {
          if (!modelValue.includes(value)) {
            modelValue.push(value);
          }
        });
      }
      emit("update:modelValue", modelValue);
    } else {
      if (props.modelValue instanceof Array) {
        let modelValue = [...props.modelValue];
        if (isChecked.value) {
          modelValue.splice(modelValue.indexOf(computedValue.value), 1);
        } else {
          modelValue.push(computedValue.value);
        }
        emit("update:modelValue", modelValue);
      } else {
        emit(
          "update:modelValue",
          !isChecked.value ? computedTrueValue.value : computedFalseValue.value
        );
      }
    }
  };

  return { isChecked, triggerChange };
};
