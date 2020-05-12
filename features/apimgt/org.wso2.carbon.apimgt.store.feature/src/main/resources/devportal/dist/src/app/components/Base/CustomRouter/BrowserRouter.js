"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _history = require("history");

var _reactRouter = require("react-router");

var _lodash = _interopRequireDefault(require("lodash.isplainobject"));

var _SettingsContext = _interopRequireDefault(require("AppComponents/Shared/SettingsContext"));

var _Settings = _interopRequireDefault(require("Settings"));

var _queryString = _interopRequireDefault(require("query-string"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
 * This class wrapps the default router object of react router and adds custom history function
 * to track the history and uses that to add an interceptor which is called in every route.
 * @class BrowserRouter
 * @extends {React.Component}
 */
var BrowserRouter = /*#__PURE__*/function (_React$Component) {
  _inherits(BrowserRouter, _React$Component);

  var _super = _createSuper(BrowserRouter);

  /**
   * Creates an instance of BrowserRouter.
   * @param {*} props properties
   * @memberof BrowserRouter
   */
  function BrowserRouter(props) {
    var _this;

    _classCallCheck(this, BrowserRouter);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "pathInterceptor", function (originalPath) {
      var customUrlEnabledDomain = _Settings["default"].app.customUrl.tenantDomain;

      if (customUrlEnabledDomain !== 'null') {
        return originalPath;
      }

      var tenantDomain = _this.context.tenantDomain;
      var path = '';
      var queryStringsRaw = '';

      if ((0, _lodash["default"])(originalPath)) {
        path = originalPath.pathname;
        queryStringsRaw = originalPath.search;
      } else {
        var _originalPath$split = originalPath.split('?');

        var _originalPath$split2 = _slicedToArray(_originalPath$split, 2);

        path = _originalPath$split2[0];
        queryStringsRaw = _originalPath$split2[1];
      }

      var queryObject = _queryString["default"].parse(queryStringsRaw);

      if (!queryObject.tenant && tenantDomain) {
        queryObject.tenant = tenantDomain;
      }

      return "".concat(path, "?").concat(_queryString["default"].stringify(queryObject));
    });

    _this.historyEnhancer = function (originalHistory) {
      return _objectSpread(_objectSpread({}, originalHistory), {}, {
        push: function push(path) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          return originalHistory.push.apply(originalHistory, [_this.pathInterceptor(path)].concat(args));
        },
        replace: function replace(path) {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          return originalHistory.replace.apply(originalHistory, [_this.pathInterceptor(path)].concat(args));
        }
      });
    };

    _this.history = _this.historyEnhancer((0, _history.createBrowserHistory)(_this.props));
    return _this;
  }
  /**
   * Interceptor that is called in every route call. This will get the tenant
   * domain from the context and append it to the query param list
   * @param {*} originalPath request path or object with path details
   * @memberof BrowserRouter
   * @returns {String}
   */


  _createClass(BrowserRouter, [{
    key: "render",

    /**
     * @inheritdoc
     * @memberof BrowserRouter
     * @returns {Component}
     */
    value: function render() {
      var children = this.props.children;
      return /*#__PURE__*/_react["default"].createElement(_reactRouter.Router, {
        history: this.history
      }, children);
    }
  }]);

  return BrowserRouter;
}(_react["default"].Component);

_defineProperty(BrowserRouter, "contextType", _SettingsContext["default"]);

BrowserRouter.propTypes = {
  children: _propTypes["default"].node.isRequired
};
var _default = BrowserRouter;
exports["default"] = _default;