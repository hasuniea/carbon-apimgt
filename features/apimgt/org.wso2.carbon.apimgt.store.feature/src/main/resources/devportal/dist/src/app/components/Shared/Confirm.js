"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Dialog = _interopRequireWildcard(require("@material-ui/core/Dialog"));

var _reactIntl = require("react-intl");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var Confirm = /*#__PURE__*/function (_React$Component) {
  _inherits(Confirm, _React$Component);

  var _super = _createSuper(Confirm);

  function Confirm(props) {
    var _this;

    _classCallCheck(this, Confirm);

    _this = _super.call(this, props);

    _this.state({
      open: false
    });

    return _this;
  }

  _createClass(Confirm, [{
    key: "handleRequestClose",
    value: function handleRequestClose(action) {
      this.setState({
        open: false
      });
      action === 'ok' ? this.props.callback(true) : this.props.callback(false);
    }
  }, {
    key: "render",
    value: function render(props) {
      var _this2 = this;

      return /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
        open: this.state.open,
        onClose: this.handleRequestClose
      }, /*#__PURE__*/_react["default"].createElement(_Dialog.DialogTitle, null, props.title ? props.title : /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Shared.Confirm.please.confirm",
        defaultMessage: "Please Confirm"
      })), /*#__PURE__*/_react["default"].createElement(_Dialog.DialogContent, null, /*#__PURE__*/_react["default"].createElement(_Dialog.DialogContentText, null, props.message ? props.message : /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Shared.Confirm.are.you.sure",
        defaultMessage: "Are you sure?"
      }))), /*#__PURE__*/_react["default"].createElement(_Dialog.DialogActions, null, /*#__PURE__*/_react["default"].createElement(Button, {
        onClick: function onClick() {
          return _this2.handleRequestClose('cancel');
        },
        color: "primary"
      }, props.labelCancel ? props.labelCancel : /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Shared.Confirm.cancel.btn",
        defaultMessage: "Cancel"
      })), /*#__PURE__*/_react["default"].createElement(Button, {
        onClick: function onClick() {
          return _this2.handleRequestClose('ok');
        },
        color: "primary"
      }, props.labelOk ? props.labelOk : /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Shared.Confirm.ok.btn",
        defaultMessage: "OK"
      }))));
    }
  }]);

  return Confirm;
}(_react["default"].Component);

var _default = Confirm;
exports["default"] = _default;