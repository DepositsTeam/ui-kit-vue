import { computed, inject, unref } from "vue";

export const useInputSize = (props) => {
  const defaultInputSize = inject("defaultInputSize");

  const computedInputSize = computed(() => {
    const injectedSize = unref(defaultInputSize);

    return props.size ? props.size : injectedSize ? injectedSize : "huge";
  });

  return { computedInputSize };
};
