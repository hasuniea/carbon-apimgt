"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doRedirectToLogin = doRedirectToLogin;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Settings = _interopRequireDefault(require("Settings"));

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

var page = _Settings["default"].app.context + '/services/configs';
/**
 *
 * Just doing the redirection, If you want to trigger redirection to login page , import this util method and use.
 * Note: Don't use this method inside a render method. It will cause to cancel the initial request in Chrome
 * and re-trigger same request
 * Sample usage:
 * import { doRedirectToLogin } from 'AppComponents/Applications/Login/RedirectToLogin'
 *
 * componentDidMount() {
 *      doRedirectToLogin();
 * }
 * @export
 */

function doRedirectToLogin() {
  window.location = page;
}
/**
 * This component is created to unify the login process from react UI.
 * If we need to change the login process in the future, Changing here will reflect
 * all the login redirection done in other places of the code
 * @class RedirectToLogin
 */


var RedirectToLogin = /*#__PURE__*/function (_React$Component) {
  _inherits(RedirectToLogin, _React$Component);

  var _super = _createSuper(RedirectToLogin);

  function RedirectToLogin() {
    _classCallCheck(this, RedirectToLogin);

    return _super.apply(this, arguments);
  }

  _createClass(RedirectToLogin, [{
    key: "componentDidMount",

    /**
     *
     * @inheritdoc
     * @memberof RedirectToLogin
     */
    value: function componentDidMount() {
      doRedirectToLogin();
    }
    /**
     *
     * @inheritdoc
     * @returns {React.Component}
     * @memberof RedirectToLogin
     */

  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Login.RedirectToLogin.you.will.be.redirected.to",
        defaultMessage: "You will be redirected to {page}",
        values: {
          page: page
        }
      });
    }
  }]);

  return RedirectToLogin;
}(_react["default"].Component);

var _default = RedirectToLogin;
exports["default"] = _default;