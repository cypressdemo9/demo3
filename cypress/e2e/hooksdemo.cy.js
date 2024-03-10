/// <reference types="Cypress" />

//Describe or cotext() --- Test Suite
//it() or specify()
//before()

//beforeEach()
//only()
//skip()
before(() => {
    cy.log('Before Hook');
});

after(() => {
    cy.log('After Hook');
});

describe.only('Login Suite 1', () => {
    

    it.skip('Verify successful login with valid username and password', () => {
        const email = 'michael.adams@example.com';
        cy.task('queryDatabase', `SELECT * FROM users WHERE email = '${email}'`)
      .then((results) => {
        expect(results.length).to.equal(1);
        expect(results[0].email).to.equal(email);
      });
    });

    
});

describe('Login Suite 2', () => {});
