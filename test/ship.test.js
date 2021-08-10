/* eslint-disable no-undef */
const ship = require('../code/ship');
const shipOfLength3 = ship(3);

test('entering number less than 0 does not hit (returns false)', () => {
  expect(shipOfLength3.hit(-1)).toBeFalsy();
});
