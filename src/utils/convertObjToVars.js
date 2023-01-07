const convertObjToVars = (obj) =>
  Object.assign(
    {},
    ...Object.keys(obj).map((key) => ({
      [key.substring(0, 2) === "--" ? key : "--" + key]: obj[key],
    }))
  );

export default convertObjToVars;
