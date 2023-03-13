const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      apiUrl:"https://petstore3.swagger.io/api/v3/",
     
    },
  },
});
