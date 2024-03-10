import BasePage from '../base/BasePage';
import HeaderComponent from '../components/HeaderComponent';

export default class CartPage extends BasePage {
    constructor() {
        super('cart.html');
        this.header = new HeaderComponent();
        this.productName = () => cy.get('.inventory_item_name');
        this.cartButton = () => cy.get('.shopping_cart_link');
    }

    getProductName() {
        return this.productName().invoke('text');
    }
    
}
