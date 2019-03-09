module.exports = function (config) {
  config.set({
    logLevel: 'trace',
    mutate: ['test/*.test.js'],
    testRunner: 'karma',
    karma: {
      projectType: 'custom', // or 'angular-cli'
      configFile: './karma.conf.js', // default `undefined`
    }
  });
}
