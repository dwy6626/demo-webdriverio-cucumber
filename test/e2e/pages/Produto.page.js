class Produto {
    get botaoAdicionarAoCarrinho() {
        return $('.ajax_add_to_cart_button');
    }

    get containerProduto() {
        return $('div.product-container');
    }

    get botaoContinuarCompra() {
        return $('div .button-medium:nth-child(2)');
    }

    aguardarModalDisponivel() {
        $('div#layer_cart').waitForDisplayed();
    }
}

export const produto = new Produto();
