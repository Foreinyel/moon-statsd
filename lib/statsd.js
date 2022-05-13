"use strict";

const assert = require("assert");
const StatsD = require("node-statsd");

const getInstance = (() => {
  let instance = null;

  return (options) => {
    assert(options.host && options.port, "statsd: host and port requrired.");
    if (instance === null) {
      instance = new StatsD({
        host: options.host,
        port: options.port,
      });
    }
    return instance;
  };
})();

module.exports = (app) => {
  return getInstance(app.config.statsd);
};
