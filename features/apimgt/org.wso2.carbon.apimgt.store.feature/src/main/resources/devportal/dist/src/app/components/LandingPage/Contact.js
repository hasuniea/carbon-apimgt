"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _CardActions = _interopRequireDefault(require("@material-ui/core/CardActions"));

var _CardContent = _interopRequireDefault(require("@material-ui/core/CardContent"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _reactIntl = require("react-intl");

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

var styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

var Contact = /*#__PURE__*/function (_React$Component) {
  _inherits(Contact, _React$Component);

  var _super = _createSuper(Contact);

  function Contact(props) {
    var _this;

    _classCallCheck(this, Contact);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (name) {
      return function (event) {
        _this.setState(_defineProperty({}, name, event.target.value));
      };
    });

    return _this;
  }

  _createClass(Contact, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          intl = _this$props.intl;
      return /*#__PURE__*/_react["default"].createElement(_Card["default"], {
        className: classes.card
      }, /*#__PURE__*/_react["default"].createElement(_CardContent["default"], null, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
        id: "standard-full-width",
        label: intl.formatMessage({
          defaultMessage: 'Name',
          id: 'LandingPage.Contact.name'
        }),
        style: {
          margin: 8
        },
        placeholder: intl.formatMessage({
          defaultMessage: 'Enter your name',
          id: 'LandingPage.Contact.name.placeholder'
        }),
        helperText: intl.formatMessage({
          defaultMessage: 'Let us know who you are.',
          id: 'LandingPage.Contact.name.helperText'
        }),
        fullWidth: true,
        margin: "normal",
        InputLabelProps: {
          shrink: true
        }
      }), /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
        id: "standard-full-width",
        label: intl.formatMessage({
          defaultMessage: 'Email',
          id: 'LandingPage.Contact.email'
        }),
        style: {
          margin: 8
        },
        placeholder: intl.formatMessage({
          defaultMessage: 'Enter your email',
          id: 'LandingPage.Contact.email.placeholder'
        }),
        helperText: intl.formatMessage({
          defaultMessage: 'Let us know your email address.',
          id: 'LandingPage.Contact.email.helperText'
        }),
        fullWidth: true,
        margin: "normal",
        InputLabelProps: {
          shrink: true
        }
      }), /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
        id: "standard-full-width",
        label: intl.formatMessage({
          defaultMessage: 'Message',
          id: 'LandingPage.Contact.message'
        }),
        style: {
          margin: 8
        },
        placeholder: intl.formatMessage({
          defaultMessage: 'Briefly write your message.',
          id: 'LandingPage.Contact.message.placeholder'
        }),
        helperText: intl.formatMessage({
          defaultMessage: 'Let us know what you think',
          id: 'LandingPage.Contact.message.helperText'
        }),
        fullWidth: true,
        multiline: true,
        margin: "normal",
        InputLabelProps: {
          shrink: true
        }
      })), /*#__PURE__*/_react["default"].createElement(_CardActions["default"], null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        variant: "contained",
        color: "primary"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "LandingPage.Contact.submit",
        defaultMessage: "Submit"
      }))));
    }
  }]);

  return Contact;
}(_react["default"].Component);

Contact.propTypes = {
  classes: _propTypes["default"].object.isRequired,
  intl: _propTypes["default"].shape({
    formatMessage: _propTypes["default"].func
  }).isRequired
};

var _default = (0, _reactIntl.injectIntl)((0, _styles.withStyles)(styles)(Contact));

exports["default"] = _default;