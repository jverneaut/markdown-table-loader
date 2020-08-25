const { parse } = require('./src/parser');

module.exports = function(source) {
  const { error, result } = parser(source);

  if (error) {
    return new Error(error);
  }
};
