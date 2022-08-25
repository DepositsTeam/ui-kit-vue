const convertObjToVars = (obj) =>
  Object.assign(
    {},
    ...Object.keys(obj).map((key) => ({
      ["--" + key]: obj[key],
    }))
  );

export default convertObjToVars;