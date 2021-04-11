const createLocalStorageMock = () => {
  let storage = {};
  return {
    getItem: (key) => {
      return storage[key] ? storage[key] : null;
    },
    setItem: (key, value) => {
      storage[key] = value;
    },
  };
};

Object.defineProperty(window, 'localStorage', {
  value: createLocalStorageMock(),
});
