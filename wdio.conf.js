exports.config = {

    runner: 'local',

    specs: [
        './test/elements.js',
        './test/defaultFunctionality.js'
    ],

    exclude: [

    ],

    maxInstances: 1,

    capabilities: [{

        maxInstances: 5,

        browserName: 'chrome',

        xcludeDriverLogs: ['bugreport', 'server'],
    }],

    logLevel: 'info',

    bail: 0,

    baseUrl: ' https://likejean.github.io/homework-5/',

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    services: ['selenium-standalone'],
    framework: 'mocha',
//
    reporters: ['spec','dot',['allure', {outputDir: 'allure-results'}]],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
        compilers: ['js:@babel/register']
    }




