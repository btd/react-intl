/* jshint esnext:true */

// TODO: Use `import React from "react";` when external modules are supported.
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('../react');

var _react2 = _interopRequireDefault(_react);

var _escape = require('../escape');

var _escape2 = _interopRequireDefault(_escape);

var _mixin = require('../mixin');

var _mixin2 = _interopRequireDefault(_mixin);

var FormattedHTMLMessage = _react2['default'].createClass({
    displayName: 'FormattedHTMLMessage',
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

        // Process all the props before they are used as values when formatting
        // the ICU Message string. Since the formatted message will be injected
        // via `innerHTML`, all String-based values need to be HTML-escaped. Any
        // React Elements that are passed as props will be rendered to a static
        // markup string that is presumed to be safe.
        var values = Object.keys(props).reduce(function (values, name) {
            var value = props[name];

            if (typeof value === 'string') {
                value = (0, _escape2['default'])(value);
            } else if (_react2['default'].isValidElement(value)) {
                value = _react2['default'].renderToStaticMarkup(value);
            }

            values[name] = value;
            return values;
        }, {});

        // Since the message presumably has HTML in it, we need to set
        // `innerHTML` in order for it to be rendered and not escaped by React.
        // To be safe, all string prop values were escaped before formatting the
        // message. It is assumed that the message is not UGC, and came from
        // the developer making it more like a template.
        //
        // Note: There's a perf impact of using this component since there's no
        // way for React to do its virtual DOM diffing.
        return _react2['default'].DOM[tagName]({
            dangerouslySetInnerHTML: {
                __html: this.formatMessage(message, values)
            }
        });
    }
});

exports['default'] = FormattedHTMLMessage;
module.exports = exports['default'];