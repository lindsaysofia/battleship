/* eslint-disable no-unused-vars */
import Player from './code/player';
import Computer from './code/computer';
import DOMLogic from './code/domLogic';
import './style.css';

let player;
let computer;

function initiateGame() {
  player = Player('Player');
  player.placeShipRandomly(4);
  player.placeShipRandomly(3);
  player.placeShipRandomly(3);
  player.placeShipRandomly(2);
  player.placeShipRandomly(2);
  player.placeShipRandomly(2);
  player.placeShipRandomly(1);
  player.placeShipRandomly(1);
  player.placeShipRandomly(1);
  player.placeShipRandomly(1);
  DOMLogic.renderPlayerGameboard(player);
  computer = Computer();
  computer.placeShipRandomly(4);
  computer.placeShipRandomly(3);
  computer.placeShipRandomly(3);
  computer.placeShipRandomly(2);
  computer.placeShipRandomly(2);
  computer.placeShipRandomly(2);
  computer.placeShipRandomly(1);
  computer.placeShipRandomly(1);
  computer.placeShipRandomly(1);
  computer.placeShipRandomly(1);
  DOMLogic.renderComputerGameboard(computer);

  DOMLogic.toggleActiveComputerGameboard();
}

initiateGame();

document
  .querySelector('.computer_gameboard')
  .addEventListener('click', DOMLogic.handlePlayerAttack);
