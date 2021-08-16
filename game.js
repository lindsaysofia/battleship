const Player = require('./code/player');
const Computer = require('./code/computer');
const DOMLogic = require('./code/domLogic');

let isPlayerTurn;
let isPlayerSunk;
let isComputerSunk;
let player;
let computer;

function initiateGame() {
  isPlayerTurn = true;
  isPlayerSunk = false;
  isComputerSunk = false;
  player = Player('Linda');
  computer = Computer();
}

initiateGame();