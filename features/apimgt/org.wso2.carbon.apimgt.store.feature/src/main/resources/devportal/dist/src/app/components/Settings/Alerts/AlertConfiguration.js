"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _InlineMessage = _interopRequireDefault(require("AppComponents/Shared/InlineMessage"));

var _base64url = _interopRequireDefault(require("base64url"));

var _reactIntl = require("react-intl");

var _Alert = _interopRequireDefault(require("AppComponents/Shared/Alert"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var alertPropertyMap = {
  AbnormalRequestsPerMin: 'requestCount'
};

var styles = function styles(theme) {
  return {
    addBtn: {
      display: 'flex',
      alignItems: 'center'
    },
    configAddBtnContainer: {
      display: 'flex',
      paddingBottom: theme.spacing(2)
    },
    configWrapper: {
      padding: theme.spacing(2)
    },
    configNameHeading: {
      marginBottom: theme.spacing(),
      borderBottom: '#cccccc 1px inset'
    }
  };
};
/**
 * Alert Configuration component.
 * This component is used to list add and delete the alert configurations.
 *
 * @param {any} props The input props.
 * @return {any} The HTML representation of the component.
 * */


var AlertConfiguration = function AlertConfiguration(props) {
  var alertType = props.alertType,
      api = props.api,
      alertName = props.alertName,
      classes = props.classes,
      intl = props.intl,
      setIsWorkerNodeDown = props.setIsWorkerNodeDown;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      alertConfiguration = _useState2[0],
      setAlertConfiguration = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      apis = _useState4[0],
      setApis = _useState4[1];

  var _useState5 = (0, _react.useState)(),
      _useState6 = _slicedToArray(_useState5, 2),
      selectedAPIName = _useState6[0],
      setSelectedAPIName = _useState6[1];

  var _useState7 = (0, _react.useState)(new Set()),
      _useState8 = _slicedToArray(_useState7, 2),
      apiNames = _useState8[0],
      setAPINames = _useState8[1];

  var _useState9 = (0, _react.useState)([]),
      _useState10 = _slicedToArray(_useState9, 2),
      apiVersions = _useState10[0],
      setAPIVersions = _useState10[1];

  var _useState11 = (0, _react.useState)([]),
      _useState12 = _slicedToArray(_useState11, 2),
      applications = _useState12[0],
      setApplications = _useState12[1];

  var _useState13 = (0, _react.useState)(),
      _useState14 = _slicedToArray(_useState13, 2),
      selectedAPIVersion = _useState14[0],
      setSelectedAPIVersion = _useState14[1];

  var _useState15 = (0, _react.useState)(),
      _useState16 = _slicedToArray(_useState15, 2),
      value = _useState16[0],
      setValue = _useState16[1];

  var _useState17 = (0, _react.useState)({}),
      _useState18 = _slicedToArray(_useState17, 2),
      isProcessing = _useState18[0],
      setProcessing = _useState18[1];

  var _useState19 = (0, _react.useState)(false),
      _useState20 = _slicedToArray(_useState19, 2),
      collapseOpen = _useState20[0],
      setCollapseOpen = _useState20[1];

  var _useState21 = (0, _react.useState)(),
      _useState22 = _slicedToArray(_useState21, 2),
      selectedApplicationName = _useState22[0],
      setSelectedApplicationName = _useState22[1];

  (0, _react.useEffect)(function () {
    var alertConfigPromise = api.getAlertConfigurations(alertType);
    var apisPromise = api.getAllAPIs();
    Promise.all([alertConfigPromise, apisPromise]).then(function (response) {
      var apisList = response[1].body.list;
      var apiNamesSet = new Set();
      apisList.forEach(function (tmpApi) {
        apiNamesSet.add(tmpApi.name);
      });
      setAPINames(apiNamesSet);
      setApis(apisList);
      setAlertConfiguration(response[0].body);
    })["catch"](function (err) {
      console.log(err);
      setIsWorkerNodeDown(true);
    });
  }, []);
  /**
   * Handles the API Name select event.
   * Once the api name is selected, the api versions list is populated.
   * @param {string} name The selected api name.
   * */

  var handleAPINameSelect = function handleAPINameSelect(name) {
    setSelectedAPIName(name);
    var availableVersions = apis.filter(function (tmpApi) {
      return tmpApi.name === name;
    });
    setAPIVersions(availableVersions);
  };
  /**
   * Handles the api version select event.
   * In this method, get the subscriptions of the selected api+version and set to the state.
   * @param {string} version The selected api version.
   * */


  var handleApiVersionSelect = function handleApiVersionSelect(version) {
    setSelectedAPIVersion(version);
    var existingAPI = apis.filter(function (tmpAPi) {
      return tmpAPi.name === selectedAPIName && tmpAPi.version === version;
    });

    if (existingAPI.length > 0) {
      api.getSubscriptions(existingAPI[0].id).then(function (res) {
        var subscribedApps = res.body.list.map(function (subscription) {
          return subscription.applicationInfo;
        });
        setApplications(subscribedApps);
      })["catch"](function (err) {
        console.log(err);
      });
    }
  };
  /**
   * Get the alert configuration of the alert type.
   * This method is called after a configuration addition or deletion.
   *
   * @param {string} action The action that is being performed.
   * */


  var getAlertConfig = function getAlertConfig(action) {
    api.getAlertConfigurations(alertType).then(function (response) {
      setAlertConfiguration(response.body);
    })["catch"]()["finally"](function () {
      setProcessing(_defineProperty({}, action, false));
    });
  };
  /**
   * Handles the configuration add operation.
   * */


  var handleAddConfiguration = function handleAddConfiguration() {
    setProcessing({
      add: true
    });

    var configId = _base64url["default"].encode(selectedAPIName + '#' + selectedAPIVersion + '#' + selectedApplicationName);

    var alertConfig = {
      apiName: selectedAPIName,
      apiVersion: selectedAPIVersion,
      applicationName: selectedApplicationName,
      requestCount: value
    };
    api.putAlertConfiguration(alertType, alertConfig, configId).then(function () {
      _Alert["default"].info(intl.formatMessage({
        id: 'Settings.Alert.AlertConfiguration.alert.config.add.success.msg',
        defaultMessage: 'Alert Configuration added successfully'
      }));

      setSelectedAPIName('');
      setSelectedAPIVersion('');
      setSelectedApplicationName('');
      setValue('');
    })["catch"](function () {
      _Alert["default"].error(intl.formatMessage({
        id: 'Settings.Alert.AlertConfiguration.alert.config.add.error.msg',
        defaultMessage: 'Error occurred while adding alert configuration'
      }));
    })["finally"](function () {
      getAlertConfig('add');
    });
  };
  /**
   * Handles the configuration delet operation for a selected configuration.
   *
   * @param {strng} id The configuration id.
   * */


  var handleDeleteConfiguration = function handleDeleteConfiguration(id) {
    setProcessing({
      "delete": id
    });
    api.deleteAlertConfiguration(alertType, id).then(function () {
      _Alert["default"].info(intl.formatMessage({
        id: 'Settings.Alert.AlertConfiguration.alert.config.delete.success.msg',
        defaultMessage: 'Alert Configuration deleted successfully'
      }));
    })["catch"](function () {
      _Alert["default"].error(intl.formatMessage({
        id: 'Settings.Alert.AlertConfiguration.alert.config.delete.error.msg',
        defaultMessage: 'Error occurred while deleting the configuration.'
      }));
    })["finally"](function () {
      getAlertConfig('delete');
    });
  };

  var isAddingDissabled = function isAddingDissabled() {
    return !selectedAPIName || !selectedAPIVersion || !selectedApplicationName || !value || isProcessing.add;
  };

  if (!apis || !alertConfiguration) {
    return /*#__PURE__*/_react["default"].createElement(_core.CircularProgress, null);
  }

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_core.Button, {
    onClick: function onClick() {
      return setCollapseOpen(!collapseOpen);
    },
    color: "primary"
  }, /*#__PURE__*/_react["default"].createElement(_core.Typography, {
    className: classes.addBtn
  }, /*#__PURE__*/_react["default"].createElement(_core.Icon, {
    color: "primary"
  }, "add"), /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Settings.Alert.AlertConfiguration.add",
    defaultMessage: "New Configuration"
  }))), /*#__PURE__*/_react["default"].createElement(_core.Collapse, {
    "in": collapseOpen,
    className: classes.configWrapper
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    xs: true
  }, /*#__PURE__*/_react["default"].createElement(_core.TextField, {
    id: "outlined-select-api-name",
    select: true,
    fullWidth: true,
    required: true,
    label: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      id: "Settings.Alerts.AlertConfiguration.api.name.label",
      defaultMessage: "API Name"
    }),
    className: classes.textField,
    value: selectedAPIName,
    onChange: function onChange(event) {
      return handleAPINameSelect(event.target.value);
    },
    SelectProps: {
      MenuProps: {
        className: classes.menu
      }
    },
    helperText: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      id: "Settings.Alerts.AlertConfiguration.select.api.helper",
      defaultMessage: "Select the API Name"
    }),
    variant: "outlined"
  }, apiNames && Array.from(apiNames).map(function (name) {
    return /*#__PURE__*/_react["default"].createElement(_core.MenuItem, {
      key: name,
      value: name
    }, name);
  }))), /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    xs: true
  }, /*#__PURE__*/_react["default"].createElement(_core.TextField, {
    id: "outlined-select-api-version",
    select: true,
    fullWidth: true,
    required: true,
    label: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      id: "Settings.Alerts.AlertConfiguration.api.version.label",
      defaultMessage: "API Version"
    }),
    className: classes.textField,
    value: selectedAPIVersion,
    onChange: function onChange(event) {
      return handleApiVersionSelect(event.target.value);
    },
    SelectProps: {
      MenuProps: {
        className: classes.menu
      }
    },
    helperText: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      id: "Settings.Alerts.AlertConfiguration.select.version.helper",
      defaultMessage: "Select API Version"
    }),
    variant: "outlined"
  }, apiVersions && apiVersions.map(function (selected) {
    return /*#__PURE__*/_react["default"].createElement(_core.MenuItem, {
      key: selected.version,
      value: selected.version
    }, selected.version);
  }))), /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    xs: true
  }, /*#__PURE__*/_react["default"].createElement(_core.TextField, {
    id: "outlined-select-applications",
    select: true,
    fullWidth: true,
    required: true,
    label: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      id: "Settings.Alerts.AlertConfiguration.applications.label",
      defaultMessage: "Application"
    }),
    className: classes.textField,
    value: selectedApplicationName,
    onChange: function onChange(event) {
      return setSelectedApplicationName(event.target.value);
    },
    SelectProps: {
      MenuProps: {
        className: classes.menu
      }
    },
    helperText: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      id: "Settings.Alerts.AlertConfiguration.select.application.helper",
      defaultMessage: "Select Application"
    }),
    variant: "outlined"
  }, applications && applications.map(function (applicationInfo) {
    return /*#__PURE__*/_react["default"].createElement(_core.MenuItem, {
      key: applicationInfo.applicationId,
      value: applicationInfo.name
    }, applicationInfo.name);
  }))), /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    xs: true
  }, /*#__PURE__*/_react["default"].createElement(_core.TextField, {
    id: "outlined-value",
    type: "number",
    fullWidth: true,
    required: true,
    label: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      id: "Settings.Alerts.AlertConfiguration.request.count.label",
      defaultMessage: "Request Count."
    }),
    className: classes.textField,
    value: value,
    onChange: function onChange(event) {
      return setValue(event.target.value);
    },
    variant: "outlined",
    endAdornment: /*#__PURE__*/_react["default"].createElement(_core.InputAdornment, {
      position: "end"
    }, "ms"),
    helperText: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      id: "Settings.Alerts.AlertConfiguration.threshold.value.helper",
      defaultMessage: "Enter Request Count."
    })
  })), /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    className: classes.configAddBtnContainer
  }, /*#__PURE__*/_react["default"].createElement(_core.Fab, {
    disabled: isAddingDissabled(),
    color: "primary",
    size: "medium",
    onClick: handleAddConfiguration
  }, /*#__PURE__*/_react["default"].createElement(_core.Icon, null, isProcessing.add && /*#__PURE__*/_react["default"].createElement(_core.CircularProgress, {
    size: 15
  }), "add")))))), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_core.Typography, {
    className: classes.configNameHeading
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Settings.Alerts.AlertConfiguration.configuration",
    defaultMessage: "{name} Configurations",
    values: {
      name: alertName
    }
  })), alertConfiguration.length === 0 ? /*#__PURE__*/_react["default"].createElement(_InlineMessage["default"], {
    height: 80
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.contentWrapper
  }, /*#__PURE__*/_react["default"].createElement(_core.Typography, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Settings.Alerts.AlertConfiguration.no.config.message",
    defaultMessage: 'You do not have any configurations. Click on {newConfig} button' + ' to add a configuration.',
    values: {
      newConfig: /*#__PURE__*/_react["default"].createElement("b", null, "New Configuration")
    }
  })))) : /*#__PURE__*/_react["default"].createElement(_core.Table, null, /*#__PURE__*/_react["default"].createElement(_core.TableHead, null, /*#__PURE__*/_react["default"].createElement(_core.TableRow, null, /*#__PURE__*/_react["default"].createElement(_core.TableCell, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Settings.Alerts.AlertConfiguration.api.name",
    defaultMessage: "API Name"
  })), /*#__PURE__*/_react["default"].createElement(_core.TableCell, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Settings.Alerts.AlertConfiguration.api.version",
    defaultMessage: "API Version"
  })), /*#__PURE__*/_react["default"].createElement(_core.TableCell, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Settings.Alerts.AlertConfiguration.app.name",
    defaultMessage: "Application Name"
  })), /*#__PURE__*/_react["default"].createElement(_core.TableCell, null, alertName), /*#__PURE__*/_react["default"].createElement(_core.TableCell, null))), /*#__PURE__*/_react["default"].createElement(_core.TableBody, null, alertConfiguration.map(function (configuration) {
    return /*#__PURE__*/_react["default"].createElement(_core.TableRow, {
      id: configuration.configurationId,
      key: configuration.configurationId
    }, /*#__PURE__*/_react["default"].createElement(_core.TableCell, null, configuration.configuration.apiName), /*#__PURE__*/_react["default"].createElement(_core.TableCell, null, configuration.configuration.apiVersion), /*#__PURE__*/_react["default"].createElement(_core.TableCell, null, configuration.configuration.applicationName), /*#__PURE__*/_react["default"].createElement(_core.TableCell, null, configuration.configuration[alertPropertyMap[alertType]]), /*#__PURE__*/_react["default"].createElement(_core.TableCell, null, /*#__PURE__*/_react["default"].createElement(_core.IconButton, {
      onClick: function onClick() {
        return handleDeleteConfiguration(configuration.configurationId);
      }
    }, isProcessing["delete"] === configuration.configurationId ? /*#__PURE__*/_react["default"].createElement(_core.CircularProgress, {
      size: 15
    }) : /*#__PURE__*/_react["default"].createElement(_core.Icon, null, "delete"))));
  })))));
};

AlertConfiguration.propTypes = {
  alertType: _propTypes["default"].string.isRequired,
  alertName: _propTypes["default"].string.isRequired,
  classes: _propTypes["default"].shape({}).isRequired,
  api: _propTypes["default"].shape({}).isRequired,
  intl: _propTypes["default"].shape({}).isRequired
};

var _default = (0, _reactIntl.injectIntl)((0, _core.withStyles)(styles)(AlertConfiguration));

exports["default"] = _default;