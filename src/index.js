/* eslint-disable no-unused-vars */
import Player from './code/player';
import Computer from './code/computer';
import DOMLogic from './code/domLogic';
import './style.css';
const gameboardSize = 10;

let isPlayerTurn = true;
let isPlayerSunk = false;
let isComputerSunk = false;
let player = Player('Player');
let computer = Computer();

function initiateGame() {
  isPlayerTurn = true;
  isPlayerSunk = false;
  isComputerSunk = false;
  player = Player('Player');
  DOMLogic.createPlayerGameboard(gameboardSize);
  computer = Computer();
  DOMLogic.createComputerGameboard(gameboardSize);
}

initiateGame();