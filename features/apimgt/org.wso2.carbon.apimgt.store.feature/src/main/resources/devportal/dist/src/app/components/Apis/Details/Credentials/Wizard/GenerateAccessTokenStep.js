"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Tokens = _interopRequireDefault(require("AppComponents/Shared/AppsAndKeys/Tokens"));

var _Application = _interopRequireDefault(require("AppData/Application"));

var _styles = require("@material-ui/core/styles");

var _reactIntl = require("react-intl");

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _ButtonPanel = _interopRequireDefault(require("./ButtonPanel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    tokenWrapper: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(7)
    },
    title: {
      paddingLeft: theme.spacing(2)
    }
  };
});

var generateAccessTokenStep = function generateAccessTokenStep(props) {
  var _useState = (0, _react.useState)('PRODUCTION'),
      _useState2 = _slicedToArray(_useState, 2),
      keyType = _useState2[0],
      setKeyType = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      subscriptionScopes = _useState4[0],
      setSubscriptionScopes = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      notFound = _useState6[0],
      setNotFound = _useState6[1];

  var _useState7 = (0, _react.useState)({
    timeout: 3600,
    scopesSelected: [],
    keyType: ''
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      accessTokenRequest = _useState8[0],
      setAccessTokenRequest = _useState8[1];

  var currentStep = props.currentStep,
      createdApp = props.createdApp,
      setCreatedToken = props.setCreatedToken,
      incrementStep = props.incrementStep,
      createdKeyType = props.createdKeyType,
      intl = props.intl;
  (0, _react.useEffect)(function () {
    var newRequest = _objectSpread(_objectSpread({}, accessTokenRequest), {}, {
      keyType: createdKeyType
    });

    setKeyType(createdKeyType);
    setAccessTokenRequest(newRequest);
  }, [createdKeyType]);
  (0, _react.useEffect)(function () {
    _Application["default"].get(createdApp.value).then(function (application) {
      application.getKeys().then(function () {
        var subscriptionScopesList = application.subscriptionScopes.map(function (scope) {
          return scope.key;
        });
        setSubscriptionScopes(subscriptionScopesList);
      });
    })["catch"](function (error) {
      if (process.env.NODE_ENV !== 'production') {
        console.error(error);
      }

      var status = error.status;

      if (status === 404) {
        setNotFound(true);
      }
    });
  }, []);

  var generateAccessToken = function generateAccessToken() {
    _Application["default"].get(createdApp.value).then(function (application) {
      return application.generateToken(accessTokenRequest.keyType, accessTokenRequest.timeout, accessTokenRequest.scopesSelected);
    }).then(function (response) {
      console.log('token generated successfully ' + response);
      setCreatedToken(response);
      incrementStep();
    })["catch"](function (error) {
      if (process.env.NODE_ENV !== 'production') {
        console.error(error);
      }

      var status = error.status;

      if (status === 404) {
        setNotFound(true);
      }
    });
  };

  var classes = useStyles();
  var messages = (0, _reactIntl.defineMessages)({
    dataInfo: {
      id: 'Apis.Details.Credentials.Wizard.GenerateAccessTokenStep',
      defaultMessage: 'Generate Access Toke for {keyType} environment'
    }
  });
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.tokenWrapper
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "subtitle1",
    component: "div",
    className: classes.title
  }, intl.formatMessage(messages.dataInfo, {
    keyType: keyType
  })), /*#__PURE__*/_react["default"].createElement(_Tokens["default"], {
    updateAccessTokenRequest: setAccessTokenRequest,
    accessTokenRequest: accessTokenRequest,
    subscriptionScopes: subscriptionScopes
  }), /*#__PURE__*/_react["default"].createElement(_ButtonPanel["default"], {
    classes: classes,
    currentStep: currentStep,
    handleCurrentStep: generateAccessToken
  })));
};

var _default = (0, _reactIntl.injectIntl)(generateAccessTokenStep);

exports["default"] = _default;