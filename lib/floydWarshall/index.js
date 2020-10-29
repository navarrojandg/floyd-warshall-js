const Matrix = require('../matrix/index');

/** @param {Matrix} matrix - initial matrix */
function FloydWarshall(matrix) {
  const n = matrix.numRows;
  /** @type {Matrix[]} */
  const distanceMatrices = [];
  distanceMatrices.push(matrix.copy());
  for (let k = 0; k < n; k++) {
    distanceMatrices.push(new Matrix(n, n));
    const prevDistanceMatrix = distanceMatrices[k];
    const currDistanceMatrix = distanceMatrices[k+1];
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        const prevDistance = prevDistanceMatrix.get(i,j);

        const ik = prevDistanceMatrix.get(i,k);
        const kj = prevDistanceMatrix.get(k,j);
        const intermediateDistance = getNullSafeSum(ik, kj);

        const value = getNullSafeMinimum(prevDistance, intermediateDistance);
        currDistanceMatrix.set(i,j, value);
      };
    };
  };
  return distanceMatrices;
};

/** 
 * Safe minimum comparison between number and null where null is infinity
 * @param {Number | null} value1 
 * @param {Number | null} value2
 * @returns {Number | null} 
 */
function getNullSafeMinimum(value1, value2) {
  if (value1 === null && value2 == null) return null;
  if (value1 === null) return value2;
  if (value2 === null) return value1;
  return value1 < value2 ? value1 : value2;
};

/**
 * Safe null + number operation, in which null is infinity
 * @param {Number | null} value1 
 * @param {Number | null} value2
 * @returns {Number} 
 */
function getNullSafeSum(value1, value2) {
  if (value1 === null || value2 === null) return null;
  return value1 + value2; 
};

FloydWarshall['getNullSafeMinimum'] = getNullSafeMinimum;
FloydWarshall['getNullSafeSum'] = getNullSafeSum;

module.exports = FloydWarshall;