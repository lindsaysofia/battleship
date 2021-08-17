import Player from './player';

const Computer = () => {
  const enemyPositionsAttacked = [];

  const gameboardSize = 10;

  const { getName, getGameboard, isValidAttack } = Player('Computer');

  const getRandomCoordinate = () => {
    return Math.floor(Math.random * gameboardSize);
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
