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

var FormattedMessage = _react2['default'].createClass({
    displayName: 'FormattedMessage',
    mixins: [_mixin2['default']],

    propTypes: {
        tagName: _react2['default'].PropTypes.string,
        message: _react2['default'].PropTypes.string.isRequired
    },

    getDefaultProps: function getDefaultProps() {
        return { tagName: 'span' };
    },

    render: function render() {
        var props = this.props;
        var tagName = props.tagName;
        var message = props.message;

        // Creates a token with a random guid that should not be guessable or
        // conflict with other parts of the `message` string.
        var guid = Math.floor(Math.random() * 0x10000000000).toString(16);
        var tokenRegex = new RegExp('(@__ELEMENT-' + guid + '-\\d+__@)', 'g');
        var elements = {};

        var generateToken = (function () {
            var counter = 0;
            return function () {
                return '@__ELEMENT-' + guid + '-' + (counter += 1) + '__@';
            };
        })();

        // Iterates over the `props` to keep track of any React Element values
        // so they can be represented by the `token` as a placeholder when the
        // `message` is formatted. This allows the formatted message to then be
        // broken-up into parts with references to the React Elements inserted
        // back in.
        var values = Object.keys(props).reduce(function (values, name) {
            var value = props[name];
            var token;

            if (_react2['default'].isValidElement(value)) {
                token = generateToken();
                values[name] = token;
                elements[token] = value;
            } else {
                values[name] = value;
            }

            return values;
        }, {});

        // Formats the `message` with the `values`, including the `token`
        // placeholders for React Element values.
        var formattedMessage = this.formatMessage(message, values);

        // Split the message into parts so the React Element values captured
        // above can be inserted back into the rendered message. This
        // approach allows messages to render with React Elements while keeping
        // React's virtual diffing working properly.
        var children = formattedMessage.split(tokenRegex).filter(function (part) {
            // Ignore empty string parts.
            return !!part;
        }).map(function (part) {
            // When the `part` is a token, get a ref to the React Element.
            return elements[part] || part;
        });

        var elementArgs = [tagName, null].concat(children);
        return _react2['default'].createElement.apply(null, elementArgs);
    }
});

exports['default'] = FormattedMessage;
module.exports = exports['default'];