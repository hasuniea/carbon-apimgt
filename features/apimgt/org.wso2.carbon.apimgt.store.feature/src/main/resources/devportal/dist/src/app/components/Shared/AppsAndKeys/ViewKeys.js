"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

var _InputAdornment = _interopRequireDefault(require("@material-ui/core/InputAdornment"));

var _FormHelperText = _interopRequireDefault(require("@material-ui/core/FormHelperText"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _reactCopyToClipboard = _interopRequireDefault(require("react-copy-to-clipboard"));

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _DialogActions = _interopRequireDefault(require("@material-ui/core/DialogActions"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _DialogContentText = _interopRequireDefault(require("@material-ui/core/DialogContentText"));

var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _reactIntl = require("react-intl");

var _ResourceNotFound = _interopRequireDefault(require("../../Base/Errors/ResourceNotFound"));

var _Loading = _interopRequireDefault(require("../../Base/Loading/Loading"));

var _Application = _interopRequireDefault(require("../../../data/Application"));

var _Tokens = _interopRequireDefault(require("./Tokens"));

var _ViewToken = _interopRequireDefault(require("./ViewToken"));

var _ViewSecret = _interopRequireDefault(require("./ViewSecret"));

var _ViewCurl = _interopRequireDefault(require("./ViewCurl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
    button: {
      margin: theme.spacing(3),
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
    inputWrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      '& span, & h5, & label, & td, & li, & div, & input': {
        color: theme.palette.getContrastText(theme.palette.background.paper)
      }
    },
    copyWrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    gridWrapper: {
      paddingTop: theme.spacing(2)
    },
    iconStyle: {
      cursor: 'grab'
    },
    tokenSection: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(0.5)
    },
    margin: {
      marginRight: theme.spacing(2)
    },
    dialogWrapper: {
      '& label,& h5, & label, & td, & li, & input, & h2, & p.MuiTypography-root,& p.MuiFormHelperText-root': {
        color: theme.palette.getContrastText(theme.palette.background.paper)
      }
    }
  };
};
/**
 * Class used to displays in key generation UI
 */


var ViewKeys = /*#__PURE__*/function (_React$Component) {
  _inherits(ViewKeys, _React$Component);

  var _super = _createSuper(ViewKeys);

  /**
   * @param {*} props properties
   */
  function ViewKeys(props) {
    var _this;

    _classCallCheck(this, ViewKeys);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "updateAccessTokenRequest", function (accessTokenRequest) {
      _this.setState({
        accessTokenRequest: accessTokenRequest
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onCopy", function (name) {
      _this.setState(_defineProperty({}, name, true));

      var that = _assertThisInitialized(_this);

      var elementName = name;

      var caller = function caller() {
        that.setState(_defineProperty({}, elementName, false));
      };

      setTimeout(caller, 4000);
    });

    _defineProperty(_assertThisInitialized(_this), "handleShowHidden", function (data) {
      _this.setState(_defineProperty({}, data, !_this.state[data]));
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseDownGeneric", function (event) {
      event.preventDefault();
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickOpen", function () {
      _this.setState({
        open: true,
        showToken: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSecretRegenerate", function (consumerKey, keyType) {
      _this.applicationPromise.then(function (application) {
        return application.regenerateSecret(consumerKey, keyType);
      }).then(function (response) {
        console.log('consumer secret regenerated successfully ' + response);

        _this.setState({
          open: true,
          showSecretGen: true,
          secretGenResponse: response
        });
      })["catch"](function (error) {
        if (process.env.NODE_ENV !== 'production') {
          console.error(error);
        }

        var status = error.status;

        if (status === 404) {
          _this.setState({
            notFound: true
          });
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickOpenCurl", function () {
      _this.setState({
        open: true,
        showCurl: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClose", function () {
      _this.setState({
        open: false,
        showCurl: false,
        isKeyJWT: false,
        showSecretGen: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "generateAccessToken", function () {
      var _this$state = _this.state,
          accessTokenRequest = _this$state.accessTokenRequest,
          isUpdating = _this$state.isUpdating;

      _this.setState({
        isUpdating: true
      });

      _this.applicationPromise.then(function (application) {
        return application.generateToken(accessTokenRequest.keyType, accessTokenRequest.timeout, accessTokenRequest.scopesSelected);
      }).then(function (response) {
        console.log('token generated successfully ' + response);

        _this.setState({
          showToken: true,
          tokenResponse: response,
          token: response.accessToken,
          tokenScopes: response.tokenScopes,
          tokenValidityTime: response.validityTime
        });

        _this.setState({
          isUpdating: false
        });
      })["catch"](function (error) {
        if (process.env.NODE_ENV !== 'production') {
          console.error(error);
        }

        var status = error.status;

        if (status === 404) {
          _this.setState({
            notFound: true
          });
        }

        _this.setState({
          isUpdating: false
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "viewKeyAndSecret", function (consumerKey, consumerSecret) {
      var _this$props = _this.props,
          classes = _this$props.classes,
          intl = _this$props.intl,
          hashEnabled = _this$props.selectedApp.hashEnabled,
          keyType = _this$props.keyType;
      var _this$state2 = _this.state,
          keyCopied = _this$state2.keyCopied,
          secretCopied = _this$state2.secretCopied,
          showCS = _this$state2.showCS;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true,
        xs: 6
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.copyWrapper
      }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
        id: "consumer-key",
        value: consumerKey,
        margin: "normal",
        label: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Shared.AppsAndKeys.ViewKeys.consumer.key",
          defaultMessage: "Consumer Key"
        }),
        fullWidth: true,
        variant: "outlined",
        InputProps: {
          readOnly: true,
          endAdornment: /*#__PURE__*/_react["default"].createElement(_InputAdornment["default"], {
            position: "end"
          }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
            title: keyCopied ? intl.formatMessage({
              defaultMessage: 'Copied',
              id: 'Shared.AppsAndKeys.ViewKeys.copied'
            }) : intl.formatMessage({
              defaultMessage: 'Copy to clipboard',
              id: 'Shared.AppsAndKeys.ViewKeys.copy.to'
            }),
            placement: "right",
            className: classes.iconStyle
          }, /*#__PURE__*/_react["default"].createElement(_reactCopyToClipboard["default"], {
            text: consumerKey,
            onCopy: function onCopy() {
              return _this.onCopy('keyCopied');
            }
          }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
            color: "secondary"
          }, "description"))))
        }
      })), /*#__PURE__*/_react["default"].createElement(_FormControl["default"], null, /*#__PURE__*/_react["default"].createElement(_FormHelperText["default"], {
        id: "consumer-key-helper-text"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Shared.AppsAndKeys.ViewKeys.consumer.key.title",
        defaultMessage: "Consumer Key of the application"
      })))), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true,
        xs: 6
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.copyWrapper
      }, !hashEnabled ? /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
        id: "consumer-secret",
        label: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Shared.AppsAndKeys.ViewKeys.consumer.secret",
          defaultMessage: "Consumer Secret"
        }),
        type: showCS || !consumerSecret ? 'text' : 'password',
        value: consumerSecret,
        margin: "normal",
        fullWidth: true,
        variant: "outlined",
        InputProps: {
          readOnly: true,
          endAdornment: /*#__PURE__*/_react["default"].createElement(_InputAdornment["default"], {
            position: "end"
          }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
            classes: "",
            onClick: function onClick() {
              return _this.handleShowHidden('showCS');
            },
            onMouseDown: _this.handleMouseDownGeneric
          }, showCS ? /*#__PURE__*/_react["default"].createElement(_Icon["default"], null, "visibility_off") : /*#__PURE__*/_react["default"].createElement(_Icon["default"], null, "visibility")), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
            title: secretCopied ? 'Copied' : 'Copy to clipboard',
            placement: "right",
            className: classes.iconStyle
          }, /*#__PURE__*/_react["default"].createElement(_reactCopyToClipboard["default"], {
            text: consumerSecret,
            onCopy: function onCopy() {
              return _this.onCopy('secretCopied');
            }
          }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
            color: "secondary"
          }, "description"))))
        }
      }) : /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        variant: "contained",
        color: "primary",
        className: classes.button,
        onClick: function onClick() {
          return _this.handleSecretRegenerate(consumerKey, keyType);
        },
        disabled: !isUserOwner
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        defaultMessage: "Regenerate Consumer Secret",
        id: "Shared.AppsAndKeys.ViewKeys.consumer.secret.button.regenerate"
      }))), !hashEnabled && /*#__PURE__*/_react["default"].createElement(_FormControl["default"], null, /*#__PURE__*/_react["default"].createElement(_FormHelperText["default"], {
        id: "consumer-secret-helper-text"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Shared.AppsAndKeys.ViewKeys.consumer.secret.of.application",
        defaultMessage: "Consumer Secret of the application"
      })))));
    });

    var selectedApp = _this.props.selectedApp;
    var appId;

    if (selectedApp) {
      appId = selectedApp.appId || selectedApp.value;
    }

    _this.applicationPromise = _Application["default"].get(appId);
    _this.state = {
      showCS: false,
      open: false,
      showToken: false,
      showCurl: false,
      showSecretGen: false,
      accessTokenRequest: {
        timeout: 3600,
        scopesSelected: [],
        keyType: ''
      },
      subscriptionScopes: [],
      isUpdating: false
    };
    return _this;
  }
  /**
   * Fetch Application object by ID coming from URL path params and fetch related keys to display
   */


  _createClass(ViewKeys, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var accessTokenRequest = this.state.accessTokenRequest;
      var keyType = this.props.keyType;
      this.applicationPromise.then(function (application) {
        application.getKeys().then(function () {
          var newRequest = _objectSpread(_objectSpread({}, accessTokenRequest), {}, {
            keyType: keyType
          });

          var subscriptionScopes = application.subscriptionScopes.map(function (scope) {
            return scope.key;
          });

          _this2.setState({
            accessTokenRequest: newRequest,
            subscriptionScopes: subscriptionScopes
          });
        });
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
     * Adding this here becasue it is not possible to add in the render method becasue isKeyJWT in state is used
     * to close the dialog box and render method will casue this to be always true and cannot close the box.
     * Rule is ignored becasue according to react docs its ok to setstate as long as we are checking a condition
     * This is an ani pattern to be fixed later.
     *  wso2/product-apim#5293
     * https://reactjs.org/docs/react-component.html#componentdidupdate
     * @param {*} prevProps previous props
     * @memberof ViewKeys
     */

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var isKeyJWT = this.props.isKeyJWT;

      if (isKeyJWT && !prevProps.isKeyJWT) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          isKeyJWT: true
        });
      }
    }
    /**
     * Set accesstoken request in state
     * @param {*} accessTokenRequest access token request object
     * @memberof ViewKeys
     */

  }, {
    key: "render",

    /**
     * @inheritdoc
     */
    value: function render() {
      var _this3 = this;

      var _this$state3 = this.state,
          notFound = _this$state3.notFound,
          showToken = _this$state3.showToken,
          showCurl = _this$state3.showCurl,
          showSecretGen = _this$state3.showSecretGen,
          tokenCopied = _this$state3.tokenCopied,
          open = _this$state3.open,
          token = _this$state3.token,
          tokenScopes = _this$state3.tokenScopes,
          tokenValidityTime = _this$state3.tokenValidityTime,
          accessTokenRequest = _this$state3.accessTokenRequest,
          subscriptionScopes = _this$state3.subscriptionScopes,
          isKeyJWT = _this$state3.isKeyJWT,
          tokenResponse = _this$state3.tokenResponse,
          secretGenResponse = _this$state3.secretGenResponse,
          isUpdating = _this$state3.isUpdating;
      var _this$props2 = this.props,
          intl = _this$props2.intl,
          keyType = _this$props2.keyType,
          classes = _this$props2.classes,
          fullScreen = _this$props2.fullScreen,
          keys = _this$props2.keys,
          _this$props2$selected = _this$props2.selectedApp,
          tokenType = _this$props2$selected.tokenType,
          hashEnabled = _this$props2$selected.hashEnabled,
          selectedGrantTypes = _this$props2.selectedGrantTypes,
          isUserOwner = _this$props2.isUserOwner,
          summary = _this$props2.summary;

      if (notFound) {
        return /*#__PURE__*/_react["default"].createElement(_ResourceNotFound["default"], null);
      }

      if (!keys) {
        return /*#__PURE__*/_react["default"].createElement(_Loading["default"], null);
      }

      var csCkKeys = keys.get(keyType);
      var consumerKey = csCkKeys && csCkKeys.consumerKey;
      var consumerSecret = csCkKeys && csCkKeys.consumerSecret;
      var accessToken;
      var accessTokenScopes;
      var validityPeriod;
      var tokenDetails;

      if (token) {
        accessToken = token;
        accessTokenScopes = tokenScopes;
        validityPeriod = tokenValidityTime;
      } else if (keys.get(keyType) && keys.get(keyType).token) {
        accessToken = keys.get(keyType).token.accessToken;
        accessTokenScopes = keys.get(keyType).token.tokenScopes;
        validityPeriod = keys.get(keyType).token.validityTime;
        tokenDetails = keys.get(keyType).token;
      }

      var dialogHead = 'Undefined';

      if (showCurl) {
        dialogHead = 'Get CURL to Generate Access Token';
      } else if (showSecretGen) {
        dialogHead = 'Generate Consumer Secret';
      } else {
        dialogHead = 'Generate Access Token';
      }

      if (!consumerKey) {
        return /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
          variant: "caption",
          gutterBottom: true
        }, keyType === 'PRODUCTION' ? 'Production ' : 'Sandbox ', /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Shared.AppsAndKeys.ViewKeys.key.secret.title",
          defaultMessage: "Key and Secret is not generated for this application"
        }));
      }

      if (summary) {
        return /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
          container: true,
          spacing: 3,
          className: classes.gridWrapper
        }, this.viewKeyAndSecret(consumerKey, consumerSecret));
      }

      return consumerKey && /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.inputWrapper
      }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        container: true,
        spacing: 3,
        className: classes.gridWrapper
      }, this.viewKeyAndSecret(consumerKey, consumerSecret), accessToken && tokenType !== 'JWT' && !hashEnabled && /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true,
        xs: 6
      }, /*#__PURE__*/_react["default"].createElement(_InputLabel["default"], {
        htmlFor: "adornment-amount"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Shared.AppsAndKeys.ViewKeys.access.token",
        defaultMessage: "Access Token"
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.copyWrapper
      }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
        id: "access-token",
        value: accessToken,
        margin: "normal",
        variant: "outlined",
        fullWidth: true,
        InputProps: {
          readOnly: true,
          endAdornment: /*#__PURE__*/_react["default"].createElement(_InputAdornment["default"], {
            position: "end"
          }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
            title: tokenCopied ? 'Copied' : 'Copy to clipboard',
            placement: "right"
          }, /*#__PURE__*/_react["default"].createElement(_reactCopyToClipboard["default"], {
            text: accessToken,
            onCopy: function onCopy() {
              return _this3.onCopy('tokenCopied');
            }
          }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
            color: "secondary"
          }, "description"))))
        }
      })), /*#__PURE__*/_react["default"].createElement(_FormControl["default"], null, /*#__PURE__*/_react["default"].createElement(_FormHelperText["default"], {
        id: "access-token-helper-text"
      }, "Above token has a validity period of ".concat(validityPeriod, " seconds.\n                                            And the token has (").concat(accessTokenScopes.join(', '), ") scopes.")))), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true,
        xs: 12
      }, /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
        fullScreen: fullScreen,
        open: (open || isKeyJWT) && selectedGrantTypes.includes('client_credentials'),
        onClose: this.handleClose,
        "aria-labelledby": "responsive-dialog-title",
        className: classes.dialogWrapper
      }, /*#__PURE__*/_react["default"].createElement(_DialogTitle["default"], {
        id: "responsive-dialog-title"
      }, dialogHead), /*#__PURE__*/_react["default"].createElement(_DialogContent["default"], null, !showCurl && !isKeyJWT && !showSecretGen && /*#__PURE__*/_react["default"].createElement(_DialogContentText["default"], null, !showToken && /*#__PURE__*/_react["default"].createElement(_Tokens["default"], {
        updateAccessTokenRequest: this.updateAccessTokenRequest,
        accessTokenRequest: accessTokenRequest,
        subscriptionScopes: subscriptionScopes
      }), showToken && /*#__PURE__*/_react["default"].createElement(_ViewToken["default"], {
        token: _objectSpread(_objectSpread({}, tokenResponse), {}, {
          isOauth: true
        })
      })), showCurl && /*#__PURE__*/_react["default"].createElement(_DialogContentText["default"], null, /*#__PURE__*/_react["default"].createElement(_ViewCurl["default"], {
        keys: {
          consumerKey: consumerKey,
          consumerSecret: consumerSecret
        }
      })), showSecretGen && /*#__PURE__*/_react["default"].createElement(_DialogContentText["default"], null, /*#__PURE__*/_react["default"].createElement(_ViewSecret["default"], {
        secret: _objectSpread({}, secretGenResponse)
      })), isKeyJWT && tokenDetails && hashEnabled && /*#__PURE__*/_react["default"].createElement(_DialogContentText["default"], null, /*#__PURE__*/_react["default"].createElement(_ViewToken["default"], {
        token: _objectSpread(_objectSpread({}, tokenDetails), {}, {
          isOauth: true
        }),
        consumerSecret: consumerSecret
      })), isKeyJWT && tokenDetails && !hashEnabled && /*#__PURE__*/_react["default"].createElement(_DialogContentText["default"], null, /*#__PURE__*/_react["default"].createElement(_ViewToken["default"], {
        token: _objectSpread(_objectSpread({}, tokenDetails), {}, {
          isOauth: true
        })
      }))), /*#__PURE__*/_react["default"].createElement(_DialogActions["default"], null, isUpdating && /*#__PURE__*/_react["default"].createElement(_CircularProgress["default"], {
        size: 24
      }), !showToken && !showCurl && !isKeyJWT && !showSecretGen && /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        onClick: this.generateAccessToken,
        color: "primary",
        disabled: isUpdating
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Shared.AppsAndKeys.ViewKeys.consumer.generate.btn",
        defaultMessage: "Generate"
      })), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        onClick: this.handleClose,
        color: "primary",
        autoFocus: true
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Shared.AppsAndKeys.ViewKeys.consumer.close.btn",
        defaultMessage: "Close"
      })))), !hashEnabled && /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.tokenSection
      }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        variant: "outlined",
        size: "small",
        color: "primary",
        className: classes.margin,
        onClick: this.handleClickOpen,
        disabled: !selectedGrantTypes.includes('client_credentials')
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Shared.AppsAndKeys.ViewKeys.generate.access.token",
        defaultMessage: "Generate Access Token"
      })), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        variant: "outlined",
        size: "small",
        color: "primary",
        className: classes.margin,
        onClick: this.handleClickOpenCurl
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Shared.AppsAndKeys.ViewKeys.curl.to.generate",
        defaultMessage: "CURL to Generate Access Token"
      }))), !selectedGrantTypes.includes('client_credentials') && !hashEnabled && /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "caption",
        gutterBottom: true
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Shared.AppsAndKeys.ViewKeys.client.enable.client.credentials",
        defaultMessage: 'Enable Client Credentials grant ' + 'type to generate test access tokens'
      })))));
    }
  }]);

  return ViewKeys;
}(_react["default"].Component);

ViewKeys.defaultProps = {
  fullScreen: false,
  summary: false
};
ViewKeys.propTypes = {
  classes: _propTypes["default"].shape({}).isRequired,
  fullScreen: _propTypes["default"].bool,
  isKeyJWT: _propTypes["default"].bool.isRequired,
  isUserOwner: _propTypes["default"].bool.isRequired,
  summary: _propTypes["default"].bool
};

var _default = (0, _reactIntl.injectIntl)((0, _styles.withStyles)(styles)(ViewKeys));

exports["default"] = _default;