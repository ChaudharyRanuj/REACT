export const getLocalStorageData = (key, defaultValue) => {
  let savedData = localStorage.getItem(`${key}`);
  if (savedData) return JSON.parse(savedData);
  return undefined;
};

export const setLocalStorageData = (key, value) => {
  localStorage.setItem(`${key}`, JSON.stringify(value));
};
