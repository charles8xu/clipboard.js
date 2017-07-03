module.exports = function (karma) {
    karma.set({
        plugins: ['karma-browserify', 'karma-chai', 'karma-sinon', 'karma-mocha', 'karma-chrome-launcher', 'karma-safari-launcher', 'karma-firefox-launcher', 'karma-mocha-reporter'],

        frameworks: ['browserify', 'chai', 'sinon', 'mocha'],

        files: [
            'src/**/*.js',
            'test/**/*.js'
        ],

        exclude: ['test/module-systems.js'],

        preprocessors: {
            'src/**/*.js': ['browserify'],
            'test/**/*.js': ['browserify']
        },

        browserify: {
            debug: true,
            transform: ['babelify']
        },

        browsers: ['Safari', 'Firefox', 'Chrome', 'ChromeCanary'],

        autoWatch: false,

        logLevel: karma.LOG_DEBUG,

        colors: true
    });
}
