"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = GraphQLConsole;

var _react = _interopRequireWildcard(require("react"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _reactIntl = require("react-intl");

var _styles = require("@material-ui/core/styles");

var _AuthManager = _interopRequireDefault(require("AppData/AuthManager"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _GraphQLUI = _interopRequireDefault(require("./GraphQLUI"));

var _TryOutController = _interopRequireDefault(require("../ApiConsole/TryOutController"));

var _ApiContext = require("../ApiContext");

var _api = _interopRequireDefault(require("../../../../data/api"));

var _Progress = _interopRequireDefault(require("../../../Shared/Progress"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    buttonIcon: {
      marginRight: 10
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
    userNotificationPaper: {
      padding: theme.spacing(2)
    },
    titleSub: {
      marginLeft: theme.spacing(2),
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    }
  };
});

function GraphQLConsole() {
  var classes = useStyles();

  var _useContext = (0, _react.useContext)(_ApiContext.ApiContext),
      api = _useContext.api;

  var environmentObject = api.endpointURLs;

  var _useState = (0, _react.useState)(environmentObject[0].URLs),
      _useState2 = _slicedToArray(_useState, 2),
      URLs = _useState2[0],
      setURLs = _useState2[1];

  var _useState3 = (0, _react.useState)('OAUTH'),
      _useState4 = _slicedToArray(_useState3, 2),
      securitySchemeType = _useState4[0],
      setSecurityScheme = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      notFound = _useState6[0],
      setNotFound = _useState6[1];

  var _useState7 = (0, _react.useState)(''),
      _useState8 = _slicedToArray(_useState7, 2),
      username = _useState8[0],
      setUsername = _useState8[1];

  var _useState9 = (0, _react.useState)(''),
      _useState10 = _slicedToArray(_useState9, 2),
      password = _useState10[0],
      setPassword = _useState10[1];

  var _useState11 = (0, _react.useState)(),
      _useState12 = _slicedToArray(_useState11, 2),
      selectedEnvironment = _useState12[0],
      setSelectedEnvironment = _useState12[1];

  var _useState13 = (0, _react.useState)(),
      _useState14 = _slicedToArray(_useState13, 2),
      environments = _useState14[0],
      setEnvironments = _useState14[1];

  var _useState15 = (0, _react.useState)([]),
      _useState16 = _slicedToArray(_useState15, 2),
      scopes = _useState16[0],
      setScopes = _useState16[1];

  var _useState17 = (0, _react.useState)(),
      _useState18 = _slicedToArray(_useState17, 2),
      productionAccessToken = _useState18[0],
      setProductionAccessToken = _useState18[1];

  var _useState19 = (0, _react.useState)(),
      _useState20 = _slicedToArray(_useState19, 2),
      sandboxAccessToken = _useState20[0],
      setSandboxAccessToken = _useState20[1];

  var _useState21 = (0, _react.useState)('PRODUCTION'),
      _useState22 = _slicedToArray(_useState21, 2),
      selectedKeyType = _useState22[0],
      setSelectedKey = _useState22[1];

  var _useState23 = (0, _react.useState)(''),
      _useState24 = _slicedToArray(_useState23, 2),
      sandboxApiKey = _useState24[0],
      setSandboxApiKey = _useState24[1];

  var _useState25 = (0, _react.useState)(''),
      _useState26 = _slicedToArray(_useState25, 2),
      productionApiKey = _useState26[0],
      setProductionApiKey = _useState26[1];

  var _useState27 = (0, _react.useState)([]),
      _useState28 = _slicedToArray(_useState27, 2),
      keys = _useState28[0],
      setKeys = _useState28[1];

  var _useState29 = (0, _react.useState)(),
      _useState30 = _slicedToArray(_useState29, 2),
      labels = _useState30[0],
      setLabels = _useState30[1];

  var user = _AuthManager["default"].getUser();

  (0, _react.useEffect)(function () {
    var apiID = api.id;
    var apiClient = new _api["default"]();
    var promiseAPI = apiClient.getAPIById(apiID);
    promiseAPI.then(function (apiResponse) {
      var apiData = apiResponse.obj;

      if (apiData.endpointURLs) {
        var environment = apiData.endpointURLs.map(function (endpoint) {
          return endpoint.environmentName;
        });
        setEnvironments(environment);
      }

      if (apiData.labels) {
        var Label = apiData.labels.map(function (label) {
          return label.name;
        });
        setLabels(Label);
      }

      if (apiData.scopes) {
        var scopeList = apiData.scopes.map(function (scope) {
          return scope.name;
        });
        setScopes(scopeList);
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
   * Load the access token for given key type
   */

  function updateAccessToken() {
    var accessToken;

    if (keys.get(selectedKeyType)) {
      accessToken = keys.get(selectedKeyType).token.accessToken;
    }

    if (selectedKeyType === 'PRODUCTION') {
      setProductionAccessToken(accessToken);
    } else {
      setSandboxAccessToken(accessToken);
    }
  }
  /**
   * set Password
   * @param {*} selectedKey
   * @param {*} isUpdateToken
   */


  function setSelectedKeyType(selectedKey, isUpdateToken) {
    if (isUpdateToken) {
      setSelectedKey(selectedKey, updateAccessToken);
    } else {
      setSelectedKey(selectedKey);
    }
  }

  function accessTokenProvider() {
    if (securitySchemeType === 'BASIC') {
      var credentials = username + ':' + password;
      return btoa(credentials);
    }

    if (securitySchemeType === 'API-KEY') {
      if (selectedKeyType === 'PRODUCTION') {
        return productionApiKey;
      } else {
        return sandboxApiKey;
      }
    } else if (selectedKeyType === 'PRODUCTION') {
      return productionAccessToken;
    } else {
      return sandboxAccessToken;
    }
  }

  if (api == null) {
    return /*#__PURE__*/_react["default"].createElement(_Progress["default"], null);
  }

  if (notFound) {
    return 'API Not found !';
  }

  var isApiKeyEnabled = false;
  var authorizationHeader = api.authorizationHeader ? api.authorizationHeader : 'Authorization';

  if (api && api.securityScheme) {
    isApiKeyEnabled = api.securityScheme.includes('api_key');

    if (isApiKeyEnabled && securitySchemeType === 'API-KEY') {
      authorizationHeader = 'apikey';
    }
  }

  var isPrototypedAPI = api.lifeCycleStatus && api.lifeCycleStatus.toLowerCase() === 'prototyped';
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h4",
    className: classes.titleSub
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Apis.Details.GraphQLConsole.GraphQLConsole.title",
    defaultMessage: "Try Out"
  })), /*#__PURE__*/_react["default"].createElement(_Paper["default"], {
    className: classes.paper
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    className: classes.grid
  }, !isPrototypedAPI && !user && /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    md: 6
  }, /*#__PURE__*/_react["default"].createElement(_Paper["default"], {
    className: classes.userNotificationPaper
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h5",
    component: "h3"
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], null, "warning"), ' ', /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "notice",
    defaultMessage: "Notice"
  })), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    component: "p"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "api.console.require.access.token",
    defaultMessage: 'You need an access token to try the API. Please log ' + 'in and subscribe to the API to generate an access token. If you already ' + 'have an access token, please provide it below.'
  }))))), /*#__PURE__*/_react["default"].createElement(_TryOutController["default"], {
    setSecurityScheme: setSecurityScheme,
    securitySchemeType: securitySchemeType,
    setSelectedEnvironment: setSelectedEnvironment,
    selectedEnvironment: selectedEnvironment,
    productionAccessToken: productionAccessToken,
    setProductionAccessToken: setProductionAccessToken,
    sandboxAccessToken: sandboxAccessToken,
    setSandboxAccessToken: setSandboxAccessToken,
    environments: environments,
    scopes: scopes,
    labels: labels,
    setUsername: setUsername,
    setPassword: setPassword,
    username: username,
    password: password,
    setSelectedKeyType: setSelectedKeyType,
    selectedKeyType: selectedKeyType,
    setKeys: setKeys,
    setURLs: setURLs,
    setProductionApiKey: setProductionApiKey,
    setSandboxApiKey: setSandboxApiKey,
    productionApiKey: productionApiKey,
    sandboxApiKey: sandboxApiKey,
    environmentObject: environmentObject
  }), /*#__PURE__*/_react["default"].createElement(_Paper["default"], null)), /*#__PURE__*/_react["default"].createElement(_Paper["default"], {
    className: classes.paper
  }, /*#__PURE__*/_react["default"].createElement(_GraphQLUI["default"], {
    authorizationHeader: authorizationHeader,
    URLs: URLs,
    securitySchemeType: securitySchemeType,
    accessTokenProvider: accessTokenProvider
  })));
}

GraphQLConsole.propTypes = {
  classes: _propTypes["default"].shape({
    paper: _propTypes["default"].string.isRequired,
    titleSub: _propTypes["default"].string.isRequired,
    root: _propTypes["default"].string.isRequired
  }).isRequired
};