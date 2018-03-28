# super-badge

[![Greenkeeper badge](https://badges.greenkeeper.io/noyobo/super-badge.svg)](https://greenkeeper.io/)

[![npm version](http://img.shields.io/npm/v/super-badge.svg)](https://www.npmjs.org/package/super-badge)
[![npm download](http://img.shields.io/npm/dm/super-badge.svg)](https://www.npmjs.org/package/super-badge)
[![Build Status](https://travis-ci.org/noyobo/super-badge.svg)](https://travis-ci.org/noyobo/super-badge)

generator badge svg

### Install

`npm install --save super-badge`

### Options

* `color` status background color; default: `yellow`
  * red
  * orange
  * green
  * brightgreen
  * yellowgreen
  * yellow
  * lightgrey
  * blue

### Example

```js
var badge = require('super-badge');

var svg = badge({
  subject: 'super-badge',
  status: '0.1.0',
  color: 'yellowgreen'
});

```

