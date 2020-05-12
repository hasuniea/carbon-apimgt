"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Message;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _CheckCircle = _interopRequireDefault(require("@material-ui/icons/CheckCircle"));

var _Error = _interopRequireDefault(require("@material-ui/icons/Error"));

var _Info = _interopRequireDefault(require("@material-ui/icons/Info"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _colors = require("@material-ui/core/colors");

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Snackbar = _interopRequireDefault(require("@material-ui/core/Snackbar"));

var _SnackbarContent = _interopRequireDefault(require("@material-ui/core/SnackbarContent"));

var _Warning = _interopRequireDefault(require("@material-ui/icons/Warning"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var variantIcon = {
  success: _CheckCircle["default"],
  warning: _Warning["default"],
  error: _Error["default"],
  info: _Info["default"]
};
var useStyles1 = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      position: 'relative'
      /* Overriding the default Snackbar root properties to stack messages */
      ,
      padding: '5px'
      /* To add some space between messages when stacking messages */

    },
    success: {
      backgroundColor: _colors.green[600]
    },
    error: {
      backgroundColor: theme.palette.error.dark
    },
    info: {
      backgroundColor: theme.palette.primary.main
    },
    warning: {
      backgroundColor: _colors.amber[700]
    },
    icon: {
      fontSize: 20
    },
    iconVariant: {
      opacity: 0.9,
      marginRight: theme.spacing(1)
    },
    message: {
      display: 'flex',
      alignItems: 'center'
    }
  };
});

function MySnackbarContentWrapper(props) {
  var classes = useStyles1();

  var className = props.className,
      message = props.message,
      onClose = props.onClose,
      variant = props.variant,
      other = _objectWithoutProperties(props, ["className", "message", "onClose", "variant"]);

  var Icon = variantIcon[variant];
  return /*#__PURE__*/_react["default"].createElement(_SnackbarContent["default"], _extends({
    className: (0, _clsx["default"])(classes[variant], className),
    "aria-describedby": "client-snackbar",
    message: /*#__PURE__*/_react["default"].createElement("span", {
      id: "client-snackbar",
      className: classes.message
    }, /*#__PURE__*/_react["default"].createElement(Icon, {
      className: (0, _clsx["default"])(classes.icon, classes.iconVariant)
    }), message),
    action: [/*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
      key: "close",
      "aria-label": "close",
      color: "inherit",
      onClick: onClose
    }, /*#__PURE__*/_react["default"].createElement(_Close["default"], {
      className: classes.icon
    }))]
  }, other));
}

MySnackbarContentWrapper.propTypes = {
  className: _propTypes["default"].string.isRequired,
  message: _propTypes["default"].string.isRequired,
  onClose: _propTypes["default"].func.isRequired,
  variant: _propTypes["default"].oneOf(['error', 'info', 'success', 'warning']).isRequired
};

function Message(props) {
  var classes = useStyles1();
  var message = props.message,
      handleClose = props.handleClose,
      type = props.type;
  return /*#__PURE__*/_react["default"].createElement(_Snackbar["default"], {
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    open: true,
    classes: {
      root: classes.root
    },
    onClose: handleClose
  }, /*#__PURE__*/_react["default"].createElement(MySnackbarContentWrapper, {
    onClose: handleClose,
    variant: type,
    message: message
  }));
}

Message.propTypes = {
  message: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]).isRequired,
  handleClose: _propTypes["default"].func.isRequired,
  type: _propTypes["default"].string.isRequired
};