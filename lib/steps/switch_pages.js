import { When } from 'cucumber'

const unlimitedPage = require('../pages/unlimited_page')

When(/^I click home icon$/, () => {
    unlimitedPage.clickHome()
})
