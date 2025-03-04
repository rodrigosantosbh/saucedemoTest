const fs = require('fs-extra')
const path = require('path')
require('cypress-xpath');
import './commands';

Cypress.Commands.defaults({
    timeout: 20000
  })
  
  Cypress.config('defaultCommandTimeout', 10000)

  module.exports = (on, config) => {
    allureWriter(on, config);
    return config;
  };

