"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _styles = require("@material-ui/core/styles");

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _FormHelperText = _interopRequireDefault(require("@material-ui/core/FormHelperText"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _reactIntl = require("react-intl");

var _Settings = _interopRequireDefault(require("Settings"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ResourceNotFound = _interopRequireDefault(require("AppComponents/Base/Errors/ResourceNotFound"));

var _Validation = _interopRequireDefault(require("AppData/Validation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var styles = function styles(theme) {
  return {
    FormControl: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      paddingLeft: 0,
      width: '100%'
    },
    FormControlOdd: {
      padding: theme.spacing(2),
      width: '100%'
    },
    button: {
      marginLeft: theme.spacing(1)
    },
    quotaHelp: {
      position: 'relative'
    },
    checkboxWrapper: {
      display: 'flex'
    },
    checkboxWrapperColumn: {
      display: 'flex',
      flexDirection: 'row'
    },
    group: {
      flexDirection: 'row'
    },
    removeHelperPadding: {
      '& p': {
        margin: '8px 0px'
      }
    }
  };
};
/**
 *
 *
 * @class KeyConfiguration
 * @extends {React.Component}
 */


var KeyConfiguration = function KeyConfiguration(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isValidityTimeError = _useState2[0],
      setValidityTimeError = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isCalbackUrlError = _useState4[0],
      setCallbackUrlError = _useState4[1];
  /**
   * Get the display names for the server supported grant types
   * @param serverSupportedGrantTypes
   * @param grantTypeDisplayNameMap
   */


  var getGrantTypeDisplayList = function getGrantTypeDisplayList(serverSupportedGrantTypes, grantTypeDisplayNameMap) {
    var modifiedserverSupportedGrantTypes = {};
    serverSupportedGrantTypes.forEach(function (grantType) {
      modifiedserverSupportedGrantTypes[grantType] = grantTypeDisplayNameMap[grantType];

      if (!grantTypeDisplayNameMap[grantType]) {
        modifiedserverSupportedGrantTypes[grantType] = grantType;
      }
    });
    return modifiedserverSupportedGrantTypes;
  };
  /**
   * This method is used to handle the updating of key generation
   * request object.
   * @param {*} field field that should be updated in key request
   * @param {*} event event fired
   */


  var handleChange = function handleChange(field, event) {
    var keyRequest = props.keyRequest,
        updateKeyRequest = props.updateKeyRequest,
        setGenerateEnabled = props.setGenerateEnabled;

    var newRequest = _objectSpread({}, keyRequest);

    var currentTarget = event.target;

    var newGrantTypes = _toConsumableArray(newRequest.supportedGrantTypes);

    switch (field) {
      case 'callbackUrl':
        if (_Validation["default"].url.validate(currentTarget.value).error) {
          setCallbackUrlError(true);
          setGenerateEnabled(false);
        } else {
          setCallbackUrlError(false);
          setGenerateEnabled(true);
        }

        newRequest.callbackUrl = currentTarget.value;
        break;

      case 'validityTime':
        if (_Validation["default"].number.validate(currentTarget.value).error) {
          setValidityTimeError(true);
          setGenerateEnabled(false);
        } else {
          setValidityTimeError(false);
          setGenerateEnabled(true);
        }

        newRequest.validityTime = currentTarget.value;
        break;

      case 'grantType':
        if (currentTarget.checked) {
          newGrantTypes = [].concat(_toConsumableArray(newGrantTypes), [currentTarget.id]);
        } else {
          newGrantTypes = newRequest.supportedGrantTypes.filter(function (item) {
            return item !== currentTarget.id;
          });
        }

        setGenerateEnabled(newGrantTypes.includes('client_credentials'));
        newRequest.supportedGrantTypes = newGrantTypes;
        break;

      default:
        break;
    }

    updateKeyRequest(newRequest);
  };
  /**
   * returns whether grant type checkbox should be disabled or not
   * @param grantType
   */


  var isGrantTypeDisabled = function isGrantTypeDisabled(grantType) {
    var keyRequest = props.keyRequest,
        isUserOwner = props.isUserOwner;
    var callbackUrl = keyRequest.callbackUrl;
    return !(isUserOwner && !(!callbackUrl && (grantType === 'authorization_code' || grantType === 'implicit')));
  };
  /**
   *
   *
   * @returns {Component}
   * @memberof KeyConfiguration
   */


  var classes = props.classes,
      keyRequest = props.keyRequest,
      notFound = props.notFound,
      intl = props.intl,
      isUserOwner = props.isUserOwner,
      isKeysAvailable = props.isKeysAvailable;
  var serverSupportedGrantTypes = keyRequest.serverSupportedGrantTypes,
      supportedGrantTypes = keyRequest.supportedGrantTypes,
      callbackUrl = keyRequest.callbackUrl,
      validityTime = keyRequest.validityTime;

  if (notFound) {
    return /*#__PURE__*/_react["default"].createElement(_ResourceNotFound["default"], null);
  }

  var grantTypeDisplayListMap = getGrantTypeDisplayList(serverSupportedGrantTypes, _Settings["default"].grantTypes);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
    className: classes.FormControl,
    component: "fieldset"
  }, /*#__PURE__*/_react["default"].createElement(_InputLabel["default"], {
    shrink: true,
    htmlFor: "age-label-placeholder",
    className: classes.quotaHelp
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "grant.types",
    defaultMessage: "Grant Types"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.checkboxWrapper
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.checkboxWrapperColumn
  }, Object.keys(grantTypeDisplayListMap).map(function (key) {
    var value = grantTypeDisplayListMap[key];
    return /*#__PURE__*/_react["default"].createElement(_FormControlLabel["default"], {
      control: /*#__PURE__*/_react["default"].createElement(_Checkbox["default"], {
        id: key,
        checked: !!(supportedGrantTypes && supportedGrantTypes.includes(key)) && !isGrantTypeDisabled(key),
        onChange: function onChange(e) {
          return handleChange('grantType', e);
        },
        value: value,
        disabled: isGrantTypeDisabled(key),
        color: "primary"
      }),
      label: value,
      key: key
    });
  }))), /*#__PURE__*/_react["default"].createElement(_FormHelperText["default"], null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    defaultMessage: "The application can use the following grant types to generate \n                            Access Tokens. Based on the application requirement,you can enable or disable \n                            grant types for this application.",
    id: "Shared.AppsAndKeys.KeyConfiguration.the.application.can"
  }))), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    display: "flex"
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 10,
    md: 5
  }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    classes: {
      root: classes.removeHelperPadding
    },
    fullWidth: true,
    id: "callbackURL",
    label: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      defaultMessage: "Callback URL",
      id: "Shared.AppsAndKeys.KeyConfiguration.callback.url.label"
    }),
    value: callbackUrl,
    name: "callbackURL",
    onChange: function onChange(e) {
      return handleChange('callbackUrl', e);
    },
    helperText: isCalbackUrlError ? /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      variant: "caption"
    }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      defaultMessage: "Invalid url. Please enter a valid url.",
      id: "Shared.AppsAndKeys.KeyConfCiguration.Invalid.callback.url.error.text"
    })) : /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      variant: "caption"
    }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      defaultMessage: "Callback URL is a redirection URI in the client\n                                    application which is used by the authorization server to send the\n                                    client's user-agent (usually web browser) back after granting access.",
      id: "Shared.AppsAndKeys.KeyConfCiguration.callback.url.helper.text"
    })),
    margin: "normal",
    variant: "outlined",
    disabled: !isUserOwner,
    error: isCalbackUrlError,
    placeholder: intl.formatMessage({
      defaultMessage: 'http://url-to-webapp',
      id: 'Shared.AppsAndKeys.KeyConfiguration.url.to.webapp'
    })
  })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 10,
    md: 5
  }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    ml: 2
  }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    classes: {
      root: classes.removeHelperPadding
    },
    fullWidth: true,
    id: "validityTime",
    label: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      defaultMessage: "Access token validity period",
      id: "Shared.AppsAndKeys.KeyConfiguration.access.token.validity.label"
    }),
    value: validityTime,
    name: "validityTime",
    onChange: function onChange(e) {
      return handleChange('validityTime', e);
    },
    helperText: isValidityTimeError ? /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      variant: "caption"
    }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      defaultMessage: "Please enter a valid number",
      id: "Shared.AppsAndKeys.KeyConfCiguration.access.token.validity.error.text"
    })) : /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      variant: "caption"
    }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      defaultMessage: "This is the validity period ( in seconds ) \n                                    of the access token generated ",
      id: "Shared.AppsAndKeys.KeyConfCiguration.access.token.validity.helper.text"
    })),
    margin: "normal",
    variant: "outlined",
    error: isValidityTimeError,
    disabled: !isUserOwner || isKeysAvailable
  })))));
};

KeyConfiguration.defaultProps = {
  notFound: false
};
KeyConfiguration.propTypes = {
  classes: _propTypes["default"].instanceOf(Object).isRequired,
  keyRequest: _propTypes["default"].shape({
    callbackUrl: _propTypes["default"].string,
    validityTime: _propTypes["default"].number,
    serverSupportedGrantTypes: _propTypes["default"].array,
    supportedGrantTypes: _propTypes["default"].array
  }).isRequired,
  isUserOwner: _propTypes["default"].bool.isRequired,
  isKeysAvailable: _propTypes["default"].bool.isRequired,
  notFound: _propTypes["default"].bool,
  setGenerateEnabled: _propTypes["default"].func.isRequired,
  updateKeyRequest: _propTypes["default"].func.isRequired,
  intl: _propTypes["default"].shape({
    formatMessage: _propTypes["default"].func
  }).isRequired
};

var _default = (0, _reactIntl.injectIntl)((0, _styles.withStyles)(styles)(KeyConfiguration));

exports["default"] = _default;