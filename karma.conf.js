module.exports = function (config) {
    const Arguments = Object.freeze({
        moduleName: Symbol('red'),
    });

    const arguments = process.argv.reduce((arguments, arg) => {
        const parts = arg.split('=');

        arguments[parts[0].replace('--', '')] = parts[1];
        return arguments;
    }, {});
    // const preprocessors = {};
    // if (arguments.moduleName) {
    //     console.log('setting preprocessor for coverage report');
    //     preprocessors[`src/${arguments.moduleName}`] = ['coverage'];
    // }
    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: '',

        // frameworks to use
        frameworks: ['jasmine', 'requirejs'],

        // list of files / patterns to load in the browser
        files: [
            { pattern: 'lib/**/*.js', included: false },
            { pattern: 'src/**/*.js', included: false },
            { pattern: 'test/**/*.spec.js', included: false },

            'test/test-main.js',
        ],

        // list of files to exclude
        exclude: ['src/main.js'],

        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['progress', 'coverage'],

        // preprocessors,
        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            'src/**/*.js': ['coverage'],
        },

        coverageReporter: {
            reporters: [
                { type: 'html', dir: 'coverage/' },
                { type: 'text-summary' },
            ],
        },

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['Chrome'],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true,
    });
};
