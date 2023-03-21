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
    ...Object.keys(vars).map((key) => {
      if (key.substring(0, 2) === "--") {
        return { [key.substring(2)]: vars[key] };
      } else {
        return { key: vars[key] };
      }
    })
  );

export default convertObjToVars;
