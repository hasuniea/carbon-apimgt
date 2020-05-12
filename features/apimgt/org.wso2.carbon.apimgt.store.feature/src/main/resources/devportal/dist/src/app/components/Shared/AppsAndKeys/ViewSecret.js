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

var _reactIntl = require("react-intl");

var _InlineMessage = _interopRequireDefault(require("../InlineMessage"));

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
      }
    },
    bootstrapInput: {
      borderRadius: 4,
      backgroundColor: theme.palette.common.white,
      border: '1px solid #ced4da',
      padding: '5px 12px',
      width: 350,
      height: 100,
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
    prodLabel: {
      lineHeight: '30px',
      marginRight: 10,
      width: 100,
      'text-align-last': 'center'
    },
    contentWrapper: {
      maxWidth: theme.custom.contentAreaWidth - theme.custom.leftMenu.width
    },
    root: {
      marginBottom: 20
    }
  };
};
/**
 *
 *
 * @class ViewSecret
 * @extends {React.Component}
 */


var ViewSecret = /*#__PURE__*/function (_React$Component) {
  _inherits(ViewSecret, _React$Component);

  var _super = _createSuper(ViewSecret);

  function ViewSecret() {
    var _this;

    _classCallCheck(this, ViewSecret);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      secretCopied: false
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

  _createClass(ViewSecret, [{
    key: "getTokeScopesString",

    /**
     * Generate a comma separate string of token scopes
     *
     * @param {string} tokenScopes token scopes
     * @returns {String} scopeString comma separated string of token scopes
     * @memberof ViewSecret
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
     * @memberof ViewSecret
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          secret = _this$props.secret;
      var secretCopied = this.state.secretCopied;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.root
      }, /*#__PURE__*/_react["default"].createElement(_InlineMessage["default"], {
        type: "warn"
      }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "h5",
        component: "h3"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Shared.AppsAndKeys.ViewSecret.please.copy.secret",
        defaultMessage: "Please Copy the Consumer Secret"
      })), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        component: "p"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Shared.AppsAndKeys.ViewSecret.please.copy.secret.help",
        defaultMessage: "Please make a note of the regenerated consumer \n                            secret value as it will be displayed only once."
      }))), /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.epWrapper
      }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        className: classes.prodLabel
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Shared.AppsAndKeys.ViewSecret.consumer.secret",
        defaultMessage: "Consumer Secret"
      })), /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
        defaultValue: secret.consumerSecret,
        id: "bootstrap-input",
        multiline: true,
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
        title: secretCopied ? 'Copied' : 'Copy to clipboard',
        placement: "right"
      }, /*#__PURE__*/_react["default"].createElement(_reactCopyToClipboard["default"], {
        text: secret.consumerSecret,
        onCopy: this.onCopy('secretCopied')
      }, /*#__PURE__*/_react["default"].createElement(_FileCopy["default"], {
        color: "secondary"
      }, "file_copy")))));
    }
  }]);

  return ViewSecret;
}(_react["default"].Component);

ViewSecret.propTypes = {
  classes: _propTypes["default"].shape({}).isRequired,
  secret: _propTypes["default"].shape({
    consumerSecret: _propTypes["default"].string.isRequired
  }).isRequired
};

var _default = (0, _styles.withStyles)(styles)(ViewSecret);

exports["default"] = _default;