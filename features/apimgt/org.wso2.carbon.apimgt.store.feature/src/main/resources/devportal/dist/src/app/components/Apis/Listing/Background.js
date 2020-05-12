"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var styles = {
  svgImage: {
    cursor: 'pointer',
    // ⚠️ object-fit is not supported by IE11.
    objectFit: 'cover'
  }
};

function aHexToOpacity(aHex) {
  var alphaValue = '0x' + aHex.substring(7, 9);
  return alphaValue / 256;
}
/**
 *
 * @param {*} aHex
 */


function getColorWithoutAlpha(aHex) {
  return aHex.substring(0, 7);
}
/**
 * Generate svg background.
 * @param {*} props
 */


function Background(props) {
  var classes = props.classes,
      colorPair = props.colorPair,
      width = props.width,
      height = props.height; // Creating the background

  var thumbnailBox = {
    width: 250,
    height: 200
  };
  var thumbnailBoxChild = {
    width: 50,
    height: 50
  };
  var rects = [];

  for (var i = 0; i <= 4; i++) {
    for (var j = 0; j <= 4; j++) {
      var color = '#' + (colorPair.sub - (0x00000025 * i - j * 0x00000015)).toString(16);
      rects.push( /*#__PURE__*/_react["default"].createElement("rect", _extends({
        key: i + '_' + j
      }, thumbnailBoxChild, {
        /* eslint no-mixed-operators: 0 */
        fill: getColorWithoutAlpha(color),
        fillOpacity: aHexToOpacity(color),
        x: 200 - i * 54,
        y: 54 * j
      })));
    }
  }

  var primeColor = '#' + colorPair.prime.toString(16);
  return /*#__PURE__*/_react["default"].createElement("svg", {
    width: width,
    height: height,
    className: classes.svgImage
  }, /*#__PURE__*/_react["default"].createElement("rect", _extends({}, thumbnailBox, {
    fill: getColorWithoutAlpha(primeColor),
    fillOpacity: aHexToOpacity(primeColor)
  })), rects);
}

Background.propTypes = {
  classes: _propTypes["default"].shape({
    svgImage: _propTypes["default"].string
  }).isRequired,
  width: _propTypes["default"].number.isRequired,
  height: _propTypes["default"].number.isRequired,
  colorPair: _propTypes["default"].shape({
    sub: _propTypes["default"].number,
    prime: _propTypes["default"].number
  }).isRequired
};

var _default = (0, _styles.withStyles)(styles)(Background);

exports["default"] = _default;