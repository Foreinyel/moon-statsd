"use strict";

const getStatsd = require("./lib/statsd");

module.exports = (app) => {
  const statsd = getStatsd(app);
  Object.defineProperty(app, "statsd", {
    get() {
      return statsd;
    },
  });

  Object.defineProperty(app.context, "statsd", {
    get() {
      return statsd;
    },
  });
};
