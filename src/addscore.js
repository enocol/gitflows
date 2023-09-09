import createScore from './createScore.js';
import getLocally from './getLocally.js';

const apiEndPoint =
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/HKlE8Ysavy1SaO4klV83/scores';

const addScore = async (e) => {
  e.preventDefault();
  const user = document.getElementById('name');
  const score = document.getElementById('score');
  const data = JSON.parse(localStorage.getItem('data')) || [];

  if (user.value === '' || score.value === '') return;

  const obj = { user: user.value, score: score.value };
  data.push(obj);
  localStorage.setItem('data', JSON.stringify(data));

  createScore(apiEndPoint, obj);

  getLocally();

  user.value = '';
  score.value = '';
};

export default addScore;
