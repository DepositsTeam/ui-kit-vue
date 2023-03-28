import { inject } from "vue";

export const useToast = () => {
  const showToast = inject("d__pushToast");
  const injectedClearToasts = inject("d__clearToasts");

  const pushToast = (toast) => {
    if (showToast && typeof showToast === "function") {
      return showToast(toast);
    } else {
      throw Error(
        "The `pushToast` function is not enabled. You probably omitted the ToastProvider."
      );
    }
  };

  const clearToasts = () => {
    return injectedClearToasts();
  };

  return { pushToast, clearToasts };
};
