# egg-@hemyn/moon-statsd

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-@hemyn/moon-statsd.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-@hemyn/moon-statsd
[travis-image]: https://img.shields.io/travis/eggjs/egg-@hemyn/moon-statsd.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-@hemyn/moon-statsd
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-@hemyn/moon-statsd.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-@hemyn/moon-statsd?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-@hemyn/moon-statsd.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-@hemyn/moon-statsd
[snyk-image]: https://snyk.io/test/npm/egg-@hemyn/moon-statsd/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-@hemyn/moon-statsd
[download-image]: https://img.shields.io/npm/dm/egg-@hemyn/moon-statsd.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-@hemyn/moon-statsd

<!--
Description here.
-->

## Install

```bash
$ npm i egg-@hemyn/moon-statsd --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.@hemyn/moonStatsd = {
  enable: true,
  package: 'egg-@hemyn/moon-statsd',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.@hemyn/moonStatsd = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
