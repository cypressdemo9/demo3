/// <reference types="Cypress" />
/// <reference types="../support" />

declare namespace Cypress {

    /**
     * Login to application
     * Example Login(username,password)
     */
    interface Chainable {

        login(text:string,text:string):Cypress.Chainable<JQuery<HTMLElement>>
    }
}