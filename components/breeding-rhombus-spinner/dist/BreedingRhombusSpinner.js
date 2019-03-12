'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  height: ', 'px;\n  width: ', 'px;\n  position: relative;\n  transform: rotate(45deg);\n\n  * {\n    box-sizing: border-box;\n  }\n\n  .rhombus {\n    height: calc(', 'px / 7.5);\n    width: calc(', 'px / 7.5);\n    animation-duration: ', 'ms;\n    top: calc(', 'px / 2.3077);\n    left: calc(', 'px / 2.3077);\n    background-color: ', ';\n    position: absolute;\n    animation-iteration-count: infinite;\n  }\n\n  .rhombus:nth-child(2n + 0) {\n    margin-right: 0;\n  }\n\n  .rhombus.child-1 {\n    animation-name: breeding-rhombus-spinner-animation-child-1;\n    animation-delay: calc(', 'ms * 1);\n  }\n\n  .rhombus.child-2 {\n    animation-name: breeding-rhombus-spinner-animation-child-2;\n    animation-delay: calc(', 'ms * 2);\n  }\n\n  .rhombus.child-3 {\n    animation-name: breeding-rhombus-spinner-animation-child-3;\n    animation-delay: calc(', 'ms * 3);\n  }\n\n  .rhombus.child-4 {\n    animation-name: breeding-rhombus-spinner-animation-child-4;\n    animation-delay: calc(', 'ms * 4);\n  }\n\n  .rhombus.child-5 {\n    animation-name: breeding-rhombus-spinner-animation-child-5;\n    animation-delay: calc(', 'ms * 5);\n  }\n\n  .rhombus.child-6 {\n    animation-name: breeding-rhombus-spinner-animation-child-6;\n    animation-delay: calc(', 'ms * 6);\n  }\n\n  .rhombus.child-7 {\n    animation-name: breeding-rhombus-spinner-animation-child-7;\n    animation-delay: calc(', 'ms * 7);\n  }\n\n  .rhombus.child-8 {\n    animation-name: breeding-rhombus-spinner-animation-child-8;\n    animation-delay: calc(', 'ms * 8);\n  }\n\n  .rhombus.big {\n    height: calc(', 'px / 3);\n    width: calc(', 'px / 3);\n    animation-duration: ', 'ms;\n    top: calc(', 'px / 3);\n    left: calc(', 'px / 3);\n    background-color: ', ';\n    animation: breeding-rhombus-spinner-animation-child-big\n      ', ' infinite;\n    animation-delay: 0.5s;\n  }\n\n  @keyframes breeding-rhombus-spinner-animation-child-1 {\n    50% {\n      transform: translate(-325%, -325%);\n    }\n  }\n  @keyframes breeding-rhombus-spinner-animation-child-2 {\n    50% {\n      transform: translate(0, -325%);\n    }\n  }\n  @keyframes breeding-rhombus-spinner-animation-child-3 {\n    50% {\n      transform: translate(325%, -325%);\n    }\n  }\n  @keyframes breeding-rhombus-spinner-animation-child-4 {\n    50% {\n      transform: translate(325%, 0);\n    }\n  }\n  @keyframes breeding-rhombus-spinner-animation-child-5 {\n    50% {\n      transform: translate(325%, 325%);\n    }\n  }\n  @keyframes breeding-rhombus-spinner-animation-child-6 {\n    50% {\n      transform: translate(0, 325%);\n    }\n  }\n  @keyframes breeding-rhombus-spinner-animation-child-7 {\n    50% {\n      transform: translate(-325%, 325%);\n    }\n  }\n  @keyframes breeding-rhombus-spinner-animation-child-8 {\n    50% {\n      transform: translate(-325%, 0);\n    }\n  }\n  @keyframes breeding-rhombus-spinner-animation-child-big {\n    50% {\n      transform: scale(0.5);\n    }\n  }\n'], ['\n  height: ', 'px;\n  width: ', 'px;\n  position: relative;\n  transform: rotate(45deg);\n\n  * {\n    box-sizing: border-box;\n  }\n\n  .rhombus {\n    height: calc(', 'px / 7.5);\n    width: calc(', 'px / 7.5);\n    animation-duration: ', 'ms;\n    top: calc(', 'px / 2.3077);\n    left: calc(', 'px / 2.3077);\n    background-color: ', ';\n    position: absolute;\n    animation-iteration-count: infinite;\n  }\n\n  .rhombus:nth-child(2n + 0) {\n    margin-right: 0;\n  }\n\n  .rhombus.child-1 {\n    animation-name: breeding-rhombus-spinner-animation-child-1;\n    animation-delay: calc(', 'ms * 1);\n  }\n\n  .rhombus.child-2 {\n    animation-name: breeding-rhombus-spinner-animation-child-2;\n    animation-delay: calc(', 'ms * 2);\n  }\n\n  .rhombus.child-3 {\n    animation-name: breeding-rhombus-spinner-animation-child-3;\n    animation-delay: calc(', 'ms * 3);\n  }\n\n  .rhombus.child-4 {\n    animation-name: breeding-rhombus-spinner-animation-child-4;\n    animation-delay: calc(', 'ms * 4);\n  }\n\n  .rhombus.child-5 {\n    animation-name: breeding-rhombus-spinner-animation-child-5;\n    animation-delay: calc(', 'ms * 5);\n  }\n\n  .rhombus.child-6 {\n    animation-name: breeding-rhombus-spinner-animation-child-6;\n    animation-delay: calc(', 'ms * 6);\n  }\n\n  .rhombus.child-7 {\n    animation-name: breeding-rhombus-spinner-animation-child-7;\n    animation-delay: calc(', 'ms * 7);\n  }\n\n  .rhombus.child-8 {\n    animation-name: breeding-rhombus-spinner-animation-child-8;\n    animation-delay: calc(', 'ms * 8);\n  }\n\n  .rhombus.big {\n    height: calc(', 'px / 3);\n    width: calc(', 'px / 3);\n    animation-duration: ', 'ms;\n    top: calc(', 'px / 3);\n    left: calc(', 'px / 3);\n    background-color: ', ';\n    animation: breeding-rhombus-spinner-animation-child-big\n      ', ' infinite;\n    animation-delay: 0.5s;\n  }\n\n  @keyframes breeding-rhombus-spinner-animation-child-1 {\n    50% {\n      transform: translate(-325%, -325%);\n    }\n  }\n  @keyframes breeding-rhombus-spinner-animation-child-2 {\n    50% {\n      transform: translate(0, -325%);\n    }\n  }\n  @keyframes breeding-rhombus-spinner-animation-child-3 {\n    50% {\n      transform: translate(325%, -325%);\n    }\n  }\n  @keyframes breeding-rhombus-spinner-animation-child-4 {\n    50% {\n      transform: translate(325%, 0);\n    }\n  }\n  @keyframes breeding-rhombus-spinner-animation-child-5 {\n    50% {\n      transform: translate(325%, 325%);\n    }\n  }\n  @keyframes breeding-rhombus-spinner-animation-child-6 {\n    50% {\n      transform: translate(0, 325%);\n    }\n  }\n  @keyframes breeding-rhombus-spinner-animation-child-7 {\n    50% {\n      transform: translate(-325%, 325%);\n    }\n  }\n  @keyframes breeding-rhombus-spinner-animation-child-8 {\n    50% {\n      transform: translate(-325%, 0);\n    }\n  }\n  @keyframes breeding-rhombus-spinner-animation-child-big {\n    50% {\n      transform: scale(0.5);\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BreedingSpinner = _styledComponents2.default.div(_templateObject, function (props) {
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
  return props.color;
}, function (props) {
  return props.delayModifier;
}, function (props) {
  return props.delayModifier;
}, function (props) {
  return props.delayModifier;
}, function (props) {
  return props.delayModifier;
}, function (props) {
  return props.delayModifier;
}, function (props) {
  return props.delayModifier;
}, function (props) {
  return props.delayModifier;
}, function (props) {
  return props.delayModifier;
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
  size: 150,
  color: '#fff',
  animationDuration: 2000,
  className: ''
};

function generateRhombusChildren(num) {
  return Array.from({ length: num }).map(function (val, index) {
    return _react2.default.createElement('div', { key: index, className: 'rhombus child-' + (index + 1) });
  });
}

var BreedingRhombusSpinner = function BreedingRhombusSpinner(_ref) {
  var size = _ref.size,
      color = _ref.color,
      animationDuration = _ref.animationDuration,
      className = _ref.className,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ['size', 'color', 'animationDuration', 'className', 'style']);

  return _react2.default.createElement(
    BreedingSpinner,
    Object.assign({
      size: size,
      color: color,
      animationDuration: animationDuration,
      className: 'breeding-rhombus-spinner' + (className ? ' ' + className : ''),
      style: style,
      delayModifier: animationDuration * 0.05
    }, props),
    generateRhombusChildren(8),
    _react2.default.createElement('div', { className: 'rhombus big' })
  );
};

BreedingRhombusSpinner.propTypes = propTypes;
BreedingRhombusSpinner.defaultProps = defaultProps;

exports.default = BreedingRhombusSpinner;

//# sourceMappingURL=BreedingRhombusSpinner.js.map