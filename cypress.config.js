const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const fs = require('fs');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser, launchOptions) => {
        launchOptions.args.push("--force-color-profile=srgb");
        launchOptions.args.push("--disable-low-res-tiling");
        launchOptions.args.push("--disable-smooth-scrolling");

        return launchOptions;
      });

      // Adiciona a tarefa personalizada readDirectory
      on('task', {
        readDirectory(path) {
          return fs.readdirSync(path);
        },
        writeAllureResults: require('@shelex/cypress-allure-plugin/writer'),
      });

      allureWriter(on, config);
      return config;
    },

    prod: "https://www.saucedemo.com/",
    homolog: "",
    dev: "",

  },

  env: {
    APPLITOOLS_API_KEY: 'F4LFKA1q13vk2GPfum1IUwEF1zJzcR3JxUY0hwyviYY110'
  },

  projectId: 'p6yi6r',
  viewportWidth: 1440,
  viewportHeight: 900,
  trashAssetsBeforeRuns: false,
  video: false,
  pageLoadTimeout: 50000,
  browser: "chrome",
  chromeWebSecurity: false,
  experimentalMemoryManagement: true,
  numTestsKeptInMemory: 0,
  retries: 3,
  downloadsFolder: "cypress/downloads"
});

require('@applitools/eyes-cypress')(module);
