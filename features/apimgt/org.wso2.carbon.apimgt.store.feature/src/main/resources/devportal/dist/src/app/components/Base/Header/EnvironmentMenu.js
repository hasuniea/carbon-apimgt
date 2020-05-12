"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Menu = _interopRequireDefault(require("@material-ui/core/Menu"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

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

/**
 * Renders the Enviorment menu to select ( dev, prod, aq etc..)
 *
 * @class EnvironmentMenu
 * @extends {React.Component}
 */
var EnvironmentMenu = /*#__PURE__*/function (_React$Component) {
  _inherits(EnvironmentMenu, _React$Component);

  var _super = _createSuper(EnvironmentMenu);

  function EnvironmentMenu(props) {
    var _this;

    _classCallCheck(this, EnvironmentMenu);

    _this = _super.call(this, props);
    _this.state = {
      openEnvironmentMenu: false
    };
    _this.handleClickEnvironmentMenu = _this.handleClickEnvironmentMenu.bind(_assertThisInitialized(_this));
    _this.handleRequestCloseEnvironmentMenu = _this.handleRequestCloseEnvironmentMenu.bind(_assertThisInitialized(_this));
    _this.handleEnvironmentChange = _this.handleEnvironmentChange.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   *
   *
   * @param {*} event
   * @memberof EnvironmentMenu
   */


  _createClass(EnvironmentMenu, [{
    key: "handleClickEnvironmentMenu",
    value: function handleClickEnvironmentMenu(event) {
      this.setState({
        openEnvironmentMenu: true,
        anchorElEnvironmentMenu: event.currentTarget
      });
    }
    /**
     *
     *
     * @memberof EnvironmentMenu
     */

  }, {
    key: "handleRequestCloseEnvironmentMenu",
    value: function handleRequestCloseEnvironmentMenu() {
      this.setState({
        openEnvironmentMenu: false
      }); // TODO: [rnk] Temporary Fix: Reload the web page when environment changed

      document.location.reload();
    }
    /**
     *
     *
     * @param {*} event
     * @memberof EnvironmentMenu
     */

  }, {
    key: "handleEnvironmentChange",
    value: function handleEnvironmentChange(event) {
      this.props.handleEnvironmentChange(event);
      this.handleRequestCloseEnvironmentMenu(event);
    }
    /**
     * Renders the UI
     *
     * @returns {JSX}
     * @memberof EnvironmentMenu
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      // Props list
      var _this$props = this.props,
          environments = _this$props.environments,
          environmentLabel = _this$props.environmentLabel;
      var _this$state = this.state,
          anchorElEnvironmentMenu = _this$state.anchorElEnvironmentMenu,
          openEnvironmentMenu = _this$state.openEnvironmentMenu;
      var showEnvironments = environments && environments.length > 1;

      if (!showEnvironments) {
        return /*#__PURE__*/_react["default"].createElement("div", null);
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          display: 'flex'
        }
      }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        "aria-owns": "simple-menu",
        "aria-haspopup": "true",
        onClick: this.handleClickEnvironmentMenu,
        color: "default"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Base.Header.EnvironmentMenu.environment.label",
        defaultMessage: "{environmentLabel}",
        values: {
          environmentLabel: environmentLabel
        }
      })), /*#__PURE__*/_react["default"].createElement(_Menu["default"], {
        id: "simple-menu",
        anchorEl: anchorElEnvironmentMenu,
        open: openEnvironmentMenu,
        onRequestClose: this.handleRequestCloseEnvironmentMenu,
        style: {
          alignItems: 'center',
          justifyContent: 'center'
        }
      }, environments.map(function (environment, index) {
        return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
          onClick: _this2.handleEnvironmentChange,
          key: index,
          id: index
        }, environment.label);
      })));
    }
  }]);

  return EnvironmentMenu;
}(_react["default"].Component);

var _default = EnvironmentMenu;
exports["default"] = _default;