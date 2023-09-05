import './styles.css';
import addScore from './addscore.js';

const addButton = document.querySelector('.submit');

addButton.addEventListener('click', addScore);
