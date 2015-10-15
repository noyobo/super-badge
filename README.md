# super-badge

[![npm version](http://img.shields.io/npm/v/super-badge.svg)](https://www.npmjs.org/package/super-badge)
[![npm download](http://img.shields.io/npm/dm/super-badge.svg)](https://www.npmjs.org/package/super-badge)

generator badge svg

### Install

`npm install --save super-badge`

### Options

* `color` status background color; defailt: `red`
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

