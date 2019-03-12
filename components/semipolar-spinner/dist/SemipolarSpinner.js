'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  height: ', 'px;\n  width: ', 'px;\n  position: relative;\n\n  * {\n    box-sizing: border-box;\n  }\n\n  .ring {\n    border-radius: 50%;\n    position: absolute;\n    border: calc(', 'px * 0.05) solid transparent;\n    border-top-color: ', ';\n    border-left-color: ', ';\n    animation: semipolar-spinner-animation ', 'ms\n      infinite;\n  }\n  .ring:nth-child(1) {\n    height: calc(', 'px - ', 'px * 0.2 * 0);\n    width: calc(', 'px - ', 'px * 0.2 * 0);\n    top: calc(', 'px * 0.1 * 0);\n    left: calc(', 'px * 0.1 * 0);\n    animation-delay: calc(', 'ms * 0.1 * 4);\n    z-index: 5;\n  }\n  .ring:nth-child(2) {\n    height: calc(', 'px - ', 'px * 0.2 * 1);\n    width: calc(', 'px - ', 'px * 0.2 * 1);\n    top: calc(', 'px * 0.1 * 1);\n    left: calc(', 'px * 0.1 * 1);\n    animation-delay: calc(', 'ms * 0.1 * 3);\n    z-index: 4;\n  }\n  .ring:nth-child(3) {\n    height: calc(', 'px - ', 'px * 0.2 * 2);\n    width: calc(', 'px - ', 'px * 0.2 * 2);\n    top: calc(', 'px * 0.1 * 2);\n    left: calc(', 'px * 0.1 * 2);\n    animation-delay: calc(', 'ms * 0.1 * 2);\n    z-index: 3;\n  }\n  .ring:nth-child(4) {\n    height: calc(', 'px - ', 'px * 0.2 * 3);\n    width: calc(', 'px - ', 'px * 0.2 * 3);\n    top: calc(', 'px * 0.1 * 3);\n    left: calc(', 'px * 0.1 * 3);\n    animation-delay: calc(', 'ms * 0.1 * 1);\n    z-index: 2;\n  }\n  .ring:nth-child(5) {\n    height: calc(', 'px - ', 'px * 0.2 * 4);\n    width: calc(', 'px - ', 'px * 0.2 * 4);\n    top: calc(', 'px * 0.1 * 4);\n    left: calc(', 'px * 0.1 * 4);\n    animation-delay: calc(', 'ms * 0.1 * 0);\n    z-index: 1;\n  }\n  @keyframes semipolar-spinner-animation {\n    50% {\n      transform: rotate(360deg) scale(0.7);\n    }\n  }\n'], ['\n  height: ', 'px;\n  width: ', 'px;\n  position: relative;\n\n  * {\n    box-sizing: border-box;\n  }\n\n  .ring {\n    border-radius: 50%;\n    position: absolute;\n    border: calc(', 'px * 0.05) solid transparent;\n    border-top-color: ', ';\n    border-left-color: ', ';\n    animation: semipolar-spinner-animation ', 'ms\n      infinite;\n  }\n  .ring:nth-child(1) {\n    height: calc(', 'px - ', 'px * 0.2 * 0);\n    width: calc(', 'px - ', 'px * 0.2 * 0);\n    top: calc(', 'px * 0.1 * 0);\n    left: calc(', 'px * 0.1 * 0);\n    animation-delay: calc(', 'ms * 0.1 * 4);\n    z-index: 5;\n  }\n  .ring:nth-child(2) {\n    height: calc(', 'px - ', 'px * 0.2 * 1);\n    width: calc(', 'px - ', 'px * 0.2 * 1);\n    top: calc(', 'px * 0.1 * 1);\n    left: calc(', 'px * 0.1 * 1);\n    animation-delay: calc(', 'ms * 0.1 * 3);\n    z-index: 4;\n  }\n  .ring:nth-child(3) {\n    height: calc(', 'px - ', 'px * 0.2 * 2);\n    width: calc(', 'px - ', 'px * 0.2 * 2);\n    top: calc(', 'px * 0.1 * 2);\n    left: calc(', 'px * 0.1 * 2);\n    animation-delay: calc(', 'ms * 0.1 * 2);\n    z-index: 3;\n  }\n  .ring:nth-child(4) {\n    height: calc(', 'px - ', 'px * 0.2 * 3);\n    width: calc(', 'px - ', 'px * 0.2 * 3);\n    top: calc(', 'px * 0.1 * 3);\n    left: calc(', 'px * 0.1 * 3);\n    animation-delay: calc(', 'ms * 0.1 * 1);\n    z-index: 2;\n  }\n  .ring:nth-child(5) {\n    height: calc(', 'px - ', 'px * 0.2 * 4);\n    width: calc(', 'px - ', 'px * 0.2 * 4);\n    top: calc(', 'px * 0.1 * 4);\n    left: calc(', 'px * 0.1 * 4);\n    animation-delay: calc(', 'ms * 0.1 * 0);\n    z-index: 1;\n  }\n  @keyframes semipolar-spinner-animation {\n    50% {\n      transform: rotate(360deg) scale(0.7);\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Semipolar = _styledComponents2.default.div(_templateObject, function (props) {
  return props.size;
}, function (props) {
  return props.size;
}, function (props) {
  return props.size;
}, function (props) {
  return props.color;
}, function (props) {
  return props.color;
}, function (props) {
  return props.animationDuration;
}, function (props) {
  return props.size;
}, function (props) {
  return props.size;
}, function (props) {
  return props.size;
}, function (props) {
  return props.size;
}, function (props) {
  return props.size;
}, function (props) {
  return props.size;
}, function (props) {
  return props.animationDuration;
}, function (props) {
  return props.size;
}, function (props) {
  return props.size;
}, function (props) {
  return props.size;
}, function (props) {
  return props.size;
}, function (props) {
  return props.size;
}, function (props) {
  return props.size;
}, function (props) {
  return props.animationDuration;
}, function (props) {
  return props.size;
}, function (props) {
  return props.size;
}, function (props) {
  return props.size;
}, function (props) {
  return props.size;
}, function (props) {
  return props.size;
}, function (props) {
  return props.size;
}, function (props) {
  return props.animationDuration;
}, function (props) {
  return props.size;
}, function (props) {
  return props.size;
}, function (props) {
  return props.size;
}, function (props) {
  return props.size;
}, function (props) {
  return props.size;
}, function (props) {
  return props.size;
}, function (props) {
  return props.animationDuration;
}, function (props) {
  return props.size;
}, function (props) {
  return props.size;
}, function (props) {
  return props.size;
}, function (props) {
  return props.size;
}, function (props) {
  return props.size;
}, function (props) {
  return props.size;
}, function (props) {
  return props.animationDuration;
});

var propTypes = {
  size: _propTypes2.default.number,
  animationDuration: _propTypes2.default.number,
  color: _propTypes2.default.string,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object
};

var defaultProps = {
  size: 65,
  color: '#fff',
  animationDuration: 2000,
  className: ''
};

function generateSpinners(num) {
  return Array.from({ length: num }).map(function (val, index) {
    return _react2.default.createElement('div', { key: index, className: 'ring' });
  });
}

var SemipolarSpinner = function SemipolarSpinner(_ref) {
  var size = _ref.size,
      color = _ref.color,
      animationDuration = _ref.animationDuration,
      className = _ref.className,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ['size', 'color', 'animationDuration', 'className', 'style']);

  return _react2.default.createElement(
    Semipolar,
    Object.assign({
      size: size,
      color: color,
      animationDuration: animationDuration,
      className: 'semipolar-spinner' + (className ? ' ' + className : ''),
      style: style
    }, props),
    generateSpinners(5)
  );
};

SemipolarSpinner.propTypes = propTypes;
SemipolarSpinner.defaultProps = defaultProps;

exports.default = SemipolarSpinner;

//# sourceMappingURL=SemipolarSpinner.js.map