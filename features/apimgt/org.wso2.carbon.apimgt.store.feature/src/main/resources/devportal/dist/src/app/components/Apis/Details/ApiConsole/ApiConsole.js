"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactIntl = require("react-intl");

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _AuthManager = _interopRequireDefault(require("AppData/AuthManager"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _CloudDownloadRounded = _interopRequireDefault(require("@material-ui/icons/CloudDownloadRounded"));

var _ApiContext = require("../ApiContext");

var _Progress = _interopRequireDefault(require("../../../Shared/Progress"));

var _api = _interopRequireDefault(require("../../../../data/api"));

var _SwaggerUI = _interopRequireDefault(require("./SwaggerUI"));

var _TryOutController = _interopRequireDefault(require("./TryOutController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

/**
 * @inheritdoc
 * @param {*} theme theme
 */
var styles = function styles(theme) {
  return {
    buttonIcon: {
      marginRight: 10
    },
    paper: {
      margin: theme.spacing(1),
      padding: theme.spacing(1),
      '& span, & h5, & label, & td, & li, & div, & input': {
        color: theme.palette.getContrastText(theme.palette.background.paper)
      }
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
      paddingBottom: theme.spacing(2),
      color: theme.palette.getContrastText(theme.palette.background["default"])
    },
    swaggerUIPaper: {
      backgroundColor: theme.custom.apiDetailPages.swaggerUIBackground
    }
  };
};
/**
 *
 *
 * @class ApiConsole
 * @extends {React.Component}
 */


var ApiConsole = /*#__PURE__*/function (_React$Component) {
  _inherits(ApiConsole, _React$Component);

  var _super = _createSuper(ApiConsole);

  /**
   *Creates an instance of ApiConsole.
   * @param {*} props properties
   * @memberof ApiConsole
   */
  function ApiConsole(props) {
    var _this;

    _classCallCheck(this, ApiConsole);

    _this = _super.call(this, props);
    _this.state = {
      securitySchemeType: 'OAUTH',
      username: '',
      password: '',
      scopes: [],
      selectedKeyType: 'PRODUCTION',
      keys: []
    };
    _this.accessTokenProvider = _this.accessTokenProvider.bind(_assertThisInitialized(_this));
    _this.updateSwagger = _this.updateSwagger.bind(_assertThisInitialized(_this));
    _this.setSecurityScheme = _this.setSecurityScheme.bind(_assertThisInitialized(_this));
    _this.setSelectedEnvironment = _this.setSelectedEnvironment.bind(_assertThisInitialized(_this));
    _this.setProductionAccessToken = _this.setProductionAccessToken.bind(_assertThisInitialized(_this));
    _this.setSandboxAccessToken = _this.setSandboxAccessToken.bind(_assertThisInitialized(_this));
    _this.setUsername = _this.setUsername.bind(_assertThisInitialized(_this));
    _this.setPassword = _this.setPassword.bind(_assertThisInitialized(_this));
    _this.setSelectedKeyType = _this.setSelectedKeyType.bind(_assertThisInitialized(_this));
    _this.setKeys = _this.setKeys.bind(_assertThisInitialized(_this));
    _this.updateAccessToken = _this.updateAccessToken.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * @memberof ApiConsole
   */


  _createClass(ApiConsole, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var api = this.context.api;
      var apiID = api.id;

      var user = _AuthManager["default"].getUser();

      var apiData;
      var environments;
      var labels;
      var selectedEnvironment;
      var swagger;
      var productionAccessToken;
      var sandboxAccessToken;
      this.apiClient = new _api["default"]();
      var promiseAPI = this.apiClient.getAPIById(apiID);
      promiseAPI.then(function (apiResponse) {
        apiData = apiResponse.obj;

        if (apiData.endpointURLs) {
          environments = apiData.endpointURLs.map(function (endpoint) {
            return endpoint.environmentName;
          });
        }

        if (apiData.labels) {
          labels = apiData.labels.map(function (label) {
            return label.name;
          });
        }

        if (apiData.scopes) {
          var scopeList = apiData.scopes.map(function (scope) {
            return scope.name;
          });

          _this2.setState({
            scopes: scopeList
          });
        }

        if (environments && environments.length > 0) {
          var _environments = environments;

          var _environments2 = _slicedToArray(_environments, 1);

          selectedEnvironment = _environments2[0];
          return _this2.apiClient.getSwaggerByAPIIdAndEnvironment(apiID, selectedEnvironment);
        } else if (labels && labels.length > 0) {
          var _labels = labels;

          var _labels2 = _slicedToArray(_labels, 1);

          selectedEnvironment = _labels2[0];
          return _this2.apiClient.getSwaggerByAPIIdAndLabel(apiID, selectedEnvironment);
        } else {
          return _this2.apiClient.getSwaggerByAPIId(apiID);
        }
      }).then(function (swaggerResponse) {
        swagger = swaggerResponse.obj;

        if (user != null) {
          _this2.setState({
            api: apiData,
            swagger: swagger,
            environments: environments,
            labels: labels,
            productionAccessToken: productionAccessToken,
            sandboxAccessToken: sandboxAccessToken
          });

          return _this2.apiClient.getSubscriptions(apiID);
        } else {
          return null;
        }
      })["catch"](function (error) {
        if (process.env.NODE_ENV !== 'production') {
          console.error(error);
        }

        var status = error.status;

        if (status === 404) {
          _this2.setState({
            notFound: true
          });
        }
      });
    }
    /**
     * Set SecurityScheme value
     * @memberof ApiConsole
     */

  }, {
    key: "setSecurityScheme",
    value: function setSecurityScheme(securityScheme) {
      this.setState({
        securitySchemeType: securityScheme
      });
    }
    /**
     * Set Selected Environment
     * @memberof ApiConsole
     */

  }, {
    key: "setSelectedEnvironment",
    value: function setSelectedEnvironment(selectedEnvironment) {
      this.setState({
        selectedEnvironment: selectedEnvironment
      });
    }
    /**
     * Set Production Access Token
     * @memberof ApiConsole
     */

  }, {
    key: "setProductionAccessToken",
    value: function setProductionAccessToken(productionAccessToken) {
      this.setState({
        productionAccessToken: productionAccessToken
      });
    }
    /**
     * Set Sandbox Access Token
     * @memberof ApiConsole
     */

  }, {
    key: "setSandboxAccessToken",
    value: function setSandboxAccessToken(sandboxAccessToken) {
      this.setState({
        sandboxAccessToken: sandboxAccessToken
      });
    }
    /**
     * Set Username
     * @memberof ApiConsole
     */

  }, {
    key: "setUsername",
    value: function setUsername(username) {
      this.setState({
        username: username
      });
    }
    /**
     * Set Password
     * @memberof ApiConsole
     */

  }, {
    key: "setPassword",
    value: function setPassword(password) {
      this.setState({
        password: password
      });
    }
    /**
     * Set Password
     * @memberof ApiConsole
     */

  }, {
    key: "setSelectedKeyType",
    value: function setSelectedKeyType(selectedKeyType, isUpdateToken) {
      if (isUpdateToken) {
        this.setState({
          selectedKeyType: selectedKeyType
        }, this.updateAccessToken);
      } else {
        this.setState({
          selectedKeyType: selectedKeyType
        });
      }
    }
  }, {
    key: "setKeys",
    value: function setKeys(keys) {
      this.setState({
        keys: keys
      });
    }
    /**
     * Load the access token for given key type
     * @memberof TryOutController
     */

  }, {
    key: "updateAccessToken",
    value: function updateAccessToken() {
      var _this$state = this.state,
          keys = _this$state.keys,
          selectedKeyType = _this$state.selectedKeyType;
      var accessToken;

      if (keys.get(selectedKeyType)) {
        accessToken = keys.get(selectedKeyType).token.accessToken;
      }

      if (selectedKeyType === 'PRODUCTION') {
        this.setProductionAccessToken(accessToken);
      } else {
        this.setSandboxAccessToken(accessToken);
      }
    }
    /**
     *
     * Provids the access token to the Swagger UI
     * @returns {*} access token
     * @memberof ApiConsole
     */

  }, {
    key: "accessTokenProvider",
    value: function accessTokenProvider() {
      var _this$state2 = this.state,
          securitySchemeType = _this$state2.securitySchemeType,
          username = _this$state2.username,
          password = _this$state2.password,
          productionAccessToken = _this$state2.productionAccessToken,
          sandboxAccessToken = _this$state2.sandboxAccessToken,
          selectedKeyType = _this$state2.selectedKeyType;

      if (securitySchemeType === 'BASIC') {
        var credentials = username + ':' + password;
        return btoa(credentials);
      }

      if (selectedKeyType === 'PRODUCTION') {
        return productionAccessToken;
      } else {
        return sandboxAccessToken;
      }
    }
    /**
     * Load the swagger file of the selected environemnt
     * @memberof ApiConsole
     */

  }, {
    key: "updateSwagger",
    value: function updateSwagger() {
      var _this3 = this;

      var _this$state3 = this.state,
          selectedEnvironment = _this$state3.selectedEnvironment,
          api = _this$state3.api,
          environments = _this$state3.environments;
      var promiseSwagger;

      if (selectedEnvironment) {
        if (environments.includes(selectedEnvironment)) {
          promiseSwagger = this.apiClient.getSwaggerByAPIIdAndEnvironment(api.id, selectedEnvironment);
        } else {
          promiseSwagger = this.apiClient.getSwaggerByAPIIdAndLabel(api.id, selectedEnvironment);
        }
      } else {
        promiseSwagger = this.apiClient.getSwaggerByAPIId(api.id);
      }

      promiseSwagger.then(function (swaggerResponse) {
        _this3.setState({
          swagger: swaggerResponse.obj
        });
      });
    }
    /**
     * @inheritdoc
     * @memberof ApiConsole
     */

  }, {
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var _this$state4 = this.state,
          api = _this$state4.api,
          notFound = _this$state4.notFound,
          swagger = _this$state4.swagger,
          securitySchemeType = _this$state4.securitySchemeType,
          selectedEnvironment = _this$state4.selectedEnvironment,
          labels = _this$state4.labels,
          environments = _this$state4.environments,
          scopes = _this$state4.scopes,
          username = _this$state4.username,
          password = _this$state4.password,
          productionAccessToken = _this$state4.productionAccessToken,
          sandboxAccessToken = _this$state4.sandboxAccessToken,
          selectedKeyType = _this$state4.selectedKeyType;

      var user = _AuthManager["default"].getUser();

      var downloadSwagger = JSON.stringify(_objectSpread({}, swagger));
      var downloadLink = 'data:text/json;charset=utf-8, ' + encodeURIComponent(downloadSwagger);
      var fileName = 'swagger.json';

      if (api == null || swagger == null) {
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
        id: "Apis.Details.ApiConsole.ApiConsole.title",
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
        setSecurityScheme: this.setSecurityScheme,
        securitySchemeType: securitySchemeType,
        setSelectedEnvironment: this.setSelectedEnvironment,
        selectedEnvironment: selectedEnvironment,
        productionAccessToken: productionAccessToken,
        setProductionAccessToken: this.setProductionAccessToken,
        sandboxAccessToken: sandboxAccessToken,
        setSandboxAccessToken: this.setSandboxAccessToken,
        swagger: swagger,
        labels: labels,
        environments: environments,
        scopes: scopes,
        setUsername: this.setUsername,
        setPassword: this.setPassword,
        username: username,
        password: password,
        setSelectedKeyType: this.setSelectedKeyType,
        selectedKeyType: selectedKeyType,
        updateSwagger: this.updateSwagger,
        setKeys: this.setKeys
      }), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        container: true
      }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        xs: 10,
        item: true
      }), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        xs: 2,
        item: true
      }, /*#__PURE__*/_react["default"].createElement("a", {
        href: downloadLink,
        download: fileName
      }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        size: "small"
      }, /*#__PURE__*/_react["default"].createElement(_CloudDownloadRounded["default"], {
        className: classes.buttonIcon
      }), /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Apis.Details.APIConsole.APIConsole.download.swagger",
        defaultMessage: "Swagger ( /swagger.json )"
      })))))), /*#__PURE__*/_react["default"].createElement(_Paper["default"], {
        className: classes.swaggerUIPaper
      }, /*#__PURE__*/_react["default"].createElement(_SwaggerUI["default"], {
        api: this.state.api,
        accessTokenProvider: this.accessTokenProvider,
        spec: swagger,
        authorizationHeader: authorizationHeader,
        securitySchemeType: securitySchemeType
      })));
    }
  }]);

  return ApiConsole;
}(_react["default"].Component);

ApiConsole.propTypes = {
  classes: _propTypes["default"].shape({
    paper: _propTypes["default"].string.isRequired,
    titleSub: _propTypes["default"].string.isRequired,
    grid: _propTypes["default"].string.isRequired,
    userNotificationPaper: _propTypes["default"].string.isRequired,
    buttonIcon: _propTypes["default"].string.isRequired
  }).isRequired
};
ApiConsole.contextType = _ApiContext.ApiContext;

var _default = (0, _styles.withStyles)(styles)(ApiConsole);

exports["default"] = _default;