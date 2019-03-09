module.exports = function(config) {
  config.set({
    mutate: ['src/**/*.js'],
    testRunner: 'karma',
    karma: {
      projectType: 'custom', // or 'angular-cli'
      configFile: './karma.conf.js', // default `undefined`
    },
  });
};
