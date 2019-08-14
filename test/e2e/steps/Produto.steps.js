import { When } from 'cucumber';
import { produto } from '../pages/Produto.page';

When(/^eu adiciono o item ao carrinho$/, () => {
    produto.containerProduto.moveTo();
    produto.botaoAdicionarAoCarrinho.click();
    produto.aguardarModalDisponivel();
    produto.botaoContinuarCompra.waitForEnabled();
    produto.botaoContinuarCompra.click();
});
