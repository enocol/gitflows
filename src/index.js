import './styles.css';
import addScore from './addscore.js';
<<<<<<< HEAD
import getLocally from './getLocally';
import refresh from './refresh';
=======
import displayScore from './displayScore';
>>>>>>> dc942e5d77541cad4459e7f6469e80895079610e

const addButton = document.querySelector('.submit');
const refbtn = document.querySelector('.refresh');

addButton.addEventListener('click', addScore);
<<<<<<< HEAD
refbtn.addEventListener('click', refresh);

window.onload = getLocally;
=======

displayScore();
>>>>>>> dc942e5d77541cad4459e7f6469e80895079610e
