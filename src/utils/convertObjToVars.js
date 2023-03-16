const convertObjToVars = (obj) =>
  Object.assign(
    {},
    ...Object.keys(obj).map((key) => ({
      [key.substring(0, 2) === "--" ? key : "--" + key]: obj[key],
    }))
  );

export const convertVarsToObj = (vars) =>
  Object.assign(
    {},
    ...Object.keys(vars).map((key) => ({
      [key.substring(0, 2) === "--" ? key.substring(2) : key]: vars[key],
    }))
  );

export default convertObjToVars;
