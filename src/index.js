/* eslint-disable no-unused-vars */
import Player from './code/player';
import Computer from './code/computer';
import DOMLogic from './code/domLogic';
import './style.css';

let player;
let computer;

function initiateGame() {
  DOMLogic.populateShips();
  player = Player('Player');
  DOMLogic.renderPlayerGameboard(player);
  let draggableShips = document.querySelectorAll('.ship_drag');
  let playerGameboardPositions = document.querySelectorAll('.player_gameboard .position');
  draggableShips.forEach(ship => {
    ship.addEventListener('dragstart', DOMLogic.dragStart);
    ship.addEventListener('dragend', DOMLogic.dragEnd);
    ship.addEventListener('dblclick', DOMLogic.toggleOrientation);
  })

  playerGameboardPositions.forEach(position => {
    position.addEventListener('dragenter', DOMLogic.dragEnter);
    position.addEventListener('dragover', DOMLogic.dragOver);
    position.addEventListener('dragleave', DOMLogic.dragLeave);
    position.addEventListener('drop', DOMLogic.dragDrop);
  });
  // player.placeShipRandomly(4);
  // player.placeShipRandomly(3);
  // player.placeShipRandomly(3);
  // player.placeShipRandomly(2);
  // player.placeShipRandomly(2);
  // player.placeShipRandomly(2);
  // player.placeShipRandomly(1);
  // player.placeShipRandomly(1);
  // player.placeShipRandomly(1);
  // player.placeShipRandomly(1);
  
  // computer = Computer();
  // computer.placeShipRandomly(4);
  // computer.placeShipRandomly(3);
  // computer.placeShipRandomly(3);
  // computer.placeShipRandomly(2);
  // computer.placeShipRandomly(2);
  // computer.placeShipRandomly(2);
  // computer.placeShipRandomly(1);
  // computer.placeShipRandomly(1);
  // computer.placeShipRandomly(1);
  // computer.placeShipRandomly(1);
  // DOMLogic.renderComputerGameboard(computer);

  // DOMLogic.toggleActiveComputerGameboard();
}

initiateGame();

// document
//   .querySelector('.computer_gameboard')
//   .addEventListener('click', DOMLogic.handlePlayerAttack);
