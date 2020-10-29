const FloydWarshall = require('./lib/floydWarshall');
const Matrix = require('./lib/matrix/index');

const array = [
  [0,3,-6,null,-4],
  [null,0,null,1,7],
  [null,4,0,null,3],
  [2,null,-5,0,null],
  [null,null,null,6,0],
];
const m = new Matrix(5,5);
m.fromArray(array);

const distanceMatrices = FloydWarshall(m);

for (const i in distanceMatrices) {
  console.log(`D${i}`);
  distanceMatrices[i].print();
};