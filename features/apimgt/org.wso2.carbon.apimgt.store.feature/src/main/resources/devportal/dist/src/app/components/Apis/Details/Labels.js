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

var _reactCopyToClipboard = _interopRequireDefault(require("react-copy-to-clipboard"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _api = _interopRequireDefault(require("AppData/api"));

var _Utils = _interopRequireDefault(require("AppData/Utils"));

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
    iconAligner: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    iconEven: {
      color: theme.palette.secondary.light,
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
    buttonIcon: {
      marginRight: 10
    },
    iconStyle: {
      cursor: 'grab'
    }
  };
};

var Labels = /*#__PURE__*/function (_React$Component) {
  _inherits(Labels, _React$Component);

  var _super = _createSuper(Labels);

  function Labels(props) {
    var _this;

    _classCallCheck(this, Labels);

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
    return _this;
  }

  _createClass(Labels, [{
    key: "downloadSwagger",

    /**
     * Downloads the Swagger of the api for the provided label
     *
     * @param {string} apiId uuid of the API
     * @param {string} label name of the environment
     */
    value: function downloadSwagger(apiId, label) {
      var promiseSwagger = this.apiClient.getSwaggerByAPIIdAndLabel(apiId, label);
      promiseSwagger.then(function (done) {
        _Utils["default"].downloadFile(done);
      })["catch"](function (error) {
        console.log(error);
        Alert.error(intl.formatMessage({
          id: 'Apis.Details.Environments.download.wsdl.error',
          defaultMessage: 'Error downloading the Swagger'
        }));
      });
    }
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
        xs: 12
      }, api.labels.map(function (label) {
        return /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
          key: label,
          item: true,
          xs: 12
        }, /*#__PURE__*/_react["default"].createElement(_ExpansionPanel["default"], null, /*#__PURE__*/_react["default"].createElement(_ExpansionPanelSummary["default"], {
          expandIcon: /*#__PURE__*/_react["default"].createElement(_Icon["default"], null, "expand_more"),
          "aria-controls": "panel1a-content",
          id: "panel1a-header"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: classes.iconAligner
        }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
          className: classes.iconEven
        }, "label"), /*#__PURE__*/_react["default"].createElement("span", {
          className: classes.iconTextWrapper
        }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
          className: classes.heading
        }, label.name)))), /*#__PURE__*/_react["default"].createElement(_ExpansionPanelDetails["default"], null, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
          container: true,
          item: true,
          xs: 12,
          spacing: 2
        }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
          className: classes.heading
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Apis.Details.InfoBar.microgateway.urls",
          defaultMessage: "Microgateway URLs"
        })), label.accessUrls.map(function (row) {
          return /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
            item: true,
            xs: 12,
            key: row
          }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
            defaultValue: row,
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
              id: 'Apis.Details.Labels.copied'
            }) : intl.formatMessage({
              defaultMessage: 'Copy to clipboard',
              id: 'Apis.Details.Labels.copy.to.clipboard'
            }),
            placement: "right",
            className: classes.iconStyle
          }, /*#__PURE__*/_react["default"].createElement(_reactCopyToClipboard["default"], {
            text: row,
            onCopy: function onCopy() {
              return _this2.onCopy('urlCopied');
            }
          }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
            color: "secondary"
          }, "insert_drive_file"))));
        }), (api.type === 'HTTP' || api.type === 'SOAPTOREST') && /*#__PURE__*/_react["default"].createElement(_Button["default"], {
          size: "small",
          onClick: function onClick() {
            return _this2.downloadSwagger(api.id, label.name);
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

  return Labels;
}(_react["default"].Component);

Labels.propTypes = {
  classes: _propTypes["default"].object.isRequired
};
Labels.contextType = _ApiContext.ApiContext;

var _default = (0, _reactIntl.injectIntl)((0, _styles.withStyles)(styles)(Labels));

exports["default"] = _default;