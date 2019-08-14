class HomePage {
    get menuTShirts() {
        return $('ul li:nth-child(3) a[title="T-shirts"]');
    }

    get categoria() {
        return $('.category-name');
    }

    get botaoCarrinhoDeCompras() {
        return $('.shopping_cart b');
    }
}

export const homePage = new HomePage();
