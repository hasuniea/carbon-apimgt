"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = NoApi;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _reactIntl = require("react-intl");

var _Settings = require("Settings");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      flexGrow: 1
    },
    messageWrapper: {
      marginTop: theme.spacing(4),
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary
    }
  };
});

function NoApi() {
  var classes = useStyles();
  var theme = (0, _styles.useTheme)();
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 3
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12,
    className: classes.messageWrapper
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: _Settings.app.context + theme.custom.noApiImage,
    className: classes.messageWrapper
  }), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h5",
    gutterBottom: true
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Apis.Listing.NoApi.nodata.title",
    defaultMessage: "No APIs Available"
  })), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "subtitle1",
    gutterBottom: true
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Apis.Listing.NoApi.nodata.content",
    defaultMessage: "There are no APIs to display right now."
  })))));
}