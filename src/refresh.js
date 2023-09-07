import axios from 'axios';

const apiEndPoint =
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/HKlE8Ysavy1SaO4klV83/scores';

const refresh = async () => {
  const scoresList = document.querySelector('.scores-list');
  const { data } = await axios.get(apiEndPoint);
  scoresList.innerHTML = data.result
    .map(
      (element) =>
        `<li class="list-item"><span class="user"> ${element.user}</span> <span class="score"> ${element.score}</span></li>`
    )
    .join(' ')
    .toLowerCase();
};

export default refresh;
