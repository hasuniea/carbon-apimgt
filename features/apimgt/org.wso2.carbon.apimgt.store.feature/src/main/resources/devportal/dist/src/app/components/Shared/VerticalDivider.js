"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Main style object to pass to the react component
 *
 * @param {*} theme
 */
var styles = function styles(theme) {
  return {
    divider: {
      borderRight: 'solid 1px #ccc'
    }
  };
};
/**
 * Gives a vertical line as a component
 *
 * @param {*} props
 * @returns
 */


function VerticalDivider(props) {
  var classes = props.classes;
  var height = props.height ? props.height : 30;
  var marginLeft = props.marginLeft ? props.marginLeft : 10;
  var marginRight = props.marginRight ? props.marginRight : 10;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.divider,
    style: {
      height: height,
      marginLeft: marginLeft,
      marginRight: marginRight
    }
  }));
}

VerticalDivider.propTypes = {
  classes: _propTypes["default"].object.isRequired
};

var _default = (0, _styles.withStyles)(styles)(VerticalDivider);

exports["default"] = _default;