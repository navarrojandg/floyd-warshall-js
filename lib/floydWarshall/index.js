const Matrix = require('../matrix/index');

/** @param {Matrix} matrix - initial matrix */
function FloydWarshall(matrix) {
  const n = matrix.numRows;
  /** @type {Matrix[]} */
  const distanceMatrices = [];
  distanceMatrices.push(matrix.copy());
  for (let k = 0; k < n; k++) {
    distanceMatrices.push(new Matrix(n, n));
    const prev = distanceMatrices[k];
    const curr = distanceMatrices[k+1];
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        const ij = prev.get(i,j);
        const ik = prev.get(i,k);
        const kj = prev.get(k,j);

        const sum = getSum(ik, kj);
        const value = getMinimum(ij, sum);
        curr.set(i,j, value);
      };
    };
  };
  return distanceMatrices;
};

function getMinimum(value1, value2) {
  if (value1 === null && value2 == null) return null;
  if (value1 === null) return value2;
  if (value2 === null) return value1;
  return value1 < value2 ? value1 : value2;
};

function getSum(value1, value2) {
  if (value1 === null || value2 === null) return null;
  return value1 + value2; 
};

module.exports = {
  FloydWarshall,
  getMinimum,
  getSum,
};