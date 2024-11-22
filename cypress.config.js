const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'pwtf1w',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
