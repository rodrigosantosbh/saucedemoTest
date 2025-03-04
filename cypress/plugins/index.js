/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */

 module.exports = (on, config) => {
    config.env.APPLITOOLS_API_KEY = process.env.APPLITOOLS_API_KEY || 'F4LFKA1q13vk2GPfum1IUwEF1zJzcR3JxUY0hwyviYY110';
  return config;
   
 }