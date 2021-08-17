const DOMLogic = () => {
  const playerGameboard = document.querySelector('.player_gameboard');
  const computerGameboard = document.querySelector('.computer_gameboard');
  const createPlayerGameboard = (size) => {
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        let div = document.createElement('div');
        div.classList.add('position');
        div.dataset.x = x;
        div.dataset.y = y;
        playerGameboard.appendChild(div);
      }
    }
  };

  const createComputerGameboard = (size) => {
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        let div = document.createElement('div');
        div.classList.add('position');
        div.dataset.x = x;
        div.dataset.y = y;
        computerGameboard.appendChild(div);
      }
    }
  };
  return {
    createPlayerGameboard,
    createComputerGameboard,
  }
};

module.exports = DOMLogic;