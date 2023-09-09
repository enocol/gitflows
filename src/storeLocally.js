const storeLocally = (results) => {
  localStorage.setItem('data', JSON.stringify(results));
};

export default storeLocally;
