"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _qs = _interopRequireDefault(require("qs"));

var _styles = require("@material-ui/core/styles");

var _Settings = _interopRequireDefault(require("Settings"));

var _Tenants = _interopRequireDefault(require("AppData/Tenants"));

var _queryString = _interopRequireDefault(require("query-string"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SettingsContext = _interopRequireDefault(require("AppComponents/Shared/SettingsContext"));

var _RedirectToLogin = _interopRequireDefault(require("AppComponents/Login/RedirectToLogin"));

var _api = _interopRequireDefault(require("./data/api"));

var _index = _interopRequireDefault(require("./components/Base/index"));

var _AuthManager = _interopRequireDefault(require("./data/AuthManager"));

var _Loading = _interopRequireDefault(require("./components/Base/Loading/Loading"));

var _Utils = _interopRequireDefault(require("./data/Utils"));

var _User = _interopRequireDefault(require("./data/User"));

var _ConfigManager = _interopRequireDefault(require("./data/ConfigManager"));

var _AppRouts = _interopRequireDefault(require("./AppRouts"));

var _TenantListing = _interopRequireDefault(require("./TenantListing"));

var _Constants = _interopRequireDefault(require("./data/Constants"));

var _LoginDenied = _interopRequireDefault(require("./LoginDenied"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
 * Render protected application paths
 */
var ProtectedApp = /*#__PURE__*/function (_Component) {
  _inherits(ProtectedApp, _Component);

  var _super = _createSuper(ProtectedApp);

  /**
   *  constructor
   * @param {*} props props passed to constructor
   */
  function ProtectedApp(props) {
    var _this;

    _classCallCheck(this, ProtectedApp);

    _this = _super.call(this, props);
    _this.state = {
      userResolved: false,
      scopesFound: false,
      tenantResolved: false,
      tenantList: [],
      clientId: _Utils["default"].getCookieWithoutEnvironment(_User["default"].CONST.DEVPORTAL_CLIENT_ID),
      sessionStateCookie: _Utils["default"].getCookieWithoutEnvironment(_User["default"].CONST.DEVPORTAL_SESSION_STATE)
    };
    _this.environments = [];
    _this.checkSession = _this.checkSession.bind(_assertThisInitialized(_this));
    _this.handleMessage = _this.handleMessage.bind(_assertThisInitialized(_this));
    /* TODO: need to fix the header to avoid conflicting with messages ~tmkb */

    return _this;
  }
  /**
   *  Check if data available ,if not get the user info from existing token information
   */


  _createClass(ProtectedApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      window.addEventListener('message', this.handleMessage);
      var search = this.props.location.search;
      var _this$context = this.context,
          setTenantDomain = _this$context.setTenantDomain,
          setSettings = _this$context.setSettings;
      var customUrlEnabledDomain = _Settings["default"].app.customUrl.tenantDomain;
      var tenant = null;

      if (customUrlEnabledDomain !== 'null') {
        tenant = customUrlEnabledDomain;
      } else {
        tenant = _queryString["default"].parse(search).tenant;
      }

      var tenantApi = new _Tenants["default"]();
      tenantApi.getTenantsByState().then(function (response) {
        var list = response.body.list;

        if (list.length > 0) {
          // Check if tenant domain is present as a query param if not retrieve the tenant list,
          // only set the list in the state
          if (tenant) {
            _this2.setState({
              tenantResolved: true,
              tenantList: list
            }, setTenantDomain(tenant));
          } else {
            _this2.setState({
              tenantResolved: true,
              tenantList: list
            });
          }
        } else {
          _this2.setState({
            tenantResolved: true
          });
        }
      })["catch"](function (error) {
        console.error('error when getting tenants ' + error);
      });

      _ConfigManager["default"].getConfigs().environments.then(function (response) {
        _this2.environments = response.data.environments;
      })["catch"](function (error) {
        console.error('Error while receiving environment configurations : ', error);
      });

      var user = _AuthManager["default"].getUser(); // Passive user check


      if (user) {
        // If token exisit in cookies and user info available in local storage
        var hasViewScope = user.scopes.includes('apim:subscribe');

        if (hasViewScope) {
          this.checkSession();
          this.setState({
            userResolved: true,
            scopesFound: true
          });
        } else {
          console.log('No relevant scopes found, redirecting to Anonymous View');
          this.setState({
            userResolved: true,
            notEnoughPermission: true
          });
        }
      } else {
        // If no user data available , Get the user info from existing token information
        // This could happen when OAuth code authentication took place and could send
        // user information via redirection
        var userPromise = _AuthManager["default"].getUserFromToken(); // Active user check


        userPromise.then(function (loggedUser) {
          if (loggedUser != null) {
            var _hasViewScope = loggedUser.scopes.includes('apim:subscribe');

            if (_hasViewScope) {
              _this2.setState({
                userResolved: true,
                scopesFound: true
              }); // Update the settings context with settings retrived from authenticated user


              var api = new _api["default"]();
              var promisedSettings = api.getSettings();
              promisedSettings.then(function (response) {
                setSettings(response.body);
              })["catch"](function (error) {
                console.error('Error while receiving settings : ', error);
              });

              _this2.checkSession();
            } else {
              console.log('No relevant scopes found, redirecting to Anonymous View');

              _this2.setState({
                userResolved: true
              });
            }
          } else {
            console.log('User returned with null, redirect to Anonymous View');

            _this2.setState({
              userResolved: true
            });
          }
        })["catch"](function (error) {
          if (error && error.message === _Constants["default"].errorCodes.INSUFFICIENT_PREVILEGES) {
            _this2.setState({
              userResolved: true,
              notEnoughPermission: true
            });
          } else {
            console.log('Error: ' + error + ',redirecting to Anonymous View');

            _this2.setState({
              userResolved: true
            });
          }
        });
      }
    }
  }, {
    key: "handleMessage",
    value: function handleMessage(e) {
      if (e.data === 'changed') {
        window.location = _Settings["default"].app.context + '/services/configs?loginPrompt=false';
      }
    }
    /**
     * Invoke checksession oidc endpoint.
     */

  }, {
    key: "checkSession",
    value: function checkSession() {
      var _this3 = this;

      setInterval(function () {
        var _this3$state = _this3.state,
            clientId = _this3$state.clientId,
            sessionStateCookie = _this3$state.sessionStateCookie;
        var msg = clientId + ' ' + sessionStateCookie;
        document.getElementById('iframeOP').contentWindow.postMessage(msg, _Settings["default"].idp.origin);
      }, 2000);
    }
    /**
     * Change the environment with "environment" query parameter
     * @return {String} environment name in the query param
     */

  }, {
    key: "handleEnvironmentQueryParam",
    value: function handleEnvironmentQueryParam() {
      var location = this.props.location;

      var _location = _objectSpread({}, location),
          search = _location.search;

      var query = search.replace(/^\?/, '');
      /* With QS version up we can directly use {ignoreQueryPrefix: true} option */

      var queryParams = _qs["default"].parse(query);

      var environmentName = queryParams.environment;

      if (!environmentName || _Utils["default"].getEnvironment() === environmentName) {
        // no environment query param or the same environment
        return environmentName;
      }

      var environmentId = _Utils["default"].getEnvironmentID(this.environments, environmentName);

      if (environmentId === -1) {
        return environmentName;
      }

      var environment = this.environments[environmentId];

      _Utils["default"].setEnvironment(environment);

      return environmentName;
    }
    /**
     *  renders the compopnent
     * @returns {Component}
     */

  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          userResolved = _this$state.userResolved,
          tenantList = _this$state.tenantList,
          notEnoughPermission = _this$state.notEnoughPermission,
          tenantResolved = _this$state.tenantResolved,
          clientId = _this$state.clientId;
      var checkSessionURL = _Settings["default"].idp.checkSessionEndpoint + '?client_id=' + clientId + '&redirect_uri=' + window.location.origin + _Settings["default"].app.context + '/services/auth/callback/login';
      var _this$context2 = this.context,
          tenantDomain = _this$context2.tenantDomain,
          settings = _this$context2.settings;

      if (!userResolved) {
        return /*#__PURE__*/_react["default"].createElement(_Loading["default"], null);
      }

      var scopesFound = this.state.scopesFound;

      var isUserFound = _AuthManager["default"].getUser();

      var isAuthenticated = false;

      if (scopesFound && isUserFound) {
        isAuthenticated = true;
      }

      if (notEnoughPermission) {
        return /*#__PURE__*/_react["default"].createElement(_LoginDenied["default"], {
          IsAnonymousModeEnabled: settings.IsAnonymousModeEnabled
        });
      } // Waiting till the tenant list is retrieved


      if (!tenantResolved) {
        return /*#__PURE__*/_react["default"].createElement(_Loading["default"], null);
      } // user is redirected to tenant listing page if there are any tenants present and
      // if the user is not authenticated and if there is no tenant domain present in the context
      // tenantDomain contains INVALID when the tenant does not exist


      if (tenantList.length > 0 && (tenantDomain === 'INVALID' || !isAuthenticated && tenantDomain === null)) {
        return /*#__PURE__*/_react["default"].createElement(_TenantListing["default"], {
          tenantList: tenantList
        });
      }

      if (!isAuthenticated && !settings.IsAnonymousModeEnabled && !sessionStorage.getItem(_Constants["default"].ISLOGINPERMITTED)) {
        return /*#__PURE__*/_react["default"].createElement(_RedirectToLogin["default"], null);
      }

      if (settings.IsAnonymousModeEnabled && sessionStorage.getItem(_Constants["default"].ISLOGINPERMITTED)) {
        sessionStorage.removeItem(_Constants["default"].ISLOGINPERMITTED);
      } // check for widget=true in the query params. If it's present we render without <Base> component.


      var pageUrl = new URL(window.location);
      var isWidget = pageUrl.searchParams.get('widget');

      if (isWidget) {
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("iframe", {
          title: "iframeOP",
          id: "iframeOP",
          src: checkSessionURL,
          width: "0px",
          height: "0px"
        }), /*#__PURE__*/_react["default"].createElement(_AppRouts["default"], {
          isAuthenticated: isAuthenticated,
          isUserFound: isUserFound
        }));
      }
      /**
       * Note: AuthManager.getUser() method is a passive check, which simply
       * check the user availability in browser storage,
       * Not actively check validity of access token from backend
       * @returns {Component}
       */


      return /*#__PURE__*/_react["default"].createElement(_index["default"], null, /*#__PURE__*/_react["default"].createElement("iframe", {
        title: "iframeOP",
        id: "iframeOP",
        src: checkSessionURL,
        width: "0px",
        height: "0px"
      }), /*#__PURE__*/_react["default"].createElement(_AppRouts["default"], {
        isAuthenticated: isAuthenticated,
        isUserFound: isUserFound
      }));
    }
  }]);

  return ProtectedApp;
}(_react.Component);

ProtectedApp.contextType = _SettingsContext["default"];
ProtectedApp.propTypes = {
  location: _propTypes["default"].shape({
    search: _propTypes["default"].string.isRequired
  }).isRequired
};

var _default = (0, _styles.withTheme)(ProtectedApp);

exports["default"] = _default;