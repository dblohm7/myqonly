// eslint-disable-next-line no-undef
module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: "",

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ["mocha", "chai",],

    // list of files / patterns to load in the browser
    files: [
      // Test dependencies
      "node_modules/expect.js/index.js",
      "node_modules/sinon-chrome/bundle/sinon-chrome-webextensions.min.js",

      // Source to test
      "addon/*.js",
      { pattern: "addon/content/*/*.*", served: true, included: false, },

      // Tests
      "tests/*.js",
      "tests/content/*.js",
      "tests/services/**/*.js",

      // Service test files
      { pattern: "tests/services/**/*.html", served: true, included: false, },
    ],

    client: {
      mocha: {
        // change Karma's debug.html to the mocha web reporter
        reporter: "html",
      },
    },

    // preprocess matching files before serving them to the browser
    // available preprocessors:
    // https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ["dots",],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR ||
    //                  config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable/disable watching file and executing tests when any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers:
    // https://npmjs.org/browse/keyword/karma-launcher
    browsers: ["Firefox",],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
  });
};