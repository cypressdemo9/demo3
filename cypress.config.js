const { defineConfig } = require("cypress");
const fs = require("fs");
const path = require("path");
const mysql = require('mysql2/promise');
const createPool = require('./cypress/support/db2');

module.exports = defineConfig({
  
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  
  e2e: {
    
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config);
      on('task', {
        async queryDatabase(query) {
          const pool = require('./cypress/support/db');
          const [results] = await pool.query(query);
          return results;
        }
      });
  
      return config;
    },
    baseUrl:'https://www.saucedemo.com/',
    env: {
      "DB_HOST": "localhost",
      "DB_USER": "root",
      "DB_PASSWORD": "root1234",
      "DB_NAME": "qspark"
    },
  },
})