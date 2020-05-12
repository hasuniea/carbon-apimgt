"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactIntl = require("react-intl");

var _styles = require("@material-ui/core/styles");

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

var styles = function styles(theme) {
  return {
    dialogWrapper: {
      '& span, & h5, & label, & td, & li, & div, & p': {
        color: theme.palette.getContrastText(theme.palette.background.paper)
      }
    }
  };
};
/**
 * React component for handling confirmation dialog box
 * @class ConfirmDialog
 * @extends {React.Component}
 */


var ConfirmDialog = /*#__PURE__*/function (_React$Component) {
  _inherits(ConfirmDialog, _React$Component);

  var _super = _createSuper(ConfirmDialog);

  function ConfirmDialog() {
    _classCallCheck(this, ConfirmDialog);

    return _super.apply(this, arguments);
  }

  _createClass(ConfirmDialog, [{
    key: "handleRequestClose",

    /**
     * If user confirms the action invoke the callback with true else false
     * @param {String} action One of ConfirmDialog.Action actions
     * @memberof ConfirmDialog
     */
    value: function handleRequestClose(action) {
      var callback = this.props.callback;

      if (action === ConfirmDialog.Action.OK) {
        callback(true);
      } else {
        callback(false);
      }
    }
    /**
     * @inheritDoc
     * @returns {React.Component} Confirmation box
     * @memberof ConfirmDialog
     */

  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          title = _this$props.title,
          message = _this$props.message,
          labelCancel = _this$props.labelCancel,
          labelOk = _this$props.labelOk,
          open = _this$props.open,
          classes = _this$props.classes;
      return /*#__PURE__*/_react["default"].createElement(_core.Dialog, {
        open: open,
        onClose: this.handleRequestClose,
        className: classes.dialogWrapper
      }, /*#__PURE__*/_react["default"].createElement(_core.DialogTitle, null, title || /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Shared.ConfirmDialog.please.confirm",
        defaultMessage: "Please Confirm"
      })), /*#__PURE__*/_react["default"].createElement(_core.DialogContent, null, /*#__PURE__*/_react["default"].createElement(_core.DialogContentText, null, message || /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Shared.ConfirmDialog.please.confirm.sure",
        defaultMessage: "Are you sure?"
      }))), /*#__PURE__*/_react["default"].createElement(_core.DialogActions, null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        onClick: function onClick() {
          return _this.handleRequestClose(ConfirmDialog.Action.CANCEL);
        },
        color: "primary"
      }, labelCancel || /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Shared.ConfirmDialog.cancel",
        defaultMessage: "Cancel"
      })), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        onClick: function onClick() {
          return _this.handleRequestClose(ConfirmDialog.Action.OK);
        },
        color: "primary",
        variant: "contained"
      }, labelOk || /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Shared.ConfirmDialog.ok",
        defaultMessage: "OK"
      }))));
    }
  }]);

  return ConfirmDialog;
}(_react["default"].Component);

ConfirmDialog.propTypes = {
  title: _propTypes["default"].string.isRequired,
  message: _propTypes["default"].string.isRequired,
  labelCancel: _propTypes["default"].string.isRequired,
  labelOk: _propTypes["default"].string.isRequired,
  callback: _propTypes["default"].func.isRequired,
  open: _propTypes["default"].bool.isRequired
};
ConfirmDialog.Action = {
  OK: 'ok',
  CANCEL: 'cancel'
};

var _default = (0, _styles.withStyles)(styles)(ConfirmDialog);

exports["default"] = _default;