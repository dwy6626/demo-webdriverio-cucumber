// chai assertion library
const chai = require('chai')

chai.Should()
global.expect = chai.expect

global.ENVinfo = require('./config/env_info').qa

// main page
global.unlimitedPage = require('./lib/pages/unlimited_page')
global.ppvPage = require('./lib/pages/ppv_page')
global.freemiumPage = require('./lib/pages/freemium_page')
