import { computed, inject, ref, unref } from "vue";

export const useInputSize = (props) => {
  const defaultInputSize = inject("d__defaultInputSize", ref("xlarge"));

  const computedInputSize = computed(() => {
    const injectedSize = unref(defaultInputSize);

    return props.size ? props.size : injectedSize ? injectedSize : "xlarge";
  });

  return { computedInputSize };
};
