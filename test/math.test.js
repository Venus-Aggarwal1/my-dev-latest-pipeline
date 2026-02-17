// math.test.js
const { sum, multiply } = require('./math');

// 'describe' groups related test cases together (a test suite)
describe('Math functions', () => {

  // 'test' (or 'it') defines a single test case
  test('adds 1 + 2 to equal 3', () => {
    // 'expect' takes the actual result, followed by a 'matcher' function
    expect(sum(1, 2)).toBe(3);
  });

  test('multiplies 3 * 4 to equal 12', () => {
    expect(multiply(3, 4)).toBe(12);
  });
}
