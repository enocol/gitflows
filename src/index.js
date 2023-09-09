import './styles.css';
import addScore from './addscore.js';

import refresh from './refresh.js';
import footer from './footer';
import getLocally from './getLocally';

const addButton = document.querySelector('.submit');
const refbtn = document.querySelector('.refresh');

addButton.addEventListener('click', addScore);
refbtn.addEventListener('click', refresh);
footer();

window.addEventListener('load', getLocally);
