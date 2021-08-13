const Player = require('./player');

const Computer = () => {

  const {getName, getGameboard} = Player('Computer');

  return {
    getName,
    getGameboard,
  };
};