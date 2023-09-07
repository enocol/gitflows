const getLocally = () => {
  const scoresList = document.querySelector('.scores-list');
  const data = JSON.parse(localStorage.getItem('data')) || [];
  scoresList.innerHTML = data
    .map(
      (element) => `<li class="list-item"><span class="user"> ${element.user}</span> <span class="score"> ${element.score}</span></li>`,
    )
    .join(' ')
    .toLowerCase();
};

export default getLocally;
