var badge = require('../');

var fs = require('fs');
var path = require('path');
var assert = require('assert');


var expectedSvg = fs.readFileSync(path.join(__dirname, './expected.svg')).toString();

var svg = badge({
  subject: 'super-badg',
  status: '0.1.0',
  color: 'yellowgreen'
});

assert.equal(svg, expectedSvg, 'badge generator test pass :)');

console.log('good!');
