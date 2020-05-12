"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Table = _interopRequireDefault(require("@material-ui/core/Table"));

var _TableBody = _interopRequireDefault(require("@material-ui/core/TableBody"));

var _TableCell = _interopRequireDefault(require("@material-ui/core/TableCell"));

var _TableHead = _interopRequireDefault(require("@material-ui/core/TableHead"));

var _TableRow = _interopRequireDefault(require("@material-ui/core/TableRow"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _CardActions = _interopRequireDefault(require("@material-ui/core/CardActions"));

var _CardContent = _interopRequireDefault(require("@material-ui/core/CardContent"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _InputBase = _interopRequireDefault(require("@material-ui/core/InputBase"));

var _HighlightOff = _interopRequireDefault(require("@material-ui/icons/HighlightOff"));

var _Search = _interopRequireDefault(require("@material-ui/icons/Search"));

var _reactIntl = require("react-intl");

var _Progress = _interopRequireDefault(require("AppComponents/Shared/Progress"));

var _Alert = _interopRequireDefault(require("AppComponents/Shared/Alert"));

var _APICardView = _interopRequireDefault(require("AppComponents/Apis/Listing/APICardView"));

var _ResourceNotFound = _interopRequireDefault(require("AppComponents/Base/Errors/ResourceNotFound"));

var _Subscription = _interopRequireDefault(require("AppData/Subscription"));

var _api = _interopRequireDefault(require("AppData/api"));

var _Settings = require("Settings");

var _InlineMessage = _interopRequireDefault(require("AppComponents/Shared/InlineMessage"));

var _SubscriptionTableData = _interopRequireDefault(require("./SubscriptionTableData"));

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

/**
 *
 * @inheritdoc
 * @param {*} theme theme
 */
var styles = function styles(theme) {
  return {
    searchRoot: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
      flex: 1,
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2)
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1
    },
    iconButton: {
      padding: 10
    },
    divider: {
      height: 28,
      margin: 4
    },
    root: {
      padding: theme.spacing(3),
      '& h5': {
        color: theme.palette.getContrastText(theme.palette.background["default"])
      }
    },
    subscribePop: {
      '& span, & h5, & label, & input, & td, & li': {
        color: theme.palette.getContrastText(theme.palette.background.paper)
      }
    },
    firstCell: {
      paddingLeft: 0
    },
    cardTitle: {
      paddingLeft: theme.spacing(2)
    },
    cardContent: {
      '& table tr td': {
        paddingLeft: theme.spacing(1)
      },
      '& table tr:nth-child(even)': {
        backgroundColor: theme.custom.listView.tableBodyEvenBackgrund,
        '& td, & a': {
          color: theme.palette.getContrastText(theme.custom.listView.tableBodyEvenBackgrund)
        }
      },
      '& table tr:nth-child(odd)': {
        backgroundColor: theme.custom.listView.tableBodyOddBackgrund,
        '& td, & a': {
          color: theme.palette.getContrastText(theme.custom.listView.tableBodyOddBackgrund)
        }
      },
      '& table th': {
        backgroundColor: theme.custom.listView.tableHeadBackground,
        color: theme.palette.getContrastText(theme.custom.listView.tableHeadBackground),
        paddingLeft: theme.spacing(1)
      }
    },
    titleWrapper: {
      display: 'flex',
      alignItems: 'center',
      paddingBottom: theme.spacing(2),
      '& h5': {
        marginRight: theme.spacing(1)
      }
    },
    dialogTitle: {
      display: 'flex',
      alignItems: 'flex-start',
      padding: theme.spacing(1)
    },
    genericMessageWrapper: {
      margin: theme.spacing(2)
    },
    searchWrapper: {
      flex: 1
    },
    searchResults: {
      height: 30,
      display: 'flex',
      paddingTop: theme.spacing(1),
      paddingRight: 0,
      paddingBottom: 0,
      paddingLeft: theme.spacing(2)
    },
    clearSearchIcon: {
      cursor: 'pointer'
    }
  };
};
/**
 *
 *
 * @class Subscriptions
 * @extends {React.Component}
 */


var Subscriptions = /*#__PURE__*/function (_React$Component) {
  _inherits(Subscriptions, _React$Component);

  var _super = _createSuper(Subscriptions);

  /**
   *Creates an instance of Subscriptions.
   * @param {*} props properties
   * @memberof Subscriptions
   */
  function Subscriptions(props) {
    var _this;

    _classCallCheck(this, Subscriptions);

    _this = _super.call(this, props);
    _this.state = {
      subscriptions: null,
      unsubscribedAPIList: [],
      apisNotFound: false,
      subscriptionsNotFound: false,
      isAuthorize: true,
      openDialog: false,
      searchText: ''
    };
    _this.handleSubscriptionDelete = _this.handleSubscriptionDelete.bind(_assertThisInitialized(_this));
    _this.updateSubscriptions = _this.updateSubscriptions.bind(_assertThisInitialized(_this));
    _this.handleSubscribe = _this.handleSubscribe.bind(_assertThisInitialized(_this));
    _this.handleOpenDialog = _this.handleOpenDialog.bind(_assertThisInitialized(_this));
    _this.handleSearchTextChange = _this.handleSearchTextChange.bind(_assertThisInitialized(_this));
    _this.handleSearchTextTmpChange = _this.handleSearchTextTmpChange.bind(_assertThisInitialized(_this));
    _this.handleClearSearch = _this.handleClearSearch.bind(_assertThisInitialized(_this));
    _this.handleEnterPress = _this.handleEnterPress.bind(_assertThisInitialized(_this));
    _this.searchTextTmp = '';
    return _this;
  }
  /**
   *
   *
   * @memberof Subscriptions
   */


  _createClass(Subscriptions, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var applicationId = this.props.match.params.applicationId;
      this.updateSubscriptions(applicationId);
    }
  }, {
    key: "handleOpenDialog",
    value: function handleOpenDialog() {
      this.setState(function (prevState) {
        return {
          openDialog: !prevState.openDialog
        };
      });
    }
    /**
     *
     * Update subscriptions list of Application
     * @param {*} applicationId application id
     * @memberof Subscriptions
     */

  }, {
    key: "updateSubscriptions",
    value: function updateSubscriptions(applicationId) {
      var _this2 = this;

      var client = new _Subscription["default"]();
      var subscriptionLimit = _Settings.app.subscriptionLimit || 1000;
      var promisedSubscriptions = client.getSubscriptions(null, applicationId, subscriptionLimit);
      promisedSubscriptions.then(function (response) {
        _this2.setState({
          subscriptions: response.body.list
        });
      })["catch"](function (error) {
        var status = error.status;

        if (status === 404) {
          _this2.setState({
            subscriptionsNotFound: true
          });
        } else if (status === 401) {
          _this2.setState({
            isAuthorize: false
          });
        }
      });
    }
    /**
     *
     * Handle subscription deletion of application
     * @param {*} subscriptionId subscription id
     * @memberof Subscriptions
     */

  }, {
    key: "handleSubscriptionDelete",
    value: function handleSubscriptionDelete(subscriptionId) {
      var _this3 = this;

      var client = new _Subscription["default"]();
      var promisedDelete = client.deleteSubscription(subscriptionId);
      promisedDelete.then(function (response) {
        if (response.status !== 200) {
          console.log(response);

          _Alert["default"].info('Something went wrong while deleting the Subscription!');

          return;
        }

        _Alert["default"].info('Subscription deleted successfully!');

        var subscriptions = _this3.state.subscriptions;

        for (var endpointIndex in subscriptions) {
          if (Object.prototype.hasOwnProperty.call(subscriptions, endpointIndex) && subscriptions[endpointIndex].subscriptionId === subscriptionId) {
            subscriptions.splice(endpointIndex, 1);
            break;
          }
        }

        _this3.setState({
          subscriptions: subscriptions
        });
      })["catch"](function (error) {
        var status = error.status;

        if (status === 401) {
          _this3.setState({
            isAuthorize: false
          });
        }

        _Alert["default"].error('Error occurred when deleting subscription');
      });
    }
    /**
     * Handle onClick of subscribing to an API
     * @param {*} applicationId application id
     * @param {*} apiId api id
     * @param {*} policy policy
     * @memberof Subscriptions
     */

  }, {
    key: "handleSubscribe",
    value: function handleSubscribe(applicationId, apiId, policy) {
      var _this4 = this;

      var api = new _api["default"]();
      var intl = this.props.intl;

      if (!policy) {
        _Alert["default"].error(intl.formatMessage({
          id: 'Applications.Details.Subscriptions.select.a.subscription.policy',
          defaultMessage: 'Select a subscription policy'
        }));

        return;
      }

      var promisedSubscribe = api.subscribe(apiId, applicationId, policy);
      promisedSubscribe.then(function (response) {
        if (response.status !== 201) {
          _Alert["default"].error(intl.formatMessage({
            id: 'Applications.Details.Subscriptions.error.occurred.during.subscription.not.201',
            defaultMessage: 'Error occurred during subscription'
          }));
        } else {
          if (response.body.status === 'ON_HOLD') {
            _Alert["default"].info(intl.formatMessage({
              defaultMessage: 'Your subscription request has been submitted and is now awaiting ' + 'approval.',
              id: 'subscription.pending'
            }));
          } else {
            _Alert["default"].info(intl.formatMessage({
              id: 'Applications.Details.Subscriptions.subscription.successful',
              defaultMessage: 'Subscription successful'
            }));
          }

          _this4.updateSubscriptions(applicationId);
        }
      })["catch"](function (error) {
        var status = error.status;

        if (status === 401) {
          _this4.setState({
            isAuthorize: false
          });
        }

        _Alert["default"].error(intl.formatMessage({
          id: 'Applications.Details.Subscriptions.error.occurred.during.subscription',
          defaultMessage: 'Error occurred during subscription'
        }));
      });
    }
  }, {
    key: "handleSearchTextChange",
    value: function handleSearchTextChange() {
      this.setState({
        searchText: this.searchTextTmp
      });
    }
  }, {
    key: "handleSearchTextTmpChange",
    value: function handleSearchTextTmpChange(event) {
      this.searchTextTmp = event.target.value;
    }
  }, {
    key: "handleClearSearch",
    value: function handleClearSearch() {
      this.setState({
        searchText: ''
      });
    }
  }, {
    key: "handleEnterPress",
    value: function handleEnterPress(e) {
      if (e.keyCode === 13) {
        e.preventDefault();
        this.handleSearchTextChange();
      }
    }
    /**
     * @inheritdoc
     * @memberof Subscriptions
     */

  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$state = this.state,
          isAuthorize = _this$state.isAuthorize,
          openDialog = _this$state.openDialog,
          searchText = _this$state.searchText;

      if (!isAuthorize) {
        window.location = _Settings.app.context + '/services/configs';
      }

      var _this$state2 = this.state,
          subscriptions = _this$state2.subscriptions,
          apisNotFound = _this$state2.apisNotFound,
          subscriptionsNotFound = _this$state2.subscriptionsNotFound;
      var applicationId = this.props.match.params.applicationId;
      var _this$props = this.props,
          classes = _this$props.classes,
          intl = _this$props.intl;

      if (subscriptions) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: classes.root
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: classes.titleWrapper
        }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
          variant: "h5",
          className: classes.keyTitle
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Applications.Details.Subscriptions.subscription.management",
          defaultMessage: "Subscription Management"
        })), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
          color: "secondary",
          className: classes.buttonElm,
          size: "small",
          onClick: this.handleOpenDialog
        }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], null, "add_circle_outline"), /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Applications.Details.Subscriptions.subscription.management.add",
          defaultMessage: "Subscribe APIs"
        }))), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
          container: true,
          className: "tab-grid",
          spacing: 2
        }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
          item: true,
          xs: 12,
          xl: 11
        }, subscriptions && subscriptions.length === 0 ? /*#__PURE__*/_react["default"].createElement("div", {
          className: classes.genericMessageWrapper
        }, /*#__PURE__*/_react["default"].createElement(_InlineMessage["default"], {
          type: "info",
          className: classes.dialogContainer
        }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
          variant: "h5",
          component: "h3"
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Applications.Details.Subscriptions.no.subscriptions",
          defaultMessage: "No Subscriptions Available"
        })), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
          component: "p"
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Applications.Details.Subscriptions.no.subscriptions.content",
          defaultMessage: "No subscriptions are available for this Application"
        })))) : /*#__PURE__*/_react["default"].createElement("div", {
          className: classes.cardContent
        }, subscriptionsNotFound ? /*#__PURE__*/_react["default"].createElement(_ResourceNotFound["default"], null) : /*#__PURE__*/_react["default"].createElement(_Table["default"], null, /*#__PURE__*/_react["default"].createElement(_TableHead["default"], null, /*#__PURE__*/_react["default"].createElement(_TableRow["default"], null, /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
          className: classes.firstCell
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Applications.Details.Subscriptions.api.name",
          defaultMessage: "API"
        })), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Applications.Details.Subscriptions\n                                                                        .subscription.state",
          defaultMessage: "Lifecycle State"
        })), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Applications.Details.Subscriptions\n                                                                        .subscription.tier",
          defaultMessage: "Subscription Tier"
        })), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Applications.Details.Subscriptions.Status",
          defaultMessage: "Subscription Status"
        })), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Applications.Details.Subscriptions.action",
          defaultMessage: "Action"
        })), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Applications.Details.Subscriptions.invoice",
          defaultMessage: "Invoice"
        })))), /*#__PURE__*/_react["default"].createElement(_TableBody["default"], null, subscriptions && subscriptions.map(function (subscription) {
          return /*#__PURE__*/_react["default"].createElement(_SubscriptionTableData["default"], {
            key: subscription.subscriptionId,
            subscription: subscription,
            handleSubscriptionDelete: _this5.handleSubscriptionDelete
          });
        })))))), /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
          onClose: this.handleOpenDialog,
          "aria-labelledby": "simple-dialog-title",
          open: openDialog,
          maxWidth: "lg",
          fullWidth: true,
          fullScreen: true,
          className: classes.subscribePop
        }, /*#__PURE__*/_react["default"].createElement(_DialogTitle["default"], {
          disableTypography: true,
          className: classes.dialogTitle
        }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
          variant: "h6"
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Applications.Details.Subscriptions.subscription.management.add",
          defaultMessage: "Subscribe APIs"
        })), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
          className: classes.searchWrapper
        }, /*#__PURE__*/_react["default"].createElement(_Paper["default"], {
          component: "form",
          className: classes.searchRoot
        }, searchText && /*#__PURE__*/_react["default"].createElement(_HighlightOff["default"], {
          className: classes.clearSearchIcon,
          onClick: this.handleClearSearch
        }), /*#__PURE__*/_react["default"].createElement(_InputBase["default"], {
          className: classes.input,
          placeholder: intl.formatMessage({
            defaultMessage: 'Search APIs',
            id: 'Applications.Details.Subscriptions.search'
          }),
          inputProps: {
            'aria-label': intl.formatMessage({
              defaultMessage: 'Search APIs',
              id: 'Applications.Details.Subscriptions.search'
            })
          },
          onChange: this.handleSearchTextTmpChange,
          onKeyDown: this.handleEnterPress
        }), /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
          className: classes.iconButton,
          "aria-label": "search",
          onClick: this.handleSearchTextChange
        }, /*#__PURE__*/_react["default"].createElement(_Search["default"], null))), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
          className: classes.searchResults
        }, searchText && searchText !== '' ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
          variant: "caption"
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Applications.Details.Subscriptions.filter.msg",
          defaultMessage: "Filtered APIs for "
        }), searchText)) : /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
          variant: "caption"
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Applications.Details.Subscriptions.filter.msg.all.apis",
          defaultMessage: "Displaying all APIs"
        })))), /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
          "aria-label": "close",
          className: classes.closeButton,
          onClick: this.handleOpenDialog
        }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], null, "cancel"))), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
          padding: 2
        }, /*#__PURE__*/_react["default"].createElement(_APICardView["default"], {
          apisNotFound: apisNotFound,
          subscriptions: subscriptions,
          applicationId: applicationId,
          handleSubscribe: function handleSubscribe(app, api, policy) {
            return _this5.handleSubscribe(app, api, policy);
          },
          searchText: searchText
        }))));
      } else {
        return /*#__PURE__*/_react["default"].createElement(_Progress["default"], null);
      }
    }
  }]);

  return Subscriptions;
}(_react["default"].Component);

Subscriptions.propTypes = {
  classes: _propTypes["default"].shape({}).isRequired,
  match: _propTypes["default"].shape({
    params: _propTypes["default"].shape({
      applicationId: _propTypes["default"].string
    }).isRequired
  }).isRequired,
  intl: _propTypes["default"].shape({}).isRequired
};

var _default = (0, _reactIntl.injectIntl)((0, _styles.withStyles)(styles)(Subscriptions));

exports["default"] = _default;