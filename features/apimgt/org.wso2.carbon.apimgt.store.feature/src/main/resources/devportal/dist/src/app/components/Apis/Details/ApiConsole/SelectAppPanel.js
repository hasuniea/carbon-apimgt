"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactIntl = require("react-intl");

var _core = require("@material-ui/core");

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _styles = require("@material-ui/core/styles");

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var styles = function styles(theme) {
  return {
    centerItems: {
      margin: 'auto'
    },
    tryoutHeading: {
      marginTop: theme.spacing(1),
      fontWeight: 400
    },
    menuItem: {
      color: theme.palette.getContrastText(theme.palette.background.paper)
    }
  };
};

var SelectAppPanel = function SelectAppPanel(props) {
  var subscriptions = props.subscriptions,
      handleChanges = props.handleChanges,
      selectedApplication = props.selectedApplication,
      selectedKeyType = props.selectedKeyType,
      classes = props.classes;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    x: 12,
    md: 6,
    className: classes.centerItems
  }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    fullWidth: true,
    id: "outlined-select-currency",
    select: true,
    label: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      defaultMessage: "Appplications",
      id: "Apis.Details.ApiConsole.SelectAppPanel.applications"
    }),
    value: selectedApplication,
    name: "selectedApplication",
    onChange: handleChanges,
    SelectProps: subscriptions,
    helperText: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      defaultMessage: "Subscribed applications",
      id: "Apis.Details.ApiConsole.SelectAppPanel.select.subscribed.application"
    }),
    margin: "normal",
    variant: "outlined"
  }, subscriptions.map(function (sub) {
    return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      value: sub.applicationInfo.applicationId,
      key: sub.applicationInfo.applicationId,
      className: classes.menuItem
    }, sub.applicationInfo.name);
  }))), /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    x: 12,
    md: 6,
    className: classes.centerItems
  }, /*#__PURE__*/_react["default"].createElement(_core.Typography, {
    variant: "h6",
    color: "textSecondary",
    className: classes.tryoutHeading
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Apis.Details.ApiConsole.SelectAppPanel.select.key.type.heading",
    defaultMessage: "Key Type"
  })), /*#__PURE__*/_react["default"].createElement(_core.FormControl, {
    component: "fieldKeyType"
  }, /*#__PURE__*/_react["default"].createElement(_core.RadioGroup, {
    name: "selectedKeyType",
    value: selectedKeyType,
    onChange: handleChanges,
    row: true
  }, subscriptions != null && subscriptions.find(function (sub) {
    return sub.applicationId === selectedApplication;
  }).status === 'UNBLOCKED' && /*#__PURE__*/_react["default"].createElement(_core.FormControlLabel, {
    value: "PRODUCTION",
    control: /*#__PURE__*/_react["default"].createElement(_core.Radio, null),
    label: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      id: "Apis.Details.ApiConsole.SelectAppPanel.production.radio",
      defaultMessage: "Production"
    })
  }), /*#__PURE__*/_react["default"].createElement(_core.FormControlLabel, {
    value: "SANDBOX",
    control: /*#__PURE__*/_react["default"].createElement(_core.Radio, null),
    label: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      id: "Apis.Details.ApiConsole.SelectAppPanel.sandbox.radio",
      defaultMessage: "Sandbox"
    })
  })))));
};

var _default = (0, _styles.withStyles)(styles)(SelectAppPanel);

exports["default"] = _default;