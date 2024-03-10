import BasePage from '../base/BasePage';

export default class LoginPage extends BasePage {
    constructor() {
        super();
        this.usernameInput = () => cy.get('[data-test="username"]');
        this.passwordInput = () => cy.get('[data-test="password"]');
        this.loginButton = () => cy.get('[data-test="login-button"]');
    }

    loginwithCredentials(username, password) {
        this.usernameInput().type(username);
        this.passwordInput().type(password);
        this.loginButton().click();
    }
}
