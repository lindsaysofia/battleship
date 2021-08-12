/* eslint-disable no-undef */
const Ship = require('./ship');

const Gameboard = () => {
  const gameboardSize = 10;
  const positions = Array.from({ length: 10 }, () =>
    Array.from({ length: 10 }, () => ({ isHit: false }))
  );

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
    let shipPosition = 0;
    for (let x = xStart; x < xEnd; x++) {
      for (let y = yStart; y < yEnd; y++) {
        positions[x][y].ship = newShip;
        positions[x][y].shipPosition = shipPosition;
        shipPosition++;
      }
    }
    return true;
  };

  const receiveAttack = (x, y) => {
    if (
      x < 0 ||
      y < 0 ||
      x >= gameboardSize ||
      y >= gameboardSize ||
      positions[x][y].isHit
    ) {
      return false;
    }
    if (positions[x][y].ship) {
      positions[x][y].ship.hit(positions[x][y].shipPosition);
      positions[x][y].isHit = true;
      return true;
    }
    positions[x][y].isHit = true;
    return false;
  };

  const allShipsSunk = () => {
    for (let x = 0; x < gameboardSize; x++) {
      for (let y = 0; y < gameboardSize; y++) {
        if (positions[x][y].ship && !positions[x][y].ship.isSunk()) {
          return false;
        }
      }
    }
    return true;
  };

  return {
    placeShip,
    receiveAttack,
    allShipsSunk,
  };
};

// eslint-disable-next-line no-undef
module.exports = Gameboard;
