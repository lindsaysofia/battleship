/* eslint-disable no-undef */
const Ship = require('./ship');

const Gameboard = () => {
  const gameboardSize = 10;
  const positions = Array(10).fill(Array.from({length: 10}, () => ({hit: false})));

  const isValidShipPlacement = (xStart, yStart, xEnd, yEnd) => {
    // if ship is outside gameboard
    if (
      xStart < 0 ||
      xEnd < 0 ||
      yStart < 0 ||
      yEnd < 0 ||
      xStart >= gameboardSize ||
      xEnd >= gameboardSize ||
      yStart >= gameboardSize ||
      yEnd >= gameboardSize
    ) {
      return false;
    }

    // if there is already a ship at the spot
    for (let x = xStart; x < xEnd; x++) {
      for (let y = yStart; y < yEnd; y++) {
        if (positions[x][y].ship) {
          return false;
        }
      }
    }
    return true;
  };

  const placeShip = (xStart, yStart, shipLength, shipOrientation) => {
    const xEnd =
      shipOrientation === 'horizontal' ? xStart + shipLength : xStart + 1;
    const yEnd =
      shipOrientation === 'vertical' ? yStart + shipLength : yStart + 1;
    if (!isValidShipPlacement(xStart, yStart, xEnd, yEnd)) {
      return false;
    }
    const newShip = Ship(shipLength);
    for (let x = xStart; x < xEnd; x++) {
      for (let y = yStart; y < yEnd; y++) {
        positions[x][y].ship = newShip;
      }
    }
    return true;
  };

  return {
    placeShip,
  };
};

// eslint-disable-next-line no-undef
module.exports = Gameboard;
