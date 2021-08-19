/* eslint-disable no-unused-vars */
import Player from './code/player';
import Computer from './code/computer';
import DOMLogic from './code/domLogic';
import './style.css';

let player;
let computer;

function initiateGame() {
  player = Player('Player');
  player.getGameboard().placeShip(0, 0, 4, 'horizontal');
  player.getGameboard().placeShip(0, 2, 3, 'horizontal');
  player.getGameboard().placeShip(4, 2, 3, 'horizontal');
  player.getGameboard().placeShip(0, 4, 2, 'horizontal');
  player.getGameboard().placeShip(3, 4, 2, 'horizontal');
  player.getGameboard().placeShip(6, 4, 2, 'horizontal');
  player.getGameboard().placeShip(0, 6, 1, 'horizontal');
  player.getGameboard().placeShip(2, 6, 1, 'horizontal');
  player.getGameboard().placeShip(4, 6, 1, 'horizontal');
  player.getGameboard().placeShip(6, 6, 1, 'horizontal');
  DOMLogic.renderPlayerGameboard(player);
  computer = Computer();
  computer.getGameboard().placeShip(0, 0, 4, 'horizontal');
  computer.getGameboard().placeShip(0, 2, 3, 'horizontal');
  computer.getGameboard().placeShip(4, 2, 3, 'horizontal');
  computer.getGameboard().placeShip(0, 4, 2, 'horizontal');
  computer.getGameboard().placeShip(3, 4, 2, 'horizontal');
  computer.getGameboard().placeShip(6, 4, 2, 'horizontal');
  computer.getGameboard().placeShip(0, 6, 1, 'horizontal');
  computer.getGameboard().placeShip(2, 6, 1, 'horizontal');
  computer.getGameboard().placeShip(4, 6, 1, 'horizontal');
  computer.getGameboard().placeShip(6, 6, 1, 'horizontal');
  DOMLogic.renderComputerGameboard(computer);

  DOMLogic.toggleActiveComputerGameboard();
}

initiateGame();

document.querySelector('.computer_gameboard').addEventListener('click', DOMLogic.handlePlayerAttack);

