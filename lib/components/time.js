/* jshint esnext:true */

// TODO: Use `import React from "react";` when external modules are supported.
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('../react');

var _react2 = _interopRequireDefault(_react);

var _mixin = require('../mixin');

var _mixin2 = _interopRequireDefault(_mixin);

var FormattedTime = _react2['default'].createClass({
    displayName: 'FormattedTime',
    mixins: [_mixin2['default']],

    statics: {
        formatOptions: ['localeMatcher', 'timeZone', 'hour12', 'formatMatcher', 'weekday', 'era', 'year', 'month', 'day', 'hour', 'minute', 'second', 'timeZoneName']
    },

    propTypes: {
        format: _react2['default'].PropTypes.string,
        value: _react2['default'].PropTypes.any.isRequired
    },

    getDefaultProps: function getDefaultProps() {
        return { tagName: 'span' };
    },

    render: function render() {
        var props = this.props;
        var tagName = props.tagName;
        var value = props.value;
        var format = props.format;
        var defaults = format && this.getNamedFormat('time', format);
        var options = FormattedTime.filterFormatOptions(props, defaults);

        return _react2['default'].DOM[tagName](null, this.formatTime(value, options));
    }
});

exports['default'] = FormattedTime;
module.exports = exports['default'];