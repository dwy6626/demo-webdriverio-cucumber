const { TimelineService } = require('wdio-timeline-reporter')
require('./global.js')


exports.config = {
    runner: 'local',
    hostname: 'localhost',
    // hostname: '172.30.68.193',
    port: 9999,
    specs: ['./lib/features/*.feature'],
    maxInstances: 1,
    capabilities: [
        // {
        //     browserName: 'chrome',
        // },
        {
            browserName: 'safari',
        },
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
        ['timeline', { outputDir: './test-report/timeline' }],
        // ['junit', {
        //     outputDir: './test-report/junit/',
        // }],
        // ['json-cucumber', {
        //     outputDir: './test-report/js-cucumber/', 
        //     verbose: true,
        // }],
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
        [TimelineService],
        'selenium-standalone'
    ],
    before() {
        browser.setWindowSize(1280, 700)
        browser.url('https://videopass.jp')
    },
}
