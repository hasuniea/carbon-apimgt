"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _reactIntl = require("react-intl");

var _ApiContext = require("AppComponents/Apis/Details/ApiContext");

var _core = require("@material-ui/core");

var _reactRouterDom = require("react-router-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var styles = {
  button: {
    mt: 2,
    mr: 1
  },
  wizardButtons: {
    pl: 2
  }
};

var ButtonPanel = function ButtonPanel(props) {
  var currentStep = props.currentStep,
      handleCurrentStep = props.handleCurrentStep,
      handleReset = props.handleReset,
      nextActive = props.nextActive;
  var stepsLength = 5;

  var _useContext = (0, _react.useContext)(_ApiContext.ApiContext),
      api = _useContext.api,
      updateSubscriptionData = _useContext.updateSubscriptionData;

  var history = (0, _reactRouterDom.useHistory)();
  /**
   * Redirect  to the API console page
   */

  var handleTest = function handleTest() {
    history.push("/apis/".concat(api.id, "/test"));
  };
  /**
   * Redirect back to credentials page
   */


  var handleCancel = function handleCancel() {
    updateSubscriptionData(history.push('credentials'));
  };

  return /*#__PURE__*/_react["default"].createElement(_core.Box, _extends({
    display: "flex"
  }, styles.wizardButtons), currentStep < stepsLength - 1 && /*#__PURE__*/_react["default"].createElement(_core.Box, styles.button, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    onClick: handleCancel,
    variant: "text"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Apis.Details.Credentials.Wizard.Wizard.Cancel",
    defaultMessage: "CANCEL"
  }))), currentStep >= stepsLength - 1 && /*#__PURE__*/_react["default"].createElement(_core.Box, styles.button, /*#__PURE__*/_react["default"].createElement(_Button["default"], _extends({
    onClick: handleTest
  }, styles.button, {
    variant: "outlined"
  }), /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Apis.Details.Credentials.Wizard.Wizard.test",
    defaultMessage: "Test"
  }))), currentStep >= stepsLength - 1 && /*#__PURE__*/_react["default"].createElement(_core.Box, styles.button, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    variant: "outlined",
    onClick: handleReset
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Apis.Details.Credentials.Wizard.Wizard.rest",
    defaultMessage: "Reset"
  }))), /*#__PURE__*/_react["default"].createElement(_core.Box, styles.button, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    variant: "contained",
    color: "primary",
    onClick: handleCurrentStep,
    disabled: !nextActive
  }, currentStep === stepsLength - 1 ? /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Apis.Details.Credentials.Wizard.Wizard.finish",
    defaultMessage: "Finish"
  }) : /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Apis.Details.Credentials.Wizard.Wizard.next",
    defaultMessage: "Next"
  }))));
};

ButtonPanel.defaultProps = {
  nextActive: true
};
ButtonPanel.propTypes = {
  currentStep: _propTypes["default"].func.isRequired,
  handleCurrentStep: _propTypes["default"].func.isRequired,
  handleReset: _propTypes["default"].func.isRequired,
  nextActive: _propTypes["default"].bool
};
var _default = ButtonPanel;
exports["default"] = _default;