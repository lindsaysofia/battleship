/* eslint-disable no-unused-vars */
import Player from './code/player';
import Computer from './code/computer';
import DOMLogic from './code/domLogic';
import './style.css';

let isPlayerTurn;
let isPlayerSunk;
let isComputerSunk;
let player;
let computer;

function initiateGame() {
  isPlayerTurn = true;
  isPlayerSunk = false;
  isComputerSunk = false;
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
  DOMLogic.renderPlayerGameboard(player.getGameboard().getPositions());
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
  DOMLogic.renderComputerGameboard(computer.getGameboard().getPositions());

  DOMLogic.toggleActiveComputerGameboard();
}

initiateGame();

document.querySelector('.computer_gameboard').addEventListener('click', DOMLogic.handleClick);

