"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _CardActions = _interopRequireDefault(require("@material-ui/core/CardActions"));

var _CardMedia = _interopRequireDefault(require("@material-ui/core/CardMedia"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _jsFileDownload = _interopRequireDefault(require("js-file-download"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _reactIntl = require("react-intl");

var _InlineMessage = _interopRequireDefault(require("AppComponents/Shared/InlineMessage"));

var _AuthManager = _interopRequireDefault(require("AppData/AuthManager"));

var _Settings = require("Settings");

var _api = _interopRequireDefault(require("../../../data/api"));

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
    genericMessageWrapper: {
      margin: theme.spacing(2)
    },
    titleSub: {
      marginLeft: theme.spacing(3),
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      color: theme.palette.getContrastText(theme.palette.background["default"])
    },
    gridRoot: {
      marginLeft: theme.spacing(2)
    },
    titleWrappper: {
      display: 'flex',
      alignItems: 'center',
      '& h4': {
        marginRight: theme.spacing(1)
      }
    },
    cardTitle: {
      background: theme.palette.grey[50]
    },
    cardRoot: {
      background: theme.custom.apiDetailPages.sdkBackground
    }
  };
};
/**
 *
 *
 * @class Sdk
 * @extends {React.Component}
 */


var Sdk = /*#__PURE__*/function (_React$Component) {
  _inherits(Sdk, _React$Component);

  var _super = _createSuper(Sdk);

  function Sdk(props) {
    var _this;

    _classCallCheck(this, Sdk);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (event, item) {
      var apiId = _this.api_uuid;
      var language = item;

      _this.getSdkForApi(apiId, language);
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      var updatedList = _this.state.sdkLanguages;
      updatedList = updatedList.filter(function (item) {
        return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
      });

      _this.setState({
        items: updatedList
      });
    });

    _defineProperty(_assertThisInitialized(_this), "addDefaultSrc", function (ev) {
      ev.target.src = _Settings.app.context + '/site/public/images/sdks/default.svg';
    });

    _this.state = {
      sdkLanguages: null,
      items: null
    };
    var _this$props = _this.props,
        match = _this$props.match,
        _apiId = _this$props.apiId;
    _this.api_uuid = match ? match.params.apiUuid : _apiId;
    _this.filter_threshold = 5;
    _this.getSdkForApi = _this.getSdkForApi.bind(_assertThisInitialized(_this));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.addDefaultSrc = _this.addDefaultSrc.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   *
   *
   * @memberof Sdk
   */


  _createClass(Sdk, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var api = new _api["default"]();

      var user = _AuthManager["default"].getUser();

      if (user != null) {
        var promised_languages = api.getSdkLanguages();
        promised_languages.then(function (response) {
          if (response.obj.length === 0) {
            _this2.setState({
              sdkLanguages: false
            });

            return;
          }

          _this2.setState({
            sdkLanguages: response.obj
          });

          _this2.setState({
            items: response.obj
          });
        })["catch"](function (error) {
          if (process.env.NODE_ENV !== 'production') {
            console.log(error);
          }

          var status = error.status;

          if (status === 404) {
            _this2.setState({
              notFound: true
            });
          }
        });
      }
    }
    /**
     * Call the REST API to generate the SDK
     *
     * @param {*} apiId
     * @param {*} language
     * @memberof Sdk
     */

  }, {
    key: "getSdkForApi",
    value: function getSdkForApi(apiId, language) {
      var _this3 = this;

      var api = new _api["default"]();
      var promised_sdk = api.getSdk(apiId, language);
      promised_sdk.then(function (response) {
        var sdkZipName = response.headers['content-disposition'].match(/filename="(.+)"/)[1];
        var sdkZip = response.data; // Prompt to download zip file for the SDK

        (0, _jsFileDownload["default"])(sdkZip, sdkZipName);
      })["catch"](function (error) {
        if (process.env.NODE_ENV !== 'production') {
          console.log(error);
        }

        var status = error.status;

        if (status === 404) {
          _this3.setState({
            notFound: true
          });
        } else if (status === 400) {
          _this3.setState({
            badRequest: true
          });
        } else if (status === 500) {
          _this3.setState({
            serverError: true
          });
        }
      });
    }
    /**
     * Handle the click event of the download button
     *
     * @memberof Sdk
     */

  }, {
    key: "render",

    /**
     *
     *
     * @returns
     * @memberof Sdk
     */
    value: function render() {
      var _this4 = this;

      var languageList = this.state.items;
      var _this$props2 = this.props,
          onlyIcons = _this$props2.onlyIcons,
          intl = _this$props2.intl,
          classes = _this$props2.classes,
          theme = _this$props2.theme;
      var onlyShowSdks = theme.custom.apiDetailPages.onlyShowSdks;
      var filteredLanguageList = languageList && languageList.length > 0 && onlyShowSdks && onlyShowSdks.length > 0 ? languageList.filter(function (lang) {
        return onlyShowSdks.includes(lang.toLowerCase());
      }) : languageList;

      if (onlyIcons) {
        return filteredLanguageList && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, filteredLanguageList.map(function (language, index) {
          return index < 3 && /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
            item: true,
            xs: 4,
            key: index
          }, /*#__PURE__*/_react["default"].createElement("a", {
            onClick: function onClick(event) {
              return _this4.handleClick(event, language);
            },
            style: {
              cursor: 'pointer'
            }
          }, /*#__PURE__*/_react["default"].createElement("img", {
            alt: language,
            src: _Settings.app.context + '/site/public/images/sdks/' + new String(language) + '.svg',
            style: {
              width: 80,
              height: 80,
              margin: 10
            }
          })));
        }));
      }

      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.titleWrappper
      }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "h4",
        className: classes.titleSub
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Apis.Details.Sdk.title",
        defaultMessage: "Software Development Kits (SDKs)"
      })), filteredLanguageList && this.state.sdkLanguages.length >= this.filter_threshold && /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
        variant: "outlined",
        id: "search",
        label: intl.formatMessage({
          defaultMessage: 'Search SDK',
          id: 'Apis.Details.Sdk.search.sdk'
        }),
        type: "text",
        margin: "normal",
        name: "searchSdk",
        onChange: this.handleChange
      })), filteredLanguageList ? /*#__PURE__*/_react["default"].createElement(_Grid["default"], _defineProperty({
        container: true,
        className: "tab-grid",
        spacing: 0
      }, "className", classes.gridRoot), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true,
        xs: 12,
        sm: 6,
        md: 9,
        lg: 9,
        xl: 10
      }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        container: true,
        justify: "flex-start",
        spacing: 4
      }, filteredLanguageList.map(function (language, index) {
        return /*#__PURE__*/_react["default"].createElement(_Grid["default"], _defineProperty({
          key: index,
          item: true
        }, "key", index), /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            width: 'auto',
            textAlign: 'center',
            margin: '10px'
          }
        }, /*#__PURE__*/_react["default"].createElement(_Card["default"], {
          className: classes.cardRoot
        }, /*#__PURE__*/_react["default"].createElement("div", null, language.toString().toUpperCase()), /*#__PURE__*/_react["default"].createElement(_Divider["default"], null), /*#__PURE__*/_react["default"].createElement(_CardMedia["default"], {
          title: language.toString().toUpperCase(),
          src: _Settings.app.context + '/site/public/images/sdks/' + new String(language) + '.svg',
          classes: {
            root: classes.cardTitle
          }
        }, /*#__PURE__*/_react["default"].createElement("img", {
          alt: language,
          onError: _this4.addDefaultSrc,
          src: "".concat(_Settings.app.context, "/site/public/images/sdks/").concat(language, ".svg"),
          style: {
            width: '100px',
            height: '100px',
            margin: '30px'
          }
        })), /*#__PURE__*/_react["default"].createElement(_CardActions["default"], null, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
          container: true,
          justify: "center"
        }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
          color: "secondary",
          onClick: function onClick(event) {
            return _this4.handleClick(event, language);
          }
        }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], null, "arrow_downward"), 'Download'))))));
      })))) : /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.genericMessageWrapper
      }, /*#__PURE__*/_react["default"].createElement(_InlineMessage["default"], {
        type: "info",
        className: classes.dialogContainer
      }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "h5",
        component: "h3"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Apis.Details.Sdk.no.sdks",
        defaultMessage: "No SDKs"
      })), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        component: "p"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Apis.Details.Sdk.no.sdks.content",
        defaultMessage: "No SDKs available for this API"
      })))));
    }
  }]);

  return Sdk;
}(_react["default"].Component);

Sdk.propTypes = {
  classes: _propTypes["default"].instanceOf(Object).isRequired
};

var _default = (0, _reactIntl.injectIntl)((0, _styles.withStyles)(styles, {
  withTheme: true
})(Sdk));

exports["default"] = _default;