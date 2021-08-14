/* eslint-disable no-undef */
const Gameboard = require('./gameboard');

const Player = (name) => {
  const enemyPositionsAttacked = [];
  const gameboard = Gameboard();

  const getName = () => name;

  const getGameboard = () => gameboard;

  const isValidAttack = (x, y) => {
    for (let i = 0; i < enemyPositionsAttacked.length; i++) {
      let enemyPositions = enemyPositionsAttacked[i];
      if (enemyPositions.x === x && enemyPositions.y === y) {
        return false;
      }
    }
    return true;
  };

  const attack = (x, y) => {
    if (!isValidAttack(x, y)) {
      return false;
    }
    enemyPositionsAttacked.push({ x, y });
    return true;
  };

  return {
    getName,
    getGameboard,
    isValidAttack,
    attack,
  };
};

module.exports = Player;
