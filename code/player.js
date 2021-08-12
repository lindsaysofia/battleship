/* eslint-disable no-undef */
const Gameboard = require('./gameboard');

const Player = (name) => {
    const gameboard = Gameboard();
    const getName = () => name;

    return {
      getName,
    };
};

module.exports = Player;