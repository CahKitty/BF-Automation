const { defineConfig } = require("cypress");
 
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://bfree.eduzz.com/bfree-stage/'
  },
  retries:{
    runMode: 2,
    openMode: 1
  }
});
