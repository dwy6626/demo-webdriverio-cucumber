# language: pt

Funcionalidade: Validações na tela de login

    Contexto:
        Dado eu estou na página de login

    Cenário: Login com usuário padrão
        Quando eu faço login com usuário padrão
        Então sistema exibe mensagem de bem vindo
        E sistema exibe nome do usuário 'Leandro Nelson Gael Castro' no site
