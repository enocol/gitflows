const displayScore = () => {
  const scorelist = document.querySelector('.scores-list');

  const data = JSON.parse(localStorage.getItem('data')) || [];
  const result = data.map(
    (element) => `<li>${element.name} : ${element.score}</li>`
  );
  const join = result.join(' ');
  scorelist.innerHTML = join;
};

export default displayScore;
