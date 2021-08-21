import Gameboard from './gameboard';

const Player = (name) => {
  const enemyPositionsAttacked = [];
  const gameboard = Gameboard();
  const gameboardSize = 10;

  const getName = () => name;

  const getGameboard = () => gameboard;

  const getRandomCoordinate = () => {
    return Math.floor(Math.random() * gameboardSize);
  };

  const getRandomOrientation = () => {
    let orientations = ['horizontal', 'vertical'];
    return orientations[Math.floor(Math.random() * 2)];
  };

  const placeShipRandomly = (shipLength) => {
    let x = getRandomCoordinate();
    let y = getRandomCoordinate();
    let orientation = getRandomOrientation();
    let isSuccessfulShipPlacement = getGameboard().placeShip(
      x,
      y,
      shipLength,
      orientation
    );
    while (!isSuccessfulShipPlacement) {
      x = getRandomCoordinate();
      y = getRandomCoordinate();
      orientation = getRandomOrientation();
      isSuccessfulShipPlacement = getGameboard().placeShip(
        x,
        y,
        shipLength,
        orientation
      );
    }
  };

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
    placeShipRandomly,
  };
};

export default Player;
