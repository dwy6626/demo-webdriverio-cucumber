const TopPage = require('./top_page')

class PPVPage extends TopPage {
    appear() {
        super.appear(this.headerElement.ppvPageSymbol, 'PPV Page')
    }
}

module.exports = new PPVPage()
