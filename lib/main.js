/* jshint esnext: true */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _reactIntl = require('./react-intl');

exports['default'] = {
    IntlMixin: _reactIntl.IntlMixin,
    FormattedDate: _reactIntl.FormattedDate,
    FormattedTime: _reactIntl.FormattedTime,
    FormattedRelative: _reactIntl.FormattedRelative,
    FormattedNumber: _reactIntl.FormattedNumber,
    FormattedMessage: _reactIntl.FormattedMessage,
    FormattedHTMLMessage: _reactIntl.FormattedHTMLMessage,

    __addLocaleData: _reactIntl.__addLocaleData
};
module.exports = exports['default'];