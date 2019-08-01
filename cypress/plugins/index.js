const cypressTypeScriptPreprocessor = require('./cy-ts-preprocessor')

module.exports = on => {
  on('file:preprocessor', cypressTypeScriptPreprocessor);

  // enable code coverage collection
  on('task', require('@cypress/code-coverage/task'));
}
