"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _ExpansionPanel = _interopRequireDefault(require("@material-ui/core/ExpansionPanel"));

var _ExpansionPanelSummary = _interopRequireDefault(require("@material-ui/core/ExpansionPanelSummary"));

var _ExpansionPanelDetails = _interopRequireDefault(require("@material-ui/core/ExpansionPanelDetails"));

var _CloudDownloadRounded = _interopRequireDefault(require("@material-ui/icons/CloudDownloadRounded"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _reactCopyToClipboard = _interopRequireDefault(require("react-copy-to-clipboard"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _api = _interopRequireDefault(require("AppData/api"));

var _Utils = _interopRequireDefault(require("AppData/Utils"));

var _Alert = _interopRequireDefault(require("AppComponents/Shared/Alert"));

var _reactIntl = require("react-intl");

var _ApiContext = require("./ApiContext");

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
    buttonIcon: {
      marginRight: 10
    },
    iconAligner: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    iconEven: {
      color: theme.palette.secondary.light,
      width: theme.spacing(3)
    },
    iconOdd: {
      color: theme.palette.secondary.main,
      width: theme.spacing(3)
    },
    iconTextWrapper: {
      display: 'inline-block',
      paddingLeft: 20
    },
    bootstrapRoot: {
      padding: 0,
      'label + &': {
        marginTop: theme.spacing(3)
      }
    },
    bootstrapInput: {
      borderRadius: 4,
      backgroundColor: theme.palette.common.white,
      border: '1px solid #ced4da',
      padding: '5px 12px',
      width: 350,
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:focus': {
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
      }
    },
    iconStyle: {
      cursor: 'grab'
    },
    envRoot: {
      '& span, & h5, & label, & td, & li': {
        color: theme.palette.getContrastText(theme.palette.background.paper)
      }
    }
  };
};
/**
 *  @inheritdoc
 */


var Environments = /*#__PURE__*/function (_React$Component) {
  _inherits(Environments, _React$Component);

  var _super = _createSuper(Environments);

  function Environments(props) {
    var _this;

    _classCallCheck(this, Environments);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onCopy", function (name) {
      _this.setState(_defineProperty({}, name, true));

      var that = _assertThisInitialized(_this);

      var caller = function caller() {
        that.setState({
          urlCopied: false
        });
      };

      setTimeout(caller, 2000);
    });

    _this.apiClient = new _api["default"]();
    _this.state = {
      urlCopied: false
    };
    _this.downloadWSDL = _this.downloadWSDL.bind(_assertThisInitialized(_this));
    _this.onCopy = _this.onCopy.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Environments, [{
    key: "downloadWSDL",

    /**
     * Downloads the WSDL of the api for the provided environment
     *
     * @param {string} apiId uuid of the API
     * @param {string} environmentName name of the environment
     */
    value: function downloadWSDL(apiId, environmentName) {
      var intl = this.props.intl;
      var wsdlClient = this.apiClient.getWsdlClient();
      var promisedGet = wsdlClient.downloadWSDLForEnvironment(apiId, environmentName);
      promisedGet.then(function (done) {
        _Utils["default"].downloadFile(done);
      })["catch"](function (error) {
        if (process.env.NODE_ENV !== 'production') {
          console.log(error);

          _Alert["default"].error(intl.formatMessage({
            id: 'Apis.Details.Environments.download.wsdl.error',
            defaultMessage: 'Error downloading the WSDL'
          }));
        }
      });
    }
    /**
     * Downloads the swagger of the api for the provided environment
     *
     * @param {string} apiId uuid of the API
     * @param {string} environment name of the environment
     */

  }, {
    key: "downloadSwagger",
    value: function downloadSwagger(apiId, environment) {
      var promiseSwagger = this.apiClient.getSwaggerByAPIIdAndEnvironment(apiId, environment);
      promiseSwagger.then(function (done) {
        _Utils["default"].downloadFile(done);
      })["catch"](function (error) {
        console.log(error);

        _Alert["default"].error(intl.formatMessage({
          id: 'Apis.Details.Environments.download.swagger.error',
          defaultMessage: 'Error downloading the Swagger'
        }));
      });
    }
    /**
     *  @inheritdoc
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var api = this.context.api;
      var _this$props = this.props,
          classes = _this$props.classes,
          intl = _this$props.intl;
      var urlCopied = this.state.urlCopied;
      return /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        container: true,
        spacing: 2,
        item: true,
        xs: 12,
        className: classes.envRoot
      }, api.endpointURLs.map(function (endpoint) {
        return /*#__PURE__*/_react["default"].createElement(_Grid["default"], _defineProperty({
          key: endpoint,
          item: true,
          xs: 12
        }, "key", endpoint.environmentName), /*#__PURE__*/_react["default"].createElement(_ExpansionPanel["default"], null, /*#__PURE__*/_react["default"].createElement(_ExpansionPanelSummary["default"], {
          expandIcon: /*#__PURE__*/_react["default"].createElement(_Icon["default"], null, "expand_more"),
          "aria-controls": "panel1a-content",
          id: "panel1a-header"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: classes.iconAligner
        }, endpoint.environmentType === 'hybrid' && /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
          className: classes.iconEven
        }, "cloud"), endpoint.environmentType === 'production' && /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
          className: classes.iconEven
        }, "check_circle"), endpoint.environmentType === 'sandbox' && /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
          className: classes.iconEven
        }, "Build"), /*#__PURE__*/_react["default"].createElement("span", {
          className: classes.iconTextWrapper
        }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
          className: classes.heading
        }, endpoint.environmentName)))), /*#__PURE__*/_react["default"].createElement(_ExpansionPanelDetails["default"], null, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
          container: true,
          item: true,
          xs: 12,
          spacing: 2
        }, (endpoint.URLs.http !== null || endpoint.URLs.https !== null || endpoint.URLs.ws !== null || endpoint.URLs.wss !== null) && /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
          className: classes.heading
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Apis.Details.InfoBar.gateway.urls",
          defaultMessage: "Gateway URLs"
        })), endpoint.URLs.http !== null && /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
          item: true,
          xs: 12
        }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
          defaultValue: endpoint.URLs.http,
          id: "bootstrap-input",
          InputProps: {
            disableUnderline: true,
            readOnly: true,
            classes: {
              root: classes.bootstrapRoot,
              input: classes.bootstrapInput
            }
          },
          InputLabelProps: {
            shrink: true,
            className: classes.bootstrapFormLabel
          }
        }), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
          title: urlCopied ? intl.formatMessage({
            defaultMessage: 'Copied',
            id: 'Apis.Details.Environments.copied'
          }) : intl.formatMessage({
            defaultMessage: 'Copy to clipboard',
            id: 'Apis.Details.Environments.copy.to.clipboard'
          }),
          placement: "right",
          className: classes.iconStyle
        }, /*#__PURE__*/_react["default"].createElement(_reactCopyToClipboard["default"], {
          text: endpoint.URLs.http,
          onCopy: function onCopy() {
            return _this2.onCopy('urlCopied');
          }
        }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
          color: "secondary"
        }, "insert_drive_file")))), endpoint.URLs.https !== null && /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
          item: true,
          xs: 12
        }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
          defaultValue: endpoint.URLs.https,
          id: "bootstrap-input",
          InputProps: {
            disableUnderline: true,
            readOnly: true,
            classes: {
              root: classes.bootstrapRoot,
              input: classes.bootstrapInput
            }
          },
          InputLabelProps: {
            shrink: true,
            className: classes.bootstrapFormLabel
          }
        }), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
          title: urlCopied ? intl.formatMessage({
            defaultMessage: 'Copied',
            id: 'Apis.Details.Environments.copied'
          }) : intl.formatMessage({
            defaultMessage: 'Copy to clipboard',
            id: 'Apis.Details.Environments.copy.to.clipboard'
          }),
          placement: "right",
          className: classes.iconStyle
        }, /*#__PURE__*/_react["default"].createElement(_reactCopyToClipboard["default"], {
          text: endpoint.URLs.https,
          onCopy: function onCopy() {
            return _this2.onCopy('urlCopied');
          }
        }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
          color: "secondary"
        }, "insert_drive_file")))), endpoint.URLs.ws !== null && /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
          item: true,
          xs: 12
        }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
          defaultValue: endpoint.URLs.ws,
          id: "bootstrap-input",
          InputProps: {
            disableUnderline: true,
            readOnly: true,
            classes: {
              root: classes.bootstrapRoot,
              input: classes.bootstrapInput
            }
          },
          InputLabelProps: {
            shrink: true,
            className: classes.bootstrapFormLabel
          }
        }), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
          title: urlCopied ? intl.formatMessage({
            defaultMessage: 'Copied',
            id: 'Apis.Details.Environments.copied'
          }) : intl.formatMessage({
            defaultMessage: 'Copy to clipboard',
            id: 'Apis.Details.Environments.copy.to.clipboard'
          }),
          placement: "right",
          className: classes.iconStyle
        }, /*#__PURE__*/_react["default"].createElement(_reactCopyToClipboard["default"], {
          text: endpoint.URLs.ws,
          onCopy: function onCopy() {
            return _this2.onCopy('urlCopied');
          }
        }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
          color: "secondary"
        }, "insert_drive_file")))), endpoint.URLs.wss !== null && /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
          item: true,
          xs: 12
        }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
          defaultValue: endpoint.URLs.wss,
          id: "bootstrap-input",
          InputProps: {
            disableUnderline: true,
            readOnly: true,
            classes: {
              root: classes.bootstrapRoot,
              input: classes.bootstrapInput
            }
          },
          InputLabelProps: {
            shrink: true,
            className: classes.bootstrapFormLabel
          }
        }), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
          title: urlCopied ? intl.formatMessage({
            defaultMessage: 'Copied',
            id: 'Apis.Details.Environments.copied'
          }) : intl.formatMessage({
            defaultMessage: 'Copy to clipboard',
            id: 'Apis.Details.Environments.copy.to.clipboard'
          }),
          placement: "right",
          className: classes.iconStyle
        }, /*#__PURE__*/_react["default"].createElement(_reactCopyToClipboard["default"], {
          text: endpoint.URLs.wss,
          onCopy: function onCopy() {
            return _this2.onCopy('urlCopied');
          }
        }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
          color: "secondary"
        }, "insert_drive_file")))), endpoint.defaultVersionURLs !== null && (endpoint.defaultVersionURLs.http !== null || endpoint.defaultVersionURLs.https !== null || endpoint.defaultVersionURLs.ws !== null || endpoint.defaultVersionURLs.wss !== null) && /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
          className: classes.heading
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Apis.Details.InfoBar.default.gateway.urls",
          defaultMessage: "Default Gateway URLs"
        })), endpoint.defaultVersionURLs !== null && endpoint.defaultVersionURLs.http !== null && /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
          item: true,
          xs: 12
        }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
          defaultValue: endpoint.defaultVersionURLs.http,
          id: "bootstrap-input",
          InputProps: {
            disableUnderline: true,
            readOnly: true,
            classes: {
              root: classes.bootstrapRoot,
              input: classes.bootstrapInput
            }
          },
          InputLabelProps: {
            shrink: true,
            className: classes.bootstrapFormLabel
          }
        }), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
          title: urlCopied ? intl.formatMessage({
            defaultMessage: 'Copied',
            id: 'Apis.Details.Environments.copied'
          }) : intl.formatMessage({
            defaultMessage: 'Copy to clipboard',
            id: 'Apis.Details.Environments.copy.to.clipboard'
          }),
          placement: "right",
          className: classes.iconStyle
        }, /*#__PURE__*/_react["default"].createElement(_reactCopyToClipboard["default"], {
          text: endpoint.defaultVersionURLs.http,
          onCopy: function onCopy() {
            return _this2.onCopy('urlCopied');
          }
        }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
          color: "secondary"
        }, "file_copy")))), endpoint.defaultVersionURLs !== null && endpoint.defaultVersionURLs.https !== null && /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
          item: true,
          xs: 12
        }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
          defaultValue: endpoint.defaultVersionURLs.https,
          id: "bootstrap-input",
          InputProps: {
            disableUnderline: true,
            readOnly: true,
            classes: {
              root: classes.bootstrapRoot,
              input: classes.bootstrapInput
            }
          },
          InputLabelProps: {
            shrink: true,
            className: classes.bootstrapFormLabel
          }
        }), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
          title: urlCopied ? intl.formatMessage({
            defaultMessage: 'Copied',
            id: 'Apis.Details.Environments.copied'
          }) : intl.formatMessage({
            defaultMessage: 'Copy to clipboard',
            id: 'Apis.Details.Environments.copy.to.clipboard'
          }),
          placement: "right",
          className: classes.iconStyle
        }, /*#__PURE__*/_react["default"].createElement(_reactCopyToClipboard["default"], {
          text: endpoint.defaultVersionURLs.https,
          onCopy: function onCopy() {
            return _this2.onCopy('urlCopied');
          }
        }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
          color: "secondary"
        }, "file_copy")))), endpoint.defaultVersionURLs !== null && endpoint.defaultVersionURLs.ws !== null && /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
          item: true,
          xs: 12
        }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
          defaultValue: endpoint.defaultVersionURLs.ws,
          id: "bootstrap-input",
          InputProps: {
            disableUnderline: true,
            readOnly: true,
            classes: {
              root: classes.bootstrapRoot,
              input: classes.bootstrapInput
            }
          },
          InputLabelProps: {
            shrink: true,
            className: classes.bootstrapFormLabel
          }
        }), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
          title: urlCopied ? intl.formatMessage({
            defaultMessage: 'Copied',
            id: 'Apis.Details.Environments.copied'
          }) : intl.formatMessage({
            defaultMessage: 'Copy to clipboard',
            id: 'Apis.Details.Environments.copy.to.clipboard'
          }),
          placement: "right",
          className: classes.iconStyle
        }, /*#__PURE__*/_react["default"].createElement(_reactCopyToClipboard["default"], {
          text: endpoint.defaultVersionURLs.ws,
          onCopy: function onCopy() {
            return _this2.onCopy('urlCopied');
          }
        }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
          color: "secondary"
        }, "file_copy")))), endpoint.defaultVersionURLs !== null && endpoint.defaultVersionURLs.wss !== null && /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
          item: true,
          xs: 12
        }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
          defaultValue: endpoint.defaultVersionURLs.wss,
          id: "bootstrap-input",
          InputProps: {
            disableUnderline: true,
            readOnly: true,
            classes: {
              root: classes.bootstrapRoot,
              input: classes.bootstrapInput
            }
          },
          InputLabelProps: {
            shrink: true,
            className: classes.bootstrapFormLabel
          }
        }), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
          title: urlCopied ? intl.formatMessage({
            defaultMessage: 'Copied',
            id: 'Apis.Details.Environments.copied'
          }) : intl.formatMessage({
            defaultMessage: 'Copy to clipboard',
            id: 'Apis.Details.Environments.copy.to.clipboard'
          }),
          placement: "right",
          className: classes.iconStyle
        }, /*#__PURE__*/_react["default"].createElement(_reactCopyToClipboard["default"], {
          text: endpoint.defaultVersionURLs.wss,
          onCopy: function onCopy() {
            return _this2.onCopy('urlCopied');
          }
        }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
          color: "secondary"
        }, "file_copy")))), api.type === 'SOAP' && /*#__PURE__*/_react["default"].createElement(_Button["default"], {
          size: "small",
          onClick: function onClick() {
            return _this2.downloadWSDL(api.id, endpoint.environmentName);
          }
        }, /*#__PURE__*/_react["default"].createElement(_CloudDownloadRounded["default"], {
          className: classes.buttonIcon
        }), /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Apis.Details.Environments.download.wsdl",
          defaultMessage: "WSDL"
        })), (api.type === 'HTTP' || api.type === 'SOAPTOREST') && /*#__PURE__*/_react["default"].createElement(_Button["default"], {
          size: "small",
          onClick: function onClick() {
            return _this2.downloadSwagger(api.id, endpoint.environmentName);
          }
        }, /*#__PURE__*/_react["default"].createElement(_CloudDownloadRounded["default"], {
          className: classes.buttonIcon
        }), /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Apis.Details.Environments.download.swagger",
          defaultMessage: "Swagger"
        }))))));
      }));
    }
  }]);

  return Environments;
}(_react["default"].Component);

Environments.propTypes = {
  classes: _propTypes["default"].object.isRequired,
  intl: _propTypes["default"].shape({}).isRequired
};
Environments.contextType = _ApiContext.ApiContext;

var _default = (0, _reactIntl.injectIntl)((0, _styles.withStyles)(styles)(Environments));

exports["default"] = _default;