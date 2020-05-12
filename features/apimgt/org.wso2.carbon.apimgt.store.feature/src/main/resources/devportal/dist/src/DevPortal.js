"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactHelmet = require("react-helmet");

var _styles = require("@material-ui/core/styles");

var _reactIntl = require("react-intl");

var _Config = _interopRequireDefault(require("Config"));

var _lodash = _interopRequireDefault(require("lodash.merge"));

var _lodash2 = _interopRequireDefault(require("lodash.clonedeep"));

var _jss = require("jss");

var _jssRtl = _interopRequireDefault(require("jss-rtl"));

var _Utils = _interopRequireDefault(require("AppData/Utils"));

var _Settings = _interopRequireDefault(require("Settings"));

var _Logout = _interopRequireDefault(require("./app/components/Logout"));

var _Progress = _interopRequireDefault(require("./app/components/Shared/Progress"));

var _SettingsContext = require("./app/components/Shared/SettingsContext");

var _api = _interopRequireDefault(require("./app/data/api"));

var _BrowserRouter = _interopRequireDefault(require("./app/components/Base/CustomRouter/BrowserRouter"));

var _defaultTheme = _interopRequireDefault(require("./defaultTheme"));

var _AuthManager = _interopRequireDefault(require("./app/data/AuthManager"));

var _Loading = _interopRequireDefault(require("./app/components/Base/Loading/Loading"));

var _Constants = _interopRequireDefault(require("./app/data/Constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var protectedApp = (0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./app/ProtectedApp'));
  });
}); // Configure JSS

var jss = (0, _jss.create)({
  plugins: [].concat(_toConsumableArray((0, _styles.jssPreset)().plugins), [(0, _jssRtl["default"])()])
});
/**
 * Root DevPortal component
 *
 * @class DevPortal
 * @extends {React.Component}
 */

var DevPortal = /*#__PURE__*/function (_React$Component) {
  _inherits(DevPortal, _React$Component);

  var _super = _createSuper(DevPortal);

  /**
   *Creates an instance of DevPortal.
   * @param {*} props Properties passed from the parent component
   * @memberof DevPortal
   */
  function DevPortal(props) {
    var _this;

    _classCallCheck(this, DevPortal);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "setTenantDomain", function (tenantDomain) {
      _this.setState({
        tenantDomain: tenantDomain
      });

      if (tenantDomain === 'carbon.super') {
        _this.setState({
          theme: _this.systemTheme
        });
      } else {
        _this.setTenantTheme(tenantDomain);
      }
    });

    _this.state = {
      messages: {},
      settings: null,
      tenantDomain: null,
      theme: null,
      isNonAnonymous: false,
      lanuage: null
    };
    _this.systemTheme = (0, _lodash["default"])((0, _lodash2["default"])(_defaultTheme["default"]), _Config["default"]);
    _this.setTenantTheme = _this.setTenantTheme.bind(_assertThisInitialized(_this));
    _this.setSettings = _this.setSettings.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   *  Mounting the components
   */


  _createClass(DevPortal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var api = new _api["default"]();
      var promisedSettings = api.getSettings();
      promisedSettings.then(function (response) {
        _this2.setSettings(response.body);

        if (!_this2.state.settings.IsAnonymousModeEnabled) {
          _this2.setState({
            isNonAnonymous: true
          });
        }

        if (_Settings["default"].app.isPassive && !_AuthManager["default"].getUser() && !sessionStorage.getItem(_Constants["default"].ISLOGINPERMITTED) && !_this2.state.isNonAnonymous) {
          _this2.checkLoginUser();
        }
      })["catch"](function (error) {
        console.error('Error while receiving settings : ', error);
      });
      var urlParams = new URLSearchParams(window.location.search);

      if (urlParams.get('tenant') === null || urlParams.get('tenant') === 'carbon.super') {
        this.updateLocale();
        this.setState({
          theme: this.systemTheme
        });
      } else {
        this.setTenantTheme(urlParams.get('tenant'));
      }
    }
    /**
    * Load locale file.
    *
    * @param {string} locale Locale name
    */

  }, {
    key: "loadLocale",
    value: function loadLocale() {
      var _this3 = this;

      var locale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en';
      fetch("".concat(_Settings["default"].app.context, "/site/public/locales/").concat(locale, ".json")).then(function (resp) {
        if (resp.status === 200) {
          return resp.json();
        } else {
          return {};
        }
      }).then(function (messages) {
        // eslint-disable-next-line global-require, import/no-dynamic-require
        (0, _reactIntl.addLocaleData)(require("react-intl/locale-data/".concat(locale)));

        _this3.setState({
          messages: messages,
          language: locale
        });
      });
    }
    /**
     * Set the local settings
     *
     * @memberof DevPortal
     */

  }, {
    key: "updateLocale",
    value: function updateLocale() {
      var localTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.systemTheme;

      //The above can be overriden by the language switcher
      var browserLocal = _Utils["default"].getBrowserLocal();

      var defaultDirection = localTheme.direction,
          _localTheme$custom$la = localTheme.custom.languageSwitch,
          languageSwitchActive = _localTheme$custom$la.active,
          languages = _localTheme$custom$la.languages;
      var lanauageToLoad = null;

      if (languageSwitchActive) {
        var savedLanguage = localStorage.getItem('language');
        var direction = defaultDirection;
        var selectedLanuageObject = null;

        for (var i = 0; i < languages.length; i++) {
          if (savedLanguage && savedLanguage === languages[i].key) {
            selectedLanuageObject = languages[i];
          } else if (!savedLanguage && browserLocal === languages[i].key) {
            selectedLanuageObject = languages[i];
          }
        }

        if (selectedLanuageObject) {
          direction = selectedLanuageObject.direction || defaultDirection;
        }

        document.body.setAttribute('dir', direction);
        this.systemTheme.direction = direction;
        lanauageToLoad = savedLanguage || selectedLanuageObject.key || browserLocal;
      } else {
        // If the lanauage switch was disabled after setting a cookie we need to remove the cookie and 
        // force the selected lanuage to the browserLocal.
        lanauageToLoad = browserLocal;
        document.body.setAttribute('dir', localTheme.direction);
        this.systemTheme.direction = localTheme.direction;
      }

      this.loadLocale(lanauageToLoad);
    }
    /**
     * Set the tenant domain to state
     * @param {String} tenantDomain tenant domain
     * @memberof DevPortal
     */

  }, {
    key: "setSettings",

    /**
     *
     * for more information about this pattern
     * reffer https://reactjs.org/docs/context.html#updating-context-from-a-nested-component
     * @param {Object} settings set the settings state in the APP state, which will implesitly
     * set in the Settings context
     * @memberof DevPortal
     */
    value: function setSettings(settings) {
      this.setState({
        settings: settings
      });
    }
    /**
     * Load Theme file.
     *
     * @param {string} tenant tenant name
     */

  }, {
    key: "setTenantTheme",
    value: function setTenantTheme(tenant) {
      var _this4 = this;

      if (tenant && tenant !== 'INVALID') {
        fetch("".concat(_Settings["default"].app.context, "/site/public/tenant_themes/").concat(tenant, "/apim/defaultTheme.json")).then(function (response) {
          if (!response.ok) {
            throw new Error("HTTP error " + response.status);
          }

          return response.json();
        }).then(function (data) {
          // Merging with the system theme.
          var tenantMergedTheme = (0, _lodash["default"])((0, _lodash2["default"])(_defaultTheme["default"]), _Config["default"], data);

          _this4.updateLocale(tenantMergedTheme);

          _this4.setState({
            theme: tenantMergedTheme
          });
        })["catch"](function () {
          console.log('Error loading teant theme. Loading the default theme.');

          _this4.updateLocale();

          _this4.setState({
            theme: _this4.systemTheme
          });
        });
      } else {
        this.updateLocale();
        this.setState({
          theme: this.systemTheme
        });
      }
    }
    /**
     * Add two numbers.
     * @param {object} theme object.
     * @returns {JSX} link dom tag.
     */

  }, {
    key: "loadCustomCSS",
    value: function loadCustomCSS(theme) {
      var tenantCustomCss = theme.custom.tenantCustomCss;
      var tenantDomain = this.state.tenantDomain;
      var cssUrlWithTenant = tenantCustomCss;

      if (tenantDomain && tenantCustomCss) {
        cssUrlWithTenant = tenantCustomCss.replace('<tenant-domain>', tenantDomain);
      }

      if (cssUrlWithTenant) {
        var url = cssUrlWithTenant;

        if (_Settings["default"].app.context === '') {
          if (/^\//.test(cssUrlWithTenant)) {
            url = cssUrlWithTenant.substr(1);
          } else {
            url = cssUrlWithTenant;
          }
        } else {
          url = _Settings["default"].app.context + '/' + cssUrlWithTenant;
        }

        return /*#__PURE__*/_react["default"].createElement("link", {
          rel: "stylesheet",
          type: "text/css",
          href: url
        });
      } else {
        return '';
      }
    }
    /**
     * Add two numbers.
     * @param {object} theme object.
     * @returns {JSX} link dom tag.
     */

  }, {
    key: "getTitle",
    value: function getTitle(theme) {
      var _theme$custom$title = theme.custom.title,
          prefix = _theme$custom$title.prefix,
          sufix = _theme$custom$title.sufix;
      return prefix + sufix;
    }
    /**
     * If the passive mode is enabled then this method will check whether
     * a user is already logged into the publisher.
     */

  }, {
    key: "checkLoginUser",
    value: function checkLoginUser() {
      if (!sessionStorage.getItem(_Constants["default"].LOGINSTATUS)) {
        sessionStorage.setItem(_Constants["default"].LOGINSTATUS, 'check-Login-status');
        window.location = _Settings["default"].app.context + '/services/configs?loginPrompt=false';
      } else if (sessionStorage.getItem(_Constants["default"].LOGINSTATUS)) {
        sessionStorage.removeItem(_Constants["default"].LOGINSTATUS);
      }
    }
    /**
     * Reners the DevPortal component
     * @returns {JSX} this is the description
     * @memberof DevPortal
     */

  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          settings = _this$state.settings,
          tenantDomain = _this$state.tenantDomain,
          theme = _this$state.theme,
          messages = _this$state.messages,
          language = _this$state.language;
      var context = _Settings["default"].app.context;
      return settings && theme && messages && language && /*#__PURE__*/_react["default"].createElement(_SettingsContext.SettingsProvider, {
        value: {
          settings: settings,
          setSettings: this.setSettings,
          tenantDomain: tenantDomain,
          setTenantDomain: this.setTenantDomain
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactHelmet.Helmet, null, /*#__PURE__*/_react["default"].createElement("title", null, this.getTitle(theme))), /*#__PURE__*/_react["default"].createElement(_styles.MuiThemeProvider, {
        theme: (0, _styles.createMuiTheme)(theme)
      }, /*#__PURE__*/_react["default"].createElement(_styles.StylesProvider, {
        jss: jss
      }, this.loadCustomCSS(theme), /*#__PURE__*/_react["default"].createElement(_BrowserRouter["default"], {
        basename: context
      }, /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
        fallback: /*#__PURE__*/_react["default"].createElement(_Progress["default"], null)
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.IntlProvider, {
        locale: language,
        messages: messages
      }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
        path: "/logout",
        component: _Logout["default"]
      }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
        component: protectedApp
      }))))))));
    }
  }]);

  return DevPortal;
}(_react["default"].Component);

var _default = DevPortal;
exports["default"] = _default;