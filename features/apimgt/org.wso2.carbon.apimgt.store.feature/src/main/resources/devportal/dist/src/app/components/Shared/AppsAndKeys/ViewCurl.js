"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _reactCopyToClipboard = _interopRequireDefault(require("react-copy-to-clipboard"));

var _FileCopy = _interopRequireDefault(require("@material-ui/icons/FileCopy"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _reactIntl = require("react-intl");

var _SettingsContext = _interopRequireDefault(require("AppComponents/Shared/SettingsContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    code: {
      padding: theme.spacing(1),
      marginBottom: theme.spacing(2),
      background: theme.palette.grey[200],
      color: '#da2316',
      flex: 1
    },
    command: {
      color: '#2b62b0'
    },
    encodeVisible: {
      cursor: 'pointer',
      textDecoration: 'underline'
    },
    contentWrapper: {
      display: 'flex'
    }
  };
});
/**
 *
 * @param {*} props
 */

function ViewCurl(props) {
  var classes = useStyles();
  var _props$keys = props.keys,
      consumerKey = _props$keys.consumerKey,
      consumerSecret = _props$keys.consumerSecret,
      intl = props.intl;
  var bas64Encoded = window.btoa(consumerKey + ':' + consumerSecret);

  var _useContext = (0, _react.useContext)(_SettingsContext["default"]),
      apiGatewayEndpoint = _useContext.settings.apiGatewayEndpoint;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showReal = _useState2[0],
      setShowReal = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      tokenCopied = _useState4[0],
      setTokenCopied = _useState4[1];

  var onCopy = function onCopy() {
    setTokenCopied(true);

    var caller = function caller() {
      setTokenCopied(false);
    };

    setTimeout(caller, 4000);
  };

  var applyReal = function applyReal() {
    setShowReal(!showReal);
  };

  var gatewayUrl = apiGatewayEndpoint ? apiGatewayEndpoint.split(',')[0] : 'https://localhost:8243';
  var tokenURL = "".concat(gatewayUrl, "/token");
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_core.Typography, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Shared.AppsAndKeys.ViewCurl.help",
    defaultMessage: "The following cURL command shows how to generate an access token using the Password Grant type."
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.contentWrapper
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.code
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", {
    className: classes.command
  }, "curl -k -X POST "), " ", tokenURL, /*#__PURE__*/_react["default"].createElement("span", {
    className: classes.command
  }, " -d "), ' ', '"grant_type=password&username=Username&password=Password"'), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", {
    className: classes.command
  }, " -H "), '"Authorization: Basic', /*#__PURE__*/_react["default"].createElement("a", {
    onClick: applyReal,
    className: classes.encodeVisible
  }, showReal ? ' ' + bas64Encoded : ' Base64(consumer-key:consumer-secret)'), '"')), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: tokenCopied ? intl.formatMessage({
      defaultMessage: 'Copied',
      id: 'Shared.AppsAndKeys.ViewCurl.copied'
    }) : intl.formatMessage({
      defaultMessage: 'Copy to clipboard',
      id: 'Shared.AppsAndKeys.ViewCurl.copy.to.clipboard'
    }),
    placement: "right"
  }, /*#__PURE__*/_react["default"].createElement(_reactCopyToClipboard["default"], {
    text: "curl -k -X POST ".concat(tokenURL, " -d ") + '"grant_type=password&username=Username&password=Password" -H ' + "\"Authorization: Basic ".concat(bas64Encoded, "\""),
    onCopy: onCopy
  }, /*#__PURE__*/_react["default"].createElement(_FileCopy["default"], {
    color: "secondary"
  }))))), /*#__PURE__*/_react["default"].createElement(_core.Typography, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Shared.AppsAndKeys.ViewCurl.help.in.a.similar",
    defaultMessage: "In a similar manner, you can generate an access token using the\n                    Client Credentials grant type with the following cURL command."
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.contentWrapper
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.code
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", {
    className: classes.command
  }, "curl -k -X POST "), " ", tokenURL, /*#__PURE__*/_react["default"].createElement("span", {
    className: classes.command
  }, " -d "), ' ', '"grant_type=client_credentials"'), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", {
    className: classes.command
  }, " -H "), '"Authorization: Basic', /*#__PURE__*/_react["default"].createElement("a", {
    onClick: applyReal,
    className: classes.encodeVisible
  }, showReal ? ' ' + bas64Encoded : ' Base64(consumer-key:consumer-secret)'), '"')), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: tokenCopied ? 'Copied' : 'Copy to clipboard',
    placement: "right"
  }, /*#__PURE__*/_react["default"].createElement(_reactCopyToClipboard["default"], {
    text: "curl -k -X POST ".concat(tokenURL, " -d ") + '"grant_type=client_credentials" -H' + "\"Authorization: Basic ".concat(bas64Encoded, "\""),
    onCopy: onCopy
  }, /*#__PURE__*/_react["default"].createElement(_FileCopy["default"], {
    color: "secondary"
  }))))));
}

ViewCurl.propTypes = {
  classes: _propTypes["default"].shape({}).isRequired,
  keys: _propTypes["default"].shape({}).isRequired,
  apis: _propTypes["default"].shape({}).isRequired
};

var _default = (0, _reactIntl.injectIntl)(ViewCurl);

exports["default"] = _default;