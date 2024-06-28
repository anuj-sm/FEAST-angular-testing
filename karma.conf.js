module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      jasmine: {
      },
      clearContext: false
    },
    jasmineHtmlReporter: {
      suppressAll: true
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/angular-testing'),
      subdir: '.',
      reporters: [
        { type: 'text-summary', file: 'coverage.txt' },
        { type: 'html' },
        { type: 'text-summary' }
      ],
    },
    thresholds: {
      emitWarning: false, // set to `true` to not fail the test command when thresholds are not met
      global: {
        statements: 80,
        lines: 80,
        branches: 80,
        functions: 80
      },
      each: {
        statements: 80,
        lines: 80,
        branches: 80,
        functions: 80
      }
    },
    reporters: ['progress', 'kjhtml', 'coverage'],
    browsers: ['Chrome'],
    restartOnFileChange: true
  });
};
