"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _reactCopyToClipboard = _interopRequireDefault(require("react-copy-to-clipboard"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _FileCopy = _interopRequireDefault(require("@material-ui/icons/FileCopy"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _FormHelperText = _interopRequireDefault(require("@material-ui/core/FormHelperText"));

var _reactIntl = require("react-intl");

var _InlineMessage = _interopRequireDefault(require("../InlineMessage"));

var _ViewSecret = _interopRequireDefault(require("./ViewSecret"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 *
 *
 * @param {*} theme
 */
var styles = function styles(theme) {
  return {
    bootstrapRoot: {
      padding: 0,
      'label + &': {
        marginTop: theme.spacing(3)
      },
      flex: 1,
      marginRight: theme.spacing(1)
    },
    bootstrapInput: {
      borderRadius: 4,
      backgroundColor: theme.custom.apiDetailPages.tokenTextBoxBackground,
      color: theme.palette.getContrastText(theme.custom.apiDetailPages.tokenTextBoxBackground),
      border: '1px solid #ced4da',
      padding: '5px 12px',
      height: 100,
      width: '100%',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      fontFamily: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'].join(','),
      '&:focus': {
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
      }
    },
    epWrapper: {
      display: 'flex',
      marginTop: 20
    },
    secretWrapper: {
      display: 'flex',
      marginBottom: 20
    },
    prodLabel: {
      lineHeight: '30px',
      marginRight: 10,
      width: 100,
      'text-align-last': 'center',
      whiteSpace: 'nowrap'
    },
    contentWrapper: {
      maxWidth: theme.custom.contentAreaWidth - theme.custom.leftMenu.width
    },
    root: {
      marginTop: 20,
      '& span, & h5, & label, & td, & li, & div, & input': {
        color: theme.palette.getContrastText(theme.palette.background.paper)
      }
    }
  };
};
/**
 *
 *
 * @class ViewToken
 * @extends {React.Component}
 */


var ViewToken = /*#__PURE__*/function (_React$Component) {
  _inherits(ViewToken, _React$Component);

  var _super = _createSuper(ViewToken);

  function ViewToken() {
    var _this;

    _classCallCheck(this, ViewToken);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      tokenCopied: false
    });

    _defineProperty(_assertThisInitialized(_this), "onCopy", function (name) {
      return function () {
        _this.setState(_defineProperty({}, name, true));

        var that = _assertThisInitialized(_this);

        var elementName = name;

        var caller = function caller() {
          that.setState(_defineProperty({}, elementName, false));
        };

        setTimeout(caller, 4000);
      };
    });

    return _this;
  }

  _createClass(ViewToken, [{
    key: "getTokeScopesString",

    /**
     * Generate a comma separate string of token scopes
     * @param {string} tokenScopes token scopes
     * @returns {String} scopeString comma separated string of token scopes
     * @memberof ViewToken
     */
    value: function getTokeScopesString(tokenScopes) {
      if (tokenScopes) {
        return tokenScopes.join(', ');
      }

      return '';
    }
    /**
     *
     *
     * @returns
     * @memberof ViewToken
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          token = _this$props.token,
          consumerSecret = _this$props.consumerSecret;
      var tokenCopied = this.state.tokenCopied;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.root
      }, consumerSecret && /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.secretWrapper
      }, /*#__PURE__*/_react["default"].createElement(_ViewSecret["default"], {
        secret: {
          consumerSecret: consumerSecret
        }
      })), /*#__PURE__*/_react["default"].createElement(_InlineMessage["default"], {
        type: "warn"
      }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "h5",
        component: "h3"
      }, token.isOauth && /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Shared.AppsAndKeys.ViewToken.please.copy",
        defaultMessage: "Please Copy the Access Token"
      }), !token.isOauth && /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Shared.AppsAndKeys.ViewToken.please.copy.apikey",
        defaultMessage: "Please Copy the API Key"
      })), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        component: "p"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Shared.AppsAndKeys.ViewToken.please.copy.help",
        defaultMessage: 'Please copy this generated token value as it will be displayed only for' + ' the current browser session. ' + '( The token will not be visible in the UI after the page is refreshed. )'
      }))), /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.epWrapper
      }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        className: classes.prodLabel
      }, token.isOauth && /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Shared.AppsAndKeys.ViewToken.access.token",
        defaultMessage: "Access Token"
      }), !token.isOauth && /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Shared.AppsAndKeys.ViewToken.apikey",
        defaultMessage: "API Key"
      })), /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
        defaultValue: token.accessToken,
        id: "bootstrap-input",
        multiline: true,
        fullWidth: true,
        rows: 4,
        InputProps: {
          disableUnderline: true,
          classes: {
            root: classes.bootstrapRoot,
            input: classes.bootstrapInput
          }
        },
        InputLabelProps: {
          shrink: true,
          className: classes.bootstrapFormLabel
        }
      }), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
        title: tokenCopied ? 'Copied' : 'Copy to clipboard',
        placement: "right"
      }, /*#__PURE__*/_react["default"].createElement(_reactCopyToClipboard["default"], {
        text: token.accessToken,
        onCopy: this.onCopy('tokenCopied')
      }, /*#__PURE__*/_react["default"].createElement(_FileCopy["default"], {
        color: "secondary"
      }, "file_copy")))), /*#__PURE__*/_react["default"].createElement(_FormHelperText["default"], null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Shared.AppsAndKeys.ViewToken.info.first",
        defaultMessage: "Above token has a validity period of "
      }), token.validityTime, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Shared.AppsAndKeys.ViewToken.info.second",
        defaultMessage: " seconds"
      }), token.isOauth && /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Shared.AppsAndKeys.ViewToken.info.third",
        defaultMessage: " and the token has ("
      }), this.getTokeScopesString(token.tokenScopes), token.isOauth && /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Shared.AppsAndKeys.ViewToken.info.fourth",
        defaultMessage: ") scopes"
      }), "."));
    }
  }]);

  return ViewToken;
}(_react["default"].Component);

ViewToken.defaultProps = {
  consumerSecret: null
};
ViewToken.propTypes = {
  classes: _propTypes["default"].shape({}).isRequired,
  token: _propTypes["default"].shape({
    accessToken: _propTypes["default"].string.isRequired,
    validityTime: _propTypes["default"].number.isRequired,
    tokenScopes: _propTypes["default"].array.isRequired
  }).isRequired,
  consumerSecret: _propTypes["default"].string
};

var _default = (0, _styles.withStyles)(styles)(ViewToken);

exports["default"] = _default;