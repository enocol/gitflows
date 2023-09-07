const getLocally = () => {
  const scoresList = document.querySelector('.scores-list');
  const data = JSON.parse(localStorage.getItem('data')) || [];
  scoresList.innerHTML = data
    .map((element) => `<li>${element.user} : ${element.score}`)
    .join(' ');
};

export default getLocally;
