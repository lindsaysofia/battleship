/* eslint-disable no-unused-vars */
import Player from './code/player';
import Computer from './code/computer';
import DOMLogic from './code/domLogic';
import './style.css';
const gameboardSize = 10;

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
  DOMLogic.createPlayerGameboard(gameboardSize);
  computer = Computer();
  DOMLogic.createComputerGameboard(gameboardSize);
}

initiateGame();

document.addEventListener('click', handleClick);

function handleClick(e) {
  if (!e.target.classList.contains('position') && !isPlayerTurn) return;
  let x = e.target.dataset.x;
  let y = e.target.dataset.y;
  let parentClass = e.target.parentNode.classList[0]
  console.log(x, y, parentClass);
}