const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 2560,
  viewportHeight: 1600,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1280,
    viewportHeight: 720,
  },
  component: {
    viewportWidth: 500,
    viewportHeight: 500,
  },
});
