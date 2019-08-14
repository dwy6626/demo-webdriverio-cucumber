import { assert } from 'chai';
import { When, Then } from 'cucumber';
import { contactPage } from '../pages/Contact.page';
import * as systemMessages from '../constants/SystemMessages.constant';
import * as systemLabels from '../constants/SystemLabels.constant';

When(/^eu estou na tela de contato$/, () => {
    contactPage.goToContactPage();
});

Then(/^sistema apresenta label costumer service$/, () => {
    assert.equal(contactPage.heading.getText(), systemLabels.CUSTOMER_SERVICE);
});

When(/^eu envio uma mensagem com um pdf em anexo$/, () => {
    const content = {
        subject: 2,
        message: 'My first test.',
        file: 'test.pdf',
    };
    contactPage.sendMessage(content);
});

Then(/^sistema exibe mensagem de mensagem enviada com sucesso$/, () => {
    assert.equal(
        contactPage.successMessage.getText(),
        systemMessages.FEEDBACK_MESSAGE_SENT,
    );
});
