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

test('placeShip: placing a ship outside of the gamboard returns false test 4', () => {
  expect(
    gameboard.placeShip(gameboardSize + 10, gameboardSize, 3, 'vertical')
  ).toBeFalsy();
});

test('placeShip: placing a ship outside of the gamboard returns false test 5', () => {
  expect(gameboard.placeShip(6, 0, 5, 'horizontal')).toBeFalsy();
});

test('placeShip: placing a ship inside of the gamboard on a valid place returns true test 1', () => {
  expect(gameboard.placeShip(0, 0, 3, 'horizontal')).toBeTruthy();
});

test('placeShip: placing a ship inside of the gamboard on a valid place returns true test 2', () => {
  expect(gameboard.placeShip(5, 6, 4, 'horizontal')).toBeTruthy();
});

test('placeShip: placing a ship inside of the gamboard on a valid place returns true test 3', () => {
  expect(gameboard.placeShip(2, 1, 5, 'vertical')).toBeTruthy();
});

test('placeShip: placing a ship inside of the gamboard on a spot already occupied returns false test 1', () => {
  expect(gameboard.placeShip(7, 4, 4, 'vertical')).toBeFalsy();
});

test('placeShip: placing a ship inside of the gamboard on a spot already occupied returns false test 2', () => {
  expect(gameboard.placeShip(0, 0, 3, 'horizontal')).toBeFalsy();
});

// testing receiveAttack
test('receiveAttack: oustide of gameboard is false', () => {
  expect(gameboard.receiveAttack(-1, -1)).toBeFalsy();
});

test('receiveAttack: inside of gameboard and hit ship is true', () => {
  expect(gameboard.receiveAttack(0, 0)).toBeTruthy();
});

test('receiveAttack: inside of gameboard and hit same ship is false', () => {
  expect(gameboard.receiveAttack(0, 0)).toBeFalsy();
});

test('receiveAttack: inside of gameboard but does not hit ship is false', () => {
  expect(gameboard.receiveAttack(9, 3)).toBeFalsy();
});

// test allShips Sunk
test('shipsSunk: ships have not been sunk returns false', () => {
  expect(gameboard.allShipsSunk()).toBeFalsy();
});


