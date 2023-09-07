import createScore from './createScore.js';
import getScore from './getScore.js';
import storeLocally from './storeLocally.js';

const apiEndPoint = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/HKlE8Ysavy1SaO4klV83/scores';

const addScore = async (e) => {
  e.preventDefault();
  const user = document.getElementById('name');
  const score = document.getElementById('score');
  const scoreList = document.querySelector('.scores-list');

  if (user.value === '' || score.value === '') return;

  const obj = { user: user.value, score: score.value };

  createScore(apiEndPoint, obj);
  const data = await getScore(apiEndPoint);
  storeLocally(data);
  scoreList.innerHTML = data
    .map(
      (element) => `<li class="list-item"><span class="user"> ${element.user}</span> <span class="score"> ${element.score}</span></li>`,
    )
    .join(' ')
    .toLowerCase();

  user.value = '';
  score.value = '';
};

export default addScore;
