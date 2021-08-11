// eslint-disable-next-line no-undef
const Gameboard = require('../code/gameboard');

const gameboard = Gameboard();

// testing placeShip
// eslint-disable-next-line no-undef
test('placeShip: placing a ship outside of the gamboard returns false', () => {
  // eslint-disable-next-line no-undef
  expect(gameboard.placeShip(-1, -1, 3)).toBeFalsy();
});
