const store = 'sleepData';

const saveData = (data) => {
  localStorage.setItem(store, JSON.stringify(data));
};

const loadData = () => {
  const data = localStorage.getItem(store);
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export { saveData, loadData };