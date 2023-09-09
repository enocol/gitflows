import getScore from './getScore';

const apiEndPoint =
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/HKlE8Ysavy1SaO4klV83/scores';

const getLocally = async () => {
  const scoresList = document.querySelector('.scores-list');
  const results = await getScore(apiEndPoint);

  const data = JSON.parse(localStorage.getItem('data')) || [];
  const combined = [...results, ...data];
  localStorage.setItem('data', JSON.stringify(results));

  scoresList.innerHTML = combined
    .map(
      (element) =>
        `<li class="list-item"><span class="user"> ${element.user}</span> <span class="score"> ${element.score}</span><button>remove</button></li>`
    )
    .join(' ')
    .toLowerCase();
};

export default getLocally;
