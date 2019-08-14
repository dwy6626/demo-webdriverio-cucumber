# language: pt

Funcionalidade: Quantidade de itens no carrinho de compras

    Contexto:
        Dado eu estou na página de login
        E eu faço login com usuário padrão

    Cenário: Exibe carrinho de compras vazio
        Quando eu acesso o menu de carrinho de compras
        Então sistema apresenta carrinho de compras vazio

    Cenário: Exibe carrinho de compras com um item, após incluir item no carrinho
        Quando eu estou no menu de T-Shirts
        Então sistema apresenta categoria 'T-shirts'
        E eu adiciono o item ao carrinho
        Então sistema apresenta item 'Faded Short Sleeve T-shirts' adicionado no carrinho
