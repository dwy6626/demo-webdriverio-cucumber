import { assert } from 'chai';
import { Then } from 'cucumber';
import { carrinho } from '../pages/Carrinho.page';

Then(/^sistema apresenta carrinho de compras vazio$/, () => {
    assert.equal(
        carrinho.mensagemCarrinhoVazio.getText(),
        'Your shopping cart is empty.',
    );
});

Then(
    /^sistema apresenta item '(.+)' adicionado no carrinho$/,
    (nomeProduto) => {
        assert.equal(carrinho.nomeItemNoCarrinho.getText(), nomeProduto);
    },
);
