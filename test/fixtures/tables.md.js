const table1 = {
  value: `
| foo | bar |
| --- | --- |
| baz | bim |
`,
  expected: [
    {
      foo: 'baz',
      bar: 'bim',
    },
  ],
};

const table2 = {
  value: `
| abc | defghi |
:-: | -----------:
bar | baz
`,
  expected: [
    {
      abc: 'bar',
      defghi: 'baz',
    },
  ],
};

const table3 = {
  value: `
| f|oo  |
| ------ |
| b|az |
| b|im |
`,
  expected: [
    {
      'f|oo': 'b|az',
    },
    {
      'f|oo': 'b|im',
    },
  ],
};

const table4 = {
  value: `
| abc | def |
| --- | --- |
| bar | baz |
> bar
`,
  expected: [
    {
      abc: 'bar',
      def: 'baz',
    },
  ],
};

const table5 = {
  value: `
| abc | def |
| --- | --- |
| bar | baz |
bar

bar
`,
  expected: [
    {
      abc: 'bar',
      def: 'baz',
    },
    {
      abc: 'bar',
      def: null,
    },
  ],
};

const table6 = {
  value: `
| abc | def |
| --- |
| bar |
`,
  expected: [],
};

const table7 = {
  value: `
| abc | def |
| --- | --- |
| bar |
| bar | baz | boo |
`,
  expected: [
    {
      abc: 'bar',
      def: null,
    },
    {
      abc: 'bar',
      def: 'baz',
    },
  ],
};

module.exports = {
  table1,
  table2,
  table3,
  table4,
  table5,
  table6,
  table7,
};
