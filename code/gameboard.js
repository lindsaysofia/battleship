const Ship = require('./ship');

const Gameboard = () => {
  const gameboardSize = 10;
  const positions = Array(10).fill(Array(10).fill({ hit: false }));

  const canPlaceShip = (xStart, yStart, shipLength, shipOrientation) => {
    if (
      xStart < 0 ||
      xStart >= gameboardSize ||
      yStart < 0 ||
      yStart >= gameboardSize
    ) {
      return false;
    }

    let xEnd =
      shipOrientation === 'horizontal' ? xStart + shipLength : xStart + 1;
    let yEnd =
      shipOrientation === 'vertical' ? yStart + shipLength : yStart + 1;

    for (let x = xStart; x < xEnd; x = x + 1) {
      for (let y = yStart; y < yEnd; y = y + 1) {
        
      }
    }
  };

  const placeShip = (xStart, yStart, shipLength, shipOrientation) => {
    if (!canPlaceShip) {
      return false;
    }
    const newShip = Ship(shipLength);
    for (
      let positionsX = x;
      positionsX < x + shipOrientation;
      positionsX = positionsX + 1
    ) {
      positions[positionsX][y] = newShip;
    }
    return true;
  };

  return {
    placeShip,
  };
};

// eslint-disable-next-line no-undef
module.exports = Gameboard;
