var badge = require('../');

var svg = badge({
  subject: 'super-badge',
  status: '0.1.0',
  color: 'yellowgreen'
});

console.log(svg);