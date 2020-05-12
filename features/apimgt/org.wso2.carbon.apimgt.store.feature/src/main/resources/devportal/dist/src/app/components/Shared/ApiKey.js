"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _Validation = _interopRequireDefault(require("AppData/Validation"));

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

// Styles for Grid and Paper elements
var styles = function styles(theme) {
  return {
    FormControl: {
      'margin-bottom': '8px',
      width: '100%',
      padding: '0px 10px'
    }
  };
};
/**
 * Used to display generate api key in UI
 */


var tokens = function tokens(props) {
  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      infiniteValidity = _useState2[0],
      setInfiniteValidity = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      invalidTimeout = _useState4[0],
      setInvaildTimeout = _useState4[1];
  /**
  * This method is used to handle the updating of create api key
  * request object.
  * @param {*} field
  * @param {*} event event fired
  */


  var handleChange = function handleChange(field, event) {
    var accessTokenRequest = props.accessTokenRequest,
        updateAccessTokenRequest = props.updateAccessTokenRequest;

    var newRequest = _objectSpread({}, accessTokenRequest);

    var currentTarget = event.target;

    switch (field) {
      case 'infiniteValidity':
        setInfiniteValidity(currentTarget.checked);

        if (currentTarget.checked) {
          newRequest.timeout = -1;
        } else {
          newRequest.timeout = null;
        }

        break;

      case 'timeout':
        if (_Validation["default"].number.validate(currentTarget.value).error === undefined) {
          newRequest.timeout = currentTarget.value;
          setInvaildTimeout(false);
        } else {
          newRequest.timeout = null;
          setInvaildTimeout(true);
        }

        break;

      default:
        break;
    }

    updateAccessTokenRequest(newRequest);
  };

  var classes = props.classes,
      intl = props.intl,
      accessTokenRequest = props.accessTokenRequest;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
    margin: "normal",
    className: classes.FormControl
  }, /*#__PURE__*/_react["default"].createElement(_FormControlLabel["default"], {
    control: /*#__PURE__*/_react["default"].createElement(_Checkbox["default"], {
      checked: infiniteValidity,
      onChange: function onChange(e) {
        return handleChange('infiniteValidity', e);
      },
      value: accessTokenRequest.timeout,
      color: "primary"
    }),
    label: "API Key with infinite validity period"
  }), !infiniteValidity && /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    required: true,
    label: intl.formatMessage({
      defaultMessage: 'API Key validity period',
      id: 'Shared.AppsAndKeys.Tokens.apikey'
    }),
    InputLabelProps: {
      shrink: true
    },
    helperText: invalidTimeout ? intl.formatMessage({
      defaultMessage: 'Please use a valid number for API Key expiry time',
      id: 'Shared.AppsAndKeys.Tokens.apikey.set.validity.error'
    }) : intl.formatMessage({
      defaultMessage: 'You can set an expiration period to determine the validity period of ' + 'the token after generation. Set this as -1 to ensure that the ' + 'apikey never expires.',
      id: 'Shared.AppsAndKeys.Tokens.apikey.set.validity.help'
    }),
    fullWidth: true,
    name: "timeout",
    onChange: function onChange(e) {
      return handleChange('timeout', e);
    },
    placeholder: intl.formatMessage({
      defaultMessage: 'Enter time in seconds',
      id: 'Shared.AppsAndKeys.Tokens.apikey.enter.time'
    }),
    value: accessTokenRequest.timeout,
    autoFocus: true,
    className: classes.inputText,
    error: invalidTimeout
  })));
};

tokens.contextTypes = {
  intl: _propTypes["default"].shape({}).isRequired
};

var _default = (0, _reactIntl.injectIntl)((0, _styles.withStyles)(styles)(tokens));

exports["default"] = _default;