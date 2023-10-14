import { computed, inject, ref, unref } from "vue";

export const useInputSize = (props) => {
  const defaultInputSize = inject("defaultInputSize", ref("xlarge"));

  const computedInputSize = computed(() => {
  

    return props.size ? props.size : injectedSize ? injectedSize : "xlarge";
  });

  return { computedInputSize };
};
