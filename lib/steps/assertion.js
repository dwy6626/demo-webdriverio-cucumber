import { Then } from 'cucumber'

Then(/^I should in (unlimited|ppv|freemium) page$/, (tab) => {
    unlimitedPage.checkTab(tab)
})
