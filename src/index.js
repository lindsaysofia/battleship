/* eslint-disable no-undef */
import Player from './code/player';
import Computer from './code/computer';
import DOMLogic from './code/domLogic';
const gameboardSize = 10;

let isPlayerTurn = true;
let isPlayerSunk = false;
let isComputerSunk = false;
let player = Player('Linda');
let computer = Computer();

function initiateGame() {
  isPlayerTurn = true;
  isPlayerSunk = false;
  isComputerSunk = false;
  player = Player('Linda');
  DOMLogic.createPlayerGameboard(gameboardSize);
  computer = Computer();
  DOMLogic.createComputerGameboard(gameboardSize);
}

initiateGame();