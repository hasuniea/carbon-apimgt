"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Settings = _interopRequireDefault(require("Settings"));

var _reactIntl = require("react-intl");

var _Constants = _interopRequireDefault(require("./data/Constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var messageStyles = {
  width: 400,
  position: 'absolute',
  left: '50%',
  marginLeft: -200,
  textAlign: 'center',
  padding: 10,
  paddingLeft: 100,
  paddingRight: 100,
  border: 'solid 1px #ddd',
  borderRadius: 20,
  background: '#efefef',
  top: '20%',
  boxShadow: '#efefef',
  fontWeight: 200,
  fontSize: 15,
  color: '#444',
  fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif'
};
var headerStyle = {
  fontWeight: 400,
  fontSize: 20
};
var buttonStyleRetry = {
  padding: '5px 15px',
  margin: 10,
  borderRadius: 5,
  textTransform: 'uppercase',
  color: '#15b8cf',
  border: 'solid 1px #15b8cf',
  background: '#efefef'
};
var buttonStyleLogout = {
  padding: '5px 15px',
  margin: 10,
  borderRadius: 5,
  textTransform: 'uppercase',
  color: '#000',
  background: '#15b8cf'
};

function onLogout() {
  window.location = _Settings["default"].app.context + '/services/logout';
}

function onGoToAnonymousView() {
  if (_Settings["default"].app.isPassive) {
    sessionStorage.setItem(_Constants["default"].ISLOGINPERMITTED, 'true');
  }

  window.location = _Settings["default"].app.context + '/services/auth/callback/logout';
}

var LoginDenied = /*#__PURE__*/function (_Component) {
  _inherits(LoginDenied, _Component);

  var _super = _createSuper(LoginDenied);

  function LoginDenied() {
    _classCallCheck(this, LoginDenied);

    return _super.apply(this, arguments);
  }

  _createClass(LoginDenied, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      document.body.style.backgroundColor = '#dfdfdf';
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.body.style.backgroundColor = null;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: messageStyles
      }, /*#__PURE__*/_react["default"].createElement("h5", {
        style: headerStyle
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "LoginDenied.title",
        defaultMessage: "Error 403 : Forbidden"
      })), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "LoginDenied.message",
        defaultMessage: 'You don\'t have sufficient privileges to access the Developer Portal.'
      })), /*#__PURE__*/_react["default"].createElement("div", null, this.props.IsAnonymousModeEnabled ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("button", {
        onClick: onGoToAnonymousView,
        style: buttonStyleRetry
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "LoginDenied.anonymousview",
        defaultMessage: "Go To Public Portal"
      })), /*#__PURE__*/_react["default"].createElement("button", {
        onClick: onLogout,
        style: buttonStyleLogout
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "LoginDenied.logout",
        defaultMessage: "Logout"
      }))) : /*#__PURE__*/_react["default"].createElement("button", {
        onClick: onLogout,
        style: buttonStyleLogout
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "LoginDenied.logout",
        defaultMessage: "Logout"
      }))));
    }
  }]);

  return LoginDenied;
}(_react.Component);

var _default = LoginDenied;
exports["default"] = _default;