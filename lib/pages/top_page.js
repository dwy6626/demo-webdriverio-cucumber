const mixin = require('xmultiple')
const Header = require('./_basic_module/header')
const Page = require('./_basic_module/page')

class TopPage extends mixin(Header, Page) {
    appear(pageSymbol, pageName) {
        super.appear(pageSymbol, pageName)
        super.headerAppear()
    }
}

module.exports = TopPage
