const TopPage = require('./top_page')

class UnlimitedPage extends TopPage {
    appear() {
        super.appear(this.headerElement.unlimitedPageSymbol, 'Unlimited Page')
    }
}

module.exports = new UnlimitedPage()
