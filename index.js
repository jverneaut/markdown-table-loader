const { parse } = require('./src/parser');

module.exports = function(source) {
  const result = parse(source);
  return 'module.exports = ' + JSON.stringify(result);
};
