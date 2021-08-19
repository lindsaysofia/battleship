const DOMLogic = (function () {
  const playerGameboard = document.querySelector('.player_gameboard');
  const computerGameboard = document.querySelector('.computer_gameboard');
  const renderPlayerGameboard = (positions) => {
    for (let y = 0; y < positions.length; y++) {
      for (let x = 0; x < positions.length; x++) {
        let div = document.createElement('div');
        div.classList.add('position');
        div.dataset.x = x;
        div.dataset.y = y;
        if (positions[x][y].isHit) {
          if (positions[x][y].ship) {
            div.classList.add('hit');
          } else {
            div.classList.add('miss');
          }
        }
        if (positions[x][y].ship) {
          div.classList.add('ship');
        }
        playerGameboard.appendChild(div);
      }
    }
  };

  const renderComputerGameboard = (positions) => {
    for (let y = 0; y < positions.length; y++) {
      for (let x = 0; x < positions.length; x++) {
        let div = document.createElement('div');
        div.classList.add('position');
        div.dataset.x = x;
        div.dataset.y = y;
        if (positions[x][y].isHit) {
          if (positions[x][y].ship) {
            div.classList.add('hit');
          } else {
            div.classList.add('miss');
          }
        }
        computerGameboard.appendChild(div);
      }
    }
  };

  const toggleActiveComputerGameboard = () => {
    computerGameboard.classList.toggle('active');
  };

  const handleClick = (e) => {
    // if (!e.target.classList.contains('position') || !isPlayerTurn) return;
    let x = e.target.dataset.x;
    let y = e.target.dataset.y;
    let parentClass = e.target.parentNode.classList[0]
    console.log(x, y, parentClass);
  };
  return {
    renderPlayerGameboard,
    renderComputerGameboard,
    handleClick,
    toggleActiveComputerGameboard,
  }
})();

export default DOMLogic;