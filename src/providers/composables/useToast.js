import { inject } from "vue";

export const useToast = () => {
  const showToast = inject("d__pushToast");

  const pushToast = (toast) => {
    if (showToast && typeof showToast === "function") {
      return pushToast(toast);
    } else {
      throw Error(
        "The `pushToast` function is not enabled. You probably omitted the ToastProvider."
      );
    }
  };

  return { pushToast };
};
