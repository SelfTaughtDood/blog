const path = require('path');

module.exports = function override(config, env) {
  config.output.publicPath = '/frontend/public/';
  return config;
};
