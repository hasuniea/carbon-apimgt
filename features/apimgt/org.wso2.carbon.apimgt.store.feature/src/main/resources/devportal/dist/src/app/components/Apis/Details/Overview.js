"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _styles = require("@material-ui/core/styles");

var _ExpansionPanel = _interopRequireDefault(require("@material-ui/core/ExpansionPanel"));

var _ExpansionPanelDetails = _interopRequireDefault(require("@material-ui/core/ExpansionPanelDetails"));

var _ExpansionPanelSummary = _interopRequireDefault(require("@material-ui/core/ExpansionPanelSummary"));

var _reactRouterDom = require("react-router-dom");

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _ExpansionPanelActions = _interopRequireDefault(require("@material-ui/core/ExpansionPanelActions"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Alert = _interopRequireDefault(require("AppComponents/Shared/Alert"));

var _reactIntl = require("react-intl");

var _api = _interopRequireDefault(require("AppData/api"));

var _AuthManager = _interopRequireDefault(require("AppData/AuthManager"));

var _View = _interopRequireDefault(require("AppComponents/Apis/Details/Documents/View"));

var _CustomIcon = _interopRequireDefault(require("AppComponents/Shared/CustomIcon"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _Settings = require("Settings");

var _ApiContext = require("./ApiContext");

var _Resources = _interopRequireDefault(require("./Resources"));

var _Operations = _interopRequireDefault(require("./Operations"));

var _Comments = _interopRequireDefault(require("./Comments/Comments"));

var _Sdk = _interopRequireDefault(require("./Sdk"));

var _OverviewDocuments = _interopRequireDefault(require("./OverviewDocuments"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 *
 *
 * @param {*} theme
 */
var styles = function styles(theme) {
  return {
    root: {
      padding: theme.spacing(3),
      color: theme.palette.getContrastText(theme.palette.background.paper),
      margin: -1 * theme.spacing(0, 2)
    },
    iconClass: {
      marginRight: 10
    },
    boxBadge: {
      background: theme.palette.grey.A400,
      fontSize: theme.typography.h5.fontSize,
      padding: theme.spacing(1),
      width: 30,
      height: 30,
      marginRight: 20,
      textAlign: 'center'
    },
    subscriptionBox: {
      paddingLeft: theme.spacing(2)
    },
    linkStyle: {
      color: theme.palette.getContrastText(theme.palette.background["default"]),
      fontSize: theme.typography.fontSize
    },
    subscriptionTop: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    resourceWrapper: {
      height: 192,
      overflow: 'auto'
    },
    actionPanel: {
      justifyContent: 'flex-start'
    },
    linkToTest: {
      textDecoration: 'none'
    },
    button: {
      textDecoration: 'none'
    },
    verticalSpace: {
      marginLeft: theme.spacing(60)
    },
    subheading: {
      marginLeft: theme.spacing(2),
      color: theme.palette.getContrastText(theme.palette.background.paper)
    },
    marginTop: {
      marginTop: theme.spacing(8)
    },
    subsToApp: {
      marginTop: theme.spacing(2)
    },
    expansionRoot: {
      minHeight: 238
    },
    noCommentRoot: {
      backgroundImage: "url(".concat(_Settings.app.context + theme.custom.overviewPage.commentsBackground, ")"),
      height: '100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      minHeight: 192
    },
    commentRoot: {
      height: '100%',
      minHeight: 192
    },
    noDocumentRoot: {
      backgroundImage: "url(".concat(_Settings.app.context + theme.custom.overviewPage.documentsBackground, ")"),
      height: '100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      minHeight: 192
    },
    noCredentialsRoot: {
      backgroundImage: "url(".concat(_Settings.app.context + theme.custom.overviewPage.credentialsBackground, ")"),
      height: '100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      minHeight: 236
    },
    emptyBox: {
      background: theme.custom.overview.noContentBackground,
      color: theme.palette.getContrastText(theme.custom.overview.noContentBackground),
      border: 'solid 1px #fff',
      padding: theme.spacing(2),
      '& span': {
        color: theme.palette.getContrastText(theme.custom.overview.noContentBackground)
      }
    },
    paper: {
      margin: theme.spacing(2),
      padding: theme.spacing(2)
    },
    paperWithDoc: {
      margin: theme.spacing(2),
      padding: theme.spacing(2),
      color: theme.palette.getContrastText(theme.palette.background.paper)
    },
    heading: {
      color: theme.palette.getContrastText(theme.palette.background.paper)
    },
    mutualsslMessage: {
      marginTop: theme.spacing(2)
    }
  };
};

var ExpansionPanelSummary = (0, _styles.withStyles)({
  root: {
    borderBottom: '1px solid rgba(0,0,0,.125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56
    }
  },
  content: {
    '&$expanded': {
      margin: '12px 0'
    },
    alignItems: 'center'
  },
  expanded: {}
})(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_ExpansionPanelSummary["default"], props);
});
ExpansionPanelSummary.muiName = 'ExpansionPanelSummary';
/**
 * Handles the Overview page for APIs and API Products.
 * @param {*} props properties passed by parent element
 * @memberof Overview
 */

function Overview(props) {
  var classes = props.classes,
      theme = props.theme;
  var _theme$custom$apiDeta = theme.custom.apiDetailPages,
      showCredentials = _theme$custom$apiDeta.showCredentials,
      showComments = _theme$custom$apiDeta.showComments,
      showTryout = _theme$custom$apiDeta.showTryout,
      showDocuments = _theme$custom$apiDeta.showDocuments,
      showSdks = _theme$custom$apiDeta.showSdks;

  var _useContext = (0, _react.useContext)(_ApiContext.ApiContext),
      api = _useContext.api,
      subscribedApplications = _useContext.subscribedApplications;

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      totalComments = _useState2[0],
      setCount = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      totalDocuments = _useState4[0],
      setDocsCount = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      overviewDocOverride = _useState6[0],
      setOverviewDocOverride = _useState6[1];

  var isOnlyMutualSSL = api.securityScheme.includes('mutualssl') && !api.securityScheme.includes('oauth2') && !api.securityScheme.includes('api_key') && !api.securityScheme.includes('basic_auth');
  var isOnlyBasicAuth = api.securityScheme.includes('basic_auth') && !api.securityScheme.includes('oauth2') && !api.securityScheme.includes('api_key');
  (0, _react.useEffect)(function () {
    var restApi = new _api["default"]();
    var promisedApi = restApi.getDocumentsByAPIId(api.id);
    promisedApi.then(function (response) {
      var overviewDoc = response.body.list.filter(function (item) {
        return item.otherTypeName === '_overview';
      });

      if (overviewDoc.length > 0) {
        // We can override the UI with this content
        setOverviewDocOverride(overviewDoc[0]); // Only one doc we can render
      }
    })["catch"](function (error) {
      if (process.env.NODE_ENV !== 'production') {
        console.log(error);
      }

      var status = error.status;

      if (status === 404) {
        _Alert["default"].error('Error occured');
      }
    });
  }, []);

  var getResourcesForAPIs = function getResourcesForAPIs(apiType, apiObject) {
    switch (apiType) {
      case 'GRAPHQL':
        return /*#__PURE__*/_react["default"].createElement(_Operations["default"], {
          api: apiObject
        });

      case 'WS':
        return '';

      default:
        return /*#__PURE__*/_react["default"].createElement(_Resources["default"], {
          api: apiObject
        });
    }
  };

  var getTitleForAPIOperationType = function getTitleForAPIOperationType(apiType) {
    switch (apiType) {
      case 'GRAPHQL':
        return /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Apis.Details.Overview.operations.title",
          defaultMessage: "Operations"
        });

      default:
        return /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Apis.Details.Overview.resources.title",
          defaultMessage: "Resources"
        });
    }
  };

  if (overviewDocOverride) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Paper["default"], {
      className: classes.paperWithDoc
    }, /*#__PURE__*/_react["default"].createElement(_View["default"], {
      doc: overviewDocOverride,
      apiId: api.id,
      fullScreen: true
    })));
  }

  var titleIconColor = theme.custom.overview.titleIconColor;
  var titleIconSize = theme.custom.overview.titleIconSize;

  var user = _AuthManager["default"].getUser();

  return /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    className: classes.root,
    spacing: 2
  }, !api.advertiseInfo.advertised && showCredentials && /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12,
    lg: 6
  }, /*#__PURE__*/_react["default"].createElement(_ExpansionPanel["default"], {
    defaultExpanded: true
  }, /*#__PURE__*/_react["default"].createElement(ExpansionPanelSummary, null, /*#__PURE__*/_react["default"].createElement(_CustomIcon["default"], {
    strokeColor: titleIconColor,
    className: classes.iconClass,
    width: titleIconSize,
    height: titleIconSize,
    icon: "credentials"
  }), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    className: classes.heading,
    variant: "h6"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Apis.Details.Overview.api.subscriptions",
    defaultMessage: "Subscriptions"
  }))), api.lifeCycleStatus && api.lifeCycleStatus.toLowerCase() === 'prototyped' ? /*#__PURE__*/_react["default"].createElement(_ExpansionPanelDetails["default"], {
    classes: {
      root: classes.noCredentialsRoot
    }
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    className: classes.root,
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12,
    className: classes.marginTop
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.emptyBox
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body2"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Apis.Details.Overview.no.subscription.message",
    defaultMessage: "Subscriptions Are Not Allowed"
  })))))) : /*#__PURE__*/_react["default"].createElement(_ExpansionPanelDetails["default"], {
    classes: {
      root: classes.expansionRoot
    }
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    className: classes.root,
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "subtitle2"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Apis.Details.Overview.subscriptions.title",
    defaultMessage: "Subscriptions"
  })), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body2"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Apis.Details.Overview.subscribe.info",
    defaultMessage: 'Subscription enables you to receive access' + ' tokens and be authenticated to invoke this API.'
  })), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    display: "block",
    mt: 2
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12
  }, user ? /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    display: "flex",
    flexDirection: "column",
    mr: 2
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: '/apis/' + api.id + '/credentials',
    style: !api.isSubscriptionAvailable ? {
      pointerEvents: 'none'
    } : null
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    variant: "contained",
    color: "primary",
    size: "large",
    disabled: !api.isSubscriptionAvailable || isOnlyMutualSSL || isOnlyBasicAuth
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: 'Apis.Details.Overview.subscribe' + 'btn.link',
    defaultMessage: "Subscribe"
  }))), subscribedApplications && /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "caption",
    component: "div"
  }, subscribedApplications.length === 0 ? /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Apis.Details.Overview.subscribe.count.zero",
    defaultMessage: 'No application subscriptions.'
  }) : subscribedApplications.length, (isOnlyMutualSSL || isOnlyBasicAuth) && /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    className: classes.mutualsslMessage
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body2"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Apis.Details.Overview.mutualssl.basicauth",
    defaultMessage: 'Subscription is not required for Mutual SSL APIs' + ' or APIs with only Basic Authentication.'
  }))), ' ', subscribedApplications.length === 1 && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Apis.Details.Overview.subscribe.count.singular",
    defaultMessage: 'Application subscribed.'
  })), subscribedApplications.length > 1 && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Apis.Details.Overview.subscribe.count.plural",
    defaultMessage: 'Applications subscribed.'
  })))) : /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    display: "inline",
    mr: 2
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: _Settings.app.context + '/services/configs'
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    variant: "contained",
    color: "primary",
    size: "large",
    disabled: !api.isSubscriptionAvailable
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: 'Apis.Details.Overview.signin' + '.subscribe.btn.link',
    defaultMessage: "Sign in to Subscribe"
  }))))))))))), api.type !== 'WS' && showTryout && /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12,
    lg: 6
  }, /*#__PURE__*/_react["default"].createElement(_ExpansionPanel["default"], {
    defaultExpanded: true
  }, /*#__PURE__*/_react["default"].createElement(ExpansionPanelSummary, null, /*#__PURE__*/_react["default"].createElement(_CustomIcon["default"], {
    strokeColor: titleIconColor,
    className: classes.iconClass,
    width: titleIconSize,
    height: titleIconSize,
    icon: "credentials"
  }), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    className: classes.heading,
    variant: "h6"
  }, getTitleForAPIOperationType(api.type))), /*#__PURE__*/_react["default"].createElement(_ExpansionPanelDetails["default"], {
    className: classes.resourceWrapper
  }, getResourcesForAPIs(api.type, api)), !api.advertiseInfo.advertised && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Divider["default"], null), /*#__PURE__*/_react["default"].createElement(_ExpansionPanelActions["default"], {
    className: classes.actionPanel
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: '/apis/' + api.id + '/test',
    className: classes.linkToTest
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    size: "small",
    color: "primary"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Apis.Details.Overview.resources.show.more",
    defaultMessage: "Test >>"
  }))))))), !api.advertiseInfo.advertised && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, showComments && /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12,
    lg: 6
  }, /*#__PURE__*/_react["default"].createElement(_ExpansionPanel["default"], {
    defaultExpanded: true
  }, /*#__PURE__*/_react["default"].createElement(ExpansionPanelSummary, null, /*#__PURE__*/_react["default"].createElement(_CustomIcon["default"], {
    strokeColor: titleIconColor,
    className: classes.iconClass,
    width: titleIconSize,
    height: titleIconSize,
    icon: "comments"
  }), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    className: classes.heading,
    variant: "h6"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Apis.Details.Overview.comments.title",
    defaultMessage: "Comments"
  })), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    className: classes.subheading
  }, ' ' + (totalComments > 3 ? 3 : totalComments) + ' of ' + totalComments)), /*#__PURE__*/_react["default"].createElement(_ExpansionPanelDetails["default"], {
    classes: {
      root: (0, _classnames["default"])(_defineProperty({}, classes.noCommentRoot, totalComments === 0), _defineProperty({}, classes.commentRoot, totalComments !== 0))
    }
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    className: classes.root,
    spacing: 2
  }, api && /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_Comments["default"], {
    apiId: api.id,
    showLatest: true,
    isOverview: true,
    setCount: setCount
  })), totalComments === 0 && /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.emptyBox
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body2"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Apis.Details.Overview.comments.no.content",
    defaultMessage: "No Comments Yet"
  })))))), /*#__PURE__*/_react["default"].createElement(_Divider["default"], null), /*#__PURE__*/_react["default"].createElement(_ExpansionPanelActions["default"], {
    className: classes.actionPanel
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: '/apis/' + api.id + '/comments',
    className: classes.button
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    size: "small",
    color: "primary"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Apis.Details.Overview.comments.show.more",
    defaultMessage: "Show More >>"
  })))))), api.type !== 'WS' && showSdks && /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/_react["default"].createElement(_ExpansionPanel["default"], {
    defaultExpanded: true
  }, /*#__PURE__*/_react["default"].createElement(ExpansionPanelSummary, null, /*#__PURE__*/_react["default"].createElement(_CustomIcon["default"], {
    strokeColor: titleIconColor,
    className: classes.iconClass,
    width: titleIconSize,
    height: titleIconSize,
    icon: "sdk"
  }), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    className: classes.heading,
    variant: "h6"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Apis.Details.Overview.sdk.generation.title",
    defaultMessage: "SDK Generation"
  }))), /*#__PURE__*/_react["default"].createElement(_ExpansionPanelDetails["default"], {
    className: classes.resourceWrapper
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    className: classes.root,
    spacing: 2
  }, api && /*#__PURE__*/_react["default"].createElement(_Sdk["default"], {
    apiId: api.id,
    onlyIcons: true
  }), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Apis.Details.Overview.sdk.generation.description",
    defaultMessage: "If you want to create a software application\n                                                     to consume the subscribed APIs, you can generate client side\n                                                      SDK for a supported language/framework and use it as a start\n                                                       point to write the software application."
  }))))), /*#__PURE__*/_react["default"].createElement(_Divider["default"], null), /*#__PURE__*/_react["default"].createElement(_ExpansionPanelActions["default"], {
    className: classes.actionPanel
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: '/apis/' + api.id + '/sdk',
    className: classes.linkToTest
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    size: "small",
    color: "primary"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Apis.Details.Overview.sdk.generation.show.more",
    defaultMessage: "Show More >>"
  }))))))), showDocuments && /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12,
    lg: 6
  }, /*#__PURE__*/_react["default"].createElement(_ExpansionPanel["default"], {
    defaultExpanded: true
  }, /*#__PURE__*/_react["default"].createElement(ExpansionPanelSummary, null, /*#__PURE__*/_react["default"].createElement(_CustomIcon["default"], {
    strokeColor: titleIconColor,
    className: classes.iconClass,
    width: titleIconSize,
    height: titleIconSize,
    icon: "docs"
  }), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    className: classes.heading,
    variant: "h6"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Apis.Details.Overview.documents.title",
    defaultMessage: "Documents"
  }))), /*#__PURE__*/_react["default"].createElement(_ExpansionPanelDetails["default"], {
    classes: {
      root: (0, _classnames["default"])(_defineProperty({}, classes.noDocumentRoot, totalDocuments === 0))
    }
  }, /*#__PURE__*/_react["default"].createElement(_OverviewDocuments["default"], {
    apiId: api.id,
    setDocsCount: setDocsCount
  })), /*#__PURE__*/_react["default"].createElement(_Divider["default"], null), /*#__PURE__*/_react["default"].createElement(_ExpansionPanelActions["default"], {
    className: classes.actionPanel
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: '/apis/' + api.id + '/documents',
    className: classes.button
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    size: "small",
    color: "primary"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Apis.Details.Overview.comments.show.more",
    defaultMessage: "Show More >>"
  })))))));
}

Overview.propTypes = {
  classes: _propTypes["default"].instanceOf(Object).isRequired,
  theme: _propTypes["default"].instanceOf(Object).isRequired
};

var _default = (0, _styles.withStyles)(styles, {
  withTheme: true
})(Overview);

exports["default"] = _default;