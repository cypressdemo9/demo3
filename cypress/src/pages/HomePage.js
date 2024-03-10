import BasePage from '../base/BasePage';
import HeaderComponent from '../components/HeaderComponent';

export default class HomePage extends BasePage {
    constructor() {
        super('inventory.html');
        this.header = new HeaderComponent();
        this.addToCartButton = (product) =>
            cy.contains(product).parentsUntil('.inventory_item').find('.btn');
        this.cartButton = () => cy.get('.shopping_cart_link');
    }

    addProductToCart(product) {
        this.addToCartButton(product).click();
    }
   

}
