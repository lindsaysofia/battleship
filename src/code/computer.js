import Gameboard from './gameboard';

const Computer = () => {
  const enemyPositionsAttacked = [];

  const gameboardSize = 10;

  const gameboard = Gameboard();

  const name = 'Computer';

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

  const getRandomCoordinate = () => {
    return Math.floor(Math.random() * gameboardSize);
  };

  const attack = () => {
    let x = getRandomCoordinate();
    let y = getRandomCoordinate();
    while (!isValidAttack(x, y)) {
      x = getRandomCoordinate();
      y = getRandomCoordinate();
    }
    enemyPositionsAttacked.push({ x, y });
    return { x, y };
  };

  return {
    getName,
    getGameboard,
    attack,
  };
};

export default Computer;
