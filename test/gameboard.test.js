/* eslint-disable no-undef */
const Gameboard = require('../code/gameboard');

const gameboard = Gameboard();
const gameboardSize = 10;

// testing placeShip
test('placeShip: placing a ship outside of the gamboard returns false test 1', () => {
  expect(gameboard.placeShip(-1, -1, 3, 'horizontal')).toBeFalsy();
});

test('placeShip: placing a ship outside of the gamboard returns false test 2', () => {
  expect(gameboard.placeShip(-1, gameboardSize, 3, 'vertical')).toBeFalsy();
});

test('placeShip: placing a ship outside of the gamboard returns false test 3', () => {
  expect(gameboard.placeShip(gameboardSize, -3, 3, 'horizontal')).toBeFalsy();
});

test('placeShip: placing a ship outside of the gamboard returns false test 3', () => {
  expect(gameboard.placeShip(gameboardSize + 10, gameboardSize, 3, 'vertical')).toBeFalsy();
});

test('placeShip: placing a ship inside of the gamboard on a valid place returns true', () => {
  expect(gameboard.placeShip(0, 0, 3, 'horizontal')).toBeTruthy();
});

test('placeShip: placing a ship inside of the gamboard on a valid place returns true', () => {
  expect(gameboard.placeShip(5, 6, 4, 'horizontal')).toBeTruthy();
});

test('placeShip: placing a ship inside of the gamboard on a spot already occupied returns false', () => {
  expect(gameboard.placeShip(7, 4, 4, 'vertical')).toBeFalsy();
});


