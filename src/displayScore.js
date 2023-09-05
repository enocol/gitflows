const displayScore = () => {
  const scorelist = document.querySelector('.scores-list');
  const li = document.createElement('li');
  const data = JSON.parse(localStorage.getItem('data'));
  data.forEach((element) => {
    li.innerHTML = `${element.name} ${element.score}`;
    scorelist.append(li);
  });
};

export default displayScore;
