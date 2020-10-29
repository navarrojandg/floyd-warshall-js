const {format} = require('util');
class Matrix {
  constructor(numRows, numColumns) {
    this.matrix = new Array(numRows).fill(null);
    for (const i in this.matrix) {
      this.matrix[i] = new Array(numColumns).fill(null);
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
    console.log(output);
  };
};

module.exports = Matrix;