const Matrix = require('./index');

const rows = 3;
const columns = 3;
let m = new Matrix(rows, columns);

beforeEach(() => {
  m = new Matrix(rows, columns);
});

describe('matrix', () => {
  it('constructs properly', () => {
    expect(m.matrix.length).toBe(rows);
    expect(m.matrix.every(row => row.length === columns)).toBeTruthy();
    expect(m.get(0,0)).toBe(undefined);
    expect(m.get(1,0)).toBe(undefined);
    expect(m.get(2,0)).toBe(undefined);
    expect(m.get(0,0) === null).toBe(false);
  });

  it('gets/sets values', () => {
    const value = 20;
    m.set(0,0,value);
    m.set(1,1, value);
    m.set(2,2, value);
    m.set(1,2, value);
    expect(m.get(0,0)).toBe(value);
    expect(m.get(1,1)).toBe(value);
    expect(m.get(2,2)).toBe(value);
    expect(m.get(1,2)).toBe(value);
  });

  it('gets row', () => {
    const value = 20;
    m.set(0,0, value);
    m.set(0,1, value-1);
    m.set(0,2, value-2);
    const row = m.getRow(0);
    expect(row).toBe(m.matrix[0]);

    // check if row being returned is a reference to the elements in the matrix
    m.set(0,1, value);
    expect(row[1]).toBe(value);
  });

  it('get column', () => {
    const value = 20;
    m.set(0,0, value);
    m.set(1,0, value-1);
    m.set(2,0, value-2);
    const column = m.getColumn(0);
    expect(column[0]).toBe(m.get(0,0));
    expect(column[1]).toBe(m.get(1,0));
    expect(column[2]).toBe(m.get(2,0));
  });

  it('copies', () => {
    const value = 20;
    const copy = m.copy();
    m.set(0,0,value);
    expect(copy.get(0,0)).toBe(undefined);
  });

  it('sets from array', () => {
    const array = [
      [1,2,null],
      [4,5,6],
      [7,null,9],
    ];
    m.fromArray(array);
    expect(m.get(0,0)).toBe(1);
    expect(m.get(1,1)).toBe(5);
    expect(m.get(2,2)).toBe(9);
    expect(m.get(0,2)).toBe(null);
    expect(m.get(2,1)).toBe(null);
  });
});