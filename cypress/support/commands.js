// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import * as logindata from '../fixtures/login.json';
import 'cypress-real-events';
import 'cypress-iframe';
require('cypress-downloadfile/lib/downloadFileCommand');

Cypress.Commands.add('login', (username, password) => {
    cy.session(
        [username, password],
        () => {
            cy.visit('/');
            cy.get('#login2').click();
            cy.get('#loginusername').type(username, { force: true });
            cy.wait(1000);
            cy.get('#loginpassword').type(password, { force: true });
            cy.wait(1000);
            cy.get(
                '#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'
            ).click();
            cy.wait(5000);
        },
        { cacheAcrossSpecs: true }
    );
});

Cypress.Commands.add('apilogin', (username, password) => {
    let token;
    cy.api({
        method: 'POST',
        url: 'https://api.demoblaze.com/login',
        body: {
            username: username,
            password: b64EncodeUnicode(password),
        },
    }).then((response) => {
        cy.log(response.body);
        token = getTextAfterColon(response.body);
        Cypress.env('token', token);
    });
});

Cypress.Commands.add('getLable', { prevSubject: true }, (ele) => {
    return cy.wrap(ele).invoke('text');
});

Cypress.Commands.add('login1', (username, password) => {
    cy.session(
        [username, password],
        () => {
            cy.visit('/');
            cy.title().should('eq', 'STORE');
            cy.get('#login2').click();
            cy.get('#loginusername')
                .type(username)
                .should('have.value', username);
            cy.get('#loginpassword').clear().type(password);
            cy.get(
                '#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'
            ).click();
            cy.wait(4000);
        },
        { cacheAcrossSpecs: true }
    );
});

Cypress.Commands.add('getLatestCreatedFile', (folderPath) => {
    return cy.task('getLatestCreatedFile', folderPath);
});

function getTextAfterColon(text) {
    // Split the text at the colon
    const parts = text.split(':');

    // Return the text after the colon (index 1)
    return parts[1].trim();
}
