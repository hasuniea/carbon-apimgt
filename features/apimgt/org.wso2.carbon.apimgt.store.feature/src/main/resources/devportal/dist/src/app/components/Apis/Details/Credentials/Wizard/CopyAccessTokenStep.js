"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ViewToken = _interopRequireDefault(require("AppComponents/Shared/AppsAndKeys/ViewToken"));

var _ApiContext = require("AppComponents/Apis/Details/ApiContext");

var _core = require("@material-ui/core");

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _reactRouterDom = require("react-router-dom");

var _styles = require("@material-ui/core/styles");

var _ButtonPanel = _interopRequireDefault(require("./ButtonPanel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    tokenWrapper: {
      paddingLeft: theme.spacing(2)
    }
  };
});

var copyAccessTokenStep = function copyAccessTokenStep(props) {
  var currentStep = props.currentStep,
      createdToken = props.createdToken,
      handleReset = props.handleReset,
      handleRedirectTest = props.handleRedirectTest;
  var history = (0, _reactRouterDom.useHistory)();

  var _useContext = (0, _react.useContext)(_ApiContext.ApiContext),
      api = _useContext.api,
      updateSubscriptionData = _useContext.updateSubscriptionData;

  var completeStep = function completeStep() {
    updateSubscriptionData(history.push("/apis/".concat(api.id, "/credentials")));
  };

  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.tokenWrapper
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    md: 10
  }, /*#__PURE__*/_react["default"].createElement(_core.Box, {
    my: 1,
    mx: 2
  }, /*#__PURE__*/_react["default"].createElement(_ViewToken["default"], {
    token: _objectSpread(_objectSpread({}, createdToken), {}, {
      isOauth: true
    })
  }))), /*#__PURE__*/_react["default"].createElement(_ButtonPanel["default"], {
    classes: classes,
    currentStep: currentStep,
    handleCurrentStep: completeStep,
    handleReset: handleReset
  }));
};

var _default = copyAccessTokenStep;
exports["default"] = _default;