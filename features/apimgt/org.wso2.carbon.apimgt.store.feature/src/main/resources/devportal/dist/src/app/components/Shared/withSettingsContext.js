"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SettingsContext = require("./SettingsContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var withSettings = function withSettings(WrappedComponent) {
  /**
   * Higher order component with settings
   * @param {*} props properties
   * @returns {Context.Consumer}
   */
  function HOCWithSettings(props) {
    return /*#__PURE__*/_react["default"].createElement(_SettingsContext.SettingsConsumer, null, function (context) {
      return /*#__PURE__*/_react["default"].createElement(WrappedComponent, _extends({}, context, props));
    });
  }

  return HOCWithSettings;
};

var _default = withSettings;
exports["default"] = _default;