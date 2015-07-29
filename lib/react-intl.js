/* jshint esnext: true */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.__addLocaleData = __addLocaleData;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _intlMessageformat = require('intl-messageformat');

var _intlMessageformat2 = _interopRequireDefault(_intlMessageformat);

var _intlRelativeformat = require('intl-relativeformat');

var _intlRelativeformat2 = _interopRequireDefault(_intlRelativeformat);

var _en = require('./en');

var _en2 = _interopRequireDefault(_en);

var _mixin = require('./mixin');

var _mixin2 = _interopRequireDefault(_mixin);

var _componentsDate = require('./components/date');

var _componentsDate2 = _interopRequireDefault(_componentsDate);

var _componentsTime = require('./components/time');

var _componentsTime2 = _interopRequireDefault(_componentsTime);

var _componentsRelative = require('./components/relative');

var _componentsRelative2 = _interopRequireDefault(_componentsRelative);

var _componentsNumber = require('./components/number');

var _componentsNumber2 = _interopRequireDefault(_componentsNumber);

var _componentsMessage = require('./components/message');

var _componentsMessage2 = _interopRequireDefault(_componentsMessage);

var _componentsHtmlMessage = require('./components/html-message');

var _componentsHtmlMessage2 = _interopRequireDefault(_componentsHtmlMessage);

exports.IntlMixin = _mixin2['default'];
exports.FormattedDate = _componentsDate2['default'];
exports.FormattedTime = _componentsTime2['default'];
exports.FormattedRelative = _componentsRelative2['default'];
exports.FormattedNumber = _componentsNumber2['default'];
exports.FormattedMessage = _componentsMessage2['default'];
exports.FormattedHTMLMessage = _componentsHtmlMessage2['default'];

function __addLocaleData(data) {
    _intlMessageformat2['default'].__addLocaleData(data);
    _intlRelativeformat2['default'].__addLocaleData(data);
}

__addLocaleData(_en2['default']);