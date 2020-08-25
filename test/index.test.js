const loader = require('../index.js');

describe('markdown-table-loader', () => {
  test('should export a function', () => {
    expect(typeof loader).toBe('function');
  });
});
