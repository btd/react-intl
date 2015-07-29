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

var FormattedRelative = _react2['default'].createClass({
    displayName: 'FormattedRelative',
    mixins: [_mixin2['default']],

    statics: {
        formatOptions: ['style', 'units']
    },

    propTypes: {
        format: _react2['default'].PropTypes.string,
        value: _react2['default'].PropTypes.any.isRequired,
        now: _react2['default'].PropTypes.any
    },

    getDefaultProps: function getDefaultProps() {
        return { tagName: 'span' };
    },

    render: function render() {
        var props = this.props;
        var tagName = props.tagName;
        var value = props.value;
        var format = props.format;
        var defaults = format && this.getNamedFormat('relative', format);
        var options = FormattedRelative.filterFormatOptions(props, defaults);

        var formattedRelativeTime = this.formatRelative(value, options, {
            now: props.now
        });

        return _react2['default'].DOM[tagName](null, formattedRelativeTime);
    }
});

exports['default'] = FormattedRelative;
module.exports = exports['default'];