const {format} = require('util');
class Matrix {
  constructor(numRows, numColumns) {
    this.numRows = numRows;
    this.numColumns = numColumns;
    this.matrix = new Array(numRows).fill(undefined);
    for (const i in this.matrix) {
      this.matrix[i] = new Array(numColumns).fill(undefined);
    };
  };

  get(row, column) {
    return this.matrix[row][column]; 
  };

  set(row, column, value) {
    this.matrix[row][column] = value;
  };

  print() {
    const output = this.matrix.map(row => format('%j', row))
        .join('\n');
    console.log(output + '\n');
  };

  copy() {
    const copy = new Matrix(this.numRows, this.numColumns);
    for (let i = 0; i < this.numRows; i++) {
      for (let j = 0; j < this.numColumns; j++) {
        copy.set(i,j,this.get(i,j));
      };
    };
    return copy;
  };

  fromArray(arr) {
    for (let i = 0; i < this.numRows; i++) {
      for (let j = 0; j < this.numColumns; j++) {
        this.set(i,j, arr[i][j]);
      };
    };
  };

  
};

module.exports = Matrix;