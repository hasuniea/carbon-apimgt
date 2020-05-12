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

var _reactIntl = require("react-intl");

var _api = _interopRequireDefault(require("AppData/api"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _DialogActions = _interopRequireDefault(require("@material-ui/core/DialogActions"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _DialogContentText = _interopRequireDefault(require("@material-ui/core/DialogContentText"));

var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));

var _FormGroup = _interopRequireDefault(require("@material-ui/core/FormGroup"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _ViewToken = _interopRequireDefault(require("./ViewToken"));

var _ApiKey = _interopRequireDefault(require("../ApiKey"));

var _ApiKeyRestriction = _interopRequireDefault(require("../ApiKeyRestriction"));

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _CardContent = _interopRequireDefault(require("@material-ui/core/CardContent"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

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

var styles = function styles(theme) {
  return {
    root: {
      padding: theme.spacing(3),
      '& span, & h5, & label, & input': {
        color: theme.palette.getContrastText(theme.palette.background.paper)
      }
    },
    dialog: {
      '& span, & h2, & label': {
        color: theme.palette.getContrastText(theme.palette.background.paper)
      }
    },
    button: {
      '& span': {
        color: theme.palette.getContrastText(theme.palette.primary.main)
      }
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
      padding: '10px',
      'margin-inline-end': 'auto'
    },
    paper: {
      display: 'flex',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      marginLeft: theme.spacing(10)
    },
    dialogTitle: {
      padding: '24px 24px 0px'
    },
    dialogContent: {
      padding: '0 24px 0px'
    },
    formGroup: {
      padding: '20px'
    },
    gridWrapper: {
      'align-self': 'center'
    },
    keyTitle: {
      textTransform: 'capitalize'
    },
    cardBody: {
      padding: theme.spacing(1),
      lineHeight: 2
    }
  };
};

var ApiKeyManager = /*#__PURE__*/function (_React$Component) {
  _inherits(ApiKeyManager, _React$Component);

  var _super = _createSuper(ApiKeyManager);

  function ApiKeyManager(props) {
    var _this;

    _classCallCheck(this, ApiKeyManager);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "updateIpList", function (ipList) {
      _this.setState(function () {
        return {
          ipList: ipList
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateNewIp", function (newIP) {
      _this.setState(function () {
        return {
          newIP: newIP
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateRefererList", function (refererList) {
      _this.setState(function () {
        return {
          refererList: refererList
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateNewReferer", function (newReferer) {
      _this.setState(function () {
        return {
          newReferer: newReferer
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateRestrictSchema", function (restrictSchema) {
      _this.setState(function () {
        return {
          restrictSchema: restrictSchema
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClose", function () {
      _this.setState(function () {
        return {
          open: false,
          accessTokenRequest: {
            timeout: -1
          }
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickOpen", function () {
      _this.setState(function () {
        return {
          open: true,
          showToken: false
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateAccessTokenRequest", function (accessTokenRequest) {
      _this.setState(function () {
        return {
          accessTokenRequest: accessTokenRequest
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "generateKeys", function () {
      var _this$props = _this.props,
          selectedApp = _this$props.selectedApp,
          keyType = _this$props.keyType;
      var client = new _api["default"]();
      var restrictions = {
        permittedIP: _this.state.ipList.join(","),
        permittedReferer: _this.state.refererList.join(",")
      };
      var promisedKey = client.generateApiKey(selectedApp.appId, keyType, _this.state.accessTokenRequest.timeout, restrictions);
      promisedKey.then(function (response) {
        console.log('Non empty response received');
        var apikey = {
          accessToken: response.body.apikey,
          validityTime: response.body.validityTime,
          isOauth: false
        };

        _this.setState(function () {
          return {
            apikey: apikey,
            open: true,
            showToken: true,
            ipList: [],
            refererList: []
          };
        });
      })["catch"](function (error) {
        if (process.env.NODE_ENV !== 'production') {
          console.log(error);
        }

        var status = error.status;

        if (status === 404) {
          _this.setState({
            notFound: true,
            ipList: [],
            refererList: []
          });
        }
      });
    });

    var _this$props2 = _this.props,
        classes = _this$props2.classes,
        _selectedApp = _this$props2.selectedApp,
        _keyType = _this$props2.keyType;
    _this.state = {
      apikey: null,
      open: false,
      showToken: false,
      accessTokenRequest: {
        timeout: -1
      },
      ipList: [],
      newIP: null,
      restrictSchema: 'none',
      refererList: [],
      newReferer: null
    };
    return _this;
  }

  _createClass(ApiKeyManager, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          classes = _this$props3.classes,
          keyType = _this$props3.keyType;
      var _this$state = this.state,
          showToken = _this$state.showToken,
          accessTokenRequest = _this$state.accessTokenRequest,
          open = _this$state.open,
          apikey = _this$state.apikey,
          newIP = _this$state.newIP,
          ipList = _this$state.ipList,
          newReferer = _this$state.newReferer,
          refererList = _this$state.refererList,
          restrictSchema = _this$state.restrictSchema;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.root
      }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "h5",
        className: classes.keyTitle
      }, keyType.toLowerCase() + ' ', /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        defaultMessage: "API Key",
        id: "Shared.AppsAndKeys.TokenManager.ApiKey"
      })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        container: true,
        direction: "row",
        spacing: 0,
        justify: "left",
        alignItems: "left"
      }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true,
        md: 5,
        xs: 12
      }, /*#__PURE__*/_react["default"].createElement(_ApiKeyRestriction["default"], {
        updateNewIp: this.updateNewIp,
        newIP: newIP,
        updateIpList: this.updateIpList,
        ipList: ipList,
        restrictSchema: restrictSchema,
        updateRestrictSchema: this.updateRestrictSchema,
        refererList: refererList,
        newReferer: newReferer,
        updateNewReferer: this.updateNewReferer,
        updateRefererList: this.updateRefererList
      }), /*#__PURE__*/_react["default"].createElement(_FormGroup["default"], {
        row: true,
        className: classes.formGroup
      }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        container: true,
        spacing: 3
      }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true,
        xs: 12,
        className: classes.gridWrapper
      }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        variant: "contained",
        color: "primary",
        onClick: this.handleClickOpen
      }, "Generate Key")), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        component: "div",
        variant: "body2",
        className: classes.formLabel
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Shared.AppsAndKeys.ApiKeyManager.generate.key.help",
        defaultMessage: "Use the Generate Key button to generate a self-contained JWT token."
      }))))), /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
        open: open,
        onClose: this.handleClose,
        "aria-labelledby": "form-dialog-title",
        className: classes.dialog
      }, /*#__PURE__*/_react["default"].createElement(_DialogTitle["default"], {
        id: "responsive-dialog-title",
        className: classes.dialogTitle
      }, "Generate API Key"), /*#__PURE__*/_react["default"].createElement(_DialogContent["default"], {
        className: classes.dialogContent
      }, /*#__PURE__*/_react["default"].createElement(_DialogContentText["default"], null, !showToken && /*#__PURE__*/_react["default"].createElement(_ApiKey["default"], {
        updateAccessTokenRequest: this.updateAccessTokenRequest,
        accessTokenRequest: accessTokenRequest
      }), showToken && /*#__PURE__*/_react["default"].createElement(_ViewToken["default"], {
        token: apikey
      }))), /*#__PURE__*/_react["default"].createElement(_DialogActions["default"], null, !showToken && /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        onClick: this.generateKeys,
        disabled: !accessTokenRequest.timeout,
        color: "primary",
        variant: "contained",
        className: classes.button
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
      }))))), restrictSchema === "ip" && /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true,
        md: 5,
        xs: 12
      }, /*#__PURE__*/_react["default"].createElement(_Card["default"], null, /*#__PURE__*/_react["default"].createElement(_CardContent["default"], null, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "h5",
        component: "h2"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Shared.AppsAndKeys.ViewKeys.apiKeyRestriction.ip.example.heading",
        defaultMessage: "Examples of IP Addresses allowed"
      })), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "body1",
        component: "p",
        className: classes.cardBody
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Shared.AppsAndKeys.ViewKeys.apiKeyRestriction.ip.example.content",
        defaultMessage: "Specify one IPv4 or IPv6 or a subnet using CIDR notation{linebreak}Examples: {ip1}, {ip2}, {ip3} or {ip4}",
        values: {
          linebreak: /*#__PURE__*/_react["default"].createElement("br", null),
          ip1: /*#__PURE__*/_react["default"].createElement("b", null, "192.168.1.2"),
          ip2: /*#__PURE__*/_react["default"].createElement("b", null, "152.12.0.0/13"),
          ip3: /*#__PURE__*/_react["default"].createElement("b", null, "2002:eb8::2"),
          ip4: /*#__PURE__*/_react["default"].createElement("b", null, "1001:ab8::/44")
        }
      }))))), restrictSchema === "referer" && /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true,
        md: 5,
        xs: 12
      }, /*#__PURE__*/_react["default"].createElement(_Card["default"], null, /*#__PURE__*/_react["default"].createElement(_CardContent["default"], null, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "h5",
        component: "h2"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Shared.AppsAndKeys.ViewKeys.apiKeyRestriction.referer.example.heading",
        defaultMessage: "Examples of URLs allowed to restrict websites"
      })), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "body1",
        component: "p",
        className: classes.cardBody
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Shared.AppsAndKeys.ViewKeys.apiKeyRestriction.ip.example.content",
        defaultMessage: "A specific URL with an exact path: {url1}{linebreak}Any URL in a single subdomain, using a wildcard asterisk (*): {url2}{linebreak}Any subdomain or path URLs in a single domain, using wildcard asterisks (*): {url3}",
        values: {
          linebreak: /*#__PURE__*/_react["default"].createElement("br", null),
          url1: /*#__PURE__*/_react["default"].createElement("b", null, "www.example.com/path"),
          url2: /*#__PURE__*/_react["default"].createElement("b", null, "sub.example.com/*"),
          url3: /*#__PURE__*/_react["default"].createElement("b", null, "*.example.com/*")
        }
      })))))));
    }
  }]);

  return ApiKeyManager;
}(_react["default"].Component);

ApiKeyManager.propTypes = {
  classes: _propTypes["default"].shape({}).isRequired,
  selectedApp: _propTypes["default"].shape({
    tokenType: _propTypes["default"].string.isRequired
  }).isRequired,
  keyType: _propTypes["default"].string.isRequired,
  intl: _propTypes["default"].shape({
    formatMessage: _propTypes["default"].func
  }).isRequired
};

var _default = (0, _reactIntl.injectIntl)((0, _styles.withStyles)(styles)(ApiKeyManager));

exports["default"] = _default;