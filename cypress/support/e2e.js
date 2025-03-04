// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

import '@applitools/eyes-cypress/commands'
import "cypress-real-events";
import 'cypress-xpath';


// Import commands.js using ES2015 syntax:
// Alternatively you can use CommonJS syntax:
// require('./commands')
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
import '@shelex/cypress-allure-plugin';
import "./commands";
require('@shelex/cypress-allure-plugin');
require("cypress-xpath");

Cypress.config('defaultCommandTimeout', 100000) // define o tempo limite para 10 segundos

Cypress.on("uncaught:exception", (err, runnable, promise) => {
    return false;
});

Cypress.on("window:before:load", () => {
  Cypress.cy.state("jQuery", Cypress.$);
});

