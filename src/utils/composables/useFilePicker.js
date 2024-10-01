import { computed, ref } from "vue";
import mime from "mime";

export const useFilePicker = (props, emit, file) => {
  const isOverDropZone = ref(false);
  const dragEnter = () => {
    isOverDropZone.value = true;
  };

  const dragLeave = () => {
    isOverDropZone.value = false;
  };

  const onDrop = (e) => {
    isOverDropZone.value = false;
    console.log(e);
    updateName(e);
  };
  const switchAcceptToMimeType = (accept) => {
    switch (accept) {
      case "image":
        return "image/*";
      case "document":
        return "text/csv,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
      case "csv":
        return "text/csv";
      default:
        if (accept.startsWith(".")) {
          return mime.getType(accept) || accept;
        }
        return accept;
    }
  };

  const computedAccepts = computed(() => {
    if (Array.isArray(props.accepts)) {
      return [...props.accepts]
        .map((item) => switchAcceptToMimeType(item))
        .join(",");
    } else if (typeof props.accepts === "string") {
      const acceptsArr = props.accepts.split(",");
      if (acceptsArr.length) {
        return acceptsArr.map((item) => switchAcceptToMimeType(item)).join(",");
      }
      return switchAcceptToMimeType(props.accepts);
    } else {
      return undefined;
    }
  });

  const computedAcceptsArr = computed(() =>
    computedAccepts.value.split(",").map((accept) => accept.trim()),
  );

  const computedAcceptsExtArr = computed(() => {
    return computedAcceptsArr.value
      .map((accept) => mime.getExtension(accept))
      .filter((accept) => accept);
  });

  const internalError = ref("");

  const computedErrorMessage = computed(() =>
    internalError.value
      ? internalError.value
      : props.errorMessage
        ? props.errorMessage
        : undefined,
  );

  const selectedFileName = ref(props.placeholder);

  const updateName = (e) => {
    const handleError = () => {
      const input = file.value.$el;
      input.setAttribute("type", "text");
      input.setAttribute("type", "file");
      selectedFileName.value = props.placeholder;
    };
    let files = e.target.files?.[0]
      ? e.target.files
      : e.dataTransfer.files?.[0]
        ? e.dataTransfer.files
        : [];

    if (files.length > props.maxFiles) {
      internalError.value = `You cannot upload more than ${props.maxFiles} file(s) at once`;
      handleError();
      return;
    } else {
      internalError.value = "";
    }

    let newName = "";
    let index = 0;

    for (let file of files) {
      if (file) {
        if (file.size > props.fileMaxSize * 1000000) {
          internalError.value = `You cannot upload a file larger than ${props.fileMaxSize}MB`;
          handleError();
          return;
        }
        let matched = false;
        for (let accept of computedAcceptsArr.value) {
          let acceptArr = accept.split("/");
          if (acceptArr.length > 1 && acceptArr[1] === "*") {
            if (file.type.includes(acceptArr[0])) {
              matched = true;
              break;
            }
          } else {
            if (file.type === accept || file.type.includes(accept)) {
              matched = true;
              break;
            }
          }
          console.log(accept, file.type);
        }
        if (!matched) {
          internalError.value = `You cannot upload a file of type ${mime.getExtension(file.type)}`;
          handleError();
          return;
        }
        newName += `${index > 0 ? ", " : ""}${file.name}`;
        index += 1;
      }
    }

    selectedFileName.value = newName;

    emit("change", files.length > 1 ? files : files[0]);
  };

  const emptyFile = () => {
    selectedFileName.value = props.placeholder;
    const input = file.value.$el;
    input.setAttribute("type", "text");
    input.setAttribute("type", "file");
    emit("cleared");
    emit("change", null);
  };

  return {
    emptyFile,
    updateName,
    computedErrorMessage,
    computedAcceptsExtArr,
    computedAccepts,
    computedAcceptsArr,
    selectedFileName,
    isOverDropZone,
    dragEnter,
    dragLeave,
    onDrop,
  };
};
