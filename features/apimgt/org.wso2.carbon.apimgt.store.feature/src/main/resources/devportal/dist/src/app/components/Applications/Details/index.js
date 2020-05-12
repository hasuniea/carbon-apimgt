"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

var _VpnKey = _interopRequireDefault(require("@material-ui/icons/VpnKey"));

var _styles = require("@material-ui/core/styles");

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _reactIntl = require("react-intl");

var _api = _interopRequireDefault(require("AppData/api"));

var _Settings = require("Settings");

var _Loading = _interopRequireDefault(require("AppComponents/Base/Loading/Loading"));

var _ResourceNotFound = _interopRequireDefault(require("AppComponents/Base/Errors/ResourceNotFound"));

var _CustomIcon = _interopRequireDefault(require("AppComponents/Shared/CustomIcon"));

var _LeftMenuItem = _interopRequireDefault(require("AppComponents/Shared/LeftMenuItem"));

var _TokenManager = _interopRequireDefault(require("AppComponents/Shared/AppsAndKeys/TokenManager"));

var _ApiKeyManager = _interopRequireDefault(require("AppComponents/Shared/AppsAndKeys/ApiKeyManager"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _reactHelmet = require("react-helmet");

var _Subscriptions = _interopRequireDefault(require("./Subscriptions"));

var _InfoBar = _interopRequireDefault(require("./InfoBar"));

var _Overview = _interopRequireDefault(require("./Overview"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

/**
 *
 *
 * @param {*} theme theme details
 * @returns {Object}
 */
var styles = function styles(theme) {
  var _theme$custom$leftMen = theme.custom.leftMenu,
      width = _theme$custom$leftMen.width,
      position = _theme$custom$leftMen.position;
  var shiftToLeft = position === 'vertical-left' ? width : 0;
  var shiftToRight = position === 'vertical-right' ? width : 0;
  var leftMenuPaddingLeft = position === 'horizontal' ? theme.spacing(3) : 0;
  return {
    LeftMenu: {
      backgroundColor: theme.custom.leftMenu.background,
      backgroundImage: "url(".concat(_Settings.app.context).concat(theme.custom.leftMenu.backgroundImage, ")"),
      textAlign: 'left',
      fontFamily: theme.typography.fontFamily,
      position: 'absolute',
      bottom: 0,
      paddingLeft: leftMenuPaddingLeft
    },
    leftMenuHorizontal: {
      top: theme.custom.infoBar.height,
      width: '100%',
      overflowX: 'auto',
      height: 60,
      display: 'flex',
      left: 0
    },
    leftMenuVerticalLeft: {
      width: theme.custom.leftMenu.width,
      top: 0,
      left: 0,
      overflowY: 'auto'
    },
    leftMenuVerticalRight: {
      width: theme.custom.leftMenu.width,
      top: 0,
      right: 0,
      overflowY: 'auto'
    },
    leftLInkMain: _defineProperty({
      borderRight: 'solid 1px ' + theme.custom.leftMenu.background,
      cursor: 'pointer',
      background: theme.custom.leftMenu.rootBackground,
      color: theme.palette.getContrastText(theme.custom.leftMenu.rootBackground),
      textDecoration: 'none',
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      height: theme.custom.infoBar.height
    }, "textDecoration", 'none'),
    leftLInkMainText: {
      fontSize: 18,
      color: theme.palette.grey[500],
      textDecoration: 'none',
      paddingLeft: theme.spacing(2)
    },
    detailsContent: {
      display: 'flex',
      flex: 1
    },
    content: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      marginLeft: shiftToLeft,
      marginRight: shiftToRight,
      paddingBottom: theme.spacing(3)
    },
    contentLoader: {
      paddingTop: theme.spacing(3)
    },
    contentLoaderRightMenu: {
      paddingRight: theme.custom.leftMenu.width
    }
  };
};
/**
 *
 *
 * @class Details
 * @extends {Component}
 */


var Details = /*#__PURE__*/function (_Component) {
  _inherits(Details, _Component);

  var _super = _createSuper(Details);

  /**
   *
   * @param {Object} props props passed from above
   */
  function Details(props) {
    var _this;

    _classCallCheck(this, Details);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleMenuSelect", function (menuLink) {
      var _this$props = _this.props,
          history = _this$props.history,
          match = _this$props.match;
      history.push({
        pathname: '/applications/' + match.params.application_uuid + '/' + menuLink
      });

      _this.setState({
        active: menuLink
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderManager", function (application, keyType, secScheme) {
      return /*#__PURE__*/_react["default"].createElement(_Paper["default"], null, secScheme === 'oauth' && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_TokenManager["default"], {
        keyType: keyType,
        selectedApp: {
          appId: application.applicationId,
          label: application.name,
          tokenType: application.tokenType,
          owner: application.owner,
          hashEnabled: application.hashEnabled
        }
      })), secScheme === 'apikey' && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_ApiKeyManager["default"], {
        keyType: keyType,
        selectedApp: {
          appId: application.applicationId,
          label: application.name,
          tokenType: application.tokenType,
          owner: application.owner
        }
      })));
    });

    _this.state = {
      application: null,
      active: 'overview'
    };
    return _this;
  }
  /**
   *
   *
   * @memberof Details
   */


  _createClass(Details, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var match = this.props.match;
      var client = new _api["default"]();
      var promisedApplication = client.getApplication(match.params.application_uuid);
      promisedApplication.then(function (response) {
        _this2.setState({
          application: response.obj
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
    /**
     *
     * @param {String} menuLink selected menu name
     * @memberof Details
     */

  }, {
    key: "render",

    /**
     *
     *
     * @returns {Component}
     * @memberof Details
     */
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          classes = _this$props2.classes,
          match = _this$props2.match,
          theme = _this$props2.theme;
      var _this$state = this.state,
          notFound = _this$state.notFound,
          application = _this$state.application;
      var pathPrefix = '/applications/' + match.params.application_uuid;
      var redirectUrl = pathPrefix + '/overview';
      var _theme$custom = theme.custom,
          _theme$custom$leftMen2 = _theme$custom.leftMenu,
          rootIconSize = _theme$custom$leftMen2.rootIconSize,
          rootIconTextVisible = _theme$custom$leftMen2.rootIconTextVisible,
          rootIconVisible = _theme$custom$leftMen2.rootIconVisible,
          position = _theme$custom$leftMen2.position,
          _theme$custom$title = _theme$custom.title,
          prefix = _theme$custom$title.prefix,
          sufix = _theme$custom$title.sufix;

      if (notFound) {
        return /*#__PURE__*/_react["default"].createElement(_ResourceNotFound["default"], null);
      } else if (!application) {
        return /*#__PURE__*/_react["default"].createElement(_Loading["default"], null);
      }

      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactHelmet.Helmet, null, /*#__PURE__*/_react["default"].createElement("title", null, "".concat(prefix, " ").concat(application.name).concat(sufix))), /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])(classes.LeftMenu, _defineProperty({}, classes.leftMenuHorizontal, position === 'horizontal'), _defineProperty({}, classes.leftMenuVerticalLeft, position === 'vertical-left'), _defineProperty({}, classes.leftMenuVerticalRight, position === 'vertical-right'), 'left-menu')
      }, rootIconVisible && /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
        to: "/applications",
        className: classes.leftLInkMain
      }, /*#__PURE__*/_react["default"].createElement(_CustomIcon["default"], {
        width: rootIconSize,
        height: rootIconSize,
        icon: "applications"
      }), rootIconTextVisible && /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        className: classes.leftLInkMainText
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Applications.Details.applications.all",
        defaultMessage: "ALL APPs"
      }))), /*#__PURE__*/_react["default"].createElement(_LeftMenuItem["default"], {
        text: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Applications.Details.menu.overview",
          defaultMessage: "Overview"
        }),
        iconText: "overview",
        route: "overview",
        to: pathPrefix + '/overview'
      }), /*#__PURE__*/_react["default"].createElement(_LeftMenuItem["default"], {
        text: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Applications.Details.menu.prod.keys",
          defaultMessage: "Production Keys"
        }),
        iconText: "productionkeys",
        route: "productionkeys",
        to: pathPrefix + '/productionkeys/oauth'
      }), /*#__PURE__*/_react["default"].createElement(_LeftMenuItem["default"], {
        text: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Applications.Details.menu.oauth.tokens",
          defaultMessage: "OAuth2 Tokens"
        }),
        route: "productionkeys/oauth",
        to: pathPrefix + '/productionkeys/oauth',
        submenu: true
      }), /*#__PURE__*/_react["default"].createElement(_LeftMenuItem["default"], {
        text: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Applications.Details.menu.api.key",
          defaultMessage: "Api Key"
        }),
        route: "productionkeys/apikey",
        to: pathPrefix + '/productionkeys/apikey',
        submenu: true
      }), /*#__PURE__*/_react["default"].createElement(_LeftMenuItem["default"], {
        text: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Applications.Details.menu.sandbox.keys",
          defaultMessage: "Sandbox Keys"
        }),
        iconText: "productionkeys",
        route: "sandboxkeys",
        to: pathPrefix + '/sandboxkeys/oauth'
      }), /*#__PURE__*/_react["default"].createElement(_LeftMenuItem["default"], {
        text: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Applications.Details.menu.oauth.tokens",
          defaultMessage: "OAuth2 Tokens"
        }),
        route: "sandboxkeys/oauth",
        to: pathPrefix + '/sandboxkeys/oauth',
        submenu: true
      }), /*#__PURE__*/_react["default"].createElement(_LeftMenuItem["default"], {
        text: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Applications.Details.menu.api.key",
          defaultMessage: "Api Key"
        }),
        route: "sandboxkeys/apikey",
        to: pathPrefix + '/sandboxkeys/apikey',
        submenu: true
      }), /*#__PURE__*/_react["default"].createElement(_LeftMenuItem["default"], {
        text: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Applications.Details.menu.subscriptions",
          defaultMessage: "Subscriptions"
        }),
        iconText: "subscriptions",
        route: "subscriptions",
        to: pathPrefix + '/subscriptions'
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.content
      }, /*#__PURE__*/_react["default"].createElement(_InfoBar["default"], {
        applicationId: match.params.application_uuid,
        innerRef: function innerRef(node) {
          return _this3.infoBar = node;
        }
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])(_defineProperty({}, classes.contentLoader, position === 'horizontal'), _defineProperty({}, classes.contentLoaderRightMenu, position === 'vertical-right'))
      }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Redirect, {
        exact: true,
        from: "/applications/:applicationId",
        to: redirectUrl
      }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
        path: "/applications/:applicationId/overview",
        component: _Overview["default"]
      }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
        path: "/applications/:applicationId/productionkeys/oauth",
        component: function component() {
          return _this3.renderManager(application, 'PRODUCTION', 'oauth');
        }
      }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
        path: "/applications/:applicationId/productionkeys/apikey",
        component: function component() {
          return _this3.renderManager(application, 'PRODUCTION', 'apikey');
        }
      }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
        path: "/applications/:applicationId/sandboxkeys/oauth",
        component: function component() {
          return _this3.renderManager(application, 'SANDBOX', 'oauth');
        }
      }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
        path: "/applications/:applicationId/sandboxkeys/apikey",
        component: function component() {
          return _this3.renderManager(application, 'SANDBOX', 'apikey');
        }
      }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
        path: "/applications/:applicationId/subscriptions",
        component: _Subscriptions["default"]
      }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
        component: _ResourceNotFound["default"]
      })))));
    }
  }]);

  return Details;
}(_react.Component);

Details.propTypes = {
  classes: _propTypes["default"].shape({}).isRequired,
  theme: _propTypes["default"].shape({}).isRequired,
  match: _propTypes["default"].shape({
    params: _propTypes["default"].shape({
      application_uuid: _propTypes["default"].string.isRequired
    }).isRequired
  }).isRequired,
  history: _propTypes["default"].shape({
    push: _propTypes["default"].func.isRequired
  }).isRequired
};

var _default = (0, _styles.withStyles)(styles, {
  withTheme: true
})(Details);

exports["default"] = _default;