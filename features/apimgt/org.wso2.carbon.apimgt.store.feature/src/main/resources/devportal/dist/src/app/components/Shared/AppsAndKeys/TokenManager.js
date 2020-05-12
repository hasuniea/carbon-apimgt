"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _ExpansionPanel = _interopRequireDefault(require("@material-ui/core/ExpansionPanel"));

var _ExpansionPanelSummary = _interopRequireDefault(require("@material-ui/core/ExpansionPanelSummary"));

var _ExpansionPanelDetails = _interopRequireDefault(require("@material-ui/core/ExpansionPanelDetails"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _reactIntl = require("react-intl");

var _Loading = _interopRequireDefault(require("AppComponents/Base/Loading/Loading"));

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

var _Alert = _interopRequireDefault(require("AppComponents/Shared/Alert"));

var _ProvideOAuthKeys = _interopRequireDefault(require("AppComponents/Shared/AppsAndKeys/ProvideOAuthKeys"));

var _Application = _interopRequireDefault(require("AppData/Application"));

var _AuthManager = _interopRequireDefault(require("AppData/AuthManager"));

var _SettingsContext = _interopRequireDefault(require("AppComponents/Shared/SettingsContext"));

var _api = _interopRequireDefault(require("AppData/api"));

var _KeyConfiguration = _interopRequireDefault(require("./KeyConfiguration"));

var _ViewKeys = _interopRequireDefault(require("./ViewKeys"));

var _WaitingForApproval = _interopRequireDefault(require("./WaitingForApproval"));

var _ScopeValidation = require("../ScopeValidation");

var _TokenManagerSummary = _interopRequireDefault(require("./TokenManagerSummary"));

var _Progress = _interopRequireDefault(require("../Progress"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

var styles = function styles(theme) {
  return {
    root: {
      padding: theme.spacing(3),
      '& span, & h5, & label, & input': {
        color: theme.palette.getContrastText(theme.palette.background.paper)
      }
    },
    button: {
      marginLeft: 0,
      '& span': {
        color: theme.palette.getContrastText(theme.palette.primary.main)
      }
    },
    cleanUpButton: {
      marginLeft: 15
    },
    cleanUpInfoText: {
      padding: '10px 0px 10px 15px'
    },
    tokenSection: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    },
    margin: {
      marginRight: theme.spacing(2)
    },
    keyConfigWrapper: {
      flexDirection: 'column',
      marginBottom: 0
    },
    generateWrapper: {
      padding: '10px 0px',
      marginLeft: theme.spacing(1.25)
    },
    paper: {
      background: 'none',
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(2)
    }
  };
};
/**
 *  @param {event} event event
 *  @param {String} value description
 */


var TokenManager = /*#__PURE__*/function (_React$Component) {
  _inherits(TokenManager, _React$Component);

  var _super = _createSuper(TokenManager);

  /**
   *
   * @param {*} props props
   */
  function TokenManager(props) {
    var _this;

    _classCallCheck(this, TokenManager);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "setGenerateEnabled", function (state) {
      _this.setState({
        generateEnabled: state
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getserverSupportedGrantTypes", function () {
      var api = new _api["default"]();
      var promisedSettings = api.getSettings();
      promisedSettings.then(function (response) {
        var keyRequest = _this.state.keyRequest;

        var newKeyRequest = _objectSpread({}, keyRequest);

        newKeyRequest.serverSupportedGrantTypes = response.obj.grantTypes;
        newKeyRequest.supportedGrantTypes = response.obj.grantTypes.filter(function (item) {
          return item !== 'authorization_code' && item !== 'implicit';
        });

        _this.setState({
          keyRequest: newKeyRequest
        });
      })["catch"](function (error) {
        if (process.env.NODE_ENV !== 'production') {
          console.log(error);
        }

        var status = error.status;

        if (status === 404) {
          _this.setState({
            notFound: true
          });
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "loadApplication", function () {
      _this.getserverSupportedGrantTypes();

      if (_this.appId) {
        _this.application.then(function (application) {
          return application.getKeys();
        }).then(function (keys) {
          var keyType = _this.props.keyType;
          var keyRequest = _this.state.keyRequest;

          if (keys.size > 0 && keys.get(keyType)) {
            var _keys$get = keys.get(keyType),
                callbackUrl = _keys$get.callbackUrl,
                supportedGrantTypes = _keys$get.supportedGrantTypes;

            var newRequest = _objectSpread(_objectSpread({}, keyRequest), {}, {
              callbackUrl: callbackUrl,
              supportedGrantTypes: supportedGrantTypes
            });

            _this.setState({
              keys: keys,
              keyRequest: newRequest
            });
          } else {
            _this.setState({
              keys: keys
            });
          }
        })["catch"](function (error) {
          if (process.env.NODE_ENV !== 'production') {
            console.error(error);
          }

          if (error.status === 404) {
            _this.setState({
              notFound: true
            });
          }
        });
      }
    });

    var _this$props = _this.props,
        selectedApp = _this$props.selectedApp,
        _keyType = _this$props.keyType;
    _this.state = {
      isLoading: false,
      keys: null,
      isKeyJWT: false,
      keyRequest: {
        keyType: _keyType,
        serverSupportedGrantTypes: [],
        supportedGrantTypes: [],
        callbackUrl: '',
        validityTime: 3600
      },
      providedConsumerKey: '',
      providedConsumerSecret: '',
      generateEnabled: true
    };
    _this.keyStates = {
      COMPLETED: 'COMPLETED',
      APPROVED: 'APPROVED',
      CREATED: 'CREATED',
      REJECTED: 'REJECTED'
    };

    if (selectedApp) {
      _this.appId = selectedApp.appId || selectedApp.value;
      _this.application = _Application["default"].get(_this.appId);
    }

    _this.updateKeyRequest = _this.updateKeyRequest.bind(_assertThisInitialized(_this));
    _this.generateKeys = _this.generateKeys.bind(_assertThisInitialized(_this));
    _this.updateKeys = _this.updateKeys.bind(_assertThisInitialized(_this));
    _this.cleanUpKeys = _this.cleanUpKeys.bind(_assertThisInitialized(_this));
    _this.handleOnChangeProvidedOAuth = _this.handleOnChangeProvidedOAuth.bind(_assertThisInitialized(_this));
    _this.provideOAuthKeySecret = _this.provideOAuthKeySecret.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   *
   *
   * @memberof TokenManager
   */


  _createClass(TokenManager, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadApplication();
    }
  }, {
    key: "updateKeyRequest",

    /**
     * Update keyRequest state
     * @param {Object} keyRequest parameters requried for key generation request
     */
    value: function updateKeyRequest(keyRequest) {
      this.setState({
        keyRequest: keyRequest
      });
    }
    /**
     * Generate keys for application,
     *
     * @memberof KeyConfiguration
     */

  }, {
    key: "generateKeys",
    value: function generateKeys() {
      var _this2 = this;

      var _this$state = this.state,
          keyRequest = _this$state.keyRequest,
          keys = _this$state.keys;
      this.setState({
        isLoading: true
      });
      var _this$props2 = this.props,
          keyType = _this$props2.keyType,
          updateSubscriptionData = _this$props2.updateSubscriptionData,
          _this$props2$selected = _this$props2.selectedApp,
          tokenType = _this$props2$selected.tokenType,
          hashEnabled = _this$props2$selected.hashEnabled,
          intl = _this$props2.intl;
      this.application.then(function (application) {
        return application.generateKeys(keyType, keyRequest.supportedGrantTypes, keyRequest.callbackUrl, keyRequest.validityTime);
      }).then(function (response) {
        if (updateSubscriptionData) {
          updateSubscriptionData();
        }

        var newKeys = new Map(_toConsumableArray(keys)); // in case token hashing is enabled, isKeyJWT is set to true even if the token type is JWT.
        // This is to mimic the behavior of JWT tokens (by showing the token in a dialog)

        var isKeyJWT = tokenType === 'JWT' || hashEnabled;
        newKeys.set(keyType, response);

        _this2.setState({
          keys: newKeys,
          isKeyJWT: isKeyJWT
        });

        _Alert["default"].info(intl.formatMessage({
          id: 'Shared.AppsAndKeys.TokenManager.key.generate.success',
          defaultMessage: 'Application keys generated successfully'
        }));
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

        _Alert["default"].error(intl.formatMessage({
          id: 'Shared.AppsAndKeys.TokenManager.key.generate.error',
          defaultMessage: 'Error occurred when generating application keys'
        }));
      })["finally"](function () {
        return _this2.setState({
          isLoading: false
        });
      });
    }
    /**
     *
     * @memberof KeyConfiguration
     */

  }, {
    key: "updateKeys",
    value: function updateKeys() {
      var _this3 = this;

      this.setState({
        isLoading: true
      });
      var _this$state2 = this.state,
          keys = _this$state2.keys,
          keyRequest = _this$state2.keyRequest;
      var _this$props3 = this.props,
          keyType = _this$props3.keyType,
          intl = _this$props3.intl;
      var applicationKey = keys.get(keyType);
      this.application.then(function (application) {
        return application.updateKeys(applicationKey.tokenType, keyType, keyRequest.supportedGrantTypes, keyRequest.callbackUrl, applicationKey.consumerKey, applicationKey.consumerSecret);
      }).then(function (response) {
        _this3.setState({
          keys: response.keys
        });

        _Alert["default"].info(intl.formatMessage({
          id: 'Shared.AppsAndKeys.TokenManager.key.update.success',
          defaultMessage: 'Application keys updated successfully'
        }));
      })["catch"](function (error) {
        if (process.env.NODE_ENV !== 'production') {
          console.error(error);
        }

        var status = error.status;

        if (status === 404) {
          _this3.setState({
            notFound: true
          });
        }

        _Alert["default"].error(intl.formatMessage({
          id: 'Shared.AppsAndKeys.TokenManager.key.update.error',
          defaultMessage: 'Error occurred when updating application keys'
        }));
      })["finally"](function () {
        return _this3.setState({
          isLoading: false
        });
      });
    }
    /**
     * Cleanup application keys
     */

  }, {
    key: "cleanUpKeys",
    value: function cleanUpKeys() {
      var _this4 = this;

      var _this$props4 = this.props,
          keyType = _this$props4.keyType,
          intl = _this$props4.intl;
      this.application.then(function (application) {
        return application.cleanUpKeys(keyType);
      }).then(function () {
        _this4.loadApplication();

        _Alert["default"].info(intl.formatMessage({
          id: 'Shared.AppsAndKeys.TokenManager.key.cleanup.success',
          defaultMessage: 'Application keys cleaned successfully'
        }));
      })["catch"](function (error) {
        if (process.env.NODE_ENV !== 'production') {
          console.error(error);
        }

        var status = error.status;

        if (status === 404) {
          _this4.setState({
            notFound: true
          });
        }

        _Alert["default"].error(intl.formatMessage({
          id: 'Shared.AppsAndKeys.TokenManager.key.cleanup.error',
          defaultMessage: 'Error occurred while cleaning up application keys'
        }));
      });
    }
    /**
     * Handle on change of provided consumer key and consumer secret
     *
     * @param event onChange event
     */

  }, {
    key: "handleOnChangeProvidedOAuth",
    value: function handleOnChangeProvidedOAuth(event) {
      this.setState(_defineProperty({}, event.target.name, event.target.value));
    }
    /**
     * Provide consumer key and secret of an existing OAuth app to an application
     */

  }, {
    key: "provideOAuthKeySecret",
    value: function provideOAuthKeySecret() {
      var _this5 = this;

      var _this$state3 = this.state,
          providedConsumerKey = _this$state3.providedConsumerKey,
          providedConsumerSecret = _this$state3.providedConsumerSecret;
      var _this$props5 = this.props,
          keyType = _this$props5.keyType,
          intl = _this$props5.intl;
      this.application.then(function (application) {
        return application.provideKeys(keyType, providedConsumerKey, providedConsumerSecret);
      }).then(function () {
        _this5.setState({
          providedConsumerKey: '',
          providedConsumerSecret: ''
        });

        _Alert["default"].info(intl.formatMessage({
          id: 'Shared.AppsAndKeys.TokenManager.key.provide.success',
          defaultMessage: 'Application keys provided successfully'
        }));
      })["catch"](function (error) {
        if (process.env.NODE_ENV !== 'production') {
          console.error(error);
        }

        var status = error.status;

        if (status === 404) {
          _this5.setState({
            notFound: true
          });
        }

        _Alert["default"].error(intl.formatMessage({
          id: 'Shared.AppsAndKeys.TokenManager.key.provide.error',
          defaultMessage: 'Error occurred when providing application keys'
        }));
      });
    }
    /**
     *  @returns {Component}
     * @memberof Tokenemanager
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
          classes = _this$props6.classes,
          selectedApp = _this$props6.selectedApp,
          keyType = _this$props6.keyType,
          summary = _this$props6.summary;
      var _this$state4 = this.state,
          keys = _this$state4.keys,
          keyRequest = _this$state4.keyRequest,
          isLoading = _this$state4.isLoading,
          isKeyJWT = _this$state4.isKeyJWT,
          providedConsumerKey = _this$state4.providedConsumerKey,
          providedConsumerSecret = _this$state4.providedConsumerSecret,
          generateEnabled = _this$state4.generateEnabled;

      if (!keys) {
        return /*#__PURE__*/_react["default"].createElement(_Loading["default"], null);
      }

      var username = _AuthManager["default"].getUser().name;

      var isUserOwner = false;

      if (selectedApp.owner && username.toLowerCase() === selectedApp.owner.toLowerCase()) {
        isUserOwner = true;
      }

      var key = keys.get(keyType);

      if (key && key.token) {
        keyRequest.validityTime = key.token.validityTime;
      }

      if (summary) {
        if (keys) {
          return /*#__PURE__*/_react["default"].createElement(_TokenManagerSummary["default"], {
            keys: keys,
            key: key,
            keyStates: this.keyStates,
            selectedApp: selectedApp,
            keyType: keyType,
            isKeyJWT: isKeyJWT,
            isUserOwner: isUserOwner
          });
        } else {
          return /*#__PURE__*/_react["default"].createElement(_Progress["default"], null);
        }
      }

      if (keys.size > 0 && key && key.keyState === 'APPROVED' && !key.consumerKey) {
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
          className: classes.cleanUpInfoText,
          variant: "subtitle1"
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Shared.AppsAndKeys.TokenManager.cleanup.text",
          defaultMessage: "Error! You have partially-created keys. Please click `Clean Up` button and try again."
        })), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
          variant: "contained",
          color: "primary",
          className: classes.cleanUpButton,
          onClick: this.cleanUpKeys
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          defaultMessage: "Clean up",
          id: "Shared.AppsAndKeys.TokenManager.cleanup"
        })));
      }

      if (key && (key.keyState === this.keyStates.CREATED || key.keyState === this.keyStates.REJECTED)) {
        return /*#__PURE__*/_react["default"].createElement(_WaitingForApproval["default"], {
          keyState: key.keyState,
          states: this.keyStates
        });
      }

      var keyGrantTypes = key ? key.supportedGrantTypes : [];
      var settingsContext = this.context;
      var mapExistingAuthApps = settingsContext.settings.mapExistingAuthApps;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.root
      }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "h5"
      }, keyType === 'PRODUCTION' ? 'Production ' : 'Sandbox ', /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        defaultMessage: "Key and Secret",
        id: "Shared.AppsAndKeys.TokenManager.key.and.secret"
      })), /*#__PURE__*/_react["default"].createElement(_ViewKeys["default"], {
        selectedApp: selectedApp,
        keyType: keyType,
        keys: keys,
        isKeyJWT: isKeyJWT,
        selectedGrantTypes: keyGrantTypes,
        isUserOwner: isUserOwner
      }), /*#__PURE__*/_react["default"].createElement(_Paper["default"], {
        className: classes.paper
      }, /*#__PURE__*/_react["default"].createElement(_ExpansionPanel["default"], {
        defaultExpanded: true
      }, /*#__PURE__*/_react["default"].createElement(_ExpansionPanelSummary["default"], {
        expandIcon: /*#__PURE__*/_react["default"].createElement(_Icon["default"], null, "expand_more")
      }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        className: classes.heading,
        variant: "subtitle1"
      }, keys.size > 0 && keys.get(keyType) ? /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        defaultMessage: "Key Configurations",
        id: "Shared.AppsAndKeys.TokenManager.update.configuration"
      }) : /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        defaultMessage: "Key Configuration",
        id: "Shared.AppsAndKeys.TokenManager.key.configuration"
      }))), /*#__PURE__*/_react["default"].createElement(_ExpansionPanelDetails["default"], {
        className: classes.keyConfigWrapper
      }, /*#__PURE__*/_react["default"].createElement(_KeyConfiguration["default"], {
        keys: keys,
        selectedApp: selectedApp,
        keyType: keyType,
        updateKeyRequest: this.updateKeyRequest,
        keyRequest: keyRequest,
        isUserOwner: isUserOwner,
        isKeysAvailable: keys.size > 0 && keys.get(keyType),
        setGenerateEnabled: this.setGenerateEnabled
      }))), /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.generateWrapper
      }, /*#__PURE__*/_react["default"].createElement(_ScopeValidation.ScopeValidation, {
        resourcePath: _ScopeValidation.resourcePaths.APPLICATION_GENERATE_KEYS,
        resourceMethod: _ScopeValidation.resourceMethods.POST
      }, !isUserOwner ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        variant: "contained",
        color: "primary",
        className: classes.button,
        onClick: keys.size > 0 && keys.get(keyType) ? this.updateKeys : this.generateKeys,
        disabled: !isUserOwner || isLoading
      }, keys.size > 0 && keys.get(keyType) ? 'Update keys' : 'Generate Keys', isLoading && /*#__PURE__*/_react["default"].createElement(_CircularProgress["default"], {
        size: 20
      })), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "caption"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        defaultMessage: "Only owner can generate or update keys",
        id: "Shared.AppsAndKeys.TokenManager.key.and.user.owner"
      }))) : /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        variant: "contained",
        color: "primary",
        className: classes.button,
        onClick: keys.size > 0 && keys.get(keyType) ? this.updateKeys : this.generateKeys,
        disabled: !generateEnabled || isLoading
      }, keys.size > 0 && keys.get(keyType) ? 'Update' : 'Generate Keys', isLoading && /*#__PURE__*/_react["default"].createElement(_CircularProgress["default"], {
        size: 20
      }))))), mapExistingAuthApps && !keys.get(keyType) && /*#__PURE__*/_react["default"].createElement(_Paper["default"], {
        className: classes.paper
      }, /*#__PURE__*/_react["default"].createElement(_ExpansionPanel["default"], {
        defaultExpanded: true
      }, /*#__PURE__*/_react["default"].createElement(_ExpansionPanelSummary["default"], {
        expandIcon: /*#__PURE__*/_react["default"].createElement(_Icon["default"], null, "expand_more")
      }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        className: classes.heading,
        variant: "subtitle1"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        defaultMessage: "Provide Existing OAuth Keys",
        id: "Shared.AppsAndKeys.TokenManager.provide.oauth"
      }))), /*#__PURE__*/_react["default"].createElement(_ExpansionPanelDetails["default"], {
        className: classes.keyConfigWrapper
      }, /*#__PURE__*/_react["default"].createElement(_ProvideOAuthKeys["default"], {
        onChange: this.handleOnChangeProvidedOAuth,
        consumerKey: providedConsumerKey,
        consumerSecret: providedConsumerSecret,
        isUserOwner: isUserOwner
      }))), /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.generateWrapper
      }, /*#__PURE__*/_react["default"].createElement(_ScopeValidation.ScopeValidation, {
        resourcePath: _ScopeValidation.resourcePaths.APPLICATION_GENERATE_KEYS,
        resourceMethod: _ScopeValidation.resourceMethods.POST
      }, !isUserOwner ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        variant: "contained",
        color: "primary",
        className: classes.button,
        onClick: this.provideOAuthKeySecret,
        disabled: !isUserOwner
      }, keys.size > 0 && keys.get(keyType) ? /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        defaultMessage: "Update",
        id: "Shared.AppsAndKeys.TokenManager.provide. oauth.button.update"
      }) : /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        defaultMessage: "Provide",
        id: "Shared.AppsAndKeys.TokenManager. provide.oauth.button.provide"
      })), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "caption"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        defaultMessage: "Only owner can provide keys",
        id: "Shared.AppsAndKeys.TokenManager.key.provide.user.owner"
      }))) : /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        variant: "contained",
        color: "primary",
        className: classes.button,
        onClick: this.provideOAuthKeySecret
      }, keys.size > 0 && keys.get(keyType) ? /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        defaultMessage: "Update",
        id: "Shared.AppsAndKeys.TokenManager. provide.oauth.button.update"
      }) : /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        defaultMessage: "Provide",
        id: "Shared.AppsAndKeys. TokenManager.provide.oauth.button.provide"
      }))))));
    }
  }]);

  return TokenManager;
}(_react["default"].Component);

_defineProperty(TokenManager, "contextType", _SettingsContext["default"]);

TokenManager.defaultProps = {
  updateSubscriptionData: function updateSubscriptionData() {},
  summary: false
};
TokenManager.propTypes = {
  classes: _propTypes["default"].instanceOf(Object).isRequired,
  selectedApp: _propTypes["default"].shape({
    tokenType: _propTypes["default"].string.isRequired,
    appId: _propTypes["default"].string,
    value: _propTypes["default"].string,
    owner: _propTypes["default"].string,
    hashEnabled: _propTypes["default"].bool
  }).isRequired,
  keyType: _propTypes["default"].string.isRequired,
  updateSubscriptionData: _propTypes["default"].func,
  intl: _propTypes["default"].shape({
    formatMessage: _propTypes["default"].func
  }).isRequired,
  summary: _propTypes["default"].bool
};

var _default = (0, _reactIntl.injectIntl)((0, _styles.withStyles)(styles)(TokenManager));

exports["default"] = _default;