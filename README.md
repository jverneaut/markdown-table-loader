# markdown-table-loader

Given a markdown source representing a table, returns an array containing said table data.

## Setup

```bash
npm install markdown-table-loader
```

```javascript
// webpack.config.js
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.table\.md$/,
        use: 'markdown-table-loader',
      },
    ],
  },
  // ...
};
```

```markdown
<!-- data.table.md -->

| foo | bar |
| --- | --- |
| baz | bim |
```

```javascript
// index.js
import table from './data.table.md';

console.log(table);
// [
//   {
//     foo: 'baz',
//     bar: 'bim',
//   },
// ]
```

## Examples

Implementing specifications from [github.com Tables](https://github.github.com/gfm/#tables-extension-).

```javascript
// test/fixtures/tables.md.js
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
```
