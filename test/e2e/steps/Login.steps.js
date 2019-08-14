import { assert } from 'chai';
import { Given, When, Then } from 'cucumber';
import { loginPage } from '../pages/Login.page';
import { context } from '../../data/Context';
import * as systemMessages from '../constants/SystemMessages.constant';

Given(/^eu estou na página de login$/, () => {
    loginPage.open();
});

When(/^eu faço login com usuário padrão$/, () => {
    loginPage.login(context.logins.user);
});

Then(/^sistema exibe mensagem de bem vindo$/, () => {
    assert.equal(
        loginPage.welcomeMessage.getText(),
        systemMessages.FEEDBACK_USER_LOGGED,
    );
});

Then(/^sistema exibe nome do usuário '(.+)' no site$/, (userName) => {
    assert.equal(loginPage.userLoggedIn.getText(), userName);
});
