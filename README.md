# egg-crypto

[crypto-js](https://github.com/brix/crypto-js) plugin for Egg.js.

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-crypto.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-crypto
[travis-image]: https://img.shields.io/travis/eggjs/egg-crypto.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-crypto
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-crypto.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-crypto?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-crypto.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-crypto
[snyk-image]: https://snyk.io/test/npm/egg-crypto/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-crypto
[download-image]: https://img.shields.io/npm/dm/egg-crypto.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-crypto


[README](README.md) | [中文文档](README.zh_CN.md)


## Install

```bash
$ npm i egg-crypto --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.mailer = {
  enable: true,
  package: 'egg-crypto',
};
```

## Example

```js
// app/controller/home.js

'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = this.ctx.crypto.MD5('Hi, egg-crypto');
  }
}

module.exports = HomeController;
```

## List

- ```crypto-js/core```
- ```crypto-js/x64-core```
- ```crypto-js/lib-typedarrays```

---

- ```crypto-js/md5```
- ```crypto-js/sha1```
- ```crypto-js/sha256```
- ```crypto-js/sha224```
- ```crypto-js/sha512```
- ```crypto-js/sha384```
- ```crypto-js/sha3```
- ```crypto-js/ripemd160```

---

- ```crypto-js/hmac-md5```
- ```crypto-js/hmac-sha1```
- ```crypto-js/hmac-sha256```
- ```crypto-js/hmac-sha224```
- ```crypto-js/hmac-sha512```
- ```crypto-js/hmac-sha384```
- ```crypto-js/hmac-sha3```
- ```crypto-js/hmac-ripemd160```

---

- ```crypto-js/pbkdf2```

---

- ```crypto-js/aes```
- ```crypto-js/tripledes```
- ```crypto-js/rc4```
- ```crypto-js/rabbit```
- ```crypto-js/rabbit-legacy```
- ```crypto-js/evpkdf```

---

- ```crypto-js/format-openssl```
- ```crypto-js/format-hex```

---

- ```crypto-js/enc-latin1```
- ```crypto-js/enc-utf8```
- ```crypto-js/enc-hex```
- ```crypto-js/enc-utf16```
- ```crypto-js/enc-base64```

---

- ```crypto-js/mode-cfb```
- ```crypto-js/mode-ctr```
- ```crypto-js/mode-ctr-gladman```
- ```crypto-js/mode-ofb```
- ```crypto-js/mode-ecb```

---

- ```crypto-js/pad-pkcs7```
- ```crypto-js/pad-ansix923```
- ```crypto-js/pad-iso10126```
- ```crypto-js/pad-iso97971```
- ```crypto-js/pad-zeropadding```
- ```crypto-js/pad-nopadding```


## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
