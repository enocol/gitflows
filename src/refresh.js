import axios from 'axios';
//import storeLocally from './storeLocally';
const apiEndPoint =
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/HKlE8Ysavy1SaO4klV83/scores';

const refresh = async () => {
  const scoresList = document.querySelector('.scores-list');
  const { data } = await axios.get(apiEndPoint);
  scoresList.innerHTML = data.result
    .map((element) => `<li>${element.user} : ${element.score}`)
    .join(' ');
  //storeLocally();
};

export default refresh;
