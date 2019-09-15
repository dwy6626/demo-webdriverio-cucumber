require('./global.js')


// see also: https://webdriver.io/docs/configurationfile.html
exports.config = {
    // hostname: '127.0.0.1',
    // port: 9999,
    specs: ['./lib/features/*.feature'],
    exclude: ['./lib/features/tmp*.feature'],
    maxInstances: 1,
    maxInstancesPerCapability: 1,
    capabilities: [
        {
            browserName: 'chrome',
        },
        // uncomment to test on these browsers:
        // {
        //     browserName: 'safari',
        // },
        // {
        //     browserName: 'firefox',
        // },
    ],
    logLevel: 'trace',
    outputDir: './test-report/output',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 30000,
    connectionRetryCount: 3,
    framework: 'cucumber',
    specFileRetries: 0,
    reporters: [
        'dot',
        'spec',
        [
            'allure',
            {
                outputDir: './test-report/allure-result/',
                disableWebdriverStepsReporting: false,
                disableWebdriverScreenshotsReporting: false,
                useCucumberStepReporter: true,
            },
        ],
        ['junit', {
            outputDir: './test-report/junit/',
            outputFileFormat: function(options) { // optional
                return `results-${options.cid}-${options.capabilities.browserName}.xml`
            }
        }],
        ['cucumberjs-json', {
            jsonFolder: './test-report/js-cucumber/', 
        }],
    ],
    cucumberOpts: {
        requireModule: ['@babel/register'],
        require: ['./lib/steps/*.js'],
        backtrace: false,
        compiler: [],
        dryRun: false,
        failFast: false,
        format: ['pretty'],
        colors: true,
        snippets: true,
        source: true,
        profile: [],
        strict: false,
        tags: [],
        timeout: 60000,
        ignoreUndefinedDefinitions: false,
    },
    services: [
        'selenium-standalone'
    ],
    seleniumLogs : "./test-report/",
    seleniumInstallArgs: {
        version : "3.141.5",
        baseURL : "https://selenium-release.storage.googleapis.com",      
        chrome: {
            // check for more recent versions of chrome driver here:
            // https://chromedriver.storage.googleapis.com/index.html
            version: '77.0.3865.40',  // use the latest version to support w3c
            baseURL: 'https://chromedriver.storage.googleapis.com'
        },
    },
    // uncomment to accelerate the test starting:
    // skipSeleniumInstall: true,
    onPrepare() {
        console.info('Before test start')
    },
    before() {
        if (browser.isW3C) {
            browser.setWindowRect(0, 0, 1280, 700)
        } else console.warn('not W3C browser!')
    },
    // hook for cucumber should refer to:
    // https://github.com/webdriverio/webdriverio/blob/master/packages/wdio-cucumber-framework/src/reporter.js
    beforeFeature: function (uri, feature, scenarios) {
        console.info(`Feature: ${feature.name} `)
    },
    beforeScenario: function (uri, feature, scenario, sourceLocation) {
        console.info(`==== ${scenario.name} ====`)
        browser.url(ENVinfo.testurl)
    },
    beforeStep: function (uri, feature, scenario, step) {
        console.info(`LINE: ${step.keyword}>> ${step.text}`)
    },
}
