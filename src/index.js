import './styles.css';
import addScore from './addscore.js';
import getLocally from './getLocally.js';
import refresh from './refresh.js';
import testfile from './testfile.js';

const addButton = document.querySelector('.submit');
const refbtn = document.querySelector('.refresh');
const footer = document.querySelector('.footer');

addButton.addEventListener('click', addScore);
refbtn.addEventListener('click', refresh);
footer.innerHTML = testfile();

window.onload = getLocally;
