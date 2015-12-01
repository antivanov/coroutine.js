module.exports = function(config) {
  config.set({
    basePath: '.',
    frameworks: ['jasmine'],
    files: [
      'compiled/*.js'
    ],
    exclude: [
    ],
    reporters: ['spec'],
    colors: true,
    logLevel: config.LOG_INFO,
    captureTimeout: 20000,
    reportSlowerThan: 500,
    plugins: [
      'karma-jasmine',
      'karma-phantomjs-launcher',
      'karma-firefox-launcher',
      'karma-spec-reporter'
    ]
  });
};