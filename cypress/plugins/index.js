const cypressTypeScriptPreprocessor = require('./cy-ts-preprocessor')

module.exports = (on, config) => {
  on('file:preprocessor', cypressTypeScriptPreprocessor);

  // enable code coverage collection
  require('@cypress/code-coverage/task')(on, config)
  // IMPORTANT to return the config object
  // with the any changed environment variables
  return config
}
