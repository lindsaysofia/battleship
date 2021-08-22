const DOMLogic = (function () {
  const playerGameboard = document.querySelector('.player_gameboard');
  const computerGameboard = document.querySelector('.computer_gameboard');
  const shipsContainer = document.querySelector('.ships-container');
  let gameStatus = document.querySelector('.game-status');
  let playerInGame;
  let computerInGame;

  const populateShips = () => {
    const shipLengths = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
    shipLengths.forEach((shipLength) => {
        let ship = document.createElement('div');
        for (let i = 0; i < shipLength; i++) {
          let shipPosition = document.createElement('div');
          shipPosition.classList.add('position', 'ship');
          ship.appendChild(shipPosition);
          ship.draggable = true;
        }
        shipsContainer.appendChild(ship);
    });
  };

  const renderPlayerGameboard = (player) => {
    playerGameboard.innerHTML = '';
    playerInGame = player;
    let positions = player.getGameboard().getPositions();
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
        } else if (positions[x][y].ship) {
          div.classList.add('ship');
        }
        playerGameboard.appendChild(div);
      }
    }
  };

  const renderComputerGameboard = (computer) => {
    computerGameboard.innerHTML = '';
    computerInGame = computer;
    let positions = computer.getGameboard().getPositions();
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

  const isGameOver = () => {
    if (
      playerInGame.getGameboard().allShipsSunk() ||
      computerInGame.getGameboard().allShipsSunk()
    ) {
      return true;
    }
    return false;
  };

  const handleGameEnd = () => {
    computerGameboard.removeEventListener('click', handlePlayerAttack);
    gameStatus.textContent = playerInGame.getGameboard().allShipsSunk()
      ? 'Computer Won!'
      : 'Player Won!';
  };

  const handleComputerAttack = () => {
    const { x, y } = computerInGame.attack();
    playerInGame.getGameboard().receiveAttack(x, y);
    renderPlayerGameboard(playerInGame);
    renderComputerGameboard(computerInGame);
    if (isGameOver()) {
      handleGameEnd();
    } else {
      toggleActiveComputerGameboard();
    }
  };

  const handlePlayerAttack = (e) => {
    gameStatus.textContent = '...Battle In Progress...';
    let parentClassList = e.target.parentNode.classList;
    if (!parentClassList.contains('active')) {
      return;
    }
    let x = e.target.dataset.x;
    let y = e.target.dataset.y;

    if (playerInGame.attack(x, y)) {
      computerInGame.getGameboard().receiveAttack(x, y);
      toggleActiveComputerGameboard();
      renderPlayerGameboard(playerInGame);
      renderComputerGameboard(computerInGame);
      if (isGameOver()) {
        handleGameEnd();
      } else {
        handleComputerAttack();
      }
    }
  };
  return {
    renderPlayerGameboard,
    renderComputerGameboard,
    handlePlayerAttack,
    toggleActiveComputerGameboard,
    populateShips,
  };
})();

export default DOMLogic;
