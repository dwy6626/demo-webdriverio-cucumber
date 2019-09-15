const PageElementTable = require('../../element_tables/page_table')

const magicNumber = 500

class Page {
    get pageElement() {
        return PageElementTable
    } 

    appear(uniqueItem, pageName) {
        $(uniqueItem).waitForExist()
        console.log(`Now page on: ${pageName}`)
    }

    waitForLoading() {
        browser.pause(magicNumber)
        $(this.pageElement.loading).waitForExist({ reverse: true })
        browser.pause(magicNumber)
    }
}

module.exports = Page
