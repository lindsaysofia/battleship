const Ship = (length) => {
  const positionsHit = Array(length).fill(0);

  const hit = (position) => {
    if (position >= 0 && position < length && !positionsHit[position]) {
      positionsHit[position] = 1;
      return true;
    }
    return false;
  };

  const isSunk = () => {
    return positionsHit.reduce((sum, current) => sum + current, 0) === length;
  };

  return {
    hit,
    isSunk,
  };
};

export default Ship;
