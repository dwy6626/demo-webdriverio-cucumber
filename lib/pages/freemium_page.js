const TopPage = require('./top_page')

class FreemiumPage extends TopPage {
    appear() {
        super.appear(this.headerElement.freemiumPageSymbol, 'Freemium Page')
    }
}

module.exports = new FreemiumPage()
