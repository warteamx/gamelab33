'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  height: ', 'px;\n  width: ', 'px;\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  animation: scaling-squares-animation ', 'ms;\n  animation-iteration-count: infinite;\n  transform: rotate(0deg);\n\n  * {\n    box-sizing: border-box;\n  }\n\n  .square {\n    height: calc(', 'px * 0.25 / 1.3);\n    width: calc(', 'px * 0.25 / 1.3);\n    margin-right: auto;\n    margin-left: auto;\n    border: calc(', 'px * 0.04 / 1.3) solid ', ';\n    position: absolute;\n    animation-duration: ', 'ms;\n    animation-iteration-count: infinite;\n  }\n  .square:nth-child(1) {\n    animation-name: scaling-squares-spinner-animation-child-1;\n  }\n  .square:nth-child(2) {\n    animation-name: scaling-squares-spinner-animation-child-2;\n  }\n  .square:nth-child(3) {\n    animation-name: scaling-squares-spinner-animation-child-3;\n  }\n  .square:nth-child(4) {\n    animation-name: scaling-squares-spinner-animation-child-4;\n  }\n  @keyframes scaling-squares-animation {\n    50% {\n      transform: rotate(90deg);\n    }\n    100% {\n      transform: rotate(180deg);\n    }\n  }\n  @keyframes scaling-squares-spinner-animation-child-1 {\n    50% {\n      transform: translate(150%, 150%) scale(2, 2);\n    }\n  }\n  @keyframes scaling-squares-spinner-animation-child-2 {\n    50% {\n      transform: translate(-150%, 150%) scale(2, 2);\n    }\n  }\n  @keyframes scaling-squares-spinner-animation-child-3 {\n    50% {\n      transform: translate(-150%, -150%) scale(2, 2);\n    }\n  }\n  @keyframes scaling-squares-spinner-animation-child-4 {\n    50% {\n      transform: translate(150%, -150%) scale(2, 2);\n    }\n  }\n'], ['\n  height: ', 'px;\n  width: ', 'px;\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  animation: scaling-squares-animation ', 'ms;\n  animation-iteration-count: infinite;\n  transform: rotate(0deg);\n\n  * {\n    box-sizing: border-box;\n  }\n\n  .square {\n    height: calc(', 'px * 0.25 / 1.3);\n    width: calc(', 'px * 0.25 / 1.3);\n    margin-right: auto;\n    margin-left: auto;\n    border: calc(', 'px * 0.04 / 1.3) solid ', ';\n    position: absolute;\n    animation-duration: ', 'ms;\n    animation-iteration-count: infinite;\n  }\n  .square:nth-child(1) {\n    animation-name: scaling-squares-spinner-animation-child-1;\n  }\n  .square:nth-child(2) {\n    animation-name: scaling-squares-spinner-animation-child-2;\n  }\n  .square:nth-child(3) {\n    animation-name: scaling-squares-spinner-animation-child-3;\n  }\n  .square:nth-child(4) {\n    animation-name: scaling-squares-spinner-animation-child-4;\n  }\n  @keyframes scaling-squares-animation {\n    50% {\n      transform: rotate(90deg);\n    }\n    100% {\n      transform: rotate(180deg);\n    }\n  }\n  @keyframes scaling-squares-spinner-animation-child-1 {\n    50% {\n      transform: translate(150%, 150%) scale(2, 2);\n    }\n  }\n  @keyframes scaling-squares-spinner-animation-child-2 {\n    50% {\n      transform: translate(-150%, 150%) scale(2, 2);\n    }\n  }\n  @keyframes scaling-squares-spinner-animation-child-3 {\n    50% {\n      transform: translate(-150%, -150%) scale(2, 2);\n    }\n  }\n  @keyframes scaling-squares-spinner-animation-child-4 {\n    50% {\n      transform: translate(150%, -150%) scale(2, 2);\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ScalingSquares = _styledComponents2.default.div(_templateObject, function (props) {
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
  return props.color;
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
  animationDuration: 1250,
  className: ''
};

function generateSpinners(num) {
  return Array.from({ length: num }).map(function (val, index) {
    return _react2.default.createElement('div', { key: index, className: 'square' });
  });
}

var ScalingSquaresSpinner = function ScalingSquaresSpinner(_ref) {
  var size = _ref.size,
      color = _ref.color,
      animationDuration = _ref.animationDuration,
      className = _ref.className,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ['size', 'color', 'animationDuration', 'className', 'style']);

  return _react2.default.createElement(
    ScalingSquares,
    Object.assign({
      size: size,
      color: color,
      animationDuration: animationDuration,
      className: 'scaling-squares-spinner' + (className ? ' ' + className : ''),
      style: style
    }, props),
    generateSpinners(4)
  );
};

ScalingSquaresSpinner.propTypes = propTypes;
ScalingSquaresSpinner.defaultProps = defaultProps;

exports.default = ScalingSquaresSpinner;

//# sourceMappingURL=ScalingSquaresSpinner.js.map