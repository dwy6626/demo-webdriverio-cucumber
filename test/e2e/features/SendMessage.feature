# language: pt

Funcionalidade: Enviar mensagens na tela de contato

    Cenário: Exibe label de customer service
        Dado eu estou na página de login
        E eu faço login com usuário padrão
        Quando eu estou na tela de contato
        Então sistema apresenta label costumer service

    Cenário: Attaching a document to the message to the customer
        Dado eu estou na página de login
        E eu faço login com usuário padrão
        E eu estou na tela de contato
        Quando eu envio uma mensagem com um pdf em anexo
        Então sistema exibe mensagem de mensagem enviada com sucesso
