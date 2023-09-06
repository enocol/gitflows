import './styles.css';
import addScore from './addscore.js';
import getLocally from './getLocally';
import refresh from './refresh';

const addButton = document.querySelector('.submit');
const refbtn = document.querySelector('.refresh');

addButton.addEventListener('click', addScore);
refbtn.addEventListener('click', refresh);

window.onload = getLocally;
