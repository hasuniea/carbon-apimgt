"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _withStyles = _interopRequireDefault(require("@material-ui/core/styles/withStyles"));

var _styles = require("@material-ui/core/styles");

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _core = require("@material-ui/core");

var _HelpOutline = _interopRequireDefault(require("@material-ui/icons/HelpOutline"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _InputAdornment = _interopRequireDefault(require("@material-ui/core/InputAdornment"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _AuthManager = _interopRequireDefault(require("AppData/AuthManager"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _ApiContext = require("../ApiContext");

var _Progress = _interopRequireDefault(require("../../../Shared/Progress"));

var _api = _interopRequireDefault(require("../../../../data/api"));

var _Application = _interopRequireDefault(require("../../../../data/Application"));

var _SelectAppPanel = _interopRequireDefault(require("./SelectAppPanel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * @inheritdoc
 * @param {*} theme theme
 */
var styles = (0, _styles.makeStyles)(function (theme) {
  return {
    centerItems: {
      margin: 'auto'
    },
    tokenType: {
      margin: 'auto',
      display: 'flex'
    },
    inputAdornmentStart: {
      minWidth: theme.spacing(18)
    },
    paper: {
      margin: theme.spacing(1),
      padding: theme.spacing(1)
    },
    grid: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      paddingRight: theme.spacing(2),
      justifyContent: 'center'
    },
    tryoutHeading: {
      fontWeight: 400
    },
    genKeyButton: {
      width: theme.spacing(20),
      height: theme.spacing(5),
      marginTop: theme.spacing(2.5),
      marginLeft: theme.spacing(2)
    },
    gatewayEnvironment: {
      marginTop: theme.spacing(4)
    },
    categoryHeading: {
      marginBottom: theme.spacing(2),
      marginLeft: theme.spacing(-5)
    },
    tooltip: {
      marginLeft: theme.spacing(1)
    },
    menuItem: {
      color: theme.palette.getContrastText(theme.palette.background.paper)
    }
  };
});
/**
 * TryOut component
 *
 * @class TryOutController
 * @extends {Component}
 */

function TryOutController(props) {
  var securitySchemeType = props.securitySchemeType,
      selectedEnvironment = props.selectedEnvironment,
      environments = props.environments,
      labels = props.labels,
      productionAccessToken = props.productionAccessToken,
      sandboxAccessToken = props.sandboxAccessToken,
      selectedKeyType = props.selectedKeyType,
      setKeys = props.setKeys,
      setSelectedKeyType = props.setSelectedKeyType,
      setSelectedEnvironment = props.setSelectedEnvironment,
      setProductionAccessToken = props.setProductionAccessToken,
      setSandboxAccessToken = props.setSandboxAccessToken,
      scopes = props.scopes,
      setSecurityScheme = props.setSecurityScheme,
      setUsername = props.setUsername,
      setPassword = props.setPassword,
      username = props.username,
      password = props.password,
      setProductionApiKey = props.setProductionApiKey,
      setSandboxApiKey = props.setSandboxApiKey,
      productionApiKey = props.productionApiKey,
      sandboxApiKey = props.sandboxApiKey,
      environmentObject = props.environmentObject,
      setURLs = props.setURLs;
  var classes = styles();

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showToken = _useState2[0],
      setShowToken = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isUpdating = _useState4[0],
      setIsUpdating = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      notFound = _useState6[0],
      setNotFound = _useState6[1];

  var _useState7 = (0, _react.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      subscriptions = _useState8[0],
      setSubscriptions = _useState8[1];

  var _useState9 = (0, _react.useState)([]),
      _useState10 = _slicedToArray(_useState9, 2),
      selectedApplication = _useState10[0],
      setSelectedApplication = _useState10[1];

  var _useContext = (0, _react.useContext)(_ApiContext.ApiContext),
      api = _useContext.api;

  var apiID = api.id;
  var restApi = new _api["default"]();
  (0, _react.useEffect)(function () {
    var selectedEnvironments;
    var subscriptionsList;
    var selectedApplicationList;
    var keys;
    var selectedKeyTypes = 'PRODUCTION';
    var accessToken;
    var promiseSubscriptions = restApi.getSubscriptions(apiID);
    promiseSubscriptions.then(function (subscriptionsResponse) {
      if (subscriptionsResponse !== null) {
        subscriptionsList = subscriptionsResponse.obj.list.filter(function (item) {
          return item.status === 'UNBLOCKED' || item.status === 'PROD_ONLY_BLOCKED';
        });

        if (subscriptionsList && subscriptionsList.length > 0) {
          selectedApplicationList = subscriptionsList[0].applicationId;

          _Application["default"].get(selectedApplicationList).then(function (application) {
            return application.getKeys();
          }).then(function (appKeys) {
            if (appKeys.get('SANDBOX')) {
              selectedKeyTypes = 'SANDBOX';
              accessToken = appKeys.get('SANDBOX').token.accessToken;
            } else if (appKeys.get('PRODUCTION')) {
              selectedKeyTypes = 'PRODUCTION';
              accessToken = appKeys.get('PRODUCTION').token.accessToken;
            }

            setSelectedApplication(selectedApplicationList);
            setSubscriptions(subscriptionsList);
            setKeys(appKeys);
            setSelectedEnvironment(selectedEnvironments, false);
            setSelectedKeyType(selectedKeyTypes, false);

            if (selectedKeyType === 'PRODUCTION') {
              setProductionAccessToken(accessToken);
            } else {
              setSandboxAccessToken(accessToken);
            }
          });
        } else {
          setSelectedApplication(selectedApplicationList);
          setSubscriptions(subscriptionsList);
          setKeys(keys);
          setSelectedEnvironment(selectedEnvironment, false);

          if (selectedKeyType === 'PRODUCTION') {
            setProductionAccessToken(accessToken);
          } else {
            setSandboxAccessToken(accessToken);
          }

          setSelectedKeyType(selectedKeyType, false);
        }
      } else {
        setSelectedApplication(selectedApplicationList);
        setSubscriptions(subscriptionsList);
        setKeys(keys);
        setSelectedEnvironment(selectedEnvironment, false);

        if (selectedKeyType === 'PRODUCTION') {
          setProductionAccessToken(accessToken);
        } else {
          setSandboxAccessToken(accessToken);
        }

        setSelectedKeyType(selectedKeyType, false);
      }
    })["catch"](function (error) {
      if (process.env.NODE_ENV !== 'production') {
        console.error(error);
      }

      var status = error.status;

      if (status === 404) {
        setNotFound(true);
      }
    });
  }, []);
  /**
   * Generate access token
   * */

  function generateAccessToken() {
    setIsUpdating(true);

    var applicationPromise = _Application["default"].get(selectedApplication);

    applicationPromise.then(function (application) {
      return application.generateToken(selectedKeyType, 3600, scopes);
    }).then(function (response) {
      console.log('token generated successfully ' + response);
      setShowToken(false);

      if (selectedKeyType === 'PRODUCTION') {
        setProductionAccessToken(response.accessToken);
      } else {
        setSandboxAccessToken(response.accessToken);
      }

      setIsUpdating(false);
    })["catch"](function (error) {
      console.error(error);
      var status = error.status;

      if (status === 404) {
        setNotFound(true);
      }

      setIsUpdating(false);
    });
  }
  /**
   * Generate api key
   * */


  function generateApiKey() {
    setIsUpdating(true);
    var promisedKey = restApi.generateApiKey(selectedApplication, selectedKeyType, -1);
    promisedKey.then(function (response) {
      console.log('Non empty response received', response);
      setShowToken(false);

      if (selectedKeyType === 'PRODUCTION') {
        setProductionApiKey(response.body.apikey);
      } else {
        setSandboxApiKey(response.body.apikey);
      }

      setIsUpdating(false);
    })["catch"](function (error) {
      console.log(error);
      var status = error.status;

      if (status === 404) {
        setNotFound(true);
      }

      setIsUpdating(false);
    });
  }
  /**
   *
   * Handle onClick of shown access token
   * @memberof TryOutController
   */


  function handleClickShowToken() {
    setShowToken(true);
  }
  /**
   * Load the selected application information
   * @memberof TryOutController
   */


  function updateApplication() {
    var accessToken;
    var keyType;

    if (subscriptions !== null && subscriptions.length !== 0 && selectedApplication.length !== 0) {
      if (subscriptions.find(function (sub) {
        return sub.applicationId === selectedApplication;
      }).status === 'PROD_ONLY_BLOCKED') {
        setSelectedKeyType(selectedKeyType, false);
        keyType = 'SANDBOX';
      } else {
        keyType = selectedKeyType;
      }
    }

    _Application["default"].get(selectedApplication).then(function (application) {
      return application.getKeys();
    }).then(function (appKeys) {
      if (appKeys.get(keyType)) {
        accessToken = appKeys.get(keyType).token.accessToken;
      }

      if (appKeys.get(keyType) === 'PRODUCTION') {
        setProductionAccessToken(accessToken);
      } else {
        setSandboxAccessToken(accessToken);
      }

      setKeys(appKeys);
    });
  }

  (0, _react.useEffect)(function () {
    updateApplication();
  }, [selectedApplication]);
  /**
   * Handle onChange of inputs
   * @param {*} event event
   * @memberof TryOutController
   */

  function handleChanges(event) {
    var target = event.target;
    var name = target.name,
        value = target.value;

    switch (name) {
      case 'selectedEnvironment':
        setSelectedEnvironment(value, true);

        if (environmentObject) {
          var urls = environmentObject.find(function (elm) {
            return value === elm.environmentName;
          }).URLs;
          setURLs(urls);
        }

        break;

      case 'selectedApplication':
        setProductionAccessToken('');
        setSandboxAccessToken('');
        setProductionApiKey('');
        setSandboxApiKey('');
        setSelectedApplication(value);
        break;

      case 'selectedKeyType':
        if (!productionAccessToken || !sandboxAccessToken) {
          setSelectedKeyType(value, true);
        } else {
          setSelectedKeyType(value, false);
        }

        break;

      case 'securityScheme':
        setSecurityScheme(value);
        break;

      case 'username':
        setUsername(value);
        break;

      case 'password':
        setPassword(value);
        break;

      case 'accessToken':
        if (securitySchemeType === 'API-KEY' && selectedKeyType === 'PRODUCTION') {
          setProductionApiKey(value);
        } else if (securitySchemeType === 'API-KEY' && selectedKeyType === 'SANDBOX') {
          setSandboxApiKey(value);
        } else if (selectedKeyType === 'PRODUCTION') {
          setProductionAccessToken(value);
        } else {
          setSandboxAccessToken(value);
        }

        break;

      default:
    }
  }

  var user = _AuthManager["default"].getUser();

  if (api == null) {
    return /*#__PURE__*/_react["default"].createElement(_Progress["default"], null);
  }

  if (notFound) {
    return 'API Not found !';
  }

  var isApiKeyEnabled = false;
  var isBasicAuthEnabled = false;
  var isOAuthEnabled = false;
  var authorizationHeader = api.authorizationHeader ? api.authorizationHeader : 'Authorization';
  var prefix = 'Bearer';

  if (api && api.securityScheme) {
    isApiKeyEnabled = api.securityScheme.includes('api_key');
    isBasicAuthEnabled = api.securityScheme.includes('basic_auth');
    isOAuthEnabled = api.securityScheme.includes('oauth2');

    if (isApiKeyEnabled && securitySchemeType === 'API-KEY') {
      authorizationHeader = 'apikey';
      prefix = '';
    }
  }

  var isPrototypedAPI = api.lifeCycleStatus && api.lifeCycleStatus.toLowerCase() === 'prototyped';
  var tokenValue = '';

  if (securitySchemeType === 'API-KEY') {
    tokenValue = selectedKeyType === 'PRODUCTION' ? productionApiKey : sandboxApiKey;
  } else {
    tokenValue = selectedKeyType === 'PRODUCTION' ? productionAccessToken : sandboxAccessToken;
  }

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    x: 12,
    md: 6,
    className: classes.centerItems
  }, /*#__PURE__*/_react["default"].createElement(_Box["default"], null, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h5",
    color: "textPrimary",
    className: classes.categoryHeading
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "api.console.security.heading",
    defaultMessage: "Security"
  })), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h6",
    color: "textSecondary",
    className: classes.tryoutHeading
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "api.console.security.type.heading",
    defaultMessage: "Security Type"
  })), (isApiKeyEnabled || isBasicAuthEnabled || isOAuthEnabled) && /*#__PURE__*/_react["default"].createElement(_core.FormControl, {
    component: "fieldset"
  }, /*#__PURE__*/_react["default"].createElement(_core.RadioGroup, {
    name: "securityScheme",
    value: securitySchemeType,
    onChange: handleChanges,
    row: true
  }, isOAuthEnabled && /*#__PURE__*/_react["default"].createElement(_core.FormControlLabel, {
    value: "OAUTH",
    control: /*#__PURE__*/_react["default"].createElement(_core.Radio, null),
    label: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      id: "Apis.Details.ApiConsole.security.scheme.oauth",
      defaultMessage: "OAuth"
    })
  }), isApiKeyEnabled && /*#__PURE__*/_react["default"].createElement(_core.FormControlLabel, {
    value: "API-KEY",
    control: /*#__PURE__*/_react["default"].createElement(_core.Radio, null),
    label: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      id: "Apis.Details.ApiConsole.security.scheme.apikey",
      defaultMessage: "API Key"
    })
  }), isBasicAuthEnabled && /*#__PURE__*/_react["default"].createElement(_core.FormControlLabel, {
    value: "BASIC",
    control: /*#__PURE__*/_react["default"].createElement(_core.Radio, null),
    label: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      id: "Apis.Details.ApiConsole.security.scheme.basic",
      defaultMessage: "Basic"
    })
  }))))), !isPrototypedAPI && /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    xs: 12,
    md: 12,
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    display: "block"
  }, user && subscriptions && subscriptions.length > 0 && securitySchemeType !== 'BASIC' && /*#__PURE__*/_react["default"].createElement(_SelectAppPanel["default"], {
    subscriptions: subscriptions,
    handleChanges: handleChanges,
    selectedApplication: selectedApplication,
    selectedKeyType: selectedKeyType
  }), subscriptions && subscriptions.length === 0 && /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    display: "flex",
    justifyContent: "center"
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body1",
    gutterBottom: true
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Apis.Details.ApiConsole.ApiConsole.subscribe.to.application",
    defaultMessage: "Please subscribe to an application"
  }))), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    display: "block",
    justifyContent: "center"
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    x: 8,
    md: 6,
    className: classes.tokenType,
    item: true
  }, securitySchemeType === 'BASIC' ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    x: 12,
    md: 12,
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    margin: "normal",
    variant: "outlined",
    label: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      id: "username",
      defaultMessage: "Username"
    }),
    name: "username",
    onChange: handleChanges,
    value: username || '',
    fullWidth: true
  }), /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    margin: "normal",
    variant: "outlined",
    label: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      id: "password",
      defaultMessage: "Password"
    }),
    name: "password",
    onChange: handleChanges,
    value: password || '',
    fullWidth: true
  }))) : /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    fullWidth: true,
    margin: "normal",
    variant: "outlined",
    label: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      id: "access.token",
      sdefaultMessage: "Access Token"
    }),
    name: "accessToken",
    onChange: handleChanges,
    type: showToken ? 'text' : 'password',
    value: tokenValue || '',
    helperText: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      id: "enter.access.token",
      defaultMessage: "Enter access Token"
    }),
    InputProps: {
      endAdornment: /*#__PURE__*/_react["default"].createElement(_InputAdornment["default"], {
        position: "end"
      }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
        edge: "end",
        "aria-label": "Toggle token visibility",
        onClick: handleClickShowToken
      }, showToken ? /*#__PURE__*/_react["default"].createElement(_Icon["default"], null, "visibility_off") : /*#__PURE__*/_react["default"].createElement(_Icon["default"], null, "visibility"))),
      startAdornment: /*#__PURE__*/_react["default"].createElement(_InputAdornment["default"], {
        className: classes.inputAdornmentStart,
        position: "start"
      }, "".concat(authorizationHeader, ": ").concat(prefix))
    }
  }), securitySchemeType !== 'BASIC' && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    onClick: securitySchemeType === 'API-KEY' ? generateApiKey : generateAccessToken,
    color: "secondary",
    variant: "outlined",
    className: classes.genKeyButton,
    disabled: !user || subscriptions && subscriptions.length === 0
  }, isUpdating && /*#__PURE__*/_react["default"].createElement(_core.CircularProgress, {
    size: 15
  }), /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Apis.Details.ApiCOnsole.generate.test.key",
    defaultMessage: "GET TEST KEY "
  })), /*#__PURE__*/_react["default"].createElement(_core.Tooltip, {
    placement: "right",
    title: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      id: "Apis.Details.TryOutConsole.access.token.tooltip",
      defaultMessage: 'You can use your existing Access Token or ' + 'you can generate a new Test Key.'
    })
  }, /*#__PURE__*/_react["default"].createElement(_HelpOutline["default"], {
    className: classes.tooltip
  }))))), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    display: "flex",
    justifyContent: "center",
    className: classes.gatewayEnvironment
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    xs: 12,
    md: 6,
    item: true
  }, (environments && environments.length > 0 || labels && labels.length > 0) && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h5",
    color: "textPrimary",
    className: classes.categoryHeading
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "api.console.gateway.heading",
    defaultMessage: "Gateway"
  })), /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    fullWidth: true,
    select: true,
    label: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      defaultMessage: "Environment",
      id: "Apis.Details.ApiConsole.environment"
    }),
    value: selectedEnvironment || environments && environments[0],
    name: "selectedEnvironment",
    onChange: handleChanges,
    helperText: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      defaultMessage: "Please select an environment",
      id: "Apis.Details.ApiConsole.SelectAppPanel.environment"
    }),
    margin: "normal",
    variant: "outlined"
  }, environments && environments.length > 0 && /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    value: "",
    disabled: true,
    className: classes.menuItem
  }, /*#__PURE__*/_react["default"].createElement("em", null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "api.gateways",
    defaultMessage: "API Gateways"
  }))), environments && environments.map(function (env) {
    return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      value: env,
      key: env,
      className: classes.menuItem
    }, env);
  }), labels && labels.length > 0 && /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    value: "",
    disabled: true
  }, /*#__PURE__*/_react["default"].createElement("em", null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "micro.gateways",
    defaultMessage: "Microgateways",
    className: classes.menuItem
  }))), labels && labels.map(function (label) {
    return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      value: label,
      key: label,
      className: classes.menuItem
    }, label);
  }))))))));
}

TryOutController.propTypes = {
  classes: _propTypes["default"].shape({
    paper: _propTypes["default"].string.isRequired,
    grid: _propTypes["default"].string.isRequired,
    inputAdornmentStart: _propTypes["default"].string.isRequired,
    centerItems: _propTypes["default"].string.isRequired
  }).isRequired
};

var _default = (0, _withStyles["default"])(_styles.makeStyles)(TryOutController);

exports["default"] = _default;