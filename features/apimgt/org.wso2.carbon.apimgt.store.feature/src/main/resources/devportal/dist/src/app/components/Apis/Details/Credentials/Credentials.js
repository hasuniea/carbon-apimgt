"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _reactRouterDom = require("react-router-dom");

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Subscription = _interopRequireDefault(require("AppData/Subscription"));

var _GenericDisplayDialog = _interopRequireDefault(require("AppComponents/Shared/GenericDisplayDialog"));

var _api = _interopRequireDefault(require("AppData/api"));

var _Alert = _interopRequireDefault(require("AppComponents/Shared/Alert"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _InlineMessage = _interopRequireDefault(require("AppComponents/Shared/InlineMessage"));

var _reactIntl = require("react-intl");

var _Application = _interopRequireDefault(require("AppData/Application"));

var _AuthManager = _interopRequireDefault(require("AppData/AuthManager"));

var _SubscribeToApi = _interopRequireDefault(require("AppComponents/Shared/AppsAndKeys/SubscribeToApi"));

var _ScopeValidation = require("AppComponents/Shared/ScopeValidation");

var _ApiContext = require("../ApiContext");

var _SubscriptionTableRow = _interopRequireDefault(require("./SubscriptionTableRow"));

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

/**
 * @inheritdoc
 * @param {*} theme theme object
 */
var styles = function styles(theme) {
  return {
    contentWrapper: {
      maxWidth: theme.custom.contentAreaWidth,
      paddingLeft: theme.spacing(3),
      paddingTop: theme.spacing(3)
    },
    titleSub: {
      marginLeft: theme.spacing(3),
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      color: theme.palette.getContrastText(theme.palette.background["default"])
    },
    generateCredentialWrapper: {
      marginLeft: 0,
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      '& span, & h5, & label, & td, & li, & div': {
        color: theme.palette.getContrastText(theme.palette.background.paper)
      }
    },
    tableMain: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(1),
      '& tr td': {
        paddingLeft: theme.spacing(1)
      },
      '& tr:nth-child(even)': {
        backgroundColor: theme.custom.listView.tableBodyEvenBackgrund,
        '& td, & a, & .material-icons': {
          color: theme.palette.getContrastText(theme.custom.listView.tableBodyEvenBackgrund)
        }
      },
      '& tr:nth-child(odd)': {
        backgroundColor: theme.custom.listView.tableBodyOddBackgrund,
        '& td, & a, & .material-icons': {
          color: theme.palette.getContrastText(theme.custom.listView.tableBodyOddBackgrund)
        }
      },
      '& th': {
        backgroundColor: theme.custom.listView.tableHeadBackground,
        color: theme.palette.getContrastText(theme.custom.listView.tableHeadBackground),
        paddingLeft: theme.spacing(1),
        borderBottom: 'solid 1px ' + theme.palette.grey.A200,
        borderTop: 'solid 1px ' + theme.palette.grey.A200,
        textAlign: 'left',
        fontSize: '11px',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1)
      }
    },
    expansion: {
      background: 'transparent',
      boxShadow: 'none'
    },
    summary: {
      alignItems: 'center'
    },
    subscribeRoot: {
      paddingLeft: theme.spacing(2)
    },
    activeLink: {
      background: theme.palette.grey.A100
    },
    appBar: {
      background: theme.palette.background.paper,
      color: theme.palette.getContrastText(theme.palette.background.paper)
    },
    toolbar: {
      marginLeft: theme.spacing(2)
    },
    subscribeTitle: {
      flex: 1
    },
    paper: {
      marginLeft: theme.spacing(3),
      padding: theme.spacing(2)
    },
    descWrapper: {
      marginBottom: theme.spacing(2),
      color: theme.palette.getContrastText(theme.palette.background.paper)
    },
    credentialBoxWrapper: {
      paddingLeft: theme.spacing(2)
    },
    credentialBox: {
      padding: theme.spacing(1),
      border: 'solid 1px #ccc',
      borderRadius: 5,
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(2)
    },
    addLinkWrapper: {
      marginLeft: theme.spacing(2)
    },
    subsListTitle: {
      color: theme.palette.getContrastText(theme.palette.background.paper)
    },
    subsListDesc: {
      color: theme.palette.getContrastText(theme.palette.background.paper)
    },
    buttonElm: {
      '& span': {
        color: theme.palette.getContrastText(theme.palette.primary.main)
      }
    }
  };
};
/**
 * @class Credentials
 * @extends {React.Component}
 */


var Credentials = /*#__PURE__*/function (_React$Component) {
  _inherits(Credentials, _React$Component);

  var _super = _createSuper(Credentials);

  function Credentials() {
    var _this;

    _classCallCheck(this, Credentials);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      expanded: true,
      selectedAppId: false,
      selectedKeyType: false,
      subscriptionRequest: {
        applicationId: '',
        apiId: '',
        throttlingPolicy: ''
      },
      throttlingPolicyList: [],
      applicationOwner: '',
      hashEnabled: false
    });

    _defineProperty(_assertThisInitialized(_this), "updateData", function () {
      var _this$context = _this.context,
          api = _this$context.api,
          applicationsAvailable = _this$context.applicationsAvailable;
      var subscriptionRequest = _this.state.subscriptionRequest;

      var newSubscriptionRequest = _objectSpread(_objectSpread({}, subscriptionRequest), {}, {
        apiId: api.id
      });

      var throttlingPolicyList = api.tiers;

      if (throttlingPolicyList && throttlingPolicyList[0]) {
        newSubscriptionRequest.throttlingPolicy = throttlingPolicyList[0].tierName;
      }

      if (applicationsAvailable && applicationsAvailable[0]) {
        newSubscriptionRequest.applicationId = applicationsAvailable[0].value;
      }

      _this.setState({
        subscriptionRequest: newSubscriptionRequest,
        throttlingPolicyList: throttlingPolicyList
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleExpandClick", function () {
      _this.setState(function (state) {
        return {
          expanded: !state.expanded
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubscribe", function () {
      var _this$context2 = _this.context,
          updateSubscriptionData = _this$context2.updateSubscriptionData,
          apiType = _this$context2.apiType;
      var subscriptionRequest = _this.state.subscriptionRequest;
      var intl = _this.props.intl;
      var api = new _api["default"]();
      api.subscribe(subscriptionRequest.apiId, subscriptionRequest.applicationId, subscriptionRequest.throttlingPolicy, apiType).then(function (response) {
        if (response.body.status === 'ON_HOLD') {
          _Alert["default"].info(intl.formatMessage({
            defaultMessage: 'Your subscription request has been submitted and is now awaiting approval.',
            id: 'subscription.pending'
          }));
        } else {
          console.log('Subscription created successfully with ID : ' + response.body.subscriptionId);

          _Alert["default"].info(intl.formatMessage({
            defaultMessage: 'Subscribed successfully',
            id: 'Apis.Details.Credentials.Credentials.subscribed.successfully'
          }));
        }

        if (updateSubscriptionData) updateSubscriptionData(_this.updateData);
      })["catch"](function (error) {
        console.log('Error while creating the subscription.');
        console.error(error);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "goToWizard", function () {
      var history = _this.props.history;
      history.push('credentials/wizard');
    });

    _defineProperty(_assertThisInitialized(_this), "loadInfo", function (selectedKeyType, selectedAppId) {
      _this.setState({
        selectedKeyType: selectedKeyType,
        selectedAppId: selectedAppId
      });

      _Application["default"].get(selectedAppId).then(function (result) {
        _this.setState({
          applicationOwner: result.owner,
          hashEnabled: result.hashEnabled
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateSubscriptionRequest", function (subscriptionRequest) {
      _this.setState({
        subscriptionRequest: subscriptionRequest
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubscriptionDelete", function (subscriptionId, updateSubscriptionData) {
      var intl = _this.props.intl;
      var client = new _Subscription["default"]();
      var promisedDelete = client.deleteSubscription(subscriptionId);
      promisedDelete.then(function (response) {
        if (response.status !== 200) {
          console.log(response);

          _Alert["default"].info(intl.formatMessage({
            defaultMessage: 'Something went wrong while deleting the Subscription!',
            id: 'Apis.Details.Credentials.Credentials.something.went.wrong.with.subscription'
          }));

          return;
        }

        _Alert["default"].info(intl.formatMessage({
          defaultMessage: 'Subscription deleted successfully!',
          id: 'Apis.Details.Credentials.Credentials.subscription.deleted.successfully'
        }));

        if (updateSubscriptionData) updateSubscriptionData();
      });
    });

    return _this;
  }

  _createClass(Credentials, [{
    key: "componentDidMount",

    /**
     *  Set the initial values for subscription request
     */
    value: function componentDidMount() {
      var _this$context3 = this.context,
          api = _this$context3.api,
          updateSubscriptionData = _this$context3.updateSubscriptionData;

      if (api) {
        this.updateData();
      } else {
        updateSubscriptionData(this.updateData);
      }
    }
  }, {
    key: "render",

    /**
     * @inheritdoc
     */
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          classes = _this$props.classes,
          intl = _this$props.intl;
      var _this$context4 = this.context,
          api = _this$context4.api,
          updateSubscriptionData = _this$context4.updateSubscriptionData,
          applicationsAvailable = _this$context4.applicationsAvailable,
          subscribedApplications = _this$context4.subscribedApplications;
      var _this$state = this.state,
          selectedKeyType = _this$state.selectedKeyType,
          selectedAppId = _this$state.selectedAppId,
          subscriptionRequest = _this$state.subscriptionRequest,
          throttlingPolicyList = _this$state.throttlingPolicyList,
          applicationOwner = _this$state.applicationOwner,
          hashEnabled = _this$state.hashEnabled;

      var user = _AuthManager["default"].getUser();

      var isOnlyMutualSSL = api.securityScheme.includes('mutualssl') && !api.securityScheme.includes('oauth2') && !api.securityScheme.includes('api_key') && !api.securityScheme.includes('basic_auth');
      var isOnlyBasicAuth = api.securityScheme.includes('basic_auth') && !api.securityScheme.includes('oauth2') && !api.securityScheme.includes('api_key');

      var renderCredentialInfo = function renderCredentialInfo() {
        var isPrototypedAPI = api.lifeCycleStatus && api.lifeCycleStatus.toLowerCase() === 'prototyped';

        if (isPrototypedAPI) {
          return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_InlineMessage["default"], {
            type: "info",
            className: classes.dialogContainer
          }, /*#__PURE__*/_react["default"].createElement(_core.Typography, {
            component: "p"
          }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
            id: 'Apis.Details.Credentials.Credentials.you.do.not.need' + '.credentials.to.access.prototyped.api',
            defaultMessage: "You do not need credentials to access Prototyped APIs"
          }))));
        } else if (isOnlyMutualSSL || isOnlyBasicAuth) {
          return /*#__PURE__*/_react["default"].createElement(_InlineMessage["default"], {
            type: "info",
            className: classes.dialogContainer
          }, /*#__PURE__*/_react["default"].createElement(_core.Typography, {
            component: "p"
          }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
            id: "Apis.Details.Creadentials.credetials.mutualssl",
            defaultMessage: 'Subscription is not required for Mutual SSL APIs' + ' or APIs with only Basic Authentication.'
          })));
        } else if (applicationsAvailable.length === 0 && subscribedApplications.length === 0) {
          return /*#__PURE__*/_react["default"].createElement(_GenericDisplayDialog["default"], {
            classes: classes,
            handleClick: _this2.goToWizard,
            heading: user ? intl.formatMessage({
              defaultMessage: 'Subscribe',
              id: 'Apis.Details.Credentials.Credentials.subscribe.to.application'
            }) : intl.formatMessage({
              defaultMessage: 'Sign In to Subscribe',
              id: 'Apis.Details.Credentials.Credentials.subscribe.to.application.sign.in'
            }),
            caption: intl.formatMessage({
              defaultMessage: 'You need to subscribe to an application to access this API',
              id: 'Apis.Details.Credentials.Credentials.subscribe.to.application.msg'
            }),
            buttonText: intl.formatMessage({
              defaultMessage: 'Subscribe',
              id: 'Apis.Details.Credentials.Credentials.generate'
            })
          });
        } else {
          return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
            className: classes.generateCredentialWrapper
          }, /*#__PURE__*/_react["default"].createElement(_ScopeValidation.ScopeValidation, {
            resourcePath: _ScopeValidation.resourcePaths.SUBSCRIPTIONS,
            resourceMethod: _ScopeValidation.resourceMethods.POST
          }, /*#__PURE__*/_react["default"].createElement(_core.Typography, {
            variant: "h5"
          }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
            id: 'Apis.Details.Credentials.Credentials.' + 'subscribe.to.application',
            defaultMessage: "Subscribe"
          })), /*#__PURE__*/_react["default"].createElement("div", {
            className: classes.credentialBoxWrapper
          }, applicationsAvailable.length === 0 && /*#__PURE__*/_react["default"].createElement("div", {
            className: classes.credentialBox
          }, /*#__PURE__*/_react["default"].createElement(_core.Typography, {
            variant: "body2"
          }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
            id: 'Apis.Details.Credentials.Credentials.' + 'api.credentials.with.wizard.message',
            defaultMessage: 'Use the Subscription and Key Generation Wizard. ' + 'Create a new application -> ' + 'Subscribe -> Generate keys and ' + 'Access Token to invoke this API.'
          })), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
            to: isOnlyMutualSSL || isOnlyBasicAuth ? null : "/apis/".concat(api.id, "/credentials/wizard"),
            style: !api.isSubscriptionAvailable ? {
              pointerEvents: 'none'
            } : null
          }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
            variant: "contained",
            color: "primary",
            className: classes.buttonElm,
            disabled: !api.isSubscriptionAvailable || isOnlyMutualSSL || isOnlyBasicAuth
          }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
            id: 'Apis.Details.Credentials.' + 'SubscibeButtonPanel.subscribe.wizard.with.new.app',
            defaultMessage: "Subscription & Key Generation Wizard"
          })))), applicationsAvailable.length > 0 && /*#__PURE__*/_react["default"].createElement("div", {
            className: classes.credentialBox
          }, /*#__PURE__*/_react["default"].createElement(_core.Typography, {
            variant: "body2"
          }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
            id: 'Apis.Details.Credentials.Credentials' + '.api.credentials.with.subscribe.message',
            defaultMessage: 'Subscribe to an application' + ' and generate credentials'
          })), /*#__PURE__*/_react["default"].createElement(_SubscribeToApi["default"], {
            applicationsAvailable: applicationsAvailable,
            subscriptionRequest: subscriptionRequest,
            throttlingPolicyList: throttlingPolicyList,
            updateSubscriptionRequest: _this2.updateSubscriptionRequest,
            renderSmall: true
          }), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
            variant: "contained",
            color: "primary",
            className: classes.buttonElm,
            onClick: function onClick() {
              return _this2.handleSubscribe();
            },
            disabled: !api.isSubscriptionAvailable
          }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
            id: 'Apis.Details.Credentials.' + 'SubscibeButtonPanel.subscribe.btn',
            defaultMessage: "Subscribe"
          })))))), subscribedApplications && subscribedApplications.length > 0 && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_core.Typography, {
            variant: "h5",
            className: classes.subsListTitle
          }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
            id: 'Apis.Details.Credentials.Credentials.' + 'api.credentials.subscribed.apps.title',
            defaultMessage: "Subscriptions"
          })), /*#__PURE__*/_react["default"].createElement(_core.Typography, {
            variant: "body2",
            className: classes.subsListDesc
          }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
            id: 'Apis.Details.Credentials.Credentials.' + 'api.credentials.subscribed.apps.description',
            defaultMessage: "( Applications Subscribed to this Api )"
          })), /*#__PURE__*/_react["default"].createElement("table", {
            className: classes.tableMain
          }, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", {
            className: classes.th
          }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
            id: 'Apis.Details.Credentials.Credentials.' + 'api.credentials.subscribed.apps.name',
            defaultMessage: "Application Name"
          })), /*#__PURE__*/_react["default"].createElement("th", {
            className: classes.th
          }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
            id: 'Apis.Details.Credentials.Credentials.api.' + 'credentials.subscribed.apps.tier',
            defaultMessage: "Throttling Tier"
          })), /*#__PURE__*/_react["default"].createElement("th", {
            className: classes.th
          }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
            id: 'Apis.Details.Credentials.Credentials.' + 'api.credentials.subscribed.apps.status',
            defaultMessage: "Application Status"
          })), /*#__PURE__*/_react["default"].createElement("th", {
            className: classes.th
          })), subscribedApplications.map(function (app, index) {
            return /*#__PURE__*/_react["default"].createElement(_SubscriptionTableRow["default"], {
              key: index,
              loadInfo: _this2.loadInfo,
              handleSubscriptionDelete: _this2.handleSubscriptionDelete,
              selectedAppId: selectedAppId,
              updateSubscriptionData: updateSubscriptionData,
              selectedKeyType: selectedKeyType,
              app: app,
              index: index,
              applicationOwner: applicationOwner,
              hashEnabled: hashEnabled
            });
          }))));
        }
      };

      return /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        container: true
      }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true,
        md: 12,
        lg: 11
      }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        container: true,
        spacing: 5
      }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true,
        md: 12
      }, /*#__PURE__*/_react["default"].createElement(_core.Typography, {
        onClick: this.handleExpandClick,
        variant: "h4",
        className: classes.titleSub
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Apis.Details.Credentials.Credentials.api.credentials",
        defaultMessage: "Subscriptions"
      }), applicationsAvailable.length > 0 && /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
        to: isOnlyMutualSSL || isOnlyBasicAuth ? null : "/apis/".concat(api.id, "/credentials/wizard"),
        style: !api.isSubscriptionAvailable ? {
          pointerEvents: 'none'
        } : null,
        className: classes.addLinkWrapper
      }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        color: "secondary",
        className: classes.buttonElm,
        disabled: !api.isSubscriptionAvailable || isOnlyMutualSSL || isOnlyBasicAuth,
        size: "small"
      }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], null, "add_circle_outline"), /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: 'Apis.Details.Credentials.' + 'SubscibeButtonPanel.subscribe.wizard.with.new.app',
        defaultMessage: "Subscription & Key Generation Wizard"
      })))), /*#__PURE__*/_react["default"].createElement(_Paper["default"], {
        elevation: 0,
        className: classes.paper
      }, /*#__PURE__*/_react["default"].createElement(_core.Typography, {
        variant: "body2",
        className: classes.descWrapper
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Apis.Details.Credentials.Credentials.",
        defaultMessage: "An application \n                                        is primarily used to decouple the consumer from the APIs. It allows you to \n                                        generate and use a single key for multiple APIs and subscribe multiple times to \n                                        a single API with different SLA levels."
      })), renderCredentialInfo())))));
    }
  }]);

  return Credentials;
}(_react["default"].Component);

_defineProperty(Credentials, "contextType", _ApiContext.ApiContext);

Credentials.propTypes = {
  classes: _propTypes["default"].shape({
    contentWrapper: _propTypes["default"].string,
    titleSub: _propTypes["default"].string,
    tableMain: _propTypes["default"].string,
    th: _propTypes["default"].string,
    paper: _propTypes["default"].string,
    descWrapper: _propTypes["default"].string,
    generateCredentialWrapper: _propTypes["default"].string,
    credentialBoxWrapper: _propTypes["default"].string,
    credentialBox: _propTypes["default"].string,
    buttonElm: _propTypes["default"].string,
    dialogContainer: _propTypes["default"].string
  }).isRequired,
  history: _propTypes["default"].shape({}).isRequired,
  intl: _propTypes["default"].shape({}).isRequired
};

var _default = (0, _reactIntl.injectIntl)((0, _styles.withStyles)(styles, {
  withTheme: true
})(Credentials));

exports["default"] = _default;