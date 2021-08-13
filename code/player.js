/* eslint-disable no-undef */
const Gameboard = require('./gameboard');

const Player = (name) => {
    const gameboard = Gameboard();
    const enemyPositionsAttacked = [];

    const getName = () => name;

    const getGameboard = () => gameboard;

    return {
      getName,
      getGameboard
    };
};

module.exports = Player;