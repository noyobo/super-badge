var badge = require('../src/badge');

var fs = require('fs');
var path = require('path');
var assert = require('assert');

var expectedSvg = fs
  .readFileSync(path.join(__dirname, './expected.svg'))
  .toString();

var svg = badge({
  subject: 'super-badge',
  status: '0.1.0',
  color: 'yellowgreen'
});

fs.writeFileSync(path.join(__dirname, './actual.svg'), svg);

assert.equal(svg, expectedSvg, 'badge generator test pass :)');

console.log('good!');
