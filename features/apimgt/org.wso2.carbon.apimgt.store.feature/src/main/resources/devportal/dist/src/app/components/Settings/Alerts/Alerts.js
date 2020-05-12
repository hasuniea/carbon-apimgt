"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactIntl = require("react-intl");

var _InlineMessage = _interopRequireDefault(require("AppComponents/Shared/InlineMessage"));

var _materialUiChipInput = _interopRequireDefault(require("material-ui-chip-input"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _reactRouterDom = require("react-router-dom");

var _api = _interopRequireDefault(require("AppData/api"));

var _Alert = _interopRequireDefault(require("AppComponents/Shared/Alert"));

var _AlertConfiguration = _interopRequireDefault(require("./AlertConfiguration"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var styles = function styles(theme) {
  return {
    alertsWrapper: {
      padding: theme.spacing(2),
      '& span, & h5, & label, & input, & td, & li': {
        color: theme.palette.getContrastText(theme.palette.background.paper)
      }
    },
    manageAlertHeading: {
      marginBottom: theme.spacing()
    },
    chipInput: {
      width: '100%',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    },
    alertConfigDialog: {
      width: '60%'
    },
    configDialogHeading: {
      fontWeight: '600'
    },
    btnContainer: {
      marginTop: theme.spacing()
    },
    listItem: {
      marginLeft: theme.spacing(1)
    }
  };
};
/**
 * Alerts management component.
 *
 * @param {any} props The Input props.
 * @return {any} HTML representation of the component.
 * */


var Alerts = function Alerts(props) {
  var classes = props.classes,
      intl = props.intl;

  var _useState = (0, _react.useState)({
    open: false,
    alertType: '',
    name: ''
  }),
      _useState2 = _slicedToArray(_useState, 2),
      openDialog = _useState2[0],
      setOpenDialog = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      emails = _useState4[0],
      setEmailsList = _useState4[1];

  var _useState5 = (0, _react.useState)(),
      _useState6 = _slicedToArray(_useState5, 2),
      supportedAlerts = _useState6[0],
      setSupportedAlerts = _useState6[1];

  var _useState7 = (0, _react.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      subscribedAlerts = _useState8[0],
      setSubscribedAlerts = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      isAnalyticsEnabled = _useState10[0],
      setAnalyticsEnabled = _useState10[1];

  var _useState11 = (0, _react.useState)({
    subscribing: false,
    unSubscribing: false
  }),
      _useState12 = _slicedToArray(_useState11, 2),
      isInProgress = _useState12[0],
      setInProgress = _useState12[1];

  var _useState13 = (0, _react.useState)(false),
      _useState14 = _slicedToArray(_useState13, 2),
      unsubscribeAll = _useState14[0],
      setUnsubscribeAll = _useState14[1];

  var _useState15 = (0, _react.useState)(false),
      _useState16 = _slicedToArray(_useState15, 2),
      isWorkerNodeDown = _useState16[0],
      setIsWorkerNodeDown = _useState16[1];

  var api = new _api["default"]();
  var alertIdMapping = {
    3: {
      name: intl.formatMessage({
        id: 'Settings.Alerts.Alerts.abnormal.response.time',
        defaultMessage: 'Abnormal Requests per Minute'
      }),
      displayName: 'AbnormalRequestsPerMin',
      description: intl.formatMessage({
        id: 'Settings.Alerts.Alerts.abnormal.request.per.min.description',
        defaultMessage: 'This alert is triggered if there is a sudden spike the request count within a ' + 'period of one minute by default for a particular API for an application. These alerts ' + 'could be treated as an indication of a possible high traffic, suspicious activity, ' + 'possible malfunction of the client application, etc.'
      })
    },
    4: {
      name: intl.formatMessage({
        id: 'Settings.Alerts.Alerts.abnormal.backend.time',
        defaultMessage: 'Abnormal Resource Access'
      }),
      displayName: 'AbnormalRequestPattern',
      description: intl.formatMessage({
        id: 'Settings.Alerts.Alerts.abnormal.request.pattern.description',
        defaultMessage: 'This alert is triggered if there is a change in the resource access pattern of ' + 'a user of a particular application. These alerts could be treated as an indication of a ' + 'suspicious activity made by a user over your application.'
      })
    },
    5: {
      name: intl.formatMessage({
        id: 'Settings.Alerts.Alerts.numusual.ip',
        defaultMessage: 'Unusual IP Access'
      }),
      displayName: 'UnusualIPAccess',
      description: intl.formatMessage({
        id: 'Settings.Alerts.Alerts.unusual.ip.access.description',
        defaultMessage: 'This alert is triggered if there is either a change in the request source IP ' + 'for a particular application by a user or if the request is from an IP used before a ' + 'time period of 30 days (default). These alerts could be treated as an indication of a ' + 'suspicious activity made by a user over an application.'
      })
    },
    6: {
      name: intl.formatMessage({
        id: 'Settings.Alerts.Alerts.frequent.tier',
        defaultMessage: 'Frequent Tier Limit Hitting'
      }),
      displayName: 'FrequentTierLimitHitting',
      description: intl.formatMessage({
        id: 'Settings.Alerts.Alerts.tier.limit.hitting.description',
        defaultMessage: 'This alert is triggered if at least one of the two cases below are satisfied.' + ' if a particular application gets throttled out for hitting the subscribed tier limit of ' + 'that application more than 10 times (by default) within an hour (by default) or if a ' + 'particular user of an application gets throttled out for hitting the subscribed tier limit ' + 'of a particular API more than 10 times (by default) within a day (by default)'
      })
    }
  };
  /**
   * Set the configuration dialog open property for provided alert type.
   *
   * @param {number} id The alert type id
   * */

  var setConfigOpen = function setConfigOpen(id) {
    setOpenDialog({
      open: true,
      alertType: alertIdMapping[id].displayName,
      name: alertIdMapping[id].name
    });
  };
  /**
   * Checks whether the provided alert is aubscribed.
   *
   * @param {number} alertId : The id of the alert.
   * @return {boolean} True if the alert is subscribed. False otherwise.
   * */


  var isAlertSubscribed = function isAlertSubscribed(alertId) {
    return subscribedAlerts.some(function (alert) {
      return alert.id === alertId;
    });
  };
  /**
   * Check whether the provided alert is configured.
   *
   * @param {string} selectedType : The alert type which needs to be check.
   * */


  var isAlertConfigured = function isAlertConfigured(selectedType) {
    api.getAlertConfigurations(selectedType.displayName).then(function (res) {
      var data = res.body;

      if (data.length === 0) {
        setOpenDialog({
          open: true,
          alertType: selectedType.displayName,
          name: selectedType.name
        });
      }
    })["catch"](function (err) {
      return console.log(err);
    });
  };
  /**
   * Handles the alert type select event.
   *
   * @param {obj} alert : The selected alert.
   * */


  var handleCheckAlert = function handleCheckAlert(alert) {
    var alertId = alert.id;

    var tmpSubscribedAlerts = _toConsumableArray(subscribedAlerts);

    if (isAlertSubscribed(alertId)) {
      tmpSubscribedAlerts = tmpSubscribedAlerts.filter(function (sub) {
        return sub.id !== alertId;
      });
    } else {
      var newAlert = {
        id: alertId,
        name: alertIdMapping[alertId].displayName,
        configuration: []
      };
      tmpSubscribedAlerts.push(newAlert);
    } // Check whether the alert is configurable and check configuration exists.


    if (alert.requireConfiguration) {
      isAlertConfigured(alertIdMapping[alertId]);
    }

    setSubscribedAlerts(tmpSubscribedAlerts);
  };
  /**
   * Handles the add email event.
   *
   * @param {string} email The email address that is being added.
   * */


  var handleAddEmail = function handleAddEmail(email) {
    setEmailsList(email);
  };
  /**
   * Handles the email deletion event.
   *
   * @param {string} email : The email that is being deleted.
   * */


  var handleEmailDeletion = function handleEmailDeletion(email) {
    var newEmails = emails.filter(function (oldEmail) {
      return oldEmail !== email;
    });
    setEmailsList(newEmails);
  };

  (0, _react.useEffect)(function () {
    var supportedAlertsPromise = api.getSupportedAlertTypes();
    var subscribedAlertsPromise = api.getSubscribedAlertTypesByUser();
    Promise.all([supportedAlertsPromise, subscribedAlertsPromise]).then(function (response) {
      if (response[0].status === 204 || response[1].status === 204) {
        setAnalyticsEnabled(false);
      } else {
        setAnalyticsEnabled(true);
        setSubscribedAlerts(response[1].body.alerts);
        setEmailsList(response[1].body.emailList);
        setSupportedAlerts(response[0].body.alerts);
      }
    })["catch"](function (err) {
      setAnalyticsEnabled(false);
      setSubscribedAlerts({});
      console.error(err);

      _Alert["default"].error(intl.formatMessage({
        id: 'Settings.Alerts.Alerts.loading.error.msg',
        defaultMessage: 'Error occurred while loading alerts'
      }));
    });
  }, []);
  /**
   * Handles the subscribe button click action.
   * */

  var handleSubscribe = function handleSubscribe() {
    setInProgress({
      subscribing: true
    });
    var alertsToSubscribe = {
      alerts: subscribedAlerts,
      emailList: emails
    };
    api.subscribeAlerts(alertsToSubscribe).then(function () {
      _Alert["default"].success(intl.formatMessage({
        id: 'Settings.Alerts.Alerts.subscribe.success.msg',
        defaultMessage: 'Subscribed to Alerts Successfully.'
      }));
    })["catch"](function (err) {
      console.error(err);

      _Alert["default"].error(intl.formatMessage({
        id: 'Settings.Alerts.Alerts.subscribe.error.msg',
        defaultMessage: 'Error occurred while subscribing to alerts.'
      }));
    })["finally"](function () {
      return setInProgress({
        subscribing: false
      });
    });
  };
  /**
   * Handles unsubscribe button click action.
   * */


  var handleUnSubscribe = function handleUnSubscribe() {
    setInProgress({
      unSubscribing: true
    });
    api.unsubscribeAlerts().then(function () {
      setSubscribedAlerts([]);
      setEmailsList([]);

      _Alert["default"].success(intl.formatMessage({
        id: 'Settings.Alerts.Alerts.unsubscribe.success.msg',
        defaultMessage: 'Unsubscribed from all alerts successfully.'
      }));
    })["catch"](function (err) {
      console.error(err);

      _Alert["default"].error(intl.formatMessage({
        id: 'Settings.Alerts.Alerts.unsubscribe.error.msg',
        defaultMessage: 'Error occurred while unsubscribing.'
      }));
    })["finally"](function () {
      return setInProgress({
        unSubscribing: false
      });
    });
  }; // if (!supportedAlerts) {
  //     return <CircularProgress />;
  // }


  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.alertsWrapper
  }, !isAnalyticsEnabled ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_InlineMessage["default"], {
    type: "info",
    height: 100
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_core.Typography, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Settings.Alerts.Alerts.enable.analytics.message",
    defaultMessage: "Enable Analytics to Configure Alerts"
  }))))) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !supportedAlerts ? /*#__PURE__*/_react["default"].createElement(_core.CircularProgress, null) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_core.Typography, {
    variant: "h6",
    className: classes.manageAlertHeading
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Settings.Alerts.Alerts.subscribe.to.alerts.heading",
    defaultMessage: "Manage Alert Subscriptions"
  })), /*#__PURE__*/_react["default"].createElement(_core.Typography, {
    variant: "caption"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Settings.Alerts.Alerts.subscribe.to.alerts.subheading",
    defaultMessage: 'Select the Alert types to subscribe/ unsubscribe and click' + ' Save.'
  })), /*#__PURE__*/_react["default"].createElement(_core.List, null, supportedAlerts && supportedAlerts.map(function (alert) {
    return /*#__PURE__*/_react["default"].createElement(_core.ListItem, {
      key: alert.id,
      divider: true
    }, /*#__PURE__*/_react["default"].createElement(_core.ListItemIcon, null, /*#__PURE__*/_react["default"].createElement(_core.Checkbox, {
      edge: "start",
      tabIndex: -1,
      value: alert.id,
      checked: isAlertSubscribed(alert.id),
      onChange: function onChange() {
        return handleCheckAlert(alert);
      },
      inputProps: {
        'aria-labelledby': alert.name
      },
      color: "primary"
    })), /*#__PURE__*/_react["default"].createElement(_core.ListItemText, {
      id: alert.id,
      primary: alertIdMapping[alert.id].name,
      secondary: alertIdMapping[alert.id].description,
      className: classes.listItem
    }), alert.requireConfiguration === true ? /*#__PURE__*/_react["default"].createElement(_core.ListItemSecondaryAction, null, /*#__PURE__*/_react["default"].createElement(_core.IconButton, {
      onClick: function onClick() {
        return setConfigOpen(alert.id);
      }
    }, /*#__PURE__*/_react["default"].createElement(_core.Icon, null, "settings"))) : /*#__PURE__*/_react["default"].createElement("div", null));
  })), /*#__PURE__*/_react["default"].createElement(_materialUiChipInput["default"], {
    label: "Emails",
    variant: "outlined",
    className: classes.chipInput,
    value: emails,
    placeholder: "Enter email address and press Enter",
    required: true,
    helperText: 'Email address to receive alerts of selected Alert types. Type email' + ' address and press Enter to add',
    onChange: function onChange(chip) {
      handleAddEmail(chip);
    },
    onDelete: function onDelete(chip) {
      handleEmailDeletion(chip);
    }
  }), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    direction: "row",
    spacing: 2,
    className: classes.btnContainer
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_core.Button, {
    disabled: emails.length === 0 || subscribedAlerts.length === 0,
    onClick: handleSubscribe,
    variant: "contained",
    color: "primary"
  }, isInProgress.subscribing && /*#__PURE__*/_react["default"].createElement(_core.CircularProgress, {
    size: 15
  }), "Save")), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_core.Button, {
    disabled: isInProgress.subscribing,
    color: "primary",
    variant: "contained",
    onClick: function onClick() {
      return setUnsubscribeAll(true);
    }
  }, isInProgress.unSubscribing && /*#__PURE__*/_react["default"].createElement(_core.CircularProgress, {
    size: 15
  }), "Unsubscribe All")), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "/apis/"
  }, /*#__PURE__*/_react["default"].createElement(_core.Button, {
    disabled: isInProgress.subscribing,
    variant: "contained",
    color: "default"
  }, isInProgress.unSubscribing && /*#__PURE__*/_react["default"].createElement(_core.CircularProgress, {
    size: 15
  }), "Cancel"))))))), /*#__PURE__*/_react["default"].createElement(_core.Dialog, {
    open: openDialog.open
  }, /*#__PURE__*/_react["default"].createElement(_core.DialogTitle, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Settings.Alerts.Alerts.configure.alert",
    defaultMessage: "Configurations"
  })), isWorkerNodeDown ? /*#__PURE__*/_react["default"].createElement(_core.DialogContent, null, /*#__PURE__*/_react["default"].createElement(_core.DialogContentText, {
    id: "analytics-dialog-description"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Apis.Settings.Alerts.connection.error",
    defaultMessage: "Could not connect to analytics server. Please check the connectivity."
  }))) : /*#__PURE__*/_react["default"].createElement(_core.DialogContent, null, /*#__PURE__*/_react["default"].createElement(_AlertConfiguration["default"], {
    alertType: openDialog.alertType,
    alertName: openDialog.name,
    api: api,
    setIsWorkerNodeDown: setIsWorkerNodeDown
  })), /*#__PURE__*/_react["default"].createElement(_core.DialogActions, null, /*#__PURE__*/_react["default"].createElement(_core.Button, {
    color: "primary",
    variant: "outlined",
    onClick: function onClick() {
      return setOpenDialog({
        open: false
      });
    }
  }, /*#__PURE__*/_react["default"].createElement(_core.Typography, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Settings.Alerts.Alerts.close.btn",
    defaultMessage: "Close"
  }))))), /*#__PURE__*/_react["default"].createElement(_core.Dialog, {
    open: unsubscribeAll
  }, /*#__PURE__*/_react["default"].createElement(_core.DialogTitle, null, /*#__PURE__*/_react["default"].createElement(_core.Typography, {
    className: classes.configDialogHeading
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Settings.Alerts.Alerts.unsubscribe.confirm.dialog.heading",
    defaultMessage: "Confirm unsubscription from All Alerts"
  }))), /*#__PURE__*/_react["default"].createElement(_core.DialogContent, null, /*#__PURE__*/_react["default"].createElement(_core.Typography, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Settings.Alerts.Alerts.unsubscribe.confirm.dialog.message",
    defaultMessage: 'This will remove all the existing alert subscriptions and emails. This' + ' action cannot be undone.'
  }))), /*#__PURE__*/_react["default"].createElement(_core.DialogActions, null, /*#__PURE__*/_react["default"].createElement(_core.Button, {
    color: "primary",
    size: "small",
    onClick: function onClick() {
      handleUnSubscribe();
      setUnsubscribeAll(false);
    }
  }, /*#__PURE__*/_react["default"].createElement(_core.Typography, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Settings.Alerts.Alerts.confirm.btn",
    defaultMessage: "Unsubscribe All"
  }))), /*#__PURE__*/_react["default"].createElement(_core.Button, {
    color: "secondary",
    size: "small",
    onClick: function onClick() {
      return setUnsubscribeAll(false);
    }
  }, /*#__PURE__*/_react["default"].createElement(_core.Typography, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Settings.Alerts.Alerts.cancel.btn",
    defaultMessage: "Cancel"
  }))))));
};

Alerts.propTypes = {
  classes: _propTypes["default"].shape({
    configDialogHeading: _propTypes["default"].string.isRequired,
    chipInput: _propTypes["default"].string.isRequired,
    btnContainer: _propTypes["default"].string.isRequired,
    alertsWrapper: _propTypes["default"].string.isRequired,
    manageAlertHeading: _propTypes["default"].string.isRequired
  }).isRequired,
  intl: _propTypes["default"].shape({
    formatMessage: _propTypes["default"].func.isRequired
  }).isRequired
};

var _default = (0, _reactIntl.injectIntl)((0, _core.withStyles)(styles)(Alerts));

exports["default"] = _default;