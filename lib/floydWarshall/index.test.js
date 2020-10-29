const {
  getMinimum,
  getSum,
} = require('./index');
describe('floyd warshall algorithm', () => {
  it('', () => {});
});

describe('get minimum', () => {
  it('returns null if both values are null', () => {
    expect(getMinimum(null, null)).toBe(null);
  });
  it('returns value that isnt null', () => {
    const value = 0;
    expect(getMinimum(null, value)).toBe(value);
    expect(getMinimum(value, null)).toBe(value);
  });
  it ('returns minimum value', () => {
    let value1 = 1;
    let value2 = 2;
    expect(getMinimum(value1, value2)).toBe(value1);
    expect(getMinimum(value2, value1)).toBe(value1);

    value1 = 3;
    value2 = 2;
    expect(getMinimum(value1, value2)).toBe(value2);
    expect(getMinimum(value2, value1)).toBe(value2);

  });
});

describe('get sum', () => {
  it('returns null if one of the values are null', () => {
    expect(getSum(null, 1)).toBe(null);
    expect(getSum(1, null)).toBe(null);
    expect(getSum(null, null)).toBe(null);
  });
  it('returns sum of values', () => {
    expect(getSum(1,1)).toBe(2);
    expect(getSum(1,-1)).toBe(0);
    expect(getSum(0,-1)).toBe(-1);
  });
});