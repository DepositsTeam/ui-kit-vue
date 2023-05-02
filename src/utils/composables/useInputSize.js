import { computed, inject, ref, unref } from "vue";

export const useInputSize = (props) => {
  const defaultInputSize = inject("defaultInputSize", ref("huge"));

  const computedInputSize = computed(() => {
    const injectedSize = unref(defaultInputSize);

    return props.size ? props.size : injectedSize ? injectedSize : "huge";
  });

  return { computedInputSize };
};
