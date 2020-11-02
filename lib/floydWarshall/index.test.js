const {
  getNullSafeMinimum,
  getNullSafeSum,
} = require('./index');
describe('floyd warshall algorithm', () => {
  it('', () => {});
});

describe('gets minimum', () => {
  it('returns null if both values are null', () => {
    expect(getNullSafeMinimum(null, null)).toBe(null);
  });
  it('returns value that isnt null', () => {
    const value = 0;
    expect(getNullSafeMinimum(null, value)).toBe(value);
    expect(getNullSafeMinimum(value, null)).toBe(value);
  });
  it ('returns minimum value', () => {
    let value1 = 1;
    let value2 = 2;
    expect(getNullSafeMinimum(value1, value2)).toBe(value1);
    expect(getNullSafeMinimum(value2, value1)).toBe(value1);

    value1 = 3;
    value2 = 2;
    expect(getNullSafeMinimum(value1, value2)).toBe(value2);
    expect(getNullSafeMinimum(value2, value1)).toBe(value2);

    value1 = -1;
    value2 = 0;
    expect(getNullSafeMinimum(value1, value2)).toBe(value1);
    expect(getNullSafeMinimum(value2, value1)).toBe(value1);
  });
});

describe('gets sum', () => {
  it('returns null if one of the values are null', () => {
    expect(getNullSafeSum(null, 1)).toBe(null);
    expect(getNullSafeSum(1, null)).toBe(null);
    expect(getNullSafeSum(null, null)).toBe(null);
  });
  it('returns sum of values', () => {
    expect(getNullSafeSum(1,1)).toBe(2);
    expect(getNullSafeSum(1,-1)).toBe(0);
    expect(getNullSafeSum(0,-1)).toBe(-1);
  });
});