const headerElementTable = require('../../element_tables/header_table')

class Header {
    get headerElement() {
        return headerElementTable
    } 

    headerAppear() {
        $(this.headerElement.headerSymbol).waitForExist()
    }

    clickHome() {
        $(this.headerElement.homeIcon).click()
    }

    checkTab(tabName) {
        switch (tabName) {
        case 'top':
        case 'unlimited':
            unlimitedPage.appear()
            break
        case 'ppv':
            ppvPage.appear()
            break
        case 'freemium':
            freemiumPage.appear()
            break
        default:
            throw new Error("Tab not found")
        }
    }
}

module.exports = Header
