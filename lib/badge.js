'use strict';

var colorMap = {
  red: '#e05d44',
  orange: '#fe7d37',
  green: '#97CA00',
  brightgreen: '#4c1',
  yellowgreen: '#a4a61d',
  yellow: '#dfb317',
  lightgrey: '#9f9f9f',
  blue: '#007ec6'
};

var fs = require('fs');
var path = require('path');
var assign = require('object-assign');
var stringWidth = require('string-width');
var template = require('lodash.template');

var baseWidth = 7;

// 默认配置

var defaultOptions = {
  style: 'normal',
  subject: '',
  status: '',
  color: 'red'
};

var templateCache = {};

function getTemplateSvg(name) {
  if (!templateCache[name]) {
    var templatePath = path.join(__dirname, '../templates/' + name + '.svg');
    var templateSvg = fs.readFileSync(templatePath).toString();
    templateCache[name] = templateSvg
  }

  return templateCache[name];
}

module.exports = function badge(options) {
  options = options || {};
  var config = assign(defaultOptions, options);

  var subjectWidth = stringWidth(config.subject) * baseWidth + 10;
  var statusWidth = stringWidth(config.status) * baseWidth + 10;

  config.subjectWidth = subjectWidth;
  config.statusWidth = statusWidth;

  config.width = subjectWidth + statusWidth;

  config.color = colorMap[config.color] || colorMap.yellow;



  var svg = template(getTemplateSvg(config.style))(config);

  return svg;
};
