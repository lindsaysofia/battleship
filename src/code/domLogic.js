const DOMLogic = (function () {
  const playerGameboard = document.querySelector('.player_gameboard');
  const computerGameboard = document.querySelector('.computer_gameboard');
  const shipsContainer = document.querySelector('.ships-container');
  let gameStatus = document.querySelector('.game-status');
  let playerInGame;
  let computerInGame;
  let currentShipDragged;

  const populateShips = () => {
    const shipLengths = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
    shipLengths.forEach((shipLength) => {
        let ship = document.createElement('div');
        for (let i = 0; i < shipLength; i++) {
          let shipPosition = document.createElement('div');
          shipPosition.classList.add('position', 'ship');
          ship.appendChild(shipPosition);
        }
        ship.draggable = true;
        ship.classList.add('ship_drag');
        ship.dataset.length = shipLength;
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
    let x = Number(e.target.dataset.x);
    let y = Number(e.target.dataset.y);

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

  const dragStart = (e) => {
    e.target.classList.toggle('hold');
    setTimeout(() => e.target.classList.toggle('invisible'), 0);
    currentShipDragged = e.target;
  };

  const dragEnd = (e) => {
    e.target.classList.toggle('hold');
    e.target.classList.toggle('invisible');
  };

  const dragEnter = (e) => {
    e.preventDefault();
    e.target.classList.toggle('hovered');
  };

  const dragOver = (e) => {
    e.preventDefault();
  };
  
  const dragLeave = (e) => {
    e.target.classList.toggle('hovered');
  };

  const dragDrop = (e) => {
    e.target.classList.toggle('hovered');
    let x = Number(e.target.dataset.x);
    let y = Number(e.target.dataset.y);
    let shipLength = Number(currentShipDragged.dataset.length);
    let isValidShipPlacement = playerInGame.getGameboard().placeShip(x, y, shipLength, 'horizontal');
    if (isValidShipPlacement) {
      renderPlayerGameboard(playerInGame);
      let playerGameboardPositions = document.querySelectorAll('.player_gameboard .position');
      playerGameboardPositions.forEach(position => {
        position.addEventListener('dragenter', DOMLogic.dragEnter);
        position.addEventListener('dragover', DOMLogic.dragOver);
        position.addEventListener('dragleave', DOMLogic.dragLeave);
        position.addEventListener('drop', DOMLogic.dragDrop);
      });
      shipsContainer.removeChild(currentShipDragged);
      let draggableShips = document.querySelectorAll('.ship_drag');
      console.log(draggableShips.length);
    }

  };

  return {
    renderPlayerGameboard,
    renderComputerGameboard,
    handlePlayerAttack,
    toggleActiveComputerGameboard,
    populateShips,
    dragStart,
    dragEnd,
    dragEnter,
    dragOver,
    dragLeave,
    dragDrop,
  };
})();

export default DOMLogic;
