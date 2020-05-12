"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TokenManagerSummary;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _reactIntl = require("react-intl");

var _Settings = require("Settings");

var _WaitingForApproval = _interopRequireDefault(require("./WaitingForApproval"));

var _ViewKeys = _interopRequireDefault(require("./ViewKeys"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable react/prop-types */
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      padding: theme.spacing(3, 2)
    },
    noKeysRoot: {
      backgroundImage: "url(".concat(_Settings.app.context + theme.custom.overviewPage.keysBackground, ")"),
      height: '100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      minHeight: 192,
      display: 'flex',
      alignItems: 'center'
    }
  };
});
/**
 * Render a compressed view of the key gneration view.
 * @param {JSON} props Input params.
 * @returns {JSX} Rendered output.
 */

function TokenManagerSummary(props) {
  var classes = useStyles();
  var keys = props.keys,
      keyStates = props.keyStates,
      key = props.key,
      selectedApp = props.selectedApp,
      keyType = props.keyType,
      isKeyJWT = props.isKeyJWT,
      isUserOwner = props.isUserOwner;

  if (keys.size > 0 && key && key.keyState === 'APPROVED' && !key.consumerKey) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: classes.emptyBox
    }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      variant: "h5",
      component: "h3"
    }, "Error"), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      variant: "body2"
    }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      id: "Shared.AppsAndKeys.TokenManagerSummary",
      defaultMessage: "Error! You have partially-created keys. Use `Clean Up` option."
    })));
  }

  if (key && (key.keyState === keyStates.CREATED || key.keyState === keyStates.REJECTED)) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: classes.emptyBox
    }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      variant: "body2"
    }, /*#__PURE__*/_react["default"].createElement(_WaitingForApproval["default"], {
      keyState: key.keyState,
      states: keyStates
    })));
  }

  var keyGrantTypes = key ? key.supportedGrantTypes : [];
  return /*#__PURE__*/_react["default"].createElement(_ViewKeys["default"], {
    selectedApp: selectedApp,
    keyType: keyType,
    keys: keys,
    isKeyJWT: isKeyJWT,
    selectedGrantTypes: keyGrantTypes,
    isUserOwner: isUserOwner,
    summary: true
  });
}