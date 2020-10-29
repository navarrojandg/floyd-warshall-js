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
    m.set(0,0,value);
    m.set(1,1, value);
    m.set(2,2, value);
    m.set(1,2, value);
    expect(m.get(0,0)).toBe(value);
    expect(m.get(1,1)).toBe(value);
    expect(m.get(2,2)).toBe(value);
    expect(m.get(1,2)).toBe(value);
    m.print();
  });
});