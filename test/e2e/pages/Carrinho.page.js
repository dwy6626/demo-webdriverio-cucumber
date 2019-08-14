class Carrinho {
    get mensagemCarrinhoVazio() {
        return $('.alert.alert-warning');
    }

    get nomeItemNoCarrinho() {
        return $('.cart_item .product-name');
    }
}

export const carrinho = new Carrinho();
