import { Then } from 'cucumber'

const unlimitedPage = require('../pages/unlimited_page')

Then(/^I should in (unlimited|ppv|freemium) page$/, (tab) => {
    unlimitedPage.checkTab(tab)
})
