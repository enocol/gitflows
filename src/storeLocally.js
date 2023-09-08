const storeLocally = (data) => {
  localStorage.setItem('data', JSON.stringify(data));
};

export default storeLocally;
