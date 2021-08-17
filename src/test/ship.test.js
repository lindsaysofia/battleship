/* eslint-disable no-undef */
const Ship = require('../code/ship');

// testing "hit" function
const shipOfLength3 = Ship(3);

test('hit: entering a number less than 0 does not hit (returns false)', () => {
  expect(shipOfLength3.hit(-1)).toBeFalsy();
});

test('hit: entering a valid number that has not been hit returns true', () => {
  expect(shipOfLength3.hit(1)).toBeTruthy();
});

test('hit: entering a valid number that has been hit returns false', () => {
  expect(shipOfLength3.hit(1)).toBeFalsy();
});

test('hit: entering a number greater than the length does not hit (returns false)', () => {
  expect(shipOfLength3.hit(3)).toBeFalsy();
});

//testing "isSunk" function
const shipOfLength1 = Ship(1);

test('isSunk: empty ship should return false', () => {
  expect(shipOfLength1.isSunk()).toBeFalsy();
});

test('isSunk: full ship should return true', () => {
  shipOfLength1.hit(0);
  expect(shipOfLength1.isSunk()).toBeTruthy();
});

test('isSunk: non-empty but not full ship retuns false', () => {
  expect(shipOfLength3.isSunk()).toBeFalsy();
});

test('isSunk: non-empty but not full ship retuns false', () => {
  shipOfLength3.hit(0);
  expect(shipOfLength3.isSunk()).toBeFalsy();
});

test('isSunk: full ship should return true', () => {
  shipOfLength3.hit(2);
  expect(shipOfLength3.isSunk()).toBeTruthy();
});
