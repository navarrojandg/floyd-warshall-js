const Matrix = require('./index');

const rows = 3;
const columns = 3;
let m = new Matrix(rows, columns);

beforeEach(() => {
  m = new Matrix(rows, columns);
});

describe('Matrix', () => {
  it('constructs properly', () => {
    expect(m.matrix.length).toBe(rows);
    expect(m.matrix.every(row => row.length === columns)).toBeTruthy();
  });

  it('gets/sets values', () => {
    const value = 20;
    expect(m.get(rows-1, columns-1)).toBe(null);
    m.set(0,0,value);
    m.set(rows-1, columns-1, value);
    expect(m.get(0,0)).toBe(value);
    expect(m.get(rows-1, columns-1)).toBe(value);
    expect(m.get(rows-1, 0)).toBe(null);
    expect(m.get(0, columns-1)).toBe(null);
    m.print();
  });
});