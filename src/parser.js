const emptyLinesFilter = line => line.trim() !== '';

const delimiter = /^\|\s|\s\||^\|$/g;

const trimArray = (array, pattern) => {
  const temp = Array.from(array);

  const isRegex = typeof pattern !== 'string';

  while (isRegex ? temp[0].trim().match(pattern) : temp[0].trim() === pattern) temp.shift();
  temp.reverse();
  while (isRegex ? temp[0].trim().match(pattern) : temp[0].trim() === pattern) temp.shift();
  temp.reverse();

  return temp;
};

const parse = source => {
  const allLines = trimArray(source.split('\n'), '');
  const emptyLineIndex = allLines.findIndex(line => line === '');

  const lines = emptyLineIndex > -1 ? allLines.slice(0, emptyLineIndex) : allLines;

  const columns = trimArray(lines[0].split(''), delimiter)
    .join('')
    .split(delimiter)
    .map(str => str.trim());

  const delimiters = lines[1];

  const delimitersCount =
    trimArray(delimiters.split(''), delimiter)
      .join('')
      .split(/:?-+:?/g).length - 1;

  if (columns.length !== delimitersCount) return [];

  const rows = lines.slice(2).filter(line => line.trim().charAt(0) !== '>');

  return rows.map(line => {
    const cells = trimArray(line.split(''), delimiter)
      .join('')
      .split(delimiter)
      .map(str => str.trim());

    return Object.assign(
      ...columns.map((column, index) => ({ [column]: cells[index] || null }))
    );
  });
};

module.exports = {
  parse,
};
