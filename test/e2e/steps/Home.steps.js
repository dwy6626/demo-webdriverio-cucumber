import { assert } from 'chai';
import { When, Then } from 'cucumber';
import { homePage } from '../pages/Home.page';

When(/^eu estou no menu de T-Shirts$/, () => {
    homePage.menuTShirts.click();
});

When(/^eu acesso o menu de carrinho de compras$/, () => {
    homePage.botaoCarrinhoDeCompras.click();
});

Then(/^sistema apresenta categoria '(.+)'$/, (categoria) => {
    assert.equal(homePage.categoria.getText(), categoria);
});
