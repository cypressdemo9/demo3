export default class HeaderComponent {
    constructor() {
        this.cartButton = () => cy.get('.shopping_cart_link');
        this.menuButton = () => cy.get('.bm-burger-button');
    }
    clickShoppingCartButton() {
        this.cartButton().click();
    }
    clickMenuButton() {
        this.menuButton().click();
    }
}
