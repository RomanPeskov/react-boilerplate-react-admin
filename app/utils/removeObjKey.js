export const removeObjKey = (object, keys) =>
  Object.entries(object).reduce(
    (a, [key, value]) =>
      keys.indexOf(key) === -1 ? { ...a, [key]: value } : a,
    {},
  );
