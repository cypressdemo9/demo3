/// <reference types="Cypress" />
import LoginPage from '../src/pages/LoginPage';
import HomePage from '../src/pages/HomePage';
import CartPage from '../src/pages/CartPage';

describe('Login to Swag Labs', () => {
    const lit = {
        username: 'standard_user',
        password: 'secret_sauce',
        invalidusername: 'standard_use',
        invalidpassword: 'secret_sauc',
    };
    it('Add to Product to Cart',{tags:['@smoke','@db']}, () => {
        const loginPage = new LoginPage();
        const homePage = new HomePage();
        const cartPage = new CartPage();

        loginPage.visit().checkPageUrl();

        loginPage.loginwithCredentials('standard_user', 'secret_sauce');

        homePage.checkPageUrl();
        homePage.addProductToCart('Sauce Labs Bolt T-Shirt');
        homePage.header.clickShoppingCartButton();

        cartPage.getProductName().should('eq', 'Sauce Labs Bolt T-Shirt');
    });

    // it('Login to Sauce', () => {
    //     const loginPage = new LoginPage();
    //     const homePage = new HomePage();
    //     const cartPage = new CartPage();

    //     loginPage.visit().checkPageUrl();

    //     loginPage.loginwithCredentials('standard_user', 'secret_sauce');

    //     homePage.checkPageUrl();
        
    // });
});
