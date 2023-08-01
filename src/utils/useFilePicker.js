import { computed, ref } from "vue";

export const useFilePicker = (props, emit, file) => {
  const computedAccepts = computed(() => {
    if (Array.isArray(props.accepts)) return props.accepts.join(", ");
    else {
      switch (props.accepts) {
        case "image":
          return ".png, .jpg, .jpeg, .svg, .bmp, .gif";
        case "document":
          return ".csv, .xls, .xlsx, .pdf, .doc, .docx";
        case "csv":
          return ".csv";
        default:
          return undefined;
      }
    }
  });

  const internalError = ref("");

  const computedErrorMessage = computed(() =>
    internalError.value
      ? internalError.value
      : props.errorMessage
      ? props.errorMessage
      : undefined
  );

  const selectedFileName = ref("");

  const updateName = (e) => {
    let files = e.target.files || e.dataTransfer.files;
    let newName = "";
    let index = 0;
    for (let file of files) {
      newName += `${index > 0 ? ", " : ""}${file.name}`;
      index += 1;
    }
    selectedFileName.value = newName;
    if (files.length > props.maxFiles) {
      internalError.value = `You cannot upload more than ${props.maxFiles} file(s) at once`;
    } else {
      internalError.value = "";
    }
    for (let currentFile of files) {
      if (currentFile.size > props.fileMaxSize * 1000000) {
        internalError.value = `You cannot upload a file larger than ${props.fileMaxSize}MB`;
      }
    }
    if (internalError.value) {
      const input = file.value.$el;
      input.setAttribute("type", "text");
      input.setAttribute("type", "file");
      selectedFileName.value = props.placeholder;
    } else {
      emit("change", files.length > 1 ? files : files[0]);
    }
  };

  const emptyFile = () => {
    selectedFileName.value = props.placeholder;
    const input = file.value.$el;
    input.setAttribute("type", "text");
    input.setAttribute("type", "file");
    emit("cleared");
  };

  return {
    emptyFile,
    updateName,
    computedErrorMessage,
    computedAccepts,
    selectedFileName,
  };
};
