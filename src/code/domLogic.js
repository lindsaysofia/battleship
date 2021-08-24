import Player from './player';
import Computer from './computer';

const DOMLogic = (function () {
  const game = document.querySelector('.game');
  let computer;
  let playerGameboard;
  let computerGameboard;
  let shipsContainer;
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
      ship.dataset.orientation = 'horizontal';
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

  const initiateComputerGameboard = (computer) => {
    const shipLengths = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
    shipLengths.forEach((shipLength) => {
      computer.placeShipRandomly(shipLength);
    });
  };

  const toggleActiveComputerGameboard = () => {
    computerGameboard.classList.toggle('active');
  };

  const toggleOrientation = (e) => {
    let ship = e.target.parentNode;
    if (!ship.classList.contains('ship_drag')) {
      return;
    }
    ship.classList.toggle('vertical');
    let currentOrientation = ship.dataset.orientation;
    ship.dataset.orientation =
      currentOrientation === 'horizontal' ? 'vertical' : 'horizontal';
  };

  const createNewGameButton = () => {
    let button = document.createElement('button');
    button.textContent = 'New Game';
    button.addEventListener('click', startGame);
    game.appendChild(button);
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
    setTimeout(() => {
      game.innerHTML = '';
      createNewGameButton();
    }, 5000);
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
        setTimeout(() => {
          handleComputerAttack();
        }, 1000);
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
    if (currentShipDragged === '') {
      return;
    }
    let x = Number(e.target.dataset.x);
    let y = Number(e.target.dataset.y);
    let shipLength = Number(currentShipDragged.dataset.length);
    let orientation = currentShipDragged.dataset.orientation;
    let isValidShipPlacement = playerInGame
      .getGameboard()
      .placeShip(x, y, shipLength, orientation);
    if (isValidShipPlacement) {
      renderPlayerGameboard(playerInGame);
      let playerGameboardPositions = document.querySelectorAll(
        '.player_gameboard .position'
      );
      playerGameboardPositions.forEach((position) => {
        position.addEventListener('dragenter', dragEnter);
        position.addEventListener('dragover', dragOver);
        position.addEventListener('dragleave', dragLeave);
        position.addEventListener('drop', dragDrop);
      });
      shipsContainer.removeChild(currentShipDragged);
      currentShipDragged = '';
      let draggableShips = document.querySelectorAll('.ship_drag');
      if (draggableShips.length === 0) {
        game.removeChild(shipsContainer);
        computer.classList.remove('hidden');
        initiateComputerGameboard(computerInGame);
        renderComputerGameboard(computerInGame);
        gameStatus.textContent = 'Player, start!';
      }
    }
  };

  const startGame = () => {
    game.innerHTML = `
    <div class="player">
      <h3>Friendly Waters</h3>
      <div class="player_gameboard"></div>
    </div>
    <div class="ships-container">
    </div>
    <div class="computer hidden">
      <h3>Enemy Waters</h3>
      <div class="computer_gameboard"></div>
    </div>`;
    computer = document.querySelector('.computer');
    playerGameboard = document.querySelector('.player_gameboard');
    computerGameboard = document.querySelector('.computer_gameboard');
    shipsContainer = document.querySelector('.ships-container');
    populateShips();
    playerInGame = Player('Player');
    renderPlayerGameboard(playerInGame);

    let draggableShips = document.querySelectorAll('.ship_drag');
    let playerGameboardPositions = document.querySelectorAll(
      '.player_gameboard .position'
    );
    draggableShips.forEach((ship) => {
      ship.addEventListener('dragstart', dragStart);
      ship.addEventListener('dragend', dragEnd);
      ship.addEventListener('dblclick', toggleOrientation);
    });

    playerGameboardPositions.forEach((position) => {
      position.addEventListener('dragenter', dragEnter);
      position.addEventListener('dragover', dragOver);
      position.addEventListener('dragleave', dragLeave);
      position.addEventListener('drop', dragDrop);
    });

    computerInGame = Computer();
    renderComputerGameboard(computerInGame);
    toggleActiveComputerGameboard();
    document
      .querySelector('.computer_gameboard')
      .addEventListener('click', handlePlayerAttack);
  };

  return {
    startGame,
  };
})();

export default DOMLogic;
