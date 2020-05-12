"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _styles = require("@material-ui/core/styles");

var _classnames = _interopRequireDefault(require("classnames"));

var _CustomIcon = _interopRequireDefault(require("AppComponents/Shared/CustomIcon"));

var _ScopeValidation = require("AppComponents/Shared/ScopeValidation");

var _TokenManager = _interopRequireDefault(require("AppComponents/Shared/AppsAndKeys/TokenManager"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactIntl = require("react-intl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @inheritdoc
 * @param {*} theme theme object
 */
var styles = function styles(theme) {
  return {
    button: {
      padding: theme.spacing(1),
      color: theme.palette.getContrastText(theme.palette.background["default"]),
      display: 'flex',
      alignItems: 'center',
      fontSize: '11px',
      cursor: 'pointer',
      '& span': {
        paddingLeft: 6,
        display: 'inline-block'
      }
    },
    actionColumn: {
      display: 'flex',
      textAlign: 'right',
      direction: 'rtl'
    },
    td: {
      color: theme.palette.getContrastText(theme.palette.background["default"]),
      borderBottom: 'solid 1px ' + theme.palette.grey.A200,
      fontSize: '11px',
      paddingLeft: theme.spacing(1),
      height: 35
    },
    selectedWrapper: {
      borderLeft: 'solid 2px ' + theme.palette.primary.main
    }
  };
};

var subscriptionTableRow = function subscriptionTableRow(props) {
  var classes = props.classes,
      loadInfo = props.loadInfo,
      handleSubscriptionDelete = props.handleSubscriptionDelete,
      theme = props.theme,
      selectedAppId = props.selectedAppId,
      updateSubscriptionData = props.updateSubscriptionData,
      selectedKeyType = props.selectedKeyType,
      app = props.app,
      index = props.index,
      applicationOwner = props.applicationOwner,
      hashEnabled = props.hashEnabled;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
    className: classes.td
  }, app.label), /*#__PURE__*/_react["default"].createElement("td", {
    className: classes.td
  }, app.policy), /*#__PURE__*/_react["default"].createElement("td", {
    className: classes.td
  }, app.status), /*#__PURE__*/_react["default"].createElement("td", {
    className: classes.td
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.actionColumn
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    className: classes.button,
    to: '/applications/' + app.value
  }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Apis.Details.Credentials.SubscriptionTableRow.manage.app",
    defaultMessage: "MANAGE APP"
  })), /*#__PURE__*/_react["default"].createElement(_CustomIcon["default"], {
    width: 16,
    height: 16,
    strokeColor: theme.palette.primary.main,
    icon: "applications"
  })), /*#__PURE__*/_react["default"].createElement(_ScopeValidation.ScopeValidation, {
    resourcePath: _ScopeValidation.resourcePaths.SINGLE_SUBSCRIPTION,
    resourceMethod: _ScopeValidation.resourceMethods.DELETE
  }, /*#__PURE__*/_react["default"].createElement("a", {
    className: classes.button,
    onClick: function onClick() {
      return handleSubscriptionDelete(app.subscriptionId, updateSubscriptionData);
    },
    onKeyDown: function onKeyDown() {
      return handleSubscriptionDelete(app.subscriptionId, updateSubscriptionData);
    }
  }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Apis.Details.Credentials.SubscriptionTableRow.unsubscribe",
    defaultMessage: "UNSUBSCRIBE"
  })), /*#__PURE__*/_react["default"].createElement(_CustomIcon["default"], {
    width: 16,
    height: 16,
    strokeColor: theme.palette.primary.main,
    icon: "subscriptions"
  }))), /*#__PURE__*/_react["default"].createElement("a", {
    className: (0, _classnames["default"])(classes.button, _defineProperty({}, classes.activeLink, selectedAppId && selectedKeyType === 'PRODUCTION' && app.value === selectedAppId)),
    onClick: function onClick() {
      return loadInfo('PRODUCTION', app.value);
    },
    onKeyDown: function onKeyDown() {
      return loadInfo('PRODUCTION', app.value);
    }
  }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Apis.Details.Credentials.SubscriptionTableRow.prod.keys",
    defaultMessage: "PROD KEYS"
  })), /*#__PURE__*/_react["default"].createElement(_CustomIcon["default"], {
    width: 16,
    height: 16,
    strokeColor: theme.palette.primary.main,
    icon: "productionkeys"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    className: (0, _classnames["default"])(classes.button, _defineProperty({}, classes.activeLink, selectedAppId && selectedKeyType === 'SANDBOX' && app.value === selectedAppId)),
    onClick: function onClick() {
      return loadInfo('SANDBOX', app.value);
    },
    onKeyDown: function onKeyDown() {
      return loadInfo('SANDBOX', app.value);
    }
  }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Apis.Details.Credentials.SubscriptionTableRow.sandbox.keys",
    defaultMessage: "SANDBOX KEYS"
  })), /*#__PURE__*/_react["default"].createElement(_CustomIcon["default"], {
    width: 16,
    height: 16,
    strokeColor: theme.palette.primary.main,
    icon: "productionkeys"
  }))))), app.value === selectedAppId && (selectedKeyType === 'PRODUCTION' || selectedKeyType === 'SANDBOX') && /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
    colSpan: "4"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.selectedWrapper
  }, /*#__PURE__*/_react["default"].createElement(_TokenManager["default"], {
    keyType: selectedKeyType,
    selectedApp: {
      appId: app.value,
      label: app.label,
      owner: applicationOwner,
      hashEnabled: hashEnabled
    },
    updateSubscriptionData: updateSubscriptionData
  })))));
};

subscriptionTableRow.propTypes = {
  classes: _propTypes["default"].shape({
    td: _propTypes["default"].shape({}),
    actionColumn: _propTypes["default"].shape({}),
    button: _propTypes["default"].shape({}),
    activeLink: _propTypes["default"].shape({}),
    selectedWrapper: _propTypes["default"].shape({})
  }).isRequired,
  theme: _propTypes["default"].shape({}).isRequired,
  handleSubscriptionDelete: _propTypes["default"].func.isRequired,
  loadInfo: _propTypes["default"].func.isRequired,
  selectedAppId: _propTypes["default"].string.isRequired,
  updateSubscriptionData: _propTypes["default"].func.isRequired,
  selectedKeyType: _propTypes["default"].string.isRequired,
  applicationOwner: _propTypes["default"].string.isRequired,
  app: _propTypes["default"].shape({
    label: _propTypes["default"].string,
    policy: _propTypes["default"].string,
    status: _propTypes["default"].string,
    value: _propTypes["default"].string,
    subscriptionId: _propTypes["default"].string
  }).isRequired,
  index: _propTypes["default"].number.isRequired
};

var _default = (0, _styles.withStyles)(styles, {
  withTheme: true
})(subscriptionTableRow);

exports["default"] = _default;