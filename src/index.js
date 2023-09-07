import './styles.css';
import addScore from './addscore.js';
import getLocally from './getLocally.js';
import refresh from './refresh.js';

const addButton = document.querySelector('.submit');
const refbtn = document.querySelector('.refresh');

addButton.addEventListener('click', addScore);
refbtn.addEventListener('click', refresh);

window.onload = getLocally;
