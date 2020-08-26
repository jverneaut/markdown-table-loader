const loader = require('../index.js');
const { parse } = require('../src/parser');

const {
  table1,
  table2,
  table3,
  table4,
  table5,
  table6,
  table7,
} = require('./fixtures/tables.md');

describe('markdown-table-loader', () => {
  test('should export a function', () => {
    expect(typeof loader).toBe('function');
  });

  test('should parse table1', () => {
    expect(parse(table1.value)).toStrictEqual(table1.expected);
  });
  test('should parse table2', () => {
    expect(parse(table2.value)).toStrictEqual(table2.expected);
  });
  test('should parse table3', () => {
    expect(parse(table3.value)).toStrictEqual(table3.expected);
  });
  test('should parse table4', () => {
    expect(parse(table4.value)).toStrictEqual(table4.expected);
  });
  test('should parse table5', () => {
    expect(parse(table5.value)).toStrictEqual(table5.expected);
  });
  test('should parse table6', () => {
    expect(parse(table6.value)).toStrictEqual(table6.expected);
  });
  test('should parse table7', () => {
    expect(parse(table7.value)).toStrictEqual(table7.expected);
  });
});
