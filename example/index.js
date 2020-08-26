import table from './data.table.md';

const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');

const columns = Object.keys(table[0]);

const headerRow = document.createElement('tr');

columns.forEach(column => {
  const tableHead = document.createElement('th');
  tableHead.innerHTML = column;

  headerRow.appendChild(tableHead);
});
tableHead.appendChild(headerRow);

table.forEach(row => {
  const rowEl = document.createElement('tr');
  Object.values(row).forEach(cell => {
    const cellEl = document.createElement('td');
    cellEl.innerHTML = cell;

    rowEl.appendChild(cellEl);
  });

  tableBody.appendChild(rowEl);
});
