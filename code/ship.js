const Ship = (length) => {
  const spotsHit = Array(length).fill(0);

  const hit = (spot) => {
    if (spot >= 0 && spot < length && !spotsHit[spot]) {
      spotsHit[spot] = 1;
      return true;
    }
    return false;
  };

  const isSunk = () => {
    return spotsHit.reduce((sum, current) => sum + current, 0) === length;
  };

  return {
    hit,
    isSunk,
  };
};

// eslint-disable-next-line no-undef
module.exports = Ship;
