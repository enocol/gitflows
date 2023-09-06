import './styles.css';
import addScore from './addscore.js';
import displayScore from './displayScore';

const addButton = document.querySelector('.submit');

addButton.addEventListener('click', addScore);

displayScore();
