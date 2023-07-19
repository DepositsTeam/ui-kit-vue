import { onMounted, computed, ref } from "vue";

export const useRadio = (props, emit) => {
  const mounted = ref(false);

  onMounted(() => {
    mounted.value = true;
  });

  const computedValue = computed(() =>
    !props.value ? props.label : props.value
  );

  const isChecked = computed(() => {
    if (props.checked !== null) {
      return props.checked;
    } else {
      if (mounted.value) return props.modelValue === computedValue.value;
      else return false;
    }
  });

  const changed = () => {
    emit("update:modelValue", computedValue.value);
  };

  const emitClick = () => {
    emit("click");
  };

  return { isChecked, changed, emitClick };
};
