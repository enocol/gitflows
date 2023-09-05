import displayScore from './displayScore';

const addScore = (e) => {
  e.preventDefault();
  const name = document.getElementById('name');
  const score = document.getElementById('score');

  if (name.value === '' || score.value === '') return;

  const obj = { name: name.value, score: score.value };
  const data = JSON.parse(localStorage.getItem('data')) || [];
  data.push(obj);
  localStorage.setItem('data', JSON.stringify(data));
  //displayScore();
  name.value = '';
  score.value = '';
};

export default addScore;
