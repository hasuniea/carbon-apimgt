"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @inheritdoc
 * @param {*} theme theme object
 */
var styles = function styles(theme) {
  return {
    createTitle: {
      color: theme.palette.getContrastText(theme.palette.background["default"])
    },
    applicationContent: {
      '& span, & div, & p, & input': {
        color: theme.palette.getContrastText(theme.palette.background.paper)
      }
    }
  };
};
/**
 * Base component for all API create forms
 *
 * @param {Object} props title and children components are expected
 * @returns {React.Component} Base element
 */


function ApplicationCreateBase(props) {
  var title = props.title,
      children = props.children,
      classes = props.classes;
  return /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    mt: 5
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 3
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    sm: 12,
    md: 3
  }), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    sm: 12,
    md: 6
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 5
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    md: 12,
    className: classes.createTitle
  }, title), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    md: 12,
    className: classes.applicationContent
  }, /*#__PURE__*/_react["default"].createElement(_Paper["default"], {
    elevation: 0
  }, children))))));
}

ApplicationCreateBase.propTypes = {
  title: _propTypes["default"].element.isRequired,
  children: _propTypes["default"].element.isRequired
};

var _default = (0, _styles.withStyles)(styles)(ApplicationCreateBase);

exports["default"] = _default;