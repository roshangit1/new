const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '76h94p',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
