"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _reactRouterDom = require("react-router-dom");

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _reactIntl = require("react-intl");

var _api = _interopRequireDefault(require("AppData/api"));

var _AuthManager = _interopRequireDefault(require("AppData/AuthManager"));

var _withSettingsContext = _interopRequireDefault(require("AppComponents/Shared/withSettingsContext"));

var _Alert = _interopRequireDefault(require("AppComponents/Shared/Alert"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactHelmet = require("react-helmet");

var _Settings = require("Settings");

var _CustomIcon = _interopRequireDefault(require("../../Shared/CustomIcon"));

var _LeftMenuItem = _interopRequireDefault(require("../../Shared/LeftMenuItem"));

var _index = require("../../Base/Errors/index");

var _InfoBar = _interopRequireDefault(require("./InfoBar"));

var _ApiContext = require("./ApiContext");

var _Progress = _interopRequireDefault(require("../../Shared/Progress"));

var _Wizard = _interopRequireDefault(require("./Credentials/Wizard/Wizard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ApiConsole = (0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./ApiConsole/ApiConsole'));
  });
});
var GraphQLConsole = (0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./GraphQLConsole/GraphQLConsole'));
  });
});
var Overview = (0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./Overview'));
  });
});
var Documents = (0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./Documents/Documents'));
  });
});
var Credentials = (0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./Credentials/Credentials'));
  });
});
var Comments = (0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./Comments/Comments'));
  });
});
var Sdk = (0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./Sdk'));
  });
});
var LoadableSwitch = (0, _reactRouterDom.withRouter)(function (props) {
  var match = props.match,
      api = props.api;
  var apiUuid = match.params.api_uuid;
  var path = '/apis/';
  var advertised = api.advertiseInfo.advertised;
  var redirectURL = path + apiUuid + '/overview';
  var tryoutRoute;

  if (api.type === 'GRAPHQL') {
    tryoutRoute = /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
      path: "/apis/:apiUuid/test",
      component: GraphQLConsole
    });
  } else {
    tryoutRoute = /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
      path: "/apis/:apiUuid/test",
      component: ApiConsole
    });
  }

  return /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
    fallback: /*#__PURE__*/_react["default"].createElement(_Progress["default"], null)
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Redirect, {
    exact: true,
    from: "/apis/".concat(apiUuid),
    to: redirectURL
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/apis/:apiUuid/overview",
    render: function render() {
      return /*#__PURE__*/_react["default"].createElement(Overview, props);
    }
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/apis/:apiUuid/documents",
    component: Documents
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/apis/:apiUuid/credentials/wizard",
    component: _Wizard["default"]
  }), !advertised && /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/apis/:apiUuid/comments",
    component: Comments
  }), !advertised && /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/apis/:apiUuid/credentials",
    component: Credentials
  }), !advertised && tryoutRoute, !advertised && /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/apis/:apiUuid/sdk",
    component: Sdk
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    component: _index.ResourceNotFound
  })));
});
/**
 *
 * @returns style object
 * @param {*} theme
 */

var styles = function styles(theme) {
  var _theme$custom$leftMen = theme.custom.leftMenu,
      width = _theme$custom$leftMen.width,
      position = _theme$custom$leftMen.position;
  var shiftToLeft = position === 'vertical-left' ? width : 0;
  var shiftToRight = position === 'vertical-right' ? width : 0;
  var leftMenuPaddingLeft = position === 'horizontal' ? theme.spacing(3) : 0;
  return {
    leftMenu: {
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
    shiftLeft: {
      marginLeft: 0
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
 * @extends {React.Component}
 */


var Details = /*#__PURE__*/function (_React$Component) {
  _inherits(Details, _React$Component);

  var _super = _createSuper(Details);

  /**
   *Creates an instance of Details.
   * @param {*} props
   * @memberof Details
   */
  function Details(props) {
    var _this;

    _classCallCheck(this, Details);

    _this = _super.call(this, props);
    /**
     *
     *
     * @memberof Details
     */

    _this.updateSubscriptionData = function (callback) {
      var existingSubscriptions = null;
      var promisedApplications = null;
      var restApi = new _api["default"](); // const subscriptionClient = new Subscription();

      var promisedAPI = restApi.getAPIById(_this.api_uuid);
      promisedAPI.then(function (api) {
        _this.setState({
          api: api.body
        });
      })["catch"](function (error) {
        var status = error.status,
            response = error.response;
        var _this$props = _this.props,
            setTenantDomain = _this$props.setTenantDomain,
            intl = _this$props.intl;
        var message = intl.formatMessage({
          defaultMessage: 'Invalid tenant domain',
          id: 'Apis.Details.index.invalid.tenant.domain'
        });

        if (response && response.body.code === 901300) {
          setTenantDomain('INVALID');

          _Alert["default"].error(message);
        }

        console.error('Error when getting apis', error);

        if (status === 404 || status === 403) {
          _this.setState({
            notFound: true
          });
        }
      });

      var user = _AuthManager["default"].getUser();

      if (user != null) {
        existingSubscriptions = restApi.getSubscriptions(_this.api_uuid, null);
        promisedApplications = restApi.getAllApplications();
        Promise.all([existingSubscriptions, promisedApplications]).then(function (response) {
          var _response$map = response.map(function (data) {
            return data.obj;
          }),
              _response$map2 = _slicedToArray(_response$map, 2),
              subscriptions = _response$map2[0],
              applications = _response$map2[1];

          var appIdToNameMapping = applications.list.reduce(function (acc, cur) {
            acc[cur.applicationId] = cur.name;
            return acc;
          }, {}); // get the application IDs of existing subscriptions

          var subscribedApplications = subscriptions.list.map(function (element) {
            return {
              value: element.applicationId,
              policy: element.throttlingPolicy,
              status: element.status,
              subscriptionId: element.subscriptionId,
              label: appIdToNameMapping[element.applicationId]
            };
          }); // Removing subscribed applications from all the applications and get
          // the available applications to subscribe

          var subscribedAppIds = subscribedApplications.map(function (sub) {
            return sub.value;
          });
          var applicationsAvailable = applications.list.filter(function (app) {
            return !subscribedAppIds.includes(app.applicationId) && app.status === 'APPROVED';
          }).map(function (filteredApp) {
            return {
              value: filteredApp.applicationId,
              label: filteredApp.name
            };
          });

          _this.setState({
            subscribedApplications: subscribedApplications,
            applicationsAvailable: applicationsAvailable
          }, function () {
            if (callback) {
              callback();
            }
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
      }
    };

    _this.state = {
      active: 'overview',
      overviewHiden: false,
      updateSubscriptionData: _this.updateSubscriptionData,
      api: null,
      applications: null,
      subscribedApplications: [],
      applicationsAvailable: [],
      item: 1,
      xo: null
    };
    _this.setDetailsAPI = _this.setDetailsAPI.bind(_assertThisInitialized(_this));
    _this.api_uuid = _this.props.match.params.api_uuid;
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
      this.updateSubscriptionData();
    }
    /**
     *
     *
     * @param {*} api
     * @memberof Details
     */

  }, {
    key: "setDetailsAPI",
    value: function setDetailsAPI(api) {
      this.setState({
        api: api
      });
    }
    /**
     *
     *
     * @returns
     * @memberof Details
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          classes = _this$props2.classes,
          theme = _this$props2.theme,
          intl = _this$props2.intl,
          match = _this$props2.match;

      var user = _AuthManager["default"].getUser();

      var apiUuid = match.params.apiUuid;
      var _this$state = this.state,
          api = _this$state.api,
          notFound = _this$state.notFound;
      var _theme$custom = theme.custom,
          _theme$custom$leftMen2 = _theme$custom.leftMenu,
          rootIconSize = _theme$custom$leftMen2.rootIconSize,
          rootIconTextVisible = _theme$custom$leftMen2.rootIconTextVisible,
          rootIconVisible = _theme$custom$leftMen2.rootIconVisible,
          position = _theme$custom$leftMen2.position,
          _theme$custom$apiDeta = _theme$custom.apiDetailPages,
          showCredentials = _theme$custom$apiDeta.showCredentials,
          showComments = _theme$custom$apiDeta.showComments,
          showTryout = _theme$custom$apiDeta.showTryout,
          showDocuments = _theme$custom$apiDeta.showDocuments,
          showSdks = _theme$custom$apiDeta.showSdks,
          _theme$custom$title = _theme$custom.title,
          prefix = _theme$custom$title.prefix,
          sufix = _theme$custom$title.sufix;
      var globalStyle = 'body{ font-family: ' + theme.typography.fontFamily + '}';
      var pathPrefix = '/apis/' + this.api_uuid + '/';

      if (!api && notFound) {
        return /*#__PURE__*/_react["default"].createElement(_index.ResourceNotFound, null);
      } // check for widget=true in the query params. If it's present we render without <Base> component.


      var pageUrl = new URL(window.location);
      var isWidget = pageUrl.searchParams.get('widget');
      return api ? /*#__PURE__*/_react["default"].createElement(_ApiContext.ApiContext.Provider, {
        value: this.state
      }, /*#__PURE__*/_react["default"].createElement(_reactHelmet.Helmet, null, /*#__PURE__*/_react["default"].createElement("title", null, "".concat(prefix, " ").concat(api.name).concat(sufix))), /*#__PURE__*/_react["default"].createElement("style", null, globalStyle), !isWidget && /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])(classes.leftMenu, _defineProperty({}, classes.leftMenuHorizontal, position === 'horizontal'), _defineProperty({}, classes.leftMenuVerticalLeft, position === 'vertical-left'), _defineProperty({}, classes.leftMenuVerticalRight, position === 'vertical-right'), 'left-menu')
      }, rootIconVisible && /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
        to: "/apis",
        className: classes.leftLInkMain
      }, /*#__PURE__*/_react["default"].createElement(_CustomIcon["default"], {
        width: rootIconSize,
        height: rootIconSize,
        icon: "api"
      }), rootIconTextVisible && /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        className: classes.leftLInkMainText
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Apis.Details.index.all.apis",
        defaultMessage: "ALL APIs"
      }))), /*#__PURE__*/_react["default"].createElement(_LeftMenuItem["default"], {
        text: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Apis.Details.index.overview",
          defaultMessage: "Overview"
        }),
        route: "overview",
        iconText: "overview",
        to: pathPrefix + 'overview'
      }), !api.advertiseInfo.advertised && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, user && showCredentials && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_LeftMenuItem["default"], {
        text: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Apis.Details.index.subscriptions",
          defaultMessage: "Subscriptions"
        }),
        route: "credentials",
        iconText: "credentials",
        to: pathPrefix + 'credentials'
      })), api.type !== 'WS' && showTryout && /*#__PURE__*/_react["default"].createElement(_LeftMenuItem["default"], {
        text: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Apis.Details.index.try.out",
          defaultMessage: "Try out"
        }),
        route: "test",
        iconText: "test",
        to: pathPrefix + 'test'
      }), showComments && /*#__PURE__*/_react["default"].createElement(_LeftMenuItem["default"], {
        text: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Apis.Details.index.comments",
          defaultMessage: "Comments"
        }),
        route: "comments",
        iconText: "comments",
        to: pathPrefix + 'comments'
      })), showDocuments && /*#__PURE__*/_react["default"].createElement(_LeftMenuItem["default"], {
        text: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Apis.Details.index.documentation",
          defaultMessage: "Documentation"
        }),
        route: "documents",
        iconText: "docs",
        to: pathPrefix + 'documents'
      }), !api.advertiseInfo.advertised && api.type !== 'WS' && showSdks && /*#__PURE__*/_react["default"].createElement(_LeftMenuItem["default"], {
        text: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Apis.Details.index.sdk",
          defaultMessage: "SDKs"
        }),
        route: "sdk",
        iconText: "sdk",
        to: pathPrefix + 'sdk'
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])(classes.content, _defineProperty({}, classes.shiftLeft, isWidget))
      }, /*#__PURE__*/_react["default"].createElement(_InfoBar["default"], _extends({
        apiId: apiUuid,
        innerRef: function innerRef(node) {
          return _this2.infoBar = node;
        },
        intl: intl
      }, this.props)), /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])(_defineProperty({}, classes.contentLoader, position === 'horizontal'), _defineProperty({}, classes.contentLoaderRightMenu, position === 'vertical-right'))
      }, /*#__PURE__*/_react["default"].createElement(LoadableSwitch, {
        api: api,
        updateSubscriptionData: this.updateSubscriptionData
      })))) : /*#__PURE__*/_react["default"].createElement("div", {
        className: "apim-dual-ring"
      });
    }
  }]);

  return Details;
}(_react["default"].Component);

Details.propTypes = {
  classes: _propTypes["default"].shape({}).isRequired,
  theme: _propTypes["default"].shape({}).isRequired,
  match: _propTypes["default"].shape({}).isRequired,
  intl: _propTypes["default"].shape({
    formatMessage: _propTypes["default"].func
  }).isRequired
};

var _default = (0, _withSettingsContext["default"])((0, _reactIntl.injectIntl)((0, _styles.withStyles)(styles, {
  withTheme: true
})(Details)));

exports["default"] = _default;